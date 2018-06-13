<template>
  <div id="app">
    <div>
      <Icon type="test" :size="20"></Icon>
      <Icon type="test" :size="16"></Icon>
      <Icon type="test"></Icon>
      <Icon type="test" :size="160"></Icon>
    </div>
    <router-view/>
  </div>
</template>

<script>
import PageLayout from './components/PageLayout'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

import svg from './icons/svgs/meh.svg'
export default {
  name: 'App',
  components: {
    PageLayout,
    SideMenu,
    Header
  },
  data() {
    return {
      svg: svg
    }
  },
  mounted() {
    console.log(this.svg)
  }
}
</script>
