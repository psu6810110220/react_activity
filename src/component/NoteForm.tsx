import React, { useState } from 'react'

// 1. กำหนด Interface สำหรับ Props (ตามใบงาน)
interface NoteFormProps {
  onAdd: (text: string) => void;
}

// 2. รับ Props เข้ามาใน Component
const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [text, setText] = useState(""); // เก็บข้อความที่พิมพ์ในช่อง Input

  // ฟังก์ชันจัดการตอนกดปุ่ม Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช
    
    if (text.trim() === "") return; // ถ้าไม่ได้พิมพ์อะไรมา ไม่ต้องทำอะไร

    onAdd(text); // เรียกใช้ฟังก์ชันจาก App.tsx เพื่อส่งข้อมูลขึ้นไป
    setText(""); // ล้างช่องข้อความให้ว่าง
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="พิมพ์โน้ตที่นี่..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button type="submit">Add Note</button>
    </form>
  )
}

export default NoteForm