<template>
    <section class="mt-4 px-3 mx-auto lg:w-11 md:w-full">
        <div class="flex justify-content-between align-items-end">
            <h2 class="my-2 lg:text-3xl text-2xl font-semibold font-gilroy">User Profile</h2>
            <Button size="small"
                class="border-noround-bottom border-1  px-4 py-0 bg-transparent border-gray-100 text-500 h-2rem">
                <div class="inline-flex align-items-center gap-2">

                    <span class="font-semibold">Preview
                        {{ width > 480 ? "Talent Profile" : "" }} </span>
                            <Icon icon="fluent:arrow-circle-up-right-24-regular" width="20" height="20" />
                </div>

            </Button>
        </div>
        <Divider class="m-0" />
        <Breadcrumb class="border-0 pl-0" :model="items">
            <template #separator>
                <Icon icon="fluent:chevron-circle-right-24-regular" class="text-gray-500" width="16" height="16" />
            </template>
        </Breadcrumb>
    </section>
</template>

<script setup>

import Divider from "primevue/divider";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

const items = ref([
    { label: 'Home' },
    { label: 'User Profile' },
]);




</script>

<style lang="scss" scoped></style>
