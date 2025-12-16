import { useState } from 'react'
import './App.css'
import NoteForm from './component/NoteForm'
import NoteList from './component/NoteList'
import { Note } from './types'// เรียกใช้ Type ที่เราสร้างไว้ใน Phase 1

function App() {
  // 1. ประกาศตัวแปร State เพื่อเก็บรายการโน้ต (เป็น Array ของ Note)
  const [notes, setNotes] = useState<Note[]>([]);

  // 2. สร้างฟังก์ชัน addNote เพื่อรับข้อความและสร้างโน้ตใหม่
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), // ใช้เวลาปัจจุบันเป็น ID (จะได้ไม่ซ้ำกัน)
      text: text,
    };
    // อัปเดต State: เอาโน้ตเก่าทั้งหมด + โน้ตใหม่ ใส่เข้าไป
    setNotes([...notes, newNote]); 
  };

  return (
    <div className="app">
      <h1>Sticky Notes App</h1>
      <div style={{ padding: '20px' }}>
        {/* ส่งฟังก์ชัน addNote ไปให้ NoteForm ใช้งาน */}
        <NoteForm onAdd={addNote} />
        
        <br />
        
        {/* ส่งรายการ notes ไปให้ NoteList แสดงผล */}
        <NoteList notes={notes} />
      </div>
    </div>
  )
}

export default App