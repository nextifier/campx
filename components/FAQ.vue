<template>
  <div class="container flex flex-col items-center lg:max-w-(--breakpoint-sm)">
    <h1 class="section-title text-center">Mungkin Kamu Nanya Ini?</h1>

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
        class="text-primary text-center text-3xl !leading-[1.3] font-semibold tracking-tighter sm:text-5xl"
      >
        Punya pertanyaan lain? Hubungi kami aja!
      </h6>
      <div class="mt-4 flex items-center justify-center lg:mt-6">
        <nuxt-link
          to="/contact"
          class="bg-primary text-primary-foreground hover:bg-primary/80 flex items-center justify-center rounded-xl px-4 py-3 font-semibold tracking-tight transition active:scale-95"
          v-ripple
        >
          <span>Contact us</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const faq = new useFAQStore();
</script>
