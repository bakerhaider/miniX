import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
  {
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Post = models?.Post || model('Post', PostSchema);

export default Post;
