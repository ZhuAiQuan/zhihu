<template>
  <div class="container" ref="homeHome">
    <div class="content">
      <a href="https://www.zhihu.com/special/19681091" class="ad-banner">
        <img src="https://pic2.zhimg.com/v2-6e8fccc8a30e8cf15a90e7a894011579_r.jpg" alt="">
      </a>
      <div class="card-content">
        <ul class="nav">
          <li v-for="(item, i) in routerList" :key="i" :class="{ 'active-on': item.state }" @click.stop="quickRoute(i)">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
        <div class="home-content" ref="homeContent">
          <keep-alive>
            <transition name="fade-transform" mode="out-in">
              <router-view ></router-view>
            </transition>
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="right-sider">
      <right-sider />
    </div>
  </div>
</template>

<script>
import rightSider from './sider/sider.vue'
export default {
  name: '',
  data () {
    return {
      routerList: [
        {
          path: 'recommend',
          name: '推荐',
          state: true
        },
        {
          path: 'follow',
          name: '关注',
          state: false
        },
        {
          path: 'hotlist',
          name: '热榜',
          state: false
        }
      ]
    }
  },
  methods: {
    quickRoute (i) {
      this.routerList.map((item, index) => {
        item.state = false;
        if (index === i) item.state = true
      })
    }
  },
  created () {
    // this.$router.push('/recommend');
  },
  mounted () {
    // const num = this.$refs.homeHome.offsetHeight - 172
    // Object.defineProperty(this.$refs.homeContent, 'offsetHeight', {
    //   get () {},
    //   set (num) {
    //     offsetHeight = num
    //   }
    // })
  },
  components: {
    rightSider
  }
}
</script>

<style lang="less" scoped>
.container{
  display: flex;
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
  height: 100%;
  .content{
    width: 694px;
    .ad-banner{
      display: flex;
      width: auto;
      box-sizing: border-box;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        box-sizing: border-box;
        border-radius: 5px;
      }
    }
    .card-content{
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      width: 100%;
      height: calc(~"100% - 115px");
      .nav{
        display: flex;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        border-bottom: 1px solid #f0f2f7;
        background: #fff;
        li{
          width: auto;
          margin: 0 22px;
          padding: 16px 0;
          a{
            color: rgba(0, 0, 0, 0.65);;
            font-size: 16px;
            text-decoration: none;
          }
          a:hover{
            color: #175199
          }
        }
        .active-on{
          a{
            color: #0084ff;
            font-weight: 500;
          }
        }
      }
      .home-content{
        width: 100%;
        height: calc(~"100% - 57px");
      }
    }
  }
  .right-sider{
    width: 296px;
    margin-left: 10px;
  }
}
</style>