<template>
  <div class="flex flex-row">
    <div class="basis-2/3 ">
      <div class="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
    <div class="basis-1/3">
      <div class="mx-10 mt-2 pt-20">
        <div class="flex justify-center">
          <img class="h-16" src="../assets/logo.png">
        </div>
        <div class="pt-10">
          <input class="mt-5 w-full rounded-md bg-light-ringan px-5" type="text" placeholder="username" />
        </div>
        <div>
           <input class="mt-5 w-full rounded-md bg-light-ringan px-5" type="text" placeholder="password" />
        </div>
        <div class="" >
          <!-- <button class="rounded-md  mt-5 bg-blue-button hover:bg-blue-700 "> -->
            <router-link to="/home" class="rounded-md flex mt-14 text-white h-16 justify-center items-center bg-main-blue">
              <span>Masuk</span>
            </router-link>
          <!-- </button> -->
        </div>
        <div>
           <button class="mt-5 w-full rounded-md outline  outline-1 bg-blue-button-outline  outline-slate-900	" >Register</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
    data() {
        return { }
    },
}
</script>

<style>
.login-input {
  padding-top:200px;
}
.bg-light-ringan {
  background-color: #F9F9F9;
  height: 58px;
}
.bg-blue-button {
  color:white;
  background-color: #2897D6;
  height: 58px;
}

.bg-blue-button-outline {
  color:#2897D6;
  outline-color: #2897D6;
  outline-width: 2px;
  height: 58px;
}
</style>