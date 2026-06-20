<script setup lang="ts">
type Spice = 'mild' | 'medium' | 'hot'

interface Dish {
  name: string
  desc: string
  spice: Spice
  spiceLabel: string
  meta: string
  rowMeta: string
  tag: string
  img: string
}

const dishes: Dish[] = [
  {
    name: 'Butter Chicken',
    desc: 'Marinated overnight, grilled, then folded through a slow-simmered tomato & cream gravy with a hush of fenugreek. The one everyone asks for.',
    spice: 'mild',
    spiceLabel: 'Mild',
    meta: 'Slow-cooked · serves 2',
    rowMeta: 'Mild · serves 2',
    tag: 'House favourite',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1100&q=80&auto=format&fit=crop'
  },
  {
    name: 'Tarka Daal',
    desc: 'Yellow lentils tempered with cumin, garlic & ghee, finished with a sizzle of fresh coriander. Pure comfort in a bowl.',
    spice: 'mild',
    spiceLabel: 'Mild',
    meta: 'Vegetarian',
    rowMeta: 'Mild · vegetarian',
    tag: 'Everyday comfort',
    img: 'https://images.unsplash.com/photo-1626500155537-17b4b6f0e3c9?w=1100&q=80&auto=format&fit=crop'
  },
  {
    name: 'Saag Paneer',
    desc: 'Silky slow-cooked spinach & mustard greens with soft cubes of home-pressed paneer and warm whole spices.',
    spice: 'medium',
    spiceLabel: 'Medium',
    meta: 'Vegetarian',
    rowMeta: 'Medium · vegetarian',
    tag: '',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1100&q=80&auto=format&fit=crop'
  },
  {
    name: 'Chana Masala',
    desc: 'Chickpeas simmered in a tangy, dry-roasted spice gravy with fresh ginger and a squeeze of lemon.',
    spice: 'medium',
    spiceLabel: 'Medium',
    meta: 'Vegan',
    rowMeta: 'Medium · vegan',
    tag: '',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1100&q=80&auto=format&fit=crop'
  },
  {
    name: 'Aloo Gobi',
    desc: 'Potato & cauliflower roasted down with turmeric, cumin & coriander until edges turn golden and sweet.',
    spice: 'mild',
    spiceLabel: 'Mild',
    meta: 'Vegan',
    rowMeta: 'Mild · vegan',
    tag: '',
    img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=1100&q=80&auto=format&fit=crop'
  },
  {
    name: 'Lamb Curry',
    desc: 'Tender, bone-in lamb braised low and slow with whole garam spices until it falls clean off the bone.',
    spice: 'hot',
    spiceLabel: 'Hot',
    meta: 'Slow-cooked',
    rowMeta: 'Hot · slow-cooked',
    tag: "Chef's special",
    img: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=1100&q=80&auto=format&fit=crop'
  }
]

const spiceClasses: Record<Spice, string> = {
  mild: 'bg-jk-mild-bg text-jk-mild-text border-jk-mild-border',
  medium: 'bg-jk-medium-bg text-jk-medium-text border-jk-medium-border',
  hot: 'bg-jk-hot-bg text-jk-hot-text border-jk-hot-border'
}

const selected = ref(0)
const dish = computed(() => dishes[selected.value]!)
</script>

<template>
  <section id="recipes" class="border-t-2 border-jk-card-border bg-jk-cream-light px-6 py-20 lg:px-16 lg:py-21.5">
    <div class="mx-auto max-w-328">
      <!-- header -->
      <div class="mb-11 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-155">
          <div class="mb-3 text-sm font-bold uppercase tracking-widest text-jk-red">Straight from the pot</div>
          <h2 class="font-display text-4xl font-extrabold tracking-tight text-jk-ink lg:text-section">A taste of the menu</h2>
          <p class="mt-3.5 text-lg leading-relaxed text-jk-tagline">
            The dishes Jazz grew up on — slow-cooked, properly spiced, and made the way her mum taught her. Here's a little of what's coming to your door.
          </p>
        </div>
        <div class="inline-flex shrink-0 items-center rounded-full border-2 border-jk-saffron bg-jk-badge px-4.5 py-2.5 font-display text-sm font-bold text-jk-badge-text">
          Full menu at launch
        </div>
      </div>

      <!-- interactive menu -->
      <div class="grid items-stretch gap-6 lg:grid-cols-[1.08fr_1fr]">
        <!-- LEFT: selected dish -->
        <div class="relative min-h-72 overflow-hidden rounded-panel border-2 border-jk-card-border bg-jk-carousel shadow-panel sm:min-h-96 lg:min-h-124">
          <NuxtImg
            :src="dish.img"
            :alt="dish.name"
            loading="lazy"
            class="absolute inset-0 size-full object-cover"
          />
          <div class="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-38% to-jk-ink/75" />

          <span
            v-if="dish.tag"
            class="absolute left-7 top-6 inline-flex items-center rounded-full bg-jk-red px-4 py-2 font-display text-sm font-bold tracking-wide text-white"
          >{{ dish.tag }}</span>

          <div class="absolute inset-x-5 bottom-5 flex flex-col gap-2 lg:inset-x-7 lg:bottom-7 lg:gap-3">
            <div class="font-display text-3xl font-extrabold leading-none tracking-tight text-jk-surface sm:text-4xl lg:text-5xl">{{ dish.name }}</div>
            <p class="hidden max-w-115 text-base leading-relaxed text-white/90 sm:block lg:text-lg">{{ dish.desc }}</p>
            <div class="flex items-center gap-3 lg:mt-1">
              <span
                class="inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-bold"
                :class="spiceClasses[dish.spice]"
              >{{ dish.spiceLabel }}</span>
              <span class="text-sm font-semibold text-white/85">{{ dish.meta }}</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: clickable number board -->
        <div class="flex flex-col justify-between rounded-panel border-2 border-jk-card-border bg-white p-3 shadow-panel">
          <button
            v-for="(d, i) in dishes"
            :key="d.name"
            type="button"
            class="flex items-center gap-4.5 rounded-row px-4.5 py-3.5 text-left transition-colors"
            :class="i === selected ? 'bg-jk-row-active shadow-row-active' : 'hover:bg-jk-row-active/50'"
            :aria-pressed="i === selected"
            @click="selected = i"
          >
            <span
              class="w-9 text-center font-display text-4xl font-extrabold leading-none"
              :class="i === selected ? 'text-jk-red' : 'text-jk-num-muted'"
            >{{ i + 1 }}</span>
            <span class="flex flex-1 flex-col gap-0.5">
              <span class="font-display text-xl font-bold leading-tight text-jk-ink">{{ d.name }}</span>
              <span class="text-sm font-semibold text-jk-subtext">{{ d.rowMeta }}</span>
            </span>
            <UIcon name="i-lucide-chevron-right" class="size-5 text-jk-chevron" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
