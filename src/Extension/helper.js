export const convertTimeStamp = (timestamp) => {
    const prev = new Date(timestamp);
    const curr = new Date();
    const difference = curr - prev;
    const differenceInHours = Math.floor(difference / 1000 / 60 / 60);

    return differenceInHours <= 24 ? differenceInHours : differenceInHours % 24;
}

