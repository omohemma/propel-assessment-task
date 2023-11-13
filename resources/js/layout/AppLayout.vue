<template>
    <div class="layout-wrapper">
        <AppHeader :visible="visible" @toggle-sidebar="visible = !visible" class="layout-topbar" />
        <AppSideBar :visible="visible" @toggle-sidebar="visible = !visible" class="layout-sidebar" />
        <div class="layout-main-container">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppSideBar from '../components/AppSideBar.vue';
import {ref} from 'vue';

const visible = ref(false);

</script>

<style  scoped>
.layout-wrapper {
    min-height: 100vh;
}

.layout-topbar {
    position: fixed;
    height: 4.5rem;
    border-bottom: 1px solid var(--orange-100);
    background: var(--surface-section);
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    transition: left .2s;
    display: flex;
    align-items: center;
}

.layout-sidebar {
    position: fixed;
    width: 260px;
    height: calc(100vh - 4.5rem);
    z-index: 999;
    overflow-y: auto;
    -webkit-user-select: none;
    user-select: none;
    top:4.5rem;
    left: 0;
    transition: transform .2s, left .2s;
    background-color: var(--surface-overlay);
    background: var(--orange-50);
}

.layout-main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 7rem 0rem 2rem 0rem;
    transition: margin-left .2s;
}

@media (min-width: 1440px) {
    .layout-main-container {
        margin-left: 260px;
    }
}
</style>
