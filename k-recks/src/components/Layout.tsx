import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">K</span>
                    <span className="logo-text">株式会社ケイレックス</span>
                </Link>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="company-name">🄫 2020 K-Recks inc.</p>
                <p className="company-info">☎ 078-806-8712</p>
                <p className="company-info">
                    <a href="https://www.k-recks.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        https://www.k-recks.com/
                    </a>
                </p>
            </div>
        </footer>
    );
}
