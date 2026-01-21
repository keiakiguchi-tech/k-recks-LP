import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';
import { supabase } from '../lib/supabase';

interface Quote {
    id: number;
    name: string;
    phone: string;
    address: string;
    line_name: string;
    status: string;
    created_at: string;
}

export function AdminPage() {
    const navigate = useNavigate();
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('quotes')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setQuotes(data || []);
        } catch (error) {
            console.error('Error fetching quotes:', error);
            alert('データの取得に失敗しました');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id: number, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('quotes')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // ローカルの状態を更新
            setQuotes(quotes.map(quote =>
                quote.id === id ? { ...quote, status: newStatus } : quote
            ));
        } catch (error) {
            console.error('Error updating status:', error);
            alert('ステータスの更新に失敗しました');
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            // DBのステータス値に合わせて調整が必要かもしれません
            // 現在のプルダウンの値と一致させています
            case '対応中': return 'status-in-progress';
            case '見積待ち': return 'status-waiting';
            case '受注済み': return 'status-ordered';
            case '完了': return 'status-completed';
            default: return '';
        }
    };

    const filteredQuotes = quotes.filter(quote =>
        (quote.name?.includes(searchTerm) || false) ||
        (quote.address?.includes(searchTerm) || false) ||
        (quote.line_name?.includes(searchTerm) || false) ||
        (quote.phone?.includes(searchTerm) || false)
    );

    const formatDate = (dateString: string) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="app-container">
            <Header />

            <main className="main-content">
                <div className="form-card" style={{ maxWidth: '1200px' }}>
                    <header className="admin-header" style={{ marginBottom: '20px', borderRadius: '8px' }}>
                        <h1 className="admin-title">管理画面</h1>
                    </header>

                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="検索 (名前、電話番号、住所、LINE名)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="search-btn">🔍</button>
                    </div>

                    <div className="filter-container">
                        <button className="filter-btn" onClick={fetchQuotes}>🔄 更新</button>
                    </div>

                    <div className="table-container">
                        {loading ? (
                            <p style={{ padding: '20px', textAlign: 'center' }}>読み込み中...</p>
                        ) : (
                            <table className="data-table" style={{ fontSize: '12px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '90px' }}>日付</th>
                                        <th style={{ width: '100px' }}>お名前</th>
                                        <th style={{ width: '100px' }}>電話番号</th>
                                        <th>住所</th>
                                        <th style={{ width: '100px' }}>LINE名</th>
                                        <th style={{ width: '90px' }}>ステータス</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredQuotes.map(quote => (
                                        <tr
                                            key={quote.id}
                                            onClick={() => navigate(`/admin/dashboard/${quote.id}`)}
                                            style={{ cursor: 'pointer' }}
                                            className="admin-row"
                                        >
                                            <td style={{ whiteSpace: 'nowrap' }}>{formatDate(quote.created_at)}</td>
                                            <td style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{quote.name}</td>
                                            <td style={{ whiteSpace: 'nowrap' }}>{quote.phone}</td>
                                            <td style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{quote.address}</td>
                                            <td style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{quote.line_name || '-'}</td>
                                            <td onClick={(e) => e.stopPropagation()}>
                                                <select
                                                    className={`status-select ${getStatusClass(quote.status)}`}
                                                    value={quote.status || '未対応'}
                                                    onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                                                    style={{ fontSize: '11px', padding: '2px 4px', minWidth: 'auto', width: '100%' }}
                                                >
                                                    <option value="未対応">未対応</option>
                                                    <option value="対応中">対応中</option>
                                                    <option value="見積待ち">見積待ち</option>
                                                    <option value="受注済み">受注済み</option>
                                                    <option value="完了">完了</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredQuotes.length === 0 && (
                                        <tr>
                                            <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                                                データがありません
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            <style>{`
                .data-table th, .data-table td {
                    padding: 8px 4px !important;
                    vertical-align: middle;
                }
                .status-select {
                    height: 28px;
                }
                @media (max-width: 768px) {
                   .form-card {
                       padding: 10px !important;
                   }
                }
            `}</style>
        </div>
    );
}
