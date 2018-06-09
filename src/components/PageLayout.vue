<template>
  <div class="container">

    <div class="layout">
      <Layout>
        <Header>
          <slot name="header"></slot>
        </Header>
        <Layout :style="{minHeight: '100vh'}">
          <Sider hide-trigger>
            <slot name="navigate"></slot>
          </Sider>
          <Content>
            <slot></slot>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
<script>
export default {}
</script>
