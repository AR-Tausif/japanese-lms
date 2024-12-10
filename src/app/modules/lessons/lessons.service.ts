import httpStatus from "http-status";
import AppError from "../../errors/AppErrors";
import { TLesson } from "./lessons.interface";
import lessonsModel from "./lessons.model";


const createNewLesson = async (payload: TLesson) => {
    const result = await lessonsModel.create({
        name: payload.name,
        lessonNumber: payload.lessonNumber,
        createdBy: payload.createdBy
    });
    return result;
}

const getAllLessons = async () => {
    const result = await lessonsModel.find({isDeleted:false})
    return result;
}
const getSingleLessonById = async (lessonId:string) => {
    const result = await lessonsModel.findById(lessonId)
    if(result?.isDeleted) throw new AppError(httpStatus.NOT_FOUND, "lesson was deleted")
    return result;
}
const updateSingleLessonById = async (lessonId:string, payload:Partial<TLesson>) => {
    const result = await lessonsModel.findByIdAndUpdate(lessonId, payload, {new:true})
    return result;
}
const deleteSingleLessonById = async (lessonId:string) => {
    const result = await lessonsModel.findByIdAndUpdate(lessonId, {isDeleted: true}, {new:true})
    return result;
}


export const LessonServices = {
    createNewLesson,
    getAllLessons,
    getSingleLessonById
}