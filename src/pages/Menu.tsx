import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';

import React from 'react';
  
  interface AppPage {
    url: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Exchanges',
      url: '/exchanges',
    },
    {
      title: 'Cryptocurrencies',
      url: '/cryptocurrency',
    },
    {
      title: 'News',
      url: '/news',
    }
  ];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Cryptosmart App</IonListHeader>
            <IonNote>developeroloriasabi@gmail.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  