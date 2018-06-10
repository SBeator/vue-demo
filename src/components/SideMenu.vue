<template>
  <Menu active-name="1" width="auto" :theme="theme2" class="menu" @on-select="onSelectMenu">
    <MenuItem name="/">首页</MenuItem>
    <Submenu name="/accounts">
      <template slot="title">
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/taxies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
    <Submenu name="/accounts">
      <template slot="title">
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/taxies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
    <Submenu name="/accounts">
      <template slot="title">
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/taxies">出租车管理</MenuItem>
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
    onSelectMenu(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less">
@import '../theme/color.less';

.menu {
  height: 100%;
  font-size: 12x;
}

.ivu-menu-light.ivu-menu-vertical {
  .ivu-menu-item,
  .ivu-menu-submenu-title {
    border-left: 0px solid @primary-color;
    transition: all 0.2s linear;
  }
  .ivu-menu-item-active {
    &.ivu-menu-item,
    .ivu-menu-submenu-title {
      border-right-color: rgba(0, 0, 0, 0);
      border-left-width: 6px;
      padding-left: 18px;
      color: @primary-color;
    }
  }

  .ivu-menu-submenu .ivu-menu-item-active.ivu-menu-item {
    border-left-width: 0;
    padding-left: 24px;
  }
}
</style>
