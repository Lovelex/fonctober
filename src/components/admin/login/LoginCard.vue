<template>
  <div class="login-card mx-auto">
    <div class="login-card-header deep-orange white--text py-4">
      <span class="display-1">Admin</span>
    </div>
    <div class="login-card-body px-8 elevation-4">
      <v-form ref="form" @submit.prevent.stop="submit">
        <div class="py-10">
          <v-text-field
            validate-on-blur
            :rules="[rules.required, rules.email]"
            v-model="user.email"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            validate-on-blur
            :rules="[rules.required, rules.min]"
            v-model="user.password"
            label="Senha"
            type="password"
          ></v-text-field>
        </div>
        <v-btn :loading="isLoading" type="submit" dark color="deep-orange" class="mb-8" block>entrar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../../../plugins/firebase.js";
import { mapActions } from "vuex";
// mixins
import form from "../../../mixins/form";
export default {
  mixins: [form],
  data: () => ({
    user: {
      email: "teste@teste.com",
      password: "123456",
    },
  }),
  methods: {
    ...mapActions({
      setSnackbar: "adminSnackbar/setSnackbar",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.startLoading();
        auth
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push({ name: "Admin" });
          })
          .catch((e) => {
            this.setSnackbar({
              mode: "error",
              text: e.message,
            });
          })
          .finally(() => {
            this.stopLoading();
          });
      }
    },
  },
};
</script>

<style lang="scss">
.login-card {
  max-width: 460px;
  .login-card-header {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 100%;
    text-align: center;
  }
  .login-card-body {
    width: 100%;
    border: rgba($color: #ff5722, $alpha: 0.5) solid 1px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>