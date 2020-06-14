<template>
  <div class="lists" ref="wrapper">
    <div>
      <div class="area">
        <p class="title">当前位置</p>
        <ul class="mp-list">
          <li >{{this.currentCity}}</li>
      </ul>
      </div>
      <div class="hot-cities">
        <p class="title">热门城市</p>
        <ul class="mp-list">
            <li v-for="item in HotCites" @click="handleCityClick(item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div v-for="(items, key) in SortCities" :key="key" :ref="key">
        <p class="title">{{ key }}</p>
        <ul class="mp-list">
          <li v-for="item in items" @click="handleCityClick(item.cityname)">{{ item.cityname }}</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
import BScroll from "better-scroll"
import {mapState, mapMutations} from "vuex"
export default {
  name: "CityList",
  props: {
    HotCites:Array,
    SortCities: {},
    letter:String
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
  methods:{
    handleCityClick(city){
      //this.$store.commit('changeCity','city')
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch:{
    letter(){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
};
</script>
<style scoped>
  .lists{
    position: absolute;
    top:10%;
    left:0;
    right:0;
    bottom: 0;
    overflow: hidden;
    background: #f5f5f5;
  }
.title {
  margin: 0.75rem 0.938rem;
  line-height: 0.75rem;
  font-size: 0.75rem;
  
}
.mp-list {
  overflow: hidden;
  background: #fff;
}
.mp-list li {
  width: 25%;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  line-height: 2.85rem;
  border-bottom: 1px solid #ddd;
}
</style>
