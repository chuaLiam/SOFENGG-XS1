<template>
  <v-dialog v-model="dialog"
            width="600">
    <template v-slot:activator="{ on }">
      <v-btn large fab flat color="green"
             dark
             v-on="on">
        <v-icon>directions</v-icon>
      </v-btn>
    </template>

    <v-flex class="text-xs-right">
      <v-card>
        <v-card-title class="headline green lighten-2"
                      width="500"
                      primary-title>
          Directions

          <v-spacer></v-spacer>

          <v-card-actions>
            <v-btn small fab flat color="primary"
                   @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card-title>
        <v-card-text class="text-xs-left">
          Directions Here
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
      </v-flex>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      directions_canteen: [
        'First Direction here.',
        'Second Direction here.'
      ]
    }
  }
}
</script>
