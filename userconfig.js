let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  clock: {
    format: "X | x",
    iconColor: "var(--accent)",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  localIcons: false,
  fastlink: "https://google.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Social Media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "var(--ctp-red)",
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "var(--ctp-mauve)",
            },
            {
              name: "twitter",
              url: "https://x.com/home",
              icon: "brand-twitter",
              icon_color: "var(--ctp-pink)",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "var(--ctp-pink)",
            },
          ],
        },
        {
          name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "var(--ctp-mauve)",
            },
          ],
        },
        {
          name: "nix",
          links: [
            {
              name: "nixpkgs",
              url: "https://search.nixos.org/packages?channel=unstable",
              icon: "package",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "hm options search",
              url: "https://mipmip.github.io/home-manager-option-search",
              icon: "search",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "nixos wiki",
              url: "https://nixos.wiki",
              icon: "book",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "noogle",
              url: "https://noogle.dev",
              icon: "letter-n",
              icon_color: "var(--ctp-blue)",
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "go docs",
              url: "https://go.dev",
              icon: "brand-golang",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "rust docs",
              url: "https://www.rust-lang.org/",
              icon: "brand-rust",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "book",
              icon_color: "var(--ctp-green)",
            },
          ],
        },
      ],
    },
    {
      name: "Misc",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "anime",
          links: [
            {
              name: "myanimelist",
              url: "https://myanimelist.net",
              icon: "letter-a",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "anichart",
              url: "https://anichart.net",
              icon: "letter-a",
              icon_color: "var(--ctp-teal)",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons) {
    document.getElementsByTagName("head")[0].appendChild(css);
  }
})();