import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";


const memberService = new MemberService();
const sellerController: T = {};
sellerController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

sellerController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

sellerController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

sellerController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.SELLER;
    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};


sellerController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.proccesLogin(input);

     // TODO: SESSIONS  AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};



export default sellerController;
