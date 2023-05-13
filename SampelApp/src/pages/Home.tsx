import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const onButtonTapped = () => {
    console.log('Button tapped')
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
