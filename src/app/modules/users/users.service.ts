import { USER_ROLE_ENUM } from "./users.interface";
import userModel from "./users.model"

const getAllUsersFromDB = async () => {
    const result = await userModel.find({})
    return result;
}

const promoteUserRole = async (promotingUserId: string) => {
    const result = await userModel.findOneAndUpdate({ _id: promotingUserId }, { role: USER_ROLE_ENUM.ADMIN }, { new: true })
    return result;
}
const demoteUserRole = async (demotingUserId: string) => {
    const result = await userModel.findOneAndUpdate({ _id: demotingUserId }, { role: USER_ROLE_ENUM.USER }, { new: true })
    return result;
}
export const UserServices = {
    getAllUsersFromDB, promoteUserRole,demoteUserRole
}