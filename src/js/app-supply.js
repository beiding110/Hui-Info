import Vue from 'vue'
(function(owner) {
    /**
     * 获取路由中参数
     * @param  {String} key 参数关键字
     * @return {String}     获取到的参数
     */
    owner.getRoute = function(key) {
        if(key) return this.$route.params[key];
        else return this.$route.params;
    };
    owner.getQuery = function(key) {
        if(key) return this.$route.query[key];
        else return this.$route.query;
    };

    /**
     * 获取$store中的变量
     * @param  {key} key 变量关键字
     * @return {all}     获取到的变量
     */
    owner.getStore = function(key) {
        return this.$store.state[key] || false;
    };

    /**
     * 设定$store中的变量
     * @param  {Object} obj 变量的key、value集合
     * @return {null}     返回空
     */
    owner.setStore = function(key, value) {
        var obj = {};
        if(typeof(key) === 'string') {
            obj[key] = value;
        } else if (typeof(key) === 'object') {
            obj = key;
        }
        this.$store.commit('setState', obj)
    };

    /**
     * 跳转（有历史记录）
     * @return {null} 无返回值
     */
    owner.goto = function() {
        this.$router.push.apply(this.$router, arguments);
    };

    /**
     * 参数是否存在
     * @param  {String} e 参数名
     * @return {Boolean}   是否存在
     */
    owner.inAttr = function(e) {
        return inAttr(e);
    };

    /**
     * 切除日期中的时分秒
     * @param  {String} e 日期字符串
     * @return {String}   切分后的年月日
     */
    owner.timeToDate = function(e) {
        return timeToDate(e);
    };

    /**
	 * 设置storage基方法
	 * @param  {string} type sessionStorage或localStorage
	 * @param  {string} key  要取的key
	 * @return {string|Object}      对应存储的数据
	 */
	function getStorage(type, key) {
		var res = !!key ?
			window[type][key] ?
			((/{|}|%7B|%7D|\[|\]|%5B|%5D/.test(window[type][key]) ?
				JSON.parse(unescape(window[type][key])) :
				unescape(window[type][key]))) : undefined :
			window[type];
		return res || false;
	}
	/**
	 * 获取storage基方法
	 * @param {string} type  sessionStorage或localStorage
	 * @param {string|object} key   要设置的key或整个对象
	 * @param {Object} value 已设置的结果
	 */
	function setStorage(type, key, value) {
		if (typeof key === 'string') {
			window[type][key] = (typeof value === 'object') ? escape(JSON.stringify(value)) : escape(value);
		} else if (typeof key === 'object') {
			Object.keys(key).forEach(function (item) {
				window[type][item] = (typeof value === 'object') ? escape(JSON.stringify(key[item])) : escape(key[item]);
			});
		};
		return window[type];
	}

	/**
	 * 获取localStorage里的数据
	 * @param  {string} key 待获取的key
	 * @return {string|Object} 取回的值
	 */
	owner.getLocal = function (key) {
		return getStorage('localStorage', key);
	}

	/**
	 * 将值存入localStorage
	 * @param  {string|Object} key   待存值的key或json对象
	 * @param  {string|object} value 待存值的value
	 * @return {object}       存入后localStorage对象
	 */
	owner.setLocal = function (key, value) {
		return setStorage('localStorage', key, value);
	}

	/**
	 * 获取sessionStorage里的数据
	 * @param  {string} key 待获取的key
	 * @return {string|Object} 取回的值
	 */
	owner.getSession = function (key) {
		return getStorage('sessionStorage', key);
	}

	/**
	 * 将值存入sessionStorage
	 * @param  {string|Object} key   待存值的key或json对象
	 * @param  {string|object} value 待存值的value
	 * @return {object}       存入后sessionStorage对象
	 */
	owner.setSession = function (key, value) {
		return setStorage('sessionStorage', key, value);
	}

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
})(Vue.prototype)
