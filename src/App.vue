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
    </nav>
    <router-view />
  </div>
</template>
