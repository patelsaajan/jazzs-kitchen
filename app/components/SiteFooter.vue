<script setup lang="ts">
const contact = ['hello@jazzkitchen.co.uk', '07123 456 789', 'Romford, East London']
const social = ['Instagram — @jazzkitchen', 'Facebook — Jazz Kitchen', 'Local market stall, Saturdays']
const legal = ['Privacy', 'Terms', 'Allergens']
</script>

<template>
  <footer id="contact" class="bg-jk-ink px-6 pb-10 pt-15.5 text-jk-footer-text lg:px-16">
    <div class="mx-auto max-w-328">
      <div class="grid gap-12 border-b border-jk-footer-text/15 pb-10.5 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div class="font-display text-4xl font-extrabold leading-tight text-jk-cream">Jazz<span class="text-jk-saffron">Kitchen</span></div>
          <p class="mt-4 max-w-85 text-base leading-relaxed text-jk-footer-muted">
            Real Punjabi home cooking, delivered fresh from one local family to yours. Launching soon in Romford.
          </p>
        </div>

        <div>
          <div class="mb-4 font-display text-lg font-bold text-jk-cream">Get in touch</div>
          <div class="flex flex-col gap-3 text-base text-jk-footer-muted">
            <div v-for="item in contact" :key="item">{{ item }}</div>
          </div>
        </div>

        <div>
          <div class="mb-4 font-display text-lg font-bold text-jk-cream">Follow along</div>
          <div class="flex flex-col gap-3 text-base text-jk-footer-muted">
            <div v-for="item in social" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 pt-6 text-sm text-jk-footer-dim sm:flex-row sm:items-center sm:justify-between">
        <div>© 2026 Jazz Kitchen. Made with love in Romford.</div>
        <div class="flex gap-6">
          <span v-for="item in legal" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
