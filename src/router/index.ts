import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/enter',
            name: 'login',
            component: () => import('@/views/UserLogin.vue'),
        },
        {
            path: '/today',
            name: 'today',
            component: () => import('@/views/TodayWords.vue'),
        },
        {
            path: '/sharing/:groupID',
            name: 'sharingPoster',
            component: () => import('@/views/Sharing.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/UserRegister.vue'),
        },
        {
            path: '/reading',
            name: 'reading',
            component: () => import('@/views/ReadingArticle.vue'),
        },
        {
            path: '/reading/:articleID',
            name: 'readingDetail',
            component: () => import('@/views/ReadingArticleDetail.vue'),
        },
        {
            path: '/review/word/:groupID',
            name: 'reviewWord',
            component: () => import('@/views/ReviewWord.vue'),
        },
        { path: '/', name: 'skeleton', component: () => import('@/views/Skeleton.vue') },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomePage.vue'),
        },
        {
            path: '/recite/:groupId',
            name: 'recite',
            component: () => import('@/views/FlashCard.vue'),
        },
        {
            path: '/group/review/:groupID',
            name: 'groupReview',
            component: () => import('@/views/GroupReviewDetail.vue'),
        },
        // {
        //   path: '/group-recite',
        //   name: 'groupRecite',
        //   component: () => import('@/views/GroupRecite.vue')
        // },
        { path: '/wordlist/:groupID', name: 'word', component: () => import('@/views/WordList.vue') },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('@/views/FeedBack.vue'),
        },
        {
            path: '/record-word',
            name: 'recordWord',
            component: () => import('@/views/RecordWord.vue'),
        },
        {
            path: '/group-manage',
            name: 'input',
            component: () => import('@/views/GroupManage.vue'),
        },
        {
            path: '/group/setting/:groupID',
            name: 'groupSetting',
            component: () => import('@/views/GroupSetting.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('@/views/Help.vue'),
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('@/views/Settings.vue'),
        },
        {
            path: '/square',
            name: 'groupSquare',
            component: () => import('@/views/GroupSquare.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('@/views/NotFound.vue'),
        },
    ],
});

export default router;
