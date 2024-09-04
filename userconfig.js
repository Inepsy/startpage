let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'United Kingdom, London',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
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
  disabled: [],
  localIcons: false,
  fastlink: "https://inepsy.me",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
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
      name: "misc",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "misc",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.co.uk/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "slimevr docs",
              url: "https://docs.slimevr.dev/index.html",
              icon: "letter-s",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources 3d printing",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
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
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "linux",
          links: [
            {
              name: "arch linux",
              url: "https://archlinux.org/",
              icon: "letter-a",
              icon_color: "#7daea3",
            },
            {
              name: "arch wiki",
              url: "https://wiki.archlinux.org/title/Main_page",
              icon: "book",
              icon_color: "#7daea3",
            },
            {
              name: "aur",
              url: "https://aur.archlinux.org/",
              icon: "package",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "rust docs",
              url: "https://www.rust-lang.org/",
              icon: "brand-rust",
              icon_color: "#e78a4e",
            },
            {
              name: "go docs",
              url: "https://go.dev",
              icon: "brand-golang",
              icon_color: "#7daea3",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "book",
              icon_color: "#a9b665",
            },
            {
              name: "CS50",
              url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
              icon: "code-asterix",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "outlook",
              url: "https://outlook.live.com/mail/0/",
              icon: "letter-o",
              icon_color: "#7daea3",
            },
            {
              name: "proton",
              url: "https://proton.me/mail",
              icon: "letter-p",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "shops",
          links: [
            {
              name: "ebay",
              url: "https://www.ebay.co.uk/",
              icon: "letter-e",
              icon_color: "#e78a4e",
            },
            {
              name: "amazon",
              url: "https://www.amazon.co.uk/",
              icon: "brand-amazon",
              icon_color: "#7daea3",
            },
            {
              name: "shein",
              url: "https://www.shein.co.uk/",
              icon: "letter-s",
              icon_color: "#d3869b",
            },
            {
              name: "vinted",
              url: "https://www.vinted.co.uk/",
              icon: "brand-vinted",
              icon_color: "#a9b665",
            },
            {
              name: "depop",
              url: "https://www.depop.com/",
              icon: "letter-d",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "myanimelist",
              url: "https://myanimelist.net",
              icon: "letter-a",
              icon_color: "#7daea3",
            },
            {
              name: "anichart",
              url: "https://anichart.net",
              icon: "letter-a",
              icon_color: "#00000",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
