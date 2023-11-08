<template>
    <div>
        <Header/>

        <div class="grid mx-auto lg:w-11 md:w-full">
            <div class="lg:col-9 col-12">

                <!-- Personal Info -->
                <section class="my-8">
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
                            <p class="m-0 line-height-3">
                                Nigeria</p>
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

                <!-- Work Info -->
                <section class="mb-8">
                    <ProfileSectionHeader :title="'Work Info'">
                        <template #button>
                            <Button class="bg-black-alpha-80" size="small" label="Add" rounded>
                                <template #icon>
                                    <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20"/>
                                </template>
                            </Button>
                        </template>
                    </ProfileSectionHeader>

                    <div class="grid mt-3">
                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Employment status</h5>
                            <p class="m-0 line-height-3">Actively seeking opportunities</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Primary role</h5>
                            <p class="m-0 line-height-3">DevOps Engineer</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Github/Portfolio</h5>
                            <p class="m-0 line-height-3">https://amarachi.dev</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Preferred work</h5>
                            <p class="m-0 line-height-3">Full-time, Contract, Remote</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Relocation abroad</h5>
                            <p class="m-0 line-height-3">Yes</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Years of experience</h5>
                            <p class="m-0 line-height-3">8 years</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Preferred salary <span class="font-light"> (monthly)</span></h5>
                            <p class="m-0 line-height-3">
                                €13,500</p>
                        </div>

                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Secondary roles</h5>
                            <p class="m-0 line-height-3">Data Engineer, Cybersecurity</p>
                        </div>


                        <div class="md:col-4 col-12">
                            <h5 class="text-base mb-2">Notice period

                            </h5>
                            <p class="m-0 line-height-3"> 3 weeks</p>
                        </div>
                    </div>
                </section>

                <!-- Work Experience -->
                <section class="mb-8">
                    <ProfileSectionHeader :title="'Work Experience'">
                        <template #button>
                            <Button class="bg-black-alpha-80" size="small" label="Edit" rounded>
                                <template #icon>
                                    <Icon icon="fluent:edit-24-regular" class="mr-1" width="20" height="20"/>
                                </template>
                            </Button>
                        </template>
                    </ProfileSectionHeader>
                </section>

                <!-- Education -->
                <section class="mb-8">
                    <ProfileSectionHeader :title="'Education'">
                        <template #button>
                            <Button class="bg-black-alpha-80" size="small" label="Add" rounded>
                                <template #icon>
                                    <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20"/>
                                </template>
                            </Button>
                        </template>
                    </ProfileSectionHeader>
                </section>

                <!-- Skills -->
                <section class="mb-8">
                    <ProfileSectionHeader :title="'Skills'">
                        <template #button>
                            <Button class="bg-black-alpha-80" size="small" label="Add" rounded>
                                <template #icon>
                                    <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20"/>
                                </template>
                            </Button>
                        </template>
                    </ProfileSectionHeader>

                    <div class="mt-3">
                        <div class="mb-3">
                            <h5 class="text-base mb-3">Tools & Technologies</h5>
                            <div>
                                <Chip v-for="({name, years_of_experience }, index) in skills.tools_and_technologies"
                                      :key="`tool-${index}`" class="px-3 py-2 m-1 bg-white border-1">
                                    <span class="mr-2 text-base text-black-alpha-80">{{ name }}</span>
                                    <span class="text-gray-500">{{ years_of_experience }}</span>
                                </Chip>
                            </div>
                        </div>

                        <div class="mb-3">
                            <h5 class="text-base mb-3">Industry Knowledge</h5>
                            <div>
                                <Chip v-for="({name, years_of_experience }, index) in skills.industry_knowledge"
                                      :key="`industrial-knowledge-${index}`" class="px-3 py-2 m-1 bg-white border-1">
                                    <span class="mr-2 text-base text-black-alpha-80">{{ name }}</span>
                                    <span class="text-gray-500">{{ years_of_experience }}</span>
                                </Chip>
                            </div>
                        </div>

                        <div>
                            <h5 class="text-base mb-3">Interpersonal Skills</h5>
                            <Chip v-for="({name, rating }, index) in skills.interpersonal_skills"
                                  :key="`interpersonal-skill-${index}`" class="px-3 py-2 m-1 bg-white border-1">
                                <span class="mr-2   text-base text-black-alpha-80">{{ name }}</span>
                                <Rating :model-value="rating" :stars="rating" :cancel="false" readonly/>
                            </Chip>
                        </div>

                    </div>
                </section>

                <!-- Past Projects -->
                <section class="mb-8">
                    <ProfileSectionHeader :title="'Past projects'">
                        <template #button>
                            <Button class="bg-black-alpha-80" size="small" label="Add" rounded>
                                <template #icon>
                                    <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20"/>
                                </template>
                            </Button>
                        </template>
                    </ProfileSectionHeader>

                    <div class="grid mt-3">
                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>

                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>

                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>

                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>

                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>

                        <div class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"

                            >
                                <template #header>
                                </template>
                                <template #title>
                                    <h4 class="my-1 text-lg text-black-alpha-90">Creating a public health
                                        dashboard </h4>
                                </template>
                                <template #content>
                                    <p class="m-0 text-sm">
                                        Elevating e-commerce with seamless checkout redesign for enhanced user
                                        experience
                                    </p>
                                </template>
                                <template #footer>
                                    <Button class="p-0 text-blue-600 text-sm" link label="View project"/>
                                </template>
                            </Card>
                        </div>


                    </div>
                </section>
            </div>

            <div class="lg:col-3 col-12">
            </div>
        </div>


    </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import ProfileSectionHeader from "./components/ProfileSectionHeader.vue";

import Button from "primevue/button";
import Chip from 'primevue/chip';
import Rating from 'primevue/rating';
import Card from 'primevue/card';


import {Icon} from "@iconify/vue";

import {ref} from "vue";

const skills = ref({
    'tools_and_technologies': [
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
    ],
    'industry_knowledge': [
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
    ],
    'interpersonal_skills': [
        {
            name: 'Communication',
            rating: 3
        },
        {
            name: 'Communication',
            rating: 2
        }
    ]
})

</script>
