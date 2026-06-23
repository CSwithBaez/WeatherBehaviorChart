# Synology Quick Start (5 minutes)

## Step 1: Find Your NAS IP
```bash
# Windows/Mac/Linux
ping syno
# or use Synology's mobile app to find IP
# Usually looks like: 192.168.1.100
```

## Step 2: Build Docker Image (on your computer)

```bash
cd regulation_Chart
docker build -t regulation-chart:latest .
docker save regulation-chart:latest -o regulation-chart.tar
```

## Step 3: Upload to NAS (choose one)

### Option A: Using File Station (GUI)
1. Open browser → `http://YOUR_NAS_IP:5000`
2. Login to DSM
3. Open File Station
4. Navigate to `docker` folder (or create if doesn't exist)
5. Drag & drop `regulation-chart.tar` there

### Option B: Using SCP (Command Line)
```bash
scp regulation-chart.tar admin@YOUR_NAS_IP:/volume1/docker/
```

### Option C: Using Automated Script
```bash
chmod +x synology-install.sh
./synology-install.sh 192.168.1.100  # Replace with your NAS IP
```

## Step 4: Import in Docker Manager (GUI)

1. **Open DSM** → Find **Docker Manager**
2. Go to **Image** tab
3. Click **Add** → **Add from File**
4. Select `regulation-chart.tar`
5. Wait for import ✅

## Step 5: Create Container

1. Still in Docker Manager → **Image** tab
2. Find `regulation-chart:latest`
3. Right-click → **Run** (or select and click Launch)

### Configure Container:

| Setting | Value |
|---------|-------|
| Container Name | `regulation-chart` |
| Auto-restart | ✅ |
| Port (Local) | `3000` |
| Port (Container) | `3000` |
| Protocol | `tcp` |
| Volume Mount Path | `/app/data` |
| Volume Folder | `/volume1/docker/regulation-chart-data` |

4. Click **Apply** → **Next** → **Done**

## Step 6: Access

Open browser:
```
http://YOUR_NAS_IP:3000
```

✅ **You're done!** Your app is now running on your Synology NAS.

---

## Backup Your Data

### Automatic (Recommended)

1. In app → **Chart Setup & Rewards** tab
2. Scroll to **Data Backup & Management**
3. Click **Export as JSON**
4. Save file to your computer

### Manual File Backup

1. File Station
2. Navigate to `/volume1/docker/regulation-chart-data`
3. Right-click → Compress
4. Download the `.zip`

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find Docker Manager | Enable Docker: Package Center → Docker → Install |
| Container won't start | Click container → Log tab for errors |
| Can't access http://NAS_IP:3000 | Check port isn't blocked. Try different port: 8080 |
| Lost data | Check your export backups or Docker volume folder |

---

**That's it! Your Regulation Chart is now running on your home NAS.** 🎉
