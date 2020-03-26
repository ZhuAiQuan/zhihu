<template>
  <div class="info-content">
    <div>
      <h2>
        <a href="#" class="title">{{ item.title }}</a>
      </h2>
    </div>
    <div class="content">
      <div class="media-file"></div>
      <div class="text">
        {{ item.content }}
        <a href="#" class="more">阅读全文 <a-icon type="caret-down" /></a>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'InfoContent',
  data() {
    return {
      
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
}
.info-content{
  padding: 20px;
  box-shadow: none;
  border-bottom: 1px solid #f0f2f7;
  background: #fff;
  .content{
    display: flex;
    .media-file{
      width: 190px;
      height: 105px;
      border-radius: 4px;
      background-color: #222;
      cursor: pointer;
      margin-right: 18px;
    }
    .text{
      font-size: 15px;
      line-height: 25px;
      width: calc(~"100% - 208px");
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      cursor: pointer;
      color: #1a1a1a;
      .more{
        margin-left: 4px;
        color: #175199;
        font-size: 14px;
      }
      .more:hover{
        color: grey;
      }
    }
  }
}
h2{
  .title{
    color: rgb(26, 26, 26);
    font-size: 18px;
    font-weight: 600;
  }
  .title:hover{
    color: #175199;
  }
}
</style>