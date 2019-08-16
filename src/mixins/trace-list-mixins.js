export default {
    data () {
        return {
            tableData:[]
        }
    },
    watch: {

    },
    methods:{
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
