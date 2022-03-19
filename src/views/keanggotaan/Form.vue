<template>
  <div class="px-5">
      <div class="pt-7 grid grid-cols-2">
      <div class="">
        <span class="font-semibold text-xl text-slate-400">Daftar Anggota</span>
        <span class="font-semibold text-xl f-black-medium px-5">></span>
        <span class="font-semibold text-xl f-black-medium">Tambah Anggota</span>
      </div>
      <div class="text-right w-full "><button class="px-2 h-9 rounded-md bg-main-blue text-white">Tambah Anggota</button></div>
      </div>
      <div class="pt-5">
        <div class="rounded-lg bg-white h-full px-4 grid grid-cols-2 divide-x py-5">
            <div class="grid grid-cols-1 gap-4 px-5">
                <div class="">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Nama Lengkap"/>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Status"/>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="No Telp"/>
                </div>
                <div class="rounded-lg bg-black-light w-full h-full h-14 mt-5 flex items-center px-4">
                    <select class="bg-transparent w-full f-black-medium outline-0">
                        <option selected disabled>Jenis Kelamin</option>
                        <option >Laki-laki</option>
                        <option >Perempuan</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 mt-5 gap-4">
                    <div>
                        <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Tempat Lahir"/>
                    </div>
                    <div>
                        <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="date" placeholder="Tanggal Lahir"/>
                    </div>
                </div>
                <div class="rounded-lg bg-black-light w-full h-full h-14 mt-5 flex items-center px-4">
                    <select class="bg-transparent w-full f-black-medium outline-0">
                        <option selected disabled>Agama</option>
                        <option >Islam</option>
                        <option >Hindu</option>
                        <option >Budha</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 px-5">
                <div class="rounded-lg bg-black-light w-full h-full h-14 mt-1 flex items-center px-4">
                    <select class="bg-transparent w-full f-black-medium outline-0">
                        <option selected disabled>Status</option>
                        <option >Menikah</option>
                        <option >Jomblo</option>
                    </select>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Nama Ibu Kandung"/>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Pekerjaan"/>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Gaji Perbulan"/>
                </div>
                <div class="mt-5">
                    <input class="rounded-md w-full bg-black-light h-14 pl-5 outline-0 text-sm f-black-medium" type="text" placeholder="Alamat KTP"/>
                </div>
                <div class="grid grid-cols-4">
                    <div class="h-16 m-4 flex flex-col justify-center items-center outline outline-dashed outline-slate-200">
                        <img class="h-14" src="../../assets/ico-uploadfoto.png" alt="">
                    </div>
                    <div class="flex flex-col w-full col-span-2 justify-center">
                        <span class="text-sm font-semibold mb-2">Unggah Foto Anggota</span>
                        <span class="text-xs">Max ukuran File 3mb</span>
                    </div>
                    <div class="flex flex-col justify-center">
                        <button class="text-color-main h-7 rounded-md outline outline-1 outline-blue-400 ">Pilih Foto</button>
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
</style>