<template>
   <BaseLayout_2>
        <template #header>
            <img  class="banner" :src="banner"/>
        </template>
        <template #imgaes_left>
             <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in image1" :key="index">
                    <el-image :src="item.image" class="image-carousel"></el-image>
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #imgaes_right>
             <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in image2" :key="index">
                    <el-image :src="item.image" class="image-carousel"></el-image>
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #content>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item >Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Điện thoại</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                    <img width="99%" class=""
                         src="https://thutrang.edu.vn/mo-hinh-songoku-ti-le-1-1/imager_5049.jpg"
                         alt="">
                <p>Son Goku (孫悟空そんごくう (Tôn Ngộ Không) Son Gokū?), tên khai sinh là Kakarot (カカロット Kakarotto?) là nhân vật chính trong series manga Dragon Ball của Toriyama Akira. Cậu là cháu trai nuôi của ông nội Gohan, chồng của Chi-Chi, bố của Gohan và Goten, ông nội của Pan và trong Dragon Ball GT là cụ cố của Goku Jr. Thầy dạy của cậu có Quy lão, Kaio và Whis. Son Goku được đánh giá là nhân vật giả tưởng mạnh nhất mọi thời đại.</p>
            </div>
        </template>
   </BaseLayout_2>
</template>
<script>
import BaseLayout_2 from "./BaseLayout_2.vue";

export default {
  name: 'NewsDetailPage',
  components: {
    BaseLayout_2
},
  data() {
   return {
    banner:'https://file.vfo.vn/hinh/2018/03/hinh-anh-hinh-nen-songoku-dep-nhat-tu-nho-den-lon-1.jpg',
    image1 : [
        {
            image:'https://i.pinimg.com/564x/e2/30/9b/e2309ba052273c57ffc36d8b38e731c7.jpg'
        },
        {
            image:'https://zpro.vn/images/product/500x500/mo-hinh-dragon-ball-son-goku-be-hop-qua.1623779139.jpg'
        },
        {
            image:'https://chienbinhvutru.vn/static/uploads/chinh-thuc-ra-mat-500x500.png'
        }
    ],
    image2 : [
        {
            image:'https://i1.sndcdn.com/artworks-000069473616-ednzwf-t500x500.jpg'
        },
        {
            image:'https://i1.sndcdn.com/artworks-000238077387-aebsr2-t500x500.jpg'
        },
        {
            image:'https://gangsworld.com/wp-content/uploads/2021/12/artworks-QqojMmMwQJDrFkao-zJmbpw-t500x500.jpg'
        }
    ],
   }
  }
}

</script>

<style>
.banner {
    height: 250px ;
    object-fit: cover;
    width: 100%;
}
</style>