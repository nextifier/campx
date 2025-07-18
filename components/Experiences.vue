<template>
  <section id="experiences">
    <div class="container">
      <h1 class="section-title">Experiences</h1>
    </div>

    <ExperienceSlider class="mt-4" :items="experiences" />

    <pre
      class="container overflow-scroll rounded-xl bg-gray-950 p-4 text-sm text-gray-300 sm:p-6"
      >{{ experiences }}</pre
    >
  </section>
</template>

<script setup>
const experiences = useExperienceStore().list;
</script>
