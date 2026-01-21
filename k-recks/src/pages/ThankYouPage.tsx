import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

export function ThankYouPage() {
    return (
        <div className="app-container">
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
