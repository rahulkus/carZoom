<template>
  <div>
  <nav-component></nav-component>
  <div class="container mainDiv">
    <router-view></router-view>
  </div>
  <footer-component></footer-component>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data() {
    return {
      user: auth.user
    }
  },

  methods: {

    logout() {
      auth.logout()
    }
  }
}
</script>
