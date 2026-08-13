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

  const handleCompleteStatus = (issueId) => {
    fetch(`https://portfolio-api-backend-cvc2.onrender.com/api/projects/1/issues/${issueId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Done' })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          fetchIssues();
        }
      })
      .catch(error => console.error('Error updating issue:', error));
  };

  return (
    <div className="portfolio-container">
      
      {/* ส่วนหัว: โปรไฟล์และชื่อ */}
      <div className="profile-section">
        <img 
          src="/getstudentimageftp.jpg" 
          alt="My Profile" 
          className="profile-image" 
        />
        <h1 className="portfolio-title">
          Hi, I'm Krittaphat Butsabakonkun
        </h1>
        <p className="portfolio-subtitle">
          Welcome to my Portfolio
        </p>
      </div>

      <h2 className="section-heading">สถานะโปรเจคและงาน</h2>

      {/* รวมกลุ่ม Card ผลงานและระบบ Task ไว้ด้วยกัน */}
      <div className="cards-container">

        {/* Card 1: Unity Game (ย้ายขึ้นมาบนสุด) */}
        <div className="card">
          <div className="card-header">
            <h3>🎮 โปรเจคเกี่ยวกับเกม</h3>
            <span className="badge">พัฒนาด้วย Unity</span>
          </div>
          <p className="card-description">
            พัฒนาเกมโดยใช้ Unity และ VS Code 2022 เน้นการเขียนโค้ด C# 
            และให้ความสำคัญกับขั้นตอน Game Optimization เพื่อให้ตัวเกมมีประสิทธิภาพและพร้อมสำหรับการเผยแพร่
          </p>
          <a 
            href="https://jopjop054.itch.io/papansuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-unity"
          >
            🕹️ ดาวโหลดเกมได้ที่ itch.io
          </a>
        </div>

        {/* Card 2: Web App (ย้ายขึ้นมาเป็นอันดับสอง) */}
        <div className="card">
          <div className="card-header">
            <h3>💻 ระบบเว็บแอปพลิเคชัน</h3>
            <span className="badge">React + Express API</span>
          </div>
          <p className="card-description">
            ระบบ Task Board แบบ Full-stack รองรับการจัดการข้อมูล (CRUD) 
            (ปัจจุบันกำลังศึกษาและพัฒนาเพิ่มเติม)
          </p>
          
          {/* จัดกลุ่มปุ่มให้อยู่คู่กัน */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href="https://github.com/krittaphat054-lgtm/my-portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-web"
              style={{ flex: 1 }}
            >
              🖥️ Frontend Code
            </a>
            <a 
              href="https://github.com/krittaphat054-lgtm/portfolio-api" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-web"
              style={{ flex: 1, backgroundColor: '#2a2a35', border: '1px solid #4a52ff' }}
            >
              ⚙️ Backend Code
            </a>
          </div>
        </div>

        {/* Card 3: Blender (ย้ายลงมาอันดับสาม และนำปุ่มออก) */}
        <div className="card">
          <div className="card-header">
            <h3>🎨 ปั้นโมเดล Blender</h3>
            <span className="badge">กำลังศึกษาและทำอยู่</span>
          </div>
          <p className="card-description">
            ปัจจุบันกำลังศึกษาและฝึกฝนการใช้งานโปรแกรม
          </p>
        </div>

        {/* Card 4: ระบบ Task Board จาก Database */}
        <div className="card">
          <div className="card-header">
            <h3>📋 รายการ Issue จาก Database</h3>
          </div>
          
          <div className="issue-list-container" style={{ marginTop: '15px' }}>
            <form onSubmit={handleSubmit} className="issue-form" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <input 
                type="text" 
                placeholder="เพิ่มงานใหม่ที่ต้องทำ..." 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="issue-input"
                style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#2c2c35', color: 'white' }}
              />
              <button type="submit" className="btn-submit" style={{ padding: '10px 15px', backgroundColor: '#a87ffb', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
                เพิ่มงาน
              </button>
            </form>

            {issues.length === 0 ? (
              <p className="loading-text" style={{ color: '#888' }}>กำลังโหลดข้อมูล หรือยังไม่มี Issue...</p>
            ) : (
              <ul className="task-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {issues.map(issue => (
                  <li key={issue.id} className="task-item" style={{ backgroundColor: '#2a2a35', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="task-content" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <span className="task-title" style={{ textDecoration: issue.status === 'Done' ? 'line-through' : 'none', color: issue.status === 'Done' ? '#888' : 'white', fontSize: '16px' }}>
                        {issue.title}
                      </span>
                      <span className="task-meta" style={{ fontSize: '12px', color: '#b3b3b3' }}>
                        สถานะ: <span className="status-badge" style={{ color: issue.status === 'Done' ? '#4caf50' : '#a87ffb', fontWeight: 'bold' }}>{issue.status}</span> | 
                        ผู้รับผิดชอบ: {issue.assignee ? issue.assignee.username : 'ยังไม่มอบหมายงาน'}
                      </span>
                    </div>
                    
                    <div style={{ marginLeft: '10px', display: 'flex', gap: '8px' }}>
                      {issue.status !== 'Done' && (
                        <button 
                          onClick={() => handleCompleteStatus(issue.id)} 
                          style={{ backgroundColor: '#4caf50', padding: '6px 10px', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '12px' }}
                        >
                          ✔ เสร็จแล้ว
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(issue.id)} 
                        style={{ backgroundColor: '#ff4b4b', padding: '6px 10px', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '12px' }}
                      >
                        ลบ
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;