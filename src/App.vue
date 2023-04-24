<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <p class="copyright">鲲伦食品有限公司 保留一切权利 许可证编号：沪ICP备0700XXXX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {}
  },
  mounted() {
    // 判断是从pc端还是移动端进入 跳到不同的页面
    const clientWidth = window.screen.width
    if (clientWidth > 750) {
      this.$router.replace({
        name: 'home'
      })
    } else {
      this.$router.replace({
        name: 'h5Home'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  color: #fff;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  background: #222222;
}
</style>
