import { model, models, Schema, Types, Document } from "mongoose";

interface ICollection {
  author: Types.ObjectId;
  questions: Types.ObjectId;
}

export interface ICollectionDoc extends ICollection, Document {}
const CollectionSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questions: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true }
);

const Collection =
  models?.collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
