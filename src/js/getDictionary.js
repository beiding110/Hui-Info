function funFactory(dataKey, type) {
    if(type) {
        return function() {
            if(this.$store.state.dictionary[dataKey].length > 0) {
                this[dataKey] = this.$store.state.dictionary[dataKey]
            } else {
                this.$get('/Api/Common/GetDictionary', {
                    type: type,
                }, (res) => {
                    res = res || [];

                    if(res.length) {
                        if(res[0].label !== '全部'){
                            res.unshift({label: '全部', value: '', isAll: true});
                        };
                    } else {
                        res.unshift({label: '全部', value: '', isAll: true});
                    };

                    res.forEach(function(item) {
                        if (item.label) {
                            item.title = item.label;
                        } else if (item.title) {
                            item.label = item.title;
                        };
                    });

                    //向data中数据赋值
                    if(this[dataKey] !== undefined) {
                        this[dataKey] = res
                    };

                    //更新store中的dictionary内容
                    let dictionary = this.$store.state.dictionary;
                    dictionary[dataKey] = res;
                    this.$store.commit('setState',{
                        'dictionary': dictionary
                    });

                });
            }
        }
    } else {
        return function() {
            //向data中数据赋值
            if(this[dataKey] !== undefined) {
                this[dataKey] = this.$store.state.dictionary[dataKey]
            };
        }
    }
};



//所属地市
var getCity = funFactory('CityData', 'City');

//公告类型
var getGglx = funFactory('TypeData', 'GgLx');

//时间段
var getDateRange = funFactory('DateRangeData');

//所属行业
var getSshy = funFactory('HyData', 'SsHy');

//进度
var getJzjd = funFactory('JdData', 'JzJd');

//数据来源
var getSource = funFactory('SourceData');

//企业类型
var getDanWeiType = funFactory('DanWeiTypeData');

export default function() {
    this.$store.commit('setState',{
        dictionary: Object.keys(this.$store.state.dictionary).length > 0 ? this.$store.state.dictionary : {
            CityData: [],
            TypeData: [],
            DateRangeData: [
                {label: '近三天', title: '近三天', value: '3'},
                {label: '近一周', title: '近一周', value: '7'},
                {label: '近一月', title: '近一月', value: '30'}
            ],
            SourceData: [
                {label: '河北省招标投标公共服务平台', title: '河北省招标投标公共服务平台', value: '河北省招标投标公共服务平台'},
            ],
            HyData: [],
            JdData: [],
            DanWeiTypeData: [
                {label: '全部', value: '', isAll: true},
                {label: '招标代理机构', title: '招标代理机构', value: '招标代理机构'},
                {label: '招标人', title: '招标人', value: '招标人'},
                {label: '中标单位', title: '中标单位', value: '中标单位'}
            ]
        }
    });

    //获取系统字典信息
    getCity.call(this);
    getGglx.call(this);
    getDateRange.call(this);
    getSshy.call(this);
    getJzjd.call(this);
    getSource.call(this);
    getDanWeiType.call(this);
}
