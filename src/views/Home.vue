<template>
    <div class="bg-utama h-screen">
        <navbar />
        <sidebar />
    </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import Sidebar from '../components/navbar/Sidebar.vue'
export default {
    components: {
        Navbar, Sidebar
    }
}
</script>

<style>
    .bg-utama {
        background-color: #EDF4F8;
    }
</style>