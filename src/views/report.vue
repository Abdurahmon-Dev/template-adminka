<template>
  <div class="head-title-report d-block">
    <section class="d-flex">
      <div class="wand"></div>
      <h2>Report</h2>
      <div class="block">
        <el-date-picker
          size="medium"
          v-model="value1"
          type="date"
          placeholder="Pick a date"
          default-value="2021-10-01">
        </el-date-picker>
    </div>
    <select class="department" name="" placeholder="hello">
      <option value="">nma ghap</option>
      <option value="">zato</option>
    </select>
    </section>
    
    
    <er-row class="report-cont">
      <el-col :span="6" class="report-name">
        <div class="report-box">
          <strong>Fullname</strong>
        </div>
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>1 -  February</strong>
        </div>
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>2 - February</strong>
        </div> 
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>3 - February</strong>
        </div>
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>4 - February</strong>
        </div>
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>5 - February</strong>
        </div>
      </el-col>
      <el-col :span="3" class="report-name">
        <div class="report-box">
          <strong>6 - February</strong>
        </div>
      </el-col>
    </er-row>

    <el-row class="">
      <el-col :span="6" class="fullname">
        <div class="d-flex" v-for="data of index" :key="data">  
          <figcaption>
            <img src="" alt="">
            <span></span>
          </figcaption>
          <div>
            <strong class="d-block">Muhammadrizo Saidakbarov</strong>
            <small>Desinger</small>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">61</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">12</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">66</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">15</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">33</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="month" v-for="data of index" :key="data">
          <span class="d-block">23</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 8,
      value1: '',
      value2: '',
    }
  }
};
</script>

<style scoped>
.head-title-report .wand {
  width: 4px;
  height: 30px;
  background-color: #f16522;
  margin-right: 5px;
  z-index: 10;
}
.head-title-report h2 {
  font-weight: 700;
  font-size: 25px;
  color: white;
  font-family: Product Sans;
  margin-top: 3px;
}
.head-title-report section {
  margin-bottom: 40px;
}
/* down */
.report-name .report-box {
  background-color: black;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.report-name strong{
  font-size: 18px;
  color: white;
  font-weight: 500;
  font-family: Product Sans Medium;
}
.fullname figcaption {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
  position: relative;
}
.fullname div strong  {
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
}
.fullname div small {
  font-size: 15px;
  color: #CECECE;
  font-weight: 300;
  margin-top: 3px;
}
.fullname figcaption span {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  background-color: #1D985A;
  border-radius: 50%;
}
.fullname > div {
  margin-bottom: 20px;
}
.month {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
}

.month span {
  color:white;
  font-size: 15xp;
  font-weight: 400;
  text-align: center;
}
.calendar-input{
  width: 219px;
  height: 48px;
  border: black 1px solid !important; 
}
.el-input--medium .el-input__inner {
  width: 26px !important;
  background-color: brown;
}
.department {
  width: 219px;
  height: 48px;
  color: #16181C;
  background-color: black !important;
  border-radius: 10px;
  border: none;
  color: white;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
}
.department option {
  font-size: 15px;
  font-weight: 400;
  color: #CECFD0;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
}



</style>