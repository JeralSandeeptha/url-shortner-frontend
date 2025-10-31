import MainRouter from './routes/MainRouter';
import DashboardRouter from './routes/DashboardRouter';
import { useAuth } from './hooks/useAuth';

function App() {
  const { authenticated } = useAuth();

  return authenticated ? <DashboardRouter /> : <MainRouter />;
}

export default App;
