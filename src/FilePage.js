import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { ContentContainer, Heading, ErrorContainer, BackLink, PreformattedText } from './styles/FilePageStyles';

const FilePage = () => {
  const { filename } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!filename) return;

    // Декодируем имя файла
    const decodedFilename = decodeURIComponent(filename);
    
    // Загружаем содержимое файла
    fetch(`${process.env.PUBLIC_URL}/files/${decodedFilename}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Файл не найден: ${decodedFilename}`);
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setContent('');
      });
  }, [filename]);

  return (
    <ContentContainer>
      <Heading>{decodeURIComponent(filename || '')}</Heading>
      {error ? (
        <ErrorContainer>
          <p>{error}</p>
          <p><Link to="/" style={{ color: '#e74c3c' }}>Вернуться к списку файлов</Link></p>
        </ErrorContainer>
      ) : content ? (
        <div>
          {filename && filename.toLowerCase().endsWith('.md') ? (
            <div dangerouslySetInnerHTML={{__html: marked(content).replace(/<table>/g, '<table class="styled-table">') }} />
          ) : (
            <PreformattedText>{content}</PreformattedText>
          )}
        </div>
      ) : (
        <p>Загрузка содержимого файла...</p>
      )}
      <BackLink to="/">&larr; Вернуться к списку файлов</BackLink>
    </ContentContainer>
  );
};

export default FilePage;