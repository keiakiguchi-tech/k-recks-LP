import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import '../styles/features.css'; // Reusing features.css for shared CTA styles if any, or specific logic

export const CTASection: React.FC = () => {
    return (
        <section className="cta-section section-padding" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}>
            <div className="container">
                <h2 className="cta-title">
                    解体工事の不安、まずは解消しませんか？
                </h2>
                <p className="cta-description">
                    LINEまたはWebフォームから、24時間365日お見積もり依頼を受け付けております。<br />
                    匿名での概算見積もりも可能です。
                </p>
                <a href="https://k-recks-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" style={{ backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-accent)', fontSize: '1.2rem', padding: '18px 40px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            今すぐ無料で見積もりする <ArrowRight size={24} />
                        </span>
                    </Button>
                </a>
            </div>
        </section>
    );
};
