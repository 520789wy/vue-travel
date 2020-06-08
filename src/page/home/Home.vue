<template>
  <div>
    <home-header ></home-header>
    <div class="cn-content">
      <home-icon :iconLists="iconLists"></home-icon>
      <home-position></home-position>
      <home-hotlist :hotLists="HotRecommendLists"></home-hotlist>
      <home-week :welake="WeLikes"></home-week>
      <home-weekend :weekendLists="WeekendLists"></home-weekend>
    </div>
    
  </div>
</template>
<script>
  import HomeHeader from '../home/components/Head.vue'
  import HomeIcon from '../home/components/Icon.vue'
  import HomePosition from '../home/components/Position.vue'
  import HomeHotlist from '../home/components/HotList.vue'
  import HomeWeek from '../home/components/Week.vue'
  import HomeWeekend from '../home/components/Weekend.vue'
  import axios from 'axios'
  export default {
    name:'Home',
    data(){
      return{
        iconLists:[],
        HotRecommendLists:[],
        WeLikes:[],
        WeekendLists:[]
      }
    },
    components:{
      HomeHeader,
      HomeIcon,
      HomePosition,
      HomeHotlist,
      HomeWeek,
      HomeWeekend
    },
    methods:{//定义方法
      getHomeInfo(){
        axios.get('/api/index.json').then(this.getHomeInfoSucc)//get请求，请求json数据
      },
      getHomeInfoSucc(res){
        res=res.data
        if(res.ret&&res.data){
          const data=res.data
          this.iconLists=data.iconImgs//获取菜单图标数据
          this.HotRecommendLists=data.recommendList//获取本周热门推荐榜单数据
          this.WeLikes=data.WeLike//获取猜你喜欢数据
          this.WeekendLists=data.WeekendList//获取周末去哪儿数据
        }
       
      }
    },
    mounted () {//发送ajax请求，页面初次加载
      // this.lastcity=this.city
      this.getHomeInfo()
    }
  }
</script>
<style scoped>
.cn-content{
  background: #f5f5f5;
}
</style>
