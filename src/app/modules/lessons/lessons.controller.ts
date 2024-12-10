import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { LessonServices } from "./lessons.service";

const createNewLesson = catchAsync(async (req, res) => {
    const userId = req.params?.userId;
    const { name, lessonNumber } = req.body;
    const result = await LessonServices.createNewLesson({ lessonNumber, name, createdBy: userId });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "created a new lesson",
        data: result
    });
})
const getAllLessons = catchAsync(async (req, res) => {
    const result = await LessonServices.getAllLessons()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "all lessons retrived",
        data: result
    });
})


const getSingleLessonById = catchAsync(async (req, res) => {
    const lessonId = req.params?.lessonId
    const result = await LessonServices.getSingleLessonById(lessonId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "single lesson retrived",
        data: result
    });
})
const updateSingleLessonById = catchAsync(async (req, res) => {
    const lessonId = req.params?.lessonId;
    const { name, lessonNumber } = req.body;
    const result = await LessonServices.updateSingleLessonById(lessonId, {name, lessonNumber})

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "single lesson deleted",
        data: { lessonId: result?._id, deletedBy: req.user?.userId }
    });
})
const deleteSingleLessonById = catchAsync(async (req, res) => {
    const lessonId = req.params?.lessonId
    const result = await LessonServices.deleteSingleLessonById(lessonId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "single lesson deleted",
        data: { lessonId: result?._id, deletedBy: req.user?.userId }
    });
})


export const LessonController = {
    createNewLesson,
    getAllLessons,
    getSingleLessonById,
    updateSingleLessonById,
    deleteSingleLessonById
}