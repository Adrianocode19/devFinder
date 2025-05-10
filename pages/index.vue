<template>
  <Header />
  <Search :loadUser="handleLoadUser" :not-found="notFound" />
  <Card :user="user" />
</template>

<script setup lang="ts">
import axios from "axios";
import type IUser from "~/interfaces/IUser";

import { ref } from "vue";

const user = ref(null);
const notFound = ref(false);
const error = ref(false);

const handleLoadUser = async (userName: string) => {
  try {
    user.value = null;
    notFound.value = false;
    error.value = false;

    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    user.value = response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 404) {
        notFound.value = true;
      } else {
        error.value = true;
      }
    } else {
      error.value = true;
    }
    user.value = null;
    console.error(err);
  }
};
</script>
