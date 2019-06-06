<template>
    <div id="calendar">
        <div>
            <router-link to="/cal/month">月视图</router-link>
            <router-link to="/cal/week">周视图</router-link>
            <router-link to="/meeting/add">会议预订</router-link>
        </div>
        <div>
            <table class="table table-striped">
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'calendar',
    watch: {
        '$route' (to, from){
            console.log("Route to : " + to);
            console.log("Route from" + from);
        }
    }
}
</script>
