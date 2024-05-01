interface MajorCredits {
    credits: number;
    readonly brand: any;
}

interface MinorCredits {
    credits: number;
    readonly brand: any;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}
