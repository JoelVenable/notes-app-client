import React, { useState, useEffect } from 'react';
import {
  FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';
import { LoaderButton } from './LoaderButton';
import { MAX_ATTACHMENT_SIZE } from './noteConfig';
import './NewNote.css';

export const NewNote = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (content.length > 0 && disabled) setDisabled(false);
    if (content.length === 0 && !disabled) setDisabled(true);
  }, [content, disabled]);


  const handleChange = e => {
    setContent(e.target.value);
  }

  const handleFileChange = e => { setFile(e.target.files[0]); }


  const handleSubmit = async e => {
    e.preventDefault();
    const maxSize = MAX_ATTACHMENT_SIZE;
    if (file && file.size > maxSize) {
      alert(`Please pick a file smaller than ${maxSize / 1000000} MB.`);
      return;
    }
    setLoading(true);
  }






  return (
    <div className="NewNote">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            onChange={handleChange}
            value={content}
            componentClass="textarea"
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          bsStyle="primary"
          bsSize="lg"
          disabled={disabled}
          type="submit"
          isLoading={loading}
          text="Create"
          loadingText="Creating..."
        />
      </form>
    </div>
  )

}