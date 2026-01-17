import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const sellerController: T = {};
sellerController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send(" Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

sellerController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send(" Login Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

sellerController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send(" Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

sellerController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
       console.log("body:", req.body);

       const memberService = new MemberService();
       const result= await memberService.proccesLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

sellerController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.SELLER;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

export default sellerController;