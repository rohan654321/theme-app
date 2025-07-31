# Multi-Theme Switcher App

A React + TypeScript application featuring three distinct themes with unique layouts, fonts, and styling approaches. Built with Vite, Redux Toolkit, and React Router.

##  Features

- **Three Unique Themes**: Minimalist, Dark Sidebar, and Colorful Cards
- **Persistent Theme Storage**: Themes are saved to localStorage
- **Responsive Design**: Works seamlessly on all devices
- **API Integration**: Real product data from Fake Store API
- **Smooth Transitions**: Beautiful animations between theme switches
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Modern state management
- **React Router**: Client-side routing

##  Project Structure

\`\`\`
react-theme-switcher/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header with theme selector
│   │   ├── Header.css              # Header component styles
│   │   ├── ProductCard.tsx         # Individual product card component
│   │   └── ProductCard.css         # Product card styles
│   ├── hooks/
│   │   └── redux-hooks.ts          # Typed Redux hooks (useAppDispatch, useAppSelector)
│   ├── pages/
│   │   ├── Home.tsx                # Home page component
│   │   ├── Home.css                # Home page styles
│   │   ├── About.tsx               # About page component
│   │   ├── About.css               # About page styles
│   │   ├── Contact.tsx             # Contact page component
│   │   └── Contact.css             # Contact page styles
│   ├── store/
│   │   ├── store.ts                # Redux store configuration
│   │   ├── themeSlice.ts           # Theme state management
│   │   └── productsSlice.ts        # Products state management with async thunks
│   ├── App.tsx                     # Main app component with routing
│   ├── App.css                     # Global app styles
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global CSS and theme variables
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json              # TypeScript config for Node.js
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
\`\`\`

##  Theme System

### Theme 1 - Minimalist
- **Design**: Clean, minimal interface
- **Colors**: White background with subtle grays
- **Typography**: System fonts (San Francisco, Segoe UI, Roboto)
- **Layout**: Centered content with maximum width constraints
- **Cards**: Simple white cards with subtle shadows

### Theme 2 - Dark Sidebar
- **Design**: Professional dark interface with sidebar navigation
- **Colors**: Dark grays and blues with purple accents
- **Typography**: Georgia serif font for elegance
- **Layout**: Sidebar navigation with main content area
- **Cards**: Dark cards with stronger shadows and hover effects

### Theme 3 - Colorful Cards
- **Design**: Vibrant, playful interface
- **Colors**: Gradient backgrounds with warm colors
- **Typography**: Pacifico cursive font for fun appeal
- **Layout**: Full-width with colorful gradient backgrounds
- **Cards**: Gradient cards with rotation effects and rounded corners

##  Technology Stack

- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Full type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Redux Toolkit**: Modern Redux with simplified syntax
- **React Router**: Declarative routing for React
- **CSS Modules**: Scoped styling approach
- **Fake Store API**: External API for product data

##  Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd react-theme-switcher
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

5. **Preview production build**
   \`\`\`bash
   npm run preview
   \`\`\`

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Architecture Overview

### State Management
The application uses Redux Toolkit for state management with two main slices:

- **themeSlice**: Manages current theme and persistence
- **productsSlice**: Handles product data fetching and loading states

### Component Structure
- **Pages**: Top-level route components (Home, About, Contact)
- **Components**: Reusable UI components (Header, ProductCard)
- **Hooks**: Custom typed Redux hooks for type safety

### Styling Approach
- **CSS Modules**: Component-scoped styles
- **Theme Classes**: Global theme classes applied to body
- **Responsive Design**: Mobile-first approach with media queries

##  Key Features Explained

### Theme Switching
- Themes are managed through Redux state
- Theme preference is persisted in localStorage
- CSS classes are dynamically applied based on current theme
- Smooth transitions between theme changes

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized typography scaling

### API Integration
- Async data fetching with Redux Toolkit Query
- Loading and error states
- Product data from Fake Store API
- Optimistic UI updates

##  Data Flow

1. **Theme Selection**: User selects theme → Redux action → localStorage → CSS class update
2. **Navigation**: User clicks link → React Router → Component render
3. **API Data**: Component mount → Redux thunk → API call → State update → UI render

##  Customization

### Adding New Themes
1. Add new theme type to `ThemeType` in `themeSlice.ts`
2. Create CSS classes in component stylesheets
3. Add theme option to header dropdown
4. Update theme-specific styling

### Adding New Pages
1. Create page component in `src/pages/`
2. Add corresponding CSS file
3. Add route to `App.tsx`
4. Update navigation in `Header.tsx`

##  Performance Optimizations

- **Code Splitting**: React.lazy for route-based splitting
- **Memoization**: React.memo for expensive components
- **Efficient Re-renders**: Proper Redux selector usage
- **Asset Optimization**: Vite's built-in optimizations

##  Testing Considerations

- **Component Testing**: Test theme switching functionality
- **Integration Testing**: Test Redux state management
- **E2E Testing**: Test complete user workflows
- **Accessibility Testing**: Ensure keyboard navigation works

##  Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features Used**: CSS Grid, Flexbox, CSS Custom Properties

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

##  License

This project is open source and available under the [MIT License](LICENSE).

##  External Dependencies

- **@reduxjs/toolkit**: Modern Redux toolkit
- **react-router-dom**: Client-side routing
- **react-redux**: React bindings for Redux

##  Support

For questions or issues, please open an issue on the GitHub repository.

---

**Happy coding!**
