<template>
    <div class="container mx-auto py-10">
        <h2 class="text-3xl font-bold mb-6 text-center text-brown-700">Корзина</h2>
        <div v-if="cartItems.length > 0">
            <div class="mb-6">
                <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div class="flex items-center">
                    <img :src="item.image" alt="item.name" class="w-20 h-20 object-cover rounded mr-4"/>
                       <div>
                          <h4 class="font-semibold text-brown-700">{{ item.name }}</h4>
                           <p class="text-gray-600">Количество: {{ item.quantity }}</p>
                           <p class="text-gray-600">Цена: {{(item.price*item.quantity*90).toFixed(2)}} ₽</p>
                       </div>
                  </div>
                    <UButton color="red" variant="ghost" @click="removeFromCart(item.id)">Удалить</UButton>
                </div>
            </div>
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-semibold text-brown-700">Итого:</h3>
                <span class="text-2xl font-bold text-gray-800">{{ (total*90).toFixed(2) }} ₽</span>
            </div>
              <div class="flex justify-end">
                   <UButton color="red" variant="solid" @click="clearCart">Очистить корзину</UButton>
              </div>
        </div>
        <p v-else class="text-lg text-gray-700 mb-4 text-center">Ваша корзина пуста.</p>
    </div>
</template>

<script setup>
import { useCart } from '~/composables/useCart';
const { cartItems, removeFromCart, clearCart, total } = useCart();
</script>
