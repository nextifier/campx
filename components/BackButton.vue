<template>
  <button
    type="button"
    @click="goBack"
    class="text-primary lg:hover:bg-muted flex items-center justify-center gap-x-1 rounded-full border p-3 transition active:scale-95 lg:border-0"
    :class="
      isSemiTransparent
        ? 'bg-background/70 border border-white/10 shadow-lg backdrop-blur-sm'
        : 'bg-background border-border'
    "
    v-ripple
  >
    <Icon name="lucide:arrow-left" class="size-4 shrink-0" />
    <span class="hidden text-sm tracking-tight lg:block">Back</span>
  </button>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const props = defineProps({
  destination: {
    type: String,
  },
  isSemiTransparent: {
    type: Boolean,
    default: false,
  },
});

// Buat computed property untuk menentukan tujuan fallback secara dinamis.
const fallbackDestination = computed(() => {
  // Prioritas 1: Gunakan prop 'destination' jika disediakan secara manual.
  if (props.destination) {
    return props.destination;
  }

  // Prioritas 2: Jika tidak, hitung path induk dari URL saat ini.
  // Contoh: '/news/some-article' menjadi '/news'
  const pathSegments = route.path.split("/").filter((p) => p); // Pecah path dan hapus string kosong

  // Jika path hanya memiliki satu segmen (misal: '/news') atau kurang, kembali ke halaman utama.
  if (pathSegments.length <= 1) {
    return "/";
  }

  pathSegments.pop(); // Hapus segmen terakhir
  return "/" + pathSegments.join("/"); // Gabungkan kembali
});

const goBack = () => {
  // Cek apakah ada histori navigasi di dalam sesi browser saat ini.
  if (window?.history?.length > 2) {
    // Jika ada, kembali ke halaman sebelumnya
    router.back();
  } else {
    // Jika tidak ada, arahkan ke tujuan fallback yang sudah kita tentukan.
    router.push(fallbackDestination.value);
  }
};
</script>
