<template>
    <template v-if="this.$route.name == 'Login' || this.$route.name == 'Register'">
      <router-view />
    </template>
    <div v-else class="bg-utama h-screen">
        <navbar />
        <sidebar />
        <div class="pl-[200px]">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Sidebar from './components/navbar/Sidebar.vue'
export default {
    components: {
        Navbar, Sidebar
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

:root {
  --main-blue: #2897D6;
  --black-medium: #626262;
  --font-black-strong: #1C1C1C;
  --success: #31BF6D;
  --black-light: #F9F9F9;
}

html * {
  font-family: "Open Sans" , sans-serif;
}

.bg-main-blue {
    background-color: var(--main-blue);
}

.bg-black-light {
    background-color: var(--black-light);
}

.f-black-medium {
    color: var(--font-black-strong);
}

.f-black-semimedium {
    color: var(--black-medium);
}

.f-success {
    color: var(--success);
}

.f-black-medium {
    color: #626262;
}

.text-color-main {
    color: #2897D6;
}
.text-color-black-medium {
    color: #626262;
}
.text-bold-main {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
}

.outline-main-blue {
    outline-color: var(--main-blue);
}

</style>