<template>
  <div class="container mx-auto py-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-brown-700">О нас</h2>
      <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/2">
               <p class="text-lg text-gray-700 mb-4">
                Мы небольшая компания, увлеченная чаем. Наша миссия - предложить вам лучшие сорта чая, отобранные с заботой и вниманием к деталям. Мы работаем с проверенными поставщиками, чтобы гарантировать высочайшее качество нашей продукции.
                </p>
                <p class="text-lg text-gray-700 mb-4">
                Наша команда состоит из экспертов и любителей чая, которые с удовольствием помогут вам выбрать идеальный чай для вашего настроения и вкуса. Мы ценим каждого нашего клиента и стремимся обеспечить исключительный уровень обслуживания.
                </p>
               <p class="text-lg text-gray-700">
                    Присоединяйтесь к нам в этом увлекательном путешествии по миру чая, и позвольте нам поделиться с вами нашей любовью к этому напитку!
                </p>
        </div>
           <div class="md:w-1/2" :ui="{shadow:'shadow-md',rounded:'rounded-xl',overflow:'overflow-hidden'}">
             <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/make-tea-2-14c12ff.jpg?quality=90&resize=768,574" alt="Наша команда" class="object-cover w-full h-96">
            </div>
    </div>
  </div>
</template>

<script setup>
   import { onMounted } from 'vue';
   onMounted(() => {
         console.log('Страница "О нас" смонтирована');
    });
</script>