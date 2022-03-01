The solution is ready for review at GitHub - https://github.com/oshchepkov/bb-font-loader-example


# The "Ask"
There are times where Icon fonts do not load in time before used in the application. This causes disruption for the User Interface, showing "text" as a replacement, until the font loads. We can initialize all icon fonts during startup. 

![Image](./readme/)

# How it works
The solution preloads selected fonts during the application starup. The developer is able to add the required font-faces to the style sheet and update configuration to have those fonts preloaded in order to avoid icon names appearing briefly on the screen.  

# How to add to a project

1. Update TypeScript defenitions in `./tsconfig.base.json`.
   
   Add `es2021` to `lib` array:

   ```
   "lib": ["es2021", "dom"],
   ```
2. Install types for @types/css-font-loading-module

    `npm install -save -dev @types/css-font-loading-module`

3. Add a font. "Material Icons" and "Material Icons Outlined" fonts are included OOTB, but the developer can add any other font to the application. For instance "IcoMoon":

    a. Copy font files into projects `./assets/fonts` folder, for example:

    `src/assets/fonts/IcoMoon/icomoon.ttf `

    b. A font-face for the desired font has to be added to the application's stylesheet:
   
   ```
   @font-face {
        font-family: "IcoMoon";
        font-style: normal;
        font-weight: 400;
        src: url("assets/fonts/IcoMoon/icomoon.ttf") format("truetype");
    }
    ```

4. Import `FontsLoaderModule` and `FontsLoaderConfigurationToken` in `src/app/app.module.ts`.

5. Add custom configuration in `src/app/app.module.ts` onto `providers` aray which lists fonts to preload.

```
    {
      provide: FontsLoaderConfigurationToken,
      useValue: { fonts: [{ family: 'Material Icons Outlined' }, { family: 'Material Icons' }, { family: 'IcoMoon' }] },
    },
```

`!` Text in the "family" field must match the font-face family name.


**Harvested Code**
https://drive.google.com/drive/u/0/folders/1IlToe3g8exjr_EWM1hTxHdMqMTO96Iy2

------

**Acceptance Criteria**
**Given** a new retail session
**When** the app initializes
**Then** the app should preload icon fonts

**Given** a list of fonts to preload 
**When** the app initializes
**Then** the app preloads the list of fonts

------

**Technical Solution**
https://angular.io/api/core/APP_INITIALIZER
Just like the Remote Config service in the retail-app, preload the fonts


---
**README should include**

- the harvesting "Ask"
- how it works 
- how-to add to a project
- Dev dependencies, such as Backend 