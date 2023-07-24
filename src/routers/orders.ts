import express from 'express';
import { Orders } from "../models/orders";
const ordersRouter = express.Router();

ordersRouter.get(`/`, async (req, res) =>{
    const orderList = await Orders.find();

    if(!orderList) {
        res.status(500).json({success: false})
    } 
    res.send(orderList);
})

export default ordersRouter;