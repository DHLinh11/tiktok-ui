//routes
import routesConfig from '../config/routes.jsx';
// LAYOUT
import { HeaderOnly } from '../component/Layout';
//PAGES
import Home from '../pages/Home/index.jsx';
import Following from '../pages/Following/index.jsx';
import Profile from '../pages/Profile/index.jsx';
import Upload from '../pages/Upload/index.jsx';
import Search from '../pages/Search/index.jsx';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
