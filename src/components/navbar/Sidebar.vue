<template>
    <div className="top-58 left-0 w-[20vw] px-5 items-center text-white fixed h-full ">
        <li class="list-none active  mt-7 h-12 rounded-lg ">
            <router-link to="/home" class="flex items-center">
                <div class="relative h-12 ml-4 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#2897D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 6H23V12" stroke="#2897D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="pl-2.5 text-color-main text-bold-main">Dashboard</span>
            </router-link>
        </li>
        <li class="list-none mt-5 h-12 rounded-lg ">
            <router-link to="/home" class="flex items-center">
                <div class="relative h-12 ml-4 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="pl-2.5 text-color-black-medium text-bold-main">Keanggotaan</span>
            </router-link>
        </li>
        <li class="list-none mt-5 h-12 rounded-lg ">
            <router-link to="/home" class="flex items-center">
                <div class="relative h-12 ml-4 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.00021C21 2.89564 20.1046 3.00021 19 3.00021H5C3.89543 3.00021 3 3.89564 3 5.00021V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H19C20.1046 21.0002 21 21.1048 21 20.0002" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="7.39697" cy="11.6372" r="1.5" fill="#626262"/>
                    <path d="M16 15.5C16 14.6716 16.6716 14 17.5 14H21V17H17.5C16.6716 17 16 16.3284 16 15.5V15.5Z" stroke="#626262" stroke-width="1.6"/>
                    <path d="M16 8.5C16 7.67157 16.6716 7 17.5 7H21V10H17.5C16.6716 10 16 9.32843 16 8.5V8.5Z" stroke="#626262" stroke-width="1.6"/>
                    </svg>
                </div>
                <span class="pl-2.5 text-color-black-medium text-bold-main">Pinjaman</span>
            </router-link>
        </li>
        <li class="list-none mt-5 h-12 rounded-lg ">
            <router-link to="/home" class="flex items-center">
                <div class="relative h-12 ml-4 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 2V8H20" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 13H8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 17H8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 9H9H8" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="pl-2.5 text-color-black-medium text-bold-main">Transaksi</span>
            </router-link>
        </li>
        <li class="list-none mt-5 h-12 rounded-lg divide-y divide-y-2 ">
            <router-link to="/home" class="flex items-center">
                <div class="relative h-12 ml-4 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2099 15.8901C20.5737 17.3946 19.5787 18.7203 18.3118 19.7514C17.0449 20.7825 15.5447 21.4875 13.9424 21.8049C12.34 22.1222 10.6843 22.0422 9.12006 21.5719C7.55578 21.1015 6.13054 20.2551 4.96893 19.1067C3.80733 17.9583 2.94473 16.5428 2.45655 14.984C1.96837 13.4252 1.86948 11.7706 2.16851 10.1647C2.46755 8.55886 3.15541 7.05071 4.17196 5.77211C5.18851 4.49351 6.5028 3.4834 7.99992 2.83008" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="pl-2.5 text-color-black-medium text-bold-main">Laporan</span>
            </router-link>
        </li>
    </div>
</template>

<script>
export default {

}
</script>

<style>
li.active {
    background: rgba(30, 133, 191, 0.34);
}

</style>