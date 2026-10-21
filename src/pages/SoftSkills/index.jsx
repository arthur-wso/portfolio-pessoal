import { Article, Container, Paragraph, Section, Title } from './styles';

function SoftSkills() {
	return (
		<Container>
			<Title>Minhas Soft Skills</Title>
			<Section>
				<Article>
					<h3>Aprendizagem Contínua</h3>
					<Paragraph>
						Estou no início da minha carreira e continuo estudando tanto
						back-end quanto front-end, com o objetivo de sempre ampliar as
						tecnologias que aprendo e pratico. Em cada projeto que faço, coloco
						em prática pelo menos uma tecnologia nova, e meus repositórios
						refletem esse processo constante de aprendizado.
					</Paragraph>
				</Article>

				<Article>
					<h3>Curiosidade Técnica</h3>
					<Paragraph>
						Gosto de descobrir como as coisas funcionam por dentro. Criei um
						jogo de Jokenpô para ver como o código consegue “escolher” uma
						jogada. Continuo criando novos projetos para aprender cada vez mais
						sobre como as coisas funcionam.
					</Paragraph>
				</Article>

				<Article>
					<h3>Sempre Aberto a Feedbacks</h3>
					<Paragraph>
						Nos projetos freelancers que trabalhei, recebi comentários de
						clientes com solicitações de mudanças. Aprendi a escutar com
						cuidado, compreender o que realmente precisava ser alterado e fazer
						as mudanças, sempre encarando a opinião do cliente como uma maneira
						de melhorar o resultado final.
					</Paragraph>
				</Article>

				<Article>
					<h3>Confiabilidade e gestão de expectativas</h3>
					<Paragraph>
						Prezo por cumprir o que combino. Antes de começar um projeto,
						procuro alinhar com clareza o que é possível entregar e em que
						prazo, e, se algo puder atrasar, aviso com antecedência para que
						possamos nos ajustar juntos. Para mim, transparência desde o início
						é o que constrói confiança.
					</Paragraph>
				</Article>

				<Article>
					<h3>Conexão e Networking</h3>
					<Paragraph>
						Eu adoro me conectar com as pessoas e aprender com a experiência de
						cada uma. Quando admiro a trajetória de alguém, eu procuro
						conversar, fazer perguntas e ouvir com atenção, porque acredito que
						muito do que aprendemos vem de quem já percorreu o caminho.
					</Paragraph>
				</Article>

				<Article>
					<h3>Resiliência e Adaptabilidade</h3>
					<Paragraph>
						Trato os bugs e imprevistos como parte normal do processo de
						desenvolvimento. Quando algo não funciona. Pego o problema com
						calma, testo diferentes ideias e continuo até entender exatamente o
						que está causando o erro. Também me adapto com facilidade a mudanças
						de requisitos ou de ferramenta. Para mim, cada ajuste é uma chance
						de aprender algo novo.
					</Paragraph>
				</Article>
			</Section>
		</Container>
	);
}

export default SoftSkills;
