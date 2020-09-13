<template>
  <div id="admin">
    <AdminNavbar />
    <AdminSnackbar />
    <v-container>
      <router-view />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import AdminNavbar from '../../layout/admin/AdminNavbar'
import AdminSnackbar from '../../layout/admin/AdminSnackbar'
import Footer from '../../layout/admin/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { AdminNavbar, AdminSnackbar, Footer },
  methods: {
    ...mapActions(
      { 
        setSnackbar: "adminSnackbar/setSnackbar" 
      }
    )
  },
}
</script>

<style>

</style>