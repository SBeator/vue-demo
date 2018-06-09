<template>
  <Menu active-name="1" width="auto" :theme="theme2" class="menu" @on-select="onSelectMenu">
    <MenuItem name="/">首页</MenuItem>
    <Submenu name="/accounts">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/texies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
    <Submenu name="/accounts">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/texies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
    <Submenu name="/accounts">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/texies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  data() {
    return {
      theme2: 'light'
    }
  },
  methods: {
    onSelectMenu(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="less" scoped>
.menu {
  height: 100%;
}
</style>
