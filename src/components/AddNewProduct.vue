<template>
  <div class="container">
    <div class="card">
      <h2>L-Виава амп.1мг/5мл№5 Левокарнитин</h2>
      <div class="input_type">
          <p style="padding-right: 10px;">Sonini kiriting:</p>
          <input  type="text" placeholder="Soni" />
      </div>

      <div class="btn">
        <button class="btn1" @click="propss.Cancel">Bekor qilish</button>
        <button class="btn2" @click="propss.Save">Qo'shish</button>
      </div>
    </div>
  </div>
</template>
<script setup>
const propss = defineProps({
  title: { default: null },
  Save: { default: null, type: Function, required: true },
  Cancel: { default: null, type: Function, required: true },
});
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center !important;
    height: 100vh;
}

input{
    width: 90px;
}

.card {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 2px solid #69c2c0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
  font-size: 14px;
  font-weight: 600;
}

.btn{
    display: flex;
    justify-content: space-between;
}

.btn1{
    border: 1px solid red;
    color: red;
    border-radius: 5px;
    cursor: pointer;
}

.btn2{
    border: 1px solid #69c2c0;
    color: #69c2c0;
    border-radius: 5px;
    cursor: pointer;
}

.input_type{
    display: flex;
    justify-content: space-around;
    padding-right: 10px;
    padding-bottom: 10px;
}
</style>
