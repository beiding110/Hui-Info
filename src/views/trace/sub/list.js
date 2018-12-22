export default function() {
    return {
        props: [],
        data () {
            return {
                tableData: [],

                extraObj: {}
            }
        },
        computed:{

        },
        methods:{
            reload: function(){
                this.$refs.loader.reload();
            },
            timeFormatter: function(time){
                return / /.test(time) ? time.split(' ')[0] : time;
            },
            inPageHandler: function(){
                this.extraObj = {
                    RowGuid:this.$route.params.guid == 'null' ? '' : this.$route.params.guid,
                    CityCode:this.$route.params.CityCode == 'null' ? '' : this.$route.params.CityCode,
                    DateRange:this.$route.params.DateRange == 'null' ? '' : this.$route.params.DateRange,
                    KeyName:this.$route.params.KeyName == 'null' ? '' : this.$route.params.KeyName
                }
            }
        },
        created: function () {
            this.inPageHandler()
        },
        mounted:function(){

        },
        activated: function(){
            this.inPageHandler();
            this.$nextTick(()=>{
                this.$refs.loader.reload();
            });
        },
        deactivated: function(){
            this.tableData=[];
        }
    }
}
