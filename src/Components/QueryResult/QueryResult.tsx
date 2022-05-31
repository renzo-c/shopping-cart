import React from 'react';
import { CircularProgress } from '@mui/material';

interface IQueryResult {
  loading?: boolean;
  error?: any;
  data?: any;
  children: React.ReactElement;
}

const QueryResult: React.FC<IQueryResult | any> = ({ loading, error, data, children }) => {
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <CircularProgress variant="determinate" value={25} />;
  }

  if (!data) {
    return <p>Cart Empty...</p>;
  }

  if (data) return children;
};

export default QueryResult;
