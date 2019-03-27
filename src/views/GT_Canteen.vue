<template>
  <v-card>
    <v-img :src="require('@/assets/GT/CANTEEN.png')">
      <MapNavbar />
      <v-layout>
        <v-flex class="text-xs-right">
          <Arrows_forward :link="'/GT_BHallway'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '../components/MapNavbar.vue'
import Arrows_back from '../components/Arrows_back.vue'
import Arrows_forward from '../components/Arrows_forward.vue'

export default {
  components: { MapNavbar, Arrows_back, Arrows_forward },
    data() {
      return {
      }
  }
}
</script>
