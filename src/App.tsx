import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import { customTheme } from './styles/theme';
import withSplashScreen, { SplashComponent } from './HOCs/splash-screen/splash-screen.component';
import { Route, Switch } from 'react-router-dom';
import { BaseRoutes } from "./routes/route.component";

const App: React.FC<any> = () => {

  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Suspense fallback={<SplashComponent />}>
        <Switch>
          {BaseRoutes.map(({ ...props }) => {
            return <Route {...props} />;
          })}
        </Switch>
      </Suspense>
    </ChakraProvider>
  );
};

export default withSplashScreen(App);

