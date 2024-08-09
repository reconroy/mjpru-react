import { jwtDecode } from "jwt-decode"; 

const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
            
            // Check if the token is expired
            if (decodedToken.exp < currentTime) {
                console.log('Session expired');
                localStorage.removeItem('token');
                return null;
                
            }

            // Extract user ID from the token
            const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
            return userId;

        } catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    }
    
    console.log('No token found');
    return null;
};

export default getUserIdFromToken;
