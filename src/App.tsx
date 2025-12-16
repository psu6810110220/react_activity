import { useState } from 'react'
import './App.css'
import NoteForm from './component/NoteForm'
import NoteList from './component/NoteList'
import type { Note } from './types' 

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), 
      text: text
    }
    setNotes([...notes, newNote])
  }

  return (
    <div>
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  )
}

export default App