import React from "react";
import styles from "./style.less";
import classNames from "classnames";
import { useModel } from "@umijs/max";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Tooltip } from "antd";

const Header: React.FC = () => {
  const { headerTab, setHeaderTab } = useModel("useSetting");

  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <img
              className={styles.headerLogoImg}
              src={require("@/assets/logo.png")}
              alt="logo"
            />
          </div>
          <div className={styles.headerNavContainer}>
            <div
              className={classNames(styles.headerNavItem, headerTab === "home" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("home");
                window.location.href = "#banner";
              }}
            >
              Home
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "about" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("about");
                window.location.href = "#about";
              }}
            >
              About
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "token" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("token");
                window.location.href = "#token";
              }}
            >
              Token
            </div>
            <div className={styles.headerNavItem}>
              NFT
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "journey" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("journey");
                window.location.href = "#journey";
              }}
            >
              Journey
            </div>
          </div>
        </div>
        <div className={classNames(styles.headerRight, styles.headerRightDesktop)}>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              openAccountModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  className={styles.connectWallet}
                  onClick={() => {
                    if (ready && !connected) {
                      openConnectModal();
                    } else {
                      openAccountModal();
                    }
                  }}
                >
                  {connected ? (
                    <span>{`${account?.address?.slice(0, 6)}...${account?.address?.slice(-4)}`}</span>
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
          <div className={styles.socialMedia}>
            <Tooltip
              placement="top"
              title={"Coming Soon"}
            >
              <div className={styles.socialMediaItem}>
                <FaTelegramPlane
                  className={styles.socialMediaItemIcon}
                />
              </div>
            </Tooltip>
            <div
              className={styles.socialMediaItem}
              onClick={() => window.open("https://twitter.com/ZKFairy", "_blank")}
            >
              <FaXTwitter
                className={styles.socialMediaItemIcon}
              />
            </div>
          </div>
        </div>
        <div className={classNames(styles.headerRight, styles.headerRightMobile)}>
          <div className={styles.headerRightMobileItem}>
            <IoMdMenu
              className={styles.headerRightMobileItemIcon}
              onClick={() => setMobileMenu(true)}
            />
          </div>
          <div
            className={styles.headerNavContainerMobile}
            style={{
              height: mobileMenu ? "100%" : "0",
              opacity: mobileMenu ? 1 : 0,
              visibility: mobileMenu ? "visible" : "hidden",
            }}
          >
            <div className={styles.headerNavContainerMobileHeader}>
              <div className={styles.headerNavContainerMobileHeaderButtons}>
                <IoMdClose
                  className={styles.headerNavContainerMobileHeaderIcon}
                  onClick={() => setMobileMenu(false)}
                />
              </div>
              <div className={styles.headerMobileLogo}>
                <img
                  className={styles.headerMobileLogoImg}
                  src={require("@/assets/logo.png")}
                  alt="logo"
                />
              </div>
              <div className={styles.headerNavContainerMobileContent}>
                <div
                  className={classNames(styles.headerNavItem, headerTab === "home" && styles.headerNavItemActive)}
                  onClick={() => {
                    setHeaderTab("home");
                    window.location.href = "#banner";
                    setMobileMenu(false);
                  }}
                >
                  Home
                </div>
                <div
                  className={classNames(styles.headerNavItem, headerTab === "about" && styles.headerNavItemActive)}
                  onClick={() => {
                    setHeaderTab("about");
                    window.location.href = "#about";
                    setMobileMenu(false);
                  }}
                >
                  About
                </div>
                <div
                  className={classNames(styles.headerNavItem, headerTab === "token" && styles.headerNavItemActive)}
                  onClick={() => {
                    setHeaderTab("token");
                    window.location.href = "#token";
                    setMobileMenu(false);
                  }}
                >
                  Token
                </div>
                <div className={styles.headerNavItem}>
                  NFT
                </div>
                <div
                  className={classNames(styles.headerNavItem, headerTab === "journey" && styles.headerNavItemActive)}
                  onClick={() => {
                    setHeaderTab("journey");
                    window.location.href = "#journey";
                    setMobileMenu(false);
                  }}
                >
                  Journey
                </div>
              </div>
              <div className={styles.headerNavContainerMobileButtons}>
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openConnectModal,
                    openAccountModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                      <div
                        className={styles.headerNavContainerMobileConnectWallet}
                        onClick={() => {
                          if (ready && !connected) {
                            openConnectModal();
                          } else {
                            openAccountModal();
                          }
                        }}
                      >
                        {connected ? (
                          <span>{`${account?.address?.slice(0, 6)}...${account?.address?.slice(-4)}`}</span>
                        ) : (
                          <span>Connect Wallet</span>
                        )}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
                <div className={styles.headerNavContainerMobileSocialMedia}>
                  <Tooltip
                    placement="top"
                    title={"Coming Soon"}
                  >
                    <div className={styles.headerNavContainerMobileSocialMediaItem}>
                      <FaTelegramPlane
                        className={styles.headerNavContainerMobileSocialMediaItemIcon}
                      />
                      <span>Telegram</span>
                    </div>
                  </Tooltip>
                  <div
                    className={styles.headerNavContainerMobileSocialMediaItem}
                    onClick={() => window.open("https://twitter.com/ZKFairy", "_blank")}
                  >
                    <FaXTwitter
                      className={styles.headerNavContainerMobileSocialMediaItemIcon}
                    />
                    <span>Twitter</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerNavContainerMobileFooter}>
              ZKFairy
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
