import mongoose, { Schema, Document } from 'mongoose';

export interface IOption {
  id: string;
  title: string;
  desc: string;
  count: number;
  voters: string[];
}

export interface IQuestion extends Document {
  questionId: string;
  author: string;
  locale: string;
  title: string;
  voteCount: number;
  caption: string;
  options: IOption[];
  categories: string[];
  aboutQuestion: string;
  questionSummary: string;
  comments: any[]; // We'll define the comment interface later
  versions: {
    locale: string;
    title: string;
    voteCount: number;
    caption: string;
    options: IOption[];
    categories: string[];
    aboutQuestion: string;
    questionSummary: string;
    comments: any[];
    dateModified: Date;
  }[];
}

const QuestionSchema: Schema = new Schema({
  questionId: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  locale: { type: String, required: true },
  title: { type: String, required: true },
  voteCount: { type: Number, default: 0 },
  caption: { type: String, required: true },
  options: [{
    id: String,
    title: String,
    desc: String,
    count: { type: Number, default: 0 },
    voters: [String]
  }],
  categories: [{ type: String }],
  aboutQuestion: { type: String, required: true },
  questionSummary: { type: String, required: true },
  comments: [{ type: Schema.Types.Mixed }],
  versions: [{
    locale: String,
    title: String,
    voteCount: { type: Number, default: 0 },
    caption: String,
    options: [{
      id: String,
      title: String,
      desc: String,
      count: { type: Number, default: 0 },
      voters: [String]
    }],
    categories: [{ type: String }],
    aboutQuestion: String,
    questionSummary: String,
    comments: [{ type: Schema.Types.Mixed }],
    dateModified: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

// Create indexes for better query performance
QuestionSchema.index({ questionId: 1 });
QuestionSchema.index({ categories: 1 });
QuestionSchema.index({ locale: 1 });

export default mongoose.models.Question || mongoose.model<IQuestion>('Question', QuestionSchema); 