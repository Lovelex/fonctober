<template>
  <div id="main">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/layout/main/Navbar'
import Footer from '@/layout/main/Footer'

export default {
  components: { Navbar, Footer }
}
</script>

<style>

</style>