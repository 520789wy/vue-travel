<template>
    <div class="wenkend">
        <div class="w-title">
            <i class="iconfont love-icon">&#xe602;</i>
            猜你喜欢
        </div>
        <div class="lists">
            <div class="w-list" v-for="(item,index) in welake">
                <div class="image">
                    <img :src="item.imgUrl" >
                </div>
                <div class="w-content">
                    <p class="img-title">{{item.title}}</p>
                    <p class="evaluation">星星  24652条评论</p>
                    <p class="w-price">
                        <span class="price">{{item.price}}</span>起 
                        <span class="area">{{item.address}}</span>
                    </p>
                </div>
            </div>
            <div class="viewall">查看所有产品</div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'HomeWeek',
        props:{
            welake:Array
        }
    }
</script>
<style scoped>
    .wenkend{
        margin-top:2%;
        background: #fff;
        padding:0 .54rem;
    }
    .w-list{
        width:100%;
        height:6.3rem;
        clear: both;
        padding:.6rem 0;
        border-bottom: 1px solid #dedede;
    }
    .w-title{
        padding:.54rem .26rem;
    }
    
    .image{
        float: left;
        width:6.3rem;
        height:6.3rem;
    }
    .image img{
        width:100%;
        height:100%;
    } 
    .love-icon{
        color:#ff5b58;
    }
    .w-content{
        float: left;
        padding:.26rem 1rem;
    }
    .w-content p{
        line-height:30px;
    }
    .evaluation,.w-price{
        font-size: 12px;
    }
    .price{
        color:#ff5b58;
        font-size: 14px;
    }
    .area{
        float: right;
    }
    .viewall{
        text-align: center;
        color:#00afc7;
        line-height: 30px;
    }
</style>