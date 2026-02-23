export default function SectionCard({ title, children, id }) {
  return (
    <div id={id} className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
      <div className="px-6 py-4" style={{ backgroundColor: '#1a4f8a' }}>
        <h2 className="text-white font-bold text-lg md:text-xl">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}