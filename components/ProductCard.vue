<template>
    <UCard :ui="{rounded:'rounded-lg', shadow:'shadow-md', ring:'ring-1 ring-gray-200 dark:ring-gray-700',  }">
        <template #header>
          <NuxtLink :to="`/tea/${tea.id}`">
            <img :src="tea.image" :alt="tea.name" class="w-full product-image rounded-t-lg cursor-pointer">
          </NuxtLink>
        </template>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2 text-brown-700">{{ tea.name }}</h3>
            <p class="text-gray-700 mb-3 line-clamp-2">{{ tea.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <USelect
                  v-model="selectedWeight"
                  :options="weightOptions"
                  size="xs"
                  :ui="{ rounded: 'rounded-md'}"
                 @change="updatePrice"
                />
                <span class="text-gray-800 font-medium">{{ formattedPrice }}</span>
              </div>
            </div>
             <div class="flex justify-center mt-2">
                 <UButton
                   color="green"
                   size="lg"
                   variant="solid"
                    class="transition-colors duration-300 hover:bg-green-600 focus:bg-green-700"
                  @click="addToCart(tea)"
                 >
                      Добавить в корзину
                  </UButton>
              </div>
        </div>
    </UCard>
</template>

<script setup>
import { useCart } from '~/composables/useCart';
import { ref, computed } from 'vue';

const props = defineProps({
    tea: {
        type: Object,
        required: true
    }
});

const { addToCart } = useCart();

const selectedWeight = ref('100');
const weightOptions = ref([
  { label: '100 г', value: '100' },
  { label: '200 г', value: '200' },
  { label: '500 г', value: '500' },
]);

const currentPrice = computed(() => {
  return props.tea.price;
});
const formattedPrice = computed(() => {
  const price = (currentPrice.value * selectedWeight.value / 100 * 90).toFixed(2);
    return `${price} ₽`;
});

const updatePrice = () => {

};
</script>

