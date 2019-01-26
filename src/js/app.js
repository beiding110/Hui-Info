import Vue from 'vue'

export default (function(owner){
    //验证是否为空
    function IsNullOrEmpty(str) {
        var isOK = false;
        if (str == undefined || str == "") {
            isOK = true;
        }
        return isOK;
    }

    //接收地址栏参数
    function GetQuery(key) {
        var search = location.search.slice(1); //得到get方式提交的查询字符串
        var arr = search.split("&");
        for (var i = 0; i < arr.length; i++) {
            var ar = arr[i].split("=");
            if (ar[0] == key) {
                return ar[1];
            }
        }
        return "";
    }

    owner.GetOpenID = function() {
        var result = "";
        $.ajaxSettings.async = false;
        var code = GetQuery("code");
        //判断是否有回传Code
        if (IsNullOrEmpty(code)) {
            var href = window.location.href;
            //为空获取授权页面
            $.get("/Coupon/GetOAuthUrl.json", { url: href }, function (data) {
                // var obj = $.parseJSON(data);
                var obj = data;
                if (obj.result) {
                    $.toast("等待授权");
                    window.location.href = obj.t;
                } else {
                    $.toast("授权失败：" + obj.msg);
                }
            })
        } else {
            //不为空获取OpenID
            $.get("/Coupon/GetOpenIdbyCode.json", { code: code }, function (data) {
                // var obj = $.parseJSON(data);
                var obj = data;
                if (obj.result) {
                    result = obj.t;
                } else {
                    $.toast("授权失败：" + obj.msg);
                }
            })
        }
        $.ajaxSettings.async = true;

        return result;
    }

    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    Vue.prototype.$get = function (a, b, c) {
        var url, data, callback;

        url = a;
        data = '';
        callback = callback || function () { }

        if (arguments.length == 2 && typeof (b) == 'function') {
            callback = b;
        } else if (arguments.length == 2 && typeof (b) != 'function') {
            data = b;
        } else if (arguments.length == 3) {
            data = b;
            callback = c;
        }

        AjaxRequest.call(this, url, data, 'get', function (data, res) {
            callback(data, res);
        })
    }

    Vue.prototype.$post = function (a, b, c) {
        var url, data, callback;

        url = a;
        data = '';
        callback = callback || function () { }

        if (arguments.length == 2 && typeof (b) == 'function') {
            callback = b;
        } else if (arguments.length == 2 && typeof (b) != 'function') {
            data = b;
        } else if (arguments.length == 3) {
            data = b;
            callback = c;
        }

        AjaxRequest.call(this, url, data, 'post', function (data, res) {
            callback(data, res);
        })
    }

    /***************************************
    ***发送ajax请求
    *** url 请求url//a
    *** data 提交数据//b
    *** type 请求类型//c
    ****** callback 请求成功回调//c\d
    ***************************************/
    function AjaxRequest(url, data, c, d) {
        var that = this;
        var type = arguments.length == 4 ? c : "get";
        var callback = arguments.length == 4 ? d : c;
        try {
            // $.showLoading();
        } catch (e) { }
        $.ajax({
            url: '/huiinfo' + url,
            type: type,
            data: data,
            success: function (data) {

    			var obj = typeof(data)=='string' ? JSON.parse(data) : data;
                try {
                    // $.hideLoading();
                } catch (e) { }

                if(obj.Success){
                    that.$store.commit('setState', {
                        IsVip: !!obj.IsVip
                    });

                    that.$store.commit('setState', {
                        IsTry: !!obj.IsTry
                    });

                    if(/{|}|\[|\]/.test(obj.Data) && typeof obj.Data == 'string'){
                        callback(JSON.parse(obj.Data), obj);
                    }else{
                        callback(obj.Data, obj);
                    }

                }else{
                    if(/micromessenger/i.test(navigator.userAgent)) {
                        if(!!obj.Url){
                            $.showLoading(obj.Msg);
                            window.location.href = obj.Url;
                        }else if(!!obj.OpenID){

                            $.get('/huiinfo'+'/Api/Base/GetUserID', {
                                OpenID: obj.OpenID
                            }, function(data){
                                var obj = typeof(data)=='string' ? JSON.parse(data) : data;
                                if(obj.Success){
                                    var href = window.location.href.replace(window.location.search, '');
                                    window.location.replace(href);
                                    // window.location.reload();
                                }else{
                                    owner.ShowMsgBox(obj.Msg);
                                }
                            })

                        }else{
                            owner.ShowMsgBox(obj.Msg)
                        }
                    }
                }
            },
            beforeSend: function(xhr){
                var href = encodeURI(window.location.href);
                xhr.setRequestHeader('Url', href);
            },
            //AJAX请求结束后，
            complete: function (xhr, status) {
        		try{

        		}catch (e) {
        			// TODO: handle exception
        		}
        	},
			error: function(error){
				console.log(error)
			}
        })
    }

    owner.ShowMsgBox = function(msg, callback) {
        callback = callback || function () { }
        $.alert(msg, callback);
    }

    /******************
    *** Notification 消息通知
    *** msg 提示信息
    *** type 消息类型
    ******************/
    owner.ShowMsg = function(msg, type) {
        $.toast(msg);
    }

    owner.showConform = function(content, callback) {
        $.confirm(content, function() {
            //点击确认后的回调函数
            callback && callback()
        }, function() {
            //点击取消后的回调函数
        });
    }

    /**
     * 在目标ref上生成一个随机id
     * @param  {obj} ref vue的一个ref实例
     * @return {string}     生成的随机id
     */
    owner.setRandomId = function(ref){
        var target = this.$refs[ref],
        random = (Math.random() * 100000 + '').slice(0,5);

        var randomId = ref+'-'+random;
        target.setAttribute('id', randomId);

        return randomId;
    }

    //对象深拷贝
    owner.clone = function(obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0, len = obj.length; i < len; ++i) {
                copy[i] = owner.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = owner.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }

    owner.Chain = function(){
        this.chain_arr = [];
    }
    owner.Chain.prototype = {
        /**
         * 链的内容
         * @param  {function} fun 待执行函数，包含两个参数：通用参数及执行下一环节的函数
         * @return {this}     返回自身，可链式调用
         */
        link: function(fun){
            var that = this;
            if(typeof(fun)=='function'){
                this.chain_arr.push(fun);
            };
            return this;
        },
        /**
         * 执行责任链
         * @param  {Object} obj 责任链中的通用参数
         * @return {null}     [description]
         */
        run: function(obj){
            var that = this,
            index = 0,
            obj = obj;

            var loop = function(){
                var this_node = that.chain_arr[index];
                index++;
                if(!!this_node){
                    return this_node(obj, loop)
                }
            };

            loop();
        }
    };

    owner.inAttr = function(val){
		if(val === '' || val === 'true' || val === true){
			return true;
		}else{
			return false;
		}
	}

    owner.wxPay = function(obj, callback, errcallback){
		//调起支付
		WeixinJSBridge.invoke('getBrandWCPayRequest', {
			"appId":obj.appId,
			"timeStamp": obj.timeStamp,
			"nonceStr":obj.nonceStr,
			"package": obj.package,
			"signType": "MD5",
			"paySign": obj.paySign
		}, function (res) {
			//支付成功
			if (res.err_msg == "get_brand_wcpay_request:ok") {
				alert("支付成功");
				!!callback && callback();
			} else if (res.err_msg == "get_brand_wcpay_request:fail") {
				alert("支付失败，请重试");
				!!errcallback && errcallback();
			} else if(res.err_msg == "get_brand_wcpay_request:cancel") {
				alert("用户取消支付");
				!!errcallback && errcallback();
			}else{
				alert(res.err_msg);
				!!errcallback && errcallback();
			};
		});
    }

    return owner;
}(window.app={}))
