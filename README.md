# SprintIQ — AI-Powered Agile Project Management System

**SprintIQ** is a premium dark-mode agile project management dashboard built entirely with vanilla **HTML5, CSS3, and JavaScript (ES6+)**. It requires **zero frameworks, zero build steps, and zero external runtime dependencies**, making it lightning-fast, ultra-portable, and ready for deployment via GitHub, Jenkins, and AWS EC2 with Nginx.

---

## 🚀 Key Features

### 1. Minimal Ambient Dark Interface
- Handcrafted developer-centric dark palette:
  - **Main Background**: `#080B12`
  - **Sidebar Background**: `#101725`
  - **Card Surface**: `#171F2E`
  - **Elevated Surfaces**: `#1D2738`
  - **Borders**: `#242E40`
  - **Primary Accent**: `#648CFF`
  - **Secondary Accent**: `#9B8AFF`
  - **Status Colors**: Muted green (`#34D399`), muted amber (`#FBBF24`), muted coral (`#F87171`)
- Restrained ambient glows, crisp typography via Google Fonts Inter, thin 1px borders, and fluid micro-transitions.

### 2. Multi-Page Modular Views (Single-Page Experience)
- **Demo Login View**: Atmospheric ambient card with pre-filled credentials, 1-click authentication, and smooth transitions.
- **Overview Dashboard**: High-level KPIs, active sprint status, dynamic HTML5 Canvas burndown & velocity chart, recent issue table, and team workload capacity bars.
- **Projects Page**: Rich project cards with progress bars, issue points burned, repository links, tags, and "+ New Project" creation modal.
- **Sprints Roadmap**: Detailed sprint breakdown with goal banners, burn distribution bars, and "+ Plan Sprint" scheduling.
- **Tasks Page (Board & List)**:
  - Interactive **Kanban Board** across 4 lifecycle columns: *To Do*, *In Progress*, *In Review*, and *Done*.
  - Alternative **Interactive List View** with status and priority tags.
  - Live search filter and multi-select filters by priority, assignee, and status.
  - Full task CRUD: Create, Edit, Advance status, and Delete.
- **AI Insights & Neural Engine**:
  - 4 proactive AI recommendations: *PR Review Bottleneck Mitigation*, *Workload & Burnout Rebalancing*, *Scope Creep Defense*, and *Flaky Test Refactoring*.
  - Interactive **"Apply Recommendation"** action that updates active tasks and sprints in real time.
  - Interactive **"Ask SprintIQ AI"** query box with prompt chips for instant agile telemetry analysis.
- **Settings Page**: Workspace name, default sprint durations, ambient glow toggle, and JSON backup export/reset.

---

## 📂 Project Structure

```
asap sprintiq/
├── index.html        # Main semantic HTML structure & modal dialogs
├── style.css         # Complete dark-mode design system & responsive layout
├── script.js         # Vanilla JS application state, controllers & charts
├── server.js         # Optional zero-dependency local Node.js static server
├── nginx.conf        # Production Nginx virtual host configuration for AWS EC2
├── Jenkinsfile       # Automated Jenkins CI/CD pipeline definition
└── README.md         # Documentation & deployment guide
```

---

## 💻 How to Run Locally

You can run SprintIQ on any computer without installing complex build toolchains.

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer or open it directly in Chrome, Firefox, Safari, or Edge:
```
file:///path/to/asap%20sprintiq/index.html
```

### Option 2: Using the Included Node Server (Recommended)
Run the zero-dependency Node server included in the project:
```bash
node server.js
```
Open **`http://localhost:3000`** in your browser.

### Option 3: Using Python
```bash
python -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

### Option 4: Using VS Code Live Server / `npx serve`
```bash
npx serve .
```

---

## 🛠️ Step-by-Step Deployment Guide

### Phase 1: GitHub Repository Setup

1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of SprintIQ Agile System"
   ```

2. Create a new repository on GitHub (e.g., `sprintiq-web`).

3. Link and push to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/sprintiq-web.git
   git push -u origin main
   ```

---

### Phase 2: AWS EC2 Instance Setup with Nginx

#### 1. Launch EC2 Instance
- **AMI**: Ubuntu 22.04 LTS or Amazon Linux 2023.
- **Instance Type**: `t2.micro` or `t3.micro` (Free Tier eligible).
- **Security Group Inbound Rules**:
  - `SSH` (Port 22) -> Your IP or Jenkins Server IP.
  - `HTTP` (Port 80) -> Anywhere (`0.0.0.0/0`).
  - `HTTPS` (Port 443) -> Anywhere (`0.0.0.0/0`).

#### 2. Connect via SSH and Install Nginx
```bash
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>

# Update package repository and install Nginx
sudo apt update
sudo apt install -y nginx

# Enable and start Nginx service
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### 3. Prepare Web Root Directory
```bash
# Create directory for SprintIQ static files
sudo mkdir -p /var/www/sprintiq
sudo chown -R ubuntu:ubuntu /var/www/sprintiq
sudo chmod -R 755 /var/www/sprintiq
```

#### 4. Configure Nginx Virtual Host
Create the configuration file:
```bash
sudo nano /etc/nginx/sites-available/sprintiq
```
Paste the contents from `nginx.conf`:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name _;

    root /var/www/sprintiq;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|svg|png|jpg|ico)$ {
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }
}
```

Enable the site and reload Nginx:
```bash
# Remove default site if desired
sudo rm -f /etc/nginx/sites-enabled/default

# Enable sprintiq
sudo ln -s /etc/nginx/sites-available/sprintiq /etc/nginx/sites-enabled/

# Test syntax and reload
sudo nginx -t
sudo systemctl reload nginx
```

---

### Phase 3: Jenkins CI/CD Pipeline Setup

SprintIQ includes a production `Jenkinsfile` that automates testing and deployment to your EC2 instance upon every git push.

#### 1. Configure Jenkins Prerequisites
1. In Jenkins, install the **SSH Agent Plugin** and **Git Plugin**.
2. Go to **Manage Jenkins** → **Credentials** → **System** → **Global credentials**:
   - Add SSH Private Key credential with ID `sprintiq-ssh-key` (paste your EC2 `.pem` private key).
   - Add String credential with ID `sprintiq-ec2-host` (enter your EC2 Public IP or DNS).

#### 2. Create the Pipeline Job
1. In Jenkins Dashboard, click **New Item** → **Pipeline** → Name it `SprintIQ-Deployment`.
2. Under **Build Triggers**, enable **GitHub hook trigger for GITScm polling** (or Poll SCM).
3. Under **Pipeline**:
   - Definition: **Pipeline script from SCM**
   - SCM: **Git**
   - Repository URL: `https://github.com/<your-username>/sprintiq-web.git`
   - Branch: `*/main`
   - Script Path: `Jenkinsfile`
4. Click **Save** and **Build Now**.

#### 3. What the Jenkins Pipeline Executes
- **Stage 1 (Checkout)**: Clones the latest branch from GitHub.
- **Stage 2 (Lint & Validate)**: Runs `node -c script.js` to ensure zero syntax errors and verifies required files exist.
- **Stage 3 (Archive Artifacts)**: Preserves the production static assets in Jenkins.
- **Stage 4 (Deploy to AWS EC2 via SSH/SCP)**:
  - Connects to the EC2 instance via SSH.
  - Synchronizes `index.html`, `style.css`, and `script.js` directly to `/var/www/sprintiq`.
  - Executes `sudo systemctl reload nginx` to instantly serve the updated site.

---

## 🔒 Security & Best Practices Implemented
- Semantic, valid HTML5 with ARIA labels and native `<dialog>` overlays.
- Vanilla JavaScript free from supply-chain CVE vulnerabilities.
- Safe client-side state caching using browser `localStorage`.
- Gzip compression and browser caching directives configured in `nginx.conf`.
