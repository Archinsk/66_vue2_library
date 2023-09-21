<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <vb-nav-bar-brand />
    <vb-nav-bar-toggler />
    <vb-nav-bar-collapse>
      <slot></slot>
    </vb-nav-bar-collapse>
    <!--<ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>-->
  </nav>
</template>

<script>
import VbNavBarBrand from "./BS46NavBarBrand";
import VbNavBarToggler from "./BS46NavBarToggler";
import VbNavBarCollapse from "./BS46NavBarCollapse";
export default {
  name: "VbNavBar",
  components: { VbNavBarCollapse, VbNavBarToggler, VbNavBarBrand },
};
</script>

<style scoped></style>
