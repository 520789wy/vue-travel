<template>
    <div class="cities" >
        <city-header></city-header>
        <city-list :HotCites="HotCites" :SortCities="SortCities"  :letter="letter"></city-list>
        <alphabet :SortCities="SortCities" @change="handleLetterChange" ></alphabet>
    </div>
</template>
<script>
    
    import axios from 'axios'
    import CityHeader from './components/Header.vue'
    import Alphabet from './components/Alphabet.vue'
    import CityList from './components/List.vue'
    export default{
        name:'City',
        components: {
            CityHeader,
            Alphabet,
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