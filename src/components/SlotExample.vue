<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
            <slot name="header" class="mt-2"> Header </slot>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-2">
            <slot name="main" class="mt-2"> Main </slot>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-2">
            <slot name="footer" class="mt-2"> Footer </slot>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>