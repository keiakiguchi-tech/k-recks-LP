/**
 * 解体業見積もりサービス - JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initForm();
    initAdminPage();
    initStatusSelects();
});

/**
 * フォーム初期化
 */
function initForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        // フォームデータをローカルストレージに保存
        const formData = {
            name: document.getElementById('name')?.value || '',
            address: document.getElementById('address')?.value || '',
            demolitionTypes: getSelectedDemolitionTypes(),
            sizeMin: document.getElementById('sizeMin')?.value || '',
            sizeMax: document.getElementById('sizeMax')?.value || '',
            timestamp: new Date().toISOString(),
            status: '未対応'
        };

        // 既存のリクエストを取得
        const requests = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
        requests.push(formData);
        localStorage.setItem('quoteRequests', JSON.stringify(requests));
    });
}

/**
 * 選択された解体タイプを取得
 */
function getSelectedDemolitionTypes() {
    const checkboxes = document.querySelectorAll('input[name="demolitionType"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

/**
 * 管理ページ初期化
 */
function initAdminPage() {
    const requestsTable = document.getElementById('requestsTable');
    if (!requestsTable) return;

    // ローカルストレージからリクエストを取得
    const requests = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
    
    if (requests.length > 0) {
        // テーブルを更新
        updateRequestsTable(requests);
    }

    // 検索機能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterRequests(this.value);
        });
    }
}

/**
 * リクエストテーブルを更新
 */
function updateRequestsTable(requests) {
    const tbody = document.getElementById('requestsTable');
    if (!tbody || requests.length === 0) return;

    // 既存のサンプルデータを保持しつつ、新しいリクエストを追加
    const existingRows = tbody.innerHTML;
    
    requests.forEach((request, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${escapeHtml(request.name)}</td>
            <td>${escapeHtml(request.address)}</td>
            <td>
                <select class="status-select" data-index="${index}">
                    <option value="未対応" ${request.status === '未対応' ? 'selected' : ''}>未対応</option>
                    <option value="見積もり中" ${request.status === '見積もり中' ? 'selected' : ''}>見積もり中</option>
                    <option value="お客様返事待ち" ${request.status === 'お客様返事待ち' ? 'selected' : ''}>お客様返事待ち</option>
                    <option value="発注完了" ${request.status === '発注完了' ? 'selected' : ''}>発注完了</option>
                    <option value="工事完了" ${request.status === '工事完了' ? 'selected' : ''}>工事完了</option>
                </select>
            </td>
        `;
        tbody.insertBefore(row, tbody.firstChild);
    });
}

/**
 * リクエストをフィルター
 */
function filterRequests(query) {
    const tbody = document.getElementById('requestsTable');
    if (!tbody) return;

    const rows = tbody.getElementsByTagName('tr');
    const lowerQuery = query.toLowerCase();

    Array.from(rows).forEach(row => {
        const name = row.cells[0]?.textContent.toLowerCase() || '';
        const address = row.cells[1]?.textContent.toLowerCase() || '';
        
        if (name.includes(lowerQuery) || address.includes(lowerQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

/**
 * ステータス選択の初期化
 */
function initStatusSelects() {
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function() {
            updateStatusStyle(this);
            
            // ローカルストレージのデータを更新
            const index = this.dataset.index;
            if (index !== undefined) {
                const requests = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
                if (requests[index]) {
                    requests[index].status = this.value;
                    localStorage.setItem('quoteRequests', JSON.stringify(requests));
                }
            }
        });

        // 初期スタイル適用
        updateStatusStyle(select);
    });
}

/**
 * ステータスに応じてスタイルを更新
 */
function updateStatusStyle(select) {
    // 既存のステータスクラスを削除
    select.classList.remove('status-in-progress', 'status-waiting', 'status-ordered', 'status-completed');
    
    // 新しいステータスクラスを追加
    switch (select.value) {
        case '見積もり中':
            select.classList.add('status-in-progress');
            break;
        case 'お客様返事待ち':
            select.classList.add('status-waiting');
            break;
        case '発注完了':
            select.classList.add('status-ordered');
            break;
        case '工事完了':
            select.classList.add('status-completed');
            break;
    }
}

/**
 * HTMLエスケープ
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
