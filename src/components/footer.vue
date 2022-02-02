<template>
  <footer class="w-full py-10 mt-20">
    <div
      class="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-5 md:px-10 xl:px-0"
    >
      <p class="text-slate-900 text-base font-normal tracking-normal">
        2022 UX Geek Inc. Made with ❤️ by Charles Nii Adotey Allotey
      </p>
      <div class="flex items-center">
        <p>Follow Me 👍</p>
        <div class="flex ml-4">
          <img
            src="../assets/github2.svg"
            class="w-16 h-16 p-3"
            alt="github"
            @click="github()"
            title="cnaallotey"
          />
          <img
            src="../assets/linkedin.svg"
            class="w-16 h-16 p-3"
            alt="linkedin"
            @click="linkedin()"
            title="Charles Allotey"
          /><img
            src="../assets/twitter.svg"
            class="w-16 h-16 p-3"
            alt="twitter"
            @click="twitter()"
            title="@adotey_"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    github: function () {
      window.open("https://www.github.com/cnaallotey", "_blank");
    },
    linkedin: function () {
      window.open("www.linkedin.com/in/charles-allotey-633338116", "_blank");
    },
    twitter: function () {
      window.open("https://twitter.com/adotey_", "_blank");
    },
  },
};
</script>
