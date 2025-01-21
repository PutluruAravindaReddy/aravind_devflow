import { model, models, Schema, Types, Document } from "mongoose";

interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  answer: string;
  upvotes: number;
  downvotes: number;
}

export interface IAnswerDoc extends IAnswer, Document {}
const AnswerSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    answer: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
