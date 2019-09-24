import traceFormTitle from '@/views/trace/components/trace-form-title'
import getDictionary from '@/js/GetDictionary'

var eptForm = {
    RowGuid: '',
//追踪标题
    Title: '',
//信息类型
    TypeCode: '',
    TypeName: '',
//区域
    CityCode: '',
    CityName: '',
//时间段
    DateRange: '',
//企业类型
    QyType: '',
//关键字
    KeyName: '',
//企业名称
    CompanyName: '',
//是否启用
    Shbj: '1'
};

export default function(replaceUrl) {
    return {
        components: { traceFormTitle },
        data () {
            return {
                form: eptForm,

                CityData: [],
                TypeData: [],
                DateRangeData: []
            }
        },
        computed: {
            type() {
                var type = this.getQuery('type');
                return type === 'new' ? '' : type;
            }
        },
        methods:{
            addKeyWord: function(){
                var that = this;
                $.prompt({
                	title: '添加关键字',
                	input: '',
                	empty: false,
                	// 是否允许为空
                	onOK: function(input) {
                		that.form.KeyName.push(input);
                	},
                	onCancel: function() {
                		//点击取消
                	}
                });
            },
            editKeyWord: function(item, index) {
                var that = this;
                $.prompt({
                    title: '修改关键字',
                    input: item,
                    empty: false,
                    onOK: function(input) {
                        that.form.KeyName.splice(index, 1, input);
                    },
                    obCancle: function() {}
                })
            },
            submit: function(){
                var that = this;

                this.vipTest(() => {
                    var submitObj = app.clone(this.form);
                    submitObj.RowGuid = this.type;

                    this.$post('/Api/DingYue/DingYueManager', submitObj, function(data){
                        that.$store.commit('setState',{
                            traceSign: true
                        });

                        if(that.getQuery('fromSearch')) {
                            that.$router.replace(replaceUrl)
                        } else {
                            that.$router.go(-1);
                        };
                    })
                });
            },
            citySel: function(e){
                this.form.CityName = e.label;
            },
            queryDetail() {
                if(this.type){
                    this.$get('/Api/DingYue/GetDetail', {
                        id: this.type
                    }, (data) => {
                        // data.KeyName = data.KeyName.split(',')
                        this.form = data;
                    })
                } else {
                    var query = this.getQuery();
                    app.mixin(query, this.form);
                };
            }
        },
        mounted:function(){
            var that = this;

            getDictionary.call(this);

            this.queryDetail();
        },
        activated: function(){

        },
        deactivated: function(){
            this.form = eptForm;
        }
    }
}
