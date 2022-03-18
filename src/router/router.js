import {createRouter, createWebHistory} from "vue-router"
import Login from '../components/BackgroundLogin.vue'
import Home from '../views/Home.vue'
import Keanggotaan from '../views/Keanggotaan.vue'
import Pinjaman from '../views/Pinjaman.vue'
import Laporan from '../views/Laporan.vue'
import Transaksi from '../views/Transaksi.vue'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/home', component: Home },
    { path: '/keanggotaan', component: Keanggotaan },
    { path: '/pinjaman', component: Pinjaman },
    { path: '/laporan', component: Laporan },
    { path: '/transaksi', component: Transaksi },
    { path: '/login', name:'Login', component: Login },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router