//import Vue from '/bower_components/vue/dist/vue';
Vue.config.debug = true;
Vue.config.devtools = true;

var app=new Vue({
        el:"#app",
        data:{
            col:1,
            text:"text",
            isDelete:false
        },
        methods:{
            click_button:function (dat) {
                this.isDelete=true;
                var self=this;
                setTimeout(function () {
                    self.isDelete=false;
                    self.col=dat;
                },1000);
            },
        }
    });