<template>
    <section class="my-8 px-3">
        <ProfileSectionHeader :title="'Personal Info'">
            <template #button>
                <Button class="bg-black-alpha-80" size="small" label="Edit" rounded>
                    <template #icon>
                        <Icon icon="fluent:edit-24-regular" class="mr-1" width="20" height="20"/>
                    </template>
                </Button>
            </template>
        </ProfileSectionHeader>
        <div class="grid mt-3">
            <div class="md:col-4 sm:col-6 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1">Full name</h5>
                <p class="m-0 line-height-3">
                    Beth Amarachi</p>
            </div>

            <div class="md:col-4 sm:col-6 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1">Email Address</h5>
                <p class="m-0 line-height-3">
                    bethamarachi@gmail.com</p>
            </div>

            <div class="md:col-4 col-0">
            </div>

            <div class="md:col-4 sm:col-6 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1">Gender</h5>
                <p class="m-0 line-height-3">
                    Female</p>
                <div class="inline-flex align-items-center">
                    <Icon icon="fluent:lock-closed-24-regular" class="mr-1" width="20" height="20"/>
                    <small class="font-bold">Only visible to you</small>
                </div>

            </div>

            <div class="md:col-4 sm:col-6 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1">Country of Residence</h5>
                <p class="m-0 line-height-3 flex align-items-center gap-2">
                    Nigeria
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_2390)">
                            <mask id="mask0_0_2390" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                  width="18" height="18">
                                <path
                                    d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                                    fill="white"/>
                            </mask>
                            <g mask="url(#mask0_0_2390)">
                                <path
                                    d="M0 0H5.87109L8.89453 1.44844L12.1289 0H18V18H12.1289L9.03867 16.5445L5.87109 18H0V0Z"
                                    fill="#6DA544"/>
                                <path d="M5.87109 0H12.1289V18H5.87109V0Z" fill="#EEEEEE"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_0_2390">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>


                </p>
            </div>

            <div class="md:col-4 sm:col-6 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1">Phone Number</h5>
                <p class="m-0 line-height-3">+234-9283924450</p>
            </div>
        </div>

        <div class="md:w-10 w-full">
            <h5 class="text-base md:mb-2 md:mt-4  my-1">About me</h5>
            <p class="m-0 line-height-3">I am a DevOps and Big Data engineer with 4 years experience and
                in-depth knowledge of R, Python, PowerBI and Tableau. I have an Msc. in Statistics and a
                big part of my career has been spent working at Jumia Nigeria, working as a BI Analyst
                and later a Commercial Planning Analyst.</p>
        </div>

    </section>
</template>

<script setup>

import {Icon} from "@iconify/vue";
import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";
import Button from "primevue/button";
</script>

<style lang="scss" scoped>

</style>
