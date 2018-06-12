import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enIView from 'iview/dist/locale/en-US'
import zhIView from 'iview/dist/locale/zh-CN'

import en from './en'
import zh from './zh'

// 设置语言
const locale = 'zh'

Vue.use(VueI18n)
Vue.locale = () => {}

const messages = {
  en: {...enIView, ...en},
  zh: {...zhIView, ...zh}
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
