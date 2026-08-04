import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  const fetchIssues = () => {
    fetch('https://portfolio-api-backend-cvc2.onrender.com/api/projects/1/issues')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setIssues(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    fetch('https://portfolio-api-backend-cvc2.onrender.com/api/projects/1/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setNewTitle('');
          fetchIssues();
        }
      })
      .catch(error => console.error('Error creating issue:', error));
  };

  const handleDelete = (issueId) => {
    if (!window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบงานนี้?')) return;

    fetch(`https://portfolio-api-backend-cvc2.onrender.com/api/projects/1/issues/${issueId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          fetchIssues(); 
        }
      })
      .catch(error => console.error('Error deleting issue:', error));
  };

  // --- เพิ่มฟังก์ชันใหม่: อัปเดตสถานะเป็น Done ---
  const handleCompleteStatus = (issueId) => {
    fetch(`https://portfolio-api-backend-cvc2.onrender.com/api/projects/1/issues/${issueId}`, {
      method: 'PUT', // ใช้ PUT สำหรับการอัปเดต
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Done' }) // ส่งสถานะใหม่ไปให้หลังบ้าน
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          fetchIssues(); // โหลดรายการใหม่เพื่อให้หน้าจออัปเดตสถานะทันที
        }
      })
      .catch(error => console.error('Error updating issue:', error));
  };

  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <img src="/getstudentimageftp.jpg" alt="My Profile" className="profile-img" width="150" height="150" />
        <h1>Portfolio & Task Board</h1>
      </header>
      
      <main>
        <h2>สถานะโปรเจคและงาน</h2>
        <ul className="project-grid">
          <li className="project-card">
            <h4>🎨 ปั้นโมเดล Blender</h4>
            <p>กำลังศึกษาและทำอยู่</p>
          </li>
          <li className="project-card">
            <h4>🎮 โปรเจคเกี่ยวกับเกม</h4>
            <p>พัฒนาด้วย Unity</p>
          </li>
          <li className="project-card">
            <h4>💻 ระบบเว็บแอปพลิเคชัน</h4>
            <p>React + Express API</p>
          </li>
        </ul>
        
        <div className="issue-list-container">
          <h2>📋 รายการ Issue จาก Database</h2>
          
          <form onSubmit={handleSubmit} className="issue-form">
            <input 
              type="text" 
              placeholder="เพิ่มงานใหม่ที่ต้องทำ..." 
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="issue-input"
            />
            <button type="submit" className="btn-submit">เพิ่มงาน</button>
          </form>

          {issues.length === 0 ? (
            <p className="loading-text">กำลังโหลดข้อมูล หรือยังไม่มี Issue...</p>
          ) : (
            <ul className="task-list">
              {issues.map(issue => (
                <li key={issue.id} className="task-item">
                  <div className="task-content">
                    {/* ขีดฆ่าข้อความถ่างานเสร็จแล้ว */}
                    <span className="task-title" style={{ textDecoration: issue.status === 'Done' ? 'line-through' : 'none', color: issue.status === 'Done' ? '#888' : 'white' }}>
                      {issue.title}
                    </span>
                    <span className="task-meta">
                      สถานะ: <span className="status-badge" style={{ color: issue.status === 'Done' ? '#4caf50' : '#a164ff' }}>{issue.status}</span> | 
                      ผู้รับผิดชอบ: {issue.assignee ? issue.assignee.username : 'ยังไม่มอบหมายงาน'}
                    </span>
                  </div>
                  
                  {/* จัดกลุ่มปุ่มให้อยู่ด้วยกัน */}
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                    
                    {/* ปุ่ม เสร็จแล้ว (จะซ่อนเมื่อสถานะเป็น Done) */}
                    {issue.status !== 'Done' && (
                      <button 
                        onClick={() => handleCompleteStatus(issue.id)} 
                        style={{ backgroundColor: '#4caf50', padding: '6px 12px', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}
                      >
                        ✔ เสร็จแล้ว
                      </button>
                    )}

                    {/* ปุ่ม ลบ */}
                    <button 
                      onClick={() => handleDelete(issue.id)} 
                      style={{ backgroundColor: '#ff4b4b', padding: '6px 12px', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}
                    >
                      ลบ
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;