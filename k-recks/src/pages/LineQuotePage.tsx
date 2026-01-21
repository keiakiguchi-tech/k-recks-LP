import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

export function LineQuotePage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const lineNameFromUrl = searchParams.get('line_name') || '';

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        demolitionScope: '',
        buildingType: '',
        floors: '',
        structure: '',
        buildingSize: '',
        reason: '',
        timeline: '',
        notes: '',
        line_name: lineNameFromUrl // Initialize with URL param
    });

    useEffect(() => {
        if (lineNameFromUrl) {
            setFormData(prev => ({ ...prev, line_name: lineNameFromUrl }));
        }
    }, [lineNameFromUrl]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock Save to Supabase
        console.log('Saving to Supabase:', formData);
        // TODO: Implement actual Supabase saving logic here
        // const { error } = await supabase.from('quotes').insert([formData]);

        navigate('/thank-you');
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <div className="form-card">
                    <h1 className="form-title">簡単お見積もり依頼 (LINE連携)</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Hidden Line Name Field (Optional, for debugging or manual override if needed) */}
                        <input type="hidden" name="line_name" value={formData.line_name} />

                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                お名前 <span className="required-badge">必須</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="例：山田 太郎"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                電話番号 <span className="required-badge">必須</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-input"
                                placeholder="例：090-1234-5678"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Address Field */}
                        <div className="form-group">
                            <label htmlFor="address" className="form-label">
                                解体する建物の住所 <span className="required-badge">必須</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-input"
                                placeholder="例：東京都渋谷区〇〇1-2-3"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Demolition Scope */}
                        <div className="form-group">
                            <label className="form-label">
                                解体の種類 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['建物全体の解体', '建物の一部の解体', '内装のみを解体', 'その他（庭石、塀、カーポートなど）'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="demolitionScope"
                                            value={option}
                                            checked={formData.demolitionScope === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Building Type */}
                        <div className="form-group">
                            <label className="form-label">
                                建物の種類 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['一戸建て住宅', 'アパート', 'マンション', 'ビル', '長屋', 'その他（倉庫、蔵、車庫など）'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="buildingType"
                                            value={option}
                                            checked={formData.buildingType === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Building Floors */}
                        <div className="form-group">
                            <label className="form-label">
                                階数 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['1階建', '2階建', '3階建', '4階建以上'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="floors"
                                            value={option}
                                            checked={formData.floors === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Building Structure */}
                        <div className="form-group">
                            <label className="form-label">
                                構造 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['木造', '鉄骨造', 'コンクリート造', 'その他', 'わからない'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="structure"
                                            value={option}
                                            checked={formData.structure === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Building Size */}
                        <div className="form-group">
                            <label className="form-label">
                                延床面積 <span className="required-badge">必須</span>
                            </label>
                            <select
                                id="buildingSize"
                                name="buildingSize"
                                className="form-select"
                                value={formData.buildingSize}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">選択してください</option>
                                <option value="1坪～10坪">1坪～10坪（3.3㎡～33.1㎡）</option>
                                <option value="11坪～20坪">11坪～20坪（36.4㎡～66.1㎡）</option>
                                <option value="21坪～30坪">21坪～30坪（69.4㎡～99.2㎡）</option>
                                <option value="31坪～40坪">31坪～40坪（102.5㎡～132.2㎡）</option>
                                <option value="41坪～50坪">41坪～50坪（135.5㎡～165.3㎡）</option>
                                <option value="51坪～60坪">51坪～60坪（168.6㎡～198.3㎡）</option>
                                <option value="61坪～70坪">61坪～70坪（201.7㎡～231.4㎡）</option>
                                <option value="71坪～80坪">71坪～80坪（234.7㎡～264.5㎡）</option>
                                <option value="81坪～90坪">81坪～90坪（267.8㎡～297.5㎡）</option>
                                <option value="91坪～100坪">91坪～100坪（300.8㎡～330.6㎡）</option>
                                <option value="101坪以上">101坪以上（333.9㎡～）</option>
                            </select>
                        </div>

                        {/* Demolition Reason */}
                        <div className="form-group">
                            <label className="form-label">
                                解体理由 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['空き家の処分', '現在住んでいる建物の建替', '購入予定の建物の建替', '更地にして売却', '借地の返却', 'その他'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="reason"
                                            value={option}
                                            checked={formData.reason === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Desired Timeline */}
                        <div className="form-group">
                            <label className="form-label">
                                希望時期 <span className="required-badge">必須</span>
                            </label>
                            <div className="select-list">
                                {['1か月以内に工事を着工したい', '3か月以内に工事を着工したい', '6か月以内に工事を着工したい', '12か月以内に工事を着工したい', '1年以上先'].map(option => (
                                    <label key={option} className="select-item">
                                        <input
                                            type="radio"
                                            name="timeline"
                                            value={option}
                                            checked={formData.timeline === option}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span className="select-text">{option}</span>
                                        <span className="select-check">✓</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="form-group">
                            <label htmlFor="notes" className="form-label">その他ご要望</label>
                            <textarea
                                id="notes"
                                name="notes"
                                className="form-input form-textarea"
                                placeholder="ご質問やご要望がございましたらご記入ください"
                                rows={4}
                                value={formData.notes}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="submit-btn" style={{ background: '#06C755' }}>
                            見積もりを送信する
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
