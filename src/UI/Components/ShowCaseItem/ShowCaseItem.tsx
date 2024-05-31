interface ShowCaseItemProps {
  imageLink: string
  name: string
}

export const ShowCaseItem: React.FC<ShowCaseItemProps> = ({ imageLink, name }) => {
  return (
    <div className="card-shadow w-full p-3 group">
      <div className="relative overflow-hidden">
        <div className="h-96 w-full">
          <img className="h-full w-full" src={imageLink} alt={name} />
        </div>
      </div>
      <div className="p-3">
        <h2 className="mt-3 text-xl capitalize">{name}</h2>
      </div>
    </div>
  )
}
