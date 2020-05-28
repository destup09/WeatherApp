const deviceSize = {
  desktop: "2560px",
  laptopL: "1440px",
  laptop: "1024px",
  tablet: "768px",
  mobileL: "525px",
  mobileM: "375px",
  mobileS: "320px",
};

const device = {
  desktopL: `(max-width: ${deviceSize.desktop})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  laptopL: `(max-width: ${deviceSize.laptopL})`,
  laptop: `(max-width: ${deviceSize.laptop})`,
  tablet: `(max-width: ${deviceSize.tablet})`,
  mobileL: `(max-width: ${deviceSize.mobileL})`,
  mobileM: `(max-width: ${deviceSize.mobileM})`,
  mobileS: `(max-width: ${deviceSize.mobileS})`,
};

export default device;
