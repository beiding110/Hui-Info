import btnPicker from './btn-picker'
import btn from './btn'
import formItem from './form-item'
import inputPicker from './input-picker'
import scrollLoader from './scroll-loader'
import searchBar from './search-bar'
import table from './table'
import tableRow from './table-row'
import topBar from './top-bar'

import wForm from './w-form'
import wRadio from './w-radio'
import wSwitch from './w-switch'
import wSelect from './w-select'
import wDatePicker from './w-date-picker'

import wTab from './w-tab'
import wTabItem from './w-tab-item'
import card from './card'
import badge from './badge'
import tag from './tag'
import fixedBtn from './fixed-btn'

export default{
    install: function(Vue){
        Vue.component('btn-picker', btnPicker);
        Vue.component('btn', btn);
        Vue.component('form-item', formItem);
        Vue.component('input-picker', inputPicker);
        Vue.component('scroll-loader', scrollLoader);
        Vue.component('search-bar', searchBar);
        Vue.component('table-con', table);
        Vue.component('table-row', tableRow);
        Vue.component('top-bar', topBar);
        Vue.component('fixed-btn', fixedBtn);

        Vue.component('w-form', wForm);
        Vue.component('w-radio', wRadio);
        Vue.component('w-switch', wSwitch);
        Vue.component('w-select', wSelect);
        Vue.component('w-date-picker', wDatePicker);

        Vue.component('w-tab', wTab);
        Vue.component('w-tab-item', wTabItem);
        Vue.component('w-card', card);
        Vue.component('w-badge', badge);
        Vue.component('w-tag', tag);
    }
}
