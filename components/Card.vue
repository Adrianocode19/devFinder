<template>
  <section
    v-if="user"
    class="w-full bg-tertiary mt-4 rounded-2xl px-6 py-8 md:p-10 xl:p-12 xl:mt-6"
  >
    <div
      class="flex items-center gap-[19.5px] md:gap-10 xl:relative xl:items-start"
    >
      <img
        class="size-[70px] rounded-[50%] md:size-[117px]"
        :src="user.avatar_url"
        :alt="`Avatar of ${user.name}`"
      />
      <div class="flex flex-col text-white gap-[6px] md:gap-4 xl:gap-3">
        <h2 class="font-bold text-base md:text-[26px]">{{ user.name }}</h2>
        <h3 class="text-[13px] text-primary md:text-base">@{{ user.login }}</h3>
        <h4 class="text-[13px] md:text-base xl:absolute top-0 right-0">
          Joined {{ formatDate(user.created_at) }}
        </h4>
      </div>
    </div>
    <div
      class="mt-8 mb-6 xl:relative xl:top-[-55px] xl:right-[-160px] xl:w-[72%] xl:wrap-anywhere xl:mt-5"
    >
      <p class="text-white text-[13px]/[25px] md:text-base">
        {{ user.bio ? user.bio : "This profile has no bio" }}
      </p>
    </div>
    <ul
      class="flex justify-around py-[18px] px-4 bg-secondary rounded-xl text-white md:justify-start md:gap-24 md:px-8 xl:ml-[155px]"
    >
      <li
        v-for="(item, index) in stats"
        :key="index"
        class="flex flex-col items-center gap-2 md:items-start"
      >
        <p class="text-[11px] md:text-[13px]">{{ item.label }}</p>
        <p class="text-base font-bold md:text-[22px]">
          {{ user[item.key] }}
        </p>
      </li>
    </ul>
    <div
      class="grid gap-4 text-white mt-6 mb-4 md:mt-[30px] md:grid-cols-2 md:mb-0 xl:ml-[155px]"
    >
      <address
        class="flex gap-5 order-1"
        :class="{ 'opacity-50': !user.location }"
      >
        <img src="../assets/icons/icon-location.svg" alt="Location Icon" />
        <p class="text-[13px] order-1">
          {{ user.location ? user.location : "Not Available" }}
        </p>
      </address>

      <div
        class="flex gap-5 order-2 md:order-3"
        :class="{
          'opacity-50': !user.html_url,
        }"
      >
        <img src="../assets/icons/icon-website.svg" alt="Link Icon" />
        <a
          :href="user.html_url"
          class="text-[13px] cursor-pointer truncate block w-full overflow-hidden whitespace-nowrap hover:underline"
        >
          {{ user.html_url ? user.html_url : "Not Avaliable" }}
        </a>
      </div>

      <div
        class="flex gap-5 order-3 md:order-2 md:justify-end"
        :class="{
          'opacity-50': !user.twitter_username,
        }"
      >
        <img src="../assets/icons/icon-twitter.svg" alt="Twitter Icon" />
        <a
          :href="
            user.twitter_username
              ? `https://x.com/${user.twitter_username}`
              : undefined
          "
          class="text-[13px] truncate block w-full overflow-hidden whitespace-nowrap"
          :class="{ 'cursor-pointer hover:underline': user.twitter_username }"
        >
          {{ user.twitter_username ? user.twitter_username : "Not Available" }}
        </a>
      </div>

      <div class="flex gap-5 order-4" :class="{ 'opacity-50': !user.company }">
        <img src="../assets/icons/icon-company.svg" alt="Company Icon" />
        <p class="text-[13px]">
          {{ user.company ? user.company : "Not Available" }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type IUser from "~/interfaces/IUser";
import type IStat from "~/interfaces/IStat";
import { formatDate } from "../utils/formatDate";

const stats: IStat[] = [
  { label: "repos", key: "public_repos" },
  { label: "Followers", key: "followers" },
  { label: "Following", key: "following" },
];

defineProps<{
  user: IUser | null;
}>();
</script>
