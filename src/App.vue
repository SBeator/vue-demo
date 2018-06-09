<template>
  <div id="app">
    <Layout>
      <template slot="header">
        <h1>header</h1>
      </template>
      <template slot="navigate">
        <SideMenu></SideMenu>
      </template>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
import SideMenu from './components/SideMenu'
export default {
  name: 'App',
  components: {
    Layout,
    SideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
