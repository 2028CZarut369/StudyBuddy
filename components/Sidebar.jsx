'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{width:"200px", padding:"20px", background:"#eee"}}>
      <h2>StudyBuddy</h2>
      <nav>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/gpa-calculator">GPA</Link></p>
        <p><Link href="/assignments">Assignments</Link></p>
      </nav>
    </aside>
  );
}
