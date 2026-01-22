import React from 'react';
import { Coins, ArrowRight, SquareParking } from 'lucide-react';
import '../styles/features.css';

export const Features: React.FC = () => {
    const features = [
        {
            icon: <Coins size={40} color="#003882" />,
            title: "助成金サポート",
            description: (
                <>
                    解体工事に関わる面倒な助成金申請の手続きをフルサポート。<br />
                    専門的な知識で、<br />
                    お客様の負担を最小限に抑えます。
                </>
            )
        },
        {
            icon: <ArrowRight size={40} color="#003882" />,
            title: "一貫対応",
            description: (
                <>
                    内装解体から家屋全体の解体、<br />
                    さらには不用品の処分まで。<br />
                    複数の業者に頼む手間を省き、<br />
                    ワンストップで対応します。
                </>
            )
        },
        {
            icon: <SquareParking size={40} color="#003882" />,
            title: "土地活用相談",
            description: (
                <>
                    解体後の土地をどう活かすか。<br />
                    駐車場経営、建て替えなど、不動産のプロが最適なプランをご提案します。
                </>
            )
        }
    ];

    return (
        <section id="services" className="features-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">K-Recksの強み</h2>
                    <p className="section-subtitle">
                        解体工事だけではない、お客様に寄り添った付加価値を提供します。
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description manual-break">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
