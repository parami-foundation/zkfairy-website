import React from "react";
import styles from "./style.less";
import { Col, Row } from "antd";
import { ReactComponent as BannerCircle } from '@/assets/home/bannerCircle.svg';
import { ReactComponent as AboutArrow } from '@/assets/home/aboutArrow.svg';
import { ReactComponent as CardCharacter } from '@/assets/home/card/character.svg';
import { ReactComponent as CardBuilding } from '@/assets/home/card/building.svg';
import { ReactComponent as CardEquipment } from '@/assets/home/card/equipment.svg';
import { ReactComponent as CardMore } from '@/assets/home/card/more.svg';
import { ReactComponent as MoreBackground } from '@/assets/home/moreBackground.svg';
import { ReactComponent as TokenCard } from '@/assets/home/tokenCard.svg';
import { ReactComponent as JourneyPop } from '@/assets/home/journeyPop.svg';
import classNames from "classnames";
import { ReactComponent as PlayNowButton } from '@/assets/home/playNow.svg';
import { ReactComponent as WatchTrailerButton } from '@/assets/home/watchTrailer.svg';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bannerBackground} />
      <div className={styles.plumeBackground} />
      <div className={styles.homeWrapper}>
        <div className={styles.bannerContainer} id="banner">
          <div className={styles.bannerWrapper}>
            <div className={styles.bannerSlogan}>
              <div className={styles.bannerSloganLeft}>
                The Gaming Platform
              </div>
              <div className={styles.bannerSloganRight}>
                For Bitcoin Ecosystem
              </div>
            </div>
            <div className={styles.bannerTitle}>
              ZKFairy
            </div>
          </div>
        </div>

        <div className={styles.aboutContainer} id="about">
          <BannerCircle className={styles.aboutCircle} />
          <div className={styles.aboutIcon}>
            <img
              src={require('@/assets/home/ring.png')}
              alt="aboutIcon"
              className={styles.aboutIconImg}
            />
          </div>
          <div className={styles.aboutBackground} />
          <div className={styles.playContainer}>
            <div className={styles.playWrapper}>
              <div className={styles.playBackground}>
                <img
                  src={require('@/assets/home/playBackground.png')}
                  alt="playBackground"
                  className={styles.playBackgroundImg}
                />
              </div>
              <div className={styles.playContent}>
                <div className={styles.playCover}>
                  <img
                    src={require('@/assets/demo/play.png')}
                    alt="playIcon"
                    className={styles.playCoverImg}
                  />
                  <div className={styles.playCoverMaskUp} />
                  <div className={styles.playCoverMaskDown} />
                  <div className={styles.playCoverIcon1}>
                    <img
                      src={require('@/assets/home/playIcon1.png')}
                      alt="playIcon1"
                      className={styles.playCoverIconImg}
                    />
                  </div>
                  <div className={styles.playCoverIcon2}>
                    <img
                      src={require('@/assets/home/playIcon2.png')}
                      alt="playIcon2"
                      className={styles.playCoverIconImg}
                    />
                  </div>
                </div>
                <div className={styles.playText}>
                  <div className={styles.playTextTitle}>
                    Monopoly Built on ZKFair
                  </div>
                  <div className={styles.playTextContent}>
                    Embark on a journey where gaming meets crypto in ZKFairy. Immerse yourself in a dynamic world of monopoly and trading, where every move counts and every decision shapes your fate. Join forces with friends, negotiate deals, and conquer the market in ZKFairy – the premier destination for crypto gamers!
                  </div>
                  <div className={styles.playTextButton}>
                    <PlayNowButton
                      className={styles.playTextButtonItem}
                      onClick={() => {
                        window.open('https://game.zkfairy.com');
                      }}
                    />
                    <WatchTrailerButton
                      className={styles.playTextButtonItem}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutHeader}>
              <div className={styles.aboutLeft}>
                <AboutArrow
                  className={styles.aboutLeftImg}
                />
              </div>
              <div className={styles.aboutTitle}>
                Bridging the Game Ecosystem<br />
                Between Bitcoin and EVMs
              </div>
              <div className={styles.aboutRight}>
                <AboutArrow
                  className={styles.aboutRightImg}
                />
              </div>
            </div>
            <div className={styles.aboutContent}>
              Welcome to ZKFairy, the innovative gaming platform where Bitcoin assels come to life! Embark on a journey filled with Japanese comic art-inspired characters, engaging in a unique mix of simulation and educational ga-meplay. Our platform offers a fair-launch tokenization systern and integrates Bitcoin's layer 2 solutions, enhancing playability and earning opportunities. Dive into a world where your BRC-20 and BRC-420 tokens, along with Ordinals NFTs, open doors to new adventures, all within a secure, player-driven economy. Join BTC Maid for a thrilling blend of entertainment, education, and earning exploration!
            </div>
            <div className={styles.aboutCard}>
              <Row
                className={styles.aboutCardRow}
                gutter={[16, 16]}
              >
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>CHARACTER</span>
                    </div>
                    <CardCharacter
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>BUILDING</span>
                    </div>
                    <CardBuilding
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>EQUIPMENT</span>
                    </div>
                    <CardEquipment
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>AND MORE</span>
                    </div>
                    <CardMore
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className={styles.moreContainer} id="more">
          <MoreBackground className={styles.moreBackgroundImg} />
          <div className={styles.moreWrapper}>
            <div className={styles.moreHeader}>
              <div className={styles.moreLeft}>
                <AboutArrow
                  className={styles.moreLeftImg}
                />
              </div>
              <div className={styles.moreTitle}>
                And more
              </div>
              <div className={styles.moreRight}>
                <AboutArrow
                  className={styles.moreRightImg}
                />
              </div>
            </div>
            <div className={styles.moreContent}>
              Assemble an adventure team to explore the world, defeat mnsters, and discover treasures.
            </div>
            <div className={styles.moreCard}>
              <div className={styles.moreCardLeft}>
                <img
                  src={require('@/assets/home/moreArrow.png')}
                  alt="moreArrow"
                  className={styles.moreCardLeftImg}
                />
              </div>
              <div className={styles.moreCardSlider}>
                <div className={styles.moreCardSliderBorder}>
                  <img
                    src={require('@/assets/home/moreBorder.png')}
                    alt="moreBorder"
                    className={styles.moreCardSliderBorderImg}
                  />
                </div>
                <div className={styles.moreCardSliderContent}>
                  <div className={styles.moreCardSliderItem}>
                    <img
                      src={require('@/assets/demo/1.png')}
                      alt="moreCard1"
                      className={styles.moreCardSliderItemImg}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.moreCardRight}>
                <img
                  src={require('@/assets/home/moreArrow.png')}
                  alt="moreArrow"
                  className={styles.moreCardRightImg}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tokenContainer} id="token">
          <img
            src={require('@/assets/home/tokenBackground.png')}
            alt="tokenBackground"
            className={styles.tokenBackgroundImg}
          />
          <div className={styles.tokenWrapper}>
            <div className={styles.tokenHeader}>
              <div className={styles.tokenLeft}>
                <AboutArrow
                  className={styles.tokenLeftImg}
                />
              </div>
              <div className={styles.tokenTitle}>
                ZKFairy Token
              </div>
              <div className={styles.tokenRight}>
                <AboutArrow
                  className={styles.tokenRightImg}
                />
              </div>
            </div>
            <div className={styles.tokenContent}>
              <TokenCard className={styles.tokenContentImg} />
              <div className={styles.tokenCardBody}>
                <div className={styles.tokenContentText}>
                  ZKFairy Token is the native token of Bitcoin Cats Gaming Ecosystem.
                  It is originally inscribed on Bitcoin and part of it is bridged / wrapped
                  to Ethereum to benefit from the well developed DeFi and GameFi
                  infrastructure. ZKFairy Token is the Utility token with the ZKFairy Master
                  gaming ecosystem, which can be used to purchase and upgrade
                  in-game assets, including characters, buildings, equipment, land,
                  and more. It also serves as a ticket, allowing players to access
                  special treasure points.
                </div>
                <img
                  src={require('@/assets/home/tokenMedal.png')}
                  alt="tokenMedal"
                  className={styles.tokenContentMedal}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.journeyContainer} id="journey">
          <div className={styles.journeyBackground}>
            <img
              src={require('@/assets/home/journeyBackground.png')}
              alt="journeyBackground"
              className={styles.journeyBackgroundImg}
            />
            <div className={styles.journeyBackgroundColor} />
            <div className={styles.journeyBackgroundStar} />
            <div className={styles.journeyBackgroundFooter}>
              <img
                src={require('@/assets/home/journeyFooter.png')}
                alt="journeyFooter"
                className={styles.journeyBackgroundFooterImg}
              />
            </div>
          </div>
          <div className={styles.journeyWrapper}>
            <div className={styles.journeyHeader}>
              <div className={styles.journeyLeft}>
                <AboutArrow
                  className={styles.journeyLeftImg}
                />
              </div>
              <div className={styles.journeyTitle}>
                ZKFairy World
              </div>
              <div className={styles.journeyRight}>
                <AboutArrow
                  className={styles.journeyRightImg}
                />
              </div>
            </div>
            <div className={styles.journeyContent}>
              The world journey of btc maid has already begun. Come and join this exciting adventure together!
            </div>
            <div className={styles.journeyCard}>
              <div className={styles.journeyCardCharacter}>
                <img
                  src={require('@/assets/home/journeyGirl.png')}
                  alt="journeyGirl"
                  className={styles.journeyCardCharacterImg}
                />
              </div>
              <div className={styles.journeyCardPops}>
                <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem1)}>
                  <JourneyPop
                    className={styles.journeyCardPopsItemImg}
                  />
                  <div className={styles.journeyCardPopsItemText}>
                    <p>It's been a long time since someone has touched me... But it wouldn't matter with you, sir.</p>
                  </div>
                </div>
                <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem2)}>
                  <JourneyPop
                    className={styles.journeyCardPopsItemImg}
                  />
                  <div className={styles.journeyCardPopsItemText}>
                    <p>Welcome to the Wonderful General Store. We have a wide variety of items here. Come on in and take a look.</p>
                  </div>
                </div>
                <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem3)}>
                  <JourneyPop
                    className={styles.journeyCardPopsItemImg}
                  />
                  <div className={styles.journeyCardPopsItemText}>
                    <p>It seems like today is a sale on accessories. If you have someone to give a gift to, this would be a great opportunity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
