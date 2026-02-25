import SectionCard from '../components/storytelling/SectionCard';
import AnalyticCard from '../components/storytelling/AnalyticCard';
import MetaBar from '../components/storytelling/MetaBar';
import PeriodTable from '../components/storytelling/PeriodTable';
import ReflexaoCard from '../components/storytelling/ReflexaoCard';
import FibaeLineChart from '../components/storytelling/FibaeLineChart';
import textos from "../content/dashboardTextos.json";

// ─── PALETA ─────────────────────────────────────────────────────────────────
const BLUE = '#1a4f8a';

// ─── BADGE ──────────────────────────────────────────────────────────────────
function Badge({ label, color }) {
  const bg = color === 'orange' ? '#fff3e0' : color === 'red' ? '#fdecea' : '#e8f0fe';
  const fg = color === 'orange' ? '#e65100' : color === 'red' ? '#c62828' : '#1a4f8a';
  return (
    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded mr-2 mb-1" style={{ backgroundColor: bg, color: fg }}>
      {label}
    </span>
  );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center shadow-sm">
      <p className="text-3xl font-extrabold mb-1" style={{ color: BLUE }}>{value}</p>
      <p className="text-sm font-semibold text-gray-700 mb-1">{label}</p>
      {sub && <p className="text-xs text-gray-500">{sub}</p>}
    </div>
  );
}

// ─── TIMELINE ROW ────────────────────────────────────────────────────────────
function TimelineRow({ periodo, valor, destaque }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-lg mb-2 ${destaque ? 'ring-2' : 'bg-gray-50'}`}
      style={destaque ? { backgroundColor: '#e8f0fe', ringColor: BLUE } : {}}>
      <span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">{periodo}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-2 rounded-full" style={{ width: `${Math.round(valor * 100)}%`, backgroundColor: BLUE }} />
      </div>
      <span className="text-sm font-bold w-14 text-right" style={{ color: BLUE }}>
        {(valor * 100).toFixed(2).replace(/\.?0+$/, '')}%
      </span>
    </div>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="my-5 border-gray-200" />;
}

export default function Diversidade() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f2f5' }}>

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 text-white text-center" style={{ background: `linear-gradient(135deg, #0d3366 0%, ${BLUE} 60%, #2e6bbf 100%)` }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-3">Aliança Empreendedora</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Diversidade na Aliança Empreendedora
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
            Narrativa de dados integrando <strong>CensoAE</strong>, <strong>Metas de Diversidade</strong> e <strong>FibAE</strong>
          </p>
          <div className="inline-block bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full px-5 py-2 text-sm font-semibold">
            Período analisado: 2024 – 2026
          </div>
        </div>
      </section>

      {/* ─── CONTEÚDO ────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* 1. CONTEXTUALIZAÇÃO */}
        <SectionCard title="1. Contextualização e bases utilizadas" id="contexto">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Esta análise integra exclusivamente os seguintes documentos e arquivos internos da Aliança Empreendedora:
          </p>
          <ul className="space-y-2 mb-5">
            {[
              'CensoAE 2025 – anonimizado (set/25): aba de respostas individuais e aba "Dados percentuais" com gênero (Feminino/Masculino) e raça/cor (Preto, Pardo, Indígena × Branco) por vínculo e equipe.',
              'CensoAE 2026 – respostas individuais: planilha linha a linha com equipes, forma de contratação, gênero, raça/cor, orientação sexual, trans, deficiência/neurodivergência e responsabilidades de cuidado.',
              'FIBAE 2025 – 1º semestre (respostas): notas individuais 0–10 para múltiplas dimensões, incluindo conhecimento e impacto das políticas de diversidade.',
              'FIBAE 2026 – 1º semestre (anonimizado): mesma estrutura de 2025 com médias ao final.',
              'Acompanhamento indicadores diversidade – CENSO: metas de raça/cor e gênero por equipe e instância (mar/25, set/25, mar/26) e indicadores consolidados.',
              'Acompanhamento indicadores diversidade – FIBAE: tabela "FIBAE – DIVERSIDADE" com percentuais de promotores (notas 9–10) por raça/cor, para Set/24, Fev/25, Set/25 e Fev/26.',
              'PDF Comitê de Diversidade: gráficos de distribuição geral, composição por equipe e séries temporais do FibAE.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: BLUE }}>{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
        </SectionCard>

        {/* 2. METAS – VISÃO GERAL */}
        <SectionCard title="2. Metas de diversidade – visão geral" id="metas-geral">
          <p className="text-gray-700 mb-4 leading-relaxed">
            O Acompanhamento indicadores diversidade – CENSO consolida três tipos de indicadores, medidos em três momentos: <strong>mar/25</strong>, <strong>set/25</strong> e <strong>mar/26</strong>:
          </p>
          <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1 mb-5">
            <li><strong>% de EQUIPES</strong> com metas de raça/cor batidas</li>
            <li><strong>% de EQUIPES</strong> com metas de gênero batidas</li>
            <li><strong>% de INSTÂNCIAS de decisão</strong> com metas de raça/cor batidas</li>
            <li><strong>% de INSTÂNCIAS de decisão</strong> com metas de gênero batidas</li>
            <li><strong>% total de metas batidas</strong> (raça/cor + gênero combinados)</li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Todos os indicadores têm como meta final <strong>100%</strong>. O documento de acompanhamento recomenda priorizar o indicador de <em>% de INSTÂNCIAS com metas batidas</em>, pois expressa melhor a inclusão de pessoas negras e mulheres nos espaços de decisão e já incorpora, indiretamente, as equipes de projeto, produtos e internas (exceto Diversidade, GPP e Eventos). Esse indicador também depende da vontade das pessoas em ocupar esses espaços e da estratégia da AE em incluí-las.
          </p>
          
        </SectionCard>

        {/* 3. EQUIPES – METAS */}
        <SectionCard title="3. Equipes – metas por raça/cor e gênero" id="equipes-metas">

          <AnalyticCard
            title="Raça/cor – % de EQUIPES com metas batidas"
            dados={
              <div>
                <TimelineRow periodo="Fev/25" valor={0.31} />
                <TimelineRow periodo="Set/25" valor={0.50} destaque />
                <TimelineRow periodo="Mar/26" valor={0.36} />
              </div>
            }
            leitura="Em raça/cor, o % de EQUIPES com metas batidas sobe de 31% (fev/25) para 50% (set/25) e depois cai para 29% (mar/26). O avanço não é linear e exige monitoramento constante."
            observacao="GPP, Diversidade e E360 deixaram de bater a meta de raça/cor no último ciclo, puxando o indicador para baixo em mar/26. É necessário compreender os movimentos internos de cada uma dessas equipes para definir ações específicas de reforço."
          />


          <AnalyticCard
            title="Gênero – % de EQUIPES com metas batidas"
            dados={
              <div>
                <TimelineRow periodo="Fev/25" valor={0.81} />
                <TimelineRow periodo="Set/25" valor={0.93} destaque />
                <TimelineRow periodo="Mar/26" valor={0.93} destaque />
              </div>
            }
            leitura="Em gênero, o % de EQUIPES com metas batidas se mantém sempre acima de 80%, chegando a 93% a partir de set/25 e permanecendo nesse patamar."
          />
          
        </SectionCard>

        {/* 4. INSTÂNCIAS – METAS */}
        <SectionCard title="4. Instâncias de decisão – metas por raça/cor e gênero" id="instancias-metas">

          <AnalyticCard
            title="Raça/cor – % de INSTÂNCIAS com metas batidas"
            dados={
              <div>
                <TimelineRow periodo="Fev/25" valor={0.31} />
                <TimelineRow periodo="Set/25" valor={0.43} />
                <TimelineRow periodo="Mar/26" valor={0.36} />
              </div>
            }
            leitura="Nas instâncias de decisão, os valores de raça/cor variam entre 31% e 36%, sem se aproximar da meta de 100%. Mesmo incluindo equipes de projeto, produtos e internas, as instâncias de decisão permanecem com menos de 40% batendo a meta racial."
            observacao={textos.card4_meta_equipes.observacao}
          />

          <AnalyticCard
            title="Gênero – % de INSTÂNCIAS com metas batidas"
            dados={
              <div>
                <TimelineRow periodo="Fev/25" valor={0.75} />
                <TimelineRow periodo="Set/25" valor={0.86} />
                <TimelineRow periodo="Mar/26" valor={1.00} destaque />
              </div>
            }
            leitura="Em gênero, há crescimento nas instâncias de decisão, de 63% (fev/25) para 64% (set/25) e 79% (mar/26). Ainda abaixo da meta de 100%."
          />
        </SectionCard>

        {/* 5. % TOTAL METAS */}
        <SectionCard title="5. % total de metas batidas (raça/cor + gênero)" id="total-metas">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <StatCard label="Fev/25" value="52%" sub="0,52" />
            <StatCard label="Set/25" value="70%" sub="0,70" />
            <StatCard label="Mar/26" value="65%" sub="0,65" />
          </div>
          <AnalyticCard
            title="Observação estratégica"
            dados={null}
            leitura="Considerando raça/cor e gênero juntos, o % total de metas batidas oscila entre 52% e 50% nos três momentos analisados, sem atingir valores próximos a 100%. O % total de metas batidas (raça + gênero) fica entre 43% e 50% nos três momentos, sem atingir valores próximos a 100%."
            
          />
          
        </SectionCard>

        {/* 6. COMPOSIÇÃO CENSOAE 2025 
        <SectionCard title="6. Composição estrutural – CensoAE 2025" id="censo-composicao">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            A aba "Dados percentuais" do CensoAE 2025 apresenta a distribuição de gênero e raça/cor por vínculo:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Vínculo</th>
                  <th className="text-center p-3 border border-gray-200 font-semibold text-gray-700">Feminino</th>
                  <th className="text-center p-3 border border-gray-200 font-semibold text-gray-700">Masculino</th>
                  <th className="text-center p-3 border border-gray-200 font-semibold text-gray-700">Negros</th>
                  <th className="text-center p-3 border border-gray-200 font-semibold text-gray-700">Brancos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CLT e estagiários(as)', '78,94%', '21,06%', '63,16%', '36,84%'],
                  ['Consultores Institucionais', '84,62%', '15,38%', '46,15%', '53,85%'],
                  ['CLT + Consultores Institucionais', '82,78%', '17,22%', '55,71%', '44,29%'],
                  ['Conselho Estratégico', '66%', '34%', '54%', '46%'],
                  ['Comitê Executivo', '88,89%', '11,11%', '38,89%', '61,11%'],
                  ['Associados(as)', '93,34%', '6,66%', '40%', '60%'],
                  ['Consultores de projetos', '69,23%', '30,77%', '46,15%', '53,85%'],
                ].map(([vínculo, f, m, ppi, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 text-gray-800 font-medium">{vínculo}</td>
                    <td className="p-3 border border-gray-200 text-center text-gray-800">{f}</td>
                    <td className="p-3 border border-gray-200 text-center text-gray-800">{m}</td>
                    <td className="p-3 border border-gray-200 text-center text-gray-800">{ppi}</td>
                    <td className="p-3 border border-gray-200 text-center text-gray-800">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p>• Em CLT e estagiários(as), há maioria de mulheres (78,94%) e maioria de pessoas negras (63,16% PPI).</p>
            <p>• Em consultores institucionais, Comitê Executivo e associados(as), a proporção de pessoas brancas é maior que a de PPI (por exemplo, 61,11% brancos no Comitê Executivo; 60% brancos entre Associados/as).</p>
            <p>• Em todos esses vínculos, o % feminino é sempre superior a 66%, chegando a acima de 88% no Comitê Executivo e 93% entre Associados/as.</p>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
            <strong>Limitação:</strong> Os números explícitos de cada equipe (Boto, Salamandra etc.) no PDF do Comitê de Diversidade aparecem apenas como imagens de gráficos, não como texto. Portanto, aqui são usados apenas os percentuais da aba "Dados percentuais" e do arquivo de acompanhamento de Censo.
          </div>
        </SectionCard>*/}

        <SectionCard title="6. Comparativo geral – leitura consolidada dos indicadores" id="comparativo-geral">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* NEGROS > BRANCOS */}
            <div className="bg-blue-800 text-white rounded-xl p-5 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-green-400">
                Negros &gt; Brancos
              </h3>
              <ul className="text-sm space-y-2">
                <li>• Conhecem os impactos</li>
                <li>• Sentem o impacto</li>
                <li>• Segurança para conversar</li>
                <li>• Conforto em alertar</li>
                <li>• Conforto em ser alertado</li>
                <li>• Sentem que agregam valor</li>
                <li>• Apoio e colaboração</li>
              </ul>
            </div>

            {/* BRANCOS > NEGROS */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-blue-700">
                Brancos &gt; Negros
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Influência ou poder nas decisões</li>
                <li>• Segurança para liderar</li>
                <li>• Reconhecimento</li>
              </ul>
            </div>

            {/* DIFERENÇA NÃO SIGNIFICATIVA */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-yellow-700">
                Diferença não significativa
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Produtividade nos últimos 6 meses</li>
                <li>• Se sentem escutados(as)</li>
              </ul>
            </div>

            {/* COMPORTAMENTO SEMELHANTE */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-gray-600">
                Comportamento semelhante
              </h3>
              <p className="text-sm text-gray-600">
                <li>Mais produtivos(as) nos últimos 6 meses</li>
                <li>Escuta quando precisa</li>
                <li>Reconhecimento </li>
                <li>Segurança em liderar grupos </li>
              </p>
            </div>

          </div>
          <br />
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-blue-700">
                Reflexões Gerais
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Em 2025 tivemos um virada em 5 indicadores em que o publico negro apresentou um percentual maior do que brancos: conhecem e sentem o impacto, segurança para falar de diversidade, conforto em alertar pessoas, apoio e colaboração da equipe </li>
                <li>• No entanto indicadores que se refere a composição de espaços estratégicos, branco ainda são maioria.</li>
                <li>• A sobrecarga de trabalho pode estar influenciando os indicadores que tiveram queda</li>
              </ul>
            </div>
          
        
        </SectionCard>


        {/* 7. FIBAE – INTRO 
        <SectionCard title="6. FibAE – indicadores de diversidade e períodos analisados" id="fibae-intro">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            O acompanhamento <strong>FIBAE – DIVERSIDADE</strong> apresenta, para cada indicador, o percentual de promotores (notas 9–10) por recorte racial, em quatro períodos: <strong>Set/24</strong>, <strong>Fev/25</strong>, <strong>Set/25</strong> e <strong>Fev/26</strong>.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">Os temas medidos são:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Conhecimento do impacto das políticas de diversidade',
              'Percepção de sentir o impacto das políticas',
              'Segurança para conversar sobre diversidade',
              'Influência/poder nas decisões',
              'Desejo de ocupar papel de liderança (negros)',
              'Segurança para liderar grupos',
              'Conforto em ser alertado sobre discriminação',
              'Conforto em alertar sobre discriminação',
              'Sentimento de agregar valor',
              'Produtividade nos últimos 6 meses',
              'Reconhecimento',
              'Escuta quando precisam de algo',
              'Apoio e colaboração',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded p-2">
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </SectionCard>*/}

        {/* 8. FIBAE – CONHECIMENTO E IMPACTO */}
        <SectionCard title="7. FibAE – conhecimento e impacto das políticas de diversidade" id="fibae-conhecimento">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FibaeLineChart
              title="Conhecem o impacto"
              negros={[0.38, 0.55, 0.80, 0.81]}
              brancos={[0.64, 0.70, 0.69, 0.71]}
            />
            <FibaeLineChart
              title="Sentem o impacto"
              negros={[0.31, 0.27, 0.60, 0.63]}
              brancos={[0.27, 0.60, 0.54, 0.57]}
            />
          </div>
          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Conhecem – Negros(as)', values: ['38%', '55%', '80%', '81%'] },
                  { label: 'Conhecem – Brancos(as)', values: ['64%', '70%', '69%', '71%'] },
                  { label: 'Sentem – Negros(as)', values: ['31%', '27%', '60%', '63%'] },
                  { label: 'Sentem – Brancos(as)', values: ['27%', '60%', '54%', '57%'] },
                ]}
              />
            }
            leitura="O conhecimento do impacto das políticas de diversidade entre pessoas negras cresce de 38% para 81% de promotores entre set/24 e fev/26. Entre pessoas brancas, esse conhecimento se mantém sempre em torno de 69–71%. A percepção de sentir o impacto também aumenta entre negros(as), de 31% para 63%."
            observacao= {textos.card7_conhecimento.observacao}
          />
        </SectionCard>

        {/* 9. FIBAE – SEGURANÇA CONVERSAR */}
        <SectionCard title="8. FibAE – segurança para conversar sobre diversidade" id="fibae-seguranca-conversa">
          <FibaeLineChart
            title="Segurança para conversar sobre diversidade"
            negros={[.54, 0.45, 0.60, 0.63]} 
            brancos={[0.27, 0.70, 0.38, 0.43]}
          />
          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Negros(as)', values: ['54%', '45%', '60%', '63%'] },
                  { label: 'Brancos(as)', values: ['27%', '70%', '38%', '43%'] },
                ]}
              />
            }
            leitura="Entre negros(as), a trajetória vai de 54% em set/24 para 63% em fev/26. Não há uma tendência linear simples para pessoas brancas (oscilação entre 27% e 70%), enquanto entre negros(as) a trajetória vai de 54% em set/24 para 63% em fev/26."
            observacao={textos.card8_impacto.observacao}
          />
          
          
        </SectionCard>

        {/* 10. FIBAE – PODER, LIDERANÇA */}
        <SectionCard title="9. FibAE – poder de decisão, desejo de ocupar espaço e segurança para liderar" id="fibae-poder">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FibaeLineChart
              title="Influência ou poder nas decisões"
              negros={[0.31, 0.00, 0.27, 0.31]}
              brancos={[0.54, 0.50, 0.46, 0.50]}
            />
            <FibaeLineChart
              title="Segurança para liderar grupos"
              negros={[0.45, 0.54, 0.33, 0.38]}
              brancos={[0.45, 0.80, 0.69, 0.71]}
            />
          </div>
          <FibaeLineChart
            title="Desejo de ocupar papel de liderança – Negros(as)"
            negros={[0.77, 0.80, 0.80, 0.81]}
          />
          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Influência/poder – Negros(as)', values: ['31%', '0%', '27%', '31%'] },
                  { label: 'Influência/poder – Brancos(as)', values: ['54%', '50%', '46%', '50%'] },
                  { label: 'Desejo liderança – Negros(as)', values: ['77%', '80%', '80%', '81%'] },
                  { label: 'Segurança liderar – Negros(as)', values: ['45%', '54%', '33%', '38%'] },
                  { label: 'Segurança liderar – Brancos(as)', values: ['45%', '80%', '69%', '71%'] },
                ]}
              />
            }
            leitura="Em todos os períodos, a % de promotores em 'têm influência ou poder' é maior entre brancos(as) do que entre negros(as). Ao mesmo tempo, a taxa de desejo de liderança entre pessoas negras é alta e estável (77–81%). A % de promotores em segurança para liderar é consistentemente maior entre brancos(as)."
            observacao={textos.card9_poder.observacao}
          />
        </SectionCard>

        {/* 11. FIBAE – ALERTAR */}
        <SectionCard title="10. FibAE – conforto em alertar e ser alertado sobre discriminação" id="fibae-alerta">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FibaeLineChart
              title="Conforto em ser alertado(a)"
              negros={[1.00, 0.91, 0.87, 0.81]}
              brancos={[0.82, 0.91, 0.69, 0.71]}
            />
            <FibaeLineChart
              title="Conforto em alertar outras pessoas"
              negros={[0.46, 0.60, 0.80, 0.81]}
              brancos={[0.64, 0.70, 0.62, 0.64]}
            />
          </div>
          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Ser alertado – Negros(as)', values: ['100%', '91%', '87%', '81%'] },
                  { label: 'Ser alertado – Brancos(as)', values: ['82%', '91%', '69%', '71%'] },
                  { label: 'Alertar – Negros(as)', values: ['46%', '60%', '80%', '81%'] },
                  { label: 'Alertar – Brancos(as)', values: ['64%', '70%', '62%', '64%'] },
                ]}
              />
            }
            leitura="Pessoas negras têm altíssimo conforto em serem alertadas (100% em set/24, depois 81% em fev/26, ainda muito alto). O conforto em alertar outras pessoas cresce entre negros(as) de 46% para 81% no período, enquanto entre brancos(as) fica entre 62% e 70% com pouca variação."
            observacao={textos.card10_conforto.observacao}
            />
        </SectionCard>

        <SectionCard title="11. FibAE – sentimento de valor e reconhecimento" id="fibae-valor">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FibaeLineChart
              title="Sentem que agregam valor"
              negros={[0.69, 0.73, 0.80, 0.81]}
              brancos={[0.73, 0.70, 0.62, 0.64]}
            />
            <FibaeLineChart
              title="Reconhecimento"
              negros={[0.38, 0.09, 0.20, 0.25]}
              brancos={[0.54, 0.50, 0.62, 0.57]}
            />
          </div>

          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Valor – Negros(as)', values: ['69%', '73%', '80%', '81%'] },
                  { label: 'Valor – Brancos(as)', values: ['73%', '70%', '62%', '64%'] },
                  { label: 'Reconhecimento – Negros(as)', values: ['38%', '09%', '20%', '25%'] },
                  { label: 'Reconhecimento – Brancos(as)', values: ['54%', '50%', '62%', '57%'] },
                ]}
              />
            }
            leitura="Percepção de valor é alta para ambos, com ligeiro aumento entre negros(as) até 80%. Percepção de produtividade recente é relativamente baixa e decrescente para ambos os grupos. Reconhecimento é um ponto crítico: valores muito menores entre negros(as) (chegando a 9% em fev/25) do que entre brancos(as) (50%–62%). Escuta é similar entre grupos, com leve vantagem a favor de negros(as) em fev/26. Apoio e colaboração crescem entre negros(as) e caem entre não negros(as) ao longo dos ciclos."
            observacao={
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Agrevalor:</strong>
                <p>{textos.card11_valor.observacao}</p>
              </div>

              <div>
                <strong>Reconhecimento: </strong>
                <p>{textos.card11_reconhecimento.observacao}</p>
              </div>
            </div>
}
          />
        </SectionCard>

        {/* 12. FIBAE – APOIO, ESCUTA, VALOR, PRODUTIVIDADE, RECONHECIMENTO */}
        <SectionCard title="12. FibAE – apoio, escuta e produtividade" id="fibae-apoio">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FibaeLineChart
              title="Produtividade nos últimos 6 meses"
              negros={[0.31, 0.27, 0.27, 0.25]}
              brancos={[0.45, 0.40, 0.23, 0.21]}
            />
            <FibaeLineChart
              title="Escuta quando precisam de algo"
              negros={[0.54, 0.45, 0.60, 0.63]}
              brancos={[0.54, 0.50, 0.54, 0.57]}
            />
          </div>
          
          <FibaeLineChart
            title="Apoio e colaboração"
            negros={[0.46, 0.36, 0.67, 0.69]}
            terceiro={[0.73, 0.50, 0.46, 0.50]}
            terceiroLabel="Não negros(as)"
            />

          <AnalyticCard
            title="Leitura direta dos dados"
            dados={
              <PeriodTable
                rows={[
                  { label: 'Produtividade – Negros(as)', values: ['31%', '27%', '27%', '25%'] },
                  { label: 'Produtividade – Brancos(as)', values: ['45%', '40%', '23%', '21%'] },
                  { label: 'Escuta – Negros(as)', values: ['54%', '45%', '60%', '63%'] },
                  { label: 'Escuta – Brancos(as)', values: ['54%', '50%', '54%', '57%'] },
                  { label: 'Apoio – Negros(as)', values: ['46%', '36%', '67%', '69%'] },
                  { label: 'Apoio – Não negros(as)', values: ['73%', '50%', '46%', '50%'] },
                ]}
              />
            }
            leitura="Percepção de valor é alta para ambos, com ligeiro aumento entre negros(as) até 80%. Percepção de produtividade recente é relativamente baixa e decrescente para ambos os grupos. Reconhecimento é um ponto crítico: valores muito menores entre negros(as) (chegando a 9% em fev/25) do que entre brancos(as) (50%–62%). Escuta é similar entre grupos, com leve vantagem a favor de negros(as) em fev/26. Apoio e colaboração crescem entre negros(as) e caem entre não negros(as) ao longo dos ciclos."
           observacao={
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Produtividade:</strong>
                <p>{textos.card12_produtividade.observacao}</p>
              </div>

              <div>
                <strong>Escuta:</strong>
                <p>{textos.card12_escuta.observacao}</p>
              </div>
            </div>
}
           
          />
        </SectionCard>

        {/* 13. SÍNTESE – FORTALEZAS 
        <SectionCard title="13. Síntese dos achados – principais fortalezas" id="sintese-fortaleças">
          <ul className="space-y-3">
            {[
              'Do lado estrutural, CensoAE 2025 mostra forte presença de mulheres em praticamente todos os vínculos, e presença relevante de pessoas negras em CLT e estagiários(as).',
              'Em gênero, as metas já atingem patamares de 81% a 93% de metas batidas em equipes e instâncias.',
              'No FibAE, pessoas negras conhecem e sentem o impacto das políticas de diversidade em níveis altos, com indicadores que chegam a 0,81.',
              'A percepção de apoio, colaboração, escuta e valor é forte, especialmente entre negros(as).',
              'A taxa de pessoas negras que desejam ocupar liderança se mantém alta e estável (77–81%) ao longo de todos os ciclos.',
              'O conforto em alertar outras pessoas sobre discriminação cresce entre negros(as) de 46% para 81%, indicando evolução na cultura de responsabilização coletiva.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-gray-700">
                <span className="text-green-600 font-bold text-base flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>*/}

        {/* 14. SÍNTESE – ALERTAS 
        <SectionCard title="14. Síntese dos achados – alertas e gargalos" id="sintese-alertas">
          <ul className="space-y-3">
            {[
              'Metas de raça/cor não são alcançadas em todas as equipes e instâncias – os percentuais variam de 28% a 50%, com quedas observadas em mar/26.',
              'Nas instâncias de decisão, os valores de raça/cor variam entre 28,57% e 35,71%, sem se aproximar da meta de 100%.',
              'No FibAE, pessoas negras se percebem com menos influência/poder (0,00 a 0,31) e menos seguras para liderar (0,33 a 0,54) do que pessoas brancas (0,46 a 0,54 e 0,45 a 0,80, respectivamente).',
              'A percepção de reconhecimento é significativamente menor entre negros(as), chegando a 0,09 em fev/25, enquanto brancos(as) ficam entre 0,50 e 0,62.',
              'Os percentuais de produtividade percebida são relativamente baixos e decrescentes para ambos os grupos ao longo dos ciclos.',
              'Não há, nesta base, dados mensais numéricos de engajamento em diversidade (participação em encontros, vivências, newsletter, eventos externos), o que impede cruzamentos mais finos.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-gray-700">
                <span className="text-red-500 font-bold text-base flex-shrink-0">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

         15. RECOMENDAÇÕES 
        <SectionCard title="15. Recomendações estratégicas (baseadas nos documentos)" id="recomendacoes">
          <p className="text-sm text-gray-500 italic mb-4">
            As recomendações abaixo constam nos próprios documentos fornecidos. Nenhuma recomendação adicional foi criada.
          </p>
          <ul className="space-y-3">
            {[
              'O documento de metas recomenda priorizar o indicador de % de INSTÂNCIAS com metas batidas como síntese de diversidade, pois representa melhor a inclusão de pessoas negras e mulheres nos espaços de decisão.',
              'O arquivo de acompanhamento recomenda entender quais instâncias específicas puxam o indicador para cima ou para baixo, considerando dinâmicas particulares como Conselho Consultivo e Associados.',
              'Os dados de poder, liderança e reconhecimento no FibAE sugerem que esses recortes sejam usados como insumo para decidir ações de desenvolvimento, mentoria e ajustes de políticas.',
              'Os documentos apontam que faz sentido consolidar CensoAE, metas e FibAE em um painel único, atualizado semestralmente, como já iniciado nos arquivos de acompanhamento.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: BLUE }}>{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

         16. PRÓXIMOS PASSOS E LIMITAÇÕES 
        <SectionCard title="16. Próximos passos e limitações dos dados" id="proximos-passos">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Próximos passos</h3>
              <ul className="space-y-2">
                {[
                  'Consolidar CensoAE, metas e FibAE em um painel único, atualizado semestralmente, como já iniciado nos arquivos de acompanhamento.',
                  'Garantir que os indicadores mensais de engajamento em diversidade sejam registrados de forma estruturada nos próximos ciclos para fortalecer a atuação do Comitê.',
                  'Identificar quais instâncias específicas estão puxando os indicadores de raça/cor para baixo e definir ações direcionadas.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Limitações dos dados</h3>
              <ul className="space-y-2">
                {[
                  'Não há planilha com dados mensais numéricos de engajamento em diversidade (participação em encontros, vivências, newsletter, eventos externos). Esses indicadores aparecem apenas na descrição conceitual e em notas explicativas, sem valores numéricos tabulares.',
                  'Não foi possível reprocessar, nesta sessão, as respostas brutas de CensoAE 2025 e 2026 via código. A análise estatística se apoia nas tabelas consolidadas e textos dos próprios documentos.',
                  'Os arquivos FIBAE 2025 e 2026 com respostas individuais permitem análises adicionais (cruzamentos por gênero ou função), mas a análise aqui se apoia nos consolidados do arquivo de acompanhamento.',
                  'Os números explícitos por equipe específica (Boto, Salamandra etc.) no PDF do Comitê aparecem apenas como imagens de gráficos, não como texto extraível.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 flex-shrink-0">⚠</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>*/}
       
        {/* 17. REFLEXÕES ESTRATÉGICAS DO COMITÊ */}

        {/* RODAPÉ */}
        <div className="text-center text-xs text-gray-400 py-6 border-t border-gray-200 mt-4">
          <p>Todos os dados e interpretações apresentados nesta página derivam exclusivamente dos documentos internos da Aliança Empreendedora listados na seção de contextualização.</p>
          <p className="mt-1">Período de análise: 2024–2026 | Atualizado com base em FibAE Fev/26 e CensoAE Mar/26</p>
        </div>

      </main>
    </div>
  );
}