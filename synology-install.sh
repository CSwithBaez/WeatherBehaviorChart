#!/bin/bash
# Quick installation script for Synology NAS
# Usage: bash synology-install.sh YOUR_NAS_IP

NAS_IP=${1:-"192.168.1.100"}
APP_NAME="regulation-chart"
PORT=3000

echo "🚀 Regulation Chart - Synology Installation"
echo "=========================================="
echo "Target NAS: $NAS_IP"
echo ""

# Step 1: Build Docker image
echo "📦 Step 1: Building Docker image..."
docker build -t $APP_NAME:latest .

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Check Docker installation."
    exit 1
fi

# Step 2: Save image
echo "💾 Step 2: Saving Docker image..."
docker save $APP_NAME:latest -o $APP_NAME.tar

if [ $? -ne 0 ]; then
    echo "❌ Save failed."
    exit 1
fi

# Step 3: Upload to NAS
echo "📤 Step 3: Uploading to Synology NAS..."
scp $APP_NAME.tar admin@$NAS_IP:/volume1/docker/ 2>/dev/null

if [ $? -ne 0 ]; then
    echo "❌ Upload failed. Check SSH access and NAS IP."
    echo "   Enable SSH: DSM → Control Panel → Terminal & SNMP → Enable SSH"
    exit 1
fi

# Step 4: Import on NAS
echo "🔧 Step 4: Importing on NAS..."
ssh admin@$NAS_IP << EOF
docker load -i /volume1/docker/$APP_NAME.tar
mkdir -p /volume1/docker/$APP_NAME-data
echo "✅ Docker image imported successfully!"
echo ""
echo "📋 Next steps in Docker Manager:"
echo "   1. Open Docker Manager"
echo "   2. Go to Image tab"
echo "   3. Find '$APP_NAME:latest'"
echo "   4. Click Launch"
echo "   5. Set Port: 3000 → 3000"
echo "   6. Set Volume: /app/data → /volume1/docker/$APP_NAME-data"
echo "   7. Click Done"
echo ""
echo "🌐 Access at: http://$NAS_IP:$PORT"
EOF

# Cleanup
rm $APP_NAME.tar

echo "✅ Upload complete! Follow the steps above in Docker Manager."
