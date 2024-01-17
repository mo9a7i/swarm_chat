<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-yellow-500 p-4 text-white rounded-b-2xl">
            This is a header
        </header>
        <main class="flex-1">
            <slot />
        </main>
        <footer class="bg-yellow-500 p-4 text-white rounded-t-2xl">
            This is a footer
        </footer>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>