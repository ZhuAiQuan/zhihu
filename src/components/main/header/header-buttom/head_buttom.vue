<template>
  <div>
    <a-popover title="消息通知">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span class="top-icon">
        <a-icon type="sound" style="font-size: 20px" />
      </span>
    </a-popover>
    <a-popover title="我的私信">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span class="top-icon">
        <a-icon type="github" theme="filled" style="font-size: 20px" />
      </span>
    </a-popover>
    <a-dropdown class="top-icon">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        <a-avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">我的主页</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">设置</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'headButtom',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
.top-icon{
  display: inline-block;
  padding: 0 20px;
  cursor: pointer;
}
/deep/.ant-dropdown-link{
  display: inline-block;
  padding-right: 0;
  /deep/.ant-avatar{
    position: relative;
    top: -5px;
  }
}
</style>