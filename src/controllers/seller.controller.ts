import { Request, Response } from "express";

import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";

const sellerController: T = {};
sellerController.goHome = (req: Request, res: Response) => {
  try {
    console.log('goHome');
    res.send(" Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

sellerController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('getLogin');
    res.send(" Login Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

sellerController.getSignup = (req: Request, res: Response) => {
  try {
    console.log('getSignup');
    res.send(" Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

  sellerController.processLogin = (req: Request, res: Response) => {
  try {
    console.log('processLogin');
       res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin:", err);
  }
};

  sellerController.processSignup = (req: Request, res: Response) => {
  try {
    console.log('processSignup');
       res.send("DONE");
  } catch (err) {
    console.log("Error, processSignup:", err);
  }
};

  

export default sellerController;
