import { model, models, Schema, Document } from "mongoose";

interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {}
const TagSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = models?.tag || model<ITag>("Tag", TagSchema);

export default Tag;