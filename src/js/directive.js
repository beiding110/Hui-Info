export default {
    install: function(Vue) {

        Vue.directive('ncmenu', {
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                el.addEventListener('contextmenu', function(e){
                    e.preventDefault();
                });
            }
        })
    }
}
