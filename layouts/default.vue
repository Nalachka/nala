<template>
  <div class="bg-gray-50 dark:bg-gray-900">
     <AppHeader />
       <main>
           <slot />
        </main>
       <AppFooter />
    </div>
</template>

<script setup>
 import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
