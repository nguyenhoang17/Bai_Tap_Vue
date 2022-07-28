<template>
    <div class="container">
        <div class="formLogin">
            <img width="150px" src="../../assets/logoflixgo.png" alt="">
            <el-input placeholder="Email" ref="email" v-model="inputEmail"></el-input>
            <span class="err">{{errEmail}}</span>
            <el-input placeholder="PassWord" type="password" v-model="inputPass"></el-input>
            <span class="err">{{errPass}}</span>
            <p @click="redirect('forgot-password')"><el-link type="primary">Quên mật khẩu ?</el-link></p>
            <el-button type="primary" @click="login()">ĐĂNG NHẬP</el-button>
        </div>

    </div>
</template>

<script>
    export default{
        name:'LoginView',
        data (){
            return{
                inputEmail:'',
                inputPass:'',
                errEmail:'',
                errPass:'',
                check:'',
                email:''
                
            }
            
        },
        methods:{
            ValidateEmail(email) {

                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if (email.match(validRegex)) {
                    this.check=1;
                    return true;

                } else {
                    this.errEmail='Trường email phải đúng định dạng!';
                    this.check=0;
                    return false;

                }

            },
          redirect(param) {
            this.$router.push({
                path: `/${param}`
            })
            },
            login(){
                this.check=1;
                if(this.inputEmail.length===0){
                    this.errEmail='Trường email không được để trống!';
                    this.check=0;
                }
                if(this.inputEmail.length!==0){
                    this.email = this.$refs.email.value;
                    this.ValidateEmail(this.email)
                }
                if(this.inputPass.length===0){
                    this.errPass='Trường password không được để trống!';
                    this.check=0;
                }
                if(this.inputPass.length!==0 && this.inputPass.length < 8){
                    this.errPass='Trường password phải có ít nhất 8 ký tự!'
                    this.check=0;
                }
                if(this.check==1){
                    this.$message.success('Đăng nhập thành công');
                    this.redirect('product');
                }
            }
        },
        watch:{
            inputEmail(){
                if(this.inputEmail.length){
                    this.errEmail ='';
                }
            },
            inputPass(){
                if(this.inputPass.length){
                    this.errPass ='';
                }
            }
        }
    }
</script>
<style lang="scss">
    .container{
        height: 98vh;
        background-color: blue;
        // padding-top: 280px;
        .formLogin{
            background-color: #ffffff;
            width: 400px;
            height: auto;
            margin: auto;
            border-radius: 10px;
            padding: 20px;
            position: relative;
            top: 268px;
            input{
                margin: 10px 0;
                height: 50px;
            }
            p{
                float: right;
            }
            .el-button--primary{
                width: 100%;
                height: 50px;
            }
            .err{
                color: red;
                float:left;
            }
           
        
        }
    }
</style>