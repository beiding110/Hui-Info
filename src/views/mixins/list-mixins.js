export default {
    props: {
        extra: {
            type: [String, Object]
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            tableData: [],

            extraObj: {}
        }
    },
    computed:{

    },
    watch: {
        extra: {
            handler: function(n){
                this.setExtraObj(n);
            }, deep:true
        }
    },
    methods:{
        reload: function(){
            this.$refs.loader.reload();
        },
        timeFormatter: function(time){
            return / /.test(time) ? time.split(' ')[0] : time;
        },
        itemHold(dom, e) {
            e.stopPropagation();
            e.preventDefault();

            let guid = dom.dataset.guid;

            // $.actions({
            //     actions: [{
            //         text: "收藏/取消收藏该项",
            //         onClick: () => {
            //             this.$get('/Api/Collection/SetCollectState', {
            //                 id: guid
            //             }, (data, res) => {
            //                 this.$store.commit('setState',{
            //                     collectSign: true
            //                 });
            //
            //                 app.ShowMsg(res.Msg);
            //             })
            //         }
            //     }]
            // });
            return false;
        },
        setExtraObj(n) {
            if(typeof(n)=='string'){
                this.extraObj = {openid: n}
            }else{
                this.extraObj = n
            }
        }
    },
    created: function () {
        this.setExtraObj(this.extra);
    },
    mounted:function(){

    },
    activated: function(){

    }
}
