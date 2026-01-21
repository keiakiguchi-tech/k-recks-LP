import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

interface QuoteDetail {
    id: number;
    name: string;
    phone: string;
    address: string;
    demolition_scope: string;
    building_type: string;
    floors: string;
    structure: string;
    building_size: string;
    reason: string;
    timeline: string;
    notes: string;
    line_name: string;
    status: string;
    created_at: string;
}

export function AdminDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [quote, setQuote] = useState<QuoteDetail | null>(null);

    // Mock functionality for k-recks subfolder version
    useEffect(() => {
        if (id) {
            setQuote({
                id: Number(id),
                name: '田中 一郎',
                phone: '090-1234-5678',
                address: '東京都渋谷区1-2-3',
                demolition_scope: '建物全体の解体',
                building_type: '一戸建て住宅',
                floors: '2階建',
                structure: '木造',
                building_size: '31坪～40坪',
                reason: '空き家の処分',
                timeline: '3か月以内に工事を着工したい',
                notes: '特になし',
                line_name: 'tanaka_1',
                status: '対応中',
                created_at: new Date().toISOString()
            });
        }
    }, [id]);

    const handleStatusChange = (newStatus: string) => {
        if (!quote) return;
        setQuote({ ...quote, status: newStatus });
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case '対応中': return 'status-in-progress';
            case '見積待ち': return 'status-waiting';
            case '受注済み': return 'status-ordered';
            case '完了': return 'status-completed';
            default: return '';
        }
    };

    if (!quote) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <div className="form-card">
                    <div className="quote-header" style={{ marginBottom: '20px' }}>
                        <h1 className="quote-title">お見積もり詳細</h1>
                    </div>

                    <div className="detail-container">
                        <div className="detail-row">
                            <span className="detail-label">ステータス</span>
                            <span className="detail-value">
                                <select
                                    className={`status-select ${getStatusClass(quote.status)}`}
                                    value={quote.status || '未対応'}
                                    onChange={(e) => handleStatusChange(e.target.value)}
                                    style={{ width: 'auto', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                >
                                    <option value="未対応">未対応</option>
                                    <option value="対応中">対応中</option>
                                    <option value="見積待ち">見積待ち</option>
                                    <option value="受注済み">受注済み</option>
                                    <option value="完了">完了</option>
                                </select>
                            </span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">お名前</span>
                            <span className="detail-value">{quote.name}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">LINE名</span>
                            <span className="detail-value">{quote.line_name || '-'}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">電話番号</span>
                            <span className="detail-value">{quote.phone}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">住所</span>
                            <span className="detail-value">{quote.address}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">解体の種類</span>
                            <span className="detail-value">{quote.demolition_scope}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">建物の種類</span>
                            <span className="detail-value">{quote.building_type}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">階数</span>
                            <span className="detail-value">{quote.floors}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">構造</span>
                            <span className="detail-value">{quote.structure}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">延床面積</span>
                            <span className="detail-value">{quote.building_size}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">解体理由</span>
                            <span className="detail-value">{quote.reason}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">希望時期</span>
                            <span className="detail-value">{quote.timeline}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">その他ご要望</span>
                            <span className="detail-value" style={{ whiteSpace: 'pre-wrap' }}>{quote.notes || '-'}</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <button className="submit-btn" onClick={() => navigate('/admin')} style={{ maxWidth: '200px' }}>
                            一覧に戻る
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
            <style>{`
                .detail-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .detail-row {
                    display: flex;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 12px;
                }
                .detail-label {
                    flex: 0 0 150px;
                    font-weight: bold;
                    color: #555;
                }
                .detail-value {
                    flex: 1;
                    color: #333;
                }
                @media (max-width: 600px) {
                    .detail-row {
                        flex-direction: column;
                    }
                    .detail-label {
                        flex: auto;
                        margin-bottom: 4px;
                    }
                }
            `}</style>
        </div>
    );
}
