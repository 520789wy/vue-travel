<template>
  <div class="lists" ref="wrapper">
    <div>
      <div v-for="(items, key) in SortCities" :key="key">
        <p class="hot-title">{{ key }}</p>
        <ul class="mp-list">
          <li v-for="item in items">{{ item.cityname }}</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name: "CityList",
  props: {
    SortCities: {},
    letter:String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch:{
    letter(){}
  }
};
</script>
<style scoped>
.hot-title {
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
