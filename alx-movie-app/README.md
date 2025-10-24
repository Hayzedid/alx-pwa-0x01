# CineSeek - PWA Movie Discovery App

A Progressive Web App (PWA) built with Next.js for discovering and exploring movies.

## Features

- 🎬 Movie discovery and browsing
- 📱 Progressive Web App (PWA) functionality
- 🔄 Service Worker for offline functionality
- 📲 Installable on mobile and desktop devices
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USER_NAME/alx-project-0x14.git alx-pwa-0x01
cd alx-movie-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## PWA Configuration

### Dependencies Installed
- `@ducanh2912/next-pwa`: "^10.2.9"
- `webpack`: "^5.94.0"

### PWA Features
- **Service Worker**: Automatically generated for caching and offline functionality
- **Web App Manifest**: Defines app metadata and installation behavior
- **Installable**: Can be installed on devices like a native app
- **Offline Support**: Basic offline functionality through service worker

### Creating PWA Icons

The app requires the following icons in the `public/icons/` directory:

1. **android-chrome-192x192.png** (192x192px)
2. **apple-icon-152x152.png** (152x152px)  
3. **ms-icon-310x310.png** (310x310px)

**To create these icons:**
1. Prepare your PNG logo
2. Use an online icon generator like [favicon.io](https://favicon.io/favicon-generator/)
3. Generate icons in the required sizes
4. Place them in the `public/icons/` directory with the exact filenames above

## Project Structure

```
alx-movie-app/
├── components/
│   ├── commons/
│   │   └── Button.tsx          # Reusable button component
│   └── layouts/
│       └── Layout.tsx          # Main layout wrapper
├── pages/
│   ├── movies/
│   │   └── index.tsx          # Movies listing page
│   ├── _app.tsx               # App wrapper
│   ├── _document.tsx          # Document with PWA manifest link
│   └── index.tsx              # Homepage
├── public/
│   ├── icons/                 # PWA icons directory
│   └── manifest.json          # Web app manifest
├── styles/
│   └── globals.css            # Global styles
├── next.config.mjs            # Next.js config with PWA
├── package.json               # Dependencies including PWA packages
└── README.md                  # This file
```

## PWA Testing

### Local Testing
1. Run `npm run dev`
2. Open Chrome DevTools
3. Go to Application tab
4. Check:
   - Service Worker registration
   - Manifest loading
   - Installability

### Production Testing
1. Build the app: `npm run build`
2. Start production server: `npm start`
3. Test PWA features in production mode

## Deployment

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your PWA to Vercel.

## Technologies Used

- **Next.js**: React framework with PWA support
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **@ducanh2912/next-pwa**: PWA plugin for Next.js
- **Webpack**: Module bundler for PWA assets

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## PWA Features Implemented

✅ **Web App Manifest** - App metadata and installation behavior  
✅ **Service Worker** - Automatic caching and offline support  
✅ **Installable** - Can be installed on devices  
✅ **Responsive Design** - Works on all device sizes  
✅ **TypeScript Support** - Full type safety  
⏳ **PWA Icons** - Need to be created (see instructions above)  

## Next Steps

1. Create the required PWA icons
2. Test PWA functionality
3. Deploy to production
4. Test installation on mobile devices
