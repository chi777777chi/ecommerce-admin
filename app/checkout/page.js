'use client';

export default function Checkout() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* 頁面標題 */}
      <header style={{ borderBottom: '1px solid #ddd', padding: '20px 0', marginBottom: '20px' }}>
        <h1>結帳頁</h1>
      </header>

      {/* 主內容區域 */}
      <main style={{ display: 'flex', gap: '20px' }}>
        {/* 左側：收件人資訊與付款方式 */}
        <section style={{ flex: 2, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>收件人資訊</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label>
              姓名：
              <input type="text" placeholder="請輸入姓名" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
            <label>
              電話：
              <input type="tel" placeholder="請輸入電話" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
            <label>
              地址：
              <input type="text" placeholder="請輸入地址" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
          </form>

          <h2 style={{ marginTop: '30px' }}>付款方式</h2>
          <div>
            <label>
              <input type="radio" name="payment" value="credit_card" />
              信用卡
            </label>
            <label style={{ marginLeft: '15px' }}>
              <input type="radio" name="payment" value="cash_on_delivery" />
              貨到付款
            </label>
          </div>
        </section>

        {/* 右側：訂單摘要 */}
        <aside style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>訂單摘要</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>商品A</span>
              <span>$500</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>商品B</span>
              <span>$300</span>
            </li>
          </ul>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '10px' }}>
            <span>總金額</span>
            <span>$800</span>
          </div>
        </aside>
      </main>

      {/* 底部：提交按鈕 */}
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          確認結帳
        </button>
      </footer>
    </div>
  );
}
