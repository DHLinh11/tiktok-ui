//routes
import config from '../config';

//LAYOUT
import { HeaderOnly } from '../layouts';

//PAGES
import Home from '../pages/Home/index.jsx';
import Following from '../pages/Following/index.jsx';
import Profile from '../pages/Profile/index.jsx';
import Upload from '../pages/Upload/index.jsx';
import Search from '../pages/Search/index.jsx';

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

// private routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
