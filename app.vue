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

<script setup>
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const businessUnits = ref([]);

onMounted(async () => {
  try {
    console.log('BASE_URL:', config.public.baseURL);
    const response = await fetch(`${config.public.baseURL}/business-units`);
    const data = await response.json();
    businessUnits.value = data;
  } catch (error) {
    console.error('Error fetching business units:', error);
  }
});
</script>
