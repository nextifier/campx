<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white text-black dark:bg-gray-950 dark:text-white"
  >
    <div
      class="container flex flex-col items-center justify-center gap-y-3 text-center"
    >
      <span v-if="error.statusCode" class="text-sm">
        {{ error.statusCode }}
      </span>

      <h1
        v-if="error.statusMessage"
        class="text-4xl font-bold tracking-tighter text-primary"
      >
        {{ error.statusMessage }}
      </h1>

      <p v-if="error.message" class="text-pretty">
        {{
          error.statusCode === 404
            ? "We couldn’t find the page you’re looking for. It might have moved, been renamed, or maybe it never existed in the first place."
            : error.message
        }}
      </p>

      <pre
        v-if="error.stack && error.statusCode === 500"
        class="mt-3 w-full max-w-xl overflow-auto rounded-2xl border px-4 py-6 text-left text-xs leading-normal! text-muted-foreground"
        >{{ error.stack }}</pre
      >

      <button
        @click="handleError"
        class="mt-4 flex items-center gap-x-1 rounded-xl bg-primary px-4 py-3 font-medium tracking-tight text-primary-foreground transition hover:bg-primary/80 active:scale-95"
      >
        <Icon name="lucide:arrow-left" class="size-4 shrink-0" />
        <span>Back to home</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
