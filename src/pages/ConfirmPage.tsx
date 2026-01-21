import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';
import { SEOHead } from '../components/SEOHead';

export function ConfirmPage() {
    return (
        <div className="app-container">
            <SEOHead title="入力内容の確認 | 株式会社K-Recks" description="お見積もり依頼の入力内容をご確認ください。" />
            <Header />
            <main className="main-content confirm-content">
                <div className="confirm-card">
                    <p className="confirm-title">
                        お見積もり依頼を受け付けました。<br />
                        続いてLINEのお友達登録を<br />
                        お願いいたします。
                    </p>

                    <div className="line-logo-container">
                        <img src="/line-icon.png" alt="LINE" className="line-logo-img" />
                    </div>

                    <a
                        href="https://lin.ee/63xUTcN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="line-add-btn"
                    >
                        LINEで友だち追加
                    </a>

                    <Link to="/" className="line-link">
                        トップページに戻る
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
