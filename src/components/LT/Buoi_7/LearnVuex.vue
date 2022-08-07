<template>
  <div class="about">
    LearnVuex - giá trị count: {{count}}<br>
    <!-- {{doneTodos}}<br>
    {{$store.getters.doneTodosIndex(3)}} -->
    <button @click="changecount()">Tăng count</button>


  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex'

  export default {
    name: 'LearnVuex',
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters(['doneTodos']), 
    },
    methods: {
      ...mapMutations([
         'increment'
      ]),
      changecount () {
        let input = {
            number : 10,
            text :'zent'
        }
        this.increment(input)
      }
    },
    mounted() {
        console.log(this.$store.getters.doneTodosIndex(1))

    }
  }
</script>