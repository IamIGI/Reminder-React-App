import React, { useState } from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState('false');

    const [inputValue, setInput] = useState('');
    const [textAreaValue, setTextArea] = useState('');

    function handleChangesInput(event) {
        const newInput = event.target.value;
        return setInput(newInput);
    }

    function handleChangesTextArea(event) {
        const newInput = event.target.value;
        return setTextArea(newInput);
    }

    function expand() {
        isExpanded === 'false' && setExpanded('true');
    }

    return (
        <div>
            <form
                className="create-note"
                onSubmit={(event) => {
                    props.addNote(inputValue, textAreaValue);
                    setInput('');
                    setTextArea('');
                    event.preventDefault();
                }}
            >
                {isExpanded === 'true' && (
                    <input
                        onChange={handleChangesInput}
                        value={inputValue}
                        name="title"
                        placeholder="Title"
                    />
                )}

                <textarea
                    onClick={expand}
                    onChange={handleChangesTextArea}
                    value={textAreaValue}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded === 'true' ? '3' : '1'}
                />
                <Zoom in={true}>
                    <Fab type="submit">
                        <NoteAddIcon fontSize="medium" />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
