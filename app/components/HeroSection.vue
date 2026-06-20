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
    <div class="pointer-events-none absolute -right-36 -top-40 size-105 rounded-full bg-[radial-gradient(circle_at_center,rgba(232,150,43,0.20),rgba(232,150,43,0)_70%)]" />
    <div class="pointer-events-none absolute -bottom-44 -left-32 size-95 rounded-full bg-[radial-gradient(circle_at_center,rgba(194,59,27,0.13),rgba(194,59,27,0)_70%)]" />

    <!--
      Mobile:  1) brand/tagline  2) carousel+nav  3) form
      Desktop: left col = brand/tagline (row1) + form (row2)
               right col = carousel+nav (spans both rows)
    -->
    <div class="relative z-10 mx-auto grid max-w-328 gap-5 lg:h-188 lg:grid-cols-[0.82fr_1.18fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-5">

      <!-- 1. Brand + tagline -->
      <div class="flex flex-col gap-5 lg:col-start-1 lg:row-start-1 lg:self-start">
        <div>
          <div class="font-display text-5xl font-extrabold tracking-tight text-jk-ink sm:text-6xl lg:text-wordmark">Jazz</div>
          <div class="inline-block border-b-[6px] border-jk-saffron pb-0.5 font-display text-5xl font-extrabold tracking-tight text-jk-red sm:text-6xl lg:text-wordmark">Kitchen</div>
        </div>
        <p class="max-w-md text-lg leading-relaxed text-jk-tagline">
          Real Punjabi home cooking, made by Jazz and delivered fresh to your door — proper food, from one local family to yours.
        </p>
      </div>

      <!-- 2. Carousel + nav (right column on desktop, middle on mobile) -->
      <div class="flex flex-col gap-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full">
        <PhotoCarousel />

        <nav class="flex gap-3.5">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex-1 rounded-chip border-2 border-jk-border bg-jk-surface py-4 text-center font-display text-lg font-semibold text-jk-ink shadow-chip transition hover:-translate-y-0.5 hover:border-jk-saffron hover:bg-jk-chip-hover"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>

      <!-- 3. Form card (left column row 2 on desktop, last on mobile) -->
      <div class="flex flex-col rounded-card border-2 border-jk-card-border bg-white p-6 shadow-card lg:col-start-1 lg:row-start-2 lg:h-full">
        <WaitlistForm />
      </div>

    </div>
  </section>
</template>
