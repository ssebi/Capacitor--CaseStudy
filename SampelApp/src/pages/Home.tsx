import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Echo from '../plugins/Echo';

const Home: React.FC = () => {
  const onButtonTapped = () => {
    console.log('Button tapped')
  }

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
