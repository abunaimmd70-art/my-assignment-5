export default function TechCard({ tech, onAdd, isAdded }) {
  const brandGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
       
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {tech.badge}
          </span>
        </div>

       
        <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-4">
          {tech.description}
        </p>
      </div>

      <div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-50 pt-3 mb-4">
          <span className="font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-700">
            {tech.category}
          </span>
          <span className="text-gray-400">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
            isAdded
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed"
              : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}