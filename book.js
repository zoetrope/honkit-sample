module.exports = {
  "root": "./docs",
  "plugins": [
    "-lunr",
    "elasticsearch",
    "intopic-toc",
    "toggle-chapters",
    "folding-content",
    "flexible-alerts",
    "uml"
  ],
  "pluginsConfig": {
    "elasticsearch": {
      "host": "",
      "index": "",
      "maxResults": 50,
    },
    "flexible-alerts": {
      "style": "flat"
    }
  }
};
