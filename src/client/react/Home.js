import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import isMobile from "ismobilejs";
import Particles from 'react-particles-js';

import { imageRequire } from '../../utils/universalRequire';
import { Layout, Row, Col, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

// for the server return a reference to the
// path for this image. Otherwise, deal with
// it as a normal webpack import

export default class Home extends Component {

  render() {
    const latLang = { lat: 37.47933877, lng: 126.95265278 };
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={latLang}
      >
        <Marker
          position={latLang}
        />
      </GoogleMap>
    ));
    return (
      <Layout className="layout">
        <Header className="header">
          <div className="logo">
            <a className="" href="/">
              <img src={imageRequire('logo.svg')} alt="logo" className="logo"/>
              <span>BlockchainVentures</span>
            </a>

          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            className="desktop-menu"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><a className="nav-link" href="#">Home</a></Menu.Item>
            <Menu.Item key="2"><a className="nav-link" href="#about">About</a></Menu.Item>
            <Menu.Item key="3"><a className="nav-link" href="#team">Team</a></Menu.Item>
            <Menu.Item key="5"><a className="nav-link" href="#contact">Contact</a></Menu.Item>

          </Menu>
        </Header>
        <Content className="container-fluid">
          <div id="fullpage">
            <div className="section main">
              <div className="center">
                <img src={imageRequire('logo_with_name.svg')} alt="logo" className="logo"/>
              </div>
            </div>
            <div className="section mission" id="about">
              <div className="header">
                <div className="title">MISSION</div>
                <div className="line"></div>
              </div>
              <div className="contents center">
                블록체인과 게임을 연결하여<br/>
                게임 간의 벽을 허문다
              </div>
              <div className="footer">
                <p>블록체인벤처스 프로젝트</p>
                <p>Game Coin Exchange</p>
              </div>
            </div>
            <div className="section project" id="project">

              <div className="title">GXC PROJECT</div>
              <div className="contents">
                <div className="desc">
                  <p>블록체인벤처스는 게임 간 화폐들을 기축통화인 GXC를 통해 연결하는 것을 목적으로 둡니다.</p>
                  <p>게이머는 GXC를 통해 각기 다른 게임사에서 얻은 아이템과 화폐를 거래할 수 있으며,</p>
                  <p>개발사에서는 수수료를 취할 수 있고, 신작 게임 홍보 등 마케팅 수단으로도 활용이 가능합니다.</p>
                </div>
              </div>
              <div className="center diagrams">
                <Row className="row">
                  <Col xs={24} md={8} className="item">
                    <img src={imageRequire('ic_coin.svg')} alt="icon_coin"/>
                    <div className="desc">
                      게임사가 GXC를 구매하여<br/>
                      유저에게 토큰 발급<br/>
                      토큰은 GXC 코인으로 교환 가능
                    </div>
                  </Col>
                  <Col xs={24} md={8} className="item">
                    <img src={imageRequire('ic_sidechain.svg')} alt="icon_sidechain"/>
                    <div className="desc">
                      사이드체인을 통해<br/>
                      자유로운 프래그래밍 및<br/>
                      공개 원장을 활용한 투명성 확보
                    </div>
                  </Col>
                  <Col xs={24} md={8} className="item">
                    <img src={imageRequire('ic_trade.svg')} alt="icon_trade"/>
                    <div className="desc">
                      거래소에서 토큰 구입 가능<br/>
                      유료 아이템 실시간 거래소<br/>
                      호가 매칭을 통해 구입
                    </div>
                  </Col>
                </Row>
              </div>
              <Particles
                className="project-bg"
                params={{
                  "particles": {
                    "number": {
                      "value": isMobile.any ? 40 : 80,
                      "density": {
                        "enable": true,
                        "value_area": 700
                      }
                    },
                    "color": {
                      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 15
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1.5,
                        "opacity_min": 0.15,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 2.5,
                      "random": false,
                      "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.15,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 110,
                      "color": "#33b1f8",
                      "opacity": 0.25,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 1.6,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }}

              />
            </div>

            <div className="section team" id="team">
              <div className="center">
                <div className="title">About Team</div>
                <Row className="row col3">
                  <Col md={8} xs={12} className="col-4 item">
                    <img src={imageRequire('img_woongkyum.png')} alt="김웅겸"/>
                    <div>
                      <div className="name">김웅겸</div>
                      <div className="rank">CEO</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>연세대학교 컴퓨터공학과</div>
                      <ul>
                        <li>(주)후퍼 대표이사</li>
                        <li>핀테크 개발/운영 및 다수프로젝트 개발</li>
                        <li>개발 경력 18년</li>
                        <li>후퍼 경영 8년</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={8} xs={12} className="col-4 item">
                    <img src={imageRequire('img_kwanho.png')} alt="최관호"/>
                    <div>
                      <div className="name">최관호</div>
                      <div className="rank">Co-Founder</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>서울대학교 경영학과 학사/석사</div>
                      <ul>
                        <li>(주)엑스엘게임즈 대표이사</li>
                        <li>(주)네오위즈인터넷 대표이사</li>
                        <li>(주)네오위즈게임즈 대표이사</li>
                        <li>(주)게임온 대표이사</li>
                        <li><br/></li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={8} xs={12} className="col-4 item">
                    <img src={imageRequire('img_jieun.png')} alt="박지은"/>
                    <div>
                      <div className="name">박지은</div>
                      <div className="rank">COO</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>숙명여자대학교 정보방송학과</div>
                      <ul>
                        <li>(주)후퍼 COO</li>
                        <li>결제서비스 신사업 런칭</li>
                        <li>다수 프로젝트 총 책임</li>
                        <li>후퍼 경영 8년</li>
                      </ul>
                    </div>
                  </Col>
                  <div className="clearfix only-desktop"/>
                  <Col md={6} xs={12} className="col-3 item">
                    <img src={imageRequire('img_jinhwan.png')} alt="양진환"/>
                    <div>
                      <div className="name">양진환</div>
                      <div className="rank">CTO</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>서울대학교 경영학과, 컴퓨터공학과</div>
                      <ul>
                        <li>(주)Mozzet Developer</li>
                        <li>(주)Qpick CTO</li>
                        <li>Profound CTO</li>
                        <li><br/></li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="item">
                    <img src={imageRequire('img_hyunseok.png')} alt="방현석"/>
                    <div>
                      <div className="name">방현석</div>
                      <div className="rank">CCO</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>서울과학기술대학교 시각디자인학과</div>
                      <ul>
                        <li>(주)beSUCCESS 디자이너</li>
                        <li>(주)Qpick 기획이사</li>
                        <li>(주)Profound CCO</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="col-3 item">
                    <img src={imageRequire('img_yeonwoo.png')} alt="추연우"/>
                    <div>
                      <div className="name">추연우</div>
                      <div className="rank">CPO</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>서울시립대학교 토목공학과</div>
                      <ul>
                        <li>(주)어니언텍21 게임사업본부장</li>
                        <li>(주)모비온 개발팀장</li>
                        <li>(주)이루고 개발총괄</li>
                        <li>(주)코로스튜디오 대표</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} xs={12} className="col-3 item">
                    <img src={imageRequire('img_hwanhee.png')} alt="이환희"/>
                    <div>
                      <div className="name">이환희</div>
                      <div className="rank">Developer</div>
                      <div className="line"></div>
                    </div>
                    <div className="desc">
                      <div>명지대학교 컴퓨터공학과</div>
                      <ul>
                        <li>(주)아사달 개발자</li>
                        <li>(주)가비아 개발자</li>
                        <li>(주)리퍼블릭닷 CTO</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="section" id="roadmap" style={{ display: "none" }}>
              <div className="title">GXC RoadMap</div>
              <div className="roadmap-list bottom">
                <div className="hexagon">2018<br/>Q3</div>
                <div className="hexagon">2018<br/>Q4</div>
                <div className="hexagon">2019<br/>Q1</div>
                <div className="hexagon-line"></div>
                <div className="box left-top">GXC 토큰 발급 시스템 개발 완료, 게임 5종 오픈</div>
                <div className="box right-center">테스트 네트워크 오픈</div>
                <div className="box left-bottom">제휴사 21사, MOU, 50개 게임 제휴</div>
              </div>
            </div>
            <div className="section" style={{ display: "none" }}>
              <div className="roadmap-list top">
                <div className="hexagon-line"></div>
                <div className="hexagon">2019<br/>Q2</div>
                <div className="hexagon">2019<br/>Q3</div>
                <div className="box right-top">제휴 게임 오픈 및 GXC 거래소 오픈</div>
                <div className="box left-center">사이드체인 및 결제시스템 개발</div>
                <div className="box right-bottom">사이드체인 결합 게임 100사 MOU 및 30종 게임 오픈</div>
              </div>
            </div>
            <div className="section" id="contact">

              <div className="title">찾아오시는 길</div>
              <div className="center">
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFKYguZZb4aRjrOVL_l6NcFGmiaSc3mSc&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }}/>}
                  containerElement={<div style={{ margin: "50px auto", maxWidth: "1024px", height: `580px` }}/>}
                  mapElement={<div style={{ height: `100%` }}/>}
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: "#001529", color: "white" }}>
          <p>주식회사 블록체인벤쳐스 | 대표: 김웅겸 | 서울 관악구 관악로 158 BS타워 3층<br/>
            Contact: <a href="mailto:ceo@bcventures.io">ceo@bcventures.io</a>
          </p>
          <br/>
          <p>Copyright © (C) blockchain ventures, All rights Reserved </p>
        </Footer>
      </Layout>
    );
  }
}

