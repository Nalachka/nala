<template>
    <div class="relative">
        <!-- Геройский блок на весь экран -->
        <section class="relative h-screen flex items-center justify-center overflow-hidden"
                 style="background-image: url('https://sun9-37.userapi.com/impg/eQrsQgnzEzEn-Gt5cGMgNDbqTMerpiqD_dVJhA/vTD1bZDKKw8.jpg?size=1472x568&quality=95&sign=09396cda47dd0149bbc293c17ab17e51&type=album'); background-size: cover; background-position: center;">

            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="container mx-auto text-center z-10 relative">
                <h1 class="text-5xl font-extrabold mb-6 text-white tracking-wide">
                    Откройте для себя мир чая
                </h1>
               <p class="text-xl mb-10 text-white leading-relaxed">
                    Мы предлагаем широкий выбор изысканных сортов чая для настоящих ценителей. Откройте для себя разнообразие вкусов и ароматов.
                </p>
                 <NuxtLink to="/shop">
                <UButton
                   color="green"
                   size="xl"
                   variant="solid"
                   class="rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    :ui="{shadow:'shadow-md'}"
                >
                    Подробнее
                </UButton>
                 </NuxtLink>
            </div>
        </section>

         <!-- Блок "О нас" -->
       <section class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto flex flex-col md:flex-row items-center gap-10">
                 <div class="md:w-1/2 mb-8 md:mb-0">
                     <h2 class="text-4xl font-bold mb-6 text-brown-700 tracking-tight">Наша страсть к чаю</h2>
                     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                     Мы — команда энтузиастов, увлеченных чаем. Наша миссия — предложить вам лучшие сорта чая, собранные с любовью и заботой.
                     </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                    Мы тщательно отбираем каждый сорт, чтобы вы могли насладиться неповторимым вкусом и ароматом настоящего чая.
                   </p>
                  </div>
                   <div class="md:w-1/2" :ui="{rounded:'rounded-xl',shadow:'shadow-2xl',overflow:'overflow-hidden'}">
                    <img
                      src="https://psv4.userapi.com/s/v1/d/r6vAClN-tSf5N0-xCpCJodlrRNhEcdxJPaOl6oCOs7JF597RzCqir7M_A3fxNjLnJi2BZIl7QZ00Oj4FkUjJSIxn-ojtc5IZoJf6Ii8LUfNkEua8O-_Nbw/photo_2024-12-26_11-20-53.jpg"
                      alt="Чашки с чаем"
                       class="object-cover w-full h-96 "
                  />
              </div>
           </div>
         </section>
         <!-- Блок популярных товаров -->
          <section class="py-20" style="background-image: linear-gradient(to top, #ffffff, #f5f5dc);">
              <div class="container mx-auto">
                  <h2 class="text-4xl font-bold mb-10 text-center text-brown-700 tracking-tight">
                     Популярные товары
                 </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <ProductCard v-for="tea in popularTeas" :key="tea.id" :tea="tea" />
                </div>
             </div>
         </section>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { fetchTeas } from '~/utils/api';

const { data: popularTeas } = await useAsyncData("popularTeas", () => fetchTeas({featured: true}));

onMounted(() => {
    console.log('Главная страница смонтирована');
  });
</script>