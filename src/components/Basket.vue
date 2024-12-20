<template>
  <div class="basket">
    <h2>Basket</h2>
    <ul>
      <li v-for="(product, index) in basket" :key="index">
        {{ product.name }} - {{ product.quantity }} x {{ product.price }} = {{ product.quantity * product.price }}
        <button @click="removeFromBasket(index)">Remove</button>
      </li>
    </ul>
    <p>Total: {{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const basket = ref([]);

function addToBasket(product) {
  const existingProduct = basket.value.find(item => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    basket.value.push(product);
  }
}

function removeFromBasket(index) {
  basket.value.splice(index, 1);
}

const totalPrice = computed(() => {
  return basket.value.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
});
</script>

<style scoped>
.basket {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.basket h2 {
  margin-top: 0;
}

.basket ul {
  list-style-type: none;
  padding: 0;
}

.basket li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.basket button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.basket button:hover {
  background-color: #ff1a1a;
}
</style>
