<template>
  <div id="home" class="d-flex align-center">
    <v-container class="d-flex flex-column align-center">
      <transition name="fade">
        <div style="max-width: 100%">
          <div class="d-flex justify-center flex-column">
            <v-img max-width="1050" src="@/assets/svg/title.svg" />
          </div>
          <div class="d-flex justify-center">
            <router-link class="chevron" :to="{ name: 'MainArts', params: { id: '1' } }">
              <v-icon size="26">mdi-chevron-up</v-icon>
            </router-link>
          </div>
        </div>
      </transition>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#home {
  min-height: 100vh;
  position: relative;

  .chevron {
    padding: 18px;
    transition: all 0.5s;
    position: absolute;
    bottom: 64px;
    right: calc(50% - 26px);

    &:hover {
      bottom: 70px;
    }
  }
}
</style>
