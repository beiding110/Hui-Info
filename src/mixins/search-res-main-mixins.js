export default function(type, compareKey) {
    return {
        activated() {
            var query = compareKey ? this[compareKey] : this.getQuery(),
                cache = this.getStore(type);
            if (Object.keys(cache).length === 0) {
                var obj = {};
                obj[type] = query;
                this.setStore(obj);
                return;
            } else if (Object.keys(query).every(key => {
                return query[key] === cache[key];
            })) {
                return;
            } else {
                var obj = {};
                obj[type] = query;
                this.setStore(obj);
            };

            this.$refs.mainPage.reQuery();
        }
    }
}
