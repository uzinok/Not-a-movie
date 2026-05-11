import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ErrorContainer = styled.div`
  color: #e74c3c;
  padding: 1rem;
  border: 1px solid #e74c3c;
  border-radius: 4px;
  margin: 1rem 0;
`;

export const BackLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
  }
`;

export const PreformattedText = styled.div`
  white-space: pre-wrap;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  &:last-child {
    border-right: none;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  &:hover {
    background-color: #e3f2fd;
  }
`;