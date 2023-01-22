module.exports = {
  "root": "./docs",
  "plugins": [
    "-lunr",
    "elasticsearch",
    "flexible-alerts",
    "folding-content",
    "intopic-toc",
    "mermaid-newface",
    "toggle-chapters",
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
