<template>
    <div>
        <w-card class="info--card">
            <w-form :model="form" ref="form" class="invoice__form" @submit="submit">
                <form-item label="发票类型" prop="FpType" v-model="form.FpType" required>
                    <!-- <w-radio v-model="form.FpType" :data="fpData"></w-radio> -->
                    <select class="weui-select" v-model="form.FpType" placeholder="请输入发票类型">
                        <option v-for="item in fpData" :value="item.value">{{item.label}}</option>
                    </select>
                </form-item>
                <form-item label="单位名称" placeholder="请输入单位名称" prop="DwMc" v-model="form.DwMc" required></form-item>
                <form-item label="统一社会信用代码（税号）" placeholder="请输入税号" prop="XinYongCode" v-model="form.XinYongCode" required></form-item>
                <form-item label="地址" placeholder="请输入地址" prop="Address" v-model="form.Address" required></form-item>
                <form-item label="电话" placeholder="请输入电话" prop="DianHua" v-model="form.DianHua" required></form-item>
                <form-item label="开户行" placeholder="请输入开户行" prop="KaiHuHang" v-model="form.KaiHuHang" required></form-item>
                <form-item label="账号" placeholder="请输入账号" prop="YinHangZhangHao" v-model="form.YinHangZhangHao" required></form-item>
                <form-item label="金额" placeholder="请输入金额" prop="Je" v-model="form.Je">
                    {{form.Je}} 元
                </form-item>
                <!-- <form-item label="发票邮寄地址" placeholder="请输入发票邮寄地址" prop="LxrAddress" v-model="form.LxrAddress" required></form-item> -->
                <form-item label="电子邮箱" placeholder="请输入电子邮箱" prop="Email" v-model="form.Email" required mail></form-item>
                <form-item label="备注" placeholder="请输入备注" prop="Detail" v-model="form.Detail"></form-item>


                <div class="weui-btn-area" slot="btn" slot-scope="scope">
                    <btn type="primary" @click="scope.submit">申请</btn>
                </div>
            </w-form>
        </w-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                FpType: '普票',
                DwMc: '',
                XinYongCode: '',
                Address: '',
                DianHua: '',
                KaiHuHang: '',
                YinHangZhangHao: '',
                Je: '',
                LxrAddress: '',
                Detail: '',
            },
            fpData: [
                // {label:'专票',value:'专票'},
                {label:'普票（电子发票）',value:'普票'}
            ]
        }
    },
    methods:{
        submit() {
            var that = this;
            that.$post('/Api/FaPiao/AddFaPiao', that.form, function(data){
                app.ShowMsgBox('发票申请成功', function(){
                    that.$router.go(-1);
                })
            })
        },
        getInvoiceInfo() {
            this.form.Je = this.$store.state.invoiceInfo.FkJe;
            this.form.OrderGuid = this.$store.state.invoiceInfo.OrderGuid;
        }
    },
    mounted:function(){

    },
    activated() {
        this.getInvoiceInfo();
    },
    deactivated() {
        this.form = {
            FpType: '普票',
            DwMc: '',
            XinYongCode: '',
            Address: '',
            DianHua: '',
            KaiHuHang: '',
            YinHangZhangHao: '',
            Je: '',
            LxrAddress: '',
            Detail: '',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    form.invoice__form{padding:0;}
</style>
