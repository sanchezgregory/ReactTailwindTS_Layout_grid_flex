
type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    views: number
    postedAt: string
    duration:number
    thumbnailUrl: string
    videoUrl: string
}

export const VideoGridItem: React.FC<VideoGridItemProps> = ({
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
}) => {
  return (
    <div className="flex flex-col gap-2"> 
        <a href={`/watch?v=${id}`} className="relative aspect-video">
            <img src={thumbnailUrl} alt={title} className="block w-full h-full object-cover rounded-xl" />
        </a>
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded">
            <span>{duration}</span>
        </div>
    </div>
  )
}
