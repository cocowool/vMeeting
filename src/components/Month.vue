<template>
    <div id="calendar">
        <div>
            <router-link to="/cal/month">月视图</router-link>
            <router-link to="/cal/week">周视图</router-link>
            <router-link to="/meeting/add">会议预订</router-link>
        </div>
        <div>
            Calendar Month View
        </div>
    </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: 'month',
    // data: function(){
    //     return {
    //         mt_date : ['Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday'],
    //         mt_time : ['8:30-9:30', '9:30-10:30', '10:30-11:30', '13:30-14:30', '15:30-16:30', '16:30-17:30'],
    //         mt_room : ['1308', '1303', '1304', '1305', '1306'],
    //     }
    // },
    // methods: {
    //     prevWeek : function(){
    //         console.log('Prev Week');
    //     },
    //     nextWeek : function(){
    //         console.log('Next Week');
    //     }
    // },
    // watch: {
    //     '$route' (to, from){
    //         console.log("Route to : " + to);
    //         console.log("Route from" + from);
    //     }
    // }
}
</script>
