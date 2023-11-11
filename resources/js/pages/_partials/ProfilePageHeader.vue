<template>
    <section class="mt-8 px-3 mx-auto lg:w-11 md:w-full">
        <div class="flex justify-content-between">
            <h2 class="my-2 text-3xl font-semibold">User Profile</h2>
            <Button class="border-noround-bottom border-1 bg-transparent text-black-alpha-90">
                <div class="inline-flex gap-2">
                    <span class="font-semibold">Preview Talent Profile</span>
                    <Icon icon="fluent:arrow-circle-up-right-24-regular" width="24"
                          height="24"/>
                </div>

            </Button>
        </div>
        <Divider class="m-0"/>
        <Breadcrumb class="border-0 pl-0" :model="items">
            <template #separator>
                <Icon icon="fluent:chevron-circle-right-24-regular" class="text-gray-500" width="16"
                      height="16"/>
            </template>
        </Breadcrumb>
    </section>
</template>

<script setup>

import Divider from "primevue/divider";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import {Icon} from "@iconify/vue";
import {ref} from "vue";

const items = ref([
    {label: 'Home'},
    {label: 'User Profile'},
]);
</script>

<style lang="scss" scoped>

</style>
