# Deploying Regulation Chart on Synology NAS

## Prerequisites
- Synology NAS with DSM 6.0 or later
- Docker support (most modern Synology models)
- SSH access enabled (optional but helpful)

## Option 1: Docker Deployment (Recommended ⭐)

Docker provides the cleanest, most reliable deployment on Synology with persistent data management.

### Step 1: Enable Docker on Your Synology NAS

1. **Open DSM** (Web interface, usually `http://YOUR_NAS_IP:5000`)
2. Go to **Package Center**
3. Search for "Docker"
4. Click **Install**
5. Wait for installation to complete
6. Docker Manager will appear in the main menu

### Step 2: Prepare Your App for Synology

1. **On your computer**, navigate to the regulation_Chart folder
2. Ensure all files are present:
   ```
   Dockerfile
   docker-compose.yml
   package.json
   app/
   tailwind.config.ts
   next.config.js
   tsconfig.json
   ```

3. **Create a `.dockerignore` file** in root (prevents large files):
   ```
   node_modules
   .next
   .git
   .gitignore
   .env.local
   .DS_Store
   ```

### Step 3: Push Docker Image to Synology

**Option A: Using Docker Compose (Easiest)**

1. **Build locally first** (on your computer):
   ```bash
   docker build -t regulation-chart:latest .
   ```

2. **Save the image**:
   ```bash
   docker save regulation-chart:latest -o regulation-chart.tar
   ```

3. **Upload to Synology**:
   - Use File Station or SCP
   - Copy `regulation-chart.tar` to `/volume1/docker/` (or any accessible folder)

4. **Import in Docker Manager**:
   - Open Docker Manager on Synology
   - Go to **Image** tab
   - Click **Add** → **Add from file**
   - Select `regulation-chart.tar`
   - Wait for import to complete

**Option B: Build Directly on Synology (if SSH available)**

1. **SSH into your Synology**:
   ```bash
   ssh admin@YOUR_NAS_IP
   ```

2. **Upload project files** (using SCP or File Station)

3. **Build the image**:
   ```bash
   cd /volume1/docker/regulation-chart
   docker build -t regulation-chart:latest .
   ```

### Step 4: Create and Run Container in DSM

1. **Open Docker Manager** → **Image** tab
2. Find `regulation-chart:latest`
3. Click **Launch** (or right-click → Run)
4. Configure the container:

   **General Settings:**
   - Container name: `regulation-chart`
   - Enable auto-restart: ✅
   - Use high privileges: ✅ (for data access)

   **Port Settings:**
   - Local Port: `3000` (or any free port)
   - Container Port: `3000`
   - Protocol: `tcp`

   **Volume Settings (Important!):**
   - Click **Add Folder**
   - Mount Path (inside container): `/app/data`
   - Folder Path (on NAS): `/volume1/docker/regulation-chart-data`
   - Click OK

   **Environment Settings (Optional):**
   ```
   NODE_ENV = production
   NEXT_TELEMETRY_DISABLED = 1
   ```

5. Click **Apply** → **Next** → **Done**

### Step 5: Access Your App

- **Local network**: `http://YOUR_NAS_IP:3000`
- **From outside**: Set up port forwarding on router (port 3000 → NAS)

### Step 6: Persist Data

Your container data is now stored at:
```
/volume1/docker/regulation-chart-data
```

**Backup data regularly**:
1. Go to File Station
2. Navigate to `/volume1/docker/regulation-chart-data`
3. Right-click → Compress
4. Download the backup

---

## Option 2: Node.js Direct Deployment

If Docker isn't available or you prefer running Node.js directly.

### Step 1: Enable SSH

1. Open DSM → **Control Panel** → **Terminal & SNMP**
2. Enable **SSH service**
3. Note the port (usually `22`)

### Step 2: Install Node.js

1. **SSH into your NAS**:
   ```bash
   ssh admin@YOUR_NAS_IP
   ```

2. **Install Node.js** (using npm):
   ```bash
   # Check if node is available
   node --version
   
   # If not installed, install via package manager
   sudo apt-get update
   sudo apt-get install nodejs npm
   ```

   OR use **ipkg** (Synology package manager):
   ```bash
   sudo ipkg install node
   sudo ipkg install npm
   ```

### Step 3: Deploy the App

1. **Create app directory**:
   ```bash
   mkdir -p /volume1/homes/admin/regulation-chart
   cd /volume1/homes/admin/regulation-chart
   ```

2. **Upload project files** (from your computer):
   ```bash
   scp -r ./regulation_Chart/* admin@YOUR_NAS_IP:/volume1/homes/admin/regulation-chart/
   ```

3. **Install dependencies**:
   ```bash
   cd /volume1/homes/admin/regulation-chart
   npm install
   ```

4. **Build the app**:
   ```bash
   npm run build
   ```

### Step 4: Run with PM2 (Process Manager)

PM2 keeps your app running and auto-restarts after reboot.

1. **Install PM2 globally**:
   ```bash
   sudo npm install -g pm2
   ```

2. **Create PM2 config file** (`ecosystem.config.js`):
   ```javascript
   module.exports = {
     apps: [{
       name: 'regulation-chart',
       script: 'npm',
       args: 'start',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '500M',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

3. **Start the app**:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

4. **Check status**:
   ```bash
   pm2 status
   pm2 logs
   ```

### Step 5: Access Your App

- `http://YOUR_NAS_IP:3000`

---

## Option 3: Using Synology Web Station (Advanced)

If your NAS supports it and you want to run via Synology's built-in web server.

### Step 1: Enable Web Station

1. Open Package Center
2. Search "Web Station"
3. Install it

### Step 2: Configure

1. Open Web Station
2. Create new website
3. Configure Node.js as backend
4. Point to your app directory

---

## Troubleshooting

### Docker: Container won't start
```bash
# Check logs
docker logs regulation-chart

# Restart container
docker restart regulation-chart

# Remove and recreate
docker stop regulation-chart
docker rm regulation-chart
# Then re-run from Docker Manager
```

### Node.js: Port already in use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill it
sudo kill -9 <PID>

# Or use different port
PORT=8080 npm start
```

### Cannot access from outside network
1. **Enable UPnP** on router or manually forward port
2. **Router port forwarding**:
   - External Port: `3000` (or other)
   - Internal IP: `YOUR_NAS_IP`
   - Internal Port: `3000`
3. **Access via**: `http://YOUR_PUBLIC_IP:3000`

### App is slow
1. Upgrade NAS RAM
2. Use SSD for `/volume1`
3. Reduce number of concurrent users (single user app won't have issues)

---

## Recommended Setup: Docker + Automated Backups

### Create Backup Script

1. **SSH into NAS**
2. Create file `/volume1/scripts/backup-regulation-chart.sh`:
   ```bash
   #!/bin/bash
   BACKUP_DIR="/volume1/homes/admin/backups"
   DATA_DIR="/volume1/docker/regulation-chart-data"
   DATE=$(date +%Y%m%d_%H%M%S)
   
   mkdir -p $BACKUP_DIR
   tar -czf $BACKUP_DIR/regulation-chart-backup-$DATE.tar.gz $DATA_DIR
   
   # Keep only last 30 days
   find $BACKUP_DIR -name "regulation-chart-backup-*.tar.gz" -mtime +30 -delete
   ```

3. **Make executable**:
   ```bash
   chmod +x /volume1/scripts/backup-regulation-chart.sh
   ```

4. **Schedule via Task Scheduler**:
   - DSM → Control Panel → Task Scheduler
   - Create Scheduled Task → User-Defined Script
   - Run daily at 2 AM
   - Command: `/volume1/scripts/backup-regulation-chart.sh`

---

## Monitoring & Maintenance

### Check Docker Container Health
```bash
# Via SSH
docker inspect regulation-chart

# Check resource usage
docker stats regulation-chart
```

### Update App
```bash
# Pull latest code
cd /volume1/docker/regulation-chart
git pull

# Rebuild image
docker build -t regulation-chart:latest .

# Stop old container
docker stop regulation-chart
docker rm regulation-chart

# Launch new container (via Docker Manager UI)
```

### Database Backups (Regular)
1. Export data as JSON: In app UI → "Export as JSON"
2. Save to NAS network folder
3. Or use backup script above

---

## Security Notes

- **Local Network Only**: App has no authentication—only expose on LAN
- **If internet access needed**: Add reverse proxy with authentication:
  ```bash
  # Install nginx-let's encrypt
  # Or use Synology's built-in reverse proxy
  ```
- **Data Location**: `/volume1/docker/regulation-chart-data` = where all tracking data lives
- **Backup Regularly**: Export JSON weekly to external drive

---

## Quick Reference: NAS IP Discovery

Find your Synology NAS IP:

**Windows**:
```bash
ping syno
# Or use Synology Assistant app
```

**Mac/Linux**:
```bash
ping syno.local
# Or
nmap -p 5000 192.168.1.0/24
```

---

## Support

- **Synology Documentation**: https://www.synology.com/en-us/dsm
- **Docker Docs**: https://docs.docker.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**Last Updated**: 2026-06-22  
**Status**: Production Ready
