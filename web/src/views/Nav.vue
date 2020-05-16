<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>

</template>

<style>
#nav {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #42b983;
  background-color: #3d536a;
}
#nav img {
  margin-right: 1rem;
  max-height: 1rem;
}
#nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
</style>

<script>
export default {
  name: 'Nav',
};
</script>
