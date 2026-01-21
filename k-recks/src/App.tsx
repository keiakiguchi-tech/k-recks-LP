import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuotePage } from './pages/QuotePage';
import { ConfirmPage } from './pages/ConfirmPage';
import { AdminPage } from './pages/AdminPage';
import { AdminDetailPage } from './pages/AdminDetailPage';
import { LineQuotePage } from './pages/LineQuotePage';
import { ThankYouPage } from './pages/ThankYouPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/:id" element={<AdminDetailPage />} />
        <Route path="/line-quote" element={<LineQuotePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
