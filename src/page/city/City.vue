<template>
    <div class="cities" >
        <city-header></city-header>
        <hot-city :HotCites="HotCites" :SortCities="SortCities" @change="handleLetterChange"></hot-city>
        <city-list :SortCities="SortCities" :letter="letter"></city-list>
    </div>
</template>
<script>
    
    import axios from 'axios'
    import CityHeader from './components/Header.vue'
    import HotCity from './components/Hotcity.vue'
    import CityList from './components/List.vue'
    export default{
        name:'City',
        components: {
            CityHeader,
            HotCity,
            CityList
        },
        data(){
            return {
                HotCites:[],
                SortCities:Object,
                letter:''//存储接收到子组件的首字母
            }
        },
        methods:{//接收请求，定义方法处理
            getCityInfo(){
                axios.get('/api/city.json').then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res){
                res=res.data
                if(res.ret&&res.data){
                    const data=res.data
                    this.HotCites=data.HotCites
                    this.SortCities=data.SortCities
                }
            },
            handleLetterChange(e){//接收子组件HotCity传的首字母的方法
                this.letter=e
            }
        },
        mounted () {//发送ajax请求
            this.getCityInfo()
            
           
        }
    }
</script>
<style scoped>
.cities{
    background:#f5f5f5;
    color:#000;
}
ul{
    list-style:none;
}
</style>