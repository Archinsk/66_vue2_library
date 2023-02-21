<template>
  <div id="app">
    <nav>
      <router-link to="/">Стартовая</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/select">Select</router-link> |
      <router-link to="/checkbox">Checkbox</router-link> |
      <router-link to="/textarea">Textarea</router-link> |
    </nav>
    <router-view />
  </div>
</template>
