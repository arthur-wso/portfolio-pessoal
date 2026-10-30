import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import {
	Button,
	Case,
	Container,
	Description,
	Name,
	Overlay,
	Section,
	Shot,
	Tag,
	Tags,
	Title,
	ZoomImage,
} from './styles.js';

function Projects() {
	const [imagemAberta, setImagemAberta] = useState(null);

	useEffect(() => {
		function fecharComEsc(evento) {
			if (evento.key === 'Escape') setImagemAberta(null);
		}
		window.addEventListener('keydown', fecharComEsc);
		return () => window.removeEventListener('keydown', fecharComEsc);
	}, []);
	return (
		<Container>
			<Title>Meus Projetos</Title>
			<Section>
				{projects.map((projeto, indice) => (
					<Case key={projeto.id}>
						<Shot
							src={projeto.imagem}
							alt={`Captura de tela do projeto ${projeto.titulo}`}
							onClick={() => setImagemAberta(projeto)}
							$inverso={indice % 2 === 1}
						/>
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
			{imagemAberta && (
				<Overlay onClick={() => setImagemAberta(null)}>
					<ZoomImage
						src={imagemAberta.imagem}
						alt={`Captura de tela ampliada do projeto ${imagemAberta.titulo}`}
					/>
				</Overlay>
			)}
		</Container>
	);
}

export default Projects;
