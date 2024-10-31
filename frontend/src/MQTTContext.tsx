import React, { createContext, useContext, useEffect, useState } from 'react';
import mqtt, { MqttClient } from 'mqtt';

interface MQTTContextType {
  client: MqttClient | null;
  isConnected: boolean;
}

const MQTTContext = createContext<MQTTContextType>({
  client: null,
  isConnected: false,
});

export function MQTTProvider({ children }: { children: React.ReactNode }) {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const mqttClient = mqtt.connect(`ws://${import.meta.env.VITE_RASPBERRY_PI_IP}:9001`);

    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker');
      setIsConnected(true);
    });

    mqttClient.on('error', err => {
      console.error('MQTT connection error:', err);
      setIsConnected(false);
    });

    mqttClient.on('close', () => {
      console.log('MQTT connection closed');
      setIsConnected(false);
    });

    setClient(mqttClient);

    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  return (
    <MQTTContext.Provider value={{ client, isConnected }}>
      {children}
    </MQTTContext.Provider>
  );
}

// Custom hook to use MQTT client
export function useMQTTClient() {
  const context = useContext(MQTTContext);
  if (context === undefined) {
    throw new Error('useMQTTClient must be used within an MQTTProvider');
  }

  return context;
}
