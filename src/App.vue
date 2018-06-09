<template>
  <div id="app">
    <PageLayout>
      <template slot="header">
        <h1>header</h1>
      </template>
      <template slot="navigate">
        <SideMenu></SideMenu>
      </template>
      <router-view/>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from './components/PageLayout'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    PageLayout,
    SideMenu,
    Header
  }
}
</script>
