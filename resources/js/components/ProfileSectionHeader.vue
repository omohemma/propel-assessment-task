<template>
  <div class="flex align-items-center justify-content-between">
    <h2 class="text-2xl font-normal">
      {{ title}}
    </h2>

      <slot name="button"></slot>

  </div>
  <Divider class="m-0"/>
</template>
<script setup>
import Divider from 'primevue/divider';
defineProps({
    title: String,
})
</script>
