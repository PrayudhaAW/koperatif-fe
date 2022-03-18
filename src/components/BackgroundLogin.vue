<template>
  <div class="flex flex-row">
    <div class="basis-2/3 ">
      <div class="h-14 h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
    <div class="basis-1/3">
      <div class="mx-10 login-input mt-2">
        <div>
          <input class="mt-5 w-full rounded-md bg-light-ringan px-5" type="text" placeholder="username" />
        </div>
        <div>
           <input class="mt-5 w-full rounded-md bg-light-ringan px-5" type="text" placeholder="password" />
        </div>
        <div class="" >
          <button class="rounded-md w-full mt-5 bg-blue-button hover:bg-blue-700 py-2 px-4 text-white">
            <router-link to="/home">Masuk</router-link>
          </button>
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