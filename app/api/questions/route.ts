import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Question from '@/models/Question';

// GET: List all questions
export async function GET() {
  await dbConnect();
  const questions = await Question.find({});
  return NextResponse.json(questions);
}

// POST: Create a new question
export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const question = await Question.create(data);
    return NextResponse.json(question, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
} 