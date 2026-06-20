<script setup lang="ts">
withDefaults(
  defineProps<{
    heading?: string
    subheading?: string
    /** 'hero' = left-aligned header; 'cta' = centred, larger header. */
    variant?: 'hero' | 'cta'
  }>(),
  {
    heading: 'Be first to know when we open',
    subheading: "Join the list — we'll let you know the moment we start delivering.",
    variant: 'hero'
  }
)

const mealsOptions = ['1–2 meals', '3–4 meals', '5–7 meals', 'Most nights', 'Not sure yet']
const sourceOptions = [
  'Facebook',
  'Instagram',
  'Word of mouth',
  'Flyer / leaflet',
  'Google search',
  'Local market stall',
  'Other'
]

const form = reactive({
  first: '',
  last: '',
  email: '',
  meals: '',
  source: ''
})

const submitted = ref(false)
const name = ref('')

// Shared field styling — applied to the inner control of each Nuxt UI field.
const fieldUi = {
  base: 'w-full rounded-input border-[1.6px] border-jk-border bg-jk-surface px-4 py-3 text-base text-jk-ink transition placeholder:text-jk-placeholder focus-visible:border-jk-saffron focus-visible:ring-2 focus-visible:ring-jk-saffron/20'
}

function onSubmit() {
  name.value = form.first.trim() || 'friend'
  submitted.value = true
}

function reset() {
  submitted.value = false
  name.value = ''
  form.first = ''
  form.last = ''
  form.email = ''
  form.meals = ''
  form.source = ''
}
</script>

<template>
  <div class="flex h-full flex-col">
    <!-- Sign-up form -->
    <form
      v-if="!submitted"
      class="flex h-full flex-col gap-3"
      @submit.prevent="onSubmit"
    >
      <div
        class="flex flex-col gap-1"
        :class="variant === 'cta' ? 'mb-0.5 items-center text-center' : ''"
      >
        <span
          class="font-display font-bold leading-tight text-jk-ink"
          :class="variant === 'cta' ? 'text-3xl' : 'text-2xl'"
        >{{ heading }}</span>
        <span class="text-sm text-jk-subtext">{{ subheading }}</span>
      </div>

      <div class="flex gap-3">
        <UInput
          v-model="form.first"
          required
          placeholder="First name"
          variant="none"
          :ui="fieldUi"
          class="flex-1"
        />
        <UInput
          v-model="form.last"
          required
          placeholder="Last name"
          variant="none"
          :ui="fieldUi"
          class="flex-1"
        />
      </div>

      <UInput
        v-model="form.email"
        type="email"
        required
        placeholder="Email address"
        variant="none"
        :ui="fieldUi"
        class="w-full"
      />

      <div class="flex gap-3">
        <USelect
          v-model="form.meals"
          :items="mealsOptions"
          placeholder="Meals per week?"
          variant="none"
          :ui="fieldUi"
          class="flex-1"
        />
        <USelect
          v-model="form.source"
          :items="sourceOptions"
          placeholder="How did you hear?"
          variant="none"
          :ui="fieldUi"
          class="flex-1"
        />
      </div>

      <UButton
        type="submit"
        block
        color="neutral"
        variant="solid"
        label="Keep me posted"
        trailing-icon="i-lucide-arrow-right"
        class="mt-1 rounded-btn bg-jk-saffron py-4 font-display text-lg font-bold text-jk-ink shadow-cta transition hover:bg-jk-saffron-light active:translate-y-1 active:shadow-cta-active"
      />

      <div class="mt-0.5 text-center text-[13px] text-jk-helper">No spam, ever — just good food and the odd recipe.</div>
    </form>

    <!-- Success state -->
    <div
      v-else
      class="flex h-full flex-col items-center justify-center gap-3.5 p-2 text-center"
    >
      <div class="flex size-16 items-center justify-center rounded-full bg-jk-success text-white">
        <UIcon name="i-lucide-check" class="size-8" />
      </div>
      <div class="font-display text-3xl font-bold text-jk-ink">You're in, {{ name }}!</div>
      <p class="max-w-xs text-base leading-relaxed text-jk-tagline">
        You're on the list. We'll email you the moment Jazz Kitchen starts delivering in Romford.
      </p>
      <UButton
        color="neutral"
        variant="outline"
        label="Add another person"
        trailing-icon="i-lucide-arrow-right"
        class="mt-1 rounded-input border-jk-border bg-jk-surface px-5 py-3 font-display text-base font-semibold text-jk-ink ring-0 transition hover:border-jk-saffron hover:bg-jk-chip-hover"
        @click="reset"
      />
    </div>
  </div>
</template>
