
import { Eye } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { formatDuration, formatTimeAgo, formatViews } from "../utils/formatDuration"

type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    views: number
    postedAt: Date
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
    
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current == null) return
        
        if (isVideoPlaying) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }

    }, [isVideoPlaying])

    return (
    <div className="flex flex-col gap-2" onMouseEnter={() => setIsVideoPlaying(true)} onMouseLeave={() => setIsVideoPlaying(false)}> 
        <a href={`/watch?v=${id}`} className="relative aspect-video">

            <img src={thumbnailUrl} alt={title}
                className={`block w-full h-full object-cover rounded-xl transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"}`} />
            <div className="absolute bottom-1 right-1 bg-black text-white text-sm px-1 rounded z-10">
                {formatDuration(duration)}
            </div>
            <video ref={videoRef} src={videoUrl} muted playsInline 
                className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"}`} />
        </a>
        <div className="flex gap-2">
            <a href={`/@${channel.id}`} className="flex-shrink-0">
                <img src={channel.profileUrl} alt={channel.name} className="w-12 h-12 rounded-full" />
            </a>
            <div className="flex flex-col">
               <a href={`/watch?v=${id}`} className="font-bold text-sm">{title}</a>
               <a href={`/@${channel.id}`} className="text-xs text-gray-500">{channel.name}</a>
            </div>
        </div>
        <div className="text-xs text-gray-500">
            <Eye className="w-4 h-4" />{formatViews(views)} views {formatTimeAgo(postedAt)}
        </div>
    </div>
  )
}
