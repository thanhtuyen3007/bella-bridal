import Home from '~/Pages/Home/Home';
import AboutUS from '~/Pages/AboutUs/AboutUs';
import Contact from '~/Pages/Contact/Contact';
import BookingNow from '~/Pages/BookingNow/BookingNow';
import News from '~/Pages/News/News';
import NewPost from '~/Pages/NewPost/NewPost';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: AboutUS },
    { path: '/lien-he', component: Contact },
    { path: '/booking-now', component: BookingNow },
    { path: '/tin-tuc', component: News },
    { path: '/:newPost', component: NewPost },
];
