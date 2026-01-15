import { ConfigProvider } from 'antd';
import { configStyleComponent } from '../../valiables/constants';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
      <ConfigProvider theme={{ components: configStyleComponent }}>{children}</ConfigProvider>
  );
}