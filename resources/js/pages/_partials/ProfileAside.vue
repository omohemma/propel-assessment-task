<template>
    <aside class="lg:mt-8 mt-0 mx-auto flex gap-4 flex-column">

        <TopAside class="hidden lg:flex" />

        <Panel style="box-shadow: none" class="border-1 border-round border-orange-100 bg-orange-50" :pt="{
            header: {
                class: 'my-0 p-0 px-2 bg-transparent border-0'
            },
            title: { class: 'my-0' },
            content: {
                class: 'p-0'
            },
        }" toggleable>
            <template #header>
                <h4 class="m-0 text-500 font-medium">Pending tasks </h4>
            </template>
            <template #icons>
                <Icon icon=" fluent:chevron-down-24-regular" class="mr-1 text-300" width="20" height="20" />
            </template>
            <div class="p-2 bg-orange-50">
                <p class="m-0  text-300 text-sm">
                    Please complete these tasks to get the full Propel experience.
                </p>
                <ul class="list-none -ml-5">
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Complete your profile
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Complete your KYC
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Join a community
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Apply to join Talent Pool
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Claim a perk
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Redeem a perk
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Refer a friend
                    </li>
                    <li class="flex align-items-center gap-2 text-300 text-sm mb-3 line-through">
                        <Icon icon="material-symbols:check-circle" class="mr-1 text-blue-200" width="20" height="20" />
                        Log in the mobile app
                    </li>
                </ul>
            </div>

        </Panel>

        <Divider class="my-2" />

        <Card style="box-shadow: none" class="border-round-xl bg-blue-200" :pt="{
            title: { class: 'my-0' },
            content: {
                class: 'p-0 pt-1 '
            },
        }
            ">
            <template #title>
                <h4 class="font-semibold text-500 text-base p-0 m-0">Helpful resources</h4>
            </template>
            <template #content>
                <p class="m-0 mb-2 text-sm text-400">
                    Learn how to get the best from the Propel platform.
                </p>
                <a href="#" class="text-500 text-sm font-semibold inline-flex align-items-center no-underline">Visit blog
                    <Icon icon="fluent:caret-right-24-filled" class="mr-1" width="14" height="14" />
                </a>
            </template>
        </Card>
    </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import Card from "primevue/card";
import Panel from "primevue/panel";
import Divider from "primevue/divider";

import TopAside from "./TopAside.vue";

</script>

<style scoped></style>
