export default function PeriodTable({ title, rows }) {
  // rows: [{ label, values: [v1, v2, v3] }]
  const periods = ['Set/24', 'Fev/25', 'Set/25', 'Fev/26'];

  return (
    <div className="overflow-x-auto mb-5">
      {title && <p className="text-sm font-semibold text-gray-700 mb-2">{title}</p>}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 font-semibold text-gray-700 border border-gray-200 min-w-[180px]">Indicador / Grupo</th>
            {periods.map(p => (
              <th key={p} className="text-center p-2 font-semibold text-gray-700 border border-gray-200 min-w-[70px]">{p}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-2 text-gray-800 border border-gray-200">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="text-center p-2 font-mono text-gray-800 border border-gray-200">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}