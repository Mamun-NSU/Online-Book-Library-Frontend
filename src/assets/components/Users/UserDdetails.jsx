

function UserDdetails({ user }) {
  return (
    <tr>
      <td>{user.userId}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.role}</td>
    </tr>
  );
}

export default UserDdetails;
