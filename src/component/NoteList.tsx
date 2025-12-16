import React, { useState } from 'react'

// 1. สร้างกติกาว่า Component นี้ต้องได้รับ onAdd มานะ
interface NoteFormProps {
  onAdd: (text: string) => void;
}

// 2. รับ onAdd เข้ามาในวงเล็บ
const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    
    // เรียกใช้ฟังก์ชันที่ส่งมาจาก App.tsx
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="พิมพ์โน้ต..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button type="submit">Add Note</button>
    </form>
  )
}

export default NoteForm