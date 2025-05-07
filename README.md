# Glencraig Primary School Welcome Guide

![Glencraig Primary School](https://images.unsplash.com/photo-1537815749002-de6a533c64db?auto=format&fit=crop&w=300&h=300)

## Overview

This project is an interactive welcome guide for Glencraig Primary School, designed to help new students feel comfortable and excited about joining the school. Created with input from Year 6 students, this guide provides a friendly introduction to school life through the eyes of current students.

## Features

- **Interactive Sorting Dog**: A fun feature that uses a magical dog to assign new students to one of four school houses (Eagles, Falcons, Hawks, or Owls)
- **School Information**: Key details about classes, friends, houses, and activities at the school
- **Student Testimonials**: Real quotes from Year 6 students about their experiences
- **Responsive Design**: Works well on all devices from mobile phones to desktop computers
- **Accessibility**: Designed to be usable by all students, including those with disabilities

## Technical Details

This project is built with modern web technologies:

- **React**: For building the user interface
- **TypeScript**: For type safety and better code quality
- **Vite**: As the build tool for fast development
- **Tailwind CSS**: For styling
- **shadcn-ui**: For UI components

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ibrow10/glencraig-welcome-hat-magic.git

# Navigate to the project directory
cd glencraig-welcome-hat-magic

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:8080

## Building for Production

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

## Deployment Options

This application can be deployed to various hosting platforms:

- **Netlify**: Easy deployment with continuous integration
- **Vercel**: Great for React applications with preview deployments
- **GitHub Pages**: Free hosting for static sites
- **Firebase Hosting**: Google's hosting solution with additional services

## Project Structure

```
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # React components
│   ├── lib/             # Utility functions and constants
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Accessibility Features

This project includes several accessibility enhancements:

- Proper ARIA attributes for interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Sufficient color contrast for text elements
- Screen reader friendly content

## License

This project is available for educational purposes. Feel free to use it as a template for your own school welcome guide.
