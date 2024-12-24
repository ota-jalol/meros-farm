<template>
  <div>
    <h2>Basket Items</h2>
    <ul>
      <li v-for="(item, index) in basketItems" :key="index">
        {{ item.name }} - {{ item.quantity }} x {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const basketItems = ref([
  { name: 'Product 1', quantity: 2, price: 100 },
  { name: 'Product 2', quantity: 1, price: 200 },
  { name: 'Product 3', quantity: 3, price: 150 }
]);
</script>
