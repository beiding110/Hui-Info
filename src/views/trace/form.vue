<template>
    <div>
        <trace-form-title>
            定制信息
        </trace-form-title>

        <div class="weui-cells weui-cells_form">
            <form-item v-model="form.Title" placeholder="请输入追踪标题" label="追踪标题" required></form-item>
            <form-item label="关键字" v-model="form.KeyName" placeholder="请输入关键字，英文逗号分隔" required></form-item>
            <!-- <form-item label="招标类型" arrow>
                <input-picker placeholder="请选择招标类型" v-model="form.TypeCode" :data="TypeData" @select="typeSel"></input-picker>
            </form-item> -->
            <form-item label="时间段" arrow required>
                <input-picker placeholder="请选择时间段" v-model="form.DateRange" :data="DateRangeData"></input-picker>
            </form-item>
            <form-item label="所属区域" arrow required>
                <input-picker placeholder="请选择所属区域" v-model="form.CityCode" :data="CityData" @select="citySel"></input-picker>
            </form-item>
        </div>

        <div class="weui-btn-area">
            <btn type="primary" @click="submit">确定</btn>
        </div>
    </div>
</template>

<script>
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
                KeyName: []
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
                    data.KeyName = data.KeyName.split(',')
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
            KeyName: []
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-cells_form{margin-top:0;}
    .weui-cells_form+.weui-cells_form{margin-top:1.17647059em}
</style>
