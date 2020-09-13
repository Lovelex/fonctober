<template>
  <v-app-bar height="50">
    <v-spacer />
    <a class="img" target="_blank" :href="imgUrl">
      <v-img contain width="192" src="@/assets/svg/nav-img.svg" />
    </a>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    imgUrl: "https://inktober.com/rules",
  }),
};
</script>

<style scoped lang="scss">
.img {
  transition: border 0.75s;
  padding: 6px;
  &:hover {
    border: 1px solid white;
  }
}
</style>