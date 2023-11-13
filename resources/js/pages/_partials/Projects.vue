<template>
    <section class="sm:mb-8 mb-4 px-3">
        <ProfileSectionHeader :title="'Past projects'">
            <template #button>
                <Button @click="openProjectModal()" class="bg-black-500 h-2rem" size="small" label="Add" rounded>
                    <template #icon>
                        <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20" />
                    </template>
                </Button>
            </template>
        </ProfileSectionHeader>

        <div class="grid mt-3">
            <div v-for="(project, index) in projects" :key="`project-list-${index}`" class="md:col-6 col-12">
                <Card :pt="{
                    header: { class: 'border-round-xl' },
                    content: { class: 'p-0 pt-1 ' },
                    footer: { class: 'pt-3' },
                }" class="border-round-xl border-1 border-gray-75" style="box-shadow: none"
                    @mouseenter="toggleHoverState(index)" @mouseleave="toggleHoverState(index)">
                    <template #header>
                        <div class="w-full h-12rem border-round-3xl relative">
                            <img :src="`./images/project-${index + 1}.png`" alt="Image" />
                            <div v-show="hover[index]" class="absolute" style="right: 10px; top:10px">
                                <Button @click="openProjectModal(index)" size="small"
                                    class="bg-white mr-2 p-1 action-button border-0" rounded>
                                    <template #icon>
                                        <Icon icon="fluent:edit-24-regular" color="blue" width="20" height="20" />
                                    </template>
                                </Button>

                                <Button size="small" class="bg-white mr-2 p-1 action-button border-0" rounded>
                                    <template #icon>
                                        <Icon icon="fluent:delete-24-regular" color="red" width="20" height="20" />
                                    </template>
                                </Button>
                            </div>
                        </div>
                    </template>
                    <template #title>
                        <h4 class="my-1 text-lg text-500">{{ project.title }}</h4>
                    </template>
                    <template #content>
                        <p class="m-0 text-sm text-400">
                            {{ project.subtitle }}
                        </p>
                    </template>
                    <template #footer>
                        <Button class="p-0 text-blue-400 text-sm" link label="View project" />
                    </template>
                </Card>
            </div>


        </div>


        <!--  Add/Edit Modal  -->
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '720px' }"
            :pt="{ content: { class: 'pb-1 ' }, }" :breakpoints="{ '1024px': '720px', '768px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="w-full">
                    <h2 class="md:text-2xl text-xl font-medium m-0">{{ selectedIndex === null ? "Add" : "Edit" }}
                        Project</h2>
                    <Divider />
                </div>
            </template>

            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2">
                    <label for="project_title" class="text-sm font-semibold">Project title</label>
                    <InputText class="h-3rem" id="project_title" placeholder=" E.g; Deploying a database with Django" size="small" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="project_description" class="font-semibold text-sm">Project description (140
                        char)</label>
                    <Textarea id="project_description" class="w-full"
                        placeholder="E.g; Elevating E-Commerce with Seamless Checkout Redesign for Enhanced User Experience "
                        autoResize rows="3" cols="30" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="project_url" class="text-sm font-semibold">Project URL
                    </label>
                    <small class="text-sm">Share a live link to view this project. This can be a website, a video, or
                        any online asset.</small>
                    <InputText class="h-3rem" id="project_url" placeholder="  https://" size="small" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="cover_image" class="text-sm font-semibold">Cover Image</label>

                </div>


            </div>

            <template #footer>
                <Divider />
                <div class="flex lg:flex-row flex-column-reverse gap-4 justify-content-between">
                    <Button class="bg-orange-50 text-400 border-0" size="small" label="Cancel" @click="closeProjectModal" />
                    <div class="flex lg:flex-row flex-column gap-2">
                        <Button class="bg-transparent text-blue-400" size="small" label="Save and add another" @click="closeProjectModal" />
                        <Button size="small" label="Save project" @click="closeProjectModal" />
                    </div>
                </div>
            </template>
        </Dialog>
    </section>
</template>

<script setup>


import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";

import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Dialog from "primevue/dialog";

import { Icon } from "@iconify/vue";

import { ref } from "vue";
import { useCustomHover } from "../../composables/useCustomHover";

const { hover, toggleHoverState } = useCustomHover();

const visible = ref(false);
const selectedIndex = ref(null)

const projects = ref(
    [
        {
            title: "Creating a public health dashboard",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
        {
            title: "Admin software for schools",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
        {
            title: "Stock market bot tracker",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
        {
            title: "Optimizing crop yield in Plateau",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
        {
            title: "Supply chain logging tool",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
        {
            title: "Managing pills for senior citizens",
            subtitle: "Elevating e-commerce with seamless checkout redesign for enhanced user experience"
        },
    ]
)

const openProjectModal = (index = '') => {
    if (index !== '') selectedIndex.value = index
    visible.value = true
}

const closeProjectModal = () => {
    selectedIndex.value = null
    visible.value = false
}
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.action-button {
    height: 2.5rem;
    width: 2.5rem;
}
</style>
