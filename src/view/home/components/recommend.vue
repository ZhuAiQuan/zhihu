<template>
  <div>
    <template v-for="(item, index) in newInfo">
      <info-list :item="item" :key="`${index}-${_uid}`"></info-list>
    </template>
  </div>
</template>

<script>
import infoList from './info_list.vue'
export default {
  data() {
    return {
      newInfo: [
        {
          title: '你在《王者荣耀》遇到过哪些有意思的队友？',
          content: '"汤汤七号： "此时一位电竞行业加班汪+脑洞答主路过 我来分享一波特别的， 记得在S11~S12鲁班输出爆炸“宇智波班”的版本，我沉迷于微信鱼塘玩鲁班炸鱼，最终纯单排KDA10.9 70+胜率上了王者。 我们都知…',
          media: ''
        },
        {
          title: '我写CSS的常用套路',
          content: 'FinChat： 我写 CSS 的常用套路" 大きな星を摘んだなら、あなたは大きな富を手に入れる。 " 本文是笔者写 CSS 时常用的套路。不论效果再怎么华丽，万变不离其宗。 交错动画  有时候，我们需要给多个元素…',
          media: ''
        },
        {
          title: '天眼查是合法的吗？',
          content: '点点： 天眼查最牛的地方，是把各种政府公开信息搜集在一起整合，打着便民的旗号装的很清高 裁判文书和执行信息这种官司，他可以把所有相关数据都显示在公司页面下。 问题来了，现在法律文书即使是个人打官司也会有当事…',
          media: ''
        },
        {
          title: '龚琳娜《忐忑》的走红给乐坛带来了怎样的影响？',
          content: '黄聪葱葱葱： 有，而且影响非常恶劣。如果没记错的话，《忐忑》大概是因为10or11年湖南卫视的跨年演唱会被人熟知。 那时候的华语乐坛还呈现着一片“你不爱我我就活不下去”的美好祥和氛围，而《忐忑》无情的打破…',
          media: ''
        }
      ]
    }
  },
  components: {
    infoList
  }
}
</script>

<style lang="less" scoped>
  
</style>