import React from 'react';
import { Link } from 'react-router-dom';
import { ContentContainer } from './styles/FilePageStyles';

const Header = () => {
  return (
    <ContentContainer>
      <nav>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          <h1>Текстовый читалка</h1>
        </Link>
      </nav>
    </ContentContainer>
  );
};

export default Header;