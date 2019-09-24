import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { Container } from './styles';

export default function ImageInput({ name }) {
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: fieldName,
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref.current]); // eslint-disable-line

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="file">
                {preview ? (
                    <img src={preview} alt="" />
                ) : (
                    <div>
                        <MdCameraAlt size={55} />
                        <strong>Selecionar imagem</strong>
                        {error && <span>{error}</span>}
                    </div>
                )}
                <input
                    type="file"
                    id="file"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
}

ImageInput.propTypes = {
    name: PropTypes.string.isRequired,
};
