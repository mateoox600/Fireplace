
export default class DataFormater {

    public static humanizeMillisDuration(millis: number): string {
        const duration = new Date(millis);
        const daysString = `${duration.getUTCDate()-1 > 0 ? `${duration.getUTCDate()-1} day` : ''}${duration.getUTCDate()-1 > 1 ? 's' : ''}`;
        const hoursString = `${duration.getUTCHours() > 0 ? `${duration.getUTCHours()} hour` : ''}${duration.getUTCHours() > 1 ? 's' : ''}`;
        const minutesString = `${duration.getUTCMinutes() > 0 ? `${duration.getUTCMinutes()} minute` : ''}${duration.getUTCMinutes() > 1 ? 's' : ''}`;
        const secondsString = `${duration.getUTCSeconds() > 0 ? `${duration.getUTCSeconds()} second` : ''}${duration.getUTCSeconds() > 1 ? 's' : ''}`;
        const millisString = `${duration.getUTCMilliseconds() > 0 ? `${duration.getUTCMilliseconds()} millisecond` : ''}${duration.getUTCMilliseconds() > 1 ? 's' : ''}`;
        return `${daysString} ${hoursString} ${minutesString} ${secondsString} ${millisString}`;
    }

}