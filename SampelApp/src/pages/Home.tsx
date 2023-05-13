import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Home.css';
import Echo from '../plugins/Echo';

const Home: React.FC = () => {
  const onButtonTapped = () => {
    setTapTextCount(tapTextCount + 1)
    setTapText(`Button tapped ${tapTextCount}`)
  }
  const [tapText, setTapText] = useState('')
  const [tapTextCount, setTapTextCount] = useState(0)

  const onEchoButtonTapped = async () => {
    const { value } = await Echo.echo({ value: 'Tapped from JS' })
    console.log('Response from native:', value)
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sample App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sample App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => onButtonTapped()}>
          Tap me
        </IonButton>
        <IonButton onClick={() => onEchoButtonTapped()}>
          Echo
        </IonButton>
        <IonText>{tapText}</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
