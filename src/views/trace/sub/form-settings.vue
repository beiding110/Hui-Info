<template>
    <div>
        <div class="trace-setting--item">
            <w-card>
                <panel-select
                    text="设置时间段"
                    placeholder="设置后推送该时间段的追踪信息"
                    :data="DateRangeData"
                    v-model="form.DateRange"></panel-select>
            </w-card>
        </div>

        <div class="trace-setting--item">
            <w-card>
                <panel-select
                    text="设置地区"
                    placeholder="设置后推送该地区的追踪信息"
                    :data="CityData"
                    v-model="form.CityCode"
                    @select="citySelected"></panel-select>
            </w-card>
        </div>

        <div class="info--card">
            <btn type="primary" @click="doSave" class="trace-setting--item">保存</btn>
        </div>

    </div>
</template>

<script>
import panelSelect from '../components/panel-select'
import getDictionary from '@/js/GetDictionary'

export default {
    components: {panelSelect},
    data () {
        return {
            form: {
                RowGuid: '',
                Title: '',
                TypeCode: '',
                TypeName: '',
                CityCode: '',
                CityName: '全部',
                DateRange: 3,
                KeyName: ''
            },

            DateRangeData: [],
            CityData: []
        }
    },
    methods:{
        doSave() {
            this.$post('/Api/DingYue/DingYueManager', this.form, (data) => {
                this.$store.commit('setState',{
                    traceSign: true
                });

                this.$router.go(-1)
            });
        },

        queryData() {
            getDictionary.call(this);

            this.form.RowGuid = this.getQuery('type') === 'new' ? '' : this.getQuery('type');

            if(this.form.RowGuid != 'new'){
                this.$get('/Api/DingYue/GetDetail', {
                    id: this.form.RowGuid
                }, (data) => {
                    this.form = data
                })
            };
        },

        citySelected(e) {
            this.form.CityName = e.label;
        }
    },
    mounted:function(){
        this.queryData()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trace-setting--item{width:calc(100% - 20px); margin:0 auto; margin-top:10px;}
.trace-setting--item +  .trace-setting--item{margin-top:10px;}
</style>
