<template>
  <div>
    <router-view />
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
   
  },
  mounted() {
    this.$router.push('/statistics')
  },
  methods: {
    
  }
}
</script>

<style>
  @import url(./styles/index.css);
  body {
    background-color: #16181C;
  }
</style>
