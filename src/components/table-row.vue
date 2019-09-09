<template>
    <tr class="table-row">
        <td :style="labelStyle" class="table-label">
            {{label}}
        </td>
        <td class="table-data">
            <slot :row="$parent.data[prop]">
                <div v-html="$parent.data[prop] || '-'"></div>
            </slot>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['label', 'prop', 'labelWidth'],
    data () {
        return {

        }
    },
    computed: {
        labelStyle: function(){
            return {
                'width': !!this.labelWidth ? this.labelWidth : 'auto'
            }
        }
    },
    methods:{

    },
    mounted:function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    table.table-con tr.table-row{border: none;}
    table.table-con .table-row td{border: 1px solid #F2F6FC; font-size:13px; color:#606266; padding:0.5em;}
    table.table-con td.table-label{text-align: center; background: #F2F6FC;}
    table.table-con td.table-data{text-align: left;}
</style>
