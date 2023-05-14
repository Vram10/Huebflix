import SectionItem from "./SectionItem";

export default function Section({title, List}){
    return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="video-container">
        <ul className="thumbnails">
          {List.map(li => {
            return (
              <SectionItem src={li.src} id={li.id} />
            )
          })}
        </ul>
      </div>
    </section>
    )
}