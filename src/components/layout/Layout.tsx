import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../../hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-dark-800 to-dark-900 text-white dark:bg-gradient-to-br dark:from-dark-900 dark:to-black dark:text-white">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;