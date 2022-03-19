<template>
  <div class="px-5">
      <div class="pt-7">
        <span class="font-semibold text-xl f-black-medium">Daftar Anggota</span>
      </div>
      <div class="grid grid-flow-row-dense grid-cols-4 gap-5 pt-4">
        <div class="rounded-lg bg-white h-24 flex flex-col p-5">
            <div class="text-right">
                <span class="text-sm font-normal f-black-medium">Total Simp. Pokok</span>
            </div>
            <div class="text-right p-1">
                <span class="text-xl font-semibold f-success">Rp. 15.000.000,-</span>
            </div>
        </div>
        <div class="rounded-lg bg-white h-24 flex flex-col p-5">
          <div class="text-right">
                <span class="text-sm font-normal f-black-medium">Total Simp. Wajib</span>
            </div>
            <div class="text-right p-1">
                <span class="text-xl font-semibold f-success">Rp. 15.000.000,-</span>
          </div>
        </div>
        <div class="rounded-lg bg-white h-24 flex flex-col p-5">
          <div class="text-right">
                <span class="text-sm font-normal f-black-medium">Total Simp. Sukarela</span>
            </div>
            <div class="text-right p-1">
                <span class="text-xl font-semibold f-success">Rp. 15.000.000,-</span>
          </div>
        </div>
        <div class="rounded-lg bg-white h-24 flex flex-col p-5">
          <div class="text-right">
                <span class="text-sm font-normal f-black-medium">Total Anggota</span>
            </div>
            <div class="text-right p-1">
                <span class="text-xl font-semibold f-black-medium">47.800</span>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="rounded-lg bg-white h-full px-4">
          <div class="grid grid-flow-row-dense grid-cols-5 gap-5 pt-4">
            <div class="col-span-2">
              <div class="border rounded-lg border-slate-800 p-2">
                <input class="w-full outline-0" type="text" placeholder="search"/>
              </div>
            </div>
            <div>
              <div class="border rounded-lg border-slate-800 p-2">
                <select class="w-full outline-0" />
              </div>
            </div>
            <div>
              <div class="border rounded-lg border-slate-800 p-2">
                <select class="w-full outline-0" />
              </div>
            </div>
            <div>
              <button class="rounded-lg p-2 bg-main-blue w-full text-white" ><router-link to="/keanggotaan/form">Tambah Anggota</router-link></button>
            </div>
          </div>
          <div class="pt-5">
            <table class="border-collapse table-auto w-full text-sm">
              <thead class="h-10 border-b-2">
                <tr>
                <th>Nama Anggota</th>
                <th>Kode Anggota</th>
                <th>Simp. Pokok</th>
                <th>Simp. Wajib</th>
                <th>Simp. Sukarela</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="h-16 text-center" >
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                <tr class="h-16 text-center">
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                <tr class="h-16 text-center">
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                <tr class="h-16 text-center">
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                <tr class="h-16 text-center">
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                <tr class="h-16 text-center">
                <td>Herman</td>
                <td>K123456</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="f-success">Rp. 123.456,-</td>
                <td class="">
                  <span class="rounded-2xl px-10 py-2 bg-main-opacity text-color-main text-xs">Aktif</span>
                </td>
                </tr>
                
              </tbody>
            </table>
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