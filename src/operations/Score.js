const operations = {
    calcS: function (s, gender) {
        if (gender == 1) { //девушки
            if (s > 50) {
                return 100;
            } else if (s < 5) {
                return 0;
            } else {
                switch (s) {
                    case "50": return 100;
                    case "49": return 98;
                    case "48": return 96;
                    case "47": return 94;
                    case "46": return 92;
                    case "45": return 90;
                    case "44": return 88;
                    case "43": return 86;
                    case "42": return 84;
                    case "41": return 82;
                    case "40": return 80;
                    case "39": return 78;
                    case "38": return 76;
                    case "37": return 74;
                    case "36": return 72;
                    case "35": return 70;
                    case "34": return 68;
                    case "33": return 66;
                    case "32": return 64;
                    case "31": return 62;
                    case "30": return 60;
                    case "29": return 58;
                    case "28": return 56;
                    case "27": return 54;
                    case "26": return 52;
                    case "25": return 50;
                    case "24": return 48;
                    case "23": return 46;
                    case "22": return 44;
                    case "21": return 42;
                    case "20": return 40;
                    case "19": return 38;
                    case "18": return 36;
                    case "17": return 34;
                    case "16": return 32;
                    case "15": return 30;
                    case "14": return 27;
                    case "13": return 24;
                    case "12": return 22;
                    case "11": return 20;
                    case "10": return 18;
                    case "9": return 16;
                    case "8": return 14;
                    case "7": return 12;
                    case "6": return 10;
                    case "5": return 8;
                }
            }
        } else { // парни
            if (s > 25) {
                return 100;
            } else if (s < 5) {
                return 0;
            } else {
                switch (s) {
                    case "25": return 100;
                    case "24": return 95;
                    case "23": return 91;
                    case "22": return 87;
                    case "21": return 83;
                    case "20": return 80;
                    case "19": return 78;
                    case "18": return 76;
                    case "17": return 74;
                    case "16": return 72;
                    case "15": return 70;
                    case "14": return 66;
                    case "13": return 62;
                    case "12": return 58;
                    case "11": return 54;
                    case "10": return 50;
                    case "9": return 46;
                    case "8": return 42;
                    case "7": return 38;
                    case "6": return 34;
                    case "5": return 30;
                }
            }
        }
    },
    calcB: function (b, gender) {
        if (gender == 1) { //девушки
            if (b < 12) {
                return 100;
            } else if (b > 18.4) {
                return 0;
            } else {
                switch (b) {
                    case "12": return 100;
                    case "12.1": return 98;
                    case "12.2": return 96;
                    case "12.3": return 94;
                    case "12.4": return 92;
                    case "12.5": return 90;
                    case "12.6": return 88;
                    case "12.7": return 86;
                    case "12.8": return 84;
                    case "12.9": return 82;
                    case "13": return 80;
                    case "13.1": return 78;
                    case "13.2": return 77;
                    case "13.3": return 73;
                    case "13.4": return 70;
                    case "13.5": return 67;
                    case "13.6": return 64;
                    case "13.7": return 61;
                    case "13.8": return 58;
                    case "13.9": return 55;
                    case "14": return 52;
                    case "14.1": return 50;
                    case "14.2": return 48;
                    case "14.3": return 46;
                    case "14.4": return 44;
                    case "14.5": return 42;
                    case "14.6": return 40;
                    case "14.7": return 38;
                    case "14.8": return 26;
                    case "14.9": return 35;
                    case "15": return 34;
                    case "15.1": return 33;
                    case "15.2": return 32;
                    case "15.3": return 31;
                    case "15.4": return 30;
                    case "15.5": return 29;
                    case "15.6": return 28;
                    case "15.7": return 27;
                    case "15.8": return 26;
                    case "15.9": return 25;
                    case "16": return 24;
                    case "16.1": return 23;
                    case "16.2": return 22;
                    case "16.3": return 22;
                    case "16.4": return 21;
                    case "16.5": return 21;
                    case "16.6": return 20;
                    case "16.7": return 20;
                    case "16.8": return 19;
                    case "16.9": return 19;
                    case "17": return 18;
                    case "17.1": return 18;
                    case "17.2": return 17;
                    case "17.3": return 17;
                    case "17.4": return 16;
                    case "17.5": return 16;
                    case "17.6": return 15;
                    case "17.7": return 14;
                    case "17.8": return 13;
                    case "17.9": return 12;
                    case "18": return 12;
                    case "18.1": return 11;
                    case "18.2": return 10;
                    case "18.3": return 9;
                    case "18.4": return 8;
                }
            }
        } else { // парни
            if (b < 12) {
                return 100;
            } else if (b > 15.4) {
                return 0;
            } else {
                switch (b) {
                    case "12": return 100;
                    case "12.1": return 98;
                    case "12.2": return 96;
                    case "12.3": return 94;
                    case "12.4": return 92;
                    case "12.5": return 90;
                    case "12.6": return 88;
                    case "12.7": return 86;
                    case "12.8": return 84;
                    case "12.9": return 82;
                    case "13": return 80;
                    case "13.1": return 78;
                    case "13.2": return 76;
                    case "13.3": return 73;
                    case "13.4": return 70;
                    case "13.5": return 67;
                    case "13.6": return 64;
                    case "13.7": return 61;
                    case "13.8": return 58;
                    case "13.9": return 55;
                    case "14": return 52;
                    case "14.1": return 50;
                    case "14.2": return 48;
                    case "14.3": return 46;
                    case "14.4": return 44;
                    case "14.5": return 42;
                    case "14.6": return 40;
                    case "14.7": return 38;
                    case "14.8": return 36;
                    case "14.9": return 35;
                    case "15": return 34;
                    case "15.1": return 33;
                    case "15.2": return 32;
                    case "15.3": return 31;
                    case "15.4": return 30;
                }
            }
        }
    },
    calcV: function (v, gender) {
        if (gender == 1) { //девушки
            if (v < 3.15) {
                return 100;
            } else if (v > 5.55) {
                return 0;
            } else {
                switch (v) {
                    case "3.15": return 100;
                    case "3.16": return 99;
                    case "3.17": return 98;
                    case "3.18": return 97;
                    case "3.19": return 96;
                    case "3.20": return 95;
                    case "3.21": return 94;
                    case "3.22": return 93;
                    case "3.23": return 92;
                    case "3.24": return 91;
                    case "3.25": return 89;
                    case "3.26": return 87;
                    case "3.27": return 85;
                    case "3.28": return 83;
                    case "3.29": return 81;
                    case "3.30": return 79;
                    case "3.31": return 77;
                    case "3.32": return 75;
                    case "3.33": return 73;
                    case "3.34": return 71;
                    case "3.35": return 69;
                    case "3.36": return 67;
                    case "3.37": return 65;
                    case "3.38": return 63;
                    case "3.39": return 61;
                    case "3.40": return 59;
                    case "3.41": return 57;
                    case "3.42": return 55;
                    case "3.43": return 53;
                    case "3.44": return 51;
                    case "3.45": return 49;
                    case "3.46": return 47;
                    case "3.47": return 45;
                    case "3.48": return 43;
                    case "3.49": return 41;
                    case "3.50": return 40;
                    case "3.51": return 39;
                    case "3.52": return 38;
                    case "3.53": return 37;
                    case "3.54": return 36;
                    case "3.55": return 35;
                    case "3.56": return 34;
                    case "3.57": return 33;
                    case "3.58": return 32;
                    case "3.59": return 31;
                    case "4": return 30;
                    case "4.05": return 29;
                    case "4.10": return 28;
                    case "4.15": return 27;
                    case "4.20": return 26;
                    case "4.25": return 25;
                    case "4.30": return 24;
                    case "4.35": return 23;
                    case "4.40": return 22;
                    case "4.45": return 21;
                    case "4.50": return 20;
                    case "4.55": return 19;
                    case "5": return 18;
                    case "5.10": return 17;
                    case "5.15": return 16;
                    case "5.20": return 15;
                    case "5.25": return 14;
                    case "5.30": return 13;
                    case "5.35": return 12;
                    case "5.40": return 11;
                    case "5.45": return 10;
                    case "5.50": return 9;
                    case "5.55": return 8;
                }
            }
        } else { // парни
            if (v < 3.15) {
                return 100;
            } else if (v > 4) {
                return 0;
            } else {
                switch (v) {
                    case "3.15": return 100;
                    case "3.16": return 99;
                    case "3.17": return 98;
                    case "3.18": return 97;
                    case "3.19": return 96;
                    case "3.20": return 95;
                    case "3.21": return 94;
                    case "3.22": return 93;
                    case "3.23": return 92;
                    case "3.24": return 91;
                    case "3.25": return 89;
                    case "3.26": return 87;
                    case "3.27": return 85;
                    case "3.28": return 83;
                    case "3.29": return 81;
                    case "3.30": return 79;
                    case "3.31": return 77;
                    case "3.32": return 75;
                    case "3.33": return 73;
                    case "3.34": return 71;
                    case "3.35": return 69;
                    case "3.36": return 67;
                    case "3.37": return 65;
                    case "3.38": return 63;
                    case "3.39": return 61;
                    case "3.40": return 59;
                    case "3.41": return 57;
                    case "3.42": return 55;
                    case "3.43": return 53;
                    case "3.44": return 51;
                    case "3.45": return 49;
                    case "3.46": return 47;
                    case "3.47": return 45;
                    case "3.48": return 43;
                    case "3.49": return 41;
                    case "3.50": return 40;
                    case "3.51": return 39;
                    case "3.52": return 38;
                    case "3.53": return 37;
                    case "3.54": return 36;
                    case "3.55": return 35;
                    case "3.56": return 34;
                    case "3.57": return 33;
                    case "3.58": return 32;
                    case "3.59": return 31;
                    case "4": return 30;
                }
            }
        }
    },
    sumDecValues: function (valS, valB, valV) {
        return parseInt(valS) + parseInt(valB) + parseInt(valV);
    },
    countFinal: function (sum) {
        return parseInt(sum) - 95;
    },
    countTotalScore: function (finalDecScore, auPoints, indPoints) {
        return parseInt(finalDecScore) + parseInt(auPoints) + parseInt(indPoints);
    }
}

export const calcS = operations.calcS;
export const calcB = operations.calcB;
export const calcV = operations.calcV;
export const sumDecValues = operations.sumDecValues;
export const countFinal = operations.countFinal;
export const countTotalScore = operations.countTotalScore;