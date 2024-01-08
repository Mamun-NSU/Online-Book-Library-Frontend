import axios from "axios";
import { useEffect, useState } from "react";

const useUserHook = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null); // Initialize errors as null

  useEffect(() => {
    axios
      .get("http://localhost:8080/all")
      .then((resp) => {
        const data = resp.data;

        console.log("Data in UserHook: ", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error in UserHook: ", error);
        setErrors(error); // Set the error state
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { users, handleSubmit, errors };
};

export default useUserHook;






// import axios from "axios";
// import { useEffect, useState } from "react";

// const useUserHook = () => {
//   const [users, setUsers] = useState([]);
//   const [errors, setErrors] = useState();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/all")
//       .then((resp) => {
//         const data = resp.data;

//         console.log("Data in UserHook: ", data.data);
//         setUsers(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//         setErrors(errors);
//       });
//   }, []);

//   const handleSubmit = () => {
//     console.log("Submitting from custom hook");
//   };

//   return { users, handleSubmit, errors };
// };

// export default useUserHook;