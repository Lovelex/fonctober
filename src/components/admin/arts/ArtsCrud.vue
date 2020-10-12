<template>
  <div class="admin-arts-crud mt-10">
    <v-card color="grey darken-2" class="pa-2">
      <v-btn @click="openInSubmitMode" fab color="blue" absolute top right>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <ArtsDialog @closeDialog="dialog.isActive = $event" :mode="mode" :dialog="dialog" :art="art" />
      <div class="mt-4">
        <v-row>
          <v-col cols="12" sm="4" :key="i" v-for="(art,i) in arts">
            <div>
              <h5 class="d-flex justify-center">{{ art.name }}</h5>
            </div>
            <v-card class="pa-1">
              <v-dialog>
                <template v-slot:activator="{on}">
                  <v-img v-on="on" aspect-ratio="1.777" :src="art.img" />
                </template>
                <v-card tile>
                  <v-img contain aspect-ratio="1.777" :src="art.img" />
                </v-card>
              </v-dialog>
              <div class="crud-icons">
                <v-icon @click="openInEditMode(art)" class="mr-4" color="warning">mdi-pencil</v-icon>
                <v-icon @click="removeArt(art)" color="error">mdi-delete</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import ArtsDialog from "./ArtsDialog";
import { db } from "../../../plugins/firebase";
import { mapActions } from "vuex";

export default {
  props: ["arts", "artsLength"],
  components: { ArtsDialog },
  data: () => ({
    mode: "update",
    dialog: {
      isActive: false,
    },
    art: {},
  }),
  computed: {
    startForm() {
      return {
        edition: parseInt(`${this.artsLength + 1}`),
        name: `#${this.artsLength + 1} `,
        img: "",
      };
    },
  },
  methods: {
    ...mapActions({
      setSnackbar: "adminSnackbar/setSnackbar",
    }),
    resetForm() {
      this.art = this.startForm;
    },
    setMode(mode) {
      this.mode = mode;
    },
    openDialog() {
      this.dialog.isActive = true;
    },
    openInSubmitMode() {
      this.setMode("submit");
      this.resetForm();
      this.openDialog();
    },
    openInEditMode(art) {
      this.setMode("update");
      this.openDialog();
      this.art = art;
    },
    removeArt(art) {
      if (confirm(`Quer mesmo excluir a arte ${art.name || art.edition}`)) {
        const ref = db.collection("arts").doc(art.id);
        ref
          .delete()
          .then(() => {
            this.setSnackbar({
              mode: "success",
              text: `Arte ${art.name || art.edition} excluída com sucesso`,
            });
          })
          .catch((e) => {
            this.setSnackbar({
              mode: "error",
              text: e.message,
            });
          });
      }
    },
  },
  created() {
    this.resetForm();
  },
};
</script>

<style>
.crud-icons {
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 12px rgba(0, 0, 0, 1);
  margin: 4px;
  padding: 4px;
  position: absolute;
  right: 2px;
  bottom: 2px;
}
</style>