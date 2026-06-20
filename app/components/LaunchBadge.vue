<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Render the translucent, shadowed variant used over a photo / dark bg. */
    overlay?: boolean
    text?: string
  }>(),
  { text: 'Launching in Romford' }
)
</script>

<template>
  <div
    class="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-jk-saffron px-4 py-2 text-sm font-bold text-jk-badge-text"
    :class="overlay ? 'bg-jk-surface/95 shadow-badge' : 'bg-jk-badge'"
  >
    <span class="size-2 rounded-full bg-jk-red animate-pulse-dot" />
    {{ text }}
  </div>
</template>
