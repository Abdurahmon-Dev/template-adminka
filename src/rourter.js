import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import authorization from './views/AUTHORIZATION.vue'
import statistics from './views/statistics.vue'
import realTime from './views/real_time.vue'
import report from './views/report.vue'
import cards from './views/cards.vue'
import chart from './views/chart.vue'
import guest from './views/guest.vue'
import allUsers from './views/all_users.vue'
import vacation from './views/vacation.vue'
import Fingerprints from './views/Fingerprints.vue'

const routes = [
    { path: '/Admin', component: authorization },
    {
        path: '/statistics',
        component: statistics,
        children: [
            { path: '/realtime', component: realTime },
            { path: '/report', component: report },
            { path: '/cards', component: cards },
            { path: '/chart', component: chart },
            { path: '/guest', component: guest },
            { path: '/All_users', component: allUsers },
            { path: '/vacation', component: vacation },
            { path: '/Fingerprints', component: Fingerprints }
        ]
    },
    
]

const router = new VueRouter({
    routes,
    mode: 'history'
     // short for `routes: routes`

})

export default router;