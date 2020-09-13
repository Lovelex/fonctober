<template>
  <v-snackbar app bottom :color="snackbarMode.color" v-model="snackbar.isActive">
		<div class="d-flex justify-space-between">
      <span>{{ snackbar.text }}</span>
      <div>
        <v-icon>{{ snackbarMode.icon }}</v-icon>
      </div>
    </div>
	</v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      snackbar: "adminSnackbar/getSnackbar"
    }),
    snackbarMode() {
      const snacks = {
        success: {
          color: "success",
          icon: "mdi-checkbox-marked-circle"
        },
        error: {
          color: "error",
          icon: "mdi-close-circle"
        },
        info: {
          color: "info",
          icon: "mdi-alert-circle"
        },
        warning: {
          color: "warning",
          icon: "mdi-alert"
        }
			};
			
			return snacks[this.snackbar.mode]
    }
  }
};
</script>

<style>
</style>