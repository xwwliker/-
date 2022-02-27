<template>
<div>
  <TypeNav/>
  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
  <Brand></Brand>
</div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer/index.vue'
import Recommend from '@/views/Home/Recommend/index.vue'
import Rank from '@/views/Home/Rank/index.vue'
import Like from '@/views/Home/Like/index.vue'
import Floor from '@/views/Home/Floor/index.vue'
import Brand from '@/views/Home/Brand/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'Login',
  components: {
    ListContainer, Recommend, Rank, Like, Floor, Brand
  },
  computed: {
    ...mapState({
      floorList: (state) => { return state.home.floorList }
    })
  },
  mounted () {
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style>

</style>
