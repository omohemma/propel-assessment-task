<template>
    <section class="sm:my-8 my-4 px-3">
        <div class="flex align-items-center gap-3">
            <Avatar class="sm:w-5rem sm:h-5rem w-4 h-4" shape="circle">
                <template #default>
                    <div class="relative border-circle bg-transparent">
                        <Image src="./images/profile-image.png" alt="Image" class="w-5rem h-5rem" shape="circle" />
                        <svg class="absolute" style="right: 5px; bottom: 5px" width="18" height="18" viewBox="0 0 18 18"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_2390)">
                                <mask id="mask0_0_2390" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="18" height="18">
                                    <path
                                        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                                        fill="white" />
                                </mask>
                                <g mask="url(#mask0_0_2390)">
                                    <path
                                        d="M0 0H5.87109L8.89453 1.44844L12.1289 0H18V18H12.1289L9.03867 16.5445L5.87109 18H0V0Z"
                                        fill="#6DA544" />
                                    <path d="M5.87109 0H12.1289V18H5.87109V0Z" fill="#EEEEEE" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_2390">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </template>
            </Avatar>
            <div>
                <div class="inline-flex">
                    <h2 class=" mt-0 mb-1 lg:text-5xl text-3xl font-medium font-gilroy text-500">
                        Beth Amarachi
                    </h2>
                    <Icon icon="fluent:checkmark-starburst-24-filled" class="text-blue-300" width="22" height="22" />
                </div>
                <p class="m-0">
                    <span class="text-500">DevOps Engineer</span>
                    &bull;
                    <span class="text-300">Senior level </span>
                    &bull;
                    <a href="" class="text-blue-400">52 claimed perks</a>
                </p>
            </div>
        </div>

        <TopAside class="mt-6 lg:mt-0 lg:hidden flex" />
    </section>
</template>

<script setup>

import Avatar from "primevue/avatar";
import { Icon } from "@iconify/vue";
import Image from "primevue/image";

import TopAside from "./TopAside.vue";
</script>

<style lang="scss" scoped></style>
