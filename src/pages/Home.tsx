import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import './Home.css';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';


const Home: React.FC = () => {      
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-Do-List-App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle>To-Do-List-App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
