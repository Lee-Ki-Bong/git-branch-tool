"use client"

import { useState, useEffect, useRef } from "react"

interface SearchSelectProps {
  options: string[] // 옵션 배열
  onChange: (value: string) => void // 선택된 값을 부모에 전달하는 콜백 함수
}

export default function SearchSelect({ options, onChange }: SearchSelectProps) {
  const [query, setQuery] = useState("")
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options)
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredOptions(options)
    } else {
      setFilteredOptions(
        options.filter((opt) => opt.toLowerCase().includes(query.toLowerCase()))
      )
    }
  }, [query, options])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option: string, open: boolean) => {
    setQuery(option)
    onChange(option)
    setIsOpen(open)
  }

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="buttom-gray-line flex items-center border-none bg-transparent p-2">
        <input
          type="text"
          className="text-neon peer/search-user flex-1 bg-transparent p-2 focus:outline-none"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => handleSelect("", true)}
        />

        <button
          type="button"
          className="peer-placeholder-shown/search-user:animate-blink peer-placeholder-shown/search-user ml-2 animate-none text-2xl"
          onClick={() => handleSelect("", !isOpen)}
        >
          {"▼"}
        </button>
      </div>
      {isOpen && (
        <ul className="glass absolute left-0 right-0 z-50 mt-1 max-h-[500px] overflow-y-auto max-sm:max-h-[370px]">
          {filteredOptions.length === 0 && (
            <li className="p-2 text-sm text-gray-500">No results found</li>
          )}
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="text-neonWhite hover:text-shadow-neon cursor-pointer p-4 text-gray-500"
              onClick={() => handleSelect(option, false)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
