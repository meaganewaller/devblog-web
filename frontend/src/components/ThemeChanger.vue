<script setup lang="ts">
  interface Props {
    class?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    class: 'fa-solid fa-moon'
  })
</script>

<template>
  <div class="bg-transparent fixed top-3 right-3 sm:top-6 sm:right-6 text-blue-600 dark:text-white text-2xl">
    <font-awesome-icon :icon="props.class" />
  </div>
</template>
