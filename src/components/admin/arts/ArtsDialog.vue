<template>
  <div class="admin-arts-dialog">
    <v-dialog :width="$vuetify.breakpoint.smAndDown ? '100%' : '80%'" v-model="dialog.isActive">
      <v-card light color="white" class="pa-4">
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-dialog>
                <template v-slot:activator="{on}">
                  <v-img v-on="on" aspect-ratio="1.777" :src="art.img" />
                </template>
                  <v-card tile>
                    <v-img contain aspect-ratio="1.777" :src="art.img" />
                  </v-card>

              </v-dialog>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <v-form>
                <v-text-field hint="Somente edite esse campo para correções, ele é fundamental para o carregamento na página principal" label="Edição" v-model="art.edition" />
                <v-text-field label="Nome" v-model="art.name" />
                <v-text-field label="Imagem (URL)" v-model="art.img" />
                <div class="d-flex justify-end">
                  <v-btn @click="submitArt" v-if="mode === 'submit'" color="info">
                    <v-icon left>mdi-send</v-icon>
                    <span>Adicionar</span>
                  </v-btn>
                  <v-btn @click="updateArt" v-if="mode === 'update'" color="warning">
                    <v-icon left>mdi-pencil</v-icon>
                    <span>Editar</span>
                  </v-btn>
                  <v-btn @click="closeDialog" color="secondary" class="ml-2">Fechar</v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '../../../plugins/firebase';
import { mapActions } from 'vuex';


export default {
  props: ["dialog", "art", "mode"],
  methods: {
    ...mapActions({
      setSnackbar: 'adminSnackbar/setSnackbar'
    }),
    closeDialog() {
      this.$emit('closeDialog', false)
    },
    updateArt() {
      const ref = db.collection('arts').doc(this.art.id)
      ref
        .update(this.art)
        .then(() => {
          this.closeDialog()
          this.setSnackbar({
            mode: 'success',
            text: 'Arte editada com sucesso'
          })
        })
        .catch(e => {
          this.setSnackbar({
            mode: 'error',
            text: e.message
          })
        })
    },
    submitArt() {
      const ref = db.collection('arts').doc()
      ref
        .set(this.art)
        .then(() => {
          this.closeDialog()
          this.setSnackbar({
            mode: 'success',
            text: 'Arte adicionada com sucesso'
          })
        })
        .catch(e => {
          this.setSnackbar({
            mode: 'error',
            text: e.message
          })
        })
    }
  },

};
</script>

<style>
</style>