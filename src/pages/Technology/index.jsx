import cssIcon from '../../assets/css-icon.png';
import gitIcon from '../../assets/git-icon.png';
import htmlIcon from '../../assets/html-icon.png';
import javascriptIcon from '../../assets/javascript-icon.png';
import nodeIcon from '../../assets/node-icon.png';
import reactIcon from '../../assets/react-icon.png';
import { Article, Container, Paragraph, Section, Title } from './styles';

function Technology() {
	return (
		<Container>
			<Title>Tecnologias que Uso</Title>

			<Section>
				<Article>
					<img src={htmlIcon} alt="HTML5" />
					<h3
						style={{
							color: '#E34F26',
							textShadow: '0 0 10px rgba(227, 79, 38, 1)',
						}}
					>
						HTML5
					</h3>
					<Paragraph>
						Linguagem de marcação que estrutura o conteúdo da página. É a base
						de tudo: define títulos, parágrafos, imagens e a organização
						semântica de cada seção do site.
					</Paragraph>
				</Article>

				<Article>
					<img src={cssIcon} alt="CSS3" />
					<h3
						style={{
							color: '#1572b6',
							textShadow: '0 0 10px rgba(21, 114, 182, 1)',
						}}
					>
						CSS3
					</h3>
					<Paragraph>
						Responsável pela aparência visual do site. Cuida de cores,
						espaçamentos, tipografia, animações e da responsividade, garantindo
						uma boa experiência em qualquer tamanho de tela.
					</Paragraph>
				</Article>

				<Article>
					<img src={javascriptIcon} alt="JavaScript" />
					<h3
						style={{
							color: '#f7df1e',
							textShadow: '0 0 10px rgba(247, 223, 30, 1)',
						}}
					>
						JavaScript
					</h3>
					<Paragraph>
						Linguagem que traz interatividade e lógica ao front-end. Permite
						manipular elementos da página, responder a eventos do usuário e
						criar comportamentos dinâmicos.
					</Paragraph>
				</Article>

				<Article>
					<img src={reactIcon} alt="React" />
					<h3
						style={{
							color: '#61dafb',
							textShadow: '0 0 10px rgba(97, 218, 251, 1)',
						}}
					>
						React
					</h3>
					<Paragraph>
						Biblioteca JavaScript para construção de interfaces. Facilita a
						criação de componentes reutilizáveis e o gerenciamento de estado em
						aplicações mais complexas.
					</Paragraph>
				</Article>

				<Article>
					<img src={nodeIcon} alt="Node.js" />
					<h3
						style={{
							color: '#339933',
							textShadow: '0 0 10px rgba(51, 153, 51, 1)',
						}}
					>
						Node.js
					</h3>
					<Paragraph>
						Ambiente de execução que permite rodar JavaScript fora do navegador.
						Usado para criar servidores, APIs e integrar o back-end com o
						front-end da aplicação.
					</Paragraph>
				</Article>

				<Article>
					<img src={gitIcon} alt="Git" />
					<h3
						style={{
							color: '#f05032',
							textShadow: '0 0 10px rgba(240, 80, 50, 1)',
						}}
					>
						Git
					</h3>
					<Paragraph>
						Sistema de controle de versão usado para acompanhar mudanças no
						código. Permite trabalhar em equipe, criar branches e manter um
						histórico organizado do projeto.
					</Paragraph>
				</Article>
			</Section>
		</Container>
	);
}

export default Technology;
