<template>
  <div id="app" class="container">
      <headerComponent/>
        <router-view class="view"></router-view>
      <footerComponent/>
    </div>
</template>
<script>
/*eslint-disable */
import headerComponent from "@/components/views/layout/header";
import footerComponent from "@/components/views/layout/footer";
export default {
  name: 'app',
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<<style>
  a.router-link-exact-active {
    color: #fff;
    background-color: #007bff;
  }
</style>
