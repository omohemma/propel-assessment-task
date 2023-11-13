<template>
    <div class="flex align-items-center justify-content-between">
        <h2 class="sm:text-2xl text-xl font-normal text-400">
            {{ title }}
        </h2>
        <slot name="button"></slot>
    </div>
    <Divider class="m-0" />
</template>
<script setup>
import Divider from 'primevue/divider';
defineProps({
    title: String,
})
</script>
