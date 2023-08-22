<template>
  <div id="app">
    <nav>
      <router-link to="/">Стартовая</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/select" class="incompleted">Select</router-link> |
      <router-link to="/checkbox">Checkbox</router-link> |
      <router-link to="/checkboxesgroup">CheckboxesGroup</router-link>
      |
      <router-link to="/radiogroup">RadioGroup</router-link> |
      <router-link to="/textarea">Textarea</router-link> |
      <router-link to="/daterange">DateRange</router-link> |
      <router-link to="/form" class="incompleted">Form</router-link> |
      <router-link to="/alert">Alert</router-link> |
      <router-link to="/collapse">Collapse</router-link> |
      <router-link to="/collapsebutton">CollapseButton</router-link>
      | <router-link to="/card">Card</router-link> |
      <router-link to="/pagination">Pagination</router-link> |
      <router-link to="/paginationitemsperpage"
        >PaginationItemsPerPage</router-link
      >
      |
      <router-link to="/paginationpageselector"
        >PaginationPageSelector</router-link
      >
      |
      <router-link to="/paginationbutton">PaginationButton</router-link>
      |
      <router-link to="/preloader">Preloader</router-link>
      |
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
.incompleted {
  color: red;
}
</style>
