<template>
    <div>
        <div class="container">
            <FormContent/>
            <MessageContent :email="email" :password="password"/>
        </div>
    </div>
</template>

<script>
import FormContent from './formContent.vue'
import MessageContent from './messageContent.vue';
    export default {
    name: "containerContent",
    props: {
        msg: String
    },
    data() {
        return {
            email: "123@gmail.com",
            password: "12345"
        };
    },
    components: { FormContent, MessageContent }
}
</script>

<style lang="scss">
 .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    

    .infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
  }
</style>