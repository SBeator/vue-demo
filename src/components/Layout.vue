<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="navigate">
      <slot name="navigate"></slot>
    </div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<script>
export default {}
</script>
