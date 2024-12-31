import React, { useState, useRef, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box } from "@mui/material";

type IProps = {
    value: string,
    about: string,
    handlegetData: (data: { value: string }) => void
}

const TextEditor = ({ value, about, handlegetData}: IProps) => {
    // Initialize state for editor content
    const [description, setDescription] = useState<{
        htmlValue: string;
        editorState: EditorState;
    }>({
        htmlValue: "<p></p>\n",
        editorState: EditorState.createEmpty()
    });

    // Reference for editor component
    const editorRef = useRef<Editor>(null);

    // Function to update editor state when about prop changes
    useEffect(() => {
        if (about) {
            const blocksFromHTML = convertFromHTML(about);
            const contentState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            );
            const newEditorState = EditorState.createWithContent(contentState);
            setDescription({
                htmlValue: draftToHtml(convertToRaw(newEditorState.getCurrentContent())),
                editorState: newEditorState
            });
        }
    }, [about]);

    // Function to handle editor state changes
    const onEditorStateChange = (editorValue: EditorState) => {
        const editorStateInHtml = draftToHtml(convertToRaw(editorValue.getCurrentContent()));
        setDescription({
            htmlValue: editorStateInHtml,
            editorState: editorValue
        });
        const data = {
            value: editorStateInHtml
        };
        handlegetData(data);
    };

    // Function to clear editor content
    const clearEditorContent = () => {
        if (editorRef.current) {
            const emptyEditorState = EditorState.createEmpty();
            onEditorStateChange(emptyEditorState);
        }

    };

    return (
        <Box>
            <Box>
                <Editor
                    toolbarHidden={false}
                    editorState={description.editorState}
                    onEditorStateChange={onEditorStateChange}
                    placeholder={value}
                    ref={editorRef}
                />
            </Box>
        </Box>
    );
};

export default TextEditor;
