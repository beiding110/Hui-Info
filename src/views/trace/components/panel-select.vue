<template>
    <div class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div class="weui-media-box__title">{{text}}</div>
            <div :class="'weui-media-box__desc' + label ? 'label' : ' placeholder'">
                <input v-model="label" :placeholder="placeholder" ref="picker"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        },
        props: {
            type: Object,
            default() {
                return {
                    label: 'label',
                    value: 'value'
                }
            }
        },
        data: {
            type: Array,
            default() {
                return []
            }
        },
        text: {
            type: String,
            default: '请选择'
        },
    },
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
            var data = val.slice(0);
            this.newData = data;

            $(this.$refs.picker).picker("destroy");
            this.picker_init();
        }
    },
    mounted:function(){
        this.dataPreCal(this.data);
        // this.picker_init();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.placeholder{color:#C8C8C8;}
.label{color:#707070;}
input{display:block; border:none; width:100%;}
input:focus{outline: none;}
</style>
