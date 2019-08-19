export default {
    data () {
        return {
            extra:{},

            addToday: {},
            form: {},
        }
    },
    computed:{

    },
    methods:{
        reload() {
            this.$refs.listbidding.reload();
        },
        queryAddToday() {
            this.$get('/Api/DingYue/GetTodayNum', {
                id: this.extra.RowGuid
            }, (data) => {
                this.addToday = data
            })
        },
        queryInfo() {
            this.$get('/Api/DingYue/GetDetail', {
                id: this.extra.RowGuid
            }, (data) => {
                this.form = data;
            })
        },
        toSetting() {
            this.goto({
                path: '/trace/form',
                query: {
                    type: this.extra.RowGuid
                }
            })
        }
    },
    mounted:function(){
        this.inPageHandler();

        this.queryAddToday();
        this.form = this.$store.state.traceItem;

        this.$nextTick(()=>{
            this.reload();
        });
    },
    activated: function(){

    },
    deactivated: function(){
    }
}
