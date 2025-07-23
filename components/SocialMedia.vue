<template>
  <div class="flex items-center justify-center gap-x-2">
    <SocialLink
      v-if="store.instagram"
      :to="`https://www.instagram.com/${store.instagram}`"
      iconName="hugeicons:instagram"
      :iconClasses="iconClasses"
      label="Instagram"
    />

    <SocialLink
      v-if="store.facebook"
      :to="`https://www.facebook.com/${store.facebook}`"
      iconName="hugeicons:facebook-01"
      :iconClasses="iconClasses"
      label="Facebook"
    />

    <SocialLink
      v-if="store.tiktok"
      :to="`https://www.tiktok.com/@${store.tiktok}`"
      iconName="hugeicons:tiktok"
      :iconClasses="iconClasses"
      label="TikTok"
    />

    <SocialLink
      v-if="store.linkedin"
      :to="`https://www.linkedin.com/company/${store.linkedin}`"
      iconName="hugeicons:linkedin-01"
      :iconClasses="iconClasses"
      label="LinkedIn"
    />

    <SocialLink
      v-if="store.youtube"
      :to="`https://www.youtube.com/@${store.youtube}`"
      iconName="hugeicons:youtube"
      :iconClasses="iconClasses"
      label="YouTube"
    />
  </div>
</template>

<script setup>
const store = new useRootStore();
const props = defineProps({
  iconClasses: {
    type: String,
  },
});
</script>
