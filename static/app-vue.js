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

                var self=this;
                /**
                 * Проверка на включенный режим анимации на CSS
                 */
                var data_animate=document.querySelector("meta[name=animate]");
                if(data_animate!=undefined){
                    this.isDelete=true;
                    setTimeout(function () {
                        self.isDelete=false;
                        self.col=dat;
                    },1000);
                } else {
                    // self.isDelete=false;
                    self.col=dat;
                }
            },
        }
    });