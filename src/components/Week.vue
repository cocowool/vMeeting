<template>
    <div id="calendar">
        <div>
            <router-link to="/cal/month">月视图</router-link>
            <router-link to="/cal/week">周视图</router-link>
            <router-link to="/meeting/add">会议预订</router-link>
        </div>
        <div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <td>会议室</td>
                        <td>时间</td>
                        <td v-for="item in weekDays" :key="item">
                            {{ item }}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="m in mt_room.length * mt_time.length" :key="m">
                        <td>{{ mt_room[ Math.ceil(m / mt_time.length) - 1] }}</td>
                        <td>{{ mt_time[ (m-1) % mt_time.length] }}</td>
                        <td v-for="n in weekDays.length" :key="n" class="btn-reserve">
                            <a v-b-modal.reserve-modal href="javascript:void(0);">我要预定</a>
                            <b-button v-b-modal.reserve-modal>Launch demo modal</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <b-modal id="reserve-modal" title="会议室预定">
                <p class="my-4">Hello from modal!</p>
            </b-modal>
            <div>
                <a href="javascript:void(0);" v-on:click="prevWeek">上一周</a>
                <a href="javascript:void(0);" v-on:click="nextWeek">上一周</a>
            </div>
        </div>
    </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');

export default {
    name: 'week',
    data: function(){
        return {
            mt_date : ['2019-5-23', '2019-5-24', '2019-5-25', '2019-5-26', '2019-5-27'],
            mt_time : ['8:30-9:30', '9:30-10:30', '10:30-11:30', '13:30-14:30', '15:30-16:30', '16:30-17:30'],
            mt_room : ['1308', '1303', '1304', '1305', '1306'],
            start_date : new Date(),
            reserveButton : 'none',
            active : false
        }
    },
    computed : {
        weekDays : function(){
            var i = new Array();
            for( var d = 1;d<=7;d++){
                // console.log(d);
                // console.log(this.start_date + d*24*60*60*1000);
                // console.log(new Date(this.start_date.getTime() + d*24*60*60*1000) );
                i.push( moment(new Date(this.start_date.getTime() + d*24*60*60*1000)).format("YYYY-M-D") );
            }

            return i;
        }
    },
    methods: {
        displayReserve: function(){
            console.log(this);
            this.reserveButton = "block";
            console.log('Reserver starting ... ')
            // this.html('<a href="javascript:void">我要预定</a>')
        },
        closeReserve: function(){
            this.reserveButton = "none";
            console.log('Close reserve ... ')
        },
        prevWeek : function(){
            // console.log(this.weekDays);
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
