import type { Note } from '../types' 

// 1. กำหนด Props
interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul style={{ textAlign: 'left' }}>
      {notes.map((note) => (
        <li key={note.id} style={{ padding: '5px 0' }}>
          {note.text}
        </li>
      ))}
    </ul>
  )
}

export default NoteList