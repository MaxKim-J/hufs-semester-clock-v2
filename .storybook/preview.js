import React from 'react';
import GlobalStyle from '../src/_shared/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <div
        css={{
          width: '100%',
          height: '500px',
          backgroundImage:
            'url(https://firebasestorage.googleapis.com/v0/b/hufssemesterclockfirebase.appspot.com/o/default_image_seoul.png?alt=media&token=ad7708be-af57-4428-9a32-8050018a11ea)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'absolute',
          zIndex: -10,
        }}
      >
        <div
          css={{
            backgroundColor: 'black',
            opacity: 0.5,
            width: '100%',
            height: '500px',
          }}
        />
      </div>
      <GlobalStyle />
      <div
        css={{
          padding: '32px',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];
