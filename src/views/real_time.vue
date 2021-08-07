<template>
  <div>
    <div class="head-title d-flex">
      <div class="wando"></div>
      <h2>Real time</h2>
    </div>

    <el-row>
      <el-col :span="24">
        <div class="real-time-statistica">
          <header class="d-flex jus-center gap-5">
            <span>Users</span>
            <span>Guest</span>
          </header>

          <div class="statistica-cont">
            <el-col :span="12" class="d-block">
              <div>
                <strong>Name</strong>
              </div>
              <nav class="users-name d-flex">
                <figcaption>
                  <img src="" alt="">
                </figcaption>
                <p>Shohruh Kamolov</p>
              </nav>
              <nav class="users-name d-flex">
                <figcaption>
                  <img src="" alt="">
                </figcaption>
                <p>Abdurahmonov Samandarjon</p>
              </nav>
              <nav class="users-name d-flex">
                <figcaption>
                  <img src="" alt="">
                </figcaption>
                <p>Saidakbarov Muhammadrizoxon</p>
              </nav>
              <nav class="users-name d-flex">
                <figcaption>
                  <img src="" alt="">
                </figcaption>
                <p>Muhammadiyev Bekzod</p>
              </nav>
              <nav class="users-name d-flex">
                <figcaption>
                  <img src="" alt="">
                </figcaption>
                <p>Shohruh Kamolov</p>
              </nav>
            </el-col>

            <el-col :span="5" class="d-block">
              <div>
                <strong>Departament</strong>
              </div>
              <ul>
                <li>Manager</li>
              </ul>
              <ul>
                <li>Manager</li>
              </ul>
              <ul>
                <li>Manager</li>
              </ul>
              <ul>
                <li>Manager</li>
              </ul>
              <ul>
                <li>Manager</li>
              </ul>
            
            </el-col>
            <el-col :span="4" class="d-block">
              <div>
                <strong>Time</strong>
              </div>
              <ul class="for-time">
                <li>19:00</li>
              </ul>
              <ul class="for-time">
                <li>19:00</li>
              </ul>
              <ul class="for-time">
                <li>19:00</li>
              </ul>
              <ul class="for-time">
                <li>19:00</li>
              </ul>
              <ul class="for-time">
                <li>19:00</li>
              </ul>
            </el-col>
            <el-col :span="3" class="d-block">
              <div>
                <strong>Active</strong>
              </div>
              <ul class="active">
                <li class="enter">
                  Enter
                </li>
              </ul>
              <ul class="active">
                <li class="exit">
                  Exit
                </li>
              </ul>
              <ul class="active">
                <li class="enter">
                  Enter
                </li>
              </ul>
              <ul class="active">
                <li class="exit">
                  Exit
                </li>
              </ul>
              <ul class="active">
                <li class="enter">
                  Enter
                </li>
              </ul>
              
            </el-col>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.real-time-statistica {
  margin-top: 20px;
  height: 628px;
}
.real-time-statistica div strong {
  font-size: 18px;
  font-weight: 600;
}
.real-time-statistica span {
  color: white;
  font-size: 22px;
  font-weight: 500;
  font-family: Product Sans Medium;
  cursor: pointer;
  transition: 0.4s ease;
}
.real-time-statistica span:hover {
  color: orangered;
}
.real-time-statistica span::before {
  width: 0%;
}
.real-time-statistica span:hover:before {
  content: '';
  position: absolute;
  height: 3px;
  width: 10%;
  background-color: orangered;
  bottom: 0;
  transform: translateX(-20px);
}
.real-time-statistica header {
  background-color: #0e0f10;
  height: 52px;
  align-items: center;
  margin-bottom: 5px;
  position: relative;
}
.statistica-cont div{
  background-color: #0e0f10;
  color: white;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 4%;
}
.users-name {
  margin-top: 25px;
}
.users-name figcaption{
  width: 43px;
  height: 43px;
  background-color: white;
  border-radius: 500%;
}
.users-name p {
  font-size: 18px;
  font-weight: 500;
  margin-top: 11px;
  margin-left: 20px;
  font-family: Product Sans Medium;
}
.statistica-cont ul {
  margin-top: 30px;
  margin-bottom: 52px;
}
.statistica-cont ul li {
  font-size: 18px;
  font-weight: 500;
  margin-left: 13%;
  color: #A4A1A1;
  font-family: Product Sans;
}
.statistica-cont pre {
  margin-top: 25px;
}
.statistica-cont b {
  font-size: 18px;
  font-weight: 400;
  font-family: Product Sans;
}
.for-time {
  margin-left: -10%;
}
.for-time li {
  color: white !important;                                      
}                                                                                                                                         
.active {
  margin-left: -5%;
}
.enter , .exit {
  font-size: 18px;
  font-weight: 500;
  font-family: Product Sans;
}
.enter {
  color: #1D985A !important;
}
.exit {
  color: #FF4A62 !important; 
  margin-left: 20% !important;
}

</style>