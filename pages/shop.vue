<template>
  <div class="container mx-auto py-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-brown-700">Каталог чая</h2>
    <div class="flex justify-between mb-6">
      <USelect
        v-model="selectedSort"
        :options="sortOptions"
        placeholder="Сортировать"
      />
      <USelect
        v-model="selectedType"
        :options="typeOptions"
        placeholder="Тип чая"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard v-for="tea in filteredTeas" :key="tea.id" :tea="tea" />
    </div>
  </div>
</template>

<script setup>
import { fetchTeas } from '~/utils/api';
import { ref, computed } from 'vue';

const { data: allTeas } = await useAsyncData('allTeas', () => fetchTeas());

const selectedSort = ref(null);
const selectedType = ref(null);

const sortOptions = ref([
  { label: 'По возрастанию цены', value: 'price_asc' },
  { label: 'По убыванию цены', value: 'price_desc' },
]);

const typeOptions = ref([
  { label: 'Зеленый чай', value: 'Зеленый чай' },
  { label: 'Черный чай', value: 'Черный чай' },
  { label: 'Белый чай', value: 'Белый чай' },
  { label: 'Улун', value: 'Улун' },
  { label: 'Матча', value: 'Матча' },
   { label: 'Травяной чай', value: 'Травяной чай' },
]);

const filteredTeas = computed(() => {
  let filtered = [...allTeas.value];
  if (selectedType.value) {
    filtered = filtered.filter((tea) => tea.type === selectedType.value);
  }
  if (selectedSort.value) {
    if (selectedSort.value === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort.value === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
  }
  return filtered;
});
</script>
