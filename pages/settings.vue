<template>
    <div>
        <h1>About</h1>

        <div>
            <NuxtLink to="/settings">Settings</NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
        </div>
    </div>
</template>


<script setup lang="ts">
    definePageMeta({ middleware: ['settings'] })
</script>
