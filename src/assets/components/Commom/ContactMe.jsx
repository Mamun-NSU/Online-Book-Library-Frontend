

import { Container } from 'react-bootstrap';
import "../../css/globalStyles.css"

const ContactMe = () => {
 

  return (
   
    <Container className="myContainer">
      <div className=" text-container">
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        My Contact Information
      </h2>
      <div className="text-start m-5">
        <h3 className="font-bold">
          <span className="text-xl font-bold mx-5">Name:</span>Abdullah Al Mamun
        </h3>
        <p>
        <span className="text-xl font-bold mx-5">Website:</span>
        <a href="https://mamuncse.com/">https://mamuncse.com/</a>
        </p>
        <p>
        <span className="text-xl font-bold mx-5">Facebook:</span>
        <a href="https://www.facebook.com/mamun2528">https://www.facebook.com/mamun2528</a>
        </p>
        <p>
        <span className="text-xl font-bold mx-5">Linkedin:</span>
        <a href="https://www.linkedin.com/in/mamun2528/">https://www.linkedin.com/in/mamun2528/</a>
        </p>
        <p>
        <span className="text-xl font-bold mx-5">GitHub:</span>
        <a href="https://github.com/Mamun-NSU">https://github.com/Mamun-NSU</a>
        </p>
        <p>
        <span className="text-xl font-bold mx-5">CodeForces:</span>
        <a href="https://codeforces.com/profile/mamun2528">https://codeforces.com/profile/mamun2528</a>
        </p>
      </div>
      </div>
    </Container>
  );
};

export default ContactMe;
