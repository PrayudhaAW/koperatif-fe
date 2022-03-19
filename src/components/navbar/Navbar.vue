<template>
  <nav class="bg-white w-screen">
        <div class="flex justify-between h-20">
            <div class="flex items-center min-h-full px-8">
                <img class="h-10" src="../../assets/logo.png">
            </div>
                <div class="flex items-center">
                    <div class="px-3">
                        <span class="text-sm font-semibold	">Puji Astuti</span>
                    </div>
                    <div class="relative w-10 h-10">
                        <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image">
                    </div>
                    <div class="profile relative w-10 h-10" >
                        <button class="rounded inline-flex items-center" @click="isDrop" >
                            <img class="px-2 py-2" src="../../assets/chevron-down.svg" alt="user image">
                        </button>
                        <ul class="dropdown-menu hidden absolute pt-1 right-0" :class="{'show' : isActive}">
                            <li class="">
                                <a class="py-2 px-4 block bg-white hover:bg-slate-200 w-[7.5rem] text-sm" href="#">Lihat Profil</a>
                            </li>
                            <li class="">
                                <router-link to="/login" class="py-2 px-4 block bg-white hover:bg-slate-200 w-[7.5rem] text-sm">Keluar Akun</router-link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
  </nav>
</template>

<script>
export default {
    data: function () {
        return {
            isActive : false
        }
    },
    methods: {
        isDrop: function(){
            console.log('click')
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
.profile ul li{
       float: left;
    position: relative;
}

ul.show {
    display: block;
}
</style>