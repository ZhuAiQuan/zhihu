export default store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
// 持久化存储state数据于本地
// 原理即是根据store.subscribe传入数据动态保存到localstrage中
