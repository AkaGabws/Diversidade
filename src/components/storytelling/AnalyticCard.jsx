export default function AnalyticCard({ title, dados, leitura, observacao }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-gray-50">
      <h3 className="font-bold text-gray-800 text-base mb-4 border-b border-gray-200 pb-2">{title}</h3>

      <div className="mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mb-2">Dados</span>
        <div className="text-gray-800 text-sm leading-relaxed">{dados}</div>
      </div>

      {leitura && (
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded mb-2">Leitura direta dos dados</span>
          <div className="text-gray-700 text-sm leading-relaxed">{leitura}</div>
        </div>
      )}

      {observacao && (
        <div>
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded mb-2">Observação adicional</span>
          <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {observacao}
          </div>
        </div>
      )}
    </div>
  );
}