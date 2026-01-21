import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuotePage } from './pages/QuotePage';
import { ConfirmPage } from './pages/ConfirmPage';
import { AdminPage } from './pages/AdminPage';
import { AdminDetailPage } from './pages/AdminDetailPage';
import { LineQuotePage } from './pages/LineQuotePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { LoginPage } from './pages/LoginPage';

import { ProtectedRoute } from './components/ProtectedRoute';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<QuotePage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/dashboard/:id" element={
            <ProtectedRoute>
              <AdminDetailPage />
            </ProtectedRoute>
          } />
          <Route path="/line-quote" element={<LineQuotePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
