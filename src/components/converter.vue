<template>
  <div
    class="max-w-screen-lg lg:mx-auto bg-white shadow-lg lg:h-auto rounded-2xl mx-5 px-5 lg:px-10 py-10 p-5"
  >
    <div
      class="w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-between"
      v-if="!loading"
    >
      <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
        <p class="font-medium text-gray-500">Convert</p>
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
            v-model="rateCurrency"
            @change="getRates()"
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
        </div>
      </div>
      <img src="../assets/transfer-arrow.svg" class="w-12 h-12" alt="transfer" />
      <div class="w-full lg:w-2/5 border-2 rounded-xl h-max p-5">
        <p class="font-medium text-gray-500">To</p>
        <div class="flex flex-col md:flex-row justify-between mt-5">
          <select
            name="Currency"
            class="text-xl text-gray-900 p-3 focus:outline-none"
            id=""
            @change="getfxRate()"
            v-model="convertRate"
          >
            <option
              v-for="currency in filterCurrency"
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
    <div class="w-full flex justify-center" v-if="loading">
      <img src="../assets/loading.gif" class="w-80 h-80 rounded-full" alt="" />
    </div>
    <div class="mt-10 flex flex-col md:flex-row justify-between">
      <div>
        <p class="font-medium text-gray-500">Your Rate</p>
        <p class="font-semibold text-3xl text-green-500" v-if="!loading">{{ getRate }}</p>
        <p class="font-semibold text-3xl text-green-500" v-if="loading">-</p>
      </div>
      <button
        class="px-4 py-3 mt-5 md:mt-0 text-blue-600 text-base bg-blue-50 font-medium border rounded-lg border-blue-500"
        @click="switchcurrency()"
      >
        Switch Currencies
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      currencies: [],
      converted: "",
      fxRates: [],
      rate: "",
      rateCurrency: "GHS",
      capital: 1,
      convertRate: "USD",
      currencyswitch: "",
    };
  },
  methods: {
    getRates: function () {
      axios
        .get(
          "https://freecurrencyapi.net/api/v2/latest?apikey=3da85ea0-838f-11ec-85e1-1bfef815d72a&base_currency=" +
            this.rateCurrency
        )
        .then(
          (response) => {
            this.fxRates = response.data.data;
            setTimeout(() => {
              this.loading = false;
            }, 2000);
          }
          //console.log(response.data.data)
        );
    },
    getfxRate: function () {
      this.rate = this.fxRates[this.rateCurrency];
    },
    switchcurrency: function () {
      [this.convertRate, this.rateCurrency] = [this.rateCurrency, this.convertRate];
      // this.currencyswitch = this.convertRate;
      // this.convertRate = this.rateCurrency;
      // this.rateCurrency = this.currencyswitch;
      this.loading = true;
      this.getRates();
    },
  },
  watch: {
    rateCurrency: function (val) {
      // console.log(val);
      // console.log(this.currencies.indexOf(val));
      // console.log(this.currencies.indexOf("NZD"));
      // console.log(this.currencies.length);
      //console.log(this.currencies.length);
      // if (this.convertRate == val) {
      //   if (this.currencies[this.currencies.indexOf(val) + 1] != this.currencies.length) {
      //     this.convertRate = this.currencies[this.currencies.indexOf(val) + 1];
      //     console.log(this.currencies.indexOf(val));
      //   } else {
      //     //this.convertRate = this.currencies[this.currencies.indexOf(val) - 2];

      //     console.log(this.currencies.indexOf(val + "hello"));
      //   }
      // }
      if (this.convertRate == val) {
        if (this.currencies.indexOf(val) + 1 == this.currencies.length) {
          this.convertRate = this.currencies[0];
        } else {
          this.convertRate = this.currencies[this.currencies.indexOf(val) + 1];
        }
      }
    },
  },

  async created() {
    this.loading = true;
    const response = await axios.get(
      "https://freecurrencyapi.net/api/v2/latest?apikey=3da85ea0-838f-11ec-85e1-1bfef815d72a&base_currency=GHS"
    );

    this.currencies = Object.getOwnPropertyNames(response.data.data);
    this.fxRates = response.data.data;
    this.rate = response.data.data.USD;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  computed: {
    getConversion() {
      return (
        Math.round(
          (this.fxRates[this.convertRate] * this.capital + Number.EPSILON) * 100
        ) / 100
      );
    },
    getRate() {
      return this.fxRates[this.convertRate];
    },
    filterCurrency() {
      return this.currencies.filter((currency) => {
        return !currency.match(this.rateCurrency);
      });
    },
  },
};
</script>
