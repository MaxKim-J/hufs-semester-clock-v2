import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/dont-cleanup-after-each';
import axios from 'axios';

axios.defaults.baseURL =
  'https://us-central1-hufssemesterclockfirebase.cloudfunctions.net';
