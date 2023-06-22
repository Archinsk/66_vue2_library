<template>
  <div id="app">
    <nav>
      <router-link to="/">Стартовая</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/select">Select</router-link> |
      <router-link to="/checkbox">Checkbox</router-link> |
      <router-link to="/textarea">Textarea</router-link> |
      <router-link to="/daterange">Daterange</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/alert">Alert</router-link> |
      <router-link to="/collapse">Collapse</router-link> |
      <router-link to="/collapsebutton">CollapseButton</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.section {
  background-color: lightyellow;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
pre {
  background-color: lightgrey;
  color: grey;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
</style>
