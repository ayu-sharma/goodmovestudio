// components/ui/Button.jsx
'use client'
import React from 'react';

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  image,
  icon: Icon,
  imagePosition = 'left',
  iconPosition = 'left',
  ...props
}) => {
  // Base styles - minimal
  const baseStyles = 'inline-flex items-center justify-center font-medium disabled:opacity-50 cursor-pointer';
  
  // Variant styles - no hover or focus states
  const variants = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    outline: 'border-2 border-blue-600',
    ghost: 'text-gray-700',
    link: ''
  };
  
  // Size styles
  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  // Gap between elements
  const gapStyles = 'gap-2';
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${gapStyles} ${className}`;
  
  // Render image element
  const renderImage = () => {
    if (!image) return null;
    return (
      <img 
        src={image} 
        alt="" 
        className="w-5 h-5 object-contain"
      />
    );
  };
  
  // Render icon element
  const renderIcon = () => {
    if (!Icon) return null;
    return <Icon className="w-5 h-5" />;
  };
  
  // Determine what to render and in what order
  const renderContent = () => {
    const hasImage = !!image;
    const hasIcon = !!Icon;
    const hasText = !!children;
    
    // If only image or icon (no text)
    if ((hasImage || hasIcon) && !hasText) {
      return (
        <>
          {hasImage && renderImage()}
          {hasIcon && renderIcon()}
        </>
      );
    }
    
    // If only text (no image or icon)
    if (hasText && !hasImage && !hasIcon) {
      return children;
    }
    
    // If text with image/icon, position matters
    if (hasText && (hasImage || hasIcon)) {
      const leftElement = hasImage ? renderImage() : hasIcon ? renderIcon() : null;
      const position = hasImage ? imagePosition : iconPosition;
      
      if (position === 'right') {
        return (
          <>
            {children}
            {leftElement}
          </>
        );
      } else {
        return (
          <>
            {leftElement}
            {children}
          </>
        );
      }
    }
    
    return children;
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;