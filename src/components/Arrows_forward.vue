<template>
  <v-btn fab color="green"
         :to="link">
    <v-icon class="primary">arrow_forward</v-icon>
  </v-btn>
</template>
<script>
  export default {
  props:['link'],
    data() {
      return {
      }
  }
}
</script>
