import React, { useState } from 'react'

// 1. กำหนด Interface สำหรับ Props
interface NoteFormProps {
  onAdd: (text: string) => void;
}

// รับ Props เข้ามา (สังเกตการ destructuring { onAdd })
const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [text, setText] = useState('')

  // 2. จัดการ onSubmit โดยระบุ Type ของ Event เป็น React.FormEvent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // ป้องกันหน้าเว็บรีเฟรช
    
    if (!text.trim()) return // ถ้าช่องว่างเปล่า ไม่ต้องทำอะไร

    onAdd(text) // ส่งข้อความกลับไปที่ App.tsx
    setText('') // เคลียร์ช่องข้อความ
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="พิมพ์โน้ตที่นี่..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="submit">เพิ่ม</button>
    </form>
  )
}

export default NoteForm