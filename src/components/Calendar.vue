<template>
    <div id="calendar">
        <div>
            <router-link to="/cal/month">月视图</router-link>
            <router-link to="/cal/week">周视图</router-link>
            <router-link to="/meeting/add">会议预订</router-link>
        </div>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>会议室</td>
                        <td v-for="item in mt_date">
                            {{ item }}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in mt_room">
                        <td>{{ r }}</td>
                        <td v-for="item in mt_date">
                            {{ item }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: 'calendar',
    data: function(){
        return {
            mt_date : ['Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday'],
            mt_time : ['8:30-9:30', '9:30-10:30', '10:30-11:30', '13:30-14:30', '15:30-16:30', '16:30-17:30'],
            mt_room : ['1308', '1303', '1304', '1305', '1306'],
        }
    },
    watch: {
        '$route' (to, from){
            console.log("Route to : " + to);
            console.log("Route from" + from);
        }
    }
}
</script>
