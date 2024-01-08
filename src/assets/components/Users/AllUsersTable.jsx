
import { Container, Table } from 'react-bootstrap'; 
import UserDdetails from './UserDdetails';
import useUserHook from '../../hooks/useUserHook';
import "../../css/globalStyles.css"

const AllUsersTable = () => {
  const { users } = useUserHook();

  return (
    <Container className="myContainer">
      <h1>User List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <UserDdetails key={user.userId} user={user} />
            ))
          ) : (
            <tr>
              <td colSpan="6">No users available.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllUsersTable;





{/* // import useUserHook from './useUserHook';
// import { Container, Row } from 'react-bootstrap';
// import User from './User';


// const AllUsers = () => { */}
 {/* const { users } = useUserHook(); */}
  

  
    

{/* //   return (
//     <Container>
//       <h1>User List</h1>
//       <Row> */}
    //    {users.map((user, i) => {
    //       return (
    //         <div key={i} >
    //             <User user={user}/>
    //         </div>
    //       );
    //     })}
      {/* </Row>
    </Container>
  );
}; */}

// export default AllUsers;





// import React from 'react';
// import { Table } from 'react-bootstrap';
// import User from './User';
// import useUserHook from '../../hooks/useUserHook';

// function AllUsersTable({ users }) {
//     const { users, setUsers } = useUserHook();
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>User ID</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Role</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <User key={user.userId} user={user} />
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default AllUsersTable;


// // import React from 'react';

// // const AllUsersTable = () => {
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // }

// // export default AllUsersTable;
