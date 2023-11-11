<template>
    <section class="mb-8 px-3">
        <ProfileSectionHeader :title="'Education'">
            <template #button>
                <Button @click="openEducationModal()" class="bg-black-alpha-80" size="small" label="Add" rounded>
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
                  @mouseenter="toggleHoverState(index)"
                  @mouseleave="toggleHoverState(index)"
                  class="hover:bg-blue-100 hover:cursor-auto mb-3 border-1 border-gray-300"
                  style="box-shadow: none"
            >
                <template #title>
                    <div class="flex align-items-center justify-content-between h-2rem">
                        <h4 class="my-1 text-lg text-black-alpha-90">Msc. Statistics (Computational
                            Statistics)</h4>
                        <div v-show="hover[index]">
                            <Button @click="openEducationModal(index)" size="small" class="bg-white mr-2 p-1" rounded>
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


        <!--  Add/Edit Modal  -->
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '720px' }"
                :pt="{   content: { class: 'pb-1 ' },}"
                :breakpoints="{ '1024px': '720px', '768px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="w-full">
                    <h2 class="md:text-2xl text-xl font-medium m-0">{{ selectedIndex === null ? "Add" : "Edit" }}
                        Education</h2>
                    <Divider/>
                </div>
            </template>

            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2">
                    <label for="school" class="text-sm font-semibold">School</label>
                    <InputText id="school" placeholder="E.g; Covenant University" size="small"/>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="degree" class="text-sm font-semibold">Degree</label>
                    <InputText id="degree" placeholder="E.g; BSc." size="small"/>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="field_of_study" class="text-sm font-semibold">Field of study
                    </label>
                    <InputText id="field_of_study" size="small" placeholder="E.g; Mass Communications"/>
                </div>

                <div class="grid">
                    <div class="col-12 py-0">
                        <label for="location" class="text-sm font-semibold">Location <span
                            class="text-gray-500 text-xs">(optional)</span></label>
                    </div>
                    <div class="md:col-6 col-12">
                        <Dropdown :options="[]" showClear optionLabel="name"
                                  placeholder="Country" size="small" class="w-full "/>
                    </div>
                    <div class="md:col-6 col-12">
                        <Dropdown :options="[]" showClear optionLabel="name"
                                  placeholder="State" size="small" class="w-full "/>
                    </div>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="accomplishments" class="font-semibold text-sm">Accomplishments</label>
                    <small class="text-sm">Include accomplishments, activities, societies, and responsibilities for this
                        degree.</small>
                    <Textarea id="accomplishments" class="w-full"
                              placeholder="E.g; Collaborated with faculty, students, and external speakers to plan and execute a week-long event showcasing the diverse facets "
                              autoResize rows="3" cols="30"/>
                </div>
            </div>

            <template #footer>
                <Divider/>
                <div class="flex lg:flex-row flex-column-reverse gap-4 justify-content-between">
                    <Button size="small" label="Cancel" @click="closeEducationModal"/>
                    <div class="flex lg:flex-row flex-column gap-2">
                        <Button size="small" label="Save and add another" @click="closeEducationModal"/>
                        <Button size="small" label="Save work education" @click="closeEducationModal"/>
                    </div>
                </div>
            </template>
        </Dialog>
    </section>
</template>

<script setup>

import {Icon} from "@iconify/vue";
import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import {ref} from "vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";

const hover = ref({})
const visible = ref(false);
const selectedIndex = ref(null)

const toggleHoverState = (index) => {
    if (hover.value[index] !== undefined) {
        hover.value[index] = !hover.value[index];
    }
    hover.value = {[index]: true, ...hover.value};
}

const openEducationModal = (index = '') => {
    if (index !== '') selectedIndex.value = index
    visible.value = true
}

const closeEducationModal = () => {
    selectedIndex.value = null
    visible.value = false
}
</script>

<style lang="scss" scoped>

</style>
