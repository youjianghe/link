<template>
    <div class="mainContent">
        <div class="box">
            <div class="nav-list" v-for="(item, index) in data" v-bind:key="item.id" v-bind:id="'page'+index">
                <h5 class="classify">{{item.classify}}</h5>
                <ul>
                    <li v-for="list in item.linkdata" v-bind:key="list.id"><a v-bind:href="list.link" target="_blank">
                        <div class="top"><img v-bind:src="list.icon" alt=""><em>{{list.name}}</em></div>
                        <div class="desc">{{list.desc}}</div>
                    </a></li>
                </ul>
            </div>
            <!-- -->
            <copy></copy>
        </div>
    </div>
</template>

<script>
import linkdata from '../assets/data/data.js'
import copy from '@/components/copyRight'
export default {
    name:'mainContent',
    components:{
        copy
    },
    data(){
        return {
            data:linkdata.data
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            
        })
    }
}
</script>
<style scoped>
    a{text-decoration: none;color: #222222;}
    .mainContent{padding: 15px;}
    .nav-list{box-shadow: 0 0 15px #eeeeee;border: 1px solid #eeeeee;border-radius: 4px;margin-bottom: 15px;}
    .nav-list h5{font-size: 18px;line-height: 46px;color: #222222;margin: 0;border-bottom: 1px solid #eeeeee;padding-left: 30px;}
    .nav-list ul{display: block; padding: 0;margin: 0;list-style: none;padding: 10px;}
    .nav-list ul li{display: inline-block;width: 200px;margin: 10px; border: 1px solid #eeeeee;border-radius: 4px;padding: 10px;}
    .nav-list ul li:hover{box-shadow: 0 0 15px #eeeeee;}
    .nav-list ul li .top{position: relative; height: 26px;border-bottom: 1px solid #eeeeee;padding-bottom: 10px;padding-right: 15px;}
    .nav-list ul li .top img{position: absolute;left: 0px;top: 5px; width: 16px; height: 16px;border-radius: 50%;}
    .nav-list ul li .top em{box-sizing: border-box; display: block;padding-left: 16px; width: 100%;margin-left: 10px; font-style:normal;font-size: 18px;line-height: 26px; color: #222222;overflow:hidden; text-overflow: ellipsis;white-space: nowrap;}
    .desc{margin-top: 5px;font-size: 14px;line-height: 16px;height: 32px;overflow: hidden;}
    @media screen and (max-width: 768px) {
        .mainContent{padding: 5px;}
        .nav-list {border: none;}
        .nav-list h5{padding-left: 10px;height: 32px;line-height: 32px;border: none;}
        .nav-list:after{content: "";display: block;zoom: 1;clear: both;}
        .nav-list ul{padding: 0;margin-top: 10px;}
        .nav-list ul li{width: 46%;float: left;margin: 0;margin-left: 2%; display:block;padding: 0;box-sizing: border-box;padding: 10px;margin-bottom: 15px;}
        .nav-list ul li:nth-child(2n){margin-left: 4%;}

    }
</style>
