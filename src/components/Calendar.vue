<template>
    <div id="calendar">
        <div>
            <router-link to="/cal/month">月视图</router-link>
            <router-link to="/cal/week">周视图</router-link>
            <router-link to="/meeting/add">会议预订</router-link>
        </div>
        <div>
            <table class="table table-striped">
                <tbody>
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
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';

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
