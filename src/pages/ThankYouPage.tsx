import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

import { SEOHead } from '../components/SEOHead';

export function ThankYouPage() {
    return (
        <div className="app-container">
            <SEOHead title="送信完了 | 株式会社K-Recks" description="お見積もり依頼を受け付けました。" />
            <Header />
            <main className="main-content confirm-content">
                <div className="confirm-card">
                    <p className="confirm-title">
                        見積もり情報送信ありがとうございます。<br />
                        担当者よりご連絡いたしますので<br />
                        今しばらくお待ちください。
                    </p>

                    <div style={{ marginTop: '30px' }}>
                        <Link to="/" className="line-link">
                            トップページに戻る
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
