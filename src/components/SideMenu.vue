<template>
  <Menu :active-name="activePath" :open-names="openedMenus" width="auto" :theme="theme2" class="menu" @on-select="onSelectMenu">
    <MenuItem name="/">{{$t("navigation.homepage")}}</MenuItem>
    <Submenu name="/accounts">
      <template slot="title">
        {{$t("navigation.accountManagement")}}
      </template>
      <MenuItem name="/accounts/users"> {{$t("navigation.userManagement")}}
      </MenuItem>
      <MenuItem name="/accounts/taxies"> {{$t("navigation.taxiManagement")}}
      </MenuItem>
      <MenuItem name="/accounts/companies"> {{$t("navigation.companyManagement")}}
      </MenuItem>
    </Submenu>
    <Submenu name="/transHubEstMgmt">
      <template slot="title">
        交通枢纽
      </template>
      <MenuItem name="/transHubEstMgmt/transHubEstChartPage">运力保障</MenuItem>
      <MenuItem name="/transHubStatMgmt/transHubStatPage">关键数据</MenuItem>
      <MenuItem name="/transHubTrailMgmt/transHubTrailListPage">轨迹监控</MenuItem>
      <MenuItem name="/transHubAreaMgmt/transHubAreaPage">划定区域</MenuItem>
      <MenuItem name="/shortCutEstMgmt/shortCutListPage">短途行程</MenuItem>
      <MenuItem name="/transHubTripMgmt/transHubTripListPage">排队秩序</MenuItem>
    </Submenu>
    </MenuItem>
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
