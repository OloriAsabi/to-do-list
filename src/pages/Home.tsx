import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import './Home.css';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';


const Home: React.FC = () => {      
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> <IonRouterLink href="/home" routerDirection="back">To-Do-List-App</IonRouterLink></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle> <IonRouterLink href="/home" routerDirection="back">To-Do-List-App</IonRouterLink></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
