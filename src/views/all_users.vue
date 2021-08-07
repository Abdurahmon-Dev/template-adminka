<template>
  <div>
      <div class="head-title d-flex">
        <div class="wando"></div>
        <h2>Users</h2>
        <!-- <select name="" id="">
          <option value="">Hello</option>
        </select>
        <el-button type="success">Success</el-button> -->
    </div>
    <section class="card-section">
      <div class="users-card">
        <div class="pos-relative d-wrap">
          <span class="d-block">Saidakbarov Muhammadrizo Abdurahmonovich</span>
          <hr class="d-block">
          <small>Otdel name Manager</small>
        </div>
        <div class="users-image">
          <img src="" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.head-title .wando {
    width: 4px;
    height: 30px;
    background-color: #f16522;
    margin-right: 5px;
    z-index: 10;    
}
.head-title h2 {
  font-weight: 700;
  font-size: 25px;
  color: white;
  font-family: Product Sans;
  margin-top: 3px;
}
.card-section {
  margin-top: 50px;
}
.users-card {
  width: 332px;
  height: 153px;
  background-color: #16181C;
  padding: 20px;
  display: flex;
  border-radius: 8px;
}
.users-image {
  width: 90px;
  height: 120px;
  border-radius: 8px;
  background-color: white;
}

</style>