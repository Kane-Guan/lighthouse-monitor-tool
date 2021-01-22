const desktopSetting = require('./chrome-config/lr-desktop-config.js');
const mobileSetting = require('./chrome-config/lr-mobile-config.js');


module.exports = {
  ci: {
    collect: {
      url: [
        "https://qa-beta.theknot.com/content/lauren-conrad-celebrate-book?mobile",
        "https://qa-beta.theknot.com/content/lauren-conrad-celebrate-book?desktop"
      ],
      numberOfRuns: 5,
      settings: desktopSetting
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lighthouse-learning.herokuapp.com/",
      token: "30720bbd-acf7-4113-bf0a-4926a99798bd"
    },
    wizard: {
      serverBaseUrl: "https://lighthouse-learning.herokuapp.com/"
    },
  },
};
