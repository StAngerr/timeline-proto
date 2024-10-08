export const isValidNumberTuple = (
    input: [unknown, unknown],
): input is [number, number] => {
    const [start, end] = input;
    const isNumbers = typeof start === 'number' && typeof end === 'number';
    return (
        isNumbers &&
        start < 24 &&
        start >= 0 &&
        end > 0 &&
        end <= 24 &&
        start < end
    );
};
export const isValidTimeString = (timeString: string) => {
    //two-digit hour and two-digit minute HH:mm
    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$|^24:00$/;
    return timeRegex.test(timeString);
};
export const isValidStringTuple = (
    input: [unknown, unknown],
): input is [string, string] => {
    const [start, end] = input;
    const isStrings = typeof start === 'string' && typeof end === 'string';

    return isStrings && isValidTimeString(start) && isValidTimeString(end);
};

export const isMultipleOf = (value: number, divisor: number) => {
    return value % divisor === 0;
};

export const isDefined = <T>(value: T | undefined): value is T => {
    return value !== undefined;
};
