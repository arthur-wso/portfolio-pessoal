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
				{projects.map((projeto, indice) => (
					<Case key={projeto.id}>
						<Shot $inverso={indice % 2 === 1}>{'</>'}</Shot>
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
							{projeto.linkCodigo && (
								<Button
									href={projeto.linkCodigo}
									target="_blank"
									rel="noreferrer"
								>
									Ver Código
								</Button>
							)}
							{projeto.linkDemo && (
								<Button
									href={projeto.linkDemo}
									target="_blank"
									rel="noreferrer"
								>
									Ver Demo
								</Button>
							)}
						</div>
					</Case>
				))}
			</Section>
		</Container>
	);
}

export default Projects;
