import './App.css';
import { MQTTProvider } from './MQTTContext';
import { MQTTMessageButton } from './MQTTMessageButton';
import { PlantList } from './components/PlantList';

function App() {
  return (
    <MQTTProvider>
      <PlantList />

      <MQTTMessageButton />
    </MQTTProvider>
  );
}

export default App;
