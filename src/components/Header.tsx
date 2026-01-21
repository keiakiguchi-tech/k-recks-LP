import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import '../styles/header.css';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    K-Recks
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <a href="#services" className="nav-link">サービス</a>
                    <a href="#about" className="nav-link">私たちについて</a>
                    <a href="https://k-recks-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">無料見積もり</Button>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#services" className="mobile-nav-link" onClick={closeMenu}>サービス</a>
                    <a href="#about" className="mobile-nav-link" onClick={closeMenu}>私たちについて</a>
                    <a href="https://k-recks-omega.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        <Button variant="primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>無料見積もり</Button>
                    </a>
                </div>
            </div>
        </header>
    );
};
