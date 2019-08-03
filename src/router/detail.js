import detail from '@/views/home/detail'

import bidding from './business/bidding'
import project from './business/project'

var route = [

];

route.push.apply(route, bidding.detail);
route.push.apply(route, project.detail);

export default {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {title: '详情页'},
    children: route
}
