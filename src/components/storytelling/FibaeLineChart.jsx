import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PERIODS = ['Set/24', 'Fev/25', 'Set/25', 'Fev/26'];

const formatY = (v) => `${Math.round(v * 100)}%`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2 text-xs">
        <p className="font-bold text-gray-700 mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>
            {p.name}: <strong>{Math.round(p.value * 100)}%</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function FibaeLineChart({ title, negros, brancos, terceiro, terceiroLabel }) {
  const data = PERIODS.map((p, i) => ({
    periodo: p,
    'Negros(as)': negros[i],
    ...(brancos ? { 'Brancos(as)': brancos[i] } : {}),
    ...(terceiro ? { [terceiroLabel || 'Não negros(as)']: terceiro[i] } : {}),
  }));

  return (
    <div className="bg-white rounded-lg p-4 mb-2">
      {title && <p className="text-sm font-semibold text-gray-700 mb-3">{title}</p>}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="periodo" tick={{ fontSize: 11, fill: '#6b7280' }} />
          <YAxis
            tickFormatter={formatY}
            domain={[0, 1]}
            ticks={[0, 0.25, 0.5, 0.75, 1]}
            tick={{ fontSize: 11, fill: '#6b7280' }}
            width={42}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Negros(as)"
            stroke="#1a4f8a"
            strokeWidth={2}
            dot={{ r: 4, fill: '#1a4f8a', strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          {brancos && (
            <Line
              type="monotone"
              dataKey="Brancos(as)"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ r: 4, fill: '#f97316', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          )}
          {terceiro && (
            <Line
              type="monotone"
              dataKey={terceiroLabel || 'Não negros(as)'}
              stroke="#f97316"
              strokeWidth={2}
              dot={{ r: 4, fill: '#f97316', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}