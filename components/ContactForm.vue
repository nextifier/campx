<template>
  <div>
    <div v-if="!isMessageSent">
      <h1 class="section-title">
        {{ props.title ?? "Contact us" }}
      </h1>

      <p v-if="props.description" class="mt-3 tracking-[-0.04em] sm:mt-3">
        {{ props.description }}
      </p>

      <form
        @submit.prevent="sendMessage"
        id="contact-form"
        class="mt-8 grid gap-6"
      >
        <div class="input-group">
          <label>Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div v-if="showJobTitleField" class="input-group">
          <label>Job Title</label>
          <input
            v-model="form.jobTitle"
            type="text"
            name="jobTitle"
            id="jobTitle"
          />
        </div>

        <div v-if="showBrandField" class="input-group">
          <label>Brand / Company Name</label>
          <input
            v-model="form.company"
            type="text"
            name="company"
            id="company"
          />
        </div>

        <div v-if="showProductsField" class="input-group">
          <label>Products / Services</label>
          <input
            v-model="form.products"
            type="text"
            name="products"
            id="products"
          />
        </div>

        <div class="input-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="text"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="input-group">
          <label>Phone (WhatsApp)</label>
          <PhoneInputField
            v-model="form.phone"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div v-if="!props.message" class="input-group">
          <label>{{ props.messageLabel ?? "Message" }}</label>
          <textarea
            v-model="form.message"
            name="message"
            id="message"
            class="autogrow"
            :placeholder="props.messagePlaceholder ?? 'Leave a message..'"
            required
          ></textarea>
        </div>

        <!-- <p class="text-muted-foreground text-sm tracking-tight">
          Please ensure you put the correct and active email address and phone
          number. Our team will reach you soon.
        </p> -->

        <button
          type="submit"
          class="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 justify-self-start rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition active:scale-95"
          :disabled="loading"
          v-ripple
        >
          <LoadingSpinner v-if="loading" class="border-background size-4" />
          <span>{{ buttonLabel ?? "Send message" }}</span>
        </button>
      </form>
    </div>

    <div v-else>
      <div class="flex flex-col items-center justify-center text-center">
        <div
          class="bg-muted flex size-16 items-center justify-center rounded-full"
        >
          <Icon
            name="hugeicons:checkmark-circle-03"
            class="text-primary size-8"
          />
        </div>

        <h2
          class="text-primary text-4xl font-semibold tracking-tighter text-balance sm:text-5xl xl:text-6xl"
        >
          Thank you! Your request has been successfully submitted.
        </h2>
        <p class="mt-4">
          Our team will contact you via email or WhatsApp as soon as possible.
        </p>

        <nuxt-link
          to="/"
          @click="dialogs.updateDialog('inquiry', false)"
          class="bg-primary text-primary-foreground mt-8 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight"
          v-ripple
        >
          Okay. Send me back to home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const dialogs = useDialogStore();

const { gtag } = useGtag();

const props = defineProps({
  title: String,
  description: String,
  showBrandField: Boolean,
  showJobTitleField: Boolean,
  showProductsField: Boolean,
  message: String,
  messageLabel: String,
  messagePlaceholder: String,
  buttonLabel: String,
});

const isMessageSent = ref(false);
const loading = ref(false);
const form = reactive({
  name: "",
  jobTitle: "",
  company: "",
  products: "",
  email: "",
  phone: "",
  message: "",
});

const to = ref(
  process.env.NODE_ENV === "production"
    ? ["hello@campx.id"]
    : ["antonius@panoramamedia.co.id"],
);
const cc = ref(
  process.env.NODE_ENV === "production"
    ? [
        "ary@campx.id",
        "tepe@campx.id",
        "yusnianti@campx.id",
        "yolanda@campx.id",
      ]
    : [],
);

const bcc = ref(["activerow@gmail.com"]);

const sendMessage = async () => {
  loading.value = true;

  // Remove "+" if it exists at the start of phone number
  const cleanedPhone = form.phone.startsWith("+")
    ? form.phone.slice(1)
    : form.phone;

  // Conditionally add job title if it exists
  const nameField = form.jobTitle
    ? `${form.name} | ${form.jobTitle}`
    : form.name;

  // Conditionally add products if it exists
  const companyField = form.products
    ? `${form.company}. Product / Service: ${form.products}`
    : form.company;

  await useFetch("https://contact.nextifier.com/api/messages", {
    method: "POST",
    body: {
      name: nameField,
      company: companyField,
      email: form.email,
      phone: cleanedPhone, // Use cleaned phone number
      message: props.message ?? form.message,
      client: "CampX",
      to: to.value,
      cc: cc.value,
      bcc: bcc.value,
    },
    onResponse({ response }) {
      const errors = response._data.errors;

      if (errors) {
        for (let [key, value] of Object.entries(errors)) {
          console.log(value[0]);
          toast.error(value[0]);
        }
      } else {
        form.name = "";
        form.jobTitle = "";
        form.company = "";
        form.products = "";
        form.email = "";
        form.phone = "";
        form.message = "";

        gtag("event", "contact_form_submission");

        isMessageSent.value = true;
      }
    },
  });

  loading.value = false;
};
</script>
