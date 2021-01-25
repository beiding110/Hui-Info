<template>
    <w-card>
        <div class="trace-card">
            <div class="trace-card--left" @click="toKeyWord">
                <input
                    v-model="model"
                    :disabled="readonly"
                    placeholder="点击设置追踪关键字，如：建筑、软件"></input>
                <span class="iconfont" @click.stop="toSetting" v-if="model">&#xe600;</span>
            </div>
            <div class="trace-card--right" v-if="readonly">
                <span 
                v-if="activeNum"
                class="weui-badge badge-tip"
                >
                    {{activeNum}}
                </span>

                <img
                    class="trace-card--detail__btn"
                    :src="planeIcon"
                    @click="toDetail"/>
            </div>
        </div>
    </w-card>
</template>

<script>
import plane from '@/assets/icon/icon-plane.png'
import planeDis from '@/assets/icon/icon-plane-disabled.png'

export default {
    props: {
        readonly: {
            type: Boolean,
            default: true
        },
        value: {
            type: String,
            default: ''
        },
        data: {
            type: Object,
            default() {
                return {
                    RowGuid: '',
                    CityCode: '',
                    DateRange: '',
                    KeyName: ''
                }
            }
        },
        save: {
            type: Function,
            default: undefined
        }
    },
    data () {
        return {

        }
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(e) {
                this.$emit('input', e)
            }
        },
        planeIcon() {
            return this.model ? plane : planeDis;
        },
        activeNum() {
            return (Number(this.data.Bidding) + Number(this.data.Project));
        }
    },
    methods:{
        vipTest(cb) {
            if(this.$store.state.IsVip || this.$store.state.IsTry) {
                cb()
            } else {
                this.$router.push('/msg/error/抱歉/您是非会员，无权限查看此内容');
            }
        },
        toSetting(e) {
            function navHandler(RowGuid) {
                this.vipTest(() => {
                    var search = {
                        type: RowGuid ? RowGuid : (this.data.RowGuid || 'new')
                    };

                    this.$router.push({
                        path: '/trace/form-settings',
                        query: search
                    })
                })
            }

            if (this.save){
                this.save(navHandler.bind(this));
            } else {
                navHandler.call(this)
            }
        },
        toKeyWord() {
            // console.log('keyword')
            this.vipTest(() => {
                if(this.readonly) {
                    this.$router.push({
                        path: '/trace/form-keyword',
                        query: {
                            type: this.data.RowGuid || 'new'
                        }
                    })
                }
            })
        },
        toDetail(e) {
            if(!this.model) return;

            this.$store.commit('setState', {traceItem: this.data});
            this.$nextTick(() => {
                this.$router.push('/trace/detail/' + this.data.RowGuid + '/' + this.data.CityCode + '/' + this.data.DateRange + '/' + this.data.KeyName);
            })
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trace-card{display:flex; align-items:center;}

.trace-card--left{flex:1; position:relative; border:solid 1px #dfe0e1; border-radius:2px;}
.trace-card--left .iconfont{position:absolute; font-size:20px; right:.5em; top:50%; transform:translate(-50%,-50%); z-index:10; color:#999999;}
.trace-card--left input{display:block; height:30px; width:calc(100% - 2em); margin:0 auto; background:white; border:none;}
.trace-card--left input:focus{outline:none;}

.trace-card--right{width:44px; text-align:right; position:relative;}
.trace-card--detail__btn{width:30px; height:30px; display:inline-block; margin:-10px 0;}

.badge-tip{position:absolute; right:-.4em; top:-.4em;}
</style>
