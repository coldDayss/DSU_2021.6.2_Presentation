Vue.component('anchor', { //자식 컴포넌트
    template: '<span v-on:click="go()">{{ text }}</span>',
    props: ['text', 'href', 'openNew'], //부모의 컴포넌트 값 1,2,3이 text로 전송됨
    data: function(){
        return {}
    },
    methods: {
        go: function() {
            if(this.href){
                if(this.openNew== 'true'){
                    window.open(this.href, '');
                }
                else{
                    location.href=this.href;
                }
            }
        }
    }
});

new Vue({
    el: '#app3'
});