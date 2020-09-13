<template>
  <div>
    <v-divider/>
    <v-footer class="d-flex justify-center" color="white">
    <a
      class="firestacks-link my-12 d-flex flex-column align-center"
      target="_blank"
      href="https://www.facebook.com/firestacks/"
    >
      <div class="mb-2">
        <v-img width="120" src="@/assets/svg/fire-stacks-black-logo.svg" />
      </div>
      <span class="firestaks-text black--text">Criado por Firestacks</span>
    </a>
  </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.firestacks-link:hover .firestaks-text {
  color: #ff5722 !important;
  font-weight: bolder;
}
</style>