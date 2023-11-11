<template>
    <div class="layout-wrapper">
        <AppHeader />
        <div class="layout-sidebar"></div>
        <div class="layout-main-container">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';

</script>

<style  scoped>
.layout-wrapper {
    min-height: 100vh;
}

.layout-topbar {
    position: fixed;
    height: 5rem;
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    background-color: var(--surface-card);
    transition: left .2s;
    display: flex;
    align-items: center;
    box-shadow: 0 3px 5px #00000005, 0 0 2px #0000000d, 0 1px 4px #00000014;
}

.layout-sidebar {
    position: fixed;
    width: 260px;
    height: calc(100vh);
    z-index: 999;
    overflow-y: auto;
    -webkit-user-select: none;
    user-select: none;
    top: 5rem;
    transition: transform .2s, left .2s;
    background-color: var(--surface-overlay);
    padding: .5rem 1.5rem;
    background: var(--orange-50);
}

.layout-main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 7rem 2rem 2rem 4rem;
    transition: margin-left .2s;
}

@media (min-width: 992px) {
    .layout-main-container {
        margin-left: 260px;
    }
}
</style>