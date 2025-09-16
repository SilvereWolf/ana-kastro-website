import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export const Select = ({ children, onValueChange, defaultValue, value, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '')
  const [selectedLabel, setSelectedLabel] = useState('')
  const selectRef = useRef(null)

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleItemClick = (itemValue, itemLabel) => {
    setSelectedValue(itemValue)
    setSelectedLabel(itemLabel)
    setIsOpen(false)
    onValueChange?.(itemValue)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={selectRef} className="relative" {...props}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            isOpen,
            setIsOpen,
            selectedLabel,
            selectedValue
          })
        }
        if (child.type === SelectContent) {
          return isOpen ? React.cloneElement(child, {
            onItemClick: handleItemClick,
            selectedValue
          }) : null
        }
        return child
      })}
    </div>
  )
}

export const SelectTrigger = ({ 
  children, 
  id, 
  className = '', 
  isOpen, 
  setIsOpen, 
  selectedLabel, 
  selectedValue,
  ...props 
}) => (
  <button
    id={id}
    type="button"
    className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    onClick={() => setIsOpen(!isOpen)}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    {...props}
  >
    <span>{selectedLabel || children}</span>
    <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
  </button>
)

export const SelectContent = ({ children, onItemClick, selectedValue, className = '' }) => (
  <div className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}>
    <div className="p-1">
      {React.Children.map(children, child => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, {
            onItemClick,
            selectedValue
          })
        }
        return child
      })}
    </div>
  </div>
)

export const SelectItem = ({ 
  value, 
  children, 
  onItemClick, 
  selectedValue,
  className = '',
  ...props 
}) => (
  <div
    role="option"
    className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${
      selectedValue === value ? 'bg-accent text-accent-foreground' : ''
    } ${className}`}
    onClick={() => onItemClick?.(value, children)}
    {...props}
  >
    {children}
  </div>
)

export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>

export default Select
