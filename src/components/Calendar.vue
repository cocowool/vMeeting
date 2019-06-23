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
                        <td>时间</td>
                        <td v-for="item in mt_date">
                            {{ item }}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in mt_room.length * mt_time.length">
                        <td>{{ mt_room[ Math.ceil(r / mt_time.length) - 1] }}</td>
                        <td>{{ mt_time[ (r-1) % mt_time.length] }}</td>
                        <td v-for="item in mt_date" v－on:click="displayReserve">
                           
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <a href="javascript:void(0);" v-on:click="prevWeek">上一周</a>
                <a href="javascript:void(0);" v-on:click="nextWeek">上一周</a>
                <a href="javascript:void(0);" v-on:click="displayReserve">限时预定</a>
            </div>
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
    methods: {
        displayReserve : function(){
            console.log('Reserve Starting...')
        },
        prevWeek : function(){
            console.log('Prev Week');
        },
        nextWeek : function(){
            console.log('Next Week');
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
