import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import { loginUser } from "../services/APIConnection";
import { Cookies } from "react-cookie";
import { TOKEN_NAME } from "./../services/authService";
const cookies = new Cookies();

const CLICKCOUNTNEEDED = 0;

class BackendLogin extends Component {
  state = { clickCount: 0, user: {} };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  showModal = b => {
    this.setState({
      visible: b
    });
  };

  onClick = () => {
    if (this.state.clickCount >= CLICKCOUNTNEEDED) {
      this.setState({ clickCount: 0 });
      //console.log("success");
      this.showModal(true);
    } else {
      this.setState(old => {
        old.clickCount++;
        //console.log(old.clickCount);
        return old;
      });
    }
  };

  onChange(key, value) {
    this.setState(old => {
      old.user[key] = value;
      return old;
    });
  }

  login = async () => {
    console.log("login with", this.state.user);
    const jwt = await loginUser(this.state.user);
    console.log(jwt);
    cookies.set(TOKEN_NAME, jwt);
    this.showModal(false);
  };

  render() {
    return (
      <div>
        <div onClick={this.onClick}>Mitarbeiter Login</div>
        <Modal
          title="Ins Backend einloggen"
          visible={this.state.visible}
          onOk={() => this.login()}
          onCancel={() => this.showModal(false)}
          okText="Login"
          cancelText="abbrechen"
        >
          Username:
          <Input
            onChange={e => this.onChange("username", e.target.value)}
          ></Input>
          Password:
          <Input
            onChange={e => this.onChange("password", e.target.value)}
          ></Input>
        </Modal>
      </div>
    );
  }
}

export default BackendLogin;
