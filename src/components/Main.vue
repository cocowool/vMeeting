<template>
    <div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/cal">Calendar</router-link>
            <router-link to="/about">About</router-link>
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

