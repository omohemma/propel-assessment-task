<template>
    <div>
        <Button size="small" @click="counter++" label="Submit"/>
        <p> Counter is: {{ counter }}</p>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import Button from 'primevue/button';

const counter = ref(0)
</script>

