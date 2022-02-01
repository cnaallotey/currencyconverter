<template>
  <div
    class="max-w-screen-lg lg:mx-auto bg-white shadow-xl lg:h-60 rounded-2xl mx-5 px-10 py-10 flex flex-col lg:flex-row space-y-5 items-center justify-between p-5"
  >
    <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
      <p>Convert</p>
      <div class="flex flex-col md:flex-row mt-5">
        <input
          type="number"
          name="convert from"
          id=""
          v-model="capital"
          class="border-b-2 p-3 border-gray-200 focus:outline-none"
        />
        <select
          name="Currency"
          class="text-xl text-gray-900 p-3 focus:outline-none mt-5 md:mt-0"
          id=""
        >
          <option value="GHS">GHS</option>
          <option
            v-for="currency in currencies"
            :key="currency"
            :value="currency"
            class="p-3 mb-3"
          >
            {{ currency }}
          </option>
        </select>
      </div>
    </div>
    <img src="../assets/transfer-arrow.svg" class="w-12 h-12" alt="transfer" />
    <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
      <p>To</p>
      <div class="flex flex-col md:flex-row justify-between mt-5">
        <select
          name="Currency"
          class="text-xl text-gray-900 p-3 focus:outline-none"
          id=""
        >
          <option
            v-for="currency in currencies"
            :key="currency"
            :value="currency"
            class="p-3 mb-3"
          >
            {{ currency }}
          </option>
        </select>
        <p class="text-4xl mt-5 md:mt-0">{{ getConversion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      currencies: [],
      converted: "",
      rate: "",
      capital: 1,
    };
  },
  methods: {},

  created() {
    axios
      .get(
        "https://freecurrencyapi.net/api/v2/latest?apikey=3da85ea0-838f-11ec-85e1-1bfef815d72a&base_currency=GHS"
      )
      .then((response) => {
        this.currencies = Object.getOwnPropertyNames(response.data.data);
        this.rate = response.data.data.USD;
      });
  },
  computed: {
    getConversion() {
      return Math.round((this.rate * this.capital + Number.EPSILON) * 100) / 100;
    },
  },
};
</script>
