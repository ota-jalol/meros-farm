<template>
  <div class="container">
    <div style="display: flex; justify-content: center; align-items: center;">
      <div class="search-container">
        <i class="search-icon">🔍</i>
        <input type="text" placeholder="Qidirish..." class="search-box" />
      </div>
      <i class="filter-icon"><img src="../assets/hamburger.png" alt=""></i>
    </div>
    <div class="scroll-container">
      <div class="card">
        <h2>Card 1</h2>
        <p>Content for card 1</p>
      </div>
      <div class="card">
        <h2>Card 2</h2>
        <p>Content for card 2</p>
      </div>
      <div class="card">
        <h2>Card 3</h2>
        <p>Content for card 3</p>
      </div>
      <!-- Add more cards as needed -->
    </div>
    <div class="product-list">
    <div class="product-card" v-for="(item, index) in products" :key="index">
      <div>
      <div class="product-header">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="product-info">
        <div style="display: flex;">
        <p style="padding-right: 10px;">Muddati: {{ item.expiry }}</p>
        <p>{{ item.company }}</p>
      </div>
      <div style="display: flex; ">
        <p style="padding-right: 10px;">Narxi 100%: {{ item.price_100 }}</p>
        <p>Narxi: {{ item.price }}</p>
      </div>
      </div>
    </div>
      <div class="product-actions">
        <img v-if="item.is_new" src="../assets/new.png" alt="" class="new-product-badge">
        <button class="add-to-cart-btn"  @click="ShowProductAdd"><img src="../assets/garbage.png" alt=""></button>
      </div>
    </div>
  </div>

  <footer class="footer">
  <div class="footer-item">
    <img src="/src/assets/Group 7.svg" alt="Categories">
  </div>
  <div class="footer-item">
    <img src="/src/assets/Group 2.png" alt="Cart">
  </div>
  <div class="footer-item">
    <img src="/src/assets/Group.png" alt="User">
  </div>
</footer>
  
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";
import AddNewProduct from '@/components/AddNewProduct.vue';
const products = ref([
  {
    name: "L-Вивава амп.1мг/5мл№5 Левокарнитин",
    expiry: "01.11.2026",
    company: "Dr.Sertus/Турция",
    price_100: "107 982",
    price: "111 982",
    is_new: false
  },
  {
    name: "L-тироксин 100 №50",
    expiry: "01.10.2025",
    company: "Берлин Хеми/Германия",
    price_100: "25 976",
    price: "26 779",
    is_new: true
  },
  {
    name: "L-тироксин 50 №50",
    expiry: "01.08.2025",
    company: "Берлин Хеми/Германия",
    price_100: "20 952",
    price: "21 600",
    is_new: false
  },
  {
    name: "L-Цет таб5.5мг№100",
    expiry: "01.08.2026",
    company: "Kusum Healthcare Pvt.Ltd/Индия",
    price_100: "189 771",
    price: "195 640",
    is_new: true
  }
]);

function ShowProductAdd() {
  debugger
  const { open, close } = useModal({
    component: VueFinalModal,
    attrs: {},
    slots: {
      default: useModalSlot({
        component: AddNewProduct,
        attrs: {
          title: "Добавить продукт",
          Save(e) {
            close();
          },
          Cancel(e) {
            close();
          },
        },
      }),
    },
  });
  open();
}
</script>

<style scoped>
.container{
  padding: 10px;
  width: 100%;
  color: black;
  /* border: 1px solid #0fcbc0; */
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #0fcbc0;
  margin-top: 20px;
  padding-top: 15px;
}

.footer-item {
  text-align: center;
}

.footer-item img {
  width: auto;
  height: 30px;
  cursor: pointer;
}

.footer-item img:hover {
  opacity: 0.8;
}

.footer-item img:active {
  transform: scale(0.95);
}
.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  gap: 40px;
}

.product-card {
  width: 90%;
  border: 1px solid #0fcbc0;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.product-header h3 {
  font-size: 14px;
  font-weight: 400;
}

.product-info p {
  margin: 0;
  font-weight: 300;
  font-size: 12px;
}

.product-actions {
  display: flex;
  align-items: end;
  justify-content: end;
}

.add-to-cart-btn {
  background-color: inherit;
  /* border: 1px solid #0fcbc0; */
  border: none;
  /* color: white; */
  font-size: 24px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -18px;
  right: -20px;
  cursor: pointer;
}

.new-product-badge {
  position: absolute;
  top: 0px;
  right: -5px;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 10px;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #69c2c0;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #fff;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.search-icon {
  margin-right: 10px;
  color: #8c8c8c;
  font-size: 16px;
}

.search-box {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  color: #8c8c8c;
}

.filter-icon {
  margin-left: 10px;
  color: #69c2c0;
  font-size: 16px;
  cursor: pointer;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px;
  box-sizing: border-box;

  scrollbar-width: none;  /* Hide scrollbar in Firefox */
  -ms-overflow-style: none;  /* Hide scrollbar in IE and Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none;  /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
}

.card {
  flex: 0 0 auto;
  width: 260px;
  height: 110px;
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
