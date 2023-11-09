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

                    <div class="mt-3">
                        <Card v-for="(n, index) in 3" :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"
                              @mouseenter="hoverOnWorkExperienceCard(index)"
                              @mouseleave="hoverOnWorkExperienceCard(index)"
                              class="hover:bg-blue-100 hover:cursor-auto mb-3"
                        >
                            <template #title>
                                <div class="flex align-items-center justify-content-between h-2rem">
                                    <h4 class="my-1 text-lg text-black-alpha-90">Senior Software Engineer, Growth</h4>
                                    <div v-show="hover[index]">
                                        <Button size="small" class="bg-white mr-2 p-1" rounded>
                                            <template #icon>
                                                <Icon icon="fluent:edit-24-regular" color="blue" width="20"
                                                      height="20"/>
                                            </template>
                                        </Button>

                                        <Button size="small" class="bg-white p-1" rounded>
                                            <template #icon>
                                                <Icon icon="fluent:delete-24-regular" color="red" width="20"
                                                      height="20"/>
                                            </template>
                                        </Button>


                                    </div>
                                </div>

                            </template>
                            <template #subtitle>
                                <div class="flex align-items-center">
                                    <a href="" class="text-black-alpha-90">Speedaf Nigeria</a>
                                    <Divider class="py-2 px-0 m-1" layout="vertical"/>
                                    <span>Lagos, Nigeria</span>
                                    <Divider class="py-2 px-0 m-1" layout="vertical"/>
                                    <span>jan 2021 – Present</span>
                                </div>
                            </template>
                            <template #content>
                                <ul>
                                    <li class="mb-3">Extracted, analyzed, and interpreted data on key metrics, into
                                        meaningful and
                                        actional information using MS Excel, R and SQL to be proactive and give insight
                                        into nationwide stations backlogs, efficiency and overall business performance.
                                    </li>
                                    <li class="mb-3">Collaborated with various stakeholders to develop and implement
                                        various KPIs and
                                        SLAs to improve overall business performance.
                                    </li>
                                    <li class="mb-3">Extracted, analyzed, and interpreted data on key metrics, into
                                        meaningful and
                                        actional information using MS Excel, R and SQL to be proactive and give insight
                                        into nationwide stations backlogs, efficiency and overall business performance.
                                    </li>
                                    <li class="mb-3">Collaborated with various stakeholders to develop and implement
                                        various KPIs and
                                        SLAs to improve overall business performance.
                                    </li>
                                </ul>
                            </template>
                        </Card>


                    </div>
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

                    <div class="mt-3">
                        <Card v-for="(n, index) in 2" :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"
                              @mouseenter="hoverOnWorkExperienceCard(index)"
                              @mouseleave="hoverOnWorkExperienceCard(index)"
                              class="hover:bg-blue-100 hover:cursor-auto mb-3"
                        >
                            <template #title>
                                <div class="flex align-items-center justify-content-between h-2rem">
                                    <h4 class="my-1 text-lg text-black-alpha-90">Msc. Statistics (Computational
                                        Statistics)</h4>
                                    <div v-show="hover[index]">
                                        <Button size="small" class="bg-white mr-2 p-1" rounded>
                                            <template #icon>
                                                <Icon icon="fluent:edit-24-regular" color="blue" width="20"
                                                      height="20"/>
                                            </template>
                                        </Button>

                                        <Button size="small" class="bg-white p-1" rounded>
                                            <template #icon>
                                                <Icon icon="fluent:delete-24-regular" color="red" width="20"
                                                      height="20"/>
                                            </template>
                                        </Button>


                                    </div>
                                </div>

                            </template>
                            <template #subtitle>
                                <div class="flex align-items-center">
                                    <span>University of Ibadan</span>
                                    <Divider class="py-2 px-0 m-1" layout="vertical"/>
                                    <span>Oyo, Nigeria</span>
                                    <Divider class="py-2 px-0 m-1" layout="vertical"/>
                                    <span>jan 2021 – Present</span>
                                </div>
                            </template>
                            <template #content>
                                <ul>
                                    <li class="mb-3">Country rep, World Statistics Olympiad, Oregon, United States
                                    </li>
                                    <li class="mb-3">Graduating thesis got published in The Sun
                                    </li>

                                </ul>
                            </template>
                        </Card>


                    </div>
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
                        <div v-for="n in 6" class="md:col-6 col-12">
                            <Card
                                :pt="{
                            content: { class: 'p-0 pt-1 ' },
                            footer: { class: 'pt-3' },
                            }"
                                class="border-round-lg"

                            >
                                <template #header>
                                    <div class="w-full border-round-3xl ">
                                        <img src="https://placehold.co/600x400" alt="Image"
                                        />
                                    </div>


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
import Divider from 'primevue/divider';


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
const hover = ref({})

const hoverOnWorkExperienceCard = (index) => {
    if (hover.value[index] !== undefined) {
        hover.value[index] = !hover.value[index];
    }
    hover.value = {[index]: true, ...hover.value};
}

</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
