<template>
    <w-card
    class="info--card"
    :data-guid="item.RowGuid">
        <div class="info--card__header" slot="header" :class="{'is-read': !!item.IsRead}">
            <i class="iconfont icon-qiye">&#xe609;</i>
            <font v-html="fontReplacer(item.searchkey, item.DWCNNAME)"></font>
        </div>
        <div slot="footer" class="info--card__footer">
            <w-tag class="info-card footer-tags" type="info">{{item.DWTYPETEXT}}</w-tag>
            <w-tag class="info-card footer-tags" type="danger">{{item.XZQYNAME}}-{{item.DWAREANAME}}</w-tag>
            <w-tag class="info-card footer-tags" type="warn">{{item.HYTYPENAME}}</w-tag>
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

.icon-qiye{color:#67BEA5; font-size:22px; line-height:1em;}
</style>
