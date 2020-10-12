<template>
  <v-sheet class="pb-12" color="white">
    <v-container>
      <div class="d-flex justify-center">
        <router-link class="chevron" :to="{ name: 'MainHome' }">
          <v-icon color="black" size="26">mdi-chevron-down</v-icon>
        </router-link>
      </div>
      <ChipMenus />
      <div v-if="art[0]" class="text-center my-4">
        <h2 class="black--text text-h3">{{ art[0].label }}</h2>
      </div>
      <v-sheet
        v-if="art[0]"
        max-width="100%"
        max-height="1080"
        class="img-wrapper d-flex justify-center"
      >
        <v-dialog v-if="art[0].img">
          <template v-slot:activator="{ on }">
            <v-img v-on="on" contain :src="art[0].img" />
          </template>
          <v-card tile>
            <v-img contain aspect-ratio="1.777" :src="art[0].img" />
          </v-card>
        </v-dialog>
        <v-img
          aspect-ratio="1.777"
          v-if="!art[0].img"
          src="../../assets/svg/art-not-found.svg"
        />
      </v-sheet>
    </v-container>
    <v-container v-if="!art">
      <div class="text-center text-h4 my-4">
        <h2 class="black--text">Arte não encontrada.</h2>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import { db } from "../../plugins/firebase";
import ChipMenus from "@/layout/main/ChipMenus";

const arts = db.collection("arts");

export default {
  components: {
    ChipMenus
  },
  data: () => ({
    art: null
  }),
  methods: {
    setArt() {
      const id = this.$route.params.id;
      if (id) {
        this.$bind("art", arts.where("edition", "==", `${id}`));
      }
    }
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.setArt();
      }
    }
  }
};
</script>

<style lang="scss">
#arts {
  color: white !important;
}
.img-wrapper {
  border: solid 1px rgba(0, 0, 0, 1);
}
.chevron {
  padding: 18px;
  transition: all 0.5s;
  bottom: 64px;
  right: 50%;

  &:hover {
    transform: translateY(-10px);
  }
}
</style>