import React from 'react';
import '../styles/about.css';

export const About: React.FC = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">私たちについて</h2>
                    <p className="section-subtitle">
                        神戸を拠点に、誠実な施工で地域の皆様に選ばれています。
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-description-wrapper">
                            <p className="about-description-paragraph manual-break">
                                株式会社K-Recksは、兵庫県神戸市を中心に家屋解体・内装解体を行っている専門業者です。
                            </p>
                            <p className="about-description-paragraph">
                                「解体」は単に建物を壊すだけではありません。そこに住まわれていた方の想い出を、<br />
                                大切にしながら、次の新しい一歩へのバトンを繋ぐ重要な役割だと考えています。
                            </p>
                            <p className="about-description-paragraph">
                                近隣の方々への配慮はもちろん、安全第一・法令順守を徹底し、スムーズな工事をお約束します。
                            </p>
                        </div>

                        <div className="company-profile">
                            <div className="profile-row">
                                <div className="profile-label">会社名</div>
                                <div className="profile-value">株式会社K-Recks</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">代表取締役</div>
                                <div className="profile-value">永島浩之</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">設立</div>
                                <div className="profile-value">2019年3月1日</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">所在地</div>
                                <div className="profile-value">神戸市西区伊川谷町有瀬1524-3 陽光ビル１階南</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">TEL / FAX</div>
                                <div className="profile-value">078-806-8712 / 078-806-8713</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">MAIL</div>
                                <div className="profile-value">k.recks.plus@gmail.com</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-label">事業内容</div>
                                <div className="profile-value">解体工事業</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="/images/about-k-recks.png"
                            alt="K-Recks Office / Workers"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
