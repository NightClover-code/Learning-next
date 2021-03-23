import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
