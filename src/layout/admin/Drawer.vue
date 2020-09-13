<template>
  <div>
    <v-navigation-drawer app v-model="drawer.isActive">
      <div class="px-4 pt-4">
        <v-btn color="fs" text>
          <span>Firestacks</span>
        </v-btn>
        <v-divider class="my-4"></v-divider>
        <span class="grey--text text--darken-2 font-weight-medium ml-4">Menu</span>
        <v-list class="mt-2">
          <v-list-item-group>
            <v-list-item v-for="item in navItems" :key="item.label" :to="{ name: item.to }">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="mt-4">
          <v-btn color="fs" @click="logout" block dark>
            <v-icon left>mdi-power</v-icon>
            <span>DESLOGAR</span>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { auth } from "../../plugins/firebase";
export default {
  props: {
    drawer: Object,
  },
  data: () => ({
    navItems: [
      {
        label: "Artes",
        icon: "mdi-brush",
        to: "AdminArts",
      },
      
    ],
  }),
  computed: {
    ...mapGetters({
      messagesCount: "adminMessages/getNewMessagesCount",
    }),
  },

  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "MainHome" });
      });
    },
  },
};
</script>

<style>
</style>