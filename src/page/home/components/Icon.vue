<template>
  <div class="home-icon">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in page">
          <div class="img-icon">
            <img
              class="icon-img"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-title">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcon",
  props:{
    iconLists:Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    pages(){
      const pages=[]//总页数
      this.iconLists.forEach(function(item,index){
        const page=Math.floor(index/8)//每八个一页，表示单页
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item) 
      })
      return pages
  }
}
}
</script>
<style scoped>
.home-icon {
  clear: both;
  padding: 0.5rem;
  background: #fff;
}
.icon {
  float: left;
  width: 25%;
  margin-top:10px;
}
.img-icon {
  width: 55px;
  height: 55px;
}
.icon-img {
  width: 100%;
  height: 100%;
}
.icon-title {
  text-align: center;
}
</style>