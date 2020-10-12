<template>
  <v-sheet width="100%">
    <div class="pa-4">
      <v-chip
        v-for="(art,i) in arts"
        :key="i"
        class="ma-2"
        :to="{ name: 'MainArts', params: { id: art.edition } }"
        outlined
        color="white"
      >{{art.name}}</v-chip>
    </div>
  </v-sheet>
</template>

<script>
import { db } from "../../plugins/firebase";

export default {
  data: () => ({
    arts: [],
  }),
  firestore: {
    arts: db.collection("arts").orderBy("edition")
  }
};
</script>

<style>
</style>