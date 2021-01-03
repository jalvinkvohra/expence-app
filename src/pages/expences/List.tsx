import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import Expence from "../../model/Expence";
import ExpenceService from "../../services/expence";

const List: React.FC = () => {
  const [expences, setExpences] = useState([]);

  useEffect(() => {
    const expenceService = new ExpenceService();
    expenceService.getExpence().then((expences) => {
      setExpences(expences);
    });
  }, [setExpences]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List Expences</IonTitle>
          <IonButton slot="end" href="/expences/add">
            Add
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>Date</IonCol>
            <IonCol>Reason</IonCol>
            <IonCol>Amount</IonCol>
          </IonRow>
          {expences.map((expence: Expence) => {
            const date = new Date();
            return (
              <IonRow key={date.getMilliseconds()}>
                <IonCol>{expence.date}</IonCol>
                <IonCol>{expence.reason}</IonCol>
                <IonCol>{expence.amount}</IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default List;
