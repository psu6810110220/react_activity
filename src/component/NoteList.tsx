import type { Note } from '../types'

// 1. เพิ่ม onDelete ใน Interface
interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

// 2. รับ onDelete เข้ามาใน Component
const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <ul style={{ textAlign: 'left' }}>
      {notes.map((note) => (
        <li key={note.id} style={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>{note.text}</span>
          {/* 3. สร้างปุ่มลบ และผูกกับ id ของโน้ตนั้นๆ */}
          <button 
            onClick={() => onDelete(note.id)} 
            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
          >
            ลบ
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NoteList