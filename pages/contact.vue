<template>
    <div class="container mx-auto py-10">
        <h2 class="text-3xl font-bold mb-6 text-center text-brown-700">Контакты</h2>
         <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <h3 class="text-2xl font-semibold mb-4 text-brown-700">Наш адрес</h3>
                <p class="text-lg text-gray-700 mb-4">ул. Чайная, 123</p>
                <p class="text-lg text-gray-700 mb-4">г. Чайный, 456789</p>
               <h3 class="text-2xl font-semibold mb-4 text-brown-700">Наши контакты</h3>
                <p class="text-lg text-gray-700 mb-4">Телефон: +1 800 123 4567</p>
                <p class="text-lg text-gray-700 mb-4">Email: info@example.com</p>
            </div>
             <div class="md:w-1/2">
                 <UCard :ui="{shadow:'shadow-md',rounded:'rounded-xl'}">
                        <template #header>
                                 <h3 class="text-2xl font-semibold mb-4 text-brown-700">Напишите нам</h3>
                         </template>
                         <div class="p-4">
                         <UForm>
                               <UInput placeholder="Ваше имя" class="mb-4"/>
                               <UInput placeholder="Ваш email" type="email" class="mb-4"/>
                               <UTextarea placeholder="Ваше сообщение" class="mb-4"/>
                                <UButton color="green" variant="solid">Отправить</UButton>
                             </UForm>
                         </div>
                  </UCard>
             </div>
        </div>
    </div>
</template>
