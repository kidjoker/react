import React from "react"
import ReactDOM from "react-dom"
import Split from "react-split"
import Sidebar from "./component/Sidebar"
import Editor from "./component/Editor"
import { nanoid } from "nanoid"

import "./css/note.css"

export default function App() {
    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])

    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "")

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    },[notes])

    const createNewNote = () => {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            updateTime: new Date()
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    const updateNote = (text) => {
        setNotes(oldNotes => oldNotes.map(oldNote => {
                return oldNote.id === currentNoteId 
                    ? {...oldNote, body: text, updateTime: new Date()}
                    : oldNote
            })
        )
    }

    const findCurrentNote = () => {
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }

    const deleteNote = (noteId) => {
        setNotes(oldNotes => oldNotes.filter(oldNote => oldNote.id !== noteId))
    }

    return (
        <main>
            {
                notes.length > 0 ?
                <Split
                    size={[30,70]}
                    direction="horizontal"
                    className="split"
                >
                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />
                    {
                        <Editor
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />   
                    }
                </Split>
                :
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>Create one now</button>
                </div>
            }
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))