import { projects } from '../../data/projects';
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
				{projects.map((projeto) => (
					<Case key={projeto.id}>
						<Shot>{'</>'}</Shot>
						<div>
							<Name>{projeto.titulo}</Name>
							<Description>{projeto.descricao}</Description>
							<Tags>
								{projeto.tecnologias.map((tec) => (
									<Tag key={tec.nome} $cor={tec.cor}>
										{tec.nome}
									</Tag>
								))}
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
				))}
			</Section>
		</Container>
	);
}

export default Projects;
