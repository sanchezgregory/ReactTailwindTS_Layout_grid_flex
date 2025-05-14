const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
})

export const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60/ 60)
    const minutes = Math.floor((duration - hours * 60 * 60) / 60)
    const seconds = duration % 60
    if (hours > 0) {
        return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds)}`
    }
    return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`
}

export const formatViews = (views: number) => {
    if (views >= 1_000_000) {
        return `${(views / 1_000_000).toFixed(1)}M`
    }
    if (views >= 1_000) {
        return `${(views / 1_000).toFixed(1)}K`
    }
    return views.toString()
}

export const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    if (days > 0) {
        return `${days}d`
    }
    if (hours > 0) {
        return `${hours}h`
    }
    if (minutes > 0) {
        return `${minutes}m`
    }
    return `${seconds}s`
}
