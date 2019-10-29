<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <keep-alive><hdiv/></keep-alive>
      <keep-alive><left/></keep-alive>
      <workDiv/>
    </div>
    <div v-if="!$route.meta.keepAlive">
      <router-view />
    </div>
  </div>
</template>
<script>

import HDIV from './components/head/Header'
import Left from './components/head/Left'
import MDIV from './components/head/Main'

export default {
  name: 'App',
  components: {
    hdiv: HDIV,
    left: Left,
    workDiv: MDIV
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
}
</style>
