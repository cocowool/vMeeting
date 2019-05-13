<template>
    <div>
        <div>Left Column</div>
        <div>
            <router-link v-bind="/cal">Calendar</router-link>
            <router-link v-bind="/cal">Calendar</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

