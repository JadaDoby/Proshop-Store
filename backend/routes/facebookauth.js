
import express from 'express';
import { validateFacebookToken } from '../utils/Facebooktoken.js';



const router = express.Router();



//Authentication route
router.post('/api/auth/facebook', async (req, res) => {
  const inputToken = req.body.token; // Token received from the client
  if (!inputToken) {
    return res.status(400).json({ message: 'Token is required.' });
  }

  const validationResponse = await validateFacebookToken(inputToken);
  if (!validationResponse || !validationResponse.data.is_valid) {
    return res.status(401).json({ message: 'Invalid Facebook token.' });
  }

  res.status(200).json({ message: 'Facebook token validated successfully.', user: validationResponse.data.user });
});

export default router;
