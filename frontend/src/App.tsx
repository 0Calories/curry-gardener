import './App.css';
import { MQTTProvider } from './MQTTContext';
import { PlantList } from './components/PlantList';

function App() {
  return (
    <MQTTProvider>
      <PlantList />
    </MQTTProvider>
  );
}

export default App;
