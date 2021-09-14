<template>
  <div class="hello">
    <img src="src\assets\Google-Doodle-First-day-of-school-2021.jpg" alt="google logo">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center bottom;
  width: auto;
  vertical-align: bottom;
}
</style>
