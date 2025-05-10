<template>
  <div class="container mx-auto py-10">
    <UCard :ui="{ rounded: 'rounded-xl', shadow: 'shadow-md' }">
      <template #header>
          <div class="flex justify-center">
              <img :src="tea.image" :alt="tea.name" class="max-w-full max-h-[500px] object-contain rounded-t-xl"/>
          </div>
      </template>
      <div class="p-6">
        <h2 class="text-4xl font-bold mb-4 text-brown-700">{{ tea.name }}</h2>
        <p class="text-gray-700 mb-6">{{ tea.description }}</p>
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
                <USelect
                    v-model="selectedWeight"
                    :options="weightOptions"
                    size="xs"
                    :ui="{ rounded: 'rounded-md'}"
                    @change="updatePrice"
                />
                <span class="text-gray-800 font-medium text-xl">{{ formattedPrice }}</span>
            </div>
        </div>
        <UButton color="green" variant="solid" class="w-full mb-6" @click="addToCart(tea)">
          Добавить в корзину
        </UButton>
         <div v-if="relatedTeas.length > 0">
            <h3 class="text-2xl font-semibold mb-4 text-brown-700">С этим товаром часто покупают</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProductCard v-for="relatedTea in relatedTeas" :key="relatedTea.id" :tea="relatedTea" />
            </div>
         </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { fetchTea, fetchTeas } from '~/utils/api';
import { useCart } from '~/composables/useCart';
import { ref, computed } from 'vue';

const route = useRoute();
const { data: tea, error } = await useAsyncData('tea', () =>
    fetchTea(route.params.slug)
);

const { addToCart } = useCart();
if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Tea Not Found' });
}

const selectedWeight = ref('100');
const weightOptions = ref([
    { label: '100 г', value: '100' },
    { label: '200 г', value: '200' },
    { label: '500 г', value: '500' },
]);

const currentPrice = computed(() => {
  return tea.value.price;
});
const formattedPrice = computed(() => {
  const price = (currentPrice.value * selectedWeight.value / 100 * 90).toFixed(2);
    return `${price} ₽`;
});

const updatePrice = () => {

};
 const {data: allTeas} = await useAsyncData("allTeas", () => fetchTeas())
  const relatedTeas = computed(() => {
    if (!tea.value || !allTeas.value) {
      return [];
    }
     const currentTeaType = tea.value.type;
    return allTeas.value.filter((relatedTea) => relatedTea.type === currentTeaType && relatedTea.id !== tea.value.id).slice(0,3);
});

</script>
