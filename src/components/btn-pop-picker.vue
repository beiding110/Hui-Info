<template>
    <div class="btn-picker_con btn-pop-picker">
        <div class="btn-picker btn-pop-picker"
        @click="show"
        :class="{'picker-active': isActive}">
            <span class="btn-text">{{activeItem.label || placeholder}}</span>
            <i class="iconfont">&#xe64a;</i>
        </div>

        <div ref="popup" class="weui-popup__container w-pupup">
            <div class="weui-popup__overlay"></div>
            <div class="weui-popup__modal" :style="{top: top}">
                <div class="pop-picker_list">
                    <template v-for="item in data">
                        <div class="pop-picker_item"
                        :class="{'is-active': model === item.value, 'is-block': !item.value}"
                        @click="itemSel(item)">
                            <span>
                                {{item.label}}
                            </span>
                        </div>
                    </template>
                </div>
                <div class="pop-picker_btn-con">
                    <btn class="pop-picker_btn" @click="cancleHandler">重置</btn>
                    <btn class="pop-picker_btn" type="primary" @click="confirmHandler">筛选</btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        top: {
            type: [String, Number],
            default: 0
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            activeItem: {},

            isActive: false
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
    },
    methods:{
        show() {
            $(this.$refs.popup).popup();
        },
        confirmHandler() {
            this.$emit('submit');
            $.closePopup();
        },
        cancleHandler() {
            this.$emit('cancle');
            $.closePopup();
        },
        reset() {
            this.model = '';
            this.activeItem = this.data[0];
        },
        itemSel(item) {
            this.activeItem = item;
            this.model = item.value;
            this.$emit('select', item);
        },
        displayWatcher() {
            var switchObj = {
                block: () => {
                    this.isActive = true;
                },
                none: () => {
                    this.isActive = false;
                }
            }

            new MutationObserver(mutation => {
                if(mutation.some(change => change.attributeName === 'style')) {
                    switchObj[this.$refs.popup.style.display]();
                }
            }).observe(this.$refs.popup, {
                attributes: true
            });
        }
    },
    mounted:function(){
        this.displayWatcher();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-picker_con{height:44px; position: relative; z-index:10; background:white;}
.btn-picker_con:before,{content:' '; display:block; position:absolute; }
/* .btn-picker_con:before{width:100%; height:1px; background: #e5e5e5; bottom:0; } */

.btn-picker{border:none; display: block; height:100%; color:#9B9B9B; margin:0 auto; line-height:44px; text-align:center; font-size:0;}
.btn-text{text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:calc(100% - 16px); display:inline-block; font-size:14px; vertical-align:top;}
.btn-picker .iconfont{vertical-align:middle; font-size:12px; translate:.3s;}

.btn-pop-picker .weui-popup__overlay{background-color:rgba(0,0,0,0);}
.btn-pop-picker .weui-popup__modal{background:white; height:auto;}

.btn-pop-picker .pop-picker_list{padding:.5em; box-sizing:border-box; overflow:hidden; position:absolute; left:0; top:0; right:0; bottom:46px; overflow:auto;}
.pop-picker_item{margin:.5em; float:left; box-sizing:border-box;}
.pop-picker_item span{padding: .3em .5em; background-color:#f4f4f8; border-radius:2px; color:#666666;}
.pop-picker_item.is-block{float:none; position:relative; padding:1em 0;}
.pop-picker_item.is-block::after{content:''; display:block; width:100%; height:1px; position:absolute; left:0; bottom:0; background-color:#dddddd;}
.pop-picker_item.is-active span{background-color:#e8f8f3; color:#67bea5;}

.pop-picker_btn-con{overflow:hidden; display:flex; position:absolute; bottom:0; left:0; right:0;}
.pop-picker_btn-con .pop-picker_btn{margin:0 !important;}

.picker-active{color:#409EFF;}
.picker-active .iconfont{transform:rotate(180deg); display:inline-block;}
</style>
