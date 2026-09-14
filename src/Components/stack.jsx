export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const selectedLabel = `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm sticky top-20">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">{selectedLabel}</p>
        </div>

        {stack.length > 0 && (
          <span className="inline-flex items-center rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold text-pink-600">
            {stack.length}
          </span>
        )}
      </div>

     
      {stack.length === 0 ? (
        <div className="py-12 px-4 text-center border-2 border-dashed border-gray-100 rounded-xl">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 font-bold">
            +
          </div>
          <p className="text-sm font-medium text-gray-600">Your stack is empty</p>
          <p className="text-xs text-gray-400 mt-1">Click "Add to Stack" on any card to start building your stack.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2 max-h-95 overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white p-1 border border-gray-100 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                    <span className="text-[10px] text-gray-500">{item.category}</span>
                  </div>
                </div>

             
                <button
                  type="button"
                  onClick={() => onRemove(item.id, item.name)}
                  className="w-7 h-7 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center text-xs font-bold transition-colors"
                  title={`Remove ${item.name}`}
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

        
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full py-2 px-3 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl border border-red-200 hover:border-red-300 transition-colors"
            aria-label="Remove all selected technologies"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}