import Home from '~/Pages/Home/Home';
import AboutUS from '~/Pages/AboutUs/AboutUs';
import Contact from '~/Pages/Contact/Contact';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: AboutUS },
    { path: '/lien-he', component: Contact },
];
