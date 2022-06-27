<template>
    <div>
        <div class="container">
            <div>
            
                    <label><b>Họ và tên</b></label>
                    <input v-model="nameinput" class="input" type="text">
                    <label><b>Ngày sinh</b></label>
                    <input v-model="dateinput" class="input" type="text">
                    <label><b>Số điện thoại</b></label>
                    <input v-model="phoneinput" class="input" type="number">
                    <label><b>Link FaceBook</b></label>
                    <input v-model="linkinput" class="input" type="text">
                    <button @click="saveInfo()" class="save">Save</button>
                    <button @click="reset()" class="clear">Clear</button>
            
            </div>
            <div>
                <h3>Họ và tên: {{nameoutput}}</h3>
                <h3>Ngày sinh: {{dateoutput}}</h3>
                <h3>Số điện thoại: {{phoneoutput}}</h3>
                <h3>Link Facebook: <a :href="linkoutput" target="_blank">{{linkoutput}}</a></h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        name: 'BaiTap2',
        props: {
            msg: String
        },
        data(){
            return{
                nameinput:"",
                dateinput:"",
                phoneinput:"",
                linkinput:"",
                nameoutput:"",
                dateoutput:"",
                phoneoutput:"",
                linkoutput:""
            }
        },
        methods:{
            saveInfo(){
                this.nameoutput=this.nameinput;
                this.dateoutput=this.dateinput;
                this.phoneoutput=this.phoneinput;
                this.linkoutput=this.linkinput;
            },
            reset(){
               this.nameinput="";
                this.dateinput="";
                this.phoneinput="";
                this.linkinput="";
                this.nameoutput=this.nameinput;
                this.dateoutput=this.dateinput;
                this.phoneoutput=this.phoneinput;
                this.linkoutput=this.linkinput;
            }
        },
       
}


</script>
<style lang="scss" scoped>
    .container{
        display: flex;
        div{
            width: 500px;
            height: 530px;
            border: 1px solid #000;
            padding: 30px;
            text-align: left;
            
                label{
                    display: block;
                }
                input{
                    width: 100%;
                    height: 50px;
                    margin: 20px 0;
                }
                .save{
                    background-color: #3366FF;
                    padding: 15px 40px;
                    font-weight: 900;
                    color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    font-size: 17px;
                }
                .clear{
                    background-color: #FF0066;
                    padding: 15px 40px;
                    font-weight: 900;
                    color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    font-size: 17px;
                    margin-left: 10px;
                }
            
            h3{
                color: #339933;
            }
        }
    }
</style>