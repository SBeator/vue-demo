<template>
  <Menu :active-name="activePath" :open-names="openedMenus" width="auto" :theme="theme2" class="menu" @on-select="onSelectMenu">
    <MenuItem name="/">首页</MenuItem>
    <Submenu name="/accounts">
      <template slot="title">
        账号管理
      </template>
      <MenuItem name="/accounts/users">用户管理</MenuItem>
      <MenuItem name="/accounts/taxies">出租车管理</MenuItem>
      <MenuItem name="/accounts/companies">订车公司管理</MenuItem>
    </Submenu>
    <Submenu name="/tools">
      <template slot="title">
        监督工具
      </template>
      <MenuItem name="/tools/users">什么什么</MenuItem>
      <MenuItem name="/tools/taxies">下一个工具</MenuItem>
      <MenuItem name="/tools/companies">地图</MenuItem>
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
  computed: {
    activePath() {
      return this.$router.currentRoute.path
    },

    openedMenus() {
      return [
        this.activePath.replace(/(.+)\/.*/, (match, $1) => {
          return $1
        })
      ]
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
