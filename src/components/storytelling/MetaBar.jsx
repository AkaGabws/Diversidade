export default function MetaBar({ label, value, color = '#1a4f8a' }) {
  const pct = Math.round(value * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{label}</span>
        <span className="font-semibold">{(value * 100).toFixed(2).replace(/\.00$/, '')}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}