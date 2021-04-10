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
import React from "react";
import moment from "moment";
import Expence from "../../model/Expence";
import ExpenceService from "../../services/expence";

class List extends React.Component<
  {},
  {
    expences: [];
  }
> {
  private expenceService: ExpenceService;

  constructor(props: any) {
    super(props);

    this.state = {
      expences: [],
    };

    this.expenceService = new ExpenceService();
  }

  componentDidMount() {
    this.getExpences();
  }

  getExpences() {
    this.expenceService.getExpence().then((expences) => {
      this.setState({
        expences: expences,
      });
    });
  }

  deleteExpence(expence: Expence) {
    this.expenceService.deleteExpence(expence).then(() => this.getExpences());
  }

  render() {
    const { expences } = this.state;

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
              <IonCol>Action</IonCol>
            </IonRow>
            {expences.map((expence: Expence) => {
              return (
                <IonRow key={expence.id}>
                  <IonCol>{moment(expence.spent_at).format("Y-MMM-D")}</IonCol>
                  <IonCol>{expence.reason}</IonCol>
                  <IonCol>{expence.amount}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => this.deleteExpence(expence)}>
                      Delete
                    </IonButton>
                  </IonCol>
                </IonRow>
              );
            })}
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default List;
