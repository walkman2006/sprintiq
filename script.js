/**
 * SprintIQ — AI-Powered Agile Project Management System
 * Vanilla JavaScript Engine & State Architecture
 */

// ============================================================================
// 1. Initial Seed Data
// ============================================================================
const INITIAL_STATE = {
  currentUser: {
    name: "Kishore",
    role: "Team Member",
    email: "kishore@sprintiq.internal",
    avatar: "KI"
  },
  isAuthenticated: true,
  themeGlow: true,
  projects: [
    {
      id: "PRJ-1",
      title: "Cloud Infrastructure Migration",
      desc: "Zero-downtime migration of microservices and message queues to distributed Kubernetes EKS clusters.",
      category: "Infra & DevOps",
      status: "Active",
      progress: 78,
      pointsDone: 68,
      pointsTotal: 88,
      activeSprint: "Sprint 42",
      members: ["AR", "SC", "MV"],
      repo: "acme-corp/cloud-infra"
    },
    {
      id: "PRJ-2",
      title: "NextGen Auth V2 & OAuth2",
      desc: "Implement PKCE-compliant authentication, biometric passkey fallback, and real-time JWT token revocation.",
      category: "Security",
      status: "Active",
      progress: 64,
      pointsDone: 32,
      pointsTotal: 50,
      activeSprint: "Sprint 42",
      members: ["MV", "ER"],
      repo: "acme-corp/auth-service"
    },
    {
      id: "PRJ-3",
      title: "Payment Gateway Webhooks V3",
      desc: "High-throughput asynchronous webhook processor with automated idempotency keys and exponential backoff retry.",
      category: "Backend Core",
      status: "Active",
      progress: 45,
      pointsDone: 18,
      pointsTotal: 40,
      activeSprint: "Sprint 42",
      members: ["DK", "SC"],
      repo: "acme-corp/payments-engine"
    },
    {
      id: "PRJ-4",
      title: "AI Predictive Engine Telemetry",
      desc: "Continuous model training pipelines predicting sprint completion probabilities and developer review bottlenecks.",
      category: "Machine Learning",
      status: "Planning",
      progress: 20,
      pointsDone: 8,
      pointsTotal: 40,
      activeSprint: "Sprint 43",
      members: ["AR", "DK"],
      repo: "acme-corp/ai-telemetry"
    }
  ],
  sprints: [
    {
      id: "SPR-42",
      name: "Sprint 42: Production Resilience & Auth V2",
      goal: "Finalize zero-trust OAuth2 session revocation, scale Kubernetes ingress, and eliminate payment webhook latency.",
      startDate: "2026-10-02",
      endDate: "2026-10-16",
      status: "Active",
      totalPoints: 52,
      burnedPoints: 38,
      velocityTrend: "+12%",
      riskLevel: "Low Risk"
    },
    {
      id: "SPR-43",
      name: "Sprint 43: API Gateway Hardening & Observability",
      goal: "Implement distributed tracing with OpenTelemetry, Envoy proxy rate limiting, and automated canary deployments.",
      startDate: "2026-10-19",
      endDate: "2026-11-02",
      status: "Upcoming",
      totalPoints: 48,
      burnedPoints: 0,
      velocityTrend: "Projected 48 pts",
      riskLevel: "Neutral"
    },
    {
      id: "SPR-41",
      name: "Sprint 41: Database Sharding & Read Replicas",
      goal: "Deploy PostgreSQL horizontal read replicas and pgBouncer connection pooling across US-East regions.",
      startDate: "2026-09-18",
      endDate: "2026-10-02",
      status: "Completed",
      totalPoints: 50,
      burnedPoints: 50,
      velocityTrend: "100% Target Met",
      riskLevel: "Done"
    }
  ],
  tasks: [
    {
      id: "TSK-101",
      title: "Migrate Redis session cache to AWS ElastiCache cluster",
      desc: "Upgrade cluster engine to 7.1 with in-transit encryption and cross-AZ failover enabled.",
      project: "Cloud Infrastructure Migration",
      sprint: "Sprint 42",
      status: "In Progress",
      priority: "Urgent",
      assignee: "Sarah Chen",
      points: 5,
      updatedAt: "2h ago"
    },
    {
      id: "TSK-102",
      title: "Implement PKCE exchange for Single Page App client",
      desc: "Replace implicit grant flow with OAuth2 Authorization Code + PKCE verification headers.",
      project: "NextGen Auth V2 & OAuth2",
      sprint: "Sprint 42",
      status: "In Review",
      priority: "High",
      assignee: "Marcus Vance",
      points: 3,
      updatedAt: "4h ago"
    },
    {
      id: "TSK-103",
      title: "Configure Stripe webhook HMAC signature verification",
      desc: "Ensure all incoming payload digests are validated with constant-time comparison to prevent timing leaks.",
      project: "Payment Gateway Webhooks V3",
      sprint: "Sprint 42",
      status: "Done",
      priority: "High",
      assignee: "David Kim",
      points: 3,
      updatedAt: "Yesterday"
    },
    {
      id: "TSK-104",
      title: "Calibrate neural sprint velocity projection weights",
      desc: "Incorporate developer historical cycle times and PR review latency factors into ML regression loss.",
      project: "AI Predictive Engine Telemetry",
      sprint: "Sprint 42",
      status: "In Progress",
      priority: "Medium",
      assignee: "Alex Rivera",
      points: 5,
      updatedAt: "3h ago"
    },
    {
      id: "TSK-105",
      title: "Set up Prometheus & Grafana alerting for pod eviction",
      desc: "Alert SRE team when node memory pressure exceeds 85% sustained over a 5-minute sliding window.",
      project: "Cloud Infrastructure Migration",
      sprint: "Sprint 42",
      status: "Done",
      priority: "High",
      assignee: "Sarah Chen",
      points: 2,
      updatedAt: "1d ago"
    },
    {
      id: "TSK-106",
      title: "Write integration tests for biometric WebAuthn credentials",
      desc: "Automate browser credential creation and credential assertion verification test suites.",
      project: "NextGen Auth V2 & OAuth2",
      sprint: "Sprint 42",
      status: "To Do",
      priority: "Medium",
      assignee: "Elena Rostova",
      points: 3,
      updatedAt: "5h ago"
    },
    {
      id: "TSK-107",
      title: "Add idempotent retry table with 24-hour TTL in DynamoDB",
      desc: "Track processed payment transaction UUIDs to guarantee zero duplicate charges under network blips.",
      project: "Payment Gateway Webhooks V3",
      sprint: "Sprint 42",
      status: "In Progress",
      priority: "Urgent",
      assignee: "David Kim",
      points: 8,
      updatedAt: "1h ago"
    },
    {
      id: "TSK-108",
      title: "Refactor legacy session cleanup cron job",
      desc: "Batch DELETE expired tokens using primary key partition bounds to avoid table locks.",
      project: "NextGen Auth V2 & OAuth2",
      sprint: "Sprint 42",
      status: "To Do",
      priority: "Low",
      assignee: "Marcus Vance",
      points: 2,
      updatedAt: "6h ago"
    },
    {
      id: "TSK-109",
      title: "Setup ArgoCD pipeline for canary deployments",
      desc: "Deploy Argo Rollouts controller to automate 10% traffic shifts with Prometheus metric analysis.",
      project: "Cloud Infrastructure Migration",
      sprint: "Sprint 42",
      status: "In Progress",
      priority: "High",
      assignee: "Alex Rivera",
      points: 5,
      updatedAt: "30m ago"
    },
    {
      id: "TSK-110",
      title: "Benchmark TLS handshake overhead on HTTP/2 ingress",
      desc: "Measure round-trip time differences when session resumption tickets are cached across edge PoPs.",
      project: "Cloud Infrastructure Migration",
      sprint: "Sprint 42",
      status: "To Do",
      priority: "Low",
      assignee: "Sarah Chen",
      points: 2,
      updatedAt: "1d ago"
    },
    {
      id: "TSK-111",
      title: "Add rate-limiting token bucket middleware in Go",
      desc: "Enforce 100 req/sec limit on public API endpoints with Redis sliding window backends.",
      project: "Payment Gateway Webhooks V3",
      sprint: "Sprint 42",
      status: "In Review",
      priority: "High",
      assignee: "David Kim",
      points: 5,
      updatedAt: "2h ago"
    },
    {
      id: "TSK-112",
      title: "Deploy Redis cluster secret rotation via AWS Secrets Manager",
      desc: "Automate dynamic credential updates without restarting client microservice application pools.",
      project: "Cloud Infrastructure Migration",
      sprint: "Sprint 42",
      status: "Done",
      priority: "Medium",
      assignee: "Sarah Chen",
      points: 3,
      updatedAt: "2d ago"
    }
  ],
  recommendations: [],
  notifications: [
    {
      id: "notif-1",
      title: "AI Risk Mitigated",
      desc: "Sprint 42 health score raised to 94% following cluster failover tests.",
      time: "10m ago",
      type: "ai",
      unread: true
    },
    {
      id: "notif-2",
      title: "Code Review Assigned",
      desc: "Marcus Vance requested your review on #TSK-102 (PKCE Exchange).",
      time: "1h ago",
      type: "task",
      unread: true
    },
    {
      id: "notif-3",
      title: "Burndown Ahead of Schedule",
      desc: "Team completed 8 story points in the last 24 hours.",
      time: "4h ago",
      type: "alert",
      unread: false
    }
  ]
};

// ============================================================================
// 2. State Storage & Persistence Manager
// ============================================================================
const StorageManager = {
  KEY: "sprintiq_state_v2",

  loadState() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Could not read localStorage:", e);
    }
    return JSON.parse(JSON.stringify(INITIAL_STATE));
  },

  saveState(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not write localStorage:", e);
    }
  },

  resetState() {
    localStorage.removeItem(this.KEY);
    return JSON.parse(JSON.stringify(INITIAL_STATE));
  }
};

// Application Global State Object
let AppState = StorageManager.loadState();

// ============================================================================
// 3. Toast Notifications Engine
// ============================================================================
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById("toastContainer");
  },

  show(message, type = "info", duration = 3500) {
    if (!this.container) this.init();

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconSvg = "";
    if (type === "success") {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === "warning") {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-message">${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(20px)";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, duration);
  },

  success(msg) { this.show(msg, "success"); },
  info(msg) { this.show(msg, "info"); },
  warning(msg) { this.show(msg, "warning"); }
};

// ============================================================================
// 4. View Router & Navigation
// ============================================================================
const Router = {
  currentView: "overview",

  init() {
    this.updateActiveUI(this.currentView);
  },

  navigate(viewName) {
    if (!viewName) return;
    this.currentView = viewName;

    // Hide all view containers
    document.querySelectorAll(".view-container").forEach(el => {
      el.classList.remove("active");
    });

    // Show target view
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add("active");
    }

    // Update active nav item
    document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
      if (item.dataset.view === viewName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update Topbar Title & Breadcrumb
    const topbarTitle = document.getElementById("topbarPageTitle");
    if (topbarTitle) {
      const titles = {
        "overview": "Overview",
        "projects": "Projects",
        "sprints": "Sprints",
        "tasks": "Sprint Tasks",
        "ai-planner": "AI Project Planner",
        "ai-insights": "AI Insights & Recommendations",
        "settings": "System Settings"
      };
      topbarTitle.textContent = titles[viewName] || "Dashboard";
    }

    // Close mobile sidebar if open
    const sidebar = document.getElementById("appSidebar");
    if (sidebar && sidebar.classList.contains("mobile-open")) {
      sidebar.classList.remove("mobile-open");
    }

    // Trigger page-specific re-renders
    if (viewName === "overview") OverviewController.render();
    if (viewName === "projects") ProjectsController.render();
    if (viewName === "sprints") SprintsController.render();
    if (viewName === "tasks") TasksController.render();
    if (viewName === "ai-planner") PlannerController.render();
    if (viewName === "ai-insights") AIInsightsController.render();
  },

  updateActiveUI(viewName) {
    this.navigate(viewName);
  }
};

// ============================================================================
// 5. Auth Controller (Demo Login & Session)
// ============================================================================
const AuthController = {
  init() {
    if (AppState.isAuthenticated) {
      document.getElementById("authView").style.display = "none";
      document.getElementById("appShell").style.display = "flex";
    } else {
      document.getElementById("authView").style.display = "flex";
      document.getElementById("appShell").style.display = "none";
    }
  },

  handleLogin() {
    const btn = document.getElementById("btnSignIn");
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
      Authenticating...
    `;

    setTimeout(() => {
      AppState.isAuthenticated = true;
      StorageManager.saveState(AppState);

      document.getElementById("authView").style.display = "none";
      document.getElementById("appShell").style.display = "flex";

      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
        Sign In to Workspace
      `;

      Toast.success(`Welcome back, ${AppState.currentUser.name}!`);
      OverviewController.render();
    }, 400);
  },

  handleLogout() {
    AppState.isAuthenticated = false;
    StorageManager.saveState(AppState);

    document.getElementById("appShell").style.display = "none";
    document.getElementById("authView").style.display = "flex";

    Toast.info("Signed out of demo session.");
  }
};

// ============================================================================
// 6. Overview Controller
// ============================================================================
const OverviewController = {
  render() {
    this.updateStats();
    this.renderSprint();
    this.renderAttention();
    this.renderWorkload();
  },

  updateStats() {
    const tasks = Array.isArray(AppState.tasks) ? AppState.tasks : [];
    const done = tasks.filter(task => task.status === "Done").length;
    const inProgress = tasks.filter(task => task.status === "In Progress").length;
    const todo = tasks.filter(task => task.status === "To Do").length;
    const datedTasks = tasks.filter(task => this.getTaskDate(task));
    const overdue = datedTasks.filter(task => task.status !== "Done" && this.getTaskDate(task) < this.today()).length;
    const values = {
      overviewTotalTasks: tasks.length,
      overviewCompletedTasks: done,
      overviewInProgressTasks: inProgress,
      overviewTodoTasks: todo,
      overviewTeamCount: this.getTeamNames().length,
      overviewOverdueCount: overdue
    };
    Object.entries(values).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });
    const overdueCard = document.getElementById("overviewOverdueCard");
    if (overdueCard) overdueCard.hidden = datedTasks.length === 0;
    const navTasks = document.getElementById("navTaskCount");
    if (navTasks) navTasks.textContent = tasks.length;
    const navProjects = document.getElementById("navProjectCount");
    if (navProjects) navProjects.textContent = AppState.projects.length;
  },

  today() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  },

  getTaskDate(task) {
    const value = String(task.dueDate || "").slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  },

  getTeamNames() {
    const knownMembers = ["Kishore", "Mohan", "Anju", "Anika", "Anish"];
    const profiles = Array.isArray(AppState.teamProfiles) ? AppState.teamProfiles.map(profile => profile.name) : [];
    const assignees = (AppState.tasks || []).flatMap(task => [task.assignee, ...(task.collaborators || [])]);
    return [...new Set([...knownMembers, ...profiles, ...assignees].map(name => String(name || "").trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  },

  getActiveSprint() {
    return (AppState.sprints || []).find(sprint => String(sprint.status || "").toLowerCase() === "active") || null;
  },

  getSprintTasks(sprint) {
    if (!sprint) return [];
    const keys = new Set([sprint.id, sprint.name].filter(Boolean).map(value => SprintIQWorkflow.sprintKey(value).toLowerCase()));
    return (AppState.tasks || []).filter(task => {
      const taskKey = SprintIQWorkflow.sprintKey(task.sprint || task.sprintId || "").toLowerCase();
      return keys.has(taskKey);
    });
  },

  formatDate(value) {
    const date = this.getTaskDate({ dueDate: value });
    return date ? date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "";
  },

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  },

  renderSprint() {
    const panel = document.getElementById("overviewSprintPanel");
    if (!panel) return;
    const sprint = this.getActiveSprint();
    if (!sprint) {
      panel.innerHTML = '<div class="command-empty">There is no active sprint in the current workspace.</div>';
      return;
    }
    const tasks = this.getSprintTasks(sprint);
    const counts = {
      todo: tasks.filter(task => task.status === "To Do").length,
      progress: tasks.filter(task => task.status === "In Progress").length,
      done: tasks.filter(task => task.status === "Done").length
    };
    const completion = tasks.length ? Math.round(counts.done / tasks.length * 100) : 0;
    const dates = [sprint.startDate && this.formatDate(sprint.startDate), sprint.endDate && this.formatDate(sprint.endDate)].filter(Boolean);
    panel.innerHTML = `
      <div class="sprint-command-title"><strong>${this.escape(sprint.name || sprint.id || "Active sprint")}</strong><span class="badge badge-success">${this.escape(sprint.status || "Active")}</span></div>
      <div class="sprint-command-meta">${dates.length ? dates.join(" – ") : "Sprint dates not set"}</div>
      ${tasks.length ? `
        <div class="sprint-command-progress-label"><span>Task completion</span><strong>${counts.done} of ${tasks.length} · ${completion}%</strong></div>
        <div class="progress-container" role="progressbar" aria-label="Sprint task completion" aria-valuenow="${completion}" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width:${completion}%"></div></div>
        <div class="sprint-command-counts">
          <div><strong>${counts.todo}</strong><span>To Do</span></div><div><strong>${counts.progress}</strong><span>In Progress</span></div><div><strong>${counts.done}</strong><span>Done</span></div>
        </div>` : '<div class="command-empty">No tasks are assigned to this sprint yet.</div>'}`;
  },

  renderAttention() {
    const container = document.getElementById("overviewAttentionList");
    if (!container) return;
    const now = this.today();
    const soon = new Date(now);
    soon.setDate(soon.getDate() + 3);
    const open = (AppState.tasks || []).filter(task => task.status !== "Done");
    const sprintTasks = this.getSprintTasks(this.getActiveSprint()).filter(task => task.status !== "Done");
    const groups = [
      { label: "Overdue", tasks: open.filter(task => { const due = this.getTaskDate(task); return due && due < now; }) },
      { label: "Due in the next 3 days", tasks: open.filter(task => { const due = this.getTaskDate(task); return due && due >= now && due <= soon; }) },
      { label: "Unassigned", tasks: open.filter(task => !String(task.assignee || "").trim()) },
      { label: "Blocked", tasks: open.filter(task => task.status === "Blocked" || task.blocked === true) }
    ].filter(group => group.tasks.length);
    container.innerHTML = groups.length ? groups.map(group => {
      const first = group.tasks[0];
      const detail = `${first.title || first.id}${group.tasks.length > 1 ? ` · +${group.tasks.length - 1} more` : ""}`;
      const due = this.getTaskDate(first) ? ` · Due ${this.formatDate(first.dueDate)}` : "";
      return `<div class="attention-item"><div class="attention-mark"></div><div class="attention-copy"><div class="attention-title"><strong>${this.escape(group.label)}</strong><span>${group.tasks.length}</span></div><p>${this.escape(detail + due)}</p></div><button class="btn btn-ghost btn-sm" onclick="SearchModal.selectTask(decodeURIComponent('${encodeURIComponent(first.id)}'))">View</button></div>`;
    }).join("") : '<div class="command-empty">No immediate attention needed.</div>';
  },

  renderWorkload() {
    const container = document.getElementById("overviewTeamList");
    if (!container) return;
    const names = this.getTeamNames();
    const tasks = Array.isArray(AppState.tasks) ? AppState.tasks : [];
    container.innerHTML = names.length ? names.map(name => {
      const assigned = tasks.filter(task => task.assignee === name || (task.collaborators || []).includes(name));
      const open = assigned.filter(task => task.status !== "Done").length;
      const initials = name.split(/\s+/).map(part => part[0]).join("").slice(0, 2);
      return `<div class="command-team-row"><span class="member-avatar">${this.escape(initials)}</span><strong>${this.escape(name)}</strong><span>${assigned.length} assigned</span></div>`;
    }).join("") : '<div class="command-empty">No team profiles or task assignments are available yet.</div>';
  }
};

// ============================================================================
// 7. Projects Controller
// ============================================================================
const ProjectsController = {
  currentFilter: "all",

  render() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    let list = AppState.projects;
    if (this.currentFilter !== "all") {
      list = list.filter(p => p.status.toLowerCase() === this.currentFilter.toLowerCase());
    }

    grid.innerHTML = list.map(p => {
      let statusBadge = "badge-neutral";
      if (p.status === "Active") statusBadge = "badge-success";
      if (p.status === "Planning") statusBadge = "badge-warning";
      if (p.status === "Completed") statusBadge = "badge-primary";

      const initials = p.title.split(" ").map(w => w[0]).slice(0, 2).join("");

      return `
        <div class="card project-card">
          <div>
            <div class="project-card-top">
              <div class="project-icon-box">${initials}</div>
              <span class="badge ${statusBadge}">${p.status}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
              <span class="badge badge-neutral">${p.category}</span>
              <span class="badge badge-neutral">${p.activeSprint}</span>
            </div>

            <div style="margin-bottom: 6px; display: flex; justify-content: space-between; font-size: 11px;">
              <span style="color: var(--text-muted);">Points Burned</span>
              <span style="color: var(--text-primary); font-weight: 600;">${p.pointsDone} / ${p.pointsTotal} pts</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar" style="width: ${p.progress}%;"></div>
            </div>
          </div>

          <div class="project-footer">
            <div class="avatar-group">
              ${p.members.map(m => `<span class="member-avatar">${m}</span>`).join("")}
            </div>
            <div class="project-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>${p.repo}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  filter(type, el) {
    this.currentFilter = type;
    if (el) {
      document.querySelectorAll(".view-actions-row .filter-pill").forEach(p => p.classList.remove("active"));
      el.classList.add("active");
    }
    this.render();
  }
};

// ============================================================================
// 8. Sprints Controller
// ============================================================================
const SprintsController = {
  render() {
    const container = document.getElementById("sprintsListContainer");
    if (!container) return;

    container.innerHTML = AppState.sprints.map(s => {
      let circleColor = "var(--bg-elevated)";
      let textColor = "var(--text-secondary)";
      let badge = "badge-neutral";

      if (s.status === "Active") {
        circleColor = "rgba(52, 211, 153, 0.15)";
        textColor = "var(--success)";
        badge = "badge-success";
      } else if (s.status === "Completed") {
        circleColor = "rgba(100, 140, 255, 0.15)";
        textColor = "var(--accent-primary)";
        badge = "badge-primary";
      }

      const pct = s.totalPoints > 0 ? Math.round((s.burnedPoints / s.totalPoints) * 100) : 0;

      return `
        <div class="sprint-row-card">
          <div class="sprint-row-left">
            <div class="sprint-status-circle" style="background: ${circleColor}; color: ${textColor};">
              ${s.name.includes("42") ? "42" : s.name.includes("43") ? "43" : "41"}
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 600; color: var(--text-primary);">${s.name}</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-top: 3px;">${s.goal}</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
                ${s.startDate} &rarr; ${s.endDate} • Health: <strong style="color: var(--text-primary);">${s.riskLevel}</strong>
              </div>
            </div>
          </div>

          <div class="sprint-row-center">
            <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 6px;">
              <span style="color: var(--text-muted);">Points Completed</span>
              <strong style="color: var(--text-primary);">${s.burnedPoints} / ${s.totalPoints} pts (${pct}%)</strong>
            </div>
            <div class="progress-container">
              <div class="progress-bar" style="width: ${pct}%;"></div>
            </div>
          </div>

          <div class="sprint-row-right">
            <span class="badge ${badge}">${s.status}</span>
            <button class="btn btn-secondary btn-sm" onclick="TasksController.filterBySprint('${s.name.split(':')[0]}')">View Tasks</button>
          </div>
        </div>
      `;
    }).join("");
  }
};

// ============================================================================
// 9. Tasks Controller (Kanban & List, Interactive Editing)
// ============================================================================
const TasksController = {
  viewMode: "kanban", // 'kanban' | 'list'
  searchQuery: "",
  filterPriority: "all",
  filterAssignee: "all",
  filterStatus: "all",

  render() {
    this.syncAssigneeOptions();
    const filtered = this.getFilteredTasks();

    if (this.viewMode === "kanban") {
      document.getElementById("kanbanBoard").style.display = "grid";
      document.getElementById("tasksListView").style.display = "none";
      this.renderKanban(filtered);
    } else {
      document.getElementById("kanbanBoard").style.display = "none";
      document.getElementById("tasksListView").style.display = "block";
      this.renderList(filtered);
    }
  },

  syncAssigneeOptions() {
    const select = document.getElementById("taskAssigneeFilter");
    if (!select) return;
    const selected = this.filterAssignee !== "all" ? this.filterAssignee : select.value;
    const names = [...new Set([
      ...(AppState.teamProfiles || []).map(profile => profile.name),
      ...AppState.tasks.flatMap(task => [task.assignee, ...(task.collaborators || [])])
    ].filter(Boolean))].sort();
    select.innerHTML = `<option value="all">All Assignees</option>${names.map(name => `<option value="${SprintIQWorkflow.escape(name)}">${SprintIQWorkflow.escape(name)}</option>`).join("")}`;
    select.value = names.includes(selected) ? selected : "all";
    this.filterAssignee = select.value;
  },

  setViewMode(mode) {
    this.viewMode = mode;
    const btnKanban = document.getElementById("btnToggleKanban");
    const btnList = document.getElementById("btnToggleList");

    if (mode === "kanban") {
      btnKanban.classList.add("active");
      btnList.classList.remove("active");
    } else {
      btnList.classList.add("active");
      btnKanban.classList.remove("active");
    }
    this.render();
  },

  getFilteredTasks() {
    return AppState.tasks.filter(t => {
      const matchSearch = !this.searchQuery ||
        t.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        t.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        t.project.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchPriority = this.filterPriority === "all" || t.priority === this.filterPriority;
      const matchAssignee = this.filterAssignee === "all" || t.assignee === this.filterAssignee || (t.collaborators || []).includes(this.filterAssignee);
      const matchStatus = this.filterStatus === "all" || t.status === this.filterStatus;

      return matchSearch && matchPriority && matchAssignee && matchStatus;
    });
  },

  renderKanban(tasks) {
    const cols = {
      "To Do": { container: document.getElementById("cardsTodo"), count: document.getElementById("countColTodo"), list: [] },
      "In Progress": { container: document.getElementById("cardsInProgress"), count: document.getElementById("countColInProgress"), list: [] },
      "In Review": { container: document.getElementById("cardsInReview"), count: document.getElementById("countColInReview"), list: [] },
      "Done": { container: document.getElementById("cardsDone"), count: document.getElementById("countColDone"), list: [] }
    };

    tasks.forEach(t => {
      if (cols[t.status]) {
        cols[t.status].list.push(t);
      }
    });

    Object.keys(cols).forEach(statusKey => {
      const col = cols[statusKey];
      if (col.count) col.count.textContent = col.list.length;
      if (!col.container) return;

      if (col.list.length === 0) {
        col.container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 12px; border: 1px dashed var(--border); border-radius: var(--radius-sm);">No tasks in this lane</div>`;
        return;
      }

      col.container.innerHTML = col.list.map(t => {
        let priBadge = "badge-neutral";
        if (t.priority === "Urgent") priBadge = "badge-error";
        if (t.priority === "High") priBadge = "badge-warning";
        if (t.priority === "Medium") priBadge = "badge-primary";

        return `
          <div class="task-card" id="task-${t.id}">
            <div class="task-card-header">
              <span class="task-id-tag">${t.id}</span>
              <span class="badge ${priBadge}">${t.priority}</span>
            </div>
            <div class="task-card-title">${t.title}</div>
            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 8px;">${t.project}</div>

            <div class="task-card-footer">
              <div style="display: flex; align-items: center; gap: 6px;">
                <span class="member-avatar">${t.assignee.split(" ").map(n => n[0]).join("")}</span>
                <span style="font-size: 11px; color: var(--text-secondary);">${t.assignee}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 11px; font-weight: 600; color: var(--text-primary);">${t.points} pts</span>
                <div class="task-card-controls">
                  <button class="btn-task-action" title="Move Status" onclick="TasksController.advanceStatus('${t.id}')">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                  <button class="btn-task-action" title="Edit Task" onclick="TaskModal.openEdit('${t.id}')">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </button>
                  <button class="btn-task-action delete" title="Delete Task" onclick="TasksController.deleteTask('${t.id}')">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("");
    });
  },

  renderList(tasks) {
    const tbody = document.getElementById("tasksListTbody");
    if (!tbody) return;

    if (tasks.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">No matching tasks found.</td></tr>`;
      return;
    }

    tbody.innerHTML = tasks.map(t => {
      let priBadge = "badge-neutral";
      if (t.priority === "Urgent") priBadge = "badge-error";
      if (t.priority === "High") priBadge = "badge-warning";
      if (t.priority === "Medium") priBadge = "badge-primary";

      let statBadge = "badge-neutral";
      if (t.status === "Done") statBadge = "badge-success";
      if (t.status === "In Progress") statBadge = "badge-primary";
      if (t.status === "In Review") statBadge = "badge-secondary";

      return `
        <tr>
          <td><span class="task-id-tag">${t.id}</span></td>
          <td>
            <div style="font-weight: 500; color: var(--text-primary);">${t.title}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${t.project}</div>
          </td>
          <td><span class="badge ${priBadge}">${t.priority}</span></td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="member-avatar">${t.assignee.split(" ").map(n => n[0]).join("")}</span>
              <span>${t.assignee}</span>
            </div>
          </td>
          <td><span class="badge ${statBadge}">${t.status}</span></td>
          <td><span style="font-weight: 600;">${t.points} pts</span></td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary btn-sm" onclick="TasksController.advanceStatus('${t.id}')">Advance</button>
              <button class="btn btn-ghost btn-sm" onclick="TaskModal.openEdit('${t.id}')">Edit</button>
              <button class="btn btn-ghost btn-sm" style="color: var(--error);" onclick="TasksController.deleteTask('${t.id}')">Del</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  },

  advanceStatus(id) {
    const task = AppState.tasks.find(t => t.id === id);
    if (!task) return;

    const flow = ["To Do", "In Progress", "In Review", "Done"];
    const idx = flow.indexOf(task.status);
    const nextStatus = flow[(idx + 1) % flow.length];

    task.status = nextStatus;
    StorageManager.saveState(AppState);

    Toast.info(`Moved ${task.id} to "${nextStatus}"`);
    this.render();
    OverviewController.render();
    if (typeof AIInsightsController !== "undefined" && typeof AIInsightsController.generateReport === "function") {
      AIInsightsController.populateSprintSelector();
      AIInsightsController.generateReport();
    }
  },

  deleteTask(id) {
    const idx = AppState.tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      const removed = AppState.tasks.splice(idx, 1)[0];
      StorageManager.saveState(AppState);
      Toast.warning(`Deleted task ${removed.id}`);
      this.render();
      OverviewController.render();
      if (typeof AIInsightsController !== "undefined" && typeof AIInsightsController.generateReport === "function") {
        AIInsightsController.populateSprintSelector();
        AIInsightsController.generateReport();
      }
    }
  },

  handleSearch(val) {
    this.searchQuery = val;
    this.render();
  },

  handleFilterChange() {
    this.filterPriority = document.getElementById("taskPriorityFilter").value;
    this.filterAssignee = document.getElementById("taskAssigneeFilter").value;
    this.filterStatus = document.getElementById("taskStatusFilter").value;
    this.render();
  },

  filterBySprint(sprintName) {
    Router.navigate("tasks");
    this.searchQuery = sprintName;
    const input = document.getElementById("taskSearchInput");
    if (input) input.value = sprintName;
    this.render();
  }
};

// ============================================================================
// 10. AI Insights Controller & Recommendation Engine
// ============================================================================
const AIInsightsController = {
  buildRecommendations() {
    const teamMembers = ["Kishore", "Mohan", "Anju", "Anika", "Anish"];
    const sprintTasks = Array.isArray(AppState.tasks) ? AppState.tasks : [];
    const recommendations = [];

    const activeSprint = Array.isArray(AppState.sprints) && AppState.sprints.length
      ? AppState.sprints[0]
      : null;

    const pipelineTasks = sprintTasks.filter(task => {
      const text = `${task.title || ""} ${task.desc || ""}`.toLowerCase();
      return /github|jenkins|pipeline|ci|cd|build|deploy|documentation|repository/i.test(text);
    });

    if (pipelineTasks.length) {
      const doneCount = pipelineTasks.filter(task => task.status === "Done").length;
      const pct = pipelineTasks.length > 0 ? Math.round((doneCount / pipelineTasks.length) * 100) : 0;
      recommendations.push({
        id: "ci-cd-readiness",
        type: "Delivery",
        title: "CI/CD pipeline readiness",
        body: `Current SprintIQ work includes ${pipelineTasks.length} pipeline-related tasks. ${doneCount} are already complete, leaving ${pipelineTasks.length - doneCount} remaining actions to finish the delivery path.`,
        metric: `${pct}% ready`,
        badgeClass: "badge-primary",
        actionText: "Review pipeline tasks",
        applied: false
      });
    }

    const workloadSummary = teamMembers.map(member => {
      const memberTasks = sprintTasks.filter(task => (task.assignee || "").trim() === member);
      return {
        member,
        total: memberTasks.length,
        completed: memberTasks.filter(task => task.status === "Done").length,
        pending: memberTasks.filter(task => task.status !== "Done").length
      };
    });

    const highestLoad = workloadSummary.sort((a, b) => b.total - a.total)[0];
    if (highestLoad && highestLoad.total > 0) {
      recommendations.push({
        id: "workload-balance",
        type: "Workload",
        title: `${highestLoad.member} has the largest active assignment set`,
        body: `${highestLoad.member} is assigned ${highestLoad.total} task(s) with ${highestLoad.pending} still pending. The team can rebalance work around the remaining sprint scope if needed.`,
        metric: `${highestLoad.total} assigned`,
        badgeClass: "badge-warning",
        actionText: "Review team load",
        applied: false
      });
    }

    if (activeSprint) {
      const activeSprintTasks = sprintTasks.filter(task => (task.sprint || "").trim() === activeSprint.name || (task.sprint || "").trim() === activeSprint.id);
      const completeCount = activeSprintTasks.filter(task => task.status === "Done").length;
      const totalCount = activeSprintTasks.length;
      const completionPct = totalCount > 0 ? Math.round((completeCount / totalCount) * 100) : 0;
      recommendations.push({
        id: "sprint-progress",
        type: "Sprint",
        title: `${activeSprint.name} progress snapshot`,
        body: `${completeCount} of ${totalCount} sprint tasks are complete, resulting in ${completionPct}% completion. This gives a clear signal for what still needs focus before the sprint ends.`,
        metric: `${completionPct}% complete`,
        badgeClass: "badge-secondary",
        actionText: "Open sprint summary",
        applied: false
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        id: "empty-state",
        type: "Status",
        title: "No active recommendations available",
        body: "The current SprintIQ task data does not contain enough information to generate a recommendation yet. Add tasks, assign owners, and update statuses to unlock further guidance.",
        metric: "Data pending",
        badgeClass: "badge-neutral",
        actionText: "No action",
        applied: false
      });
    }

    return recommendations.slice(0, 4);
  },

  render() {
    const container = document.getElementById("recommendationsContainer");
    if (!container) return;

    this.showPlaceholder();
    AppState.recommendations = this.buildRecommendations();

    container.innerHTML = AppState.recommendations.map(rec => {
      const isApplied = rec.applied;

      return `
        <div class="recommendation-card" id="card-${rec.id}">
          <div>
            <div class="rec-header">
              <span class="rec-type-badge ${rec.badgeClass}">${rec.type}</span>
              ${isApplied ? `<span class="badge badge-success">✓ Applied</span>` : `<span class="badge badge-neutral">Active</span>`}
            </div>
            <h3 class="rec-title">${rec.title}</h3>
            <p class="rec-body">${rec.body}</p>
            <div class="rec-metric-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <span>Impact: <strong>${rec.metric}</strong></span>
            </div>
          </div>

          <div class="rec-footer">
            <span style="font-size: 11px; color: var(--text-muted);">Data-driven summary</span>
            <button class="btn ${isApplied ? 'btn-secondary' : 'btn-primary'} btn-sm" ${isApplied ? 'disabled' : ''} onclick="AIInsightsController.applyRecommendation('${rec.id}')">
              ${isApplied ? 'Completed' : rec.actionText}
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  showPlaceholder() {
    const panel = document.getElementById("aiResponsePanel");
    const title = document.getElementById("aiResponseTitle");
    const body = document.getElementById("aiResponseBody");
    if (!panel || !title || !body) return;

    panel.classList.add("show");
    title.textContent = "Data Summary";
    body.innerHTML = `
      <p style="margin: 0; color: var(--text-secondary);">
        Ask a question about your sprint, tasks, team workload, or project progress.
      </p>
    `;
  },

  findMemberByQuery(query) {
    const normalized = query.toLowerCase();
    const members = ["Kishore", "Mohan", "Anju", "Anika", "Anish"];
    return members.find(member => normalized.includes(member.toLowerCase()));
  },

  findSprintByQuery(query) {
    if (!Array.isArray(AppState.sprints) || AppState.sprints.length === 0) return null;
    const normalized = query.toLowerCase();
    return AppState.sprints.find(sprint => {
      const sprintName = (sprint.name || "").toLowerCase();
      const sprintId = (sprint.id || "").toLowerCase();
      return normalized.includes(sprintName) || normalized.includes(sprintId) || (normalized.includes("sprint") && sprintName.includes(normalized.replace(/[^0-9]/g, "")));
    }) || AppState.sprints[0];
  },

  buildSprintReportMarkup(sprint) {
    if (!sprint) {
      return `
        <p><strong>No sprint data available.</strong></p>
        <p style="color: var(--text-secondary); margin-top: 8px;">There is no sprint information in the current workspace state.</p>
      `;
    }

    const sprintTasks = AppState.tasks.filter(task => {
      const taskSprint = (task.sprint || "").trim();
      if (!taskSprint) return false;
      return taskSprint === sprint.name || taskSprint === sprint.id;
    });

    const totalTasks = sprintTasks.length;
    const completedTasks = sprintTasks.filter(task => task.status === "Done");
    const inProgressTasks = sprintTasks.filter(task => task.status === "In Progress");
    const reviewTasks = sprintTasks.filter(task => task.status === "In Review");
    const pendingTasks = sprintTasks.filter(task => task.status !== "Done");
    const completionPct = totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0;
    const storyPointsBurned = completedTasks.reduce((sum, task) => sum + Number(task.points || 0), 0);
    const teamMembers = ["Kishore", "Mohan", "Anju", "Anika", "Anish"];

    const completedList = completedTasks.length
      ? completedTasks.map(task => `- ${task.title || "Untitled task"} (${task.assignee || "Unassigned"})`).join("<br>")
      : "- No completed tasks";

    const pendingList = pendingTasks.length
      ? pendingTasks.map(task => `- ${task.title || "Untitled task"} (${task.assignee || "Unassigned"}) [${task.status || "Unknown"}]`).join("<br>")
      : "- No pending tasks";

    const teamSummary = teamMembers.map(member => {
      const memberTasks = sprintTasks.filter(task => (task.assignee || "").trim() === member);
      const memberDone = memberTasks.filter(task => task.status === "Done").length;
      const memberPct = memberTasks.length > 0 ? Math.round((memberDone / memberTasks.length) * 100) : 0;
      return `- ${member}: ${memberTasks.length} task(s), ${memberDone} completed, ${memberPct}% completion`;
    }).join("<br>");

    const riskItems = sprintTasks
      .filter(task => task.status !== "Done")
      .filter(task => task.priority === "Urgent" || task.priority === "High")
      .slice(0, 5)
      .map(task => `- ${task.title || "Untitled task"} (${task.assignee || "Unassigned"}) — ${task.status || "Unknown"}`);

    const riskSummary = riskItems.length ? riskItems.join("<br>") : "- No high-priority unfinished tasks detected.";

    return `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div>
          <p style="margin:0 0 4px; color: var(--text-muted); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Data-driven sprint report</p>
          <h3 style="margin:0; font-size: 18px; color: var(--text-primary);">${sprint.name || "Unnamed Sprint"}</h3>
          <p style="margin: 6px 0 0; color: var(--text-secondary);">${sprint.goal || "No goal provided."}</p>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:10px;">
          <div class="rec-metric-pill"><span>Total tasks:</span><strong>${totalTasks}</strong></div>
          <div class="rec-metric-pill"><span>Completed:</span><strong>${completedTasks.length}</strong></div>
          <div class="rec-metric-pill"><span>In progress:</span><strong>${inProgressTasks.length}</strong></div>
          <div class="rec-metric-pill"><span>In review:</span><strong>${reviewTasks.length}</strong></div>
          <div class="rec-metric-pill"><span>Pending:</span><strong>${pendingTasks.length}</strong></div>
          <div class="rec-metric-pill"><span>Completion:</span><strong>${completionPct}%</strong></div>
          <div class="rec-metric-pill"><span>Points burned:</span><strong>${storyPointsBurned}</strong></div>
        </div>

        <div>
          <p style="margin: 0 0 6px; font-weight: 600; color: var(--text-primary);">Completed tasks</p>
          <div style="color: var(--text-secondary); line-height: 1.7;">${completedList}</div>
        </div>

        <div>
          <p style="margin: 0 0 6px; font-weight: 600; color: var(--text-primary);">Pending tasks</p>
          <div style="color: var(--text-secondary); line-height: 1.7;">${pendingList}</div>
        </div>

        <div>
          <p style="margin: 0 0 6px; font-weight: 600; color: var(--text-primary);">Team contribution</p>
          <div style="color: var(--text-secondary); line-height: 1.7;">${teamSummary}</div>
        </div>

        <div>
          <p style="margin: 0 0 6px; font-weight: 600; color: var(--text-primary);">Attention items</p>
          <div style="color: var(--text-secondary); line-height: 1.7;">${riskSummary}</div>
        </div>
      </div>
    `;
  },

  buildMemberTasksMarkup(member) {
    const tasks = AppState.tasks.filter(task => (task.assignee || "").trim() === member);
    if (!tasks.length) {
      return `
        <p><strong>${member}</strong> has no assigned tasks.</p>
        <p style="color: var(--text-secondary); margin-top: 8px;">Current workload: 0 tasks, 0% completion.</p>
      `;
    }

    const completed = tasks.filter(task => task.status === "Done").length;
    const total = tasks.length;
    const completion = total > 0 ? Math.round((completed / total) * 100) : 0;

    return `
      <p><strong>${member}</strong> workload summary</p>
      <ul style="margin: 8px 0 0 18px; line-height: 1.8; color: var(--text-secondary);">
        ${tasks.map(task => `<li><strong>${task.title || "Untitled task"}</strong> — ${task.status || "Unknown status"} (${task.priority || "Unspecified priority"})</li>`).join("")}
      </ul>
      <p style="margin-top: 10px; color: var(--text-secondary);">Total assigned: ${total} • Completed: ${completed} • Completion: ${completion}%</p>
    `;
  },

  buildPendingTasksMarkup() {
    const pending = AppState.tasks.filter(task => task.status !== "Done");
    if (!pending.length) {
      return "<p>There are no pending tasks in the current workspace.</p>";
    }

    return `
      <p><strong>Pending tasks</strong></p>
      <ul style="margin: 8px 0 0 18px; line-height: 1.8; color: var(--text-secondary);">
        ${pending.map(task => `<li><strong>${task.title || "Untitled task"}</strong> — ${task.assignee || "Unassigned"} (${task.status || "Unknown status"})</li>`).join("")}
      </ul>
    `;
  },

  buildWorkloadMarkup() {
    const teamMembers = ["Kishore", "Mohan", "Anju", "Anika", "Anish"];
    const rows = teamMembers.map(member => {
      const tasks = AppState.tasks.filter(task => (task.assignee || "").trim() === member);
      const completed = tasks.filter(task => task.status === "Done").length;
      const total = tasks.length;
      const completion = total > 0 ? Math.round((completed / total) * 100) : 0;
      const overloaded = total >= 2 || completion === 0;
      return `- ${member}: ${total} task(s), ${completed} completed, ${completion}% completion${overloaded ? " — needs attention" : ""}`;
    }).join("<br>");

    return `
      <p><strong>Team workload summary</strong></p>
      <div style="color: var(--text-secondary); line-height: 1.8; margin-top: 8px;">${rows}</div>
    `;
  },

  buildRiskMarkup() {
    const unfinished = AppState.tasks.filter(task => task.status !== "Done");
    if (!unfinished.length) {
      return "<p>There are no active sprint risks right now. All tasks are completed.</p>";
    }

    const risks = unfinished
      .filter(task => task.priority === "Urgent" || task.priority === "High" || task.status === "In Review")
      .map(task => `- ${task.title || "Untitled task"} (${task.assignee || "Unassigned"}) — ${task.status || "Unknown status"} / ${task.priority || "Unspecified priority"}`);

    return `
      <p><strong>Current risk items</strong></p>
      <ul style="margin: 8px 0 0 18px; line-height: 1.8; color: var(--text-secondary);">
        ${risks.length ? risks.map(item => `<li>${item}</li>`).join("") : "<li>No major unresolved risk items found in the current task list.</li>"}
      </ul>
    `;
  },

  buildCiCdProgressMarkup() {
    const sprint = this.findSprintByQuery("Sprint 1");
    const currentSprintTasks = sprint
      ? AppState.tasks.filter(task => (task.sprint || "").trim() === sprint.name || (task.sprint || "").trim() === sprint.id)
      : AppState.tasks;

    const relevantTasks = currentSprintTasks.filter(task => {
      const haystack = `${task.title || ""} ${task.desc || ""}`.toLowerCase();
      return /github|jenkins|pipeline|ci|cd|deploy|validation|build|documentation/i.test(haystack);
    });

    if (!relevantTasks.length) {
      return "<p>No CI/CD-related tasks were found in the current sprint data.</p>";
    }

    const doneCount = relevantTasks.filter(task => task.status === "Done").length;
    const total = relevantTasks.length;
    const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    return `
      <p><strong>CI/CD progress summary</strong></p>
      <p style="color: var(--text-secondary); margin-top: 8px;">${doneCount} of ${total} CI/CD-related tasks are complete (${pct}% complete).</p>
      <ul style="margin: 8px 0 0 18px; line-height: 1.8; color: var(--text-secondary);">
        ${relevantTasks.map(task => `<li><strong>${task.title || "Untitled task"}</strong> — ${task.status || "Unknown status"} (${task.assignee || "Unassigned"})</li>`).join("")}
      </ul>
    `;
  },

  applyRecommendation(id) {
    const rec = AppState.recommendations.find(r => r.id === id);
    if (!rec || rec.applied) return;

    rec.applied = true;

    if (id === "ci-cd-readiness") {
      const pipelineTask = AppState.tasks.find(task => /github|jenkins|pipeline|deploy|build|repository/i.test(`${task.title || ""} ${task.desc || ""}`));
      if (pipelineTask) {
        pipelineTask.status = "In Review";
      }
    } else if (id === "workload-balance") {
      const highestLoad = AppState.tasks
        .filter(task => task.status !== "Done")
        .sort((a, b) => Number(b.points || 0) - Number(a.points || 0))[0];
      if (highestLoad) {
        highestLoad.status = "In Progress";
      }
    } else if (id === "sprint-progress") {
      const latestTask = AppState.tasks.find(task => task.status === "To Do");
      if (latestTask) {
        latestTask.status = "In Progress";
      }
    } else if (id === "empty-state") {
      Toast.info("No recommendation action is available for the current task set.");
      this.render();
      return;
    }

    StorageManager.saveState(AppState);
    Toast.success(`Applied recommendation: "${rec.title}"`);

    this.render();
    OverviewController.render();
  },

  askAI() {
    const input = document.getElementById("aiQueryInput");
    const query = input ? input.value.trim() : "";
    if (!query) {
      Toast.warning("Please enter a question to query the sprint data.");
      return;
    }
    this.runAIQuery(query);
  },

  runPromptChip(promptText) {
    const input = document.getElementById("aiQueryInput");
    if (input) input.value = promptText;
    this.runAIQuery(promptText);
  },

  runAIQuery(query) {
    const panel = document.getElementById("aiResponsePanel");
    const title = document.getElementById("aiResponseTitle");
    const body = document.getElementById("aiResponseBody");
    if (!panel || !title || !body) return;

    const q = (query || "").trim();
    if (!q) {
      this.showPlaceholder();
      return;
    }

    panel.classList.add("show");
    title.textContent = "Data Summary";

    const lowerQuery = q.toLowerCase();
    let output = "";

    if (lowerQuery.includes("report") && (lowerQuery.includes("sprint") || lowerQuery.includes("report for"))) {
      const sprint = this.findSprintByQuery(q) || AppState.sprints[0];
      output = this.buildSprintReportMarkup(sprint);
    } else if (this.findMemberByQuery(q) && (lowerQuery.includes("completed") || lowerQuery.includes("tasks") || lowerQuery.includes("show") || lowerQuery.includes("what has") || lowerQuery.includes("task"))) {
      const member = this.findMemberByQuery(q);
      output = this.buildMemberTasksMarkup(member);
    } else if (lowerQuery.includes("pending") || lowerQuery.includes("not started") || lowerQuery.includes("which tasks are pending")) {
      output = this.buildPendingTasksMarkup();
    } else if (lowerQuery.includes("overloaded") || lowerQuery.includes("workload") || lowerQuery.includes("capacity")) {
      output = this.buildWorkloadMarkup();
    } else if (lowerQuery.includes("risk") || lowerQuery.includes("risk")) {
      output = this.buildRiskMarkup();
    } else if (lowerQuery.includes("ci/cd") || lowerQuery.includes("ci cd") || lowerQuery.includes("ci-cd") || lowerQuery.includes("summarize our ci") || lowerQuery.includes("cd progress")) {
      output = this.buildCiCdProgressMarkup();
    } else {
      output = `
        <p><strong>Query not recognized.</strong> Try a supported question such as:</p>
        <ul style="margin: 8px 0 0 18px; line-height: 1.8; color: var(--text-secondary);">
          <li>Generate a report for Sprint 1</li>
          <li>What has Kishore completed?</li>
          <li>Which tasks are pending?</li>
          <li>Who is overloaded?</li>
          <li>What are the sprint risks?</li>
          <li>Summarize our CI/CD progress</li>
          <li>Show Anju's tasks</li>
        </ul>
      `;
    }

    body.innerHTML = output;
    Toast.info("Data summary updated.");
  },

  closeResponse() {
    const panel = document.getElementById("aiResponsePanel");
    if (panel) panel.classList.remove("show");
  }
};

// ============================================================================
// 11. Modals (Task, Project, Sprint, Search)
// ============================================================================
const TaskModal = {
  overlay: null,

  init() {
    this.overlay = document.getElementById("taskModalOverlay");
  },

  openCreate(defaultStatus = "To Do") {
    if (!this.overlay) this.init();
    document.getElementById("taskModalHeading").textContent = "Create New Task";
    document.getElementById("taskFormId").value = "";
    document.getElementById("taskFormTitle").value = "";
    document.getElementById("taskFormDesc").value = "";
    document.getElementById("taskFormStatus").value = defaultStatus;
    document.getElementById("taskFormPriority").value = "High";
    document.getElementById("taskFormPoints").value = "3";
    this.overlay.classList.add("open");
    document.getElementById("taskFormTitle").focus();
  },

  openEdit(id) {
    if (!this.overlay) this.init();
    const task = AppState.tasks.find(t => t.id === id);
    if (!task) return;

    document.getElementById("taskModalHeading").textContent = `Edit Task ${task.id}`;
    document.getElementById("taskFormId").value = task.id;
    document.getElementById("taskFormTitle").value = task.title;
    document.getElementById("taskFormDesc").value = task.desc || "";
    document.getElementById("taskFormProject").value = task.project;
    document.getElementById("taskFormSprint").value = task.sprint;
    document.getElementById("taskFormStatus").value = task.status;
    document.getElementById("taskFormPriority").value = task.priority;
    document.getElementById("taskFormAssignee").value = task.assignee;
    document.getElementById("taskFormPoints").value = task.points;

    this.overlay.classList.add("open");
  },

  close() {
    if (!this.overlay) this.init();
    this.overlay.classList.remove("open");
  },

  handleSubmit() {
    const id = document.getElementById("taskFormId").value;
    const title = document.getElementById("taskFormTitle").value.trim();
    const desc = document.getElementById("taskFormDesc").value.trim();
    const project = document.getElementById("taskFormProject").value;
    const sprint = document.getElementById("taskFormSprint").value;
    const status = document.getElementById("taskFormStatus").value;
    const priority = document.getElementById("taskFormPriority").value;
    const assignee = document.getElementById("taskFormAssignee").value;
    const points = Number(document.getElementById("taskFormPoints").value);

    if (!title) return;

    if (id) {
      // Edit existing task
      const task = AppState.tasks.find(t => t.id === id);
      if (task) {
        task.title = title;
        task.desc = desc;
        task.project = project;
        task.sprint = sprint;
        task.status = status;
        task.priority = priority;
        task.assignee = assignee;
        task.points = points;
        task.updatedAt = "Just now";
        Toast.success(`Updated task ${id}`);
      }
    } else {
      // Create new task
      const newId = `TSK-${100 + AppState.tasks.length + 1}`;
      AppState.tasks.unshift({
        id: newId,
        title,
        desc,
        project,
        sprint,
        status,
        priority,
        assignee,
        points,
        updatedAt: "Just now"
      });
      Toast.success(`Created task ${newId}`);
    }

    StorageManager.saveState(AppState);
    this.close();
    TasksController.render();
    OverviewController.render();
    if (typeof AIInsightsController !== "undefined" && typeof AIInsightsController.generateReport === "function") {
      AIInsightsController.populateSprintSelector();
      AIInsightsController.generateReport();
    }
  }
};

const ProjectModal = {
  overlay: null,

  init() {
    this.overlay = document.getElementById("projectModalOverlay");
  },

  open() {
    if (!this.overlay) this.init();
    this.overlay.classList.add("open");
    document.getElementById("projFormTitle").focus();
  },

  close() {
    if (!this.overlay) this.init();
    this.overlay.classList.remove("open");
  },

  handleSubmit() {
    const title = document.getElementById("projFormTitle").value.trim();
    const desc = document.getElementById("projFormDesc").value.trim();
    const status = document.getElementById("projFormStatus").value;
    const tag = document.getElementById("projFormTag").value.trim() || "General";

    if (!title) return;

    const newId = `PRJ-${AppState.projects.length + 1}`;
    AppState.projects.unshift({
      id: newId,
      title,
      desc: desc || "Initiative architecture planning and requirements definition.",
      category: tag,
      status,
      progress: 0,
      pointsDone: 0,
      pointsTotal: 30,
      activeSprint: "Sprint 42",
      members: ["AR", "SC"],
      repo: "acme-corp/" + title.toLowerCase().replace(/[^a-z0-9]/g, "-")
    });

    StorageManager.saveState(AppState);
    Toast.success(`Project "${title}" created`);
    this.close();
    ProjectsController.render();
    OverviewController.render();
  }
};

const SprintModal = {
  overlay: null,

  init() {
    this.overlay = document.getElementById("sprintModalOverlay");
  },

  open() {
    if (!this.overlay) this.init();
    this.overlay.classList.add("open");
    document.getElementById("sprintFormName").focus();
  },

  close() {
    if (!this.overlay) this.init();
    this.overlay.classList.remove("open");
  },

  handleSubmit() {
    const name = document.getElementById("sprintFormName").value.trim();
    const goal = document.getElementById("sprintFormGoal").value.trim();
    const start = document.getElementById("sprintFormStart").value;
    const end = document.getElementById("sprintFormEnd").value;

    if (!name) return;

    const newId = `SPR-${40 + AppState.sprints.length + 1}`;
    AppState.sprints.push({
      id: newId,
      name,
      goal: goal || "Deliver milestone objectives.",
      startDate: start,
      endDate: end,
      status: "Upcoming",
      totalPoints: 40,
      burnedPoints: 0,
      velocityTrend: "Projected 40 pts",
      riskLevel: "Planned"
    });

    StorageManager.saveState(AppState);
    Toast.success(`Scheduled "${name}"`);
    this.close();
    SprintsController.render();
    OverviewController.render();
  }
};

// Global Quick Search (Ctrl+K)
const SearchModal = {
  overlay: null,

  init() {
    this.overlay = document.getElementById("searchModalOverlay");
  },

  open() {
    if (!this.overlay) this.init();
    this.overlay.classList.add("open");
    const input = document.getElementById("globalSearchInput");
    if (input) {
      input.value = "";
      input.focus();
    }
    this.handleSearch("");
  },

  close() {
    if (!this.overlay) this.init();
    this.overlay.classList.remove("open");
  },

  handleSearch(query) {
    const results = document.getElementById("globalSearchResults");
    if (!results) return;

    const q = query.toLowerCase().trim();
    const matchedTasks = AppState.tasks.filter(t => !q || t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
    const matchedProjects = AppState.projects.filter(p => !q || p.title.toLowerCase().includes(q));

    let html = "";

    if (matchedTasks.length === 0 && matchedProjects.length === 0) {
      results.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 13px;">No results found for "${query}"</div>`;
      return;
    }

    if (matchedTasks.length > 0) {
      html += `<div style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase;">Tasks (${matchedTasks.length})</div>`;
      html += matchedTasks.slice(0, 5).map(t => `
        <div style="padding: 8px 10px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: background 0.15s;" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='transparent'" onclick="SearchModal.selectTask('${t.id}')">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="task-id-tag">${t.id}</span>
            <span style="font-size: 13px; color: var(--text-primary);">${t.title}</span>
          </div>
          <span class="badge badge-neutral">${t.status}</span>
        </div>
      `).join("");
    }

    if (matchedProjects.length > 0) {
      html += `<div style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-top: 14px; margin-bottom: 8px; text-transform: uppercase;">Projects (${matchedProjects.length})</div>`;
      html += matchedProjects.slice(0, 3).map(p => `
        <div style="padding: 8px 10px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: background 0.15s;" onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='transparent'" onclick="SearchModal.selectProject('${p.id}')">
          <span style="font-size: 13px; color: var(--text-primary); font-weight: 500;">${p.title}</span>
          <span class="badge badge-success">${p.status}</span>
        </div>
      `).join("");
    }

    results.innerHTML = html;
  },

  selectTask(id) {
    this.close();
    Router.navigate("tasks");
    TasksController.searchQuery = id;
    const input = document.getElementById("taskSearchInput");
    if (input) input.value = id;
    TasksController.render();
  },

  selectProject(id) {
    this.close();
    Router.navigate("projects");
  }
};

// ============================================================================
// 12. Notifications Popover
// ============================================================================
const Notifications = {
  toggleDropdown() {
    const dd = document.getElementById("notifDropdown");
    if (!dd) return;
    const isShowing = dd.classList.contains("show");
    if (isShowing) {
      dd.classList.remove("show");
    } else {
      dd.classList.add("show");
      this.render();
    }
  },

  render() {
    const list = document.getElementById("notifListContainer");
    if (!list) return;

    list.innerHTML = AppState.notifications.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}">
        <div class="notif-icon ${n.type}">
          ${n.type === 'ai' ? '✦' : n.type === 'alert' ? '⚠' : '✓'}
        </div>
        <div class="notif-content">
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>
    `).join("");

    const unreadCount = AppState.notifications.filter(n => n.unread).length;
    const dot = document.getElementById("unreadNotifDot");
    if (dot) dot.style.display = unreadCount > 0 ? "block" : "none";
  },

  markAllRead() {
    AppState.notifications.forEach(n => n.unread = false);
    StorageManager.saveState(AppState);
    this.render();
    Toast.info("Marked all alerts as read.");
  }
};

// ============================================================================
// 13. Settings Controller
// ============================================================================
const SettingsController = {
  setTab(tabId, el) {
    document.querySelectorAll(".settings-nav-item").forEach(item => item.classList.remove("active"));
    if (el) el.classList.add("active");

    document.querySelectorAll(".settings-tab-pane").forEach(pane => pane.style.display = "none");
    const target = document.getElementById(`tab-${tabId}`);
    if (target) target.style.display = "block";
  },

  toggleGlow(enabled) {
    AppState.themeGlow = enabled;
    StorageManager.saveState(AppState);
    document.querySelectorAll(".ambient-glow-top, .ambient-glow-subtle").forEach(el => {
      el.style.display = enabled ? "block" : "none";
    });
    Toast.info(`Ambient glow ${enabled ? "activated" : "disabled"}`);
  },

  exportData() {
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", jsonStr);
    dlAnchor.setAttribute("download", `sprintiq_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchor.click();
    Toast.success("Downloaded SprintIQ backup JSON.");
  },

  resetData() {
    if (confirm("Reset workspace to initial demo state? All customized tasks will be restored.")) {
      AppState = StorageManager.resetState();
      Toast.info("Workspace restored to seed configuration.");
      setTimeout(() => location.reload(), 500);
    }
  }
};

// ============================================================================
// 14. Global Keyboard Shortcuts & Mobile Drawer
// ============================================================================
const App = {
  init() {
    Toast.init();
    AuthController.init();
    Router.init();
    OverviewController.render();
    Notifications.render();

    // Keyboard Shortcuts: Ctrl+K for search, Escape for modal close
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        SearchModal.open();
      }
      if (e.key === "Escape") {
        SearchModal.close();
        TaskModal.close();
        ProjectModal.close();
        SprintModal.close();
        const dd = document.getElementById("notifDropdown");
        if (dd) dd.classList.remove("show");
      }
    });

    // Close notifications dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const bell = document.getElementById("notifBellBtn");
      const dd = document.getElementById("notifDropdown");
      if (bell && dd && !bell.contains(e.target) && !dd.contains(e.target)) {
        dd.classList.remove("show");
      }
    });
  },

  toggleMobileSidebar() {
    const sidebar = document.getElementById("appSidebar");
    if (sidebar) {
      sidebar.classList.toggle("mobile-open");
    }
  }
};

// Initialize Application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

/* ============================================================
   SprintIQ — Task & Sprint Workflow Enhancements
   Add this code at the END of your existing script.js
   ============================================================ */

const SprintIQWorkflow = {
  sprintKey(value) {
    if (!value || value === "Backlog") return "Backlog";
    return String(value).split(":")[0].trim();
  },

  sprintOptionValue(sprint) {
    return this.sprintKey(sprint.name);
  },

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  },

  ensureDueDateField() {
    const points = document.getElementById("taskFormPoints");

    if (!points || document.getElementById("taskFormDueDate")) return;

    const fieldWrap =
      points.closest(".form-group") || points.parentElement;

    if (!fieldWrap || !fieldWrap.parentElement) return;

    const wrapper = document.createElement("div");
    wrapper.className = fieldWrap.className || "form-group";

    wrapper.innerHTML = `
      <label for="taskFormDueDate">Due Date</label>
      <input
        id="taskFormDueDate"
        name="dueDate"
        type="date"
        style="width:100%;box-sizing:border-box;"
      />
    `;

    fieldWrap.parentElement.insertBefore(
      wrapper,
      fieldWrap.nextSibling
    );
  },

  refreshTaskSelects() {
    const projectSelect =
      document.getElementById("taskFormProject");

    if (projectSelect) {
      const selected = projectSelect.value;

      projectSelect.innerHTML = AppState.projects
        .map(project => `
          <option value="${this.escape(project.title)}">
            ${this.escape(project.title)}
          </option>
        `)
        .join("");

      if (AppState.projects.some(p => p.title === selected)) {
        projectSelect.value = selected;
      }
    }

    const sprintSelect =
      document.getElementById("taskFormSprint");

    if (sprintSelect) {
      const selected = sprintSelect.value || "Backlog";

      const options = [
        `<option value="Backlog">Backlog (No sprint)</option>`,
        ...AppState.sprints.map(sprint => {
          const value = this.sprintOptionValue(sprint);

          return `
            <option value="${this.escape(value)}">
              ${this.escape(sprint.name)}
            </option>
          `;
        })
      ];

      sprintSelect.innerHTML = options.join("");

      sprintSelect.value = [
        ...sprintSelect.options
      ].some(option => option.value === selected)
        ? selected
        : "Backlog";
    }

    const assigneeSelect = document.getElementById("taskFormAssignee");
    if (assigneeSelect) {
      const selected = assigneeSelect.value;
      const names = [...new Set([
        ...(AppState.teamProfiles || []).map(profile => profile.name),
        ...AppState.tasks.flatMap(task => [task.assignee, ...(task.collaborators || [])])
      ].filter(Boolean))];
      assigneeSelect.innerHTML = names.map(name => `<option value="${this.escape(name)}">${this.escape(name)}</option>`).join("");
      if (names.includes(selected)) assigneeSelect.value = selected;
    }
  },

  refreshSprintProgress() {
    AppState.sprints.forEach(sprint => {
      const key = this.sprintOptionValue(sprint);

      const sprintTasks = AppState.tasks.filter(
        task => this.sprintKey(task.sprint) === key
      );

      sprint.totalPoints = sprintTasks.reduce(
        (sum, task) => sum + (Number(task.points) || 0),
        0
      );

      sprint.burnedPoints = sprintTasks
        .filter(task => task.status === "Done")
        .reduce(
          (sum, task) => sum + (Number(task.points) || 0),
          0
        );
    });
    AppState.projects.filter(project => project.plannerGenerated).forEach(project => {
      const projectTasks = AppState.tasks.filter(task => task.project === project.title);
      project.pointsTotal = projectTasks.reduce((sum, task) => sum + (Number(task.points) || 0), 0);
      project.pointsDone = projectTasks.filter(task => task.status === "Done").reduce((sum, task) => sum + (Number(task.points) || 0), 0);
      project.progress = project.pointsTotal ? Math.round(project.pointsDone / project.pointsTotal * 100) : 0;
    });
  }
};


// ------------------------------------------------------------
// TASK CREATION
// ------------------------------------------------------------

const originalTaskModalOpenCreate =
  TaskModal.openCreate.bind(TaskModal);

TaskModal.openCreate = function(defaultStatus = "To Do") {
  originalTaskModalOpenCreate(defaultStatus);

  SprintIQWorkflow.ensureDueDateField();
  SprintIQWorkflow.refreshTaskSelects();

  const dueDate =
    document.getElementById("taskFormDueDate");

  if (dueDate) dueDate.value = "";
};


// ------------------------------------------------------------
// TASK EDITING
// ------------------------------------------------------------

const originalTaskModalOpenEdit =
  TaskModal.openEdit.bind(TaskModal);

TaskModal.openEdit = function(id) {
  originalTaskModalOpenEdit(id);

  SprintIQWorkflow.ensureDueDateField();
  SprintIQWorkflow.refreshTaskSelects();

  const task = AppState.tasks.find(task => task.id === id);
  const dueDate =
    document.getElementById("taskFormDueDate");

  if (task && dueDate) {
    dueDate.value = task.dueDate || "";
  }
};


// ------------------------------------------------------------
// SAVE TASK AND DUE DATE
// ------------------------------------------------------------

const originalTaskModalHandleSubmit =
  TaskModal.handleSubmit.bind(TaskModal);

TaskModal.handleSubmit = function() {
  const idBeforeSubmit =
    document.getElementById("taskFormId")?.value;

  const dueDate =
    document.getElementById("taskFormDueDate")?.value || "";

  const title =
    document.getElementById("taskFormTitle")?.value.trim();

  if (!title) {
    Toast.warning("Please enter a task title.");
    return;
  }

  originalTaskModalHandleSubmit();

  const task = idBeforeSubmit
    ? AppState.tasks.find(task => task.id === idBeforeSubmit)
    : AppState.tasks[0];

  if (task && task.title === title) {
    task.dueDate = dueDate;

    StorageManager.saveState(AppState);

    this.renderTaskViews();
  }
};


TaskModal.renderTaskViews = function() {
  TasksController.render();
  OverviewController.render();

  SprintIQWorkflow.refreshSprintProgress();
  SprintsController.render();
};


// ------------------------------------------------------------
// SPRINT PROGRESS
// ------------------------------------------------------------

const originalSprintsRender =
  SprintsController.render.bind(SprintsController);

SprintsController.render = function() {
  SprintIQWorkflow.refreshSprintProgress();
  originalSprintsRender();
};


// ------------------------------------------------------------
// SPRINT DATE VALIDATION
// ------------------------------------------------------------

const originalSprintModalHandleSubmit =
  SprintModal.handleSubmit.bind(SprintModal);

SprintModal.handleSubmit = function() {
  const start =
    document.getElementById("sprintFormStart")?.value || "";

  const end =
    document.getElementById("sprintFormEnd")?.value || "";

  if (start && end && end < start) {
    Toast.warning(
      "Sprint end date must be on or after its start date."
    );
    return;
  }

  originalSprintModalHandleSubmit();

  SprintIQWorkflow.refreshSprintProgress();
  SprintsController.render();
};


// ------------------------------------------------------------
// UPDATE PROGRESS WHEN TASK STATUS CHANGES
// ------------------------------------------------------------

const originalAdvanceStatus =
  TasksController.advanceStatus.bind(TasksController);

TasksController.advanceStatus = function(id) {
  originalAdvanceStatus(id);

  SprintIQWorkflow.refreshSprintProgress();
  SprintsController.render();
};


// ------------------------------------------------------------
// UPDATE PROGRESS WHEN A TASK IS DELETED
// ------------------------------------------------------------

const originalDeleteTask =
  TasksController.deleteTask.bind(TasksController);

TasksController.deleteTask = function(id) {
  originalDeleteTask(id);

  SprintIQWorkflow.refreshSprintProgress();
  SprintsController.render();
};


// ------------------------------------------------------------
// SHOW DUE DATE ON KANBAN CARDS
// ------------------------------------------------------------

const originalRenderKanban =
  TasksController.renderKanban.bind(TasksController);

TasksController.renderKanban = function(tasks) {
  originalRenderKanban(tasks);

  tasks.forEach(task => {
    if (!task.dueDate) return;

    const card =
      document.getElementById(`task-${task.id}`);

    if (!card || card.querySelector(".task-due-date")) {
      return;
    }

    const meta = document.createElement("div");

    meta.className = "task-due-date";

    meta.style.cssText =
      "font-size:11px;color:var(--text-muted);margin-top:7px;";

    meta.textContent = `Due: ${task.dueDate}`;

    const footer =
      card.querySelector(".task-card-footer");

    if (footer) {
      card.insertBefore(meta, footer);
    }
  });
};


// ------------------------------------------------------------
// SHOW DUE DATE IN TASK LIST
// ------------------------------------------------------------

const originalRenderList =
  TasksController.renderList.bind(TasksController);

TasksController.renderList = function(tasks) {
  originalRenderList(tasks);

  const tbody =
    document.getElementById("tasksListTbody");

  if (!tbody) return;

  tasks.forEach(task => {
    if (!task.dueDate) return;

    const rows = [...tbody.querySelectorAll("tr")];

    const row = rows.find(tr =>
      tr.textContent.includes(task.id)
    );

    if (row && !row.querySelector(".task-due-date")) {
      const cell = row.querySelector("td:nth-child(2)");

      if (cell) {
        const due = document.createElement("div");

        due.className = "task-due-date";

        due.style.cssText =
          "font-size:11px;color:var(--text-muted);margin-top:3px;";

        due.textContent = `Due: ${task.dueDate}`;

        cell.appendChild(due);
      }
    }
  });
};


// ------------------------------------------------------------
// INITIALIZE WORKFLOW ENHANCEMENTS
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  SprintIQWorkflow.ensureDueDateField();
  SprintIQWorkflow.refreshSprintProgress();
});

/* =========================================
   SPRINTIQ - TEAM PROJECT CONFIGURATION
   ========================================= */

(function setupSprintIQTeam() {
  if (typeof AppState === "undefined") {
    console.error("SprintIQ AppState was not found.");
    return;
  }

  try {
    if (localStorage.getItem(StorageManager.KEY)) return;
  } catch (error) {
    console.warn("Could not inspect saved workspace before seeding:", error);
  }

  const teamMembers = [
    "Kishore",
    "Mohan",
    "Anju",
    "Anika",
    "Anish"
  ];

  const projectName =
    "SprintIQ - AI-Based Agile Decision Support System";

  // Set up the actual project
  AppState.projects = [
    {
      id: "PRJ-1",
      title: projectName,
      name: projectName,
      desc: "AI-based decision support for agile teams with CI/CD pipeline implementation.",
      description: "Our team's agile project and CI/CD workflow.",
      status: "Active",
      progress: 0,
      members: teamMembers
    }
  ];

  // Set up our first sprint
  AppState.sprints = [
    {
      id: "SPR-1",
      name: "Sprint 1 - CI/CD Pipeline Implementation",
      goal: "Configure and test the GitHub and Jenkins CI/CD pipeline.",
      startDate: "2026-10-13",
      endDate: "2026-10-27",
      status: "Active",
      totalPoints: 25,
      burnedPoints: 0
    }
  ];

  // Create tasks for our team
  const tasks = [
    {
      id: "TSK-101",
      title: "GitHub Repository Setup",
      desc: "Organize the repository and source control workflow.",
      assignee: "Kishore",
      priority: "High",
      status: "To Do",
      points: 3
    },
    {
      id: "TSK-102",
      title: "Jenkins Pipeline Configuration",
      desc: "Connect Jenkins to GitHub and configure source checkout.",
      assignee: "Mohan",
      priority: "High",
      status: "To Do",
      points: 5
    },
    {
      id: "TSK-103",
      title: "Automated Validation and Build",
      desc: "Add file validation and build verification stages.",
      assignee: "Anju",
      priority: "High",
      status: "To Do",
      points: 5
    },
    {
      id: "TSK-104",
      title: "Deployment Configuration",
      desc: "Prepare the website for deployment to Vercel.",
      assignee: "Anika",
      priority: "Medium",
      status: "To Do",
      points: 5
    },
    {
      id: "TSK-105",
      title: "Pipeline Testing and Documentation",
      desc: "Test the pipeline and document the results.",
      assignee: "Anish",
      priority: "Medium",
      status: "To Do",
      points: 7
    }
  ];

  AppState.tasks = tasks.map(task => ({
    ...task,
    project: projectName,
    sprint: "Sprint 1 - CI/CD Pipeline Implementation",
    type: "Task"
  }));

  if (typeof StorageManager !== "undefined" &&
      typeof StorageManager.saveState === "function") {
    StorageManager.saveState(AppState);
  }

  console.log("SprintIQ team project data initialized.");
})();

// Local rules prototype. Keep this provider boundary isolated so a secured
// server-side AI provider can replace createPlan() without changing approval.
const PlannerController = {
  draft: null,
  defaultNames: ["Kishore", "Mohan", "Anju", "Anika", "Anish"],

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[character]));
  },

  ensureProfiles() {
    if (!Array.isArray(AppState.teamProfiles)) AppState.teamProfiles = [];
    this.defaultNames.forEach(name => {
      if (!AppState.teamProfiles.some(profile => profile.name === name)) {
        AppState.teamProfiles.push({ name, skills: "", experience: "", capacityHours: 30, currentWorkloadHours: 0 });
      }
    });
    AppState.teamProfiles.forEach(profile => {
      if (typeof profile.skills !== "string") profile.skills = "";
      if (!Number.isFinite(Number(profile.capacityHours))) profile.capacityHours = 30;
      if (!Number.isFinite(Number(profile.currentWorkloadHours))) profile.currentWorkloadHours = 0;
    });
    StorageManager.saveState(AppState);
  },

  render() {
    this.ensureProfiles();
    const dateInput = document.getElementById("plannerDueDate");
    if (dateInput) dateInput.min = this.today();
    this.renderProfiles();
    if (this.draft) this.renderReview();
  },

  renderProfiles() {
    const container = document.getElementById("plannerProfiles");
    if (!container) return;
    container.innerHTML = AppState.teamProfiles.map((profile, index) => `
      <div class="planner-profile-row">
        <div class="planner-profile-top"><strong>${this.escape(profile.name || "Team member")}</strong><button class="btn btn-ghost btn-sm" aria-label="Remove ${this.escape(profile.name)}" onclick="PlannerController.removeProfile(${index})">Remove</button></div>
        <label>Name<input class="form-input no-icon" value="${this.escape(profile.name)}" onchange="PlannerController.saveProfile(${index}, 'name', this.value)"></label>
        <label>Skills and technical expertise<input class="form-input no-icon" value="${this.escape(profile.skills)}" placeholder="Enter confirmed skills, comma-separated" onchange="PlannerController.saveProfile(${index}, 'skills', this.value)"></label>
        <div class="form-row">
          <label>Experience level<input class="form-input no-icon" value="${this.escape(profile.experience)}" placeholder="Enter experience level" onchange="PlannerController.saveProfile(${index}, 'experience', this.value)"></label>
          <label>Capacity (hours/week)<input class="form-input no-icon" type="number" min="1" max="80" value="${Number(profile.capacityHours) || 30}" onchange="PlannerController.saveProfile(${index}, 'capacityHours', this.value)"></label>
        </div>
        <label>Current workload (committed hours)<input class="form-input no-icon" type="number" min="0" max="500" value="${Number(profile.currentWorkloadHours) || 0}" onchange="PlannerController.saveProfile(${index}, 'currentWorkloadHours', this.value)"></label>
      </div>`).join("");
  },

  saveProfile(index, field, value) {
    const profile = AppState.teamProfiles[index];
    if (!profile) return;
    if (field === "capacityHours" || field === "currentWorkloadHours") {
      const parsed = Number(value);
      if (!Number.isFinite(parsed) || parsed < (field === "capacityHours" ? 1 : 0)) {
        Toast.warning("Enter a valid non-negative workload and a capacity above zero.");
        this.renderProfiles();
        return;
      }
      profile[field] = parsed;
    } else {
      profile[field] = String(value).trim();
    }
    StorageManager.saveState(AppState);
    OverviewController.renderWorkload();
    if (field === "skills") Toast.info("Profile skills saved. Regenerate the draft to recalculate matches.");
  },

  addProfile() {
    AppState.teamProfiles.push({ name: "", skills: "", experience: "", capacityHours: 30, currentWorkloadHours: 0 });
    StorageManager.saveState(AppState);
    OverviewController.renderWorkload();
    this.renderProfiles();
    const inputs = document.querySelectorAll("#plannerProfiles .planner-profile-row input");
    if (inputs.length) inputs[inputs.length - 5].focus();
  },

  removeProfile(index) {
    if (AppState.teamProfiles.length <= 1) return Toast.warning("Keep at least one team profile.");
    AppState.teamProfiles.splice(index, 1);
    StorageManager.saveState(AppState);
    OverviewController.renderWorkload();
    this.renderProfiles();
  },

  today() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  },

  parseDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day, 12);
  },

  formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  },

  addWorkdays(value, count) {
    const date = this.parseDate(value);
    let remaining = Math.max(0, count);
    while (remaining > 0) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) remaining--;
    }
    while (date.getDay() === 0 || date.getDay() === 6) date.setDate(date.getDate() + 1);
    return this.formatDate(date);
  },

  nextId(prefix, items) {
    const max = items.reduce((highest, item) => {
      const match = String(item.id || "").match(new RegExp(`^${prefix}-(\\d+)$`));
      return match ? Math.max(highest, Number(match[1])) : highest;
    }, 0);
    return `${prefix}-${max + 1}`;
  },

  generate() {
    const title = document.getElementById("plannerTitle").value.trim();
    const description = document.getElementById("plannerDescription").value.trim();
    const dueDate = document.getElementById("plannerDueDate").value;
    if (!title || !description || !dueDate) return Toast.warning("Enter a title, detailed description, and desired completion date.");
    if (dueDate < this.today()) return Toast.warning("Desired completion must be today or a future date.");
    if (AppState.projects.some(project => project.title.toLowerCase() === title.toLowerCase())) return Toast.warning("A project with this title already exists. Choose a distinct title.");
    this.ensureProfiles();
    if (AppState.teamProfiles.some(profile => !profile.name.trim())) return Toast.warning("Every team profile needs a name before planning.");
    const input = {
      title, description, constraints: document.getElementById("plannerConstraints").value.trim(),
      priority: document.getElementById("plannerPriority").value, dueDate
    };
    this.draft = { ...input, tasks: this.createPlan(input), createdAt: new Date().toISOString() };
    this.renderReview();
    document.getElementById("plannerReview").scrollIntoView({ behavior: "smooth", block: "start" });
  },

  // Templates intentionally produce deterministic, explainable work items.
  createPlan(input) {
    const text = `${input.title} ${input.description} ${input.constraints}`.toLowerCase();
    const specs = [{
      milestone: "Discovery & design", title: "Confirm scope and solution design",
      description: `Translate the brief into a delivery design for ${input.title}.`,
      acceptance: "Scope, key workflows, system boundaries, and delivery risks are reviewed and agreed.",
      skills: ["requirements analysis", "solution design"], points: 3, depends: []
    }];
    const features = [
      [/register|registration|sign.?up|authentication|auth|login|log.?in/, "Registration and secure authentication", "Users can register, sign in, and recover access with protected credentials.", ["authentication", "security", "backend"], 5],
      [/account balance|balances|account/, "Account balances and account overview", "Users can view accurate account balances and account details.", ["backend", "database"], 5],
      [/money transfer|transfer|payment/, "Money transfer workflow", "Authorized users can submit a validated transfer and see its outcome.", ["backend", "security"], 8],
      [/transaction history|transaction|history/, "Transaction history", "Users can review searchable, correctly ordered transaction records.", ["backend", "database"], 5],
      [/admin dashboard|admin|dashboard/, "Administrative dashboard", "Administrators can review operational data and perform authorized actions.", ["frontend", "backend"], 5],
      [/api|service|integration/, "Core API and service integration", "Required service endpoints validate input and return documented responses.", ["backend", "api"], 5],
      [/web|website|application|interface|user experience|ui/, "Primary user interface", "The primary user workflows render accessibly across supported screen sizes.", ["frontend", "accessibility"], 5],
      [/database|data storage|persistence/, "Data model and persistence", "Application data is stored with validated relationships and required constraints.", ["database", "backend"], 5]
    ];
    const seen = new Set();
    const featureIndexes = [];
    features.forEach(([pattern, title, acceptance, skills, points]) => {
      if (!pattern.test(text) || seen.has(title)) return;
      seen.add(title);
      featureIndexes.push(specs.length);
      specs.push({ milestone: "Core delivery", title, description: `Implement ${title.toLowerCase()} for ${input.title}.`, acceptance, skills, points, depends: [0] });
    });
    if (!featureIndexes.length) {
      featureIndexes.push(specs.length);
      specs.push({ milestone: "Core delivery", title: "Implement the core project capability", description: `Build and integrate the primary capability described in: ${input.description}`, acceptance: "The primary user outcome is demonstrable, validated, and integrated with the project design.", skills: ["implementation", "testing"], points: 8, depends: [0] });
    }
    const verificationIndex = specs.length;
    specs.push({ milestone: "Verification & delivery", title: "Integration, security, and acceptance testing", description: "Verify end-to-end behavior, access controls, error handling, and the agreed acceptance criteria.", acceptance: "Automated or documented checks cover critical workflows; high-impact defects are resolved or recorded.", skills: ["testing", "quality assurance", "security"], points: 5, depends: featureIndexes });
    specs.push({ milestone: "Verification & delivery", title: "Release readiness and handover", description: "Prepare deployment, operational notes, and a delivery handover for the project team.", acceptance: "Release steps, rollback or recovery notes, and user-facing handover are reviewed.", skills: ["deployment", "documentation"], points: 3, depends: [verificationIndex] });

    const existingHours = profile => Number(profile.currentWorkloadHours || 0) + AppState.tasks
      .filter(task => task.assignee === profile.name && task.status !== "Done")
      .reduce((sum, task) => sum + (Number(task.points) || 0) * 4, 0);
    const plannedHours = new Map(AppState.teamProfiles.map(profile => [profile.name, existingHours(profile)]));
    const tasks = specs.map((spec, index) => {
      const matching = AppState.teamProfiles.map(profile => {
        const skillText = profile.skills.toLowerCase();
        const matched = spec.skills.filter(skill => skillText.includes(skill));
        return { profile, matched, score: matched.length * 100 - (plannedHours.get(profile.name) / Math.max(1, Number(profile.capacityHours) * 2)) * 20 };
      }).filter(candidate => candidate.matched.length).sort((a, b) => b.score - a.score);
      const selected = matching[0] || null;
      const owner = selected ? selected.profile.name : "";
      const points = spec.points;
      if (selected) plannedHours.set(owner, plannedHours.get(owner) + points * 4);
      return {
        id: `PLAN-${index + 1}`, milestone: spec.milestone, title: spec.title,
        description: spec.description, acceptanceCriteria: spec.acceptance,
        subtasks: ["Implement the scoped behavior", "Validate against acceptance criteria"],
        requiredSkills: spec.skills, assignee: owner, collaborators: [],
        assignmentReason: selected
          ? `${selected.matched.join(", ")} match declared skills; assignment balances current commitments against capacity.`
          : "No declared profile skill matches this task yet. Confirm team skills or choose an owner manually.",
        priority: input.priority, points, dependsOn: spec.depends.map(dep => `PLAN-${dep + 1}`),
        startDate: "", dueDate: ""
      };
    });
    this.schedule(tasks);
    return tasks;
  },

  // Schedule on weekdays after dependency completion and each owner's committed load.
  schedule(tasks) {
    const availability = new Map();
    tasks.forEach(task => {
      const profile = AppState.teamProfiles.find(member => member.name === task.assignee);
      const weekly = profile ? Number(profile.capacityHours) : Math.max(1, ...AppState.teamProfiles.map(member => Number(member.capacityHours) || 0));
      const committed = profile
        ? Number(profile.currentWorkloadHours || 0) + AppState.tasks.filter(existing => existing.assignee === profile.name && existing.status !== "Done").reduce((sum, existing) => sum + (Number(existing.points) || 0) * 4, 0)
        : 0;
      let earliest = availability.get(task.assignee || "__unassigned") || this.today();
      task.dependsOn.forEach(id => {
        const dependency = tasks.find(candidate => candidate.id === id);
        if (dependency?.dueDate) earliest = dependency.dueDate >= earliest ? this.addWorkdays(dependency.dueDate, 1) : earliest;
      });
      if (committed > 0 && !availability.has(task.assignee || "__unassigned")) earliest = this.addWorkdays(earliest, Math.ceil(committed / Math.max(1, weekly / 5)));
      const duration = Math.max(1, Math.ceil((task.points * 4) / Math.max(1, weekly / 5)));
      task.startDate = earliest;
      task.dueDate = this.addWorkdays(earliest, duration - 1);
      availability.set(task.assignee || "__unassigned", this.addWorkdays(task.dueDate, 1));
    });
  },

  updateTask(index, field, value) {
    const task = this.draft?.tasks[index];
    if (!task) return;
    if (field === "points") {
      const points = Number(value);
      if (!Number.isFinite(points) || points < 1 || points > 40) return Toast.warning("Estimate must be between 1 and 40 story points.");
      task.points = points;
    } else if (field === "dependsOn") {
      task.dependsOn = value.split(",").map(item => item.trim()).filter(Boolean);
    } else if (field === "requiredSkills") {
      task.requiredSkills = value.split(",").map(item => item.trim()).filter(Boolean);
    } else if (field === "collaborators") {
      task.collaborators = value ? [value] : [];
    } else {
      task[field] = value;
    }
    this.renderReview();
  },

  addTask() {
    const maxId = this.draft.tasks.reduce((max, task) => Math.max(max, Number(task.id.replace("PLAN-", "")) || 0), 0);
    const id = `PLAN-${maxId + 1}`;
    this.draft.tasks.push({ id, milestone: "Additional work", title: "New planning task", description: "", acceptanceCriteria: "", subtasks: [], requiredSkills: [], assignee: "", collaborators: [], assignmentReason: "Manually added during review.", priority: this.draft.priority, points: 3, dependsOn: [], startDate: this.today(), dueDate: this.draft.dueDate });
    this.renderReview();
  },

  removeTask(index) {
    this.draft.tasks.splice(index, 1);
    this.renderReview();
  },

  findings() {
    const problems = [];
    const ids = new Set(this.draft.tasks.map(task => task.id));
    const titles = new Set();
    this.draft.tasks.forEach(task => {
      if (!task.title.trim()) problems.push(`${task.id}: title is required.`);
      if (!task.assignee) problems.push(`${task.id}: choose an owner before approval.`);
      if (task.dueDate > this.draft.dueDate) problems.push(`${task.id}: scheduled due date exceeds the desired completion date.`);
      if (task.startDate > task.dueDate) problems.push(`${task.id}: start date is after its due date.`);
      if (task.dependsOn.some(id => !ids.has(id) || id === task.id)) problems.push(`${task.id}: dependency is missing or self-referential.`);
      task.dependsOn.forEach(id => {
        const dependency = this.draft.tasks.find(item => item.id === id);
        if (dependency && dependency.dueDate >= task.startDate) problems.push(`${task.id}: start date must follow dependency ${id}.`);
      });
      const normalized = task.title.trim().toLowerCase();
      if (titles.has(normalized)) problems.push(`Duplicate task title: ${task.title}.`);
      titles.add(normalized);
    });
    const visiting = new Set();
    const visited = new Set();
    const visit = id => {
      if (visiting.has(id)) return true;
      if (visited.has(id)) return false;
      visiting.add(id);
      const task = this.draft.tasks.find(item => item.id === id);
      const hasCycle = task ? task.dependsOn.some(dependency => ids.has(dependency) && visit(dependency)) : false;
      visiting.delete(id);
      visited.add(id);
      return hasCycle;
    };
    if (this.draft.tasks.some(task => visit(task.id))) problems.push("Dependencies contain a cycle.");
    this.draft.tasks.forEach((task, index) => {
      if (!task.assignee) return;
      const collides = this.draft.tasks.slice(index + 1).some(other => other.assignee === task.assignee && task.startDate <= other.dueDate && other.startDate <= task.dueDate);
      if (collides) problems.push(`${task.assignee} has overlapping task dates; reassign work or change dates.`);
    });
    return [...new Set(problems)];
  },

  renderReview() {
    const container = document.getElementById("plannerReview");
    if (!container || !this.draft) return;
    const profiles = AppState.teamProfiles;
    const profileOptions = (selected, allowEmpty = true) => `${allowEmpty ? '<option value="">Unassigned</option>' : ""}${profiles.map(profile => `<option value="${this.escape(profile.name)}" ${profile.name === selected ? "selected" : ""}>${this.escape(profile.name)}</option>`).join("")}`;
    const distribution = profiles.map(profile => {
      const assigned = this.draft.tasks.filter(task => task.assignee === profile.name);
      const points = assigned.reduce((sum, task) => sum + Number(task.points || 0), 0);
      const workload = Number(profile.currentWorkloadHours || 0) + points * 4;
      return `<div class="planner-load-row"><span>${this.escape(profile.name)}</span><span>${assigned.length} tasks · ${points} pts</span><span>${workload}h committed / ${Number(profile.capacityHours)}h weekly capacity</span></div>`;
    }).join("");
    const problems = this.findings();
    const tasks = this.draft.tasks.map((task, index) => `
      <article class="planner-task">
        <div class="planner-task-heading"><span class="badge badge-secondary">${this.escape(task.id)} · ${this.escape(task.milestone)}</span><button class="btn btn-ghost btn-sm" onclick="PlannerController.removeTask(${index})">Remove</button></div>
        <label>Task title<input class="form-input no-icon" value="${this.escape(task.title)}" onchange="PlannerController.updateTask(${index}, 'title', this.value)"></label>
        <label>Description<textarea class="form-input no-icon" rows="2" onchange="PlannerController.updateTask(${index}, 'description', this.value)">${this.escape(task.description)}</textarea></label>
        <label>Acceptance criteria<textarea class="form-input no-icon" rows="2" onchange="PlannerController.updateTask(${index}, 'acceptanceCriteria', this.value)">${this.escape(task.acceptanceCriteria)}</textarea></label>
        <div class="planner-review-fields">
          <label>Owner<select class="form-input no-icon" onchange="PlannerController.updateTask(${index}, 'assignee', this.value)">${profileOptions(task.assignee)}</select></label>
          <label>Collaborator<select class="form-input no-icon" onchange="PlannerController.updateTask(${index}, 'collaborators', this.value)">${profileOptions(task.collaborators[0] || "")}</select></label>
          <label>Priority<select class="form-input no-icon" onchange="PlannerController.updateTask(${index}, 'priority', this.value)">${["Low", "Medium", "High", "Critical"].map(value => `<option ${value === task.priority ? "selected" : ""}>${value}</option>`).join("")}</select></label>
          <label>Estimate (points)<input class="form-input no-icon" type="number" min="1" max="40" value="${task.points}" onchange="PlannerController.updateTask(${index}, 'points', this.value)"></label>
          <label>Start date<input class="form-input no-icon" type="date" value="${this.escape(task.startDate)}" onchange="PlannerController.updateTask(${index}, 'startDate', this.value)"></label>
          <label>Due date<input class="form-input no-icon" type="date" value="${this.escape(task.dueDate)}" onchange="PlannerController.updateTask(${index}, 'dueDate', this.value)"></label>
        </div>
        <label>Required skills (comma-separated)<input class="form-input no-icon" value="${this.escape(task.requiredSkills.join(", "))}" onchange="PlannerController.updateTask(${index}, 'requiredSkills', this.value)"></label>
        <label>Dependencies (plan IDs, comma-separated)<input class="form-input no-icon" value="${this.escape(task.dependsOn.join(", "))}" onchange="PlannerController.updateTask(${index}, 'dependsOn', this.value)"></label>
        <p class="planner-assignment-reason">${this.escape(task.assignmentReason)}</p>
        ${task.subtasks?.length ? `<div class="planner-subtasks"><strong>Subtasks</strong><ul>${task.subtasks.map(subtask => `<li>${this.escape(subtask)}</li>`).join("")}</ul></div>` : ""}
      </article>`).join("");
    container.innerHTML = `
      <div class="planner-review-heading"><div><h3>Review proposed plan</h3><p>${this.escape(this.draft.title)} · completion target ${this.escape(this.draft.dueDate)} · ${this.draft.tasks.length} tasks</p></div><div class="planner-review-actions"><button class="btn btn-secondary btn-sm" onclick="PlannerController.generate()">Regenerate</button><button class="btn btn-primary btn-sm" onclick="PlannerController.approve()">Approve plan</button></div></div>
      <div class="planner-review-meta"><strong>Milestones:</strong> ${[...new Set(this.draft.tasks.map(task => task.milestone))].map(this.escape).join(" · ") || "None"}</div>
      ${problems.length ? `<div class="planner-conflicts"><strong>Resolve before approval</strong><ul>${problems.map(problem => `<li>${this.escape(problem)}</li>`).join("")}</ul></div>` : `<div class="planner-ready">No schedule or dependency conflicts detected.</div>`}
      <section class="planner-load"><h4>Workload distribution</h4>${distribution}</section>
      <div class="planner-task-list">${tasks || '<p class="planner-empty">No tasks in this draft. Add a task to continue.</p>'}</div>
      <button class="btn btn-secondary btn-sm" onclick="PlannerController.addTask()">Add task</button>`;
  },

  approve() {
    if (!this.draft?.tasks.length) return Toast.warning("Add at least one task before approval.");
    const problems = this.findings();
    if (problems.length) return Toast.warning(`Resolve ${problems.length} review issue${problems.length === 1 ? "" : "s"} before approval.`);
    const projectId = this.nextId("PRJ", AppState.projects);
    const sprintId = this.nextId("SPR", AppState.sprints);
    const taskIds = AppState.tasks.map(task => Number(String(task.id).match(/-(\d+)$/)?.[1]) || 0);
    let nextTaskNumber = Math.max(100, ...taskIds) + 1;
    const savedTaskIds = new Map(this.draft.tasks.map((task, index) => [task.id, `TSK-${nextTaskNumber + index}`]));
    const sprintName = `${sprintId} - ${this.draft.title}`;
    const points = this.draft.tasks.reduce((sum, task) => sum + Number(task.points), 0);
    const members = [...new Set(this.draft.tasks.flatMap(task => [task.assignee, ...task.collaborators]).filter(Boolean))];
    const project = {
      id: projectId, title: this.draft.title, name: this.draft.title,
      desc: this.draft.description, description: this.draft.description,
      category: "AI Planned", status: "Planning", progress: 0, pointsDone: 0, plannerGenerated: true,
      pointsTotal: points, activeSprint: sprintName,
      members: members.map(name => name.split(/\s+/).map(part => part[0]).join("").slice(0, 2)),
      repo: "", priority: this.draft.priority, desiredCompletionDate: this.draft.dueDate,
      constraints: this.draft.constraints
    };
    const sprint = {
      id: sprintId, name: sprintName, goal: this.draft.description,
      startDate: this.draft.tasks.map(task => task.startDate).sort()[0],
      endDate: this.draft.dueDate, status: "Upcoming", totalPoints: points,
      burnedPoints: 0, velocityTrend: `Planned ${points} pts`, riskLevel: "Planned"
    };
    const createdTasks = this.draft.tasks.map(task => {
      const taskId = `TSK-${nextTaskNumber++}`;
      return {
        id: taskId, title: task.title.trim(),
        desc: `${task.description.trim()}\n\nAcceptance criteria: ${task.acceptanceCriteria.trim()}${this.draft.constraints ? `\n\nConstraints: ${this.draft.constraints}` : ""}`,
        project: project.title, sprint: sprintName, status: "To Do", priority: task.priority,
        assignee: task.assignee, collaborators: task.collaborators, points: Number(task.points),
        estimateHours: Number(task.points) * 4, dueDate: task.dueDate,
        startDate: task.startDate, milestone: task.milestone, requiredSkills: task.requiredSkills,
        acceptanceCriteria: task.acceptanceCriteria, subtasks: task.subtasks || [],
        dependencies: task.dependsOn.map(id => savedTaskIds.get(id)).filter(Boolean), updatedAt: "Just now"
      };
    });
    AppState.projects.unshift(project);
    AppState.sprints.unshift(sprint);
    AppState.tasks.unshift(...createdTasks);
    const now = new Date().toLocaleString();
    members.forEach(member => {
      const owned = createdTasks.filter(task => task.assignee === member || task.collaborators.includes(member));
      AppState.notifications.unshift({
        id: `planner-${Date.now()}-${member.replace(/\W/g, "")}`, title: `Project assignments: ${project.title}`,
        desc: `${owned.length} task${owned.length === 1 ? "" : "s"} assigned or shared with you. Next due: ${owned.map(task => task.dueDate).sort()[0] || this.draft.dueDate}.`,
        time: now, type: "task", unread: true
      });
    });
    StorageManager.saveState(AppState);
    this.draft = null;
    document.getElementById("plannerReview").innerHTML = `<div class="planner-approved"><strong>Plan approved and added to the workspace.</strong><span>${this.escape(project.title)} · ${createdTasks.length} tasks · ${this.escape(sprintName)}</span><button class="btn btn-primary btn-sm" onclick="Router.navigate('tasks')">Open Kanban Board</button></div>`;
    ProjectsController.render();
    TasksController.render();
    OverviewController.render();
    SprintsController.render();
    Notifications.render();
    Toast.success(`Approved ${createdTasks.length} tasks for ${project.title}. In-app assignments are visible in notifications.`);
  }
};
