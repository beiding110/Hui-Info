import traceFormTitle from '@/views/trace/components/trace-form-title'
import getDictionary from '@/js/GetDictionary'

export default {
    components: { traceFormTitle },
    data () {
        return {
            form: {
                RowGuid: '',
                Title: '',
                TypeCode: '',
                TypeName: '',
                CityCode: '',
                CityName: '',
                DateRange: '',
                KeyName: '',
                CompanyName: ''
            },
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
            var submitObj = app.clone(this.form);
            submitObj.RowGuid = this.type;

            this.$post('/Api/DingYue/DingYueManager', submitObj, function(data){
                that.$store.commit('setState',{
                    traceSign: true
                });

                that.$router.go(-1);
            })
        },
        typeSel: function(e){
            this.form.TypeName = e.label;
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
            };
        }
    },
    mounted:function(){
        var that = this;

        getDictionary.call(this);
    },
    activated: function(){
        this.queryDetail();
    },
    deactivated: function(){
        this.form = {
            RowGuid: '',
            Title: '',
            TypeCode: '',
            TypeName: '',
            CityCode: '',
            CityName: '',
            DateRange: '',
            KeyName: '',
            CompanyName: ''
        };
    }
}
