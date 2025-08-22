// components/Layout.js
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
    const location = useLocation();
    const hideNavbarFooter = ['/login', '/register'].includes(location.pathname);

    return (
        <>
            {!hideNavbarFooter && <NavBar />}
            <main>{children}</main>
            {!hideNavbarFooter && <Footer />}
        </>
    );
}

export default Layout;