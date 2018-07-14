<template>
  <form action="#" @submit.prevent="onSubmit">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
    <button type="submit">Submit</button>
    <p>{{message}}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async onSubmit() {
      this.message = ''
      const response = await this.$store.dispatch('login/login', {
        username: this.username,
        password: this.password
      })

      if (response.success) {
        this.$router.push('/')
      } else {
        console.log('failed')
        this.message = response.msg
      }
    }
  }
}
</script>
