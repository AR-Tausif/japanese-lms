// import httpStatus from 'http-status';
// import { JwtPayload } from 'jsonwebtoken';
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

import sendResponse from "../../utils/sendResponse";

// signup user controller function
const createUser = catchAsync(async (req, res) => {
  const {name, email, password, photo} = req.body;
  const result = await AuthServices.createUserIntoDB({
    name, 
    email,
    password,
    photo
  });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "user registered",
    data: result,
  });
});

// login user controller function
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, user } = result;

  // send cookie for storing refresh token
  res.cookie("refreshToken", refreshToken, {
    secure: false,
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user logged in",
    data: {
      token: accessToken,
      user,
    },
  });
});
// get current logged in user controller function
const getCurrentUser = catchAsync(async (req, res) => {
  const userId  = req?.user?.userId
  const result = await AuthServices.getCurrentUser(userId);

  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "retrived current user details",
    data: result
  });
});

export const AuthController = {
  createUser,
  loginUser,
  getCurrentUser
};
