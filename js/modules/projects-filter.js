/**
 * Projects Filter & Detail Modal Module
 */
export function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('closeProjectModal');
  const detailBtns = document.querySelectorAll('.js-view-project');

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Project Details Data
  const projectsData = {
    'auca-labs': {
      title: 'AUCA Labs Management System',
      category: 'Systems & Software Administration',
      image: 'assets/images/project-auca-labs.jpg',
      overview: 'Designed and deployed an integrated lab administration and computer workstation management system for the Adventist University of Central Africa (AUCA). The platform automates lab seat tracking, device health monitoring, student access control, and IT equipment diagnostics.',
      metrics: [
        'Streamlined monitoring across 100+ lab computers',
        'Cut student check-in and issue escalation time by 45%',
        'Centralized hardware and software inventory management'
      ],
      techStack: ['Python', 'Linux', 'Network Administration', 'UI/UX Design', 'SQL']
    },
    'network-infra': {
      title: 'Hybrid Cloud & Network Infrastructure',
      category: 'Networking & Cloud Operations',
      image: 'assets/images/project-network-infra.jpg',
      overview: 'Engineered robust network topologies and hybrid cloud environments linking local AUCA infrastructure with cloud collaboration tools. Configured VLANs, subnets, routing protocols, and firewall rules to ensure high-availability and zero packet drop.',
      metrics: [
        'Achieved 99.9% uptime across campus testing nodes',
        'Implemented secure Cisco VLANs and traffic segmentation',
        'Configured hybrid sync with Microsoft 365 services'
      ],
      techStack: ['Cisco Networking', 'VLANs / Subnetting', 'Linux SysAdmin', 'Cloud Tools', 'Wireshark']
    },
    'support-hub': {
      title: 'Enterprise IT Service Desk & Support Hub',
      category: 'IT Support & End-User Assistance',
      image: 'assets/images/project-support-hub.jpg',
      overview: 'A standardized enterprise support framework and ticketing solution developed from hands-on customer and student support at Vision Technologies and AUCA. Coordinates Microsoft Exchange, Outlook, Teams configurations, and rapid hardware diagnostics.',
      metrics: [
        'Resolved 500+ student and staff technical support tickets',
        'Average first-response time kept under 10 minutes',
        'Maintained 98.5% user satisfaction rating across service cycles'
      ],
      techStack: ['Microsoft Exchange', 'MS Teams / Outlook', 'Mobile OS Support', 'Hardware Diagnostics', 'SLA Tracking']
    }
  };

  // Open Project Details Modal
  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = projectsData[projId];

      if (data && projectModal) {
        document.getElementById('modalProjectTitle').textContent = data.title;
        document.getElementById('modalProjectCategory').textContent = data.category;
        document.getElementById('modalProjectImg').setAttribute('src', data.image);
        document.getElementById('modalProjectImg').setAttribute('alt', data.title);
        document.getElementById('modalProjectDesc').textContent = data.overview;

        // Populate metrics
        const metricsList = document.getElementById('modalProjectMetrics');
        metricsList.innerHTML = '';
        data.metrics.forEach(m => {
          const li = document.createElement('li');
          li.textContent = m;
          metricsList.appendChild(li);
        });

        // Populate tech stack
        const techContainer = document.getElementById('modalProjectTech');
        techContainer.innerHTML = '';
        data.techStack.forEach(t => {
          const span = document.createElement('span');
          span.className = 'tech-tag';
          span.textContent = t;
          techContainer.appendChild(span);
        });

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Project Modal
  const closeProjModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal?.classList.contains('active')) {
      closeProjModal();
    }
  });
}
