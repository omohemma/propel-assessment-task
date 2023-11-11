<template>
    <section class="mb-8 px-3">
        <ProfileSectionHeader :title="'Work Experience'">
            <template #button>
                <Button @click="openWorkExperienceModal()" class="bg-black-alpha-80" size="small" label="Add" rounded>
                    <template #icon>
                        <Icon icon="fluent:add-circle-24-regular" class="mr-1" width="20" height="20"/>
                    </template>
                </Button>
            </template>
        </ProfileSectionHeader>

        <div class="mt-3">
            <Card v-for="(n, index) in 3" :pt="{
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
                        <h4 class="my-1 text-lg text-black-alpha-90">Senior Software Engineer, Growth</h4>
                        <div v-show="hover[index]">
                            <Button @click="openWorkExperienceModal(index)" size="small" class="bg-white mr-2 p-1"
                                    rounded>
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

        <!--  Add/Edit Modal  -->
        <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '720px' }"
                :pt="{   content: { class: 'pb-1 ' },}"
                :breakpoints="{ '1024px': '720px', '768px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="w-full">
                    <h2 class="md:text-2xl text-xl font-medium m-0">{{ selectedIndex === null ? "Add" : "Edit" }} Work
                        Experience</h2>
                    <Divider/>
                </div>
            </template>

            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2">
                    <label for="job_title" class="text-sm font-semibold">Job title</label>
                    <InputText id="job_title" placeholder="E.g; Senior DevOps Engineer" size="small"/>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="company_name" class="text-sm font-semibold">Company name</label>
                    <InputText id="company_name" placeholder="E.g; Paystack" size="small"/>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="website" class="text-sm font-semibold">Company website
                    </label>
                    <InputText id="website" size="small" placeholder="https://"/>
                </div>

                <div class="grid">
                    <div class="col-12 py-0">
                        <label for="location" class="text-sm font-semibold">Location</label>
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


                <div class="grid">
                    <div class="lg:col-6 col-12">
                        <div class="grid">
                            <div class="col-12 py-0">
                                <label for="start_date" class="text-sm font-semibold">Start date</label>
                            </div>
                            <div class="md:col-6 col-12">
                                <Dropdown :options="[]" showClear optionLabel="name"
                                          placeholder="Month" size="small" class="w-full "/>
                            </div>
                            <div class="md:col-6 col-12">
                                <Dropdown :options="[]" showClear optionLabel="name"
                                          placeholder="Year" size="small" class="w-full "/>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-6 col-12">
                        <div class="grid">
                            <div class="col-12 py-0">
                                <label for="end_date" class="text-sm font-semibold">End date</label>
                            </div>
                            <div class="md:col-6 col-12">
                                <Dropdown :options="[]" showClear optionLabel="name"
                                          placeholder="Month" size="small" class="w-full "/>
                            </div>
                            <div class="md:col-6 col-12">
                                <Dropdown :options="[]" showClear optionLabel="name"
                                          placeholder="Year" size="small" class="w-full "/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex align-items-center">
                    <Checkbox inputId="current_role" value=""/>
                    <label for="current_role" class="ml-2"> I’m currently working in this role </label>
                </div>

                <div class="flex flex-column gap-2">
                    <label for="accomplishments" class="font-semibold text-sm">Accomplishments</label>
                    <small class="text-sm">Include accomplishments and responsibilities for this role. Start each
                        statement with a solid action verb; also include specific, technical words with sample data.</small>
                    <Textarea id="accomplishments" class="w-full"  autoResize rows="3" cols="30" />
                </div>
            </div>

            <template #footer>
                <Divider/>
                <div class="flex lg:flex-row flex-column-reverse gap-4 justify-content-between">
                    <Button size="small" label="Cancel" @click="closeWorkExperienceModal"/>
                    <div class="flex lg:flex-row flex-column gap-2">
                        <Button size="small" label="Save and add another" @click="closeWorkExperienceModal"/>
                        <Button size="small" label="Save work experience" @click="closeWorkExperienceModal"/>
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
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";

import {ref} from "vue";

const hover = ref({})
const visible = ref(false);
const selectedIndex = ref(null)

const toggleHoverState = (index) => {
    if (hover.value[index] !== undefined) {
        hover.value[index] = !hover.value[index];
    }
    hover.value = {[index]: true, ...hover.value};
}
const openWorkExperienceModal = (index = '') => {
    if (index !== '') selectedIndex.value = index
    visible.value = true
}

const closeWorkExperienceModal = () => {
    selectedIndex.value = null
    visible.value = false
}
</script>

<style lang="scss" scoped>

</style>
