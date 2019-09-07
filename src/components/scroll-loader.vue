<template>
    <div ref="scroll-con" class="scroll-con" @scroll="storageScroll">
        <div ref="scroll-scroller" class="scroll-scroller">
            <div class="weui-pull-to-refresh__layer" v-if="action">
                <div class='weui-pull-to-refresh__arrow'></div>
                <div class='weui-pull-to-refresh__preloader'></div>
                <div class="down">下拉刷新</div>
                <div class="up">释放刷新</div>
                <div class="refresh">正在刷新</div>
            </div>

            <div class="weui-loadmore" style="margin:0.5em auto;" v-if="firstPgLoading">
                <i class="weui-loading"></i>
                <span class="weui-loadmore__tips">正在加载</span>
            </div>

            <div>
                <div class="demos-content-padded">
                    <slot></slot>
                </div>
            </div>

            <div class="weui-loadmore" style="height:20px" v-if="action && pgLoading">
                <i class="weui-loading" v-if="loadController"></i>
                <span class="weui-loadmore__tips">{{loadText}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        action: {
            type: String,
            default: ''
        },
        value: {
            type: Array,
            default() {
                return []
            }
        },
        extra: {
            type: Object,
            default() {
                return {}
            }
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            PageIndex: 1,
            loading: false,
            loadController: true,
        }
    },
    watch: {
        // extra: {
        //     handler: function(n, o){
        //         if(!!n) this.reload()
        //     },deep: true
        // },
        action: {
            handler: function(n, o){
                if(!!n) this.reload();
            },deep: true
        }
    },
    computed: {
        model: {
            get: function(){
                return this.value;
            },
            set: function(e){
                this.$emit('input', e)
            }
        },
        loadText: function(){
            return !!this.loadController ? '正在加载' : '无更多数据'
        },
        queryObj: function(){
            var that = this;
            var queryObj = {};
            if(!!this.extra){
                Object.keys(this.extra).forEach(function(item){
                    queryObj[item] = that.extra[item];
                });
            }
            queryObj.PageIndex = this.PageIndex;
            return queryObj;
        },
        firstPgLoading: function() {
            return (this.PageIndex === 1 && this.loading)
        },
        pgLoading: function() {
            return (this.PageIndex !== 1 && this.loading)
        }
    },
    methods:{
        queryData: function(type, callback){
            var that = this;
            if(this.action){
                if(that.loadController){
                    this.loading = true;
                    // $.ajaxSettings.async=false;
                    this.$get(this.action, this.queryObj, function (data) {
                        if(data.length<10){
                            that.loadController = false;
                        };
                        that.PageIndex ++;
                        that.loading = false;

                        if(!type){
                            that.model = data;
                        }else{
                            that.model.push.apply(that.model, data);
                        }
                    });
                    // $.ajaxSettings.async=true;

                    !!callback && callback()
                }
            }
        },
        reload: function(){
            this.$nextTick(() => {
                $(this.$refs['scroll-con']).pullToRefresh('triggerPullToRefresh');
            })
        },
        storageScroll(e) {
            var obj = {};
            obj['$scrollCache:' + this.$route.fullPath] = e.target.scrollTop;
            this.setSession(obj);
        },
        setScroll() {
            var cache = this.getSession('$scrollCache:' + this.$route.fullPath);
            this.$refs['scroll-con'].scrollTop = cache || 0;
        },
        clearStorageScroll() {
            var obj = {};
            obj['$scrollCache:' + this.$route.fullPath] = 0;
            this.setSession(obj);
        }
    },
    mounted:function(){
        var that = this;

        // var conId = app.setRandomId.call(this, 'scroll-con');
        // var scrollerId = app.setRandomId.call(this, 'scroll-scroller');

        //初始化下拉刷新
        $(that.$refs['scroll-con']).pullToRefresh().on("pull-to-refresh", function () {
            that.PageIndex = 1;
            that.loadController = true;
            that.clearStorageScroll();
            that.queryData(0, function(){
                $(that.$refs['scroll-con']).pullToRefreshDone();
            })
        });

        //初始化上拉加载
        $(that.$refs['scroll-con']).infinite().on("infinite", function() {
            if(that.loading) return;
            that.queryData(1);
        });

        //初次请求数据
        if(!this.lazy) {
            that.reload();
        }

    },
    activated: function(){
        // this.reload();
        this.setScroll();
    },
    deactivated: function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .scroll-con{overflow: auto; position: absolute; left:0; top:0; right:0; bottom:0;}
</style>
