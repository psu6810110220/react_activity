import { useState, useEffect } from 'react' // 1. อย่าลืม Import useEffect เพิ่ม
import './App.css'
import NoteForm from './component/NoteForm'
import NoteList from './component/NoteList'
import type { Note } from './types'

function App() {
  const [notes, setNotes] = useState<Note[]>([])

  // 2. Load: ดึงข้อมูลจาก Local Storage เมื่อเปิดเว็บ (ทำงานครั้งเดียวตอนเริ่ม)
  useEffect(() => {
    const saved = localStorage.getItem('notes')
    if (saved) {
      setNotes(JSON.parse(saved) as Note[])
    }
  }, [])

  // 3. Save: บันทึกข้อมูลลง Local Storage ทุกครั้งที่ notes เปลี่ยนแปลง
  useEffect(() => {
    // ป้องกันการบันทึกทับตอนเริ่มต้น ถ้า array ว่าง (Optional check)
    if (notes.length > 0) { 
        localStorage.setItem('notes', JSON.stringify(notes))
    }
  }, [notes])

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text
    }
    setNotes([...notes, newNote])
  }

  // 4. สร้างฟังก์ชัน deleteNote
  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div>
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      {/* 5. ส่งฟังก์ชัน onDelete ไปให้ NoteList */}
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App