import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Quote {
    id: number;
    name: string;
    address: string;
    line_name: string;
    status: string;
}

export function AdminPage() {
    const navigate = useNavigate();
    const [quotes, setQuotes] = useState<Quote[]>([
        { id: 1, name: '田中 一郎', address: '東京都渋谷区1-2-3', line_name: 'tanaka_1', status: '対応中' },
        { id: 2, name: '山田 花子', address: '東京都新宿区4-5-6', line_name: 'hanako_yama', status: '見積待ち' },
        { id: 3, name: '佐藤 太郎', address: '東京都品川区7-8-9', line_name: 'taro_sato', status: '受注済み' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleStatusChange = (id: number, newStatus: string) => {
        setQuotes(quotes.map(quote =>
            quote.id === id ? { ...quote, status: newStatus } : quote
        ));
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

    const filteredQuotes = quotes.filter(quote =>
        quote.name.includes(searchTerm) ||
        quote.address.includes(searchTerm) ||
        quote.line_name.includes(searchTerm)
    );

    return (
        <div className="app-container">
            <header className="admin-header">
                <h1 className="admin-title">管理画面</h1>
            </header>

            <main className="admin-content">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="検索 (名前、住所、LINE名)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-btn">🔍</button>
                </div>

                <div className="filter-container">
                    <button className="filter-btn">📅 日付</button>
                    <button className="filter-btn">📊 ステータス</button>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>お名前</th>
                                <th>住所</th>
                                <th>ラインのお名前</th>
                                <th>ステータス</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredQuotes.map(quote => (
                                <tr
                                    key={quote.id}
                                    onClick={() => navigate(`/admin/${quote.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{quote.name}</td>
                                    <td>{quote.address}</td>
                                    <td>{quote.line_name}</td>
                                    <td onClick={(e) => e.stopPropagation()}>
                                        <select
                                            className={`status-select ${getStatusClass(quote.status)}`}
                                            value={quote.status}
                                            onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                                        >
                                            <option value="対応中">対応中</option>
                                            <option value="見積待ち">見積待ち</option>
                                            <option value="受注済み">受注済み</option>
                                            <option value="完了">完了</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
