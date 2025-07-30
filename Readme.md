## https://devbazylev.github.io/innowise/

# Instruction

1. Task:
```bash
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0
```

2. How to run the app:

```bash
git clone https://github.com:your-username/innowise.git
cd calculator
```

```bash
npm install
```

```bash
npm run dev
```

## 📝 Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run start` - Start development server
- `npm run build` - Create production build

### Code Quality
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
src/
├── js/
│   ├── modules/
│   │   ├── info.js          # Calculator logic
│   │   └── header.js        # Theme management
│   └── utils/
│       └── util.js          # Utility functions
├── sass/
│   ├── blocks/
│   │   ├── btn.scss         # Button styles
│   │   ├── info.scss        # Calculator styles
│   │   └── header.scss      # Header styles
│   ├── global/
│   │   ├── variables.scss   # SCSS variables
│   │   ├── mixins.scss      # SCSS mixins
│   │   ├── fonts.scss       # Font imports
│   │   ├── reboot.scss      # CSS reset
│   │   └── utils.scss       # Utility classes
│   └── style.scss           # Main SCSS file
├── img/                     # Images and assets
└── main.js                  # Application entry point
```
