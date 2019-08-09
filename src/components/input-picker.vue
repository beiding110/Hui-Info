<template>
    <input class="weui-input" ref="picker" v-model="label" type="text" :placeholder="placeholder">
</template>

<script>
export default {
    props: ['value', 'placeholder', 'data'],
    data () {
        return {
            label: ''
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
            var data = this.data || [];
            var labelMap = {};
            data.forEach(function(item){
                labelMap[escape(item.label)] = item.value;
            });
            return labelMap;
        },
        valueMap: function(){
            var data = this.data || [];
            var valueMap = {};
            data.forEach(function(item){
                valueMap[item.value] = item.label;
            });
            return valueMap;
        },
        labelObjMap: function(){
            var data = this.data || [];
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
                this.picker_init();
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

            var data = this.data || [];
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

                    var res = !!e.value ? that.labelObjMap[escape(e.value[0])] : ''
                    that.$emit('select', res);
                },
                onClose: function(e){
                    var res = !!e.value ? that.labelObjMap[escape(e.value[0])] : ''
                    that.$emit('select', res);
                }
            });

            if(!!this.value){
                this.label = this.valueMap[this.value];
            }
        }
    },
    mounted:function(){
        this.picker_init();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
