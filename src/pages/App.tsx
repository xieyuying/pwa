import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import AppRoutes from '@routes/index';

const App: FC = (): JSX.Element => {
  const routing = useRoutes(AppRoutes);
  return <>{routing}</>;
};
export default App;
