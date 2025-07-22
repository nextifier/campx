<template>
  <section id="experiences" class="space-y-8 lg:space-y-16">
    <div v-for="(category, index) in categories" :key="index">
      <div class="container">
        <h1 class="section-title">{{ category.title }}</h1>
        <p v-if="category.description" class="section-description">
          {{ category.description }}
        </p>
      </div>

      <ExperienceSlider class="mt-4 lg:mt-6" :items="category.list" />
    </div>
  </section>
</template>

<script setup>
const experiences = useExperienceStore();

const categories = [
  {
    title: "Paket Personal",
    description: "",
    list: experiences.getItemsByCategories("Paket Personal"),
  },
  {
    title: "Aktivitas",
    description: "",
    list: experiences.getItemsByCategories("Activity"),
  },
  {
    title: "Paket Grup",
    description: "",
    list: experiences.getItemsByCategories("Paket Grup"),
  },
];
</script>
