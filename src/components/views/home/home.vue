<template>
<div class="card">
  <div class="card-block p-4">
    <h4 class="card-title">{{ title }}</h4>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link :to="{ name: 'joblist' }" class="btn btn-primary">İş Bul</router-link>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Anasayfaya Hoş Geldiniz!'
    }
  }
}
</script>
