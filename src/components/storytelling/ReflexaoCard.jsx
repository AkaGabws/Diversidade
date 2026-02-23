export default function ReflexaoCard({ titulo, texto }) {
  return (
    <div className="bg-white border border-blue-100 rounded-xl p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#1a4f8a' }} />
        <h3 className="font-bold text-gray-800 text-sm leading-snug">{titulo}</h3>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{texto}</p>
    </div>
  );
}