import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import AuthService from "../../services/auth";

interface ContainerProps {
  history: any;
}

interface ContainerStates {
  email: string;
  password: string;
}

class Login extends React.Component<ContainerProps, ContainerStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  async submit() {
    const authSerivce = new AuthService();

    const { email, password } = this.state;

    const response = await authSerivce.login({
      email,
      password,
    });

    if (response) {
      this.props.history.push("/expences/list");
    }
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start"></IonButtons>
            <IonTitle>Login</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => this.props.history.push("/register")}>
                Register
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput
              onIonChange={(e) => this.setState({ email: e.detail.value! })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => this.setState({ password: e.detail.value! })}
            />
          </IonItem>
          <IonButton expand="full" onClick={this.submit.bind(this)}>
            Login
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Login;
