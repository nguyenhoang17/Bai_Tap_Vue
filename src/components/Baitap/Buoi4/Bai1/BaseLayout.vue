<template>
    <el-container>
        <el-aside>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#000055" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span>Tổng quan</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-s-shop"></i>
                    <span>Quản lý sản phẩm</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span>Quản lý hoá đơn</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-s-data"></i>
                    <span>Báo cáo thống kê</span>
                </el-menu-item>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Quản lý chi nhánh</span>
                    </template>
                    <el-menu-item-group title="Hoạt động">
                        <el-menu-item index="1-1">Sản phẩm</el-menu-item>
                        <el-menu-item index="1-2">Đơn hàng</el-menu-item>
                        <el-menu-item index="1-3">Khách hàng</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Báo cáo">
                        <el-menu-item index="1-1">Doanh thu</el-menu-item>
                        <el-menu-item index="1-2">Tồn kho</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span>Cài đặt hệ thống</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-row>
                <el-col :span="8">
                <div id="ct_head"><slot name="header"></slot></div>
                    
                </el-col>
                <el-col :span="16">
                <div class="head__content">
                    <el-badge :value="12" class="item">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar :size="40" src="https://empty" @error="errorHandler">
                                            <img src="../../../../../src/assets/logo.png" alt="">
                                        </el-avatar>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                        <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                        <el-dropdown-item>Cấu hình</el-dropdown-item>
                        <el-dropdown-item style="border-top: 1px solid #ccc;">Đăng xuất</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>  
                </div>
                    
                </el-col>
            </el-row>
            <el-row>
                <slot name="content"></slot>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    name: "BaseLayout",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
 
};
</script>
<style scoped lang="scss">
   .el-container{
        margin: 0;
        padding: 0;
    .el-aside{
        height: 98.5vh;
        background-color: #000055;
        color: #ffffff;
       text-align: left;
    }
    .head__content{
        text-align: right;
    }
    .el-main{
        padding: 0;
        .item{
            margin-right: 20px;
        }
        .el-row{
            background-color: #CCFFFF;
            border-bottom: 1px solid #ccc;
        }
        #ct_head{
            text-align: left;
            padding: 10px;
        }
    }
   }
</style>