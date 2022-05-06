// 导入组件，组件必须声明 name
import LjButton from './src'
// 为组件提供 install 安装方法，供按需引入
LjButton.install = function (Vue) {
  Vue.component(LjButton.name, LjButton)
}
// 导出组件
export default LjButton