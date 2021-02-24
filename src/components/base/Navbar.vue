<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="$router.push({ name: 'Vmodel' })" style="cursor: pointer;">
            Vue Tutorial
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Basics" right>
          <b-dropdown-item @click="$router.push({ name: 'Vmodel' })"> V-model
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'Conditions' })"> Conditions
          </b-dropdown-item>
          <b-dropdown-item href="#">Conditions</b-dropdown-item>
          <b-dropdown-item href="#">Enumarate</b-dropdown-item>
          <b-dropdown-item href="#">Component Registration</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Basics" right>
          <b-dropdown-item href="#">v-model</b-dropdown-item>
          <b-dropdown-item href="#">If</b-dropdown-item>
          <b-dropdown-item href="#">For</b-dropdown-item>
          <b-dropdown-item href="#">Component Registration</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    props: {
      showSearchbar: {
        requried: false,
        default: true,
        type: Boolean
      }
    },
    data() {
        return {
          selectedTabIndex : 1
        }
    },
    methods: {
      changeTabIndex(index) {
        const vm = this;
        vm.selectedTabIndex = index;
      }
    }
}
</script>

<style>
  nav {
    font-size: 16px;
    font-weight: bold;
  }
</style>