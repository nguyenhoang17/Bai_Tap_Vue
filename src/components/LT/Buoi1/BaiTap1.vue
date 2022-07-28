<template>
    <div>
        <div id="container">
            <div class="form-input">
                <form action="">
                    <label for="input"><b>Nhập tiêu đề</b></label>
                    <input v-model="title" id="input" type="text">
                    <label for="textarea"><b>Nhập nội dung</b></label>
                    <textarea v-model="content" name="" id="textarea"></textarea>
                </form>
            </div>
            <div id="form-output">
                <h2>{{ title }}</h2>
                <div v-html="content">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaiTap1',
        props: {
            msg: String
        },
        data (){
            return {
                title: "",
                content: ""
            }
        }
    }
</script>

<style lang="scss">
@mixin heightVsBrVsPd {
    height: 370px;
    border-radius: 20px;
    padding: 30px 30px;
}
    #container{
        display: flex;
        margin: 0px 100px;
        
        .form-input{
            width: 350px;
            border: 1px solid #000;
            @include heightVsBrVsPd;
            form{

                label{
                    display: block;
                    text-align: left;

                }
                input{
                    width: 100%;
                    height: 40px;
                    margin: 10px 0;
                }
                #textarea{
                    width: 100%;
                    height: 200px;
                    margin-top: 10px;
                }
            }
        }
        #form-output{
            @include heightVsBrVsPd;
            margin-left: 150px;
            width: 700px;
            border: 1px dashed #000;
            text-align: left;
        }
    }

</style>