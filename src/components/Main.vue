<template>
    <div id="main-container">
        <nav id="top-menu">
            <router-link to="/">首页</router-link>
            <router-link to="/cal">日程表</router-link>
            <router-link to="/meeting">我的预定</router-link>
            <router-link to="/user">个人信息</router-link>
        </nav>
        <div id="main-view">
            <transition name="fade" mode="out-in">
                <router-view class="view"></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

