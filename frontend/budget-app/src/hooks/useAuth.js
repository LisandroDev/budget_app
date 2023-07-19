import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = window?.sessionStorage.getItem("jwt_token");
      setIsAuthenticated(!!token); 
        
    };

    if (typeof window !== "undefined") {
      checkAuth();
      console.log(isAuthenticated);
    }
  }, [isAuthenticated]);
  return isAuthenticated;
};

export default useAuth;
