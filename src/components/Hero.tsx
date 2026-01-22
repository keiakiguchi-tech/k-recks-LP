import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* Abstract Background Shapes */}
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />

            <div className="container hero-content">
                <h1 className="hero-title manual-break">
                    家屋解体・内装解体は<br />
                    <span>K-Recks</span>へご相談下さい。
                </h1>
                <p className="hero-description manual-break">
                    安心・安全な施工と、助成金申請から<br />
                    解体後の土地活用まで。お客様の「これから」を<br />
                    トータルでサポートします。
                </p>

                <div className="hero-buttons">
                    <a href="https://k-recks-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                無料見積もりを開始 <ArrowRight size={20} />
                            </span>
                        </Button>
                    </a>
                    <a href="#services">
                        <Button variant="white" style={{ fontSize: '1.1rem', padding: '16px 32px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            サービス内容を見る
                        </Button>
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">2000+</div>
                        <div className="stat-label">施工実績</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">顧客満足度</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">Kobe</div>
                        <div className="stat-label">地域密着</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
