import { model, Schema } from "mongoose";
import { TLesson } from "./lessons.interface";


const lessonSchema = new Schema<TLesson>({
  name: { type: String, required: true },
  lessonNumber: { type: Number, unique: true, required: true },
  createdBy: { type: String, require: true },
  isDeleted: { type: Boolean, default: false }
  // Consider adding other fields like description, image URL
},
  {
    timestamps: true,
    versionKey: false,
  });

// can include features of, when admin create lesson then will automatically increased the lesson number into database

const lessonsModel = model<TLesson>("Lesson", lessonSchema);
export default lessonsModel;
