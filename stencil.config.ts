import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bmi-component-stencil',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {src: 'icons', dest: 'icons'}
      ]
    }, 
    {
      type: 'www' 
    }
  ]
};
