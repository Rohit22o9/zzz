// NeuroNix - Forest Fire Intelligence Platform JavaScript

// Global variables
let performanceChart, riskTimelineChart, fireSpreadChart, alertStatsChart;
let carbonEmissionsChart, environmentalImpactChart, restorationProgressChart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeRealTimeUpdates();
    initializeInteractions();
    updateHeaderTime();
    
    // Update time every minute
    setInterval(updateHeaderTime, 60000);
    
    // Simulate real-time data updates every 30 seconds
    setInterval(updateRealTimeData, 30000);
});

// Toggle sidebar for mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Update header timestamp
function updateHeaderTime() {
    const updateTimeElement = document.getElementById('header-update-time');
    if (updateTimeElement) {
        const now = new Date();
        const timeAgo = Math.floor(Math.random() * 10) + 1; // Random 1-10 minutes
        updateTimeElement.textContent = `${timeAgo} min ago`;
    }
}

// Initialize all charts
function initializeCharts() {
    initializePerformanceChart();
    initializeRiskTimelineChart();
    initializeFireSpreadChart();
    initializeAlertStatsChart();
    initializeCarbonEmissionsChart();
    initializeEnvironmentalImpactChart();
    initializeRestorationProgressChart();
}

// Performance Chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Accuracy %',
                data: [94.2, 95.8, 96.1, 97.2, 96.8, 97.2],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100,
                    grid: {
                        color: '#f3f4f6'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Risk Timeline Chart
function initializeRiskTimelineChart() {
    const ctx = document.getElementById('riskTimelineChart');
    if (!ctx) return;
    
    riskTimelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [
                {
                    label: 'Nainital',
                    data: [45, 52, 68, 78, 92, 88],
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Almora',
                    data: [38, 42, 58, 65, 76, 72],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Dehradun',
                    data: [25, 28, 35, 42, 54, 48],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#f3f4f6'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Fire Spread Chart
function initializeFireSpreadChart() {
    const ctx = document.getElementById('fireSpreadChart');
    if (!ctx) return;
    
    fireSpreadChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Wind Speed', 'Temperature', 'Humidity', 'Vegetation', 'Terrain', 'Fuel Load'],
            datasets: [{
                label: 'Fire Spread Factors',
                data: [85, 78, 25, 92, 68, 82],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                pointBackgroundColor: '#dc2626',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#dc2626'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#f3f4f6'
                    },
                    angleLines: {
                        color: '#e5e7eb'
                    }
                }
            }
        }
    });
}

// Alert Stats Chart
function initializeAlertStatsChart() {
    const ctx = document.getElementById('alertStatsChart');
    if (!ctx) return;
    
    alertStatsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Critical', 'High', 'Medium', 'Low'],
            datasets: [{
                data: [12, 28, 45, 57],
                backgroundColor: [
                    '#dc2626',
                    '#f59e0b',
                    '#3b82f6',
                    '#10b981'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

// Carbon Emissions Chart
function initializeCarbonEmissionsChart() {
    const ctx = document.getElementById('carbonEmissionsChart');
    if (!ctx) return;
    
    carbonEmissionsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'CO₂ Emissions (tonnes)',
                data: [485, 692, 758, 515],
                backgroundColor: [
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(220, 38, 38, 0.8)',
                    'rgba(220, 38, 38, 0.9)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#f3f4f6'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Environmental Impact Chart
function initializeEnvironmentalImpactChart() {
    const ctx = document.getElementById('environmentalImpactChart');
    if (!ctx) return;
    
    environmentalImpactChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Forest Loss', 'Wildlife Impact', 'Air Quality', 'Water Quality', 'Soil Damage'],
            datasets: [{
                data: [78, 65, 85, 45, 72],
                backgroundColor: [
                    'rgba(220, 38, 38, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(156, 163, 175, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(139, 69, 19, 0.7)'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Restoration Progress Chart
function initializeRestorationProgressChart() {
    const ctx = document.getElementById('restorationProgressChart');
    if (!ctx) return;
    
    restorationProgressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Month 1', 'Month 3', 'Month 6', 'Year 1', 'Year 2', 'Year 3', 'Year 5'],
            datasets: [
                {
                    label: 'Natural Regeneration',
                    data: [5, 15, 25, 40, 65, 80, 95],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Active Reforestation',
                    data: [10, 25, 45, 70, 85, 95, 98],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Recovery Progress (%)'
                    },
                    grid: {
                        color: '#f3f4f6'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Timeline'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Initialize interactions
function initializeInteractions() {
    // Add click handlers for action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.trim();
            showToast(`${action} functionality coming soon!`, 'info');
        });
    });

    // Add click handlers for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.endsWith('.html')) {
                // Check if page exists, if not show coming soon message
                e.preventDefault();
                showToast('This feature is coming soon!', 'info');
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
}

// Update real-time data
function updateRealTimeData() {
    // Update stat cards with random variations
    updateStatCard('accuracyValue', 97.2, 0.5);
    updateStatCard('uptimeValue', 99.8, 0.2);
    updateStatCard('totalAlerts', 142, 5);
    updateStatCard('activeFires', 7, 2);
    updateStatCard('responseTime', 12, 3);
    
    // Update emissions data
    updateStatCard('total-co2-emissions', 2450, 50);
    updateStatCard('car-equivalent', 5.3, 0.2);
    updateStatCard('tree-equivalent', 3200, 100);
    updateStatCard('household-equivalent', 485, 20);
    
    // Add new activity item occasionally
    if (Math.random() > 0.7) {
        addNewActivityItem();
    }
}

// Update stat card with variation
function updateStatCard(elementId, baseValue, variation) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const isPercentage = element.textContent.includes('%');
    const isDecimal = element.textContent.includes('.');
    const hasUnit = element.textContent.match(/[a-zA-Z]/);
    
    let newValue = baseValue + (Math.random() - 0.5) * variation * 2;
    
    if (isPercentage) {
        newValue = Math.max(0, Math.min(100, newValue));
        element.textContent = newValue.toFixed(1) + '%';
    } else if (isDecimal) {
        element.textContent = newValue.toFixed(1) + (hasUnit ? element.textContent.match(/[a-zA-Z]+.*/) || '' : '');
    } else {
        element.textContent = Math.round(newValue) + (hasUnit ? element.textContent.match(/[a-zA-Z\s]+.*/) || '' : '');
    }
}

// Add new activity item
function addNewActivityItem() {
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;
    
    const activities = [
        {
            icon: 'fas fa-satellite-dish',
            title: 'Satellite Data Updated',
            description: 'New MODIS imagery processed for monitoring region',
            time: 'Just now'
        },
        {
            icon: 'fas fa-exclamation-triangle',
            title: 'Weather Alert',
            description: 'High wind speeds detected in vulnerable areas',
            time: 'Just now'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Risk Assessment Complete',
            description: 'Updated risk calculations for all monitored regions',
            time: 'Just now'
        }
    ];
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item new';
    activityItem.innerHTML = `
        <div class="activity-icon">
            <i class="${randomActivity.icon}"></i>
        </div>
        <div class="activity-content">
            <div class="activity-title">${randomActivity.title}</div>
            <div class="activity-description">${randomActivity.description}</div>
            <div class="activity-time">${randomActivity.time}</div>
        </div>
    `;
    
    activityFeed.insertBefore(activityItem, activityFeed.firstChild);
    
    // Remove old items if too many
    const items = activityFeed.querySelectorAll('.activity-item');
    if (items.length > 5) {
        activityFeed.removeChild(items[items.length - 1]);
    }
    
    // Remove 'new' class after animation
    setTimeout(() => {
        activityItem.classList.remove('new');
    }, 3000);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        padding: 12px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#dc2626' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        margin-bottom: 8px;
    `;
    
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Handle window resize
window.addEventListener('resize', function() {
    // Resize charts if they exist
    if (performanceChart) performanceChart.resize();
    if (riskTimelineChart) riskTimelineChart.resize();
    if (fireSpreadChart) fireSpreadChart.resize();
    if (alertStatsChart) alertStatsChart.resize();
    if (carbonEmissionsChart) carbonEmissionsChart.resize();
    if (environmentalImpactChart) environmentalImpactChart.resize();
    if (restorationProgressChart) restorationProgressChart.resize();
    
    // Close sidebar on desktop
    if (window.innerWidth > 1024) {
        document.querySelector('.sidebar').classList.remove('open');
    }
});

// Console welcome message
console.log('%c🔥 NeuroNix Forest Fire Intelligence Platform', 'color: #f59e0b; font-size: 16px; font-weight: bold;');
console.log('%cSystem initialized successfully', 'color: #10b981; font-size: 12px;');