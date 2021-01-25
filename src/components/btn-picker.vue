<template>
    <div class="btn-picker_con">
        <input class="btn-picker" ref="picker" v-model="label" :placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    props: ['value', 'placeholder', 'data'],
    data () {
        return {
            label: '',
            newData: []
        }
    },
    computed: {
        model: {
            get: function(){
                return !!this.value ? this.value : '';
            },
            set: function(e){
                this.$emit('input', e)
            }
        },
        labelMap: function(){
            var data = this.newData || [];
            var labelMap = {};
            data.forEach(function(item){
                labelMap[escape(item.label)] = item.value;
            });
            return labelMap;
        },
        valueMap: function(){
            var data = this.newData || [];
            var valueMap = {};
            data.forEach(function(item){
                valueMap[item.value] = item.label;
            });
            return valueMap;
        },
        labelObjMap: function(){
            var data = this.newData || [];
            var labelObjMap = {};
            data.forEach(function(item){
                labelObjMap[escape(item.label)] = item;
            });
            return labelObjMap;
        }
    },
    watch: {
        data: {
            handler: function(n, o){
                this.dataPreCal(n);
            },deep: true
        },
        value: {
            handler: function(n, o){
                this.label = this.valueMap[this.value]
            },deep: true
        }
    },
    methods:{
        picker_init: function(){
            var that = this;

            var data = this.newData || [];
            var labelData = data.map(function(item){
                return item.label;
            });
            // var labelMap = {};
            // var valueMap = {};
            // var labelObjMap = {};
            // data.forEach(function(item){
            //     labelMap[escape(item.label)] = item.value;
            //     valueMap[item.value] = item.label;
            //     labelObjMap[escape(item.label)] = item;
            // });

            $(this.$refs.picker).picker({
            	title: !!that.placeholder ? that.placeholder : '选择',
            	cols: [{
            		textAlign: 'center',
            		values: labelData
            	}],
                onChange: function(e){
                    that.label = e.value[0];
                    that.model = that.labelMap[escape(e.value[0])];

                    var res = !!e.value ? that.labelObjMap[escape(e.value[0])] : '';
                    // that.$emit('select', res);
                },
                onClose: function(e){
                    var res = !!e.value ? that.labelObjMap[escape(e.value[0])] : ''
                    that.$emit('select', res);
                }
            });

            if(!!this.value){
                this.label = this.valueMap[this.value];
            }
        },
        dataPreCal: function(val){
            var data = val.slice(0) || [];

            var allStr = this.placeholder ? `全部${this.placeholder}` : '全部';

            if(data.length) {
                if(!/全部/.test(data[0].label)){
                    data.unshift({label: allStr, value: ''});
                } else {
                    data[0].label = allStr;
                };
            };
            
            this.newData = data;

            $(this.$refs.picker).picker("destroy");
            this.picker_init();
        }
    },
    mounted:function(){
        this.dataPreCal(this.data);
        this.picker_init();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn-picker_con{height:44px; position: relative; z-index:10; background:white;}
    .btn-picker_con:before, .btn-picker_con:after{content:' '; display:block; position:absolute; }
    /* .btn-picker_con:before{width:100%; height:1px; background: #e5e5e5; bottom:0; } */
    .btn-picker_con:after{content:' '; border-bottom:1px solid #9B9B9B; border-right:1px solid #9B9B9B; width:0.5em; height:0.5em; right:10%; top:50%; transform: translate(-50%, -50%) rotate(45deg);}
    .btn-picker{border:none; display: block; width:80%; height:100%; color:#9B9B9B; margin: 0 auto;}
</style>
