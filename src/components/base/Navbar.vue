<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="$router.push({ name: 'Vmodel' })" style="cursor: pointer;">
            Vue Tutorial
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Basics" left>
          <b-dropdown-item @click="$router.push({ name: 'Vmodel' })"> V-model
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'Conditions' })"> Conditions
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'Listing' })"> Listing
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'ComputedAndWatchers' })"> Computed & Watchers
          </b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'ComponentRegistration' })"> Component Registration
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Advance" left>
          <b-dropdown-item @click="$router.push({ name: 'lifecycles' })">Lifecycles</b-dropdown-item>
          <b-dropdown-item  @click="$router.push({ name: 'communication' })">Component communications</b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'slot' })">Slots</b-dropdown-item>
          <b-dropdown-item @click="$router.push({ name: 'mixins' })">Mixins</b-dropdown-item>
          <b-dropdown-item href="#">Vue-router</b-dropdown-item>
          <b-dropdown-item href="#">Vuex</b-dropdown-item>
          <b-dropdown-item href="#">Using V-model And Advanced component (Re-usable)</b-dropdown-item>
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