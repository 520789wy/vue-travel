<template>
    <div>
        <div class="mp-header">
            <router-link to="/" class="mp-header-left">
                <i class="iconfont ">&#xe618;</i>
            </router-link>
            <p class="mp-header-title">城市选择</p>
        </div>
        <div class="sel-region-tab">
            <p>
                <router-link to="path" class="area">境内</router-link>
                <router-link to="path" class="area area-right">境外·港澳台</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'CityHeader'
    }
</script>
<style scoped>
.mp-header{
    width:100%;
    background:#00bcd4;
    height:2.75rem;
    line-height:2.75rem;
}
.mp-header-left{
    position: absolute;
    width:2.75rem;
    height:2.74rem;
    text-align:center;
    line-height:2.74rem;
    color: #fff;
    text-decoration: none;
}
.mp-header-title{
    color:#fff;
    text-align:center;
    margin:0 3.13rem;
}
.sel-region-tab{
    height:1.3rem;
    line-height:1.3rem;
    background:#00bcd4;
    padding-bottom:.5rem;
}
.sel-region-tab p{
    border:1px solid #fff;
    margin:0 3.13rem;
}
.area{
    display: inline-block;
    color:#fff;
    width:45%;
    text-align:center;
    text-decoration: none;
}
.area-right{
    border-left:1px solid #fff;
}
</style>