Overview
This application is built with Angular. Additionally Angular material and Tailwind CSS has been used. It includes several UI components like top bar, search bar, drink list, card view, and drink details. The configuration of these UI components can be managed through a JSON object, allowing for dynamic adjustments without altering the code. This approach provides flexibility and adaptability, making it easy to update the UI based on user preferences or application requirements.

Key Components:
TopBarComponent
SearchBarComponent
DrinkListComponent
CardViewComponent
DrinkDetailsComponent
ConfigService

JSON Configuration
The JSON object provided is used to manage the layout and styling of various components. Here's how each part of the JSON object influences the UI elements:

json:

{
"\_comment": "Possible layout values: 'grid', 'expansion-panel', 'instagram'",
"topBar": {
"title": "My Drink App",
"description": "Welcome to our drink app!",
"styles": {
"pad": "p-4",
"cont": "",
"title": "font-serif text-4xl font-bold leading-tight",
"desc": "text-sm"
}
},
"theme": {
"palette": {
"theme1": { // defined theme colors.
"primary": "#E9F1FA",
"accent": "#00ABE4",
"secondary": "#FFFFFF"
},
"theme2": {
"primary": "#F4EAC2",
"accent": "#C1A048",
"secondary": "#faffe2"
},
"theme3": {
"primary": "#ffcfcf",
"accent": "#E7473C",
"secondary": "#FFFFFF"
}
},
"selectedPalette": "theme1" // to change theme among the three themes.
},
"drinksList": {
"layoutOptions": [
{
"value": "grid",
"label": "Grid"
},
{
"value": "expansion-panel",
"label": "Expansion Panel"
},
{
"value": "instagram",
"label": "Instagram Layout"
}
],
"selectedLayout": "grid", // to set layout based on three options
"grid": {
"gridCard": {
"style": "background-color: light-grey; padding: 10px"
},
"gridTitle": {
"style": "font-size: 16px; font-weight: bold; color: #333;"
}
}
},
"language": {
// idea was to show user on preferred language, but due to time constraint , I just marked the preferred language text as bold.
"languageDropDown": true,
"preferredLanguage": "EN",
"supportedLanguages": [
"EN",
"DE",
"ES",
"FR",
"IT"
]
},
"searchBar": true // enable filtering of fetched elements
}

How UI Elements Can Be Managed/Altered Through the JSON Object
Top Bar Configuration:
Title and Description: The topBar object contains title and description fields that set the text displayed in the top bar.
Styles: The styles object within topBar defines CSS classes or inline styles applied to different parts of the top bar, such as padding, title, and description.

// Example usage in TopBarComponent
this.topBar = config.topBar;
this.styles = config.topBar?.styles;

Theme Configuration:
Palette Selection: The theme object includes multiple palettes. The selectedPalette field specifies which palette is currently in use.
Color Application: The colors defined in the selected palette are applied to various elements of the application for consistent theming.

// Example usage in ConfigService
this.primaryColor = config.theme.palette[selectedPalette]?.primary;
this.accentColor = config.theme.palette[selectedPalette]?.accent;
this.secondaryColor = config.theme.palette[selectedPalette]?.secondary;

Drink List Layout:
Layout Options: The drinksList object includes layoutOptions and selectedLayout. These define the possible layouts and the currently selected layout for displaying the drink list.
Grid Styles: The grid object within drinksList contains style definitions for grid cards and titles.

// Example usage in DrinkListComponent
this.layout = config.drinksList.selectedLayout;
this.gridTitleStyle = config.drinksList.grid.gridTitle?.style;
this.gridCardStyle = config.drinksList.grid.gridCard?.style;

Language Settings:
Language Dropdown: The language object contains languageDropDown to toggle the visibility of the language selection dropdown.
Preferred Language: The preferredLanguage field sets the preferred language of the application. So we mark the text in that language as bold. (Was planning earlier to just display the instructions in preferred language)
Supported Languages: The supportedLanguages array lists all languages supported by the application.

// Example usage in LanguageComponent
this.language = this.configService.preferredLanguage;
this.supportedLanguages = config.language.supportedLanguages;

Search Bar Visibility:
Visibility Toggle: The searchBar boolean field controls the visibility of the search bar.

// Example usage in SearchBarComponent
this.showSearchBar = config.searchBar;

Design Decisions and Trade-offs

There can be three type of users who want this application: 1.Interested in getting to know about the drink. (added expansion panel layout (accessing quick information))
2.Selecting a drink based on visual appeal. ( so added Instagram layout)
3.Want to prepare a selected drink themselves. ( so added search and language selection, and grid layout with detail page)

Simple Grid:

Pros:
Familiarity: Grid layouts are widely used and familiar to most users, providing an intuitive way to display information.
Visual Organization: Grids offer a clean and organized presentation of drink items, making it easy for users to browse and compare.
Cons:
Limited Information: Grids may not accommodate extensive details about each drink item, which could be a drawback if users need more information at a glance.

Expansion Panels:
Pros:
Space Efficiency: Expansion panels allow users to view more detailed information about each drink item without cluttering the interface.
Progressive Disclosure: Users can choose which drink items they want to learn more about by expanding individual panels, providing a more focused browsing experience.
Cons:
Interaction Overhead: Users must interact with each panel to reveal additional information, which may require extra effort compared to a grid layout where information is readily visible.
Instagram-style Layout:

Pros:
Visual Engagement: An Instagram-style layout mimics the look and feel of a social media feed, which can be visually engaging and appealing to users.
Emphasis on Imagery: This layout prioritizes drink images, allowing users to focus on visual aspects and aesthetics.
Cons:
Limited Information Density: Instagram-style layouts typically prioritize images over text, so users may need to interact with individual items to access detailed information.

General Thoughts while programming:
Keep Smart and Dumb components.
Data sharing through services so its scalable, when more components are dealt with.
Keeping functions smaller.
Units tests not written because of time constraint.
Trying to have simple components for each necessity.
