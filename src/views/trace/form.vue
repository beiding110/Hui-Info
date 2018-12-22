<template>
    <div>
        <div class="weui-cells weui-cells_form">
            <form-item v-model="form.Title" placeholder="请输入追踪标题" label="追踪标题"></form-item>
            <!-- <form-item label="招标类型" arrow>
                <input-picker placeholder="请选择招标类型" v-model="form.TypeCode" :data="TypeData" @select="typeSel"></input-picker>
            </form-item> -->
            <form-item label="时间段" arrow>
                <input-picker placeholder="请选择时间段" v-model="form.DateRange" :data="DateData"></input-picker>
            </form-item>
            <form-item label="所属区域" arrow>
                <input-picker placeholder="请选择所属区域" v-model="form.CityCode" :data="CityData" @select="citySel"></input-picker>
            </form-item>
        </div>

        <div class="weui-cells weui-cells_form">
            <form-item label="关键字">
                <template v-for="(item,index) in form.KeyName">
                    <btn size="mini" @click="editKeyWord(item,index)">{{item}}</btn>
                </template>
                <btn size="mini" type="success" icon="&#xe703;" @click="addKeyWord">添加</btn>
            </form-item>
        </div>

        <div class="weui-btn-area">
            <btn type="primary" @click="submit">确定</btn>
        </div>
    </div>
</template>

<script>
export default {
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
            DateData: []
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
            submitObj.RowGuid = this.$route.params.type=='new' ? '' : this.$route.params.type;
            submitObj.KeyName = submitObj.KeyName.join(',');
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
        }
    },
    mounted:function(){
        var that = this;

        this.$get('/Api/Common/GetDictionary', {
            type: 'City'
        }, function(data){
            that.CityData = data;
        });

        // this.$get('/Api/Common/GetDictionary', {
        //     type: 'GgLx'
        // }, function(data){
        //     that.TypeData = data;
        // });

        this.DateData = [
            {
                label: '近三天',
                value: '3'
            },{
                label: '近一周',
                value: '7'
            },{
                label: '近一月',
                value: '30'
            }
        ];

        var that = this;
        if(this.$route.params.type != 'new'){
            this.$get('/Api/DingYue/GetDetail', {
                id: that.$route.params.type
            }, function(data){
                data.KeyName = data.KeyName.split(',')
                that.form = data;
            })
        };
    },
    activated: function(){

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
