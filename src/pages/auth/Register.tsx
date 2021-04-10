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
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class Register extends React.Component<ContainerProps, ContainerStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  async submit() {
    const authSerivce = new AuthService();

    const { name, email, password, confirmPassword } = this.state;

    const response = await authSerivce.register({
      id: undefined,
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    });

    if (response) {
      this.props.history.push("/login");
    }
  }

  render() {
    const { name, email } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => this.setState({ name: e.detail.value! })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput
              value={email}
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
          <IonItem>
            <IonLabel>Confirm Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) =>
                this.setState({ confirmPassword: e.detail.value! })
              }
            />
          </IonItem>
          <IonButton expand="full" onClick={this.submit.bind(this)}>
            Register
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
