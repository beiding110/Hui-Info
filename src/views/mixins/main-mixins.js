import getDictionary from '@/js/GetDictionary'

export default {
    data () {
        return {
            KeyName: '' || this.getQuery('KeyName'),
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
            this[key] = query[key];
        });

        this.$nextTick(() => {
            this.quertData();
        });
    }
}
