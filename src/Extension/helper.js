export const convertTimeStamp = (timestamp) => {
    const prev = new Date(timestamp);
    const curr = new Date();
    const difference = curr - prev;
    const differenceInHours = Math.floor(difference / 1000 / 60 / 60);
    if (differenceInHours >= 0 && differenceInHours <= 24) {
        return `Posted ${differenceInHours} ${differenceInHours <= 1 ? "hour" : "hours"} ago`;
    } else {
        const day = Math.floor(differenceInHours / 24);
        return `Posted ${day} ${day === 1 ? "day" : "days"} ago`;
    }
}
