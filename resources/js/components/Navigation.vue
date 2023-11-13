<template>
    <ul class="list-none lg:mt-6 mt-0 p-3 m-0">
        <li>
            <ul class="list-none p-0 m-0 overflow-hidden">
                <li class="mb-1" v-for="(link, index) in links" :key="`link-${index}`">
                    <a
                        class="flex align-items-center cursor-pointer gap-3 p-3 border-round text-700 hover:bg-orange-100 transition-duration-150 transition-colors p-ripple">
                        <Icon :icon="link.icon" class="text-400" width="24" height="24" />
                        <span class="font-medium text-sm text-400">{{ link.label }}</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>

    <div>
        <Divider class="my-0" />
        <div class="flex align-items-center gap-3 p-4">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_1498)">
                    <path d="M19.2008 0V6.45953L6.40348 13.8488L0 10.1474V3.69365L6.40348 7.39502L19.2008 0Z"
                        fill="black" />
                    <path
                        d="M25.6051 10.1504V16.6099L12.8058 23.9991L6.4043 20.2978V13.844L12.8058 17.5454L25.6051 10.1504Z"
                        fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_0_1498">
                        <rect width="25.6043" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div class="flex flex-column gap-2">
                <small class="text-sm text-300">Powered by Propel</small>
                <a class="text-500 underline text-xs font-semibold" href="">Learn more</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Divider from 'primevue/divider';

defineProps({
    links: Array
})
</script>

<style lang="scss" scoped></style>
