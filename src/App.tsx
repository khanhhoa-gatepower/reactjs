import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AntdProvider from './components/antd-provider';

function App() {
  return (
    <AntdProvider>
      <RouterProvider router={router} />
    </AntdProvider>
  );
}

export default App;
