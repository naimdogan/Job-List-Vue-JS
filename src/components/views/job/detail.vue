<template>
  <div v-if="Jobs" class="row mt-12">
    <div class="col-lg-12">
      <div class="loading" v-if="loading">
        Yükleniyor...
      </div>
      <div class="card" v-else>
            <h3 class="card-header">{{ Jobs.positionName }} - {{ Jobs.companyName }}</h3>
            <img class="card-img-top" :src="Jobs.imageUrl" height="250" width="250">
          <div class="card-block p-3">
            <h4 class="card-title"></h4>
            <p class="card-text">Durum: {{ Jobs.durationDayText }}</p>
            <p class="card-text">Lokasyon : {{ Jobs.cityName }} / {{ Jobs.townName }}</p>
            <p class="card-text">Telefon : {{ Jobs.contactPhone.countryCallingCode }}-{{ Jobs.contactPhone.areaCode }} {{ Jobs.contactPhone.number }}</p>
            <p class="card-text">Adres: {{ Jobs.address }}</p>
            <p class="card-text">Açıklama : {{ Jobs.description }}</p>
            <p class="card-text">{{ Jobs.distance }}</p>
            <p class="card-text">{{ Jobs.postalCode }}</p>
            <p class="card-text">{{ Jobs.latitude }}</p>
            <p class="card-text">{{ Jobs.longitude }}</p>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
/*eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      Jobs: [],
      errors: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(
          "https://my-json-server.typicode.com/naimina/joblist/Details?jobId=" +
            this.$route.params.id
        )
        .then(response => {
          this.Jobs = response.data[0];
           this.loading = false;
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>