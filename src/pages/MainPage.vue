<template>
  <PageLayout>
    <template slot="header">
      <h1>header</h1>
    </template>
    <template slot="navigate">
      <SideMenu></SideMenu>
    </template>
    <router-view/>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
export default {
  components: {
    PageLayout,
    SideMenu,
    Header
  }
}
</script>
