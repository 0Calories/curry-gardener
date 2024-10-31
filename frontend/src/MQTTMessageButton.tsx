import { useMQTTClient } from './MQTTContext';

export function MQTTMessageButton() {
  const { client, isConnected } = useMQTTClient();

  console.log(isConnected);
  return <button>MQTT Message</button>;
}
