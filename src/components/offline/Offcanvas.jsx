
import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
import './Offline.css';
import  atomo  from '../../media/atomo.png';
import  html  from '../../media/html.png';
import  css  from '../../media/css.png';
import  js  from '../../media/js.png';
import  aws  from '../../media/aws.jpg';
import  node  from '../../media/node.png';
import  indice  from '../../media/indice.png';
import  mongo  from '../../media/mongo.png';


const OffCanvas = () => {
 return (
   <Navbar className="hide" bg="transparent" expand={false}>
     <Navbar.Toggle aria-controls="offcanvasNavbar" id='btn_tog'/>
     <Navbar.Offcanvas
       id="offcanvasNavbar"
       aria-labelledby="offcanvasNavbarLabel"
       placement="end"
     >
       <Offcanvas.Header closeButton>
         <Offcanvas.Title id="offcanvasNavbarLabel">Skills</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
         <Nav className="justify-content-end flex-grow-1 pe-3" id='colapso'>
           <Nav.Link href="#action1">
             <a class="nav-link" aria-current="page" href="#">
               <img src={atomo}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={html}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={css}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={js}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={aws}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={node}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={indice}></img>
             </a>
           </Nav.Link>
           <Nav.Link href="#action2">
             <a class="nav-link" aria-current="page" href="#">
               <img src={mongo}></img>
             </a>
           </Nav.Link>
         </Nav>
       </Offcanvas.Body>
     </Navbar.Offcanvas>
   </Navbar>
 );
}





export default OffCanvas;