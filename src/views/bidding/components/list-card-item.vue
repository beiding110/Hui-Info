<template>
    <w-card
    class="info--card"
    :data-guid="item.RowGuid">
        <div class="info--card__header" slot="header">
            <span>{{item.Title}}</span>
        </div>
        <!-- <div class="info--card__body">
            <div class="info--body__left">
                <div>
                    <span>业主：{{item.yezhu}}</span>
                </div>
                <div>
                    <span>代理机构：{{item.zbdlname}}</span>
                </div>
                <div v-if="item.zbdwname">
                    <span>中标单位：{{item.zbdwname}}</span>
                </div>
            </div>
        </div> -->
        <div slot="footer" class="info--card__footer">
            <div class="info--footer__tags">
                <w-tag class="info-card footer-tags" type="info">{{item.cityname}}</w-tag>
                <w-tag class="info-card footer-tags" type="danger">{{item.TypeName}}</w-tag>
                <w-tag class="info-card footer-tags" type="warn">{{hyCalc(item.hyname)}}</w-tag>
            </div>
            <div class="info--footer__time">
                {{timeBeforeCalc(item.AddTime)}}
            </div>
        </div>
    </w-card>
</template>

<script>
export default {
    props: {
        item: Object,
        default: () => ({})
    },
    data () {
        return {

        }
    },
    methods:{
        hyCalc(str) {
            if(/\//.test(str)) {
                return str.split('/')[0];
            } else {
                return str;
            }
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-info-con_left{width:100%; float:left; margin-right:-80px;}
.item-info-con_left>div{margin-right:80px;}
.item-info-con_right{width:80px; float:right; text-align:right; color:#909399}

.info-card{margin-right:.7em;}
.footer-tags{float:left; margin-bottom:.2em;}
</style>
