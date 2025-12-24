export default function Sidebar() {
  return (
    <aside className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 h-fit">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Categories</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Electric
            </label>
            <span className="text-gray-400">156</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Luxury
            </label>
            <span className="text-gray-400">89</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Sedan
            </label>
            <span className="text-gray-400">234</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              SUV
            </label>
            <span className="text-gray-400">67</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Performance
            </label>
            <span className="text-gray-400">12</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Muscle
            </label>
            <span className="text-gray-400">45</span>
          </li>
          <li className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Sports
            </label>
            <span className="text-gray-400">78</span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <div className="text-sm text-gray-600">$20,000 — $150,000</div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Minimum Rating</h4>
        <div className="text-sm text-gray-600">(filter placeholder)</div>
      </div>
    </aside>
  )
}
