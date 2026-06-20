<script setup lang="ts">
interface Slide {
  src?: string
  alt: string
  placeholder?: string
}

const slides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1742599361539-f096753d1100?w=1200&q=80&auto=format&fit=crop',
    alt: 'A fresh home-cooked Punjabi curry'
  },
  {
    src: 'https://images.unsplash.com/photo-1768179669433-bd9d52949c20?w=1200&q=80&auto=format&fit=crop',
    alt: 'Curry, rice and sides on the table'
  },
  {
    alt: 'Jazz in her kitchen',
    placeholder: 'A photo of Jazz in her kitchen'
  }
]

const AUTOPLAY_MS = 4500
const current = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function go(i: number) {
  const n = slides.length
  current.value = ((i % n) + n) % n
}

function restart() {
  if (timer) clearInterval(timer)
  timer = setInterval(() => go(current.value + 1), AUTOPLAY_MS)
}

function prev() {
  go(current.value - 1)
  restart()
}

function next() {
  go(current.value + 1)
  restart()
}

function select(i: number) {
  go(i)
  restart()
}

onMounted(restart)
onUnmounted(() => timer && clearInterval(timer))
</script>

<template>
  <div class="relative flex-1 overflow-hidden rounded-carousel bg-jk-carousel shadow-carousel">
    <!-- slides (crossfade) -->
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="absolute inset-0 transition-opacity duration-600"
      :class="i === current ? 'z-[2] opacity-100' : 'z-[1] opacity-0'"
    >
      <NuxtImg
        v-if="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        loading="lazy"
        class="size-full object-cover"
      />
      <div
        v-else
        class="flex size-full flex-col items-center justify-center gap-3 bg-jk-carousel text-center text-jk-subtext"
      >
        <UIcon name="i-lucide-camera" class="size-10 text-jk-saffron" />
        <span class="max-w-3xs text-base font-semibold">{{ slide.placeholder }}</span>
      </div>
    </div>

    <!-- top gradient for badge legibility -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-jk-ink/40 to-transparent" />

    <!-- launch badge overlay -->
    <div class="pointer-events-none absolute left-4 top-4 z-[4]">
      <LaunchBadge overlay />
    </div>

    <!-- arrows -->
    <button
      type="button"
      aria-label="Previous photo"
      class="absolute left-4 top-1/2 z-[5] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-jk-surface/90 text-jk-ink shadow-badge transition-colors hover:bg-jk-surface"
      @click="prev"
    >
      <UIcon name="i-lucide-chevron-left" class="size-6" />
    </button>
    <button
      type="button"
      aria-label="Next photo"
      class="absolute right-4 top-1/2 z-[5] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-jk-surface/90 text-jk-ink shadow-badge transition-colors hover:bg-jk-surface"
      @click="next"
    >
      <UIcon name="i-lucide-chevron-right" class="size-6" />
    </button>

    <!-- dots -->
    <div class="absolute bottom-4 right-4 z-[5] flex items-center gap-2">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        type="button"
        :aria-label="`Go to photo ${i + 1}`"
        :aria-current="i === current"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="i === current ? 'w-7 bg-jk-red' : 'w-2.5 bg-jk-ink/20'"
        @click="select(i)"
      />
    </div>
  </div>
</template>
