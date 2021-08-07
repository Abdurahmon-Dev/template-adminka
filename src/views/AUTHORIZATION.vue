<template>
  <div class="d-flex jus-center align-items-center">
      <div class="auth-cont">
          <h1 class="login-title">Login Form</h1>
          <div>
              <el-input @input="isBtnDisabledidation" placeholder="Please input Username" v-model="input_username">
                  <template slot="prepend"><i class="ri-user-3-line"></i></template>
              </el-input>
          </div>
          <div>
              <el-input @input="isBtnDisabledidation" placeholder="Please input password" v-model="input_password" show-password>
                  <template slot="prepend"><i class="ri-lock-fill"></i></template>
              </el-input>
          </div>
          <el-button :disabled="isBtnDisabled" @click="PostItems()" class="btn-log" type="primary">Login</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data: {},
            input_username: '',
            input_password:'',
            object_data :{},
            isBtnDisabled: true
        }
    },

    methods: {
        async PostItems() {
            try {
                this.validation()
                const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.object_data = {
                    Username: this.input_username,
                    Password: this.input_password
                })
            };
                const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
                const json = await response.json();
                this.data = json;
                console.log(this.data);
                
            } catch (e) {
                console.log(e);
            }
        },
        validation() {
            if(this.input_username !== 'Admin' || this.input_password !== '1111') {
                alert('Incorrect password or username');
            }
            else {
                this.$router.push('/statistics');
            }
        },
        isBtnDisabledidation() {
            if(this.input_username && this.input_password) {
                this.isBtnDisabled = false;
            } else {
                this.isBtnDisabled = true;
            }
        }
        
        
    },
}
</script>

<style scoped>
   .auth-cont {
       padding: 160px 35px 0;
       width: 520px;
       max-width: 100%;
   }
   .btn-log{
       width: 100%;
   }
   .login-title {
       color: white;
       font-size: 3rem;
       text-align: center;
       margin-bottom: 1em;
       font-family: 'Encode Sans SC', sans-serif;
   }
   .auth-cont div {
       margin-bottom: 10px;
   }
</style>