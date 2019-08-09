<template>
    <div>
        <trace-form-title>
            关注企业
        </trace-form-title>

        <div class="weui-cells weui-cells_form">
            <form-item label="企业名称" v-model="form.CompanyName" placeholder="请输入企业名称" required></form-item>
            <form-item label="时间段" arrow required>
                <input-picker placeholder="请选择时间段" v-model="form.DateRange" :data="DateRangeData"></input-picker>
            </form-item>
            <form-item label="信息类别" arrow required>
                <w-select
                multi
                v-model="form.TypeCode"
                :name.sync="form.TypeName"
                :data="TypeData"
                placeholder="请选择信息类别"></w-select>
            </form-item>
            <form-item label="所属区域" arrow required>
                <input-picker placeholder="请选择所属区域" v-model="form.CityCode" :data="CityData" @select="citySel"></input-picker>
            </form-item>
            <form-item label="定制状态">
                <w-switch
                slot="footer"
                v-model="form.Shbj"
                active-value="1"
                inactive-value="0"></w-switch>
            </form-item>
        </div>

        <div class="weui-btn-area">
            <btn type="primary" @click="submit">确定</btn>
        </div>
    </div>
</template>

<script>
import traceFormMixins from '@/views/mixins/trace-form-mixins'

export default {
    mixins: [traceFormMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-cells_form{margin-top:0;}
    .weui-cells_form+.weui-cells_form{margin-top:1.17647059em}
</style>
