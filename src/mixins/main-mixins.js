import getDictionary from '@/js/GetDictionary'

export default {
    props: {
        lazy: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            extraForm: {
                KeyName: '',
                CompanyName: '',
                Content: '',

                CityCode: '',
                TypeCode: '',
                DateRange: '',
                HyCode: '',
                JdCode: ''
            },

            CityData: [],
            TypeData: [],
            DateRangeData: [],
            HyData: [],
            JdData: []
        }
    },
    methods:{
        quertData: function(e){
            this.$refs.list.reload();
        }
    },
    mounted:function(){
        var that = this;

        getDictionary.call(this);
    },
    activated() {
        var query = this.getQuery();

        Object.keys(query).forEach(key => {
            this.extraForm[key] = query[key];
        });

        this.$nextTick(() => {
            this.quertData();
        });
    }
}
