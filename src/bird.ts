export class Bird {
     type: string;
     numberOfCoconuts: number;
     voltage: number;

    constructor(type: string, numberOfCoconuts: number, voltage: number) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
    }

    getPlumage(): string {
        return "unknown";
    }
}

export class EuropeanSwallow extends Bird {
    getPlumage(): string {
        return "average";
    }
}

export class AfricanSwallow extends Bird {
    getPlumage(): string {
        return  (this.numberOfCoconuts > 2) ? "tired" : "average";;
    }
}

export class NorwegianBlueParrot extends Bird {
    getPlumage(): string {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
}
