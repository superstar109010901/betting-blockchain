# BASE44 - AI-Powered Sports & Forex Tipster Platform

A comprehensive, modern tipster platform that provides data-driven betting suggestions, forex signals, and community features for smart betting decisions.

## 🚀 Features

### Core Platform
- **AI-Powered Tip Generation** - Advanced algorithms analyze live data from multiple sources
- **Smart Bet Builder** - Customize tips to match your risk tolerance
- **Forex Signal Center** - Daily trading signals with entry/exit points
- **Bet Code Generator** - Multi-bookmaker code conversion (Betway, Easybet, HollywoodBets)
- **Community System** - Chatrooms, influencers, and collaborative betting
- **BetCast Audio** - Premium weekly audio forecasts from professional tipsters

### Technical Features
- **Progressive Web App (PWA)** - Installable on mobile devices
- **Real-time Updates** - Live odds and tip updates
- **Responsive Design** - Optimized for all devices
- **Advanced Analytics** - Performance tracking and insights
- **Push Notifications** - Instant alerts for important updates

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Chart.js with React Chart.js 2
- **State Management**: React Query for server state
- **Forms**: React Hook Form
- **Icons**: Heroicons and Lucide React
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **Payments**: Stripe integration

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── sections/          # Landing page sections
│   ├── ui/               # Basic UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions and configurations
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── prisma/              # Database schema and migrations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/base44-platform.git
   cd base44-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/base44"
   
   # Authentication
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # APIs
   AISCORE_API_KEY="your-aiscore-key"
   LIVESCORE_API_KEY="your-livescore-key"
   SOFASCORE_API_KEY="your-sofascore-key"
   WINDRWWIN_API_KEY="your-windrawwin-key"
   
   # Betting APIs
   BETWAY_API_KEY="your-betway-key"
   BETWAY_API_SECRET="your-betway-secret"
   
   # Payments
   STRIPE_SECRET_KEY="your-stripe-secret"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable"
   
   # Email
   SMTP_HOST="your-smtp-host"
   SMTP_PORT="587"
   SMTP_USER="your-smtp-user"
   SMTP_PASS="your-smtp-password"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 PWA Features

The platform is built as a Progressive Web App with:
- **Installable** - Add to home screen on mobile devices
- **Offline Support** - Basic functionality works without internet
- **Push Notifications** - Real-time alerts for tips and updates
- **App-like Experience** - Native mobile app feel

## 🎯 Key Features Implementation

### Tip Generation Engine
- Integrates with AIScore, LiveScore, SofaScore, and WinDrawWin APIs
- AI algorithms analyze multiple data points for accurate predictions
- Confidence scoring system for risk assessment
- Real-time odds tracking and movement analysis

### Bet Builder
- Customizable tip thresholds (e.g., Over 2.5 → Over 1.5 goals)
- Real-time odds adjustment based on customization
- Multi-bookmaker support
- Export functionality (PDF/Excel)

### Forex Signals
- Daily 2-4 trading signals
- Entry, stop-loss, and take-profit levels
- Chart analysis with images
- News impact detection

### Community Features
- League-specific chatrooms
- Influencer cubicles for private tipping
- Collaborative betting groups
- Transparent ROI tracking

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Purple (#d946ef) - Accent color
- **Success**: Green (#22c55e) - Positive actions
- **Warning**: Yellow (#f59e0b) - Caution states
- **Danger**: Red (#ef4444) - Error states

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Display Font**: Poppins - For headings and emphasis

### Components
- Consistent button styles with hover states
- Card components with soft shadows
- Form inputs with focus states
- Loading spinners and animations

## 📊 Subscription Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Free** | R0 | 3 tips/day, limited explorer |
| **Starter** | R99 | Full tips, basic customization |
| **Pro** | R199 | Forex signals, chatrooms, live updates |
| **Elite** | R350 | All features + BetCast, CRM, advanced filters |

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for version control

### Testing
```bash
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:coverage # Run tests with coverage
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Docker
```bash
# Build the image
docker build -t base44-platform .

# Run the container
docker run -p 3000:3000 base44-platform
```

## 📈 Performance

### Optimization Features
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Caching** - React Query for efficient data caching
- **Bundle Analysis** - Webpack bundle analyzer integration

### Monitoring
- **Analytics** - Google Analytics integration
- **Error Tracking** - Sentry for error monitoring
- **Performance** - Core Web Vitals tracking

## 🔒 Security

### Security Features
- **Authentication** - Secure user authentication with NextAuth.js
- **Authorization** - Role-based access control
- **Data Protection** - GDPR compliant data handling
- **API Security** - Rate limiting and input validation
- **HTTPS** - SSL/TLS encryption

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [API Documentation](./docs/api.md)
- [Component Library](./docs/components.md)
- [Deployment Guide](./docs/deployment.md)

### Getting Help
- **Email**: support@base44.com
- **Discord**: [Join our community](https://discord.gg/base44)
- **Documentation**: [docs.base44.com](https://docs.base44.com)

## 🎉 Acknowledgments

- **Design Inspiration**: Modern betting platforms and fintech applications
- **Icons**: Heroicons and Lucide React
- **Charts**: Chart.js and React Chart.js 2
- **Community**: All contributors and beta testers

---

**Built with ❤️ by the BASE44 Team**

*Empowering smart betting decisions through data-driven insights.* 