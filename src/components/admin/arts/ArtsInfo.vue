<template>
  <div>
    <v-row>
      <v-col order="2" order-sm="1" cols="12" sm="6">
        <div style="height: 100%" class="d-flex align-center">
          <div class="text-center text-sm-left">
            <h2 class=" text-h5 text-sm-h4 mb-2">Bem vindo ao painel de artes!</h2>
            <p class="caption mb-8">Aqui você pode ver, editar, excluir e adicionar artes.</p>

            <p v-if="artsLength">
              Você possui um total de
              <span class="font-weight-bold">{{artsLength}}</span> artes, faltam
              <span class="font-weight-bold">{{ 31 - artsLength }}</span> para completar sua coleção e sua última arte se chama <span class="font-weight-bold">{{ lastArt.name }}</span>
            </p>
            <p v-if="!artsLength">
              Você ainda não possui artes =(
            </p>
          </div>
        </div>
      </v-col>
      <v-col order="1" order-sm="2"  cols="12" sm="6">
        <div  class="d-flex flex-column align-center">
          <v-img contain max-width="80%" src="../../../assets/svg/admin-art.svg" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["artsLength", "lastArt"],
};
</script>

<style>
</style>