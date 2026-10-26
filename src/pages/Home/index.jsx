import {
	About,
	Container,
	Paragraph,
	Span,
	SpanInitial,
	Title,
} from './styles';

function Home() {
	return (
		<Container>
			<About>
				<Title>
					{'<Arthur Pereira/>'}
					<br />
					<br />
					Desenvolvedor Full Stack
					<br />
				</Title>
				<h2
					style={{
						textAlign: 'center',
						fontSize: '50px',
						marginBottom: '10px',
					}}
				>
					Sobre Mim
				</h2>
				<br />
				<Paragraph>
					<SpanInitial>Olá!</SpanInitial>, eu sou o <Span>Arthur</Span> e eu,
					como quase todos os Dev's pelo mundo comecei aprendendo HTML e CSS
					tentando entender por que um botão não ficava onde eu queria. De lá
					pra cá, virei{' '}
					<Span>Desenvolvedor em formação Full Stack pelo DevClub</Span> — e no
					meio do caminho descobri que gosto tanto de montar a interface que a
					pessoa vê quanto de construir o que acontece por trás dela.
					<br />
					<br />
					Hoje domino esse ciclo inteiro:{' '}
					<Span>HTML, CSS, JavaScript e React</Span> do lado do Front, e também,{' '}
					<Span>Node.js, Express, MongoDB e Prisma ORM</Span> do lado do Back.
					Não é teoria — coloquei isso em prática construindo uma{' '}
					<Span>API REST de Login de usuários</Span> do zero, um{' '}
					<Span>conversor de moedas assíncrono</Span> e o{' '}
					<Span>clássico Jokenpô</Span> em JavaScript puro, cada um me ensinando
					a resolver um tipo diferente de problema.
					<br />
					<br />
					Foi na <Span>Flow Max</Span>, agência de marketing digital, que vi
					esse aprendizado sair da tela do editor e virar resultado real:
					desenvolvi{' '}
					<Span>landing pages responsivas para múltiplos clientes</Span>, sob
					prazo, cada uma pensada para converter — estrutura, hierarquia visual
					e clareza de informação levadas a sério.
					<br />
					<br />O que me move agora é continuar evoluindo — aprofundando{' '}
					<Span>React e APIs REST</Span> — e encontrar uma equipe onde eu possa
					aplicar essa visão de ponta a ponta, aprender rápido e crescer junto.
					<br />
					<br />
				</Paragraph>
			</About>
		</Container>
	);
}

export default Home;
