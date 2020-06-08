<template>
    <div>
        <div class="hot-cities">
            <p class="hot-title">热门城市</p>
            <ul class="mp-list">
                <li v-for="item in HotCites">{{item.name}}</li>
                
            </ul>
        </div>
        <div class="">
            <p class="hot-title">字母排序</p>
            <ul class="mp-character-list">
                <li v-for="(item,index) in SortCities" @click="characterClick">{{index}}</li>
            </ul>
        </div>
    </div>
    
</template>
<script>
    export default{
        name:'HotCity',
        props:{
            HotCites:Array,
            SortCities:{}
        },
        methods:{
            characterClick(e){//e输出为object
                this.$emit('change',e.target.innerHTML)//父组件定义的函数为change，参数为e.target.innerHTML(字母)
            }
        }
    }
</script>
<style scoped>

.hot-title {
    margin:.75rem .938rem;
    line-height: .75rem;
    font-size:.75rem;
}
.mp-list,.mp-character-list{
    overflow: hidden;
    background: #fff;
    
}
.mp-list li{
    width:33%; 
    float: left;
    text-align: center;
    line-height: 2.85rem;
    border-right:1px solid #ddd;
    border-bottom:1px solid #ddd;
}
.mp-character-list li{
    width:16.6%;
    float: left;
    text-align: center;
    line-height: 2.85rem;
}
</style>