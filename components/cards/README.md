# Card Components

This directory contains reusable card components for the betting platform.

## TypeOne Component

A promotional banner card with background image, title, and action button.

### Props:
- `title`: React.ReactNode - The title content
- `button`: string - Button text
- `image`: string - Background image URL from /public
- `link`: string (optional) - Link for the button (default: '#')

### Usage:
```tsx
import TypeOne from "./cards/type.one";

<TypeOne 
  title="REFER & REWARDS" 
  button="CLAIM NOW" 
  image="/images/banner/Banner12.jpg" 
  link="#" 
/>
```

## TypeTwo Component

A Big/Small game interface card with betting address, chances display, and action buttons.

### Props:
- `title`: string - Game title (e.g., "Big/Small")
- `chances`: number - Chances/multiplier value (e.g., 1.95)
- `bettingAddress`: string - Wallet address for betting
- `leftButtonText`: string - Text for the left button (e.g., "Junior field")
- `rightButtonText`: string - Text for the right button (e.g., "Put")
- `onLeftButtonClick`: () => void (optional) - Left button click handler
- `onRightButtonClick`: () => void (optional) - Right button click handler
- `onCopyAddress`: () => void (optional) - Copy address handler

### Usage:
```tsx
import TypeTwo from "./cards/type.two";

<TypeTwo
  title="Big/Small"
  chances={1.95}
  bettingAddress="TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X"
  leftButtonText="Junior field"
  rightButtonText="Put"
  onLeftButtonClick={() => console.log('Left button clicked')}
  onRightButtonClick={() => console.log('Right button clicked')}
  onCopyAddress={() => console.log('Address copied')}
/>
```

### Features:
- Modern dark theme design with gradient backgrounds
- Copy-to-clipboard functionality for betting address
- Responsive design with hover effects
- Information icon for additional details
- Gradient buttons with active states
- Background pattern overlay for visual appeal
