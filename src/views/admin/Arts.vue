<template>
  <div id="admin-arts">
    <v-card class="pa-4 grey darken-3">
      <ArtsInfo :artsLength="artsLength" :lastArt="lastArt"/>
      <ArtsCrud :artsLength="artsLength" :arts="arts"/>
    </v-card>
  </div>
</template>

<script>
import ArtsInfo from "@/components/admin/arts/ArtsInfo";
import ArtsCrud from "@/components/admin/arts/ArtsCrud";
import { db } from '../../plugins/firebase';

export default {
  components: { ArtsInfo, ArtsCrud },
  data: () => ({
    arts: []
  }),
  computed: {
    artsLength() {
      if(this.arts.length) {
        return this.arts.length
      }
    },
    lastArt() {
      if(this.arts.length) {
        return this.arts[this.artsLength - 1]
      }
    }
  },
  firestore: {
    arts: db.collection('arts').orderBy('edition')
  }
};
</script>

<style>
</style>