<template>
  <nav class="w-full bg-slate-900 py-8">
    <div
      class="max-w-screen-xl mx-auto flex justify-between items-center px-5 md:px-10 xl:px-0"
    >
      <div class="flex items-center">
        <img src="../assets/currency.svg" class="w-10 h-10 mr-2 animate-bounce" alt="" />
        <h2
          class="font-extrabold text-lg md:text-xl uppercase text-white cursor-pointer select-none"
        >
          Currency converter
        </h2>
      </div>
      <div
        class="flex items-center cursor-pointer bg-black p-3 bg-opacity-0 rounded-lg hover:bg-opacity-20 transform transition delay-200 ease-in-out"
        @click="repo()"
      >
        <img src="../assets/github.svg" class="w-8 h-8 mr-2" alt="github" />
        <p class="text-base font-medium text-white tracking-normal hidden md:contents">
          View Repo
        </p>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

<script>
export default {
  methods: {
    repo: function () {
      window.open("https://github.com/cnaallotey/currencyconverter", "_blank");
    },
  },
};
</script>
