import React from "react"
import ReactDOM from "react-dom"
import Split from "react-split"
import Sidebar from "./component/Sidebar"
import Editor from "./component/Editor"
import { nanoid } from "nanoid"

import "./css/note.css"

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "")

    const createNewNote = () => {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    const updateNote = (text) => {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId 
                ? {...oldNote, body: text}
                : oldNote
        }))
    }

    const findCurrentNote = () => {
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }

    return (
        <div>
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
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))