<script setup lang="ts">
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80&auto=format&fit=crop',
    alt: 'Jazz cooking in her kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop',
    alt: 'Fresh whole spices'
  },
  {
    src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&q=80&auto=format&fit=crop',
    alt: 'Family gathered at the table'
  }
]
</script>

<template>
  <section id="about" class="relative overflow-hidden bg-jk-cream px-6 py-20 lg:px-16 lg:pb-[100px] lg:pt-[86px]">
    <div class="pointer-events-none absolute -left-32 top-10 size-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,59,27,0.10),rgba(194,59,27,0)_70%)]" />

    <div class="relative z-[1] mx-auto max-w-[1080px]">
      <div class="mb-4 text-sm font-bold uppercase tracking-[2px] text-jk-red">Our story</div>

      <!-- big quote -->
      <div class="flex items-start gap-5">
        <div class="shrink-0 font-display text-[120px] font-extrabold leading-[0.7] text-jk-saffron">&ldquo;</div>
        <blockquote class="pt-1.5 font-display text-3xl font-bold tracking-tight text-jk-ink lg:text-quote">
          I never set out to start a business — I just cooked the food my family loved, and the neighbours kept knocking for more.
        </blockquote>
      </div>

      <!-- photo strip + signature -->
      <div class="mt-10 flex flex-wrap items-end justify-between gap-6">
        <div class="flex flex-wrap gap-4.5">
          <NuxtImg
            v-for="photo in photos"
            :key="photo.src"
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
            class="size-52 rounded-photo object-cover shadow-photo"
          />
        </div>
        <div class="flex flex-col items-end gap-1.5 pb-1.5 text-right">
          <div class="font-display text-[38px] font-extrabold leading-none text-jk-red">Jazz</div>
          <div class="max-w-[200px] text-[15px] font-semibold text-jk-subtext">Founder &amp; cook,<br>Jazz Kitchen · Romford</div>
        </div>
      </div>
    </div>
  </section>
</template>
