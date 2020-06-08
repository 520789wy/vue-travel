<template>
        <div class="header">
            <div class="header-left">
                <i class="iconfont black" >&#xe618;</i>
            </div>
            <div class="header-text">
                <i class="iconfont search" >&#xe654;</i>
                <input type="text" class="content" placeholder="输入城市/景点/游玩主题">
            </div>
            <router-link to="/city">
                <div class="header-right">
                    <span>深圳</span>
                    <i class="iconfont ">&#xe74d;</i>
                </div>
            </router-link>
            
        </div>
  </template>
  <script>
    export default {
      name:'HomeHeader'
    }
  </script>
  <style scoped>
  .header{
      display: flex;
      background: #00bcd4;
      /* height:.88rem; */
  }
  .header-left{
      width:1.4rem;
      padding:0 .4rem;
      height:3rem;
      line-height:3rem;
      float: left;
      color: #fff;
  }
  .header-text{
      flex:1;
      margin:.7rem 0;
  }
  .search{
      position: absolute;
      z-index: 2;
      line-height: 1.9rem;
      padding:0 .4rem;
      font-size:1.3rem;
  }
  .content{
      width:100%;
      border: 0;
      line-height: 1.8rem;
      border-radius: .2rem;
      text-indent:2rem;
      color: #a8abae;
  }
  .header-right{
      /* width:1.8rem; */
      color:#fff;
      float: right;
      padding:0 1rem;
      line-height: 3rem;
  }
  </style>
  