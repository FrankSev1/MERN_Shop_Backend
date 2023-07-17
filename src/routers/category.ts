import express, { Request, Response } from 'express';
import { Category } from '../models/category';

const categoryRouter = express.Router();

// GET /category
categoryRouter.get('/', async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // POST /category
  categoryRouter.post('/', async (req: Request, res: Response) => {
    try {
      const { name, color, icons, image } = req.body;
      const category = new Category({ name, color, icons, image });
      const savedCategory = await category.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  export default categoryRouter;