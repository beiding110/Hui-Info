<template>
    <div>
        <scroll-loader :action="url" :extra.sync="extraObj" v-model="tableData" ref="loader" :lazy="lazy">

            <template v-for="(item, index) in tableData">
                <w-card
                class="info--card"
                @click.native="toDetail(item, index)"
                :key="index"
                v-touch:hold="itemHold"
                v-ncmenu
                :data-guid="item.RowGuid">
                    <!-- <w-badge slot="header" is-dot :hidden="!!item.IsRead">
                        <div class="info--card__header">
                            <span>{{item.Title}}</span>
                        </div>
                    </w-badge> -->
                    <div class="info--card__header" slot="header">
                        <span>{{item.Title}}</span>
                    </div>
                    <div class="info--card__body">
                        <div class="info--body__left">
                            <div>
                                <span>{{item.JsDw}}</span>
                            </div>
                            <div>
                                <span class="iconfont">&#xe615;</span>
                                <span>{{item.CityName}}</span>
                            </div>
                        </div>
                        <div class="info--body__right">
                            <div class="price">￥{{item.TzZe}}</div>
                            <div>{{timeFormatter(item.AddTime)}}</div>
                        </div>
                    </div>
                    <div slot="footer" class="info--card__footer">

                        <div>
                            <w-tag class="info-card footer-tags" type="info">{{item.ZjLy}}</w-tag>
                            <w-tag class="info-card footer-tags">{{item.JsXzName}}</w-tag>
                            <w-tag class="info-card footer-tags" type="warn">{{item.JdName}}</w-tag>
                        </div>
                    </div>
                </w-card>
            </template>

        </scroll-loader>
    </div>
</template>

<script>
import listMixins from '@/mixins/list-mixins'
export default {
    mixins: [listMixins],
    props: {
        url: {
            type: String,
            default: '/Api/Project/GetProjectList'
        },
    },
    methods:{
        toDetail(item, index) {
            item.IsRead = 1;
            this.tableData.splice(index, 1, item);
            this.$router.push('/detail/project/'+item.RowGuid+'/'+item.Category);
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item-info-con_left{width:100%; float:left; margin-right:-80px;}
    .item-info-con_left>div{margin-right:80px;}
    .item-info-con_right{width:80px; float:right; text-align:right; color:#909399}

    .info-card{margin-right:.7em;}
    .footer-tags{float:left; margin-bottom:.2em;}

    .price{color:#E05457; font-weight:bold;}
</style>
