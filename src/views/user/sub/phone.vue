<template>
    <div>
        <w-card class="info--card">
            <w-form :model="form" ref="form">
                <form-item label="手机号" placeholder="请输入待绑定手机号" prop="Mobile" v-model="form.Mobile" mobile></form-item>

                <div class="weui-btn-area">
                    <btn type="primary" @click="bindMobile">绑定</btn>
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
                Mobile: ''
            }
        }
    },
    methods:{
        bindMobile: function(){
            var that = this;
            this.$refs['form'].validate(function(res){
                if(res){
                    that.$post('/Api/user/BangDingMobile', that.form, function(data){
                        app.ShowMsgBox('绑定成功', function(){
                            that.$router.go(-1);
                            that.$store.commit('setState', {
                                reMobile: true
                            });
                        })
                    })
                }else{
                    return false;
                }
            })
        }
    },
    mounted:function(){

    },
    activated: function(){

    },
    deactivated: function(){
        this.form.Mobile = '';
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
