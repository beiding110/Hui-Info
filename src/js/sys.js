import Vue from 'vue'

(function(owner) {
    owner.vipTest = function (cb, flag) {
        if(this.$store.state.IsVip || this.$store.state.IsTry) {
            cb && cb()
        } else {
            if(flag) {
                this.$router.push('/msg/error/抱歉/您是非会员，无权限查看此内容');
            } else {
                this.$router.replace('/msg/error/抱歉/您是非会员，无权限查看此内容');
            };
        }
    };

    /**
     * 计算目标时间距当前时间间隔
     * @param  {string} time 目标时间
     * @return {String}      计算结果
     */
    owner.timeBeforeCalc = function(time) {
        // time = '2019-08-01 09:40:00';
        var oldtime = new Date(time),
            now = new Date(),
            delta = 0,
            oldtime_s,
            now_s,
            returnVal;

        oldtime_s = oldtime.getTime();
        now_s = now.getTime();
        delta = now_s - oldtime_s;

        if(delta / (1000 * 60 * 60) < 1) {
            //小于1h；
            return Math.ceil(delta / (1000 * 60)) + '分钟前';
        } else if(delta / (1000 * 60 * 60 * 24) < 1) {
            //小于1天
            return Math.ceil(delta / (1000 * 60 * 60)) + '小时前';
        } else if(delta / (1000 * 60 * 60 * 24 * 7) < 1) {
            //小于7天
            return Math.ceil(delta / (1000 * 60 * 60 * 24)) + '天前';
        } else if(oldtime.getFullYear() === now.getFullYear()) {
            return oldtime.Format('MM-dd');
        } else {
            return / /.test(time) ? time.split(' ')[0] : time;
        }
    }
} (Vue.prototype))
