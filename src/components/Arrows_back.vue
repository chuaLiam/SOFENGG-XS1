<template>
<v-btn fab color="green"
       :to="link">
<v-icon class="primary">arrow_back</v-icon>
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
