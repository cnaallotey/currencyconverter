<template>
  <div class="bg-slate-900 w-full pb-20">
    <div class="max-w-screen-lg mx-auto px-5 md:px-10 xl:px-0">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 py-20 lg:py-52">
          <h1
            class="text-5xl lg:text-6xl font-black tracking-normal leading-none text-white"
          >
            Currency Rates Updated Daily
          </h1>
          <p class="text-gray-200 font-normal tracking-normal text-xl mt-5">
            Get the latest exchange rates on 100+ currencies
          </p>
        </div>
        <div class="w-full md:w-1/2 my-0 lg:my-20 md:px-10 h-96 lg:h-auto space-y-6">
          <div class="w-full">
            <div class="p-3 w-40 mx-auto bg-white rounded-xl shadow-2xl">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-500">USD</p>
                <img class="h-6 w-6" src="../assets/usa-flag.svg" />
              </div>
              <p class="text-2xl font-semibold mt-1">{{ rates.USD }}</p>
            </div>
          </div>
          <div class="flex w-full items-center justify-between">
            <div class="w-full lg:w-auto">
              <div class="p-3 w-40 mx-auto bg-white rounded-xl shadow-2xl">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-500">AUD</p>
                  <img class="h-6 w-6" src="../assets/australia.svg" />
                </div>
                <p class="text-2xl font-semibold mt-1">{{ rates.AUD }}</p>
              </div>
            </div>
            <div class="w-full lg:w-auto">
              <div class="p-3 w-40 mx-auto bg-white rounded-xl shadow-2xl">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-500">PLN</p>
                  <img class="h-6 w-6" src="../assets/poland.svg" />
                </div>
                <p class="text-2xl font-semibold mt-1">{{ rates.PLN }}</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="p-3 w-40 mx-auto bg-white rounded-xl shadow-2xl">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-500">CAD</p>
                <img class="h-6 w-6" src="../assets/canada.svg" />
              </div>
              <p class="text-2xl font-semibold mt-1">{{ rates.CAD }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      accessKey: "95da933ac74de657c8df46d5bba8597f",
      rates: [],
    };
  },

  created() {
    axios
      .get(
        "https://freecurrencyapi.net/api/v2/latest?apikey=3da85ea0-838f-11ec-85e1-1bfef815d72a&base_currency=GHS"
      )
      .then((response) => (this.rates = response.data.data));
  },
  computed: {
    getPounds() {},
  },
};
</script>
