import Vue from 'vue';
import Router from 'vue-router';
import RegistMyTask from './components/templates/contents/TodayTimeline.vue';
import WorkTimeCalendar from './components/templates/contents/WorkTimeCalendar.vue';

Vue.use(Router);

function loadView (view) {
  return () => import(`@/${view}.vue`);
};

export default new Router({
   mode: 'history',
   routes: [
       {
           path: '/',
           name: 'registMyTask',
           component: RegistMyTask
       },
       {
           path: '/work-time',
           name: 'worktime',
           component: WorkTimeCalendar
       }
   ]
});