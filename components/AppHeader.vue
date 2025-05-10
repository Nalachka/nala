<template>
  <nav class="bg-green-500 dark:bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold text-white dark:text-white">
        NALA-SHOP
      </NuxtLink>
      <ul class="flex space-x-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white menu-link">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
       <div class="flex items-center space-x-4">
             <UButton icon="i-heroicons-shopping-cart" color="white" variant="ghost" @click="openCartPage">
                 Корзина
              </UButton>
             <UButton color="white" variant="ghost" @click="openLoginPage">
                 Вход
              </UButton>
        </div>
    </div>
  </nav>
</template>

<script setup>
  const navLinks = [
      { label: 'Главная', to: '/' },
      { label: 'Каталог', to: '/shop' },
      { label: 'О нас', to: '/about' },
      { label: 'Контакты', to: '/contact' },
  ];
   const route = useRoute();
   const router = useRouter();
  const openCartPage = () => {
    router.push('/cart')
   }
   const openLoginPage = () => {
        router.push('/login')
   }
</script>
