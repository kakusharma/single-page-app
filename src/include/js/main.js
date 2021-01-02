import Dashboard from './views/dashboard.js';
import Posts from './views/posts.js';
import Settings from './views/settings.js';

const routerOutlet = document.querySelector('#app');

const routes = [
    { path: '/', component: Dashboard },
    { path: '/posts', component: Posts },
    { path: '/settings', component: Settings }
];

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    
    const potentialMatches = routes.map(route => 
            ({ view: route.component, isMatch: location.pathname === route.path }));

    let match = potentialMatches.find(match => !!match.isMatch);

    if (!match) {
        match = {
            view: routes[0].component,
            isMatch: true
        };
    }

    const view = new match.view();
    routerOutlet.innerHTML = await view.getHTML();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function(e) {
        if (!!e.target.dataset.link) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
