import getDictionary from '@/js/GetDictionary'

export default {
    data () {
        return {
            KeyName: '' || this.getQuery('keyname'),
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
        var keyname = this.getQuery('keyname');
        if(keyname != this.KeyName) {
            this.KeyName = keyname;
            this.$nextTick(() => {
                this.quertData();
            });
        }
    }
}
