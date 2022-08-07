<template>
  <div class="about">
    LearnVuex2 - giá trị count: {{count}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LearnVuex2',
    computed: {
      ...mapState([
        'count'
      ])
    }
  }
</script>