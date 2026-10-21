import { useNavigate } from 'react-router-dom';
import { Link, StyledNav } from './styles';

function Nav() {
	const navigate = useNavigate();

	return (
		<StyledNav>
			<Link onClick={() => navigate('/')}>Sobre mim</Link>
			<Link onClick={() => navigate('/tecnologias')}>Tecnologias</Link>
			<Link onClick={() => navigate('/projetos')}>Projetos</Link>
			<Link onClick={() => navigate('/soft-skills')}>Soft Skills</Link>
		</StyledNav>
	);
}

export default Nav;
