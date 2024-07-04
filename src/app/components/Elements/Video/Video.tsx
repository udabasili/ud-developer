import { VideoContainer } from './Video.styled'

export const Video = ({ src }: { src: string }) => {
    return (
        <VideoContainer controls autoPlay muted playsInline>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </VideoContainer>
    )
}