export default {
    data () {
        return {
            tableData:[]
        }
    },
    watch: {

    },
    methods:{
        vipTest(cb) {
            if(this.$store.state.IsVip || this.$store.state.IsTry) {
                cb()
            } else {
                this.$router.push('/msg/error/抱歉/您是非会员，无权限查看此内容');
            }
        },
        deleteHandler(row) {
            app.showConform('删除该条数据？', () => {
                this.$get('/Api/DingYue/DeleteDingYue', {
                    id: row.RowGuid
                }, (data) => {
                    this.$refs.loader.reload();
                });
            });
        }
    },
    mounted:function(){

    },
    activated: function(){
        var that = this;
        if(this.$store.state.traceSign){
            this.$refs.loader.reload();
            that.$store.commit('setState',{
                traceSign: false
            });
        }
    },
    deactivated: function(){

    }
}
