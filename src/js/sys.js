import Vue from 'vue'
import dialogVip from '@/components-sys/dialog-vip'

(function(owner) {
    owner.vipTest = function (cb, flag) {
        if(this.$store.state.IsVip || this.$store.state.IsTry) {
            cb && cb()
        } else {
            owner.showDialogVip(() => {
                if(flag) {
                    this.$router.push('/user/vippay');
                } else {
                    this.$router.replace('/user/vippay');
                };
            });
        }
    };

    /**
     * 计算目标时间距当前时间间隔
     * @param  {string} time 目标时间
     * @return {String}      计算结果
     */
    owner.timeBeforeCalc = function(time) {
        // time = '2019/08/01 09:40:00';
        if(!time) return;
        time = time.replace(/\-/g, '/');
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
            //同年
            return oldtime.Format('MM-dd');
        } else {
            return oldtime.Format('yyyy-MM-dd');
        }
    };

    owner.fontReplacer = function(target, str, spliter) {
        if(!str) return '';
        if(!target) return str;

        spliter = spliter || ' ';
        var boldArr = target.split(spliter);

        boldArr.forEach((item) => {
            if(item && /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(item))
                str = str.replace(new RegExp(item, 'g'), '<font style="font-weight:bold; color:#1f80e6;">' + item + '</font>')
        })

        return str;
    };

    var DialogVip = Vue.extend(dialogVip);
    var dialogVipComponent = new DialogVip().$mount();
    owner.showDialogVip = function(callback) {
        document.querySelector('body').appendChild(dialogVipComponent.$el);
        dialogVipComponent.show({
            callback
        });
    };
} (Vue.prototype))
