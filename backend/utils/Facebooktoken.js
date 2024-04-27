
import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();

export const validateFacebookToken = async (inputToken) => {
  const appToken =1463147267922919|UVGEANObpn8T7vGAYYIIdVyF2WA ;
  const url = `https://graph.facebook.com/debug_token?input_token=${inputToken}&access_token=${appToken}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error validating Facebook token:', error);
    return null;
  }
};
