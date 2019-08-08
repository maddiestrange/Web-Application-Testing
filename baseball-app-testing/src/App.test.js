import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import { strike } from './components/Display';

afterEach(rtl.cleanup);

describe('App.js', () => {

  describe('strike()', () => {
    it('should return ...', () => {

      expect(strike()).toBeLessThan(4);
    }
  )})


 })
