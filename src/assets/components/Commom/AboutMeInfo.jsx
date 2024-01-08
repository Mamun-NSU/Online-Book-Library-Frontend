

import { Container } from 'react-bootstrap';
import "../../css/globalStyles.css"

const AboutMeInfo = () => {
 

  return (
   
    <Container className="myContainer">
      <div className=" text-container">
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        My Personal Information
      </h2>
      <div className="text-start m-5">
        <h3 className="font-bold">
          <span className="text-xl font-bold mx-5">Name:</span>Abdullah Al Mamun
        </h3>
        <p>
          <span className="text-xl font-bold mx-5">Profession:</span>Trainee Software
          Engineer
        </p>
        <p>
          <span className="text-xl font-bold mx-5">Company:</span>BJIT Limited
        </p>
        <p>
          <span className="text-xl font-bold mx-5">Nationality:</span>
          BangLadeshi
        </p>
        <p>
          <span className="text-xl font-bold mx-5">My Career:</span>
          A junior software engineer passionate about coding and technology. I enjoy learning and solving problems.
        </p>
      </div>
      </div>
    </Container>
  );
};

export default AboutMeInfo;
