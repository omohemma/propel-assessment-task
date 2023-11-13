<template>
    <section class="sm:mb-8 mb-4 px-3">
        <ProfileSectionHeader :title="'Skills'">
            <template #button>
                <Button @click="openSkillsModal()" class="bg-black-500 h-2rem" size="small" label="Add" rounded>
                    <template #icon>
                        <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20" />
                    </template>
                </Button>
            </template>
        </ProfileSectionHeader>

        <div class="mt-3">
            <div class="mb-3">
                <h5 class="text-base text-500 mb-3">Tools & Technologies</h5>
                <div>
                    <Chip v-for="({ name, years_of_experience }, index) in skills.tools_and_technologies"
                        :key="`tool-${index}`" class="px-2 m-1 bg-white border-1 h-2rem">
                        <span class="mr-2 text-base text-500">{{ name }}</span>
                        <span class="text-400 font-light">{{ years_of_experience }}</span>
                    </Chip>
                </div>
            </div>

            <div class="mb-3">
                <h5 class="text-base text-500 mb-3">Industry Knowledge</h5>
                <div>
                    <Chip v-for="({ name, years_of_experience }, index) in skills.industry_knowledge"
                        :key="`industrial-knowledge-${index}`" class="px-2 m-1 bg-white border-1 h-2rem">
                        <span class="mr-2 text-base text-500">{{ name }}</span>
                        <span class="text-400 font-light">{{ years_of_experience }}</span>
                    </Chip>
                </div>
            </div>

            <div>
                <h5 class="text-base text-500 mb-3">Interpersonal Skills</h5>
                <Chip v-for="({ name, rating }, index) in skills.interpersonal_skills" :key="`interpersonal-skill-${index}`"
                    class="px-2 m-1 bg-white border-1 h-2rem">
                    <span class="mr-2 text-base text-500">{{ name }}</span>
                    <Rating :pt="{
                        onIcon: { style: '', class: 'text-blue-200 w-1rem h-1rem' }
                    }" :model-value="rating" :stars="rating" :cancel="false" readonly>
                    </Rating>
                </Chip>
            </div>

        </div>


        <!--  Add/Edit Modal  -->
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '720px' }"
            :pt="{ content: { class: 'pb-1 ' }, header: { class: 'pb-0' } }"
            :breakpoints="{ '1024px': '720px', '768px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="w-full">
                    <h2 class="md:text-2xl text-xl font-medium m-0">Add Skills</h2>
                    <Divider />
                </div>
            </template>

            <div>

                <TabView v-model:activeIndex="active" :pt="{
                    nav: {
                        class: 'bg-gray-50 border-round-xl p-2 mx-auto border-0'
                    },
                }">
                    <TabPanel :pt="{
                        headerAction: {
                            style: { 'padding': '0.7rem', 'border': 'none' },
                            class: active === 0 ? 'bg-black-500 text-white' : 'bg-transparent',
                        },

                    }">
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <Icon icon="fluent:desktop-toolbox-20-regular" class="mr-1"
                                    :class="active === 0 ? 'text-white' : 'text-400'" width="24" height="24" />
                                <h4 class=" text-sm p-0 m-0" :class="active === 0 ? 'text-white' : 'text-400'">Tools and
                                    Technologies</h4>
                            </div>
                        </template>
                        <div class="grid">
                            <div class="col-7">
                                <small class="text-sm text-black-alpha-90 font-semibold">Skill</small>
                            </div>
                            <div class="col-5">
                                <small class="text-sm text-black-alpha-90 font-semibold">Years of experience</small>
                            </div>
                        </div>

                        <!-- Skills -->
                        <div v-for="(tool, index) in tools" :key="`tool-${index}`" class="grid ">
                            <div class="col-7">
                                <Dropdown :options="[]" showClear optionLabel="name" placeholder="Add Skill" size="small"
                                    class="w-full " />
                            </div>
                            <div class=" flex gap-2 col-5">
                                <Dropdown :options="yearsOfExperience" showClear optionLabel="name"
                                    placeholder="Select years " size="small" class="w-full " />
                                <Button :disabled="index === 0" text size="small">
                                    <Icon icon="fluent:delete-24-regular" :color="index === 0 ? 'gray' : 'red'" width="20"
                                        height="20" />
                                </Button>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel :pt="{
                        headerAction: {
                            style: { 'padding': '0.7rem', 'border': 'none' },
                            class: active === 1 ? 'bg-black-500 text-white' : 'bg-transparent',
                        },

                    }">
                        <template #header>
                            <div class="flex align-items-center gap-3">
                                <Icon icon="fluent:notebook-lightning-24-regular" class="mr-1"
                                    :class="active === 1 ? 'text-white' : 'text-400'" width="24" height="24" />
                                <h4 class=" text-sm p-0 m-0" :class="active === 1 ? 'text-white' : 'text-400'">Industry
                                    Knowledge</h4>
                            </div>
                        </template>
                        <div class="grid">
                            <div class="col-7">
                                <small class="text-sm text-black-alpha-90 font-semibold">Skill</small>
                            </div>
                            <div class="col-5">
                                <small class="text-sm text-black-alpha-90 font-semibold">Years of experience</small>
                            </div>
                        </div>
                        <!-- Skills -->
                        <div v-for="(tool, index) in tools" :key="`industrial-knowledge-${index}`" class="grid ">
                            <div class="col-7">
                                <Dropdown :options="[]" showClear optionLabel="name" placeholder="Add Skill" size="small"
                                    class="w-full " />
                            </div>
                            <div class=" flex gap-2 col-5">
                                <Dropdown :options="yearsOfExperience" showClear optionLabel="name"
                                    placeholder="Select years " size="small" class="w-full " />
                                <Button :disabled="index === 0" text size="small">
                                    <Icon icon="fluent:delete-24-regular" :color="index === 0 ? 'gray' : 'red'" width="20"
                                        height="20" />
                                </Button>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel :pt="{
                        headerAction: {
                            style: { 'padding': '0.7rem', 'border': 'none' },
                            class: active === 2 ? 'bg-black-500 text-white' : 'bg-transparent',
                        },

                    }">
                        <template #header>
                            <div class="flex align-items-center gap-3">
                                <Icon icon="fluent:people-list-24-regular" class="mr-1 "
                                    :class="active === 2 ? 'text-white' : 'text-400'" width="24" height="24" />
                                <h4 class=" text-sm p-0 m-0" :class="active === 2 ? 'text-white' : 'text-400'">Interpersonal
                                    Skills</h4>
                            </div>
                        </template>
                        <div class="grid">
                            <div class="col-7">
                                <small class="text-sm text-black-alpha-90 font-semibold">Skill</small>
                            </div>
                            <div class="col-5">
                                <small class="text-sm text-black-alpha-90 font-semibold">Years of experience</small>
                            </div>
                        </div>
                        <!-- Skills -->
                        <div v-for="(tool, index) in tools" :key="`interpersonal-skill-${index}`" class="grid">
                            <div class="col-7">
                                <Dropdown :options="[]" showClear optionLabel="name" placeholder="Add Skill" size="small"
                                    class="w-full " />
                            </div>
                            <div class=" flex gap-2 col-5">
                                <Dropdown :options="yearsOfExperience" showClear optionLabel="name"
                                    placeholder="Select years " size="small" class="w-full " />
                                <Button :disabled="index === 0" text size="small">
                                    <Icon icon="fluent:delete-24-regular" :color="index === 0 ? 'gray' : 'red'" width="20"
                                        height="20" />
                                </Button>
                            </div>

                        </div>
                    </TabPanel>
                </TabView>

                <Divider class="mt-1 " />
            </div>



            <template #footer>
                <Divider />
                <div class="flex lg:flex-row flex-column-reverse gap-4 justify-content-between">
                    <Button class="bg-orange-50 text-400 border-0" size="small" label="Cancel" @click="closeSkillsModal" />
                    <Button size="small" label="Save skill(s)" @click="closeSkillsModal" />
                </div>


            </template>
        </Dialog>
    </section>
</template>

<script setup>


import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";
import Button from "primevue/button";
import Chip from "primevue/chip";
import Rating from "primevue/rating";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import { Icon } from "@iconify/vue";

import { ref } from "vue";

defineProps({
    skills: Object
})

const visible = ref(false);

const tools = ref([
    { skill: "", years: "" },
    { skill: "", years: "" },
    { skill: "", years: "" },
    { skill: "", years: "" },
    { skill: "", years: "" },
    { skill: "", years: "" },
])
const yearsOfExperience = [
    {
        name: '1 year',
        code: 1
    },
    {
        name: '2 year',
        code: 2
    },
    {
        name: '3 year',
        code: 3
    },
    {
        name: '4 year',
        code: 4
    },
    {
        name: '5 year',
        code: 5
    }
]

const openSkillsModal = () => {
    visible.value = true
}

const closeSkillsModal = () => {
    visible.value = false
}

const active = ref(0);


</script>

<style scoped></style>
