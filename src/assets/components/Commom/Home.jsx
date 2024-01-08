import { Button, Col, Container, Image, Row } from "react-bootstrap";
import library from "../../images/library.webp";
import "../../css/globalStyles.css"
import { Link } from "react-router-dom";
import '../../css/globalStyles.css';


const Home = () => {
  return (
    <Container className="min-h-screen myContainer">
      <Row className="flex-lg-row-reverse" >
        <Col lg={6} className="d-flex align-items-center">
        <Image style={{ height: '300px', width: '500px' }} src={library} alt="Library Image" className="img-fluid rounded-lg shadow-2xl" />
        </Col>
        <Col lg={6}>
          <div>
            <h1 className="text-5xl font-weight-bold">
              Best website for Online book Library
            </h1>
            <p className="py-6">
            Welcome to our Online Book Library! We are your premier destination for a world of literary exploration. Our digital library is a treasure trove of knowledge, offering an extensive collection of books, from timeless classics to contemporary bestsellers. Whether you are an avid reader, a student, or a casual browser, our platform provides easy access to a diverse range of e-books, audiobooks, and more. Our user-friendly interface enhances your reading experience with features like personalized recommendations and reading tools. We are dedicated to promoting the joy of reading and lifelong learning. Explore, discover, and immerse yourself in the rich world of literature at our Online Book Library.

            </p>
            <Link to="/login">
            <Button>Get Started</Button>
            </Link>
            
          </div>
        </Col>
      </Row>
    </Container>
    );

}

export default Home;
