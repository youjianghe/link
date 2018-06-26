<template>
    <div class="leftside">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
            <div class="open" v-bind:class="{active:showMenu}" v-on:click="openMmenu"><i></i><i></i><i></i></div>
        </div>
        <div class="nav" v-bind:class="{active:showMenu}" ref="nav">
            <div v-for="(item , index) in data" v-bind:key="item.id" class="nav-item" v-bind:class="{active:index==ac}" v-on:click="changeActive(index)">
                <a v-bind:href="'#page'+index">{{item.classify}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import linkdata from '../assets/data/data.js'
export default {
    name:'leftside',
    data(){
        return{
            showMenu:false,
            data:linkdata.data,
            ac:0
        }
    },
    methods:{
        openMmenu(){
            this.showMenu = !this.showMenu
        },
        changeActive:function(index){
            this.ac = index
        }
    },
    mounted:function(){
        this.$nextTick(function(){
        let pageNumber = window.location.href.match(/page\d+/i)
        if(pageNumber){
            this.ac = pageNumber[0].replace('page','')
        }
        })
    }
}
</script>
<style scoped>
.leftside{position: fixed;left: 0;bottom: 0;top: 0;width: 180px;height: 100%;background-color: #222222;}
.leftside .logo{height: 60px;margin:30px auto;}
.leftside .logo img{display: block; width: 60px;height: 60px;margin: 0 auto;}
.leftside .logo .open{display: none;}
.nav-item{color: #ffffff;font-size: 16px;text-align: center;cursor: pointer;line-height: 46px;transition:background-color .1s ease-in;}
.nav-item a{color: #ffffff;font-size: 16px;text-decoration: none;}
.nav-item.active{background-color:rgba(255, 255, 255,0.2);}
.nav-item:active{background-color: #ffffff;color: #222222;}
@media screen and (max-width: 768px) {
    .leftside{position: relative;width: 100%;margin-bottom: 10px;box-shadow: 0 0 10px #eeeeee;}
    .leftside .logo{width: 100%;border: 1px solid #eeeeee; background-color: #ffffff;margin: 0;height: 44px;line-height: 44px;text-align: center;padding-top: 6px;box-sizing: border-box;}
    .leftside .logo img{display: inline-block;height: 32px;width: auto;}
    .leftside .logo .open{display: block; position: absolute;height: 18px;width: 26px;right: 10px;top: 13px;}
    .leftside .logo .open i{display: block;height: 2px;background-color: #222222;margin-bottom: 6px;transform-origin: right center;transition: 0.1s linear;}
    .leftside .logo .open i:nth-child(3){margin-bottom: 0;}
    .leftside .logo .open.active{height: 26px;}
    .leftside .logo .open.active i:nth-child(1){transform: rotate(-45deg);}
    .leftside .logo .open.active i:nth-child(3){transform: rotate(45deg);margin-top: 8px;margin-right: 1px;}
    .leftside .logo .open.active i:nth-child(2){background-color: #ffffff;}
    .nav{display: none;transform: scaleY(.5)}
    .nav.active{display: block;transition: 0.1s linear;transform: scaleY(1)}
    .nav .nav-item{ background-color: #ffffff;color: #222222;height: 36px;line-height: 36px;}
    .nav .nav-item.active{background-color:#f0f0f0;color: #222222;}
}
</style>


