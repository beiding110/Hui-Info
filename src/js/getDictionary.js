//所属地市
function getCity() {
    if(this.$store.state.dictionary.CityData.length > 0) {
        this.CityData = this.$store.state.dictionary.CityData
    } else {
        this.$get('/Api/Common/GetDictionary', {
            type: 'City',
        }, (res) => {
            if(res[0].label !== '全部'){
                res.unshift({label: '全部', value: ''});
            };

            res.forEach(function(item) {
                if(item.label) {
                    item.title = item.label;
                } else if(item.title) {
                    item.label = item.title;
                };
            });

            if(this.CityData !== undefined) {
                this.CityData = res
            }

            let dictionary = this.$store.state.dictionary;
            dictionary.CityData = res;
            this.$store.commit('setState',{
                'dictionary': dictionary
            });

        });
    }
}

//公告类型
function getGglx() {
    if(this.$store.state.dictionary.TypeData.length > 0) {
        this.TypeData = this.$store.state.dictionary.TypeData
    } else {
        this.$get('/Api/Common/GetDictionary', {
            type: 'GgLx',
        }, (res) => {
            if(res[0].label !== '全部'){
                res.unshift({label: '全部', value: ''});
            };

            res.forEach(function(item) {
                if(item.label) {
                    item.title = item.label;
                } else if(item.title) {
                    item.label = item.title;
                };
            });

            if(this.TypeData !== undefined) {
                this.TypeData = res
            };

            let dictionary = this.$store.state.dictionary;
            dictionary.TypeData = res;
            this.$store.commit('setState',{
                'dictionary': dictionary
            });
        });
    }
}

//时间段
function getDateRange() {
    this.DateRangeData = this.$store.state.dictionary.DateRangeData
}

//所属行业
function getSshy() {
    if(this.$store.state.dictionary.HyData.length > 0) {
        this.HyData = this.$store.state.dictionary.HyData
    } else {
        this.$get('/Api/Common/GetDictionary', {
            type: 'SsHy',
        }, (res) => {
            if(res[0].label !== '全部'){
                res.unshift({label: '全部', value: ''});
            };

            res.forEach(function(item) {
                if(item.label) {
                    item.title = item.label;
                } else if(item.title) {
                    item.label = item.title;
                };
            });

            if(this.HyData !== undefined) {
                this.HyData = res
            }

            let dictionary = this.$store.state.dictionary;
            dictionary.HyData = res;
            this.$store.commit('setState',{
                'dictionary': dictionary
            });
        });
    }
}

//进度
function getJzjd() {
    if(this.$store.state.dictionary.JdData.length > 0) {
        this.JdData = this.$store.state.dictionary.JdData
    } else {
        this.$get('/Api/Common/GetDictionary', {
            type: 'JzJd',
        }, (res) => {
            if(res[0].label !== '全部'){
                res.unshift({label: '全部', value: ''});
            };

            res.forEach(function(item) {
                if(item.label) {
                    item.title = item.label;
                } else if(item.title) {
                    item.label = item.title;
                };
            });

            if(this.JdData !== undefined) {
                this.JdData = res;
            }

            let dictionary = this.$store.state.dictionary;
            dictionary.JdData = res;
            this.$store.commit('setState',{
                'dictionary': dictionary
            });
        });
    }
}

//数据来源
function getSource() {
    this.SourceData = this.$store.state.dictionary.SourceData
}

//企业类型
function qyType() {
    this.QyType = this.$store.state.dictionary.QyTypeData
}

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
            QyTypeData: [
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
}
