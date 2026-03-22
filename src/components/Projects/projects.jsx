import './projects.css'

const projects = [
  {
    id: 1,
    tag: 'AI / ML',
    featured: true,
    icon: '🤖',
    name: 'Autonomous Gesture Recognition System',
    by: 'Batch 6 · AI/ML Domain',
    color: '#e8ff47'
  },
  {
    id: 2,
    tag: 'IoT',
    featured: false,
    icon: '🌐',
    name: 'Campus Air Quality Monitor',
    by: 'Batch 4 · IoT Domain',
    color: '#47c8ff'
  },
  {
    id: 3,
    tag: 'EV',
    featured: false,
    icon: '⚡',
    name: 'Smart EV Charging Monitor',
    by: 'Batch 5 · EV Domain',
    color: '#47ff8f'
  },
  {
    id: 4,
    tag: 'Cloud',
    featured: false,
    icon: '☁️',
    name: 'Secure Cloud Storage System',
    by: 'Batch 7 · CLCY Domain',
    color: '#ff47c8'
  },
  {
    id: 5,
    tag: 'Design',
    featured: false,
    icon: '✏️',
    name: 'Modular 3D Printed Prosthetic',
    by: 'Batch 3 · Design Domain',
    color: '#ff9447'
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-tag">Student Work</div>
          <h2 className="section-title">Projects that<br />make an impact.</h2>
        </div>
      </div>

      <div className="projects-grid">
        {/* Featured card */}
        <div className="project-card featured">
          <div className="project-visual">🤖</div>
          <div className="project-tag-list">
            <span className="project-tag">AI / ML</span>
            <span className="project-tag highlight">Featured</span>
          </div>
          <div className="project-name">Autonomous Gesture Recognition System</div>
          <div className="project-by">By Batch 6 · AI/ML Domain</div>
        </div>

        {/* Rest of projects */}
        {projects.slice(1).map(p => (
          <div className="project-card" key={p.id} style={{'--p-color': p.color}}>
            <div className="project-visual-small">{p.icon}</div>
            <div className="project-tag-list">
              <span className="project-tag">{p.tag}</span>
            </div>
            <div className="project-name">{p.name}</div>
            <div className="project-by">{p.by}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects