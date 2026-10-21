import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SoftSkills from './pages/SoftSkills';
import Technology from './pages/Technology';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'tecnologias',
				element: <Technology />,
			},
			{
				path: 'projetos',
				element: <Projects />,
			},
			{
				path: 'soft-skills',
				element: <SoftSkills />,
			},
		],
	},
]);

export default router;
