import './marquee.css'

const items = [
  'AI and Machine Learning',
  'Aviation',
  'EV-RE',
  'Internet of Things',
  'Design and Prototyping',
  'VFX',
  'CL-CY'
]

function Marquee() {
  return(
    <div className='marquee-section'>
      <div className='marquee-track'>
        {[...items, ...items].map((items, i) => (
          <div className='marquee-item' key={i}>
            <span className='marquee-dot'>✦</span>
            {items}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee