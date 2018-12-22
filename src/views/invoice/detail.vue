<template>
    <w-form :model="form" ref="form" class="invoice__form">
        <form-item label="发票类型">
            {{form.FpType}}
        </form-item>
        <form-item label="单位名称">
            {{form.DwMc}}
        </form-item>
        <form-item label="统一社会信用代码（税号）">
            {{form.XinYongCode}}
        </form-item>
        <form-item label="地址">
            {{form.Address}}
        </form-item>
        <form-item label="电话">
            {{form.DianHua}}
        </form-item>
        <form-item label="开户行">
            {{form.KaiHuHang}}
        </form-item>
        <form-item label="账号">
            {{form.YinHangZhangHao}}
        </form-item>
        <form-item label="金额">
            {{form.Je}} 元
        </form-item>
        <form-item label="电子邮箱">
            {{form.Email}}
        </form-item>
        <form-item label="备注">
            {{form.Detail}}
        </form-item>
    </w-form>
</template>

<script>
export default {
    data () {
        return {
            form: {
                FpType: '普票',
                dwmc: '',
                xydm: '',
                dz: '',
                DianHua: '',
                khh: '',
                zh: '',
                Orderje: '',
                yjdz: '',
                Detail: '',
            }
        }
    },
    methods:{
        getDetail() {
            // var guid = this.$router.search.FaPiaoGuid;
            // this.$get('/Api/FaPiao/GetFaPiao', {
            //     FaPiaoGuid: guid
            // }, function(data) {
            //     this.form = data;
            // }.bind(this));
            this.form = this.$store.state.invoicedInfo;
        }
    },
    mounted:function(){

    },
    activated() {
        this.getDetail();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    form.invoice__form{padding:0;}
</style>
