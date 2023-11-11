<template>
    <div>
        <!-- Page Header -->
        <ProfilePageHeader />

        <div class="grid mx-auto lg:w-11 md:w-full">
            <div class="lg:col-9 col-12">
                <!-- Bio -->
                <UserBio />

                <!-- Personal Info -->
                <PersonalInformation />

                <!-- Work Info -->
                <WorkInformation />

                <!-- Work Experience -->
                <WorkExperience />

                <!-- Education -->
                <Education />

                <!-- Skills -->
                <Skills :skills="skills" />

                <!-- Past Projects -->
                <Projects />
            </div>

            <div class="lg:col-3 col-12">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";


import PersonalInformation from "./_partials/PersonalInformation.vue";
import WorkInformation from "./_partials/WorkInformation.vue";
import WorkExperience from "./_partials/WorkExperience.vue";
import Education from "./_partials/Education.vue";
import Skills from "./_partials/Skills.vue";
import Projects from "./_partials/Projects.vue";


import UserBio from "./_partials/UserBio.vue";
import ProfilePageHeader from "./_partials/ProfilePageHeader.vue";


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

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
