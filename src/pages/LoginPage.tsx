import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

export function LoginPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('パスワードが間違っています');
        }
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <div className="form-card" style={{ maxWidth: '400px', margin: '40px auto' }}>
                    <h1 className="admin-title" style={{ fontSize: '24px', marginBottom: '20px' }}>管理画面ログイン</h1>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">パスワード</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="パスワードを入力"
                                required
                            />
                        </div>

                        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

                        <button type="submit" className="submit-btn">
                            ログイン
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
