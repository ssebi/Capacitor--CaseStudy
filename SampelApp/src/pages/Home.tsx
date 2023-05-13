import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Home.css';
import Echo from '../plugins/Echo';
import Contacts from '../plugins/Contacts';

const Home: React.FC = () => {
  const onButtonTapped = () => {
    setTapTextCount(tapTextCount + 1)
    setTapText(`Button tapped ${tapTextCount}`)
  }
  const [tapText, setTapText] = useState('')
  const [tapTextCount, setTapTextCount] = useState(0)

  const onEchoButtonTapped = async () => {
    setText('')
    try {
      const { value } = await Echo.echo({ value: text })
      setEchoText(`Response from native: ${value}`)
    } catch (error) {
      setEchoText(`Error: ${error}`)
    }
  }
  const [echoText, setEchoText] = useState('')
  const [text, setText] = useState('')

  const onGetContactsButtonTapped = async () => {
    try {
      const results = (await Contacts.getContacts()).results.join(' ')
      setResponse(results)
    } catch (error) {
      setResponse(`${error}`)
    }
  }
  const [response, setResponse] = useState('')

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
        
        <IonList>
        
          {/* This is just a simple button that's incremented every time it's tapped */}
          <IonItem>
            <IonButton onClick={() => onButtonTapped()}>
              Tap me
            </IonButton>
            <IonText>{tapText}</IonText>
          </IonItem>
          
          {/* This is a button that calls the echo function on the native plugin */}
          <IonItem>
            <IonButton onClick={() => onEchoButtonTapped()}>
              Echo
            </IonButton>
            <IonTextarea
              placeholder='Type in some text to send to native'
              value={text}
              onIonInput={(event) => { setText(event.detail.value) }}
            />
          </IonItem>
          <IonItem>
            <IonText>{echoText}</IonText>
          </IonItem>

          {/* This is a button that calls the get contacts native function */}
          <IonItem>
            <IonButton onClick={() => onGetContactsButtonTapped()}>
              Get Contacts
            </IonButton>
          </IonItem>
          <IonItem>
            <IonText>{response}</IonText>
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
