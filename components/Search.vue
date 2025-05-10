<template>
  <div
    class="flex w-full items-center bg-tertiary rounded-2xl gap-2 p-2 mt-9 md:gap- md:pl-8"
  >
    <img
      class="size-5"
      src="../assets/icons/icon-search.svg"
      alt="Search Icon"
    />
    <input
      type="text"
      placeholder="Search GitHub username..."
      class="bg-transparent outline-none text-white text-[13px] w-full md:text-lg"
      v-model="userName"
    />
    <div
      v-if="notFound"
      class="flex justify-center w-full text-[11px] text-[#F74646] font-bold md:text-[15px] md:w-[45%]"
    >
      <p>No results</p>
    </div>
    <button
      class="bg-primary py-3 px-4 rounded-xl text-white text-sm font-bold hover:bg-hoverColor transition-all md:text-base"
      @click="loadUser(userName)"
    >
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
const userName = ref<string>("");

defineProps<{
  loadUser: (username: string) => void;
  notFound: boolean;
}>();
</script>
