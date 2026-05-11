import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentContainer } from './styles/FilePageStyles';

const Home = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Получаем список текстовых файлов из списка
    fetch(`${process.env.PUBLIC_URL}/filelist.json`)
      .then(response => response.json())
      .then(fileList => {
        setFiles(fileList);
      })
      .catch(error => {
        console.error('Ошибка при загрузке списка файлов:', error);
        // В случае ошибки используем демо-файлы
        setFiles(['1 Тёмная сторона луны.txt', 'demo1.txt', 'demo2.txt']);
      });
  }, []);

  return (
    <ContentContainer>
      <h2>Список текстовых файлов</h2>
      {files.length === 0 ? (
        <p>Загрузка файлов...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {files.map((file, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <Link to={`/file/${encodeURIComponent(file)}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                {file}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ContentContainer>
  );
};

export default Home;