<template>
    <section class="sm:mb-8 mb-4 px-3">
        <ProfileSectionHeader :title="'Education'">
            <template #button>
                <Button @click="openEducationModal()" class="bg-black-500 h-2rem" size="small" label="Add" rounded>
                    <template #icon>
                        <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20" />
                    </template>
                </Button>
            </template>
        </ProfileSectionHeader>

        <div class="mt-3">
            <Card
                v-for="({ discipline, university_name, location, start_date, end_date, accomplishments }, index) in educationBackground"
                :pt="{
                    title: { class: 'mb-0' },
                    content: { class: 'p-0 pt-1 ' },
                    footer: { class: 'pt-3' },
                }" @mouseenter="toggleHoverState(index)" @mouseleave="toggleHoverState(index)"
                class="hover:cursor-auto mb-3 border-1 border-round-xl border-gray-75 education-card"
                style="box-shadow: none">
                <template #title>
                    <div class="flex align-items-center justify-content-between h-2rem">
                        <h4 class="my-1 text-lg text-500">{{ discipline }}</h4>
                        <div v-show="hover[index]">
                            <Button @click="openEducationModal(index)" size="small"
                                class="bg-white mr-2 p-1 action-button border-0" rounded>
                                <template #icon>
                                    <Icon icon="fluent:edit-24-regular" color="blue" width="20" height="20" />
                                </template>
                            </Button>

                            <Button size="small" class="bg-white p-1 action-button border-0" rounded>
                                <template #icon>
                                    <Icon icon="fluent:delete-24-regular" color="red" width="20" height="20" />
                                </template>
                            </Button>


                        </div>
                    </div>

                </template>
                <template #subtitle>
                    <div class="flex flex-wrap align-items-center mt-2">
                        <span class="text-400">{{ university_name }}</span>
                        <Divider class="py-2 px-0 m-1" layout="vertical" />
                        <span class="text-300">{{ location }}</span>
                        <Divider class="py-2 px-0 m-1" layout="vertical" />
                        <span class="text-300">{{ start_date }} – {{ end_date }}</span>
                    </div>
                </template>
                <template #content>
                    <ul>
                        <li v-for="(accomplishment, index) in accomplishments" :key="`accomplishment-${index}`"
                            class="mb-2 text-400"> {{ accomplishment }}</li>
                    </ul>
                </template>
            </Card>


        </div>


        <!--  Add/Edit Modal  -->
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '720px' }"
            :pt="{ content: { class: 'pb-1 ' }, }" :breakpoints="{ '1024px': '720px', '768px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="w-full">
                    <h2 class="md:text-2xl text-xl font-medium m-0">{{ selectedIndex === null ? "Add" : "Edit" }}
                        Education</h2>
                    <Divider />
                </div>
            </template>

            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2">
                    <label for="school" class="text-sm font-semibold">School</label>
                    <InputText class="h-3rem" id="school" placeholder="E.g; Covenant University" size="small" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="degree" class="text-sm font-semibold">Degree</label>
                    <InputText class="h-3rem" id="degree" placeholder="E.g; BSc." size="small" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="field_of_study" class="text-sm font-semibold">Field of study
                    </label>
                    <InputText class="h-3rem" id="field_of_study" size="small" placeholder="E.g; Mass Communications" />
                </div>

                <div class="grid">
                    <div class="col-12 py-0">
                        <label for="location" class="text-sm font-semibold">Location <span
                                class="text-gray-500 text-xs">(optional)</span></label>
                    </div>
                    <div class="md:col-6 col-12">
                        <Dropdown :options="[]" showClear optionLabel="name" placeholder="Country" size="small"
                            class="w-full h-3rem" />
                    </div>
                    <div class="md:col-6 col-12">
                        <Dropdown :options="[]" showClear optionLabel="name" placeholder="State" size="small"
                            class="w-full h-3rem " />
                    </div>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="accomplishments" class="font-semibold text-sm">Accomplishments</label>
                    <small class="text-sm">Include accomplishments, activities, societies, and responsibilities for this
                        degree.</small>
                    <Textarea id="accomplishments" class="w-full"
                        placeholder="E.g; Collaborated with faculty, students, and external speakers to plan and execute a week-long event showcasing the diverse facets "
                        autoResize rows="3" cols="30" />
                </div>
            </div>

            <template #footer>
                <Divider />
                <div class="flex lg:flex-row flex-column-reverse gap-4 justify-content-between">
                    <Button class="bg-orange-50 text-400 border-0" size="small" label="Cancel"
                        @click="closeEducationModal" />
                    <div class="flex lg:flex-row flex-column gap-2">
                        <Button class="bg-transparent text-blue-400" size="small" label="Save and add another" @click="closeEducationModal" />
                        <Button size="small" label="Save work education" @click="closeEducationModal" />
                    </div>
                </div>
            </template>
        </Dialog>
    </section>
</template>

<script setup>

import { Icon } from "@iconify/vue";
import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";

import { useCustomHover } from "../../composables/useCustomHover";

const { hover, toggleHoverState } = useCustomHover();

const visible = ref(false);
const selectedIndex = ref(null)

const openEducationModal = (index = '') => {
    if (index !== '') selectedIndex.value = index
    visible.value = true
}

const closeEducationModal = () => {
    selectedIndex.value = null
    visible.value = false
}

const educationBackground = ref([
    {
        id: 1,
        discipline: "Msc. Statistics (Computational Statistics)",
        university_name: "University of Ibadan",
        location: "Oyo, Nigeria",
        start_date: "Jan 2012 ",
        end_date: "Jul 2017",
        accomplishments: ["Country rep, World Statistics Olympiad, Oregon, United States", "Graduating thesis got published in The Sun"],
    },
    {
        id: 2,
        discipline: "Bsc. Mathematics (Actuarial Science)",
        university_name: "University of Ibadan",
        location: "Oyo, Nigeria",
        start_date: "Jan 2012 ",
        end_date: "Jul 2017",
        accomplishments: ["AIESEC Nigeria, TA team", "Vice President, Faculty Administrative Block"],
    }
])
</script>

<style  scoped>
.education-card:hover {
    background-color: var(--blue-25);
}

.action-button {
    height: 2.5rem;
    width: 2.5rem;
}
</style>
