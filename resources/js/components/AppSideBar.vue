<template>
    <div v-if="width > 1024" class="flex flex-column justify-content-between ">
        <Navigation :links="links" />
    </div>
    <Sidebar v-else v-model:visible="visible" @outside="$emit('toggleSidebar', false)" class="w-18rem flex flex-column justify-content-between " :pt="{
        header: {
            class: 'bg-orange-50'
        },
        content: {
            class: 'bg-orange-50'
        }
    }">
        <template #container>
            <div class="flex flex-column h-full bg-orange-50">
                <div class="flex align-items-center justify-content-end px-4 pt-3 flex-shrink-0">
                    <span>
                        <Icon @click="$emit('toggleSidebar', false)" icon="ic:outline-cancel"
                            class="text-400 cursor-pointer" width="28" height="28" />
                    </span>
                </div>
                <Navigation :links="links" />
            </div>
        </template>
    </Sidebar>
</template>

<script setup>
import { ref } from "vue";

import Navigation from "./Navigation.vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button";
import { Icon } from "@iconify/vue";

import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

defineProps({
    visible: Boolean
})

const links = ref([
    { path: '/', label: 'Home', icon: 'fluent:home-24-regular' },
    { path: '/', label: 'Jobs', icon: 'fluent:toolbox-24-regular' },
    { path: '/', label: 'Financial Services', icon: 'fluent:building-bank-24-regular' },
    { path: '/', label: 'Discount & Deals', icon: 'fluent:leaf-three-24-regular' },
    { path: '/', label: 'Opportunities', icon: 'fluent:lightbulb-filament-24-regular' },
    { path: '/', label: 'Refer a Friend', icon: 'fluent:person-add-24-regular' },
    { path: '/', label: 'Community Wall', icon: 'fluent:people-community-24-regular' },
])

</script>
