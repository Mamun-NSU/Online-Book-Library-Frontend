const isCustomer = () => {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    console.log(`Role is ${role} and userId is ${userId}`);
  
    if(role==="CUSTOMER"){
      return true;
    }else{return false;}
  };
  
  export default isCustomer;
