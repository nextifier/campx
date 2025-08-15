<template>
  <nav v-if="headings.length > 0" class="space-y-2">
    <h3 v-if="showLabel" class="text-primary font-semibold tracking-tighter">
      On this page
    </h3>
    <ul class="tracking-tight">
      <li v-for="heading in headings" :key="heading.id">
        <a
          :href="`#${heading.id}`"
          @click.prevent="scrollToHeading(heading.id)"
          class="block border-l-2 py-1 pl-3 text-sm !leading-normal font-medium transition-all"
          :class="[
            {
              'border-accent text-primary': activeHeadingId === heading.id,
              'text-muted-foreground hover:text-primary':
                activeHeadingId !== heading.id,
              'pl-6': ['H3', 'H4', 'H5', 'H6'].includes(heading.tag),
            },
          ]"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  showLabel: {
    type: Boolean,
    default: true,
  },
  contentSelector: {
    type: String,
    required: true,
  },
});

const headings = ref([]);
const activeHeadingId = ref(null);
let observer = null;

const scrollToHeading = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    activeHeadingId.value = id;
  }
};

const emit = defineEmits(["headings-found"]);

onMounted(async () => {
  await nextTick();

  let selector = props.contentSelector;

  // Cek apakah selector adalah ID yang diawali dengan angka.
  // Regex \d mengecek adanya digit.
  if (selector.startsWith("#") && /\d/.test(selector.charAt(1))) {
    // Ubah selector menjadi format attribute selector yang valid.
    // Contoh: '#5-slug' menjadi '[id="5-slug"]'
    selector = `[id="${selector.substring(1)}"]`;
  }

  const contentElement = document.querySelector(selector); // Gunakan selector yang sudah divalidasi
  if (!contentElement) {
    console.warn(
      `[ScrollSpy] Elemen konten dengan selector "${props.contentSelector}" tidak ditemukan.`,
    );
    return;
  }

  // 1. Temukan semua heading h2 dan h3, lalu buat data untuk list
  const headingNodes = contentElement.querySelectorAll("h2, h3, h4, h5, h6");
  const foundHeadings = []; // Gunakan array sementara
  headingNodes.forEach((node, index) => {
    const id = node.id || `heading-${index}`;
    node.id = id;
    foundHeadings.push({
      id: id,
      text: node.innerText,
      tag: node.tagName,
    });
  });

  headings.value = foundHeadings;

  // 2. Kirim event 'headings-found' beserta datanya ke komponen induk
  emit("headings-found", headings.value);

  // Jika tidak ada heading, hentikan proses
  if (headings.value.length === 0) return;

  // 2. Setup IntersectionObserver untuk "mengintai" heading
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeHeadingId.value = entry.target.id;
      }
    });
  };

  observer = new IntersectionObserver(observerCallback, {
    // rootMargin menentukan "trigger area". Heading akan aktif saat berada
    // di antara 10% dari atas dan 40% dari bawah layar.
    rootMargin: "-10% 0px -40% 0px",
    threshold: 1.0,
  });

  // 3. Mulai observasi setiap heading
  headings.value.forEach((heading) => {
    const element = document.getElementById(heading.id);
    if (element) {
      observer.observe(element);
    }
  });
});

// 4. Lakukan pembersihan saat komponen dihancurkan untuk mencegah memory leak
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
