import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Products from './Components/Product'
import Course from './Components/CourseList';
import Forms from './Components/Forms';
import DisplayEnquiry from './Components/Enquiry';
import {Nav,Navbar,Container} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar>
        <Container className="navcontainer">
            <Navbar.Brand href="#home" className="title">NeoSOFT Technologies</Navbar.Brand>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="./course">Courses</Nav.Link>
            <Nav.Link as={NavLink} to="./displayenquiry">Enquiry Details</Nav.Link>
            <Nav.Link as={NavLink} to="./forms">Enquiry</Nav.Link>
        </Container>
        </Navbar>
    <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/displayenquiry" element={<DisplayEnquiry/>}/>
      <Route path="/forms" element={<Forms/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;