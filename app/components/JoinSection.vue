<script setup lang="ts">
const chips = ['Always made fresh, never frozen', 'Delivered locally in Romford']
</script>

<template>
  <section id="join" class="relative overflow-hidden bg-jk-ink px-6 py-24 lg:px-16">
    <!-- background photo + warm darkening overlay -->
    <NuxtImg
      src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1600&q=80&auto=format&fit=crop"
      alt=""
      aria-hidden="true"
      loading="lazy"
      class="absolute inset-0 size-full object-cover"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-jk-ink/65 to-jk-ink/60" />

    <div class="relative z-[1] mx-auto flex max-w-[660px] flex-col items-center gap-5">
      <LaunchBadge overlay text="Launching soon in Romford" />

      <!-- form card -->
      <div class="w-full rounded-panel border-[1.5px] border-jk-card-border bg-white p-8 shadow-cta-card lg:p-9">
        <WaitlistForm
          variant="cta"
          heading="Don't miss our first delivery"
          subheading="Pop your details in and we'll let you know the moment Jazz Kitchen opens."
        />
      </div>

      <!-- reassurance chips -->
      <div class="flex flex-wrap justify-center gap-3.5">
        <div
          v-for="chip in chips"
          :key="chip"
          class="inline-flex items-center gap-2.5 rounded-full border border-jk-surface/30 bg-jk-surface/15 px-4.5 py-2.5 text-sm font-semibold text-jk-cream"
        >
          <span class="size-[7px] rounded-full bg-jk-saffron" />
          {{ chip }}
        </div>
      </div>
    </div>
  </section>
</template>
