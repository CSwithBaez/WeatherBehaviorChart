# My Inside Weather Chart - Behavioral Tracker

A React-based behavioral tracking application designed for educators and parents of 5-year-olds to foster self-regulation and emotional intelligence through positive reinforcement.

## Features

- 📊 **Weekly Behavior Grid**: Track daily self-regulation across multiple goals
- 🌤️ **Weather-Based System**: Visual, intuitive feedback using weather metaphors
- 💾 **Persistent Storage**: Automatic saving to browser (data survives refresh)
- 📥 **Export/Import**: Backup and restore data as JSON or CSV
- 💬 **Parent Notes**: Document behavioral patterns and environmental triggers
- 🎯 **Customizable Goals**: Define personalized behavior targets and rewards
- 🖨️ **Printable Charts**: Generate physical charts for offline tracking
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14
- **UI Framework**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel / Docker

## Quick Start

### Prerequisites

- Node.js ≥ 18.17.0
- npm or yarn

### Local Development

1. **Clone or extract the project**
```bash
cd regulation_Chart
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
```bash
npm run build
npm start
```

## Project Structure

```
regulation_Chart/
├── app/
│   ├── globals.css           # Global Tailwind styles
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Main app component (BehaviorTracker)
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── Dockerfile                # Docker image definition
├── docker-compose.yml        # Docker Compose setup
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications with zero-config deployments.
### 🏠 Quick Option: Synology NAS (Perfect for Local Single-User)

Deploy directly to your home Synology NAS with persistent local storage:
- **No cloud needed** - data stays on your home network
- **Perfect for single-user deployment** (like this app)
- **Automatic data persistence** across sessions
- **Easy backups** via export functionality

**See full guide**: [SYNOLOGY_DEPLOYMENT.md](SYNOLOGY_DEPLOYMENT.md)  
**Quick start (5 min)**: [SYNOLOGY_QUICKSTART.md](SYNOLOGY_QUICKSTART.md)

```bash
# TL;DR: Build, upload, import to Docker Manager
docker build -t regulation-chart .
docker save regulation-chart:latest -o regulation-chart.tar
# Upload regulation-chart.tar to NAS via File Station
# Then import in Docker Manager → Launch → Done!
```

---

### Option 1: Deploy to Vercel (Recommended for Public)

Vercel is the optimal platform for Next.js applications with zero-config deployments (cloud-based).

#### Steps:

1. **Push to GitHub** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/regulation_Chart.git
git push -u origin main
```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your app is live!**
   - Vercel provides a production URL (e.g., `regulation-chart.vercel.app`)
   - Automatic deployments on every git push to main

### Option 2: Deploy to Docker (Self-Hosted)

Use Docker to run the app on your own server, cloud platform, or locally.

#### Prerequisites:
- Docker installed
- Docker Compose (optional but recommended)

#### Build and Run:

**Using Docker Compose (recommended):**
```bash
docker-compose up --build
```

**Using Docker directly:**
```bash
# Build the image
docker build -t regulation-chart:latest .

# Run the container
docker run -p 3000:3000 regulation-chart:latest
```

Access the app at `http://localhost:3000`

#### Pushing to Docker Hub:
```bash
docker tag regulation-chart:latest YOUR_DOCKERHUB_USERNAME/regulation-chart:latest
docker push YOUR_DOCKERHUB_USERNAME/regulation-chart:latest
```

### Option 3: Deploy to AWS, Google Cloud, Azure, or DigitalOcean

**AWS EC2:**
```bash
# SSH into your instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Clone repository
git clone https://github.com/YOUR_USERNAME/regulation_Chart.git
cd regulation_Chart

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs

# Install dependencies and build
npm install
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start the app
pm2 start npm --name "regulation-chart" -- start
pm2 startup
pm2 save
```

**DigitalOcean App Platform:**
1. Connect GitHub repository
2. Specify build command: `npm run build`
3. Specify run command: `npm start`
4. Set Node version to `18`
5. Deploy

**Google Cloud Run:**
```bash
# Build and push Docker image
gcloud builds submit --tag gcr.io/PROJECT_ID/regulation-chart

# Deploy
gcloud run deploy regulation-chart \
  --image gcr.io/PROJECT_ID/regulation-chart \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Environment Variables

Create a `.env.local` file in the project root (copy from `.env.example`):

```bash
NODE_ENV=development
NEXT_PUBLIC_APP_NAME=Regulation Chart
```

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint on the codebase |
| `npm run type-check` | Check TypeScript types |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Guide

### Weekly Behavior Grid
- Track behavior across 7 days and multiple customizable goals
- Visual weather indicators (Rainbow, Sunny, Cloudy, Stormy)
- Parent notes for each day to document observations

### Weather System
- **🌈 Rainbow**: Outstanding self-regulation and independence
- **☀️ Sunny**: Great effort with positive responses to redirects
- **☁️ Cloudy**: Some restlessness, needed reminders
- **⚡ Stormy**: High disruption, tantrums, or attention-seeking

### Customization
- Add/edit/delete behavior goals
- Set weekly reward targets
- Define personalized connection-based rewards
- Adjust tracking parameters based on your child

### Educator Playbook
Access evidence-based behavioral strategies including:
- Connection Bucket Routine (proactive approach)
- Planned Ignoring (reactive approach)
- Introduction strategies
- Handling difficult days

## Data Storage & Persistence

### ✅ Automatic Local Storage
- **All data persists automatically** across browser sessions using browser's LocalStorage
- Tracking data, goals, notes, and settings are saved instantly as you make changes
- Data remains even after closing and reopening your browser
- No login or account required for local storage

### 📥 Export & Backup
Navigate to **Chart Setup & Rewards** → **Data Backup & Management** to:

**Export Options:**
- **Export as JSON** - Full backup of all data (recommended for complete backups)
- **Export as CSV** - Spreadsheet format for analysis in Excel/Google Sheets

**Import:**
- Restore from a previously exported JSON file
- Merges or replaces existing data

### ⚠️ Data Management
- **Clear All Data** - Reset to start fresh (requires confirmation)
- Regular backups recommended for peace of mind

### Optional: Cloud Backend
For multi-device sync or cloud storage, consider adding:
- Firebase Firestore (easiest)
- Supabase PostgreSQL
- MongoDB Atlas + API
- Your own backend database

## Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Check TypeScript
npm run type-check

# Check ESLint
npm run lint
```

### Docker container won't run
```bash
# Check logs
docker logs <container_id>

# Rebuild without cache
docker-compose build --no-cache
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is designed as an educational resource for behavioral support. It is not a substitute for professional medical or psychological advice. Always consult with qualified healthcare providers for significant behavioral concerns.

## Support & Resources

- **Documentation**: See inline comments in code
- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/regulation_Chart/issues)
- **Behavioral Resources**:
  - Center on the Developing Child (Harvard)
  - Zero to Three (developmental insights)
  - Child Welfare Information Gateway

---

**Created by**: Behavioral Health Team  
**Last Updated**: 2026-06-22  
**Version**: 1.0.0
