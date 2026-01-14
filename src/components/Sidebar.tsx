import { useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'

interface SidebarProps {
  selectedCity: string
  onCityChange: (location: string) => void
  selectedMake: string
  onMakeChange: (make: string) => void
  selectedModel: string
  onModelChange: (model: string) => void
  selectedBodyType: string
  onBodyTypeChange: (bodyType: string) => void
  selectedMileage: string
  onMileageChange: (mileage: string) => void
  selectedYear: string
  onYearChange: (year: string) => void
  selectedTransmission: string
  onTransmissionChange: (transmission: string) => void
  selectedPrice: string
  onPriceChange: (price: string) => void
  selectedFuelType: string
  onFuelTypeChange: (fuelType: string) => void
  selectedDealType: string
  onDealTypeChange: (dealType: string) => void
  cities: string[]
  makes: string[]
  models: string[]
  bodyTypes: string[]
  years: string[]
  transmissions: string[]
  fuelTypes: string[]
  dealTypes: string[]
  onReset: () => void
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  isMobileView?: boolean
}

export default function Sidebar({ 
  selectedCity,
  onCityChange,
  selectedMake,
  onMakeChange,
  selectedModel,
  onModelChange,
  selectedBodyType,
  onBodyTypeChange,
  selectedMileage,
  onMileageChange,
  selectedYear,
  onYearChange,
  selectedTransmission,
  onTransmissionChange,
  selectedPrice,
  onPriceChange,
  selectedFuelType,
  onFuelTypeChange,
  selectedDealType,
  onDealTypeChange,
  cities,
  makes,
  models,
  bodyTypes,
  years,
  transmissions,
  fuelTypes,
  dealTypes,
  onReset,
  isCollapsed = false,
  onToggleCollapse,
  isMobileView = false
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    city: false,
    make: false,
    model: false,
    bodyType: false,
    mileage: false,
    year: false,
    transmission: false,
    price: false,
    fuelType: false,
    dealType: false
  })

  const mileageRanges = ['All', '0-10,000', '10,000-25,000', '25,000-50,000', '50,000+']
  const priceRanges = ['All', 'Under $30,000', '$30,000-$60,000', '$60,000-$100,000', 'Over $100,000']

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Filter icons for collapsed state
  const filterIcons = [
    { key: 'city', icon: <MapPin size={18} className="text-gray-600" />, label: 'City', hasSelection: selectedCity !== 'All' },
    { key: 'make', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.7992 14.001C20.9633 18.1168 17.5995 21.3145 13.399 21.9028L13.3992 19.878C16.4926 19.3321 18.9729 17.0086 19.7473 14.0004L21.7992 14.001ZM4.25157 14.0004C5.01757 16.9759 7.45244 19.2814 10.4989 19.8595V21.8882C6.3456 21.2632 3.02888 18.0838 2.19968 14.001L4.25157 14.0004ZM17.9994 11V13H16.9994C14.8572 13 13.1084 14.684 13.0043 16.8004L12.9994 17V18H10.9994V17C10.9994 14.8578 9.31547 13.1089 7.19908 13.0049L6.99944 13H5.99944V11H17.9994ZM11.9994 2C17.1848 2 21.4483 5.94662 21.9501 10.9999L19.9376 11C19.4455 7.05371 16.0791 4 11.9994 4C7.91981 4 4.55341 7.05371 4.06133 11L2.04883 10.9999C2.5506 5.94662 6.81413 2 11.9994 2Z"></path></svg>, label: 'Make', hasSelection: selectedMake !== 'All' },
    { key: 'model', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M23 10a1 1 0 0 0-1 1v.46A2.54 2.54 0 0 0 24.54 14h1.92A2.54 2.54 0 0 0 29 11.46V4.54A2.54 2.54 0 0 0 26.46 2h-1.92A2.54 2.54 0 0 0 22 4.54V6h-3.18A3 3 0 0 0 16 4a1 1 0 0 0 0 2 1 1 0 1 1-1 1 1 1 0 0 0-1-1h-4V4.54A2.54 2.54 0 0 0 7.46 2H5.54A2.54 2.54 0 0 0 3 4.54v6.92A2.54 2.54 0 0 0 5.54 14h1.92A2.54 2.54 0 0 0 10 11.46V8h3.18A3 3 0 0 0 15 9.82v4.27a2.66 2.66 0 0 0-2 2.57v2.68a2.66 2.66 0 0 0 2 2.57V24H9a1 1 0 0 0-1 1v2.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54v-6.92a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54V21a1 1 0 0 0 2 0v-.46A2.54 2.54 0 0 0 7.46 18H5.54A2.54 2.54 0 0 0 3 20.54v6.92A2.54 2.54 0 0 0 5.54 30h1.92A2.54 2.54 0 0 0 10 27.46V26h12v1.46A2.54 2.54 0 0 0 24.54 30h1.92A2.54 2.54 0 0 0 29 27.46v-6.92A2.54 2.54 0 0 0 26.46 18h-1.92A2.54 2.54 0 0 0 22 20.54V24h-5v-2.09a2.66 2.66 0 0 0 2-2.57v-2.68a2.66 2.66 0 0 0-2-2.57V9.82A3 3 0 0 0 18.82 8H23a1 1 0 0 0 1-1V4.54a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54V11a1 1 0 0 0-1-1zM8 11.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54V4.54A.54.54 0 0 1 5.54 4h1.92a.54.54 0 0 1 .54.54zm16 9.08a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54zm-7-1.2a.65.65 0 0 1-.66.66h-.68a.65.65 0 0 1-.66-.66v-2.68a.65.65 0 0 1 .66-.66h.68a.65.65 0 0 1 .66.66z"/></svg>, label: 'Model', hasSelection: selectedModel !== 'All' },
    { key: 'bodyType', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.38514 4H17.6149C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.6149 6H6.38514L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"></path></svg>, label: 'Body Type', hasSelection: selectedBodyType !== 'All' },
    { key: 'mileage', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path></svg>, label: 'Mileage', hasSelection: selectedMileage !== 'All' },
    { key: 'year', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>, label: 'Year', hasSelection: selectedYear !== 'All' },
    { key: 'transmission', icon: <svg className="w-[18px] h-[18px] text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M12 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M8 12h5c0.9319 0 1.3978 0 1.7654 -0.1522 0.49 -0.203 0.8794 -0.5924 1.0824 -1.0824C16 10.3978 16 9.93188 16 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M22 12c0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" stroke="currentColor" strokeWidth="1.5"></path></svg>, label: 'Transmission', hasSelection: selectedTransmission !== 'All' },
    { key: 'price', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path></svg>, label: 'Price', hasSelection: selectedPrice !== 'All' },
    { key: 'fuelType', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19V4C3 3.44772 3.44772 3 4 3H13C13.5523 3 14 3.44772 14 4V12H16C17.1046 12 18 12.8954 18 14V18C18 18.5523 18.4477 19 19 19C19.5523 19 20 18.5523 20 18V11H18C17.4477 11 17 10.5523 17 10V6.41421L15.3431 4.75736L16.7574 3.34315L21.7071 8.29289C21.9024 8.48816 22 8.74408 22 9V18C22 19.6569 20.6569 21 19 21C17.3431 21 16 19.6569 16 18V14H14V19H15V21H2V19H3ZM5 5V11H12V5H5Z"></path></svg>, label: 'Fuel Type', hasSelection: selectedFuelType !== 'All' },
    { key: 'dealType', icon: <svg className="w-[18px] h-[18px] text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>, label: 'Deal Type', hasSelection: selectedDealType !== 'All' },
  ]

  // Collapsed state - show only icons
  if (isCollapsed) {
    return (
      <aside className="bg-white rounded-xl border-2 border-gray-200 p-3 sticky top-24 h-fit shadow-md w-16 transition-all duration-300">
        {/* Expand button */}
        <button
          onClick={onToggleCollapse}
          className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all mb-3 shadow-sm"
          title="Expand filters"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
        
        {/* Icon buttons */}
        <div className="flex flex-col gap-2">
          {filterIcons.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                if (onToggleCollapse) onToggleCollapse()
                toggleSection(filter.key as keyof typeof expandedSections)
              }}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 transition-all relative shadow-sm ${
                filter.hasSelection 
                  ? 'bg-blue-50 border-blue-400 hover:bg-blue-100' 
                  : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
              }`}
              title={filter.label}
            >
              {filter.icon}
              {filter.hasSelection && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></span>
              )}
            </button>
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className={`bg-white rounded-lg p-3 sticky top-24 h-fit transition-all duration-300 ${isMobileView ? 'w-full shadow-none' : 'w-64 shadow-md hover:shadow-lg'}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-blue-600" />
          {isMobileView ? 'All Filters' : 'Filters'}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Reset
          </button>
          {onToggleCollapse && !isMobileView && (
            <button
              onClick={onToggleCollapse}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
              title="Collapse filters"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* City Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('city')}>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-600" />
            <h4 className="text-sm font-semibold text-gray-900">City</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.city ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
          </svg>
        </div>
        {expandedSections.city && (
          <div className="space-y-1 bg-white rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => onCityChange('All')}
              className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between group ${
                selectedCity === 'All'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              <span className="text-xs font-medium">All Cities</span>
              {selectedCity === 'All' && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
            </button>
            {cities.map(city => (
              <button
                key={city}
                onClick={() => onCityChange(city)}
                className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between group ${
                  selectedCity === city
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                <span className="text-xs font-medium">{city}</span>
                {selectedCity === city && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Make Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('make')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.7992 14.001C20.9633 18.1168 17.5995 21.3145 13.399 21.9028L13.3992 19.878C16.4926 19.3321 18.9729 17.0086 19.7473 14.0004L21.7992 14.001ZM4.25157 14.0004C5.01757 16.9759 7.45244 19.2814 10.4989 19.8595V21.8882C6.3456 21.2632 3.02888 18.0838 2.19968 14.001L4.25157 14.0004ZM17.9994 11V13H16.9994C14.8572 13 13.1084 14.684 13.0043 16.8004L12.9994 17V18H10.9994V17C10.9994 14.8578 9.31547 13.1089 7.19908 13.0049L6.99944 13H5.99944V11H17.9994ZM11.9994 2C17.1848 2 21.4483 5.94662 21.9501 10.9999L19.9376 11C19.4455 7.05371 16.0791 4 11.9994 4C7.91981 4 4.55341 7.05371 4.06133 11L2.04883 10.9999C2.5506 5.94662 6.81413 2 11.9994 2Z"></path>
            </svg>
            <h4 className="text-sm font-semibold text-gray-900">Make</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.make ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
          </svg>
        </div>
        {expandedSections.make && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => onMakeChange('All')}
              className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between group ${
                selectedMake === 'All'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-white hover:shadow-sm'
              }`}
            >
              <span className="text-xs font-medium">All Makes</span>
              {selectedMake === 'All' && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
            </button>
            {makes.map(make => (
              <button
                key={make}
                onClick={() => onMakeChange(make)}
                className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between group ${
                  selectedMake === make
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <span className="text-xs font-medium">{make}</span>
                {selectedMake === make && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Model Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('model')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
              <path d="M23 10a1 1 0 0 0-1 1v.46A2.54 2.54 0 0 0 24.54 14h1.92A2.54 2.54 0 0 0 29 11.46V4.54A2.54 2.54 0 0 0 26.46 2h-1.92A2.54 2.54 0 0 0 22 4.54V6h-3.18A3 3 0 0 0 16 4a1 1 0 0 0 0 2 1 1 0 1 1-1 1 1 1 0 0 0-1-1h-4V4.54A2.54 2.54 0 0 0 7.46 2H5.54A2.54 2.54 0 0 0 3 4.54v6.92A2.54 2.54 0 0 0 5.54 14h1.92A2.54 2.54 0 0 0 10 11.46V8h3.18A3 3 0 0 0 15 9.82v4.27a2.66 2.66 0 0 0-2 2.57v2.68a2.66 2.66 0 0 0 2 2.57V24H9a1 1 0 0 0-1 1v2.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54v-6.92a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54V21a1 1 0 0 0 2 0v-.46A2.54 2.54 0 0 0 7.46 18H5.54A2.54 2.54 0 0 0 3 20.54v6.92A2.54 2.54 0 0 0 5.54 30h1.92A2.54 2.54 0 0 0 10 27.46V26h12v1.46A2.54 2.54 0 0 0 24.54 30h1.92A2.54 2.54 0 0 0 29 27.46v-6.92A2.54 2.54 0 0 0 26.46 18h-1.92A2.54 2.54 0 0 0 22 20.54V24h-5v-2.09a2.66 2.66 0 0 0 2-2.57v-2.68a2.66 2.66 0 0 0-2-2.57V9.82A3 3 0 0 0 18.82 8H23a1 1 0 0 0 1-1V4.54a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54V11a1 1 0 0 0-1-1zM8 11.46a.54.54 0 0 1-.54.54H5.54a.54.54 0 0 1-.54-.54V4.54A.54.54 0 0 1 5.54 4h1.92a.54.54 0 0 1 .54.54zm16 9.08a.54.54 0 0 1 .54-.54h1.92a.54.54 0 0 1 .54.54v6.92a.54.54 0 0 1-.54.54h-1.92a.54.54 0 0 1-.54-.54zm-7-1.2a.65.65 0 0 1-.66.66h-.68a.65.65 0 0 1-.66-.66v-2.68a.65.65 0 0 1 .66-.66h.68a.65.65 0 0 1 .66.66z"/>
            </svg>
            <h4 className="text-sm font-semibold text-gray-900">Model</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.model ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
          </svg>
        </div>
        {expandedSections.model && (
          <div className="space-y-1 max-h-40 overflow-y-auto bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-2 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onModelChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedModel === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">All Models</span>
              {selectedModel === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {models.map(model => (
              <button key={model} onClick={() => onModelChange(model)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedModel === model ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{model}</span>
                {selectedModel === model && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Body Type Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('bodyType')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.38514 4H17.6149C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.6149 6H6.38514L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Body Type</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.bodyType ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.bodyType && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onBodyTypeChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedBodyType === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">All Body Types</span>
              {selectedBodyType === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {bodyTypes.map(type => (
              <button key={type} onClick={() => onBodyTypeChange(type)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedBodyType === type ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{type}</span>
                {selectedBodyType === type && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mileage Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('mileage')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Mileage</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.mileage ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.mileage && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {mileageRanges.map(range => (
              <button key={range} onClick={() => onMileageChange(range)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedMileage === range ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{range === 'All' ? 'All Mileages' : range}</span>
                {selectedMileage === range && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Year Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('year')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Year</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.year ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.year && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onYearChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedYear === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">All Years</span>
              {selectedYear === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {years.map(year => (
              <button key={year} onClick={() => onYearChange(year)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedYear === year ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{year}</span>
                {selectedYear === year && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Transmission Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('transmission')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
              <path d="M12 9v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
              <path d="M8 12h5c0.9319 0 1.3978 0 1.7654 -0.1522 0.49 -0.203 0.8794 -0.5924 1.0824 -1.0824C16 10.3978 16 9.93188 16 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
              <path d="M22 12c0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
            <h4 className="text-sm font-semibold text-gray-900">Transmission</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.transmission ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.transmission && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onTransmissionChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedTransmission === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">Transmission</span>
              {selectedTransmission === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {transmissions.map(trans => (
              <button key={trans} onClick={() => onTransmissionChange(trans)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedTransmission === trans ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{trans}</span>
                {selectedTransmission === trans && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('price')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Price</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.price && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {priceRanges.map(range => (
              <button key={range} onClick={() => onPriceChange(range)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedPrice === range ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{range === 'All' ? 'All Prices' : range}</span>
                {selectedPrice === range && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fuel Type Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('fuelType')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19V4C3 3.44772 3.44772 3 4 3H13C13.5523 3 14 3.44772 14 4V12H16C17.1046 12 18 12.8954 18 14V18C18 18.5523 18.4477 19 19 19C19.5523 19 20 18.5523 20 18V11H18C17.4477 11 17 10.5523 17 10V6.41421L15.3431 4.75736L16.7574 3.34315L21.7071 8.29289C21.9024 8.48816 22 8.74408 22 9V18C22 19.6569 20.6569 21 19 21C17.3431 21 16 19.6569 16 18V14H14V19H15V21H2V19H3ZM5 5V11H12V5H5Z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Fuel Type</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.fuelType ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.fuelType && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onFuelTypeChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedFuelType === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">All Fuel Types</span>
              {selectedFuelType === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {fuelTypes.map(fuel => (
              <button key={fuel} onClick={() => onFuelTypeChange(fuel)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedFuelType === fuel ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{fuel}</span>
                {selectedFuelType === fuel && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Deal Type Filter */}
      <div className="mb-1.5 p-1.5 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between cursor-pointer mb-1.5" onClick={() => toggleSection('dealType')}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
            <h4 className="text-sm font-semibold text-gray-900">Deal Type</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.dealType ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        {expandedSections.dealType && (
          <div className="space-y-1 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-1.5 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <button onClick={() => onDealTypeChange('All')} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedDealType === 'All' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
              <span className="font-medium">All Deal Types</span>
              {selectedDealType === 'All' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            </button>
            {dealTypes.map(deal => (
              <button key={deal} onClick={() => onDealTypeChange(deal)} className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between text-xs ${selectedDealType === deal ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-white hover:shadow-sm'}`}>
                <span className="font-medium">{deal}</span>
                {selectedDealType === deal && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
