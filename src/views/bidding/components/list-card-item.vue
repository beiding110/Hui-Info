<template>
    <w-card
    class="info--card"
    :data-guid="item.RowGuid">
        <div class="info--card__header" slot="header" :class="{'is-read': !!item.IsRead}">
            <span class="list-item-index" v-if="index">{{index}}.</span>
            <span class="list-item-title" v-html="titleBoldHandler(item.Title)"></span>
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
            <span class="footer-tags">
                <i class="iconfont">&#xe63b;</i>
                {{timeBeforeCalc(item.AddTime)}}
            </span>
            <slot name="hyname">
                <w-tag class="info-card footer-tags" type="warn">{{hyCalc(item.hyname)}}</w-tag>
            </slot>
            <slot name="typename">
                <w-tag class="info-card footer-tags" type="danger">{{item.TypeName}}</w-tag>
            </slot>
            <slot name="cityname">
                <w-tag class="info-card footer-tags" type="info">{{cityCalc(item.cityname)}}</w-tag>
            </slot>
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
        index: {
            type: Number,
            default: 0
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
        cityCalc(str) {
            if(/\-/.test(str)) {
                return str.split('-')[0];
            } else {
                return str;
            }
        },
        titleBoldHandler(str) {
            return this.fontReplacer(this.bold, str);
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

.info-card{margin-right:.5em;}
.footer-tags{float:right; font-size:12px; line-height:1.5em;}

.info--card{margin:0; padding:1em; position:relative;}
.info--card::before{content:''; display:block; width:90%; height:1px; background:#f4f4f4; position:absolute; left:50%; transform:translate(-50%, -50%);}
.info--card::before{top:0;}
/* .info--card::after{bottom:0;} */

.info--card__header{display:flex; justify-content:space-between;}
.info--card__footer{text-align:right;}
.list-item-index{padding:0 .2em 0 0;}
.list-item-title{flex:1;}
</style>
