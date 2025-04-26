import Link from "next/link";

async function getQuestion(id: string) {
  const res = await fetch(`http://localhost:3000/api/questions/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function QuestionDetail({ params }: { params: { id: string } }) {
  const question = await getQuestion(params.id);
  if (!question) {
    return (
      <main style={{ maxWidth: 800, margin: '32px auto', padding: 24 }}>
        <p>Question not found.</p>
        <Link href="/">Back to list</Link>
      </main>
    );
  }
  return (
    <main style={{ maxWidth: 900, margin: '32px auto', padding: 0, background: 'transparent' }}>
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '40px 36px', margin: '0 auto' }}>
        <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 18, color: '#222' }}>{question.title}</h1>
        <div style={{ marginBottom: 18, color: '#444', fontSize: 17 }}>
          <span style={{ fontWeight: 600 }}>Author:</span> {question.author} <br />
          <span style={{ fontWeight: 600 }}>Locale:</span> {question.locale} <br />
          <span style={{ fontWeight: 600 }}>Status:</span> {question.status} <br />
          <span style={{ fontWeight: 600 }}>Categories:</span> {question.categories?.join(", ")}
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontWeight: 600, color: '#1976d2' }}>Caption:</span>
          <div style={{ background: '#f7fafd', borderRadius: 8, padding: 16, marginTop: 6, color: '#222', fontSize: 17, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: question.caption }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontWeight: 600, color: '#1976d2' }}>About:</span>
          <div style={{ background: '#f7fafd', borderRadius: 8, padding: 16, marginTop: 6, color: '#222', fontSize: 17, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: question.aboutQuestion }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontWeight: 600, color: '#1976d2' }}>Summary:</span>
          <div style={{ background: '#f7fafd', borderRadius: 8, padding: 16, marginTop: 6, color: '#222', fontSize: 17, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: question.questionSummary }} />
        </div>
        <Link href="/" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 500, fontSize: 17 }}>Back to list</Link>
      </div>
    </main>
  );
} 