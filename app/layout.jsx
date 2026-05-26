import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'StudyBuddy'
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{display:"flex"}}>
        <Sidebar />
        <main style={{padding:"20px"}}>
          {children}
        </main>
      </body>
    </html>
  );
}
