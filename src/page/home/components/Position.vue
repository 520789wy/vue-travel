<template>
    <div class="position">
      <div class="address">
          <i class="iconfont">&#xe611;</i>
          定位
      </div>
      <div class="hot-list">
        <i class="iconfont">&#xe689;</i>
          必有榜单
      </div>
    </div>
</template>
<script>
export default {
  name: "HomePosition"
};
</script>
<style scoped>
.position{
    width: 100%;
    display: flex;
    background: #fff;
    border-top: 1px solid#ddd;
    line-height: 49px;
}
.address,
.hot-list {
  flex: 1;
  text-align: center;
}
.hot-list {
  border-left: 1px solid #ddd;
}
</style>
