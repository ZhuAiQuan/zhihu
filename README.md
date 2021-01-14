# zhihu-custom

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### api
http://news-at.zhihu.com/api/4/news/latest //最新消息
http://news-at.zhihu.com/api/4/news/${id} // 详情
http://news.at.zhihu.com/api/4/news/before/${day} //过往信息 day为日期拼接 列如20210114
http://news-at.zhihu.com/api/4/story-extra/${id} // 输入新闻的ID，获取对应新闻的额外信息，如评论数量，所获的『赞』的数量。

更多查看 https://www.jianshu.com/p/ee556871da51
