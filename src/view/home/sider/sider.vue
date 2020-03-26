<template>
  <div class="right">
    <div class="card-globa">
      <div v-for="(item, i) in globalist" :key="i" class="content">
        <p class="icon"><a-icon :type="item.icon" /></p>
        <p><span class="title">{{ item.title }}</span></p>
      </div>
    </div>
    <div class="creater">
      <a-icon type="solution" />
      <span class="title">创作者中心</span>
      <span class="go-kt"><a href="#">去开通 <a-icon type="right" /></a></span>
    </div>
    <div class="card">
      <a href="https://www.zhihu.com/knowledge-plan/education?utm_source=global_event_banner" class="card-link">
        <img src="https://pic1.zhimg.com/80/v2-e5e1f5d7179151e0704bb6f8a9ae5196_r.png" alt="">
      </a>
      <div class="card-globa">
        <div v-for="(item, i) in globalist" :key="i" class="content">
          <p class="icon"><a-icon :type="item.icon" /></p>
          <p><span class="title">{{ item.title }}</span></p>
        </div>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, i) in list" :key="`${i}-${_uid}`">
          <a-icon :type="item.icon" />
          <span class="title">{{ item.title }}</span>
          <span class="number" v-if="item.num">{{ item.num }}</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p>刘看山<span class="Footer-dot"></span>知乎指南<span class="Footer-dot"></span>知乎协议<span class="Footer-dot"></span>知乎隐私保护指引</p>
      <p>应用<span class="Footer-dot"></span>工作<span class="Footer-dot"></span>申请开通知乎机构号</p>
      <p>侵权举报<span class="Footer-dot"></span>网上有害信息举报专区</p>
      <p>京 ICP 证 110745 号</p>
      <p>京 ICP 备 13052560 号 - 1</p>
      <p>
        <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" alt="" style="width: 20px;height: 20px">
        京公网安备 11010802010035 号
      </p>
      <p>互联网药品信息服务资格证书</p>
      <p>（京）- 非经营性 - 2017 - 0067</p>
      <p>违法和不良信息举报：010-82716601</p>
      <p>儿童色情信息举报专区</p>
      <p>证照中心</p>
      <p>联系我们</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightSider',
  data () {
    return {
      globalist: [
        {
          title: '写回答',
          icon: 'edit'
        },
        {
          title: '写文章',
          icon: 'form'
        },
        {
          title: '写想法',
          icon: 'highlight'
        },
        {
          title: '发视频',
          icon: 'area-chart'
        },
        {
          title: '稍后答',
          icon: 'dingding'
        },
        {
          title: '草稿箱',
          icon: 'ant-cloud'
        }
      ],
      list: [
        {
          title: '我的收藏',
          num: 10,
          icon: 'like'
        },
        {
          title: '我关注的问题',
          num: 99,
          icon: 'heart'
        },
        {
          title: '我的邀请',
          num: 0,
          icon: 'gitlab'
        },
        {
          title: '我的余额',
          num: 0,
          icon: 'meh'
        },
        {
          title: '站务中心',
          num: 0,
          icon: 'notification'
        },
        {
          title: '帮助中心',
          num: 0,
          icon: 'question-circle'
        },
        {
          title: '版权服务中心',
          num: 0,
          icon: 'safety-certificate'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
p{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.right{
  width: 100%;
  height: auto;
  .card-globa{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
    margin-bottom: 10px;
    .content{
      width: 33%;
      text-align: center;
      padding: 20px 0;
      cursor: pointer;
      .title{
        font-size: 16px;
      }
      .title:hover{
        color: #175199;
      }
      .icon{
        margin-bottom: 5px;
        i{
          font-size: 18px;
        }
      }
    }
  }
  .creater{
    background: #fff;
    display: flex;
    padding: 16px;
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
    .go-kt{
      position: absolute;
      right: 20px;
    }
    .title{
      margin-left: 20px;
      color: rgb(133, 144, 166);
    }
    /deep/.anticon-solution{
      position: absolute;
      top: 20px;
    }
  }
  .card{
    background: #fff;
    margin-bottom: 10px;
    cursor: pointer;
    .card-link{
      display: flex;
      padding: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .list{
    background: #fff;
    cursor: pointer;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    ul{
      padding: 8px 0;
      color: rgb(133, 144, 166);
      li{
        padding: 10px;
        position: relative;
        .title{
          margin: 0 10px;
        }
        .number{
          display: inline-block;
          background: #f6f6f6;
          color: #8590a6;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 2px;
          position: absolute;
          right: 16px;
          top: 5px;
        }
      }
      li:hover{
        background: #f6f6f6;
        .number{
          background: #fff;
        }
      }
    }
  }
  .footer{
    padding-left: 5px;
    p{
      font-size: 13px;
      color: rgb(133, 144, 166);
      line-height: 24px;
      .Footer-dot:after {
        margin: 0 5px;
        content: "\B7";
      }
    }
    p:hover{
      color: #175199;
      cursor: pointer;
    }
  }
}
</style>