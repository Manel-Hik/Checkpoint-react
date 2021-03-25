import logo from './logo.svg';
import './App.css';
import { Container, Row, Col,Button,Alert, Breadcrumb, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <form>
          <Row>
            <Col>
            <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Example@email">

            </Form.Control>
            <Form.Text classname="text-muted">We'll never share your email adress, trust us!
            </Form.Text>
          </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formPassword">
            <Form.Label> Password</Form.Label>
            <Form.Control type="password" placeholder="Password">

            </Form.Control>
           
          </Form.Group>
            </Col>
          </Row>
    
        <Button variant="secondary" type="submit"> Login</Button>
        </form>
        </Container>
      </header>
    </div>
  );
}

export default App;
