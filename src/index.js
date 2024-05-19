import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container); // Correct usage of createRoot
root.render(<App />);
<GlobalStyles/>
