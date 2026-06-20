<script setup lang="ts">
const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <section class="relative overflow-hidden bg-jk-cream px-6 py-10 lg:px-16 lg:py-16">
    <!-- soft decorative warmth -->
    <div class="pointer-events-none absolute -right-36 -top-40 size-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,150,43,0.20),rgba(232,150,43,0)_70%)]" />
    <div class="pointer-events-none absolute -bottom-44 -left-32 size-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,59,27,0.13),rgba(194,59,27,0)_70%)]" />

    <div class="relative z-[1] mx-auto grid max-w-[1312px] gap-14 lg:h-[752px] lg:grid-cols-[0.82fr_1.18fr]">
      <!-- LEFT: brand + form -->
      <div class="flex h-full flex-col gap-5">
        <div>
          <div class="font-display text-6xl font-extrabold tracking-tight text-jk-ink lg:text-wordmark">Jazz</div>
          <div class="inline-block border-b-[6px] border-jk-saffron pb-0.5 font-display text-6xl font-extrabold tracking-tight text-jk-red lg:text-wordmark">Kitchen</div>
        </div>

        <p class="max-w-md text-lg leading-relaxed text-jk-tagline">
          Real Punjabi home cooking, made by Jazz and delivered fresh to your door — proper food, from one local family to yours.
        </p>

        <div class="flex min-h-0 flex-1 flex-col rounded-card border-[1.5px] border-jk-card-border bg-white p-6 shadow-card">
          <WaitlistForm />
        </div>
      </div>

      <!-- RIGHT: carousel + secondary links -->
      <div class="flex h-full flex-col gap-4">
        <PhotoCarousel />

        <nav class="flex gap-3.5">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex-1 rounded-chip border-[1.6px] border-jk-border bg-jk-surface py-4 text-center font-display text-lg font-semibold text-jk-ink shadow-chip transition hover:-translate-y-0.5 hover:border-jk-saffron hover:bg-jk-chip-hover"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>
