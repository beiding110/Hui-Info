<template>
    <div>
        <trace-card
        :data="form"
        :readonly="false"
        v-model="form.KeyName"
        :save="doSave"></trace-card>

        <div class="trace-settings--info">
            <span class="iconfont">&#xe600;</span>
            时间段：{{dateRangeMap[form.DateRange]}}
            所属区域：{{form.CityName || '全部'}}
        </div>

        <div class="info--card">
            <btn type="primary" @click="doSave">保存</btn>
        </div>
    </div>
</template>

<script>
import traceCard from '../components/trace-card'

export default {
    components: {traceCard},
    data () {
        return {
            form: {
                RowGuid: '',
                Title: '',
                TypeCode: '',
                TypeName: '',
                CityCode: '',
                CityName: '',
                DateRange: 3,
                KeyName: ''
            },

            dateRangeMap: {
                3: '近三天',
                7: '近一周',
                30: '近一月'
            }
        }
    },
    methods:{
        doSave(callback) {
            var that = this;

            if(this.form.KeyName) {
                this.$post('/Api/DingYue/DingYueManager', this.form, (data) => {
                    that.$store.commit('setState',{
                        traceSign: true
                    });
                    this.form.RowGuid = data;

                    if(typeof(callback) === 'function') {
                        callback(data)
                    } else {
                        that.$store.commit('setState',{
                            traceSign: true
                        });

                        this.$router.go(-1);
                    }
                })
            } else {
                if(this.form.RowGuid) {
                    app.showConform('关键字为空，将删除该条追踪', () => {
                        this.$get('/Api/DingYue/DeleteDingYue', {
                            id: this.form.RowGuid
                        }, (data) => {
                            this.$store.commit('setState',{
                                traceSign: true
                            });

                            this.$router.go(-1);
                        })
                    })
                } else {
                    app.showConform('关键字为空，将删除该条追踪', () => {
                        this.$router.go(-1)
                    })
                }
            }
        },
        queryInfo() {
            this.form.RowGuid = this.getQuery('type') === 'new' ? '' : this.getQuery('type');

            if(this.form.RowGuid != 'new'){
                this.$get('/Api/DingYue/GetDetail', {
                    id: this.form.RowGuid
                }, (data) => {
                    this.form = data
                })
            };
        }
    },
    mounted:function(){

    },
    activated() {
        this.queryInfo();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trace-settings--info{width:calc(100% - 20px); text-align:center; background-color:#dfe0e1; margin:10px auto; border-radius:2px;}
.trace-settings--info .iconfont{display:inline-block;}
</style>
