// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import schoolbuilding from '../image/schoolbuilding.webp';
import photo1 from '../image/photo1.jpg';
import student from '../image/student.webp';

const Home = () => {
  return (
    <>
      
      <div style={{ width: '100vw', overflow: 'hidden' }}>
        <Carousel>
          <Carousel.Item>
            <img
              src={schoolbuilding}
              alt="First Slide"
              style={{ width: '100%', height: '500px' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={photo1}
              alt="Second Slide"
              style={{ width: '100%', height: '500px' }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={student}
              alt="Third Slide"
              style={{ width: '100%', height: '500px' }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
