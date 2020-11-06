import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/GlobalStyles';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={{}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;