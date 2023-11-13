<template>
    <div>
        <!-- Page Header -->
        <ProfilePageHeader />

        <div class="grid mx-auto lg:w-11 md:w-full">
            <div class="lg:col-8 col-12">
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

            <div class="lg:col-4 col-12">
                <ProfileAside />
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
import ProfileAside from "./_partials/ProfileAside.vue";


const skills = ref({
    'tools_and_technologies': [
        {
            name: 'Kubernetes',
            years_of_experience: '7 years'
        },
        {
            name: 'Jenkins',
            years_of_experience: '3 years'
        },
        {
            name: 'Ansible',
            years_of_experience: '7 years'
        },
        {
            name: 'Terraform',
            years_of_experience: '7 years'
        },
        {
            name: 'Docker',
            years_of_experience: '7 years'
        },
        {
            name: 'AWS',
            years_of_experience: '7 years'
        },
        {
            name: 'Google Cloud',
            years_of_experience: '8 years'
        },
        {
            name: 'Azure',
            years_of_experience: '12 years'
        },
        {
            name: 'Prometheus',
            years_of_experience: '7 years'
        },
        {
            name: 'Confluence',
            years_of_experience: '3 years'
        },
        {
            name: 'Jira',
            years_of_experience: '6 years'
        },
    ],
    'industry_knowledge': [
        {
            name: 'Infrastructure as Code (IaC)',
            years_of_experience: '7 years'
        },
        {
            name: 'Version Control',
            years_of_experience: '3 years'
        },
         {
            name: 'Monitoring and Observability',
            years_of_experience: '3 years'
        },
        {
            name: 'Cloud Computing',
            years_of_experience: '3 years'
        },
         {
            name: 'Containerization',
            years_of_experience: '3 years'
        },
        {
            name: 'Orchestration',
            years_of_experience: '3 years'
        },
         {
            name: 'Agile',
            years_of_experience: '8 years'
        },
        {
            name: 'Scripting',
            years_of_experience: '12 years'
        },
    ],
    'interpersonal_skills': [
        {
            name: 'Communication',
            rating: 3
        },
        {
            name: 'Team Collaboration',
            rating: 2
        },
         {
            name: 'Leadership',
            rating: 3
        },
        {
            name: 'Leadership',
            rating: 2
        },
         {
            name: 'Leadership',
            rating: 3
        },
        {
            name: 'Adaptability',
            rating: 2
        },
         {
            name: 'Empathy',
            rating: 3
        },
        {
            name: 'Negotiation',
            rating: 1
        },
         {
            name: 'Mentoring',
            rating: 1
        },
        {
            name: 'Decision-Making',
            rating: 3
        },
    ]
})




</script>

<style scoped>

</style>
