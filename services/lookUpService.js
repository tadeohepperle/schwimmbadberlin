export const getSlugnameFromBezirk = bezirk => {
  switch (bezirk) {
    case "Mitte":
      return "mitte";
    case "Friedrichshain-Kreuzberg":
      return "friedrichshain-kreuzberg";
    case "Pankow":
      return "pankow";
    case "Neukölln":
      return "neukoelln";
    case "Charlottenburg-Wilmersdorf":
      return "charlottenburg-wilmersdorf";
    case "Spandau":
      return "spandau";
    case "Steglitz-Zehlendorf":
      return "steglitz-zehlendorf";
    case "Tempelhof-Schöneberg":
      return "tempelhof-schoeneberg";
    case "Treptow-Köpenick":
      return "treptow-koepenick";
    case "Marzahn-Hellersdorf":
      return "marzahn-hellersdorf";
    case "Lichtenberg":
      return "lichtenberg";
    case "Reinickendorf":
      return "reinickendorf";
  }

  return "unbekannter-bezirk";
};

export const getShowNameFromBezirkSlugname = bezirk => {
  switch (bezirk) {
    case "mitte":
      return "Mitte";
    case "friedrichshain-kreuzberg":
      return "Friedrichshain-Kreuzberg";
    case "pankow":
      return "Pankow";
    case "neukoelln":
      return "Neukölln";
    case "charlottenburg-wilmersdorf":
      return "Charlottenburg-Wilmersdorf";
    case "spandau":
      return "Spandau";
    case "steglitz-zehlendorf":
      return "Steglitz-Zehlendorf";
    case "tempelhof-schoeneberg":
      return "Tempelhof-Schöneberg";
    case "treptow-koepenick":
      return "Treptow-Köpenick";
    case "marzahn-hellersdorf":
      return "Marzahn-Hellersdorf";
    case "lichtenberg":
      return "Lichtenberg";
    case "reinickendorf":
      return "Reinickendorf";
  }

  return "unbekannter-bezirk";
};

export const OTs = {
  Mitte: {
    slugName: "mitte",
    ots: [
      "Mitte",
      "Moabit",
      "Hansaviertel",
      "Tiergarten",
      "Wedding",
      "Gesundbrunnen"
    ]
  },
  "Friedrichshain-Kreuzberg": {
    slugName: "friedrichshain-kreuzberg",
    ots: ["Friedrichshain", "Kreuzberg"]
  },
  Pankow: {
    slugName: "pankow",
    ots: [
      "Prenzlauer Berg",
      "Weißensee",
      "Blankenburg",
      "Heinersdorf",
      "Karow",
      "Stadtrandsiedlung Malchow",
      "Pankow",
      "Blankenfelde",
      "Buch",
      "Französisch Buchholz",
      "Niederschönhausen",
      "Rosenthal",
      "Wilhelmsruh"
    ]
  },
  "Charlottenburg-Wilmersdorf": {
    slugName: "charlottenburg-wilmersdorf",
    ots: [
      "Charlottenburg",
      "Wilmersdorf",
      "Schmargendorf",
      "Grunewald",
      "Westend",
      "Charlottenburg-Nord",
      "Halensee"
    ]
  },
  Spandau: {
    slugName: "spandau",
    ots: [
      "Spandau",
      "Haselhorst",
      "Siemensstadt",
      "Staaken",
      "Gatow",
      "Kladow",
      "Hakenfelde",
      "Falkenhagener Feld",
      "Wilhelmstadt"
    ]
  },
  "Steglitz-Zehlendorf": {
    slugName: "steglitz-zehlendorf",
    ots: [
      "Steglitz",
      "Lichterfelde",
      "Lankwitz",
      "Zehlendorf",
      "Dahlem",
      "Nikolassee",
      "Wannsee"
    ]
  },
  "Tempelhof-Schöneberg": {
    slugName: "tempelhof-schoeneberg",
    ots: [
      "Schöneberg",
      "Friedenau",
      "Tempelhof",
      "Mariendorf",
      "Marienfelde",
      "Lichtenrade"
    ]
  },
  Neukölln: {
    slugName: "neukoelln",
    ots: ["Neukölln", "Britz", "Buckow", "Rudow", "Gropiusstadt"]
  },
  "Treptow-Köpenick": {
    slugName: "treptow-koepenick",
    ots: [
      "Alt-Treptow",
      "Plänterwald",
      "Baumschulenweg",
      "Johannisthal",
      "Niederschöneweide",
      "Altglienicke",
      "Adlershof",
      "Bohnsdorf",
      "Oberschöneweide",
      "Köpenick",
      "Friedrichshagen",
      "Rahnsdorf",
      "Grünau",
      "Müggelheim",
      "Schmöckwitz"
    ]
  },
  "Marzahn-Hellersdorf": {
    slugName: "marzahn-hellersdorf",
    ots: ["Marzahn", "Biesdorf", "Kaulsdorf", "Mahlsdorf", "Hellersdorf"]
  },
  Lichtenberg: {
    slugName: "lichtenberg",
    ots: [
      "Friedrichsfelde",
      "Karlshorst",
      "Lichtenberg",
      "Falkenberg",
      "Hohenschönhausen",
      "Malchow",
      "Wartenberg",
      "Fennpfuhl",
      "Rummelsburg"
    ]
  },
  Reinickendorf: {
    slugName: "reinickendorf",
    ots: [
      "Reinickendorf",
      "Tegel",
      "Konradshöhe",
      "Heiligensee",
      "Frohnau",
      "Hermsdorf",
      "Waidmannslust",
      "Lübars",
      "Wittenau",
      "Märkisches Viertel",
      "Borsigwalde"
    ]
  }
};

export const featureDictionary = {
  "kinderfreundliche-schwimmbaeder": {
    showName: "Kinderbecken",
    color: "blue"
  },
  sportbaeder: {
    showName: "Sportbecken",
    color: "blue"
  },
  "wellness-und-spa": { showName: "Wellness & Spa", color: "blue" },
  sauna: {
    showName: "Sauna",
    color: "blue"
  },
  whirlpool: { showName: "Whirlpool", color: "blue" },
  "fitness-studio": { showName: "Fitness-Studio", color: "blue" },
  wasserrutsche: { showName: "Wasserrutsche", color: "blue" },
  freibad: { showName: "Freibad", color: "blue" },
  hallenbad: { showName: "Hallenbad", color: "blue" },
  spassbad: { showName: "Spaßbad", color: "blue", hide: true }
};
