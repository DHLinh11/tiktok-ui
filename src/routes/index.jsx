// LAYOUT
import { HeaderOnly } from '../component/Layout';
//PAGES
import Home from '../pages/Home/index.jsx';
import Following from '../pages/Following/index.jsx';
import Profile from '../pages/Profile/index.jsx';
import Upload from '../pages/Upload/index.jsx';
import Search from '../pages/Search/index.jsx';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
