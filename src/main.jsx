import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles></GlobalStyles>
		<RouterProvider router={router} />
	</StrictMode>,
);
