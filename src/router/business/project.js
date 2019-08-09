export default {
    home: [
        {
            path: 'project',
            name: 'huiinfo-project',
            meta: {title: '项目'},
            component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/main')},
        }
    ],
    detail: [
        {
            path: 'project/:guid/:type',
            name: 'detail-project',
            component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/detail')},
            meta: {alive: true, title: '项目详情'},
        }, {
            path: 'project/info',
            name: 'detail-project-info',
            component: function(){return import(/*webpackChunkName: 'project'*/ '@/views/project/pro-info')},
            meta: {alive: true, title: '项目详情'},
        }
    ]
}
