<template>
    <scroll-loader action="/Api/Project/GetDingYueList" :extra.sync="extraObj" v-model="tableData" ref="loader" lazy>

        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">

                <template v-for="(item, index) in tableData">
                    <router-link :key="index" :to="'/detail/project/'+item.RowGuid+'/'+item.Category" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{item.Title}}</h4>
                            <p class="weui-media-box__desc">
                                <div class="item-info-con_left">
                                    <div>
                                        <span class="weui-badge city">{{item.CityName}}</span>
                                        <span class="weui-badge type">{{item.SsHyName}}</span>
                                    </div>
                                </div>
                                <div class="item-info-con_right">
                                    {{timeBeforeCalc(item.AddTime)}}
                                </div>
                            </p>
                        </div>
                    </router-link>
                </template>

            </div>
        </div>

    </scroll-loader>
</template>

<script>
import list from './list.js'
export default list.call(this)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item-info-con_left{width:100%; float:left; margin-right:-80px;}
    .item-info-con_left>div{margin-right:80px;}
    .item-info-con_right{width:80px; float:right; text-align:right; color:#909399}
</style>
