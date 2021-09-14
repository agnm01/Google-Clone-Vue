<template>
<Header></Header>
<Content></Content>
<Footer></Footer>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
} 
body {
    height: 100vh;
    overflow: hidden;
    font-family: sans-serif;
}
ul {
    list-style-type: none;
}
li:hover {
    cursor: pointer;
    text-decoration: underline;
}
a {
    text-decoration: none;
    color: #000000DE;
    font-size: 13px;
}
</style>