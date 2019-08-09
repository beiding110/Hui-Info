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

            if(this.JdData !== undefined) {
                this.JdData = this.$store.state.dictionary.JdData
            }

            let dictionary = this.$store.state.dictionary;
            dictionary.JdData = res;
            this.$store.commit('setState',{
                'dictionary': dictionary
            });
        });
    }
}

export default function() {
    this.$store.commit('setState',{
        dictionary: Object.keys(this.$store.state.dictionary).length > 0 ? this.$store.state.dictionary : {
            CityData: [],
            TypeData: [],
            DateRangeData: [
                {label: '近三天', value: '3'},
                {label: '近一周', value: '7'},
                {label: '近一月', value: '30'}
            ],
            HyData: [],
            JdData: []
        }
    });

    //获取系统字典信息
    getCity.call(this);
    getGglx.call(this);
    getDateRange.call(this);
    getSshy.call(this);
    getJzjd.call(this);
}
