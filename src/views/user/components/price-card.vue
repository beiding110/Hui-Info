<template>
    <div>
        <template v-for="(item, index) in list">
            <div :key="index" class="card-price" @click="setModel(item.PayID)">
                <div class="card-price_body" :class="model === item.PayID ? 'active' : ''">
                    <div class="card-price_top">
                        <font class="price">{{item.XianJia}}</font>
                        元/{{item.VipName}}
                    </div>
                    <div class="card-price_bottom">
                        原价{{item.YuanJia}}元
                    </div>
                </div>
                <div class="info-corner">
                    特惠
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            list: []
        }
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(n, o) {
                this.$emit('input', n);
            }
        }
    },
    methods:{
        queryData() {
            this.$get('/Api/Payment/GetPaySetting', (data) => {
                this.list = data;
            });
        },
        setModel(id) {
            this.model = id;
        }
    },
    mounted:function(){
        this.queryData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-price{text-align:center; font-size:12px; width:50%; display:inline-block; overflow:hidden; position:relative;}
.card-price_body{border:1px solid #C6C6C6; border-radius:4px; padding:12px 0; margin:5px;}
.card-price_body.active{box-shadow:0 0 5px #eee; border-color:#BC87D7; color:#BC87D7; position:relative; overflow:hidden;}
.card-price_body.active::before{content:' '; position:absolute; right:0; bottom:0; transform:translate(50%, 50%) rotate(45deg); background:#BC87D7; width:3em; height:3em;}
.card-price_body.active::after{content:'√'; position:absolute; right:3px; bottom:3px; color:white; line-height:1em;}
.card-price_top{position:relative;}
.card-price_top::after{content:' '; display:block; width:50%; height:0; border-bottom:1px dashed #C8C8C8; bottom:0; margin:0 auto;}
.price{font-size:24px; color:#bc87d7;}
.info-corner{color:white; background:#BC87D7; position:absolute; right:22px; top:6px; line-height:14px; width:6em; transform:translate(50%) rotate(30deg);}
</style>
