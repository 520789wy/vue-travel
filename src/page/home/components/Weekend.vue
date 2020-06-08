<template>
    <div class="end-lists">
        <div class="title">周末去哪儿</div>
        <div class="list" v-for="(item,index) in weekendLists">
            <div class="pro-img">
                <img :src="item.imgUrl">
            </div>
            <div class="introduction">
                <p class="pro-title">{{item.title}}</p>
                <p class="pro-desc">{{item.desc}}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        name:'HomeWenkend',
        props:{
            weekendLists:Array
        }
    }
</script>
<style scoped>
.title{
    line-height:45px;
    padding-left:.65rem;
}
.list{
    background: #fff;
}
.pro-img{
    height:0;
    padding-bottom: 37.45%;
}
.pro-img img{
    width:100%;
}
.introduction{
    padding:.45rem .65rem .65rem .65rem;
}
.pro-title{
    color:#212121;
    line-height:25px;
}
.pro-desc{
    color:#616161;
    line-height:25px;
    font-size:12px;
}
</style>