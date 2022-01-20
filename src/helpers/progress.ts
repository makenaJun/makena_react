import {ProgressObjectType, ProgressResponseType} from "../redux/ProgressReducer";

const declensionOfAWord = (elapsedTime: number) => {
    const penultNum = elapsedTime.toString().slice(-2, -1);
    const lastNum = elapsedTime.toString().slice(-1);

    if (penultNum === '1') {
        return 'дней';
    } else if (lastNum === '1') {
        return 'день';
    } else if (lastNum === '2' || lastNum === '3' || lastNum === '4') {
        return 'дня';
    } else {
        return 'дней';
    }
}

export const createProgressObject = (progress: ProgressObjectType): ProgressResponseType => {
    return {
        ...progress,
        totalProgress: Object.values(progress.study).reduce((acc: number, value: number) => acc += value),
        dayOfStudy: declensionOfAWord(progress.elapsedTime)
    }
}