import "./DetailProject.css"

export function DetailProject ({title, link, content}){
  return (
    <div className='project-web-container'>
      <div className='navigation-bar-container'>
          <div className='window-container'>
              <div className='window'>{title}</div>
              <div className='window'>+</div>
          </div>
          <div className='eyelash-container'>
              <div className='eyelash'>-</div>
              <div className='eyelash'>o</div>
              <div className='eyelash'>x</div>
          </div>
      </div>
      <div className='link-container'>
          <a href={link} target='_blank' className='withoutDefaultClasses'>
            {link}
          </a>
      </div>
      {content}
  </div>
  )
}