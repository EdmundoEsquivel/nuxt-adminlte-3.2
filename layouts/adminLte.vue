<template>
  <div>
    <Preloader />
    <NavBar />
    <SideBar />
    <nuxt class="content-wrapper" />
    <Footer />
    <ControlSidebar />
  </div>
</template>

<script>
import Preloader from '../components/pages/Preloader'
import NavBar from '../components/pages/NavBar'
import SideBar from '../components/pages/SideBar'
import Footer from '../components/pages/Footer'
import ControlSidebar from '../components/pages/ControlSidebar.vue'
export default {
  components: {
    NavBar, SideBar, Footer, Preloader, ControlSidebar
  }
}
</script>
