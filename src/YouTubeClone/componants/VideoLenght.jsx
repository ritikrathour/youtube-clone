
const VideoLength = ({ length }) => { 
        const hours = Math.floor(length / 60);
        const minutes = length % 60;
        const convertedLength = `${hours} :${minutes > 0 ? ` ${minutes}  ` : ""}`
        return convertedLength
}
export default VideoLength;