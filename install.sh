#!/bin/bash

# BASE44 Platform Installation Script
# This script will help you set up the BASE44 platform on your local machine

echo "🚀 Welcome to BASE44 Platform Installation"
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment file..."
    cp env.example .env.local
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  Please update .env.local with your configuration"
else
    echo "✅ Environment file already exists"
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed or not in PATH"
    echo "Please install PostgreSQL and ensure it's running"
    echo "Visit: https://www.postgresql.org/download/"
else
    echo "✅ PostgreSQL detected"
fi

# Install Prisma CLI globally if not installed
if ! command -v prisma &> /dev/null; then
    echo "📦 Installing Prisma CLI..."
    npm install -g prisma
fi

echo "✅ Prisma CLI ready"

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

if [ $? -ne 0 ]; then
    echo "❌ Failed to generate Prisma client"
    exit 1
fi

echo "✅ Prisma client generated"

echo ""
echo "🎉 Installation completed successfully!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your configuration"
echo "2. Set up your PostgreSQL database"
echo "3. Run: npx prisma db push"
echo "4. Run: npm run dev"
echo "5. Open http://localhost:3000"
echo ""
echo "📚 Documentation: README.md"
echo "🆘 Need help? Check the README.md file"
echo ""
echo "Happy coding! 🚀" 