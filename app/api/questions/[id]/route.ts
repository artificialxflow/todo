import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Question from '@/models/Question';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const question = await Question.findOne({ questionId: params.id });
  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }
  return NextResponse.json(question);
} 