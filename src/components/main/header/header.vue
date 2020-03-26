<template>
  <div class="layout-head">
    <a href="/home" class="logo-href">
      <logo-svg style="margin: auto"></logo-svg>
    </a>
    <ul class="router-ul">
      <li v-for="(item, i) in router_list" :key="`${_uid}-${i}`" @click="qhStatus(i)">
        <div class="li-content">
          <router-link :to="item.path" :class="{ 'check-state': item.status }">{{ item.name }}</router-link>
          <span class="check-active" v-if="item.status"></span>
        </div>
      </li>
    </ul>
    <div class="top-input">
      <!-- <a-input-search placeholder="input search text" class="input-width" v-model="search.input" @search="onSearch" name="top_input" @focus="onfocus" @blur="onblur"/> -->
      <auto-complete @hideBtn="hideButton"></auto-complete>
      <a-button type="primary" class="input-left" v-show="inputState">提问</a-button>
    </div>
    <head-buttom class="head-last"></head-buttom>
  </div>
</template>

<script>
import logoSvg from './logo/logo.vue'
import router from '@/router/router'
import autoComplete from './input/auto_complete.vue'
import headButtom from './header-buttom/head_buttom.vue'
export default {
  name: 'header-bar',
  data() {
    return {
      router,
      router_list: [],
      search: {
        input: ''
      },
      inputState: true
    }
  },
  components: {
    logoSvg,
    autoComplete,
    headButtom
  },
  created () {
    this.router_list = router[0].children.map(item => {
      return {
        path: item.path,
        name: item.name,
        status: false
      }
    })
    if (this.router_list.length) {
      this.router_list[0].status = true
    }
  },
  methods: {
    qhStatus (i) {
      this.router_list.map((item, index) => {
        item.status = false
        if (index === i) item.status = true
      })
    },
    onSearch () {},
    hideButton (state) {
      this.inputState = state
    } 
  }
}
</script>

<style lang="less" scoped>
.layout-head{
  width: 1000px;
  margin: 0 auto;
  height: 54px;
  display: flex;
  position: relative;
  .router-ul{
    display: flex;
    list-style: none;
    width: auto;
    margin-bottom: 0;
    li{
      padding: 0 17px;
      .li-content{
        display: inline-block;
        overflow: hidden;
        position: relative;
      }
      a{
        padding: 14px 0;
        color: #c5c8ce;
        text-decoration: none;
        font-size: 16px;
      }
      .check-state{
        color: #17233d;
        font-weight: 600;
      }
      .check-active{
        display: inline-block;
        height: 3px;
        width: 100%;
        background: rgb(0, 132, 255);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    li:hover{
      a{
        font-size: 16px;
        color: #17233d;
        font-weight: 600;
      }
    }
  }
  .top-input{
    margin-left: 16px;
    // display: flex;
    .input-left{
      margin-left: 16px;
    }
    .input-width{
      width: 200px;
    }
  }
  .head-last{
    position: absolute;
    right: 0;
  }
}
.logo-href{
  display: flex;
  width: auto;
  height: auto;
  width: 54px;
  padding: 7px 0;
}
</style>