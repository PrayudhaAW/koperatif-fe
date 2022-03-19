<template>
  <div class="px-5">
      <div class="pt-7 grid grid-cols-2">
      <div class="">
        <span class="font-semibold text-xl text-slate-400">Daftar Anggota</span>
        <span class="font-semibold text-xl f-black-medium px-5">></span>
        <span class="font-semibold text-xl f-black-medium">Detail Anggota</span>
      </div>
      <div class="text-right w-full "><button class="px-2 h-9 rounded-md bg-main-blue text-white">Tambah Anggota</button></div>
      </div>
      <div class="pt-5 ">
        <div class="rounded-lg bg-white h-full px-6 grid grid-cols-3 py-5 gap-5">
            <div class="col-span-2">
                <div class="flex flex-row ">
                    <div class="h-32 w-32 pl-4">
                        <img class="rounded-full outline outline-2 outline-main-blue h-28" src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                    </div>
                    <div class="flex flex-col col-span-2 justify-center px-6">
                        <span class="font-semibold text-lg">Herman Ardianysah</span>
                        <span class="text-sm f-black-medium py-2">Karyawan Swasta</span>
                        <span class="rounded-2xl text-center py-2 bg-success-opacity f-success w-24 text-xs">Anggota Aktif</span>
                    </div>
                </div>
                <div class="grid grid-cols-3 bg-black-light p-6 divide-x mt-6 mr-8">
                    <div class="flex flex-col">
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">Kode Anggota</span>
                            <span class="text-md font-semibold f-black-medium">KAA000034</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">NIK KTP</span>
                            <span class="text-md font-semibold f-black-medium">2345678920342589</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">No Telp</span>
                            <span class="text-md font-semibold f-black-medium">089473889423</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">Tempat Tanggal Lahir</span>
                            <span class="text-md font-semibold f-black-medium">Malang, 20 Agustus 1991</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-md mb-2 f-black-semimedium">Gaji Perbulan</span>
                            <span class="text-md font-semibold f-black-medium">Rp 5.000.000</span>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-2 pl-5">
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">Kode Anggota</span>
                            <span class="text-md font-semibold f-black-medium">KAA000034</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">NIK KTP</span>
                            <span class="text-md font-semibold f-black-medium">2345678920342589</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">No Telp</span>
                            <span class="text-md font-semibold f-black-medium">089473889423</span>
                        </div>
                        <div class="flex flex-col mb-8">
                            <span class="text-md mb-2 f-black-semimedium">Tempat Tanggal Lahir</span>
                            <span class="text-md font-semibold f-black-medium">Malang, 20 Agustus 1991</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-md mb-2 f-black-semimedium">Gaji Perbulan</span>
                            <span class="text-md font-semibold f-black-medium">Rp 5.000.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-row-3 gap-5 pt-10">
                <div class="rounded-lg ">
                    <div class="bg-slate-300 h-48 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row items-center">
                        <img class="rounded-full mx-4 outline outline-2 outline-main-blue h-28" src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                        <div class="flex flex-col mx-2"> 
                            <span class="text-sm mb-2 text-white">Total Simpanan</span>
                            <span class="text-lg font-semibold mb-2 text-white ">Rp. 2.350.000</span>
                            <span class="text-sm text-white mb-2">Dibayarkan pada 10 maret 2021</span>
                        </div>
                    </div>
                   
                </div>
                <div class="rounded-lg ">
                    <div class="bg-slate-300 h-48 rounded-md bg-gradient-to-r from-cyan-400 to-teal-400 flex flex-row items-center">
                        <img class="rounded-full mx-4 outline outline-2 outline-main-blue h-28" src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                        <div class="flex flex-col mx-2"> 
                            <span class="text-sm mb-2 text-white">Total Simpanan Wajib</span>
                            <span class="text-lg font-semibold mb-2 text-white ">Rp. 6.500.000</span>
                            <span class="text-sm text-white mb-2">Periode Oktober sudah dibayarkan</span>
                            <button class="text-color-main bg-white rounded h-8 flex flex-row items-center">
                                <span class="w-5/6">Bayar</span>
                                <img src="../../assets/ico-pay.png" class="h-5" alt="">
                            </button>
                        </div>
                    </div>
                   
                </div>
                <div class="rounded-lg ">
                    <div class="bg-slate-300 h-48 rounded-md bg-gradient-to-r from-blue-700 to-slate-400 flex flex-row items-center">
                        <img class="rounded-full mx-4 outline outline-2 outline-main-blue h-28" src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                        <div class="flex flex-col mx-2"> 
                            <span class="text-sm mb-2 text-white">Total Simpanan Sukarela</span>
                            <span class="text-lg font-semibold mb-2 text-white ">Rp. 3.250.000</span>
                            <button class="text-color-main bg-white rounded h-8 flex flex-row items-center">
                                <span class="w-5/6">Bayar</span>
                                <img src="../../assets/ico-pay.png" class="h-5" alt="">
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.bg-main-opacity {
  background: rgba(40, 151, 214, 0.14);
}
.bg-success-opacity {
  background: rgba(49, 191, 109, 0.14);
}
</style>