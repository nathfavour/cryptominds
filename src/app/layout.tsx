/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useState } from 'react';
import "../../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${darkMode ? 'dark' : ''} antialiased`}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="flex-grow">
              CryptoMinds
            </Typography>
            <IconButton color="inherit" onClick={handleThemeChange}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Button color="inherit">Connect Wallet</Button>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
