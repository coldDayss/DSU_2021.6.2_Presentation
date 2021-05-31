Vue.component('num-btn', { //자식 컴포넌트
    template: '<button v-on:click="number++">{{ number }}</button>',
    props: ['number'], //부모의 컴포넌트 값 1,2,3이 number로 전송됨
    data: function(){
        return {}
    }
});

new Vue({
    el: '#app'
});