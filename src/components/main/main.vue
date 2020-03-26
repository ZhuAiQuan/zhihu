<template>
  <a-layout>
    <a-layout-header>
      <header-bar></header-bar>
    </a-layout-header>
    <a-layout-content>
      <keep-alive>
        <transition name="fade-transform" mode="out-in">
          <router-view ></router-view>
        </transition>
      </keep-alive>
    </a-layout-content>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>

<script>
import headerBar from './header/header.vue'
export default {
  name: 'custom-content',
  data () {
    return {
      
    }
  },
  components: {
    headerBar
  }
}
</script>

<style lang="less" scoped>
  @import './index.less';
</style>