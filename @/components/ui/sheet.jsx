import React, { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'

export const Sheet = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div {...props}>
      {React.Children.map(children, child => {
        if (child.type === SheetTrigger) {
          return React.cloneElement(child, { setIsOpen })
        }
        if (child.type === SheetContent) {
          return React.cloneElement(child, { isOpen, setIsOpen })
        }
        return child
      })}
    </div>
  )
}

export const SheetTrigger = ({ children, asChild, setIsOpen, ...props }) => {
  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => setIsOpen(true),
      ...props
    })
  }
  
  return (
    <button onClick={() => setIsOpen(true)} {...props}>
      {children}
    </button>
  )
}

export const SheetContent = ({ 
  children, 
  side = 'right', 
  isOpen, 
  setIsOpen, 
  className = '',
  ...props 
}) => {
  const sheetRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  const sideClasses = {
    right: 'right-0 top-0 h-full w-[300px]',
    left: 'left-0 top-0 h-full w-[300px]',
    top: 'top-0 left-0 w-full h-[300px]',
    bottom: 'bottom-0 left-0 w-full h-[300px]'
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        ref={sheetRef}
        className={`fixed z-50 bg-background border shadow-lg ${sideClasses[side]} ${className}`}
        {...props}
      >
        {React.Children.map(children, child => {
          if (child.type === SheetClose) {
            return React.cloneElement(child, { setIsOpen })
          }
          return child
        })}
      </div>
    </>
  )
}

export const SheetClose = ({ children, setIsOpen, ...props }) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => setIsOpen(false),
      ...props
    })
  }
  
  return (
    <button onClick={() => setIsOpen(false)} {...props}>
      {children}
    </button>
  )
}

export default Sheet
