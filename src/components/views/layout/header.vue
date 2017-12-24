<template>
  <div class="header mt-4">
    <ul class="nav nav-pills mb-3">
        <li class="nav-item"><router-link :to="{ name: 'home' }" class="nav-link">Anasayfa</router-link></li>
        <li class="nav-item"><router-link :to="{ name: 'joblist' }" class="nav-link">İşler</router-link></li>
      </ul>
      <hr />
  </div>
</template>

<script>
export default {
  name: 'headerComponent'
}
</script>