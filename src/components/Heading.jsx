

const Heading = ({title,className}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>{title && <h2 className="text-3xl font lg:text-[3rem] leading-[3.5rem]">{title}</h2>}</div>
  )
}

export default Heading