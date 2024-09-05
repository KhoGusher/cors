<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div v-if="businessUnits.length">
      <h2>Business Units</h2>
      <ul>
        <li v-for="unit in businessUnits" :key="unit.id">{{ unit.name }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessUnits: []
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://ec2-13-244-184-193.af-south-1.compute.amazonaws.com/api/app-api/business-units');
      const data = await response.json();
      this.businessUnits = data;
      console.log(data);
    } catch (error) {
      console.error('Error fetching business units:', error);
    }
  }
};
</script>
