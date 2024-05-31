export interface Config {
  _comment: string;
  topBar: {
    logoUrl: string;
    logoPosition: string;
    title: string;
    description: string;
    links: {
      label: string;
      url: string;
    }[];
    styles: {
      bg: string;
      text: string;
      pad: string;
      cont: string;
      title: string;
      desc: string;
      link: string;
    };
  };
  theme: {
    palette: {
      theme1: Theme;
      theme2: Theme;
      theme3: Theme;
    };
    selectedPalette: string;
    fonts: {
      font1: string;
      font2: string;
      font3: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    selectedFont: string;
    selectedFontSize: string;
    backgroundOptions: {
      value: string;
      label: string;
    }[];
    selectedBackground: string;
  };
  drinksList: {
    layoutOptions: {
      value: string;
      label: string;
    }[];
    selectedLayout: string;
    gridColumns: number;
    expansionPanelHeight: string;
  };
  drinkDetails: any; // Placeholder for drink details configuration
  showAlphabets: boolean;
  alphabetPosition: string;
  language: {
    languageDropDown: boolean;
    preferredLanguage: string;
    supportedLanguages: string[];
  };
  searchBar: boolean;
}

export interface Theme {
  primary: string;
  accent: string;
  secondary: string;
  tertiary: string;
}
