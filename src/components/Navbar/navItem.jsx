// src/data/navItems.js

const navItems = [
  {
    label: "Edible Salt",
    path: "edible-salt",
    submenu: [
      {
        label: "Sea Salt",
        path: "sea-salt",
        submenu: [
          { label: "Fine Grain Sea Salt (Table Salt)", path: "fine-grain" },
          { label: "Coarse Grain Sea Salt", path: "coarse-grain" },
        ],
      },
      {
        label: "Lake Salt",
        path: "lake-salt",
        submenu: [
          { label: "Lake Salt", path: "lake" },
        ],
      },
      {
        label: "Culinary Salt",
        path: "culinary-salt",
        submenu: [
          { label: "Crystal Salt Granules (Light Pink)", path: "crystal-light-pink" },
          { label: "Crystal Salt Granules (Medium Pink)", path: "crystal-medium-pink" },
          { label: "Salt to Add", path: "salt-to-add" },
          { label: "Crystal Salt Granules (White)", path: "crystal-white" },
          { label: "Running Salt (Light Pink)", path: "running-light-pink" },
          { label: "Running Salt (Medium Pink)", path: "running-medium-pink" },
          { label: "Running Salt (Dark Pink)", path: "running-dark-pink" },
          { label: "Running Salt (White)", path: "running-white" },
          { label: "Flossy Salt", path: "flossy" },
          { label: "Crystal Salt Chunks (Pink)", path: "chunks-pink" },
        ],
      },
      {
        label: "Animal Lick Salt",
        path: "animal-lick",
        submenu: [
          { label: "Square", path: "square" },
          { label: "Cylinder", path: "cylinder" },
          { label: "Natural Cylinder", path: "natural-cylinder" },
          { label: "Feed Additive", path: "feed-additive" },
        ],
      },
    ],
  },
  {
    label: "Wellness & Bath",
    path: "wellness-bath",
    submenu: [
      {
        label: "Bath Salt",
        path: "bath-salt",
        submenu: [
          { label: "Deo Stick", path: "deo-stick" },
          { label: "Soap (Cake Shape)", path: "soap-cake" },
          { label: "Soap (Heart Shape)", path: "soap-heart" },
          { label: "Salt Balls", path: "salt-balls" },
        ],
      },
      {
        label: "Aromatherapy",
        path: "aromatherapy",
        submenu: [
          { label: "Aroma Salt Lamps", path: "aroma-lamps" },
          { label: "Aroma Diffuser - Natural", path: "diffuser-natural" },
          { label: "Aroma Diffuser - Square", path: "diffuser-square" },
          { label: "Foot Detox Dome", path: "detox-dome" },
          { label: "Foot Detox Blocks", path: "detox-blocks" },
        ],
      },
      {
        label: "Salt Room Therapy",
        path: "salt-room-therapy",
        submenu: [
          { label: "Salt Tile Square", path: "tile-square" },
          { label: "Salt Tile Rectangle", path: "tile-rectangle" },
          { label: "Salt Tile One Side Rough", path: "tile-rough" },
          { label: "Salt Tile Round", path: "tile-round" },
        ],
      },
    ],
  },
  {
    label: "Home & Decor",
    path: "home-decor",
    submenu: [
      {
        label: "Salt Lamps",
        path: "lamps",
        submenu: [
          { label: "Natural Shape Lamp", path: "natural" },
          { label: "Geometrical Shape Lamp", path: "geometrical" },
          { label: "Figure Shape Lamp", path: "figure" },
          { label: "USB Lamps", path: "usb" },
          { label: "Night Light Lamps", path: "night-light" },
          { label: "Fire Bowl", path: "fire-bowl" },
          { label: "Iron Basket", path: "iron-basket" },
          { label: "Wooden Basket", path: "wooden-basket" },
        ],
      },
      {
        label: "Salt Candle Holders",
        path: "candle-holders",
        submenu: [
          { label: "Natural Shapes Candle Holder", path: "natural" },
          { label: "Geometrical Shapes Candle Holder", path: "geometrical" },
          { label: "Cone Shape Candle Holder", path: "cone" },
        ],
      },
    ],
  },
  {
    label: "Cooking & Serving",
    path: "cooking-serving",
    submenu: [
      {
        label: "Grilling Salt Plates",
        path: "grilling-plates",
        submenu: [
          { label: "Grilling Salt Plates 500 g", path: "500g" },
          { label: "Grilling Salt Plates 4kg", path: "4kg" },
        ],
      },
      {
        label: "Salt Crockery",
        path: "salt-crockery",
        submenu: [
          { label: "Shot Glass", path: "shot-glass" },
          { label: "Mortar & Pestle", path: "mortar-pestle" },
          { label: "Salad Bowl", path: "salad-bowl" },
          { label: "Pink Salt Pestle", path: "salt-pestle" },
          { label: "Salt Serving Plate", path: "serving-plate" },
        ],
      },
    ],
  },
  {
    label: "Industrial & Specialty Salts",
    path: "/industrial-specialty-salts",
    submenu: [], // Can be expanded if needed
  },
];

export default navItems;
