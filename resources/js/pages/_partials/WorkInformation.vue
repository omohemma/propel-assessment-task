<template>
    <section class="sm:mb-8 mb-4 border-round px-3" :class="status && 'bg-gray-25'">
        <ProfileSectionHeader :title="'Work Info'">
            <template #button>
                <Button v-if="!status" @click="editWorkInformation" class="bg-black-500 h-2rem" size="small" label="Edit"
                    rounded>
                    <template #icon>
                        <Icon icon="fluent:edit-24-regular" class="mr-1" width="20" height="20" />
                    </template>
                </Button>

                <div v-else class="flex align-items-center gap-2">
                    <Button @click="status = false" text severity="danger" class="h-2rem" size="small" label="Cancel"
                        rounded>
                        <template #icon>
                            <Icon icon="ic:outline-cancel" class="mr-1" width="20" height="20" />
                        </template>
                    </Button>
                    <Button @click="status = false" class="bg-black-500 h-2rem" size="small" label="Save" rounded>
                        <template #icon>
                            <Icon icon="fluent:checkmark-circle-24-regular" class="mr-1" width="20" height="20" />
                        </template>
                    </Button>
                </div>
            </template>
        </ProfileSectionHeader>

        <div v-if="!status" class="grid mt-3">
            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Employment status</h5>
                <p class="m-0 line-height-3 text-400">Actively seeking opportunities</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Primary role</h5>
                <p class="m-0 line-height-3 text-400">DevOps Engineer</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Github/Portfolio</h5>
                <p class="m-0 line-height-3 text-400">https://amarachi.dev</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Preferred work</h5>
                <p class="m-0 line-height-3 text-400">Full-time, Contract, Remote</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Relocation abroad</h5>
                <p class="m-0 line-height-3 text-400">Yes</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Years of experience</h5>
                <p class="m-0 line-height-3 text-400">8 years</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Preferred salary <span class="font-light text-300"> (monthly)</span>
                </h5>
                <p class="m-0 line-height-3 text-400">
                    €13,500</p>
            </div>

            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Secondary roles</h5>
                <p class="m-0 line-height-3 text-400">Data Engineer, Cybersecurity</p>
            </div>


            <div class="md:col-4 col-12">
                <h5 class="text-base md:mb-2 md:mt-4 my-1 text-500">Notice period

                </h5>
                <p class="m-0 line-height-3 text-400"> 3 weeks</p>
            </div>
        </div>

        <!-- Edit Work Experience -->
        <div class="grid" v-else>
            <div class="lg:col-9 mx-auto my-4">

                <div class="flex flex-column gap-4 ">
                    <div class="flex flex-column gap-2">
                        <label for="employment_status" class="text-sm font-semibold">Employment Status</label>
                        <Dropdown class="h-3rem" id="employment_status" :value="'Actively looking for opportunities'"
                            showClear optionLabel="name"
                            :options="[{ name: 'Actively looking for opportunities', code: 'Actively looking for opportunities' }]" />
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="employment_status" class="text-sm font-semibold">Primary Role</label>
                        <Dropdown class="h-3rem" id="employment_status" v-model="selectedPrimaryRole" showClear
                            optionLabel="name" :options="roles" />
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="secondary_roles" class="text-sm font-semibold">Secondary Roles</label>
                        <MultiSelect class="h-3rem w-full" id="secondary_roles" v-model="selectedSecondaryRoles"
                            :options="roles" optionLabel="name" placeholder="Select up to three(3)"
                            :maxSelectedLabels="0" />
                        <div class="flex gap-2">
                            <Chip class="bg-blue-100 text-sm font-medium" v-for="role in selectedSecondaryRoles"
                                :key="role.code" :label="role.name" />
                        </div>

                    </div>


                    <div class="flex flex-column gap-2">
                        <label for="portfolio" class="text-sm font-semibold">Github/Portfolio</label>
                        <InputText class="h-3rem" id="portfolio" value="https://amarachi.dev"
                            placeholder=" E.g; Deploying a database with Django" size="small" />
                    </div>

                    <div class="grid">
                        <div class="flex flex-column gap-2 lg:col-6 col-12">
                            <label class="text-sm font-semibold">Years of Experience</label>
                            <Dropdown class="h-3rem" :value="'2 years'" showClear
                                :options="['1 year', '2 years', '3 years']" />
                        </div>

                        <div class="flex flex-column gap-2 lg:col-6 col-12">
                            <label class="text-sm font-semibold">Preferred Salary <span
                                    class="text-300 font-normal">(monthly)</span>
                                <span class="text-red-500">*</span>
                            </label>
                            <InputText class="h-3rem" :value="'€13,500'" />
                        </div>
                    </div>


                    <div class="flex flex-column gap-2">
                        <label for="work_modes" class="text-sm font-semibold">Preferred work</label>
                        <MultiSelect class="h-3rem w-full" id="work_modes" v-model="preferredWorkModes" :options="workModes"
                            optionLabel="name" placeholder="Select up to two(2)" :maxSelectedLabels="0" />
                        <div class="flex gap-2">
                            <Chip class="bg-blue-100 text-sm font-medium" v-for="mode in preferredWorkModes"
                                :key="mode.code" :label="mode.name" />
                        </div>

                    </div>

                    <div class="grid">
                        <div class="flex flex-column gap-2 lg:col-6 col-12">
                            <label class="text-sm font-semibold">Relocation to Abroad</label>
                            <Dropdown class="h-3rem" :value="'No'" showClear optionLabel="name"
                                :options="[{ name: 'Yes', code: 'Yes' }, { name: 'No', code: 'No' }]" />
                        </div>

                        <div class="flex flex-column gap-2 lg:col-6 col-12">
                            <label class="text-sm font-semibold">Notice Period</label>
                            <Dropdown class="h-3rem" :value="'4 Weeks'" showClear
                                :options="['1 Week', '2 Weeks', '3 Weeks', '4 Weeks']" />
                        </div>
                    </div>

                </div>



            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

import { Icon } from "@iconify/vue";
import ProfileSectionHeader from "../../components/ProfileSectionHeader.vue";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Chip from "primevue/chip";

const status = ref(false)

const roles = ref([
    {
        name: 'DevOps Engineer',
        code: "DevOps"
    },
    {
        name: 'Data Engineer',
        code: "Data"
    },
    {
        name: 'Cybersecurity',
        code: "Cybersecurity"
    },
    {
        name: 'Fullstack Engineer',
        code: "Fullstack"
    },
    {
        name: 'Frontend Engineer',
        code: "Frontend"
    }


])

const selectedPrimaryRole = ref({
    name: 'DevOps Engineer',
    code: "DevOps"
})

const selectedSecondaryRoles = ref([
    {
        name: 'DevOps Engineer',
        code: "DevOps"
    },
    {
        name: 'Data Engineer',
        code: "Data"
    },
    {
        name: 'Cybersecurity',
        code: "Cybersecurity"
    },])

const workModes = ref([{
    name: 'Remote',
    code: "Remote"
},
{
    name: 'Contract',
    code: "Contract"
},
{
    name: 'Full-time',
    code: "Full-time"
},
{
    name: 'Part-time',
    code: "Part-time"
}, {
    name: 'Freelance',
    code: "Freelance"
}
])

const preferredWorkModes = ref([{
    name: 'Remote',
    code: "Remote"
},
{
    name: 'Contract',
    code: "Contract"
},
{
    name: 'Full-time',
    code: "Full-time"
}
])

const employmentStatus = ref([
    {}
])

const editWorkInformation = () => {
    status.value = true
}

</script>

<style lang="scss" scoped></style>
