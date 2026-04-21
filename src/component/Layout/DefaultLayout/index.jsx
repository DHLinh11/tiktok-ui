import Header from '../components/Header/index.jsx';
import Sidebar from './SideBar/index.jsx';
export default function DefaultLayout({ children }) {
    return (
        <>
            <div>
                <Header />
                <div className='container'>
                    <Sidebar />
                    <div className='content'>{children}</div>
                </div>
            </div>
        </>
    );
}
