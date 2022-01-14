import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const mockAxios = new MockAdapter(axios, { delayResponse: 200 });
