// import JustHeader from './components/download/JustHeader';
import Header from '../src/layouts/Header';
import Footer from '../src/layouts/Footer';

function Layout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
