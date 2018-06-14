import Icon from 'vue-awesome/components/Icon'

import CustomizedIcon from './CustomizedIcon'

const icons = [
  'meh'
]

icons.forEach(iconName => {
  const svg = require(`./svgs/${iconName}.svg`)
  Icon.register({
    test: {
      width: 40,
      height: 40,
      raw: atob(svg.replace('data:image/svg+xml;base64,', ''))
    }
  })
})

export default (Vue) => {
  Vue.component('Icon', CustomizedIcon)
}
