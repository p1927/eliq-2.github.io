export interface Config {
  _comment: string;
  topBar: {
    logoUrl: string;
    logoPosition: string;
    title: string;
    description: string;
    styles: {
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
  };
  drinksList: {
    layoutOptions: {
      value: string;
      label: string;
    }[];
    selectedLayout: string;
    grid: {
      gridTitle: {
        style: string;
      };
      gridCard: {
        style: string;
      };
    };
  };
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
