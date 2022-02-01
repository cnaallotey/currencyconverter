<template>
  <div
    class="max-w-screen-lg lg:mx-auto bg-white shadow-xl h-60 rounded-2xl mx-5 px-10 flex items-center justify-between p-5"
  >
    <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
      <p>Convert</p>
      <div class="flex mt-5">
        <input
          type="number"
          name="convert from"
          id=""
          value="1"
          class="border-b-2 p-3 border-gray-200 focus:outline-none"
        />
        <select
          name="Currency"
          class="text-xl text-gray-900 p-3 focus:outline-none"
          id=""
        >
          <option value="GBP" class="p-3 mb-3">GBP</option>
          <option value="CAD" class="p-3">CAD</option>
        </select>
      </div>
    </div>
    <img src="../assets/transfer-arrow.svg" class="w-12 h-12" alt="transfer" />
    <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
      <p>To</p>
      <div class="flex justify-between mt-5">
        <select
          name="Currency"
          class="text-xl text-gray-900 p-3 focus:outline-none"
          id=""
        >
          <option value="GBP" class="p-3 mb-3">GBP</option>
          <option value="CAD" class="p-3">CAD</option>
        </select>
        <p class="text-4xl">1000</p>
      </div>
    </div>
  </div>
</template>
