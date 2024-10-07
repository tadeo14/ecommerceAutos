import Login from "../../componentes/Login.jsx";
import Footer from "../../componentes/Footer.jsx";
import Home from "../../pages/Home.jsx";
import Navbar from "../../componentes/Navbar.jsx";



const AppRouter = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

        <Route path="/registro" element={<Registro />} /> 
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/usuario" element={<Usuario />}/>
      
      </Routes>
     <Footer/>
    </Router>
  );
};

export default AppRouter;

