import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import ExpenceService from "../../services/expence";

interface ContainerProps {
  history: any;
}

const Add: React.FC<ContainerProps> = (props) => {
  const { history } = props;

  const [date, setDate] = useState(new Date().toString());
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);

  const submit = async () => {
    const expenceSerivce = new ExpenceService();

    const response = await expenceSerivce.addExpence({
      id: undefined,
      spent_at: new Date(date),
      reason,
      amount,
    });

    if (response) {
      history.push("/expences/list");
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/expences/list" />
          </IonButtons>
          <IonTitle>Add Expence</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Date</IonLabel>
          <IonDatetime
            value={date}
            onIonChange={(e) => setDate(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Reason</IonLabel>
          <IonInput
            value={reason}
            onIonChange={(e) => setReason(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Amount</IonLabel>
          <IonInput
            value={amount}
            onIonChange={(e) => setAmount(parseFloat(e.detail.value!))}
          />
        </IonItem>

        <IonButton expand="full" onClick={submit}>
          Add
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Add;
