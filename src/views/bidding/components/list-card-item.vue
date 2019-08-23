<template>
    <w-card
    class="info--card"
    :data-guid="item.RowGuid">
        <div class="info--card__header" slot="header" :class="{'is-read': !!item.IsRead}">
            <span v-html="titleBoldHandler(item.Title)"></span>
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
                <slot name="cityname">
                    <w-tag class="info-card footer-tags" type="info">{{item.cityname}}</w-tag>
                </slot>
                <slot name="typename">
                    <w-tag class="info-card footer-tags" type="danger">{{item.TypeName}}</w-tag>
                </slot>
                <slot name="hyname">
                    <w-tag class="info-card footer-tags" type="warn">{{hyCalc(item.hyname)}}</w-tag>
                </slot>
            </div>
            <div class="info--footer__time">
                <i class="iconfont">&#xe63b;</i>
                {{timeBeforeCalc(item.AddTime)}}
            </div>
        </div>
    </w-card>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        bold: {
            type: String,
            default: ''
        }
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
        },
        titleBoldHandler(str) {
            if(!this.bold) return str;

            var boldArr = this.bold.split(' ');

            boldArr.forEach((item) => {
                if(item)
                    str = str.replace(new RegExp(item, 'g'), '<font style="font-weight:bold; color:#1f80e6;">' + item + '</font>')
            })

            return str;
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

.info--card{margin:0; padding:1em 2em; position:relative;}
.info--card::before{content:''; display:block; width:90%; height:1px; background:#f4f4f4; position:absolute; left:50%; transform:translate(-50%, -50%);}
.info--card::before{top:0;}
/* .info--card::after{bottom:0;} */
</style>
