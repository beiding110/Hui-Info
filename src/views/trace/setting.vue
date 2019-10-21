<template>
    <div>
        <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <i class="iconfont">&#xe608;</i>
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">推送时间</h4>
                <div class="weui-media-box__desc">

                    <form-item label="每日推送时间：" arrow class="push-time">
                        <input-picker placeholder="请选择每日推送时间" v-model="form.SetTime" :data="times"></input-picker>
                    </form-item>

                </div>
            </div>
        </div>

        <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <i class="iconfont">&#xe633;</i>
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">推送方式</h4>
                <div class="weui-media-box__desc">

                    <div class="weui-cells weui-cells_radio">
                        <label class="weui-cell weui-check__label push-time">
                            <div class="weui-cell__bd">
                                <p>公众号推送</p>
                            </div>
                            <div class="weui-cell__ft">
                                <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked">
                                <span class="weui-icon-checked"></span>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
        </div>

        <div class="weui-btn-area">
            <btn type="primary" @click="submit">确定</btn>
        </div>
    </div>
</template>

<script>
var form = {
    ProjectID: '',
    SetTime: ''
};

export default {
    data () {
        return {
            form: form,

            times: []
        }
    },
    computed: {
        projectId() {
            return this.getQuery('ProjectID');
        }
    },
    methods: {
        initTimes() {
            for(var i = 0; i < 24; i++) {
                if(i < 10) {
                    time = '0' + i + ':00'
                } else {
                    var time = i + ':00';
                };
                this.times.push({
                    label: time,
                    value: time
                });
            }
        },
        submit() {
            this.form.ProjectID = this.projectId;
            this.$post('/Api/DingYue/PushManager', this.form, data => {
                app.ShowMsg('修改成功');
                window.history.back();
            });
        },
        queryDetail() {
            this.$get('/Api/DingYue/GetDingShiPushDetail', {
                type: this.projectId
            }, data => {
                this.form = data || {};
            });
        }
    },
    created() {
        this.initTimes();
    },
    mounted() {

    },
    activated() {
        this.queryDetail();
    },
    deactivated: function(){
        this.form = form;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.push-time{width:100%;}
.push-time.weui-cell_select, .push-time.weui-cell{padding-left:0; color:#666; font-size:13px;}

.weui-media-box{background:white; margin-top:1em; padding:14px 18px;}

.weui-media-box__title{font-size:15px; color:#333333; font-weight:bold;}
.weui-media-box_appmsg{align-items:normal;}
.weui-media-box_appmsg .weui-media-box__hd{width:24px; height:24px; line-height:24px;}

.weui-cells:before, .weui-cells:after{content:none;}
.weui-cells{margin:0;}

.iconfont{font-size:24px;}
.weui-media-box:nth-child(1) .iconfont{color:#5fb583;}
.weui-media-box:nth-child(2) .iconfont{color:#e37462;}
</style>
