<template>
  <v-sheet light color="white" tile height="100%" id="login">
    <v-container>
      <AdminSnackbar />
      <div class="pt-16 d-flex flex-column align-center mb-8">
        <v-img width="112px" src="../../assets/svg/logo-fire-stacks.svg"></v-img>
        <span class="mt-2 title text-center">Criado por Fire Stacks</span>
      </div>
      <LoginCard />
    </v-container>
  </v-sheet>
</template>

<script>
import LoginCard from "@/components/admin/login/LoginCard";
import AdminSnackbar from "@/layout/admin/AdminSnackbar";
export default {
  name: "Login",
  components: { LoginCard, AdminSnackbar },
};
</script>

<style>
</style>