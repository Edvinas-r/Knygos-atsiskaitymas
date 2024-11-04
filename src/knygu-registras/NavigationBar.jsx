import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

export const NavigationBar = () => {

    return(
        
    <Container className="ml-auto" >
    <Nav justify variant="pills" defaultActiveKey="/home" style={{backgroundColor:"#393F09"}}>
      <Nav.Item >
        <Nav.Link as={Link} to="/" style={{color:"white", fontSize:"24px"}}>Knygų sąrašas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/register" style={{color:"white", fontSize:"24px", }}>Registruoti knygą</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/review" style={{color:"white", fontSize:"24px", }}>Atsiliepimai</Nav.Link>
      </Nav.Item>
    </Nav>  
    </Container>
    )
};


