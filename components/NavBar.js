import React from "react";
import { Component } from "react";
import { OTs, featureDictionary } from "./../services/lookUpService";
import Link from "next/link";
import { Menu, Icon } from "antd";
import MyContainer from "./utilityComponents.js/MyContainer";
const { SubMenu } = Menu;
// "navbar navbar-expand-lg navbar-light bg-light"

class MyNavBar extends Component {
  state = {
    current: "home",
    collapsed: "menu-fold"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        overflowedIndicator={
          <span>
            Schwimmbäder finden <Icon type="right-circle" />
          </span>
        }
      >
        <Menu.Item key="home">
          <Link href="/">
            <a>
              <Icon type="home" />
              <span>Startseite</span>
            </a>
          </Link>
        </Menu.Item>

        <SubMenu
          title={
            <span className="ant-menu-item" style={{ padding: 0 }}>
              <Icon type="compass" />
              Bezirke
            </span>
          }
        >
          {Object.keys(OTs).map(bezirk => {
            return (
              <Menu.Item key={OTs[bezirk].slugName}>
                <Link
                  as={`/bezirke/${OTs[bezirk].slugName}`}
                  href={`/bezirke/[bezirk]`}
                >
                  <a>{bezirk}</a>
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>

        <SubMenu
          title={
            <span className="ant-menu-item" style={{ padding: 0 }}>
              <Icon type="filter" />
              Ausstattung
            </span>
          }
        >
          {Object.keys(featureDictionary).map(key => (
            <Menu.Item key={key}>
              <Link as={`/ausstattung/${key}`} href={`/ausstattung/[feature]`}>
                <a>{featureDictionary[key].showName}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>

        <Menu.Item key="blog">
          <Link href="/blog">
            <a>
              <Icon type="container" />
              <span>Blog</span>
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="impressum" style={{ float: "right" }}>
          <Link href="/impressum-und-kontakt">
            <a>
              <Icon type="team" />
              <span>Impressum und Kontakt</span>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MyNavBar;

/*
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="navbar-brand">
                  <span style={{}}>{"Schwimmbäder Berlin"}</span>
                </a>
              </Link>
            </li>
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <FeatureDropDown></FeatureDropDown>
              <BezirkDropDown></BezirkDropDown>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/impressum-und-kontakt">
                  <a className="nav-link">Impressum und Kontakt</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

const dropDownMenuStyles = {
  margin: "0",
  boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.2)"
};

const BezirkDropDown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Schwimmbäder nach Bezirk
      </a>
      <div
        style={dropDownMenuStyles}
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {Object.keys(OTs).map(bezirk => {
          return (
            <Link
              key={OTs[bezirk].slugName}
              href={`/bezirke/${OTs[bezirk].slugName}`}
            >
              <a className="dropdown-item"> {bezirk}</a>
            </Link>
          );
        })}
      </div>
    </li>
  );
};

const FeatureDropDown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Bäder nach Features
      </a>
      <div
        style={dropDownMenuStyles}
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {Object.keys(featureDictionary).map(key => (
          <Link key={key} href={`/ausstattung/${key}`}>
            <a className="dropdown-item">{featureDictionary[key].showName}</a>
          </Link>
        ))}
      </div>
    </li>
  );
};



*/
