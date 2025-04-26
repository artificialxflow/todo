import Link from "next/link";

async function getQuestions() {
  const res = await fetch("http://localhost:3000/api/questions", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const questions = await getQuestions();
  return (
    <main style={{ maxWidth: 700, margin: '32px auto', padding: 16 }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 32 }}>Theological Questions</h1>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {questions.map((q: any) => (
            <li key={q._id} style={{ marginBottom: 20 }}>
              <Link
                href={`/questions/${q.questionId}`}
                className="question-link"
                style={{
                  display: 'block',
                  fontWeight: 600,
                  fontSize: 20,
                  color: '#222',
                  background: '#f7f7f7',
                  borderRadius: 8,
                  padding: '16px 20px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
              >
                {q.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style>{`
        .question-link:hover {
          background: #e9ecef !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07) !important;
        }
      `}</style>
    </main>
  );
}
