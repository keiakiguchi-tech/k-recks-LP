import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';

export function NotFoundPage() {
    return (
        <div className="app-container">
            <SEOHead title="ページが見つかりません | 株式会社K-Recks" />
            <Header />
            <main className="main-content" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#1a365d' }}>404 - ページが見つかりません</h1>
                <p style={{ marginBottom: '30px', color: '#666' }}>お探しのページは削除されたか、移動した可能性があります。</p>
                <Link to="/" className="submit-btn" style={{ display: 'inline-block', maxWidth: '200px', textDecoration: 'none' }}>
                    トップページへ戻る
                </Link>
            </main>
            <Footer />
        </div>
    );
}
