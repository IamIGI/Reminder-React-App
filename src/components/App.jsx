import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notes, setNotes] = useState([]);

    function addNewNote(inputValue, textAreaValue) {
        const notesJSON = {
            title: inputValue,
            content: textAreaValue,
        };

        setNotes((prevItems) => {
            return [...prevItems, notesJSON];
        });
    }

    function deleteNote(id) {
        setNotes((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
        console.log('Click');
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNewNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onChecked={deleteNote}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
