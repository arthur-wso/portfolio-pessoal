import {
	Button,
	Case,
	Container,
	Description,
	Name,
	Section,
	Shot,
	Tag,
	Tags,
	Title,
} from './styles.js';

function Projects() {
	return (
		<Container>
			<Title>Meus Projetos</Title>
			<Section>
				<Case>
					<Shot>{'</>'}</Shot>
					<div>
						<Name>Login de Usuários</Name>
						<Description>
							Aplicação Full Stack de cadastro e consulta de usuários, com API
							REST desenvolvida por mim. O usuário pode se registrar e
							visualizar a lista de usuários cadastrados.
						</Description>
						<Tags>
							<Tag>JavaScript</Tag>
							<Tag>React</Tag>
						</Tags>
						<Button
							href="https://github.com/arthur-wso/login-de-usuarios"
							target="_blank"
							rel="noreferrer"
						>
							Ver Código
						</Button>
					</div>
				</Case>
			</Section>
		</Container>
	);
}

export default Projects;
