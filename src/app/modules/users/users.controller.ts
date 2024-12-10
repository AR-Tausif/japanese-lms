import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./users.service";

const getAllUsersFromDB = catchAsync(async (req, res) => {

    const result = await UserServices.getAllUsersFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "retrived all users",
        data: result
    });
})
const promoteUserRole = catchAsync(async (req, res) => {
    const promotingUserId = req.params.promotingUserId
    const result = await UserServices.promoteUserRole(promotingUserId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "promoted to admin",
        data: result
    });
})
const demoteUserRole = catchAsync(async (req, res) => {
    const demotingUserId = req.params.demotingUserId
    const result = await UserServices.demoteUserRole(demotingUserId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "demoted to admin",
        data: result
    });
})

export const UserController = {
    getAllUsersFromDB,
    promoteUserRole,
    demoteUserRole
}