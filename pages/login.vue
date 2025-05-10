<template>
    <div class="container mx-auto py-10">
        <h2 class="text-3xl font-bold mb-6 text-center text-brown-700">Вход</h2>
          <UCard :ui="{shadow:'shadow-md',rounded:'rounded-xl'}">
            <template #header>
                <h3 class="text-2xl font-semibold mb-4 text-brown-700 text-center">Авторизация</h3>
            </template>
                <div class="p-4">
                    <UForm>
                         <UInput placeholder="Логин" class="mb-4"/>
                         <UInput placeholder="Пароль" type="password" class="mb-4"/>
                         <UButton color="green" variant="solid" class="w-full">Войти</UButton>
                  </UForm>
                </div>
         </UCard>
    </div>
</template>
