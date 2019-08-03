import home from '@/views/home/home'

import bidding from './business/bidding'
import project from './business/project'
import enterprise from './business/enterprise'
import trace from './business/trace'
import traceEnterprise from './business/trace-enterprise'
import user from './business/user'

var route = [

];

route.push.apply(route, bidding.home);
route.push.apply(route, project.home);
route.push.apply(route, enterprise.home);
route.push.apply(route, trace.home);
route.push.apply(route, traceEnterprise.home);
route.push.apply(route, user.home);

export default {
    path: '/home',
    name: 'huiinfo',
    component: home,
    meta: {alive: true, title: '标信通'},
    children: route
};
