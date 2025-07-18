<template>
  <div class="container flex flex-col items-center lg:max-w-(--breakpoint-sm)">
    <h1 class="section-title text-center font-semibold">
      Frequently Asked Questions
    </h1>

    <div v-if="faq?.list?.length" class="mt-6 flex w-full flex-col gap-y-3">
      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="(item, index) in faq.list"
          :key="index"
          :value="`faq-item-${index}`"
        >
          <AccordionTrigger>
            {{ item.q }}
          </AccordionTrigger>
          <AccordionContent>
            <div class="format-html" v-html="item.a"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <div v-else class="mt-3 text-center text-base tracking-tight sm:text-lg">
      We are gathering commonly asked questions. Please come back later 😉
    </div>

    <div class="mt-10 lg:mt-16">
      <h6
        class="text-center text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl dark:text-white"
      >
        Have any questions? Just send it to us!
      </h6>
      <div class="mt-4 flex items-center justify-center lg:mt-6">
        <nuxt-link
          to="/contact"
          class="flex items-center gap-1.5 rounded-full bg-black p-4 font-medium tracking-tight text-white transition duration-200 hover:bg-blue-600 hover:text-white active:scale-95 dark:bg-white dark:text-black dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <span>Contact us</span>
          <IconArrowUpRight class="h-4" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const faq = new useFAQStore();
</script>
