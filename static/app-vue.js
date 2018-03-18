//import Vue from '/bower_components/vue/dist/vue';
Vue.config.debug = true;
Vue.config.devtools = true;

var app=new Vue({
        el:"#app",
        data:{
            col:1,
            text:"text"
        },
        methods:{
            click_button:function (dat) {
                this.col=dat;
            },
        }
    });