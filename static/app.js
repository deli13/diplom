Vue.config.debug = true;
Vue.config.devtools = true;

var app=new Vue({
        el:"#app",
        data:{
            col:1,
        },
        methods:{
            click_button:function (dat) {
                this.col=dat;
            },
        }
    });