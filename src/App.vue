<template>
  <div id="app">
    <div>
      <Icon type="test" :size="20"></Icon>
      <Icon type="test" :size="16" color="red"></Icon>
      <Icon type="test" class="aaa"></Icon>
      <Icon type="test"></Icon>
      <Icon type="ionic"></Icon>
    </div>
    <router-view/>
  </div>
</template>

<script>
import PageLayout from './components/PageLayout'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

// import * as svg from './icons/svgs'
export default {
  name: 'App',
  components: {
    PageLayout,
    SideMenu,
    Header
  }
}
</script>
