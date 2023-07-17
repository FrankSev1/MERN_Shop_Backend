import express, { Request, Response } from 'express';
import { User } from '../models/user';

const userRouter = express.Router();

// GET /users
userRouter.get('/', async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // POST /users
  userRouter.post('/', async (req: Request, res: Response) => {
    try {
      const { name, email, passwordHash, street, apartment, city, zip, country, phone } = req.body;
      const user = new User({ name, email, passwordHash, street, apartment, city, zip, country, phone });
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  export default userRouter;