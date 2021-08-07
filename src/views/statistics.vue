<template>
  <el-row class="cont">
    <el-col class="side-menu" :span="6">
      <div class="title">
        <h1>
          Adminka
        </h1>
      </div>
      <nav class="nav-bar">
        <router-link :to="'/realtime'">
          <div class="category-cont time">
            <i class="ri-time-line"></i>
            <span>Real time</span>
          </div>
        </router-link>
       
       <router-link :to="'/report'">
         <div class="category-cont report">
          <i class="ri-file-chart-line"></i>
          <span>Report</span>
        </div>
       </router-link>

        <router-link :to="'/chart'">
          <div class="category-cont static">
          <i class="ri-line-chart-line"></i>
          <span>Statistics</span>
        </div>
        </router-link>
        
        <div @click="Toggle('.ul-user','.first')" class="category-cont user">
          <i class="ri-user-settings-line"></i>
          <span>User</span>
          <i class="ri-arrow-up-s-line first"></i>
        </div>
        <ul class="ul-user">
            <router-link :to="'All_users'"><li>All</li></router-link>
            <router-link :to="'/vacation'"><li>Vacation</li></router-link>
            <router-link :to="'/Fingerprints'"><li>Fingerprints</li></router-link>
          </ul>

        <router-link :to="'/guest'">
          <div class="category-cont guest">
          <i class="ri-user-add-line"></i>
          <span>Guest</span>
        </div>
        </router-link>

        <router-link :to="'/cards'">
          <div class="category-cont cards active-class">
          <i class="ri-bank-card-line"></i>
          <span>Cards</span>
        </div>
        </router-link>

        <div @click="Toggle('.ul-company','.second')" class="category-cont company">
          <i class="ri-community-line"></i>
          <span>Company</span>
          <i class="ri-arrow-up-s-line second"></i>
        </div>
        <ul class="ul-company">
            <li>Structure</li>
            <li>Device</li>
            <li>Time table</li>
        </ul>
      </nav>
    </el-col>

    <el-col class="" span="18">
      <el-header class="header d-flex">
        <div class="languages">
          <span>Eng</span>
          <span class="wanda">|</span>
          <span>Rus</span>
        </div>
        <i class="ri-notification-2-line"></i>
        <div class="wand"></div>
        <strong>Sanjar Eshmetov</strong>
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main> 
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    Toggle(openBar,rotate) {
      document.querySelector(openBar).classList.toggle('activeBar');
      document.querySelector(rotate).classList.toggle('rotateActive')
    }, 
  }
}
</script>

<style>
  .side-menu {
    /* background-color: #16181C; */
    height: 100vh;
  }
  .side-menu .ul-company , .ul-user{
    display: none;
  }
  .category-cont {
    line-height: 40px;
    border-top: 1px black solid;
    position: relative;
    transition: 0.2s ease;
    cursor: pointer;
  }
  .category-cont:hover {
    background-color: black;
  }
  .category-cont.active {
    background-color: rgb(57, 75, 75);
    border-left: rgb(122, 1, 1) 5px solid;
  }
  .ul-company.activeBar,.ul-user.activeBar{
    display: block !important;
  }
  .first.rotateActive,.second.rotateActive{
    transform: rotate(180deg);
  }
  .nav-bar div i {
    margin-left: 20px;
    margin-right: 10px;
    color: white;
    transition: 0.2s ease;
  }
  
  .nav-bar span{
    font-weight: 500;
    font-size: 18px;
    color: white;
    font-family: Product Sans Medium;
  }
  .ri-arrow-up-s-line {
    position: absolute;
    color: white;
    right: 0;
    font-size: 23px;
  }
  .nav-bar ul {
    margin-top: 5px;
  }
  .nav-bar ul li {
    font-weight: 400;
    font-size: 15px;
    color:#A4A1A1;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .nav-bar ul li:hover {
    background-color: black;
  }
  .title {
    height: 60px;
    background-color: #23252C;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title h1 {
    font-size: 30px;
    font-family: 'Qahiri', sans-serif !important;
    color: #fff;
  }
  /* header-main */
  .main {
    padding: 40px 3%;
    background-color: #23252C;
  }
  .header{
    height: 70px;
    background-color: #16181C;
    padding: 0;
    padding-right: 10% !important;
    justify-content: flex-end;
    align-items: center;
  }
  .wand{
    width: 1px;
    height: 30px;
    background-color: white;
    margin-right: 25px;
  }
  .header span {
    color: white;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .languages{
    display: flex;
    align-items: center;
    border-bottom: white solid 2px;
  }
  .languages span {
    transition: 0.2s ease;
  }
  .languages span:hover {
    color: orangered;
  }
  .wanda {
    height: 22px;
    width: 1px;
    color: white !important;
    margin: 0 10px 0 8px;
  }
  .header i {
    margin: 0 20px;
    font-size: 25px;  
    cursor: pointer;
    color: white;
    transition: 0.3s ease;
  }
  .header i:hover {
    color: orangered;
  }
  .header strong {
    font-weight: 500;
    font-size: 18px;
    color: white;
    font-family: Product Sans Medium;
  }
  .router-link-exact-active .category-cont{
    background-color: rgb(80, 0, 0);
    border-left: #F16522 7px solid;
  }
  
  
</style>