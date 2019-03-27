<template>
  <v-card>
    <v-img :src="require('@/assets/GT/MPH.png')">
      <span><MapNavbar></MapNavbar></span>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '../components/MapNavbar.vue'

export default {
  components: { MapNavbar },
  data () {
  }
}
</script>
