<template>
    <div class="hot-list">
        <div class="hot-title">
            <i class="iconfont hot-fire">&#xe674;</i>
            本周热门榜单
            <span class="all-list">全部榜单></span>
        </div>
        <div class="hot-iamges">
            <ul>
                <li v-for="(item,index) in hotLists">
                    <img class="hot-img" :src="item.imgUrl">
                    <p class="title">{{item.title}}</p>
                    <p class="hot-price"><span class="price">{{item.price}}</span>起</p>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'HomeHotList',
        props:{
            hotLists:Array
        }
    }
</script>
<style scoped>
    .hot-list{
        background: #fff;
        margin-top:10px;
    }
    .hot-title{
        line-height: 30px;
        padding:.54rem .26rem;
    }
    .all-list{
        float: right;
        font-size:14px;
        margin-right:.9rem;
        line-height:30px;
    }
    .hot-fire{
        color:#ff8245;
        margin-left:.65rem;
    }
    .hot-iamges{
        clear: both;
    }
    .hot-iamges ul{
        width: 150%;
        overflow: hidden;
        margin:0;
        padding:0 .95rem;
        clear: both;
    }
    .hot-iamges li {
        float: left;
        margin-right:.38rem;
    }
    .hot-img{
        width:100px;height:100px;
    }
    .title,.hot-price{
        font-size:14px;
        text-align: center;
    }
    .price{
        color: #ff8245;
    }
</style>