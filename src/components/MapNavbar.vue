<template>
  <div>
    <v-layout v-if="!navCard">
      <v-flex class="text-xs-left">
        <v-btn large fab flat color="green"
               @click="navCard = true"
               px-0>
          <v-icon class="primary">map</v-icon>
        </v-btn>
      </v-flex>
      <v-flex class="text-xs-right">
        <Directions />
      </v-flex>
    </v-layout>

    <v-card v-else
            color="rgb(0, 255, 0, 0.2)">
      <v-layout>
        <v-flex class="text-xs-left">
          <v-btn fab flat color="primary">
            <v-icon class="primary">home</v-icon>
          </v-btn>
        </v-flex>
        <v-container xs6 sm4>
          <v-flex class="text-xs-center">
            <v-avatar size="80px" tile>
              <v-img :src="require('@/assets/GT/CLASSROOM.png')"> </v-img>
            </v-avatar>
            <v-avatar size="80px" tile>
              <v-img :src="require('@/assets/GT/FUNSPACE.png')"> </v-img>
            </v-avatar>
            <v-avatar size="80px" tile>
              <v-img :src="require('@/assets/GT/MPH.png')"> </v-img>
            </v-avatar>
            <v-avatar size="80px" tile>
              <v-img :src="require('@/assets/GT/STUDYSPACE.png')"> </v-img>
            </v-avatar>
          </v-flex>
        </v-container>
        <v-flex class="text-xs-right">
          <v-btn fab flat color="primary"
                 @click="navCard = false">
            <v-icon class="primary">close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import Directions from '../components/Directions.vue'

export default {
  components: { Directions },
  data () {
    return {
      navCard: false
    }
  }
}
</script>
