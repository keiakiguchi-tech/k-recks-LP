import React from 'react';
import { Button } from './Button';
import { Phone, MapPin, Mail } from 'lucide-react';
import '../styles/footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    {/* Company Info */}
                    <div className="footer-column">
                        <h3>K-Recks</h3>
                        <p className="footer-description manual-break">
                            <span className="footer-description-compact">安心・安全・丁寧な解体工事を。</span><br />
                            お客様の新しいスタートを、<br />
                            サポートします。
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div className="footer-contact-item">
                                <Phone size={18} />
                                <span>078-806-8712</span>
                            </div>
                            <div className="footer-contact-item">
                                <MapPin size={18} />
                                <span>神戸市西区伊川谷町有瀬1524-3 陽光ビル１階南</span>
                            </div>
                            <div className="footer-contact-item">
                                <Mail size={18} />
                                <span>k.recks.plus@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">ホーム</a></li>
                            <li><a href="#services">サービス内容</a></li>
                            <li><a href="#about">私たちについて</a></li>
                            <li><a href="https://k-recks-omega.vercel.app/">お見積もり</a></li>
                        </ul>
                    </div>

                    {/* CTA Area */}
                    <div className="footer-column">
                        <h4>まずはお見積もりから</h4>
                        <p className="footer-description manual-break">
                            LINEで簡単2分！<br />
                            概算見積もりが、<br />
                            すぐにわかります。
                        </p>
                        <a href="https://k-recks-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)', border: 'none' }} fullWidth>
                                無料見積もりを開始
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="copyright">
                    © 2020 K-Recks inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
