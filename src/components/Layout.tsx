import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="株式会社K-Recks" className="logo-image" style={{ height: '40px', width: 'auto' }} />
                </Link>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-image-container">
                <img src="/truck.png" alt="K-Recks Truck" className="footer-truck-image" />
            </div>
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
