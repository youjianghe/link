<template>
    <div class="mainContent">
        <div class="box">
            <template v-for="(item,index) in data" >
                <div class="nav-list" v-if="item.type==1" v-bind:key="item.id" v-bind:id="'page'+index" v-bind:type="item.type">
                    <h5 class="classify">{{item.classify}}</h5>
                    <ul>
                        <li v-for="list in item.linkdata" v-bind:key="list.id">
                            <a v-bind:href="list.link" target="_blank">
                                <div class="top"><img v-bind:src="list.icon" alt=""><em>{{list.name}}</em></div>
                                <div class="desc">{{list.desc}}</div>
                            </a>
                            <div class="sub" v-if="list.type">
                                <template v-for="(typelink,typename) in list.type">
                                    <a v-bind:href="typelink" v-text="typename" target="_blank" v-bind:key="typename.id"></a>
                                </template>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-list" v-if="item.type == 0" v-bind:key="item.id" v-bind:id="'page'+index" v-bind:type = "item.type">
                    <h5 class="classify">{{item.classify}}</h5>
                    <div class="lista">
                    <template v-for="list in item.linkdata">
                <a v-bind:key="list.id" v-bind:href="list.link" v-text="list.name" target="_blank" v-bind:style="{background:'url('+list.icon+') no-repeat center left 10px',backgroundSize:'14px 14px'}"></a>
                    </template>
                     </div>
                </div>
            </template>
      
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
    .nav-list ul li{position: relative; display: inline-block;width: 200px;margin: 10px; border: 1px solid #eeeeee;border-radius: 4px;padding: 10px;}
    .nav-list ul li:hover{box-shadow: 0 0 15px #eeeeee;}
    .nav-list ul li .top{position: relative; height: 26px;border-bottom: 1px solid #eeeeee;padding-bottom: 10px;padding-right: 15px;}
    .nav-list ul li .top img{position: absolute;left: 0px;top: 5px; width: 16px; height: 16px;border-radius: 50%;}
    .nav-list ul li .top em{box-sizing: border-box; display: block;padding-left: 16px; width: 100%;margin-left: 10px; font-style:normal;font-size: 18px;line-height: 26px; color: #222222;overflow:hidden; text-overflow: ellipsis;white-space: nowrap;}
    .nav-list ul li .sub{display: none;}
    .nav-list ul li:hover .sub{display: block; position: absolute;bottom: 0px;left: 0;right: 0;background-color: rgba(255,255,255,.6);text-align: center;height: 42px;padding: 7px 0;box-sizing: border-box;}
    .nav-list ul li:hover .sub a{display: inline-block;padding: 0 15px; height: 28px;font-size: 14px;line-height: 28px; background-color:#3A83FB;border-radius: 4px;color: #ffffff;margin-right: 15px;}
    .nav-list ul li:hover .sub a+a{margin-left: 15px;margin-right: 0;}
    .nav-list .lista{padding: 10px;}
    .nav-list .lista a{padding: 10px;display: inline-block;padding-left:25px;background-size:16px 16px;}
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
