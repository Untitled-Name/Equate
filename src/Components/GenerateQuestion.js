import React from "react";

export default function GenerateQuestion (difficulty, randomNum) {
    let questionObj = {};
    let probRange = [];
    let questionType;
    let maxVal;


     /*
        Difficulty                                                              Easy    Medium  Hard

        Basic algebra                                                           0.90    0.30    0.10 (only 3)
                            * ax = b                                              0.30    0.05    0
                            * ax + c = b                                          0.30    0.15    0
                            * ax + c = b + dx                                     0.30    0.10    0.10

        Quadratic equation  ax^2 + bx + c = d                                   0.10    0.50    0.30

        Differentiation     d/dx f(x) => f(x) = Above                           0       0.10    0.30
        
        Integration         ∫ f'(x) dx                                          0       0.10    0.30
    */
    
    const assignQuestionObj = (a, b, c, d, e) => {
        questionObj = {
            question: a,
            correctAns: b,
            wrongAns1: c,
            wrongAns2: d,
            wrongAns3: e
        }
        return questionObj;
    }

    switch (difficulty){
        case "Easy": probRange = [0,0.3,0.6,0.9,1.0,1.0,1.0]; maxVal = 12; break;
        case "Normal": probRange = [0,0.05,0.2,0.3,0.8,0.9,1.0]; maxVal = 16; break;
        case "Hard": probRange = [0,0,0,0.1,0.4,0.7,1.0]; maxVal = 20; break;
        default: alert("I don't know how, but you've broken it.");
    }

    for (let i = 0; i < probRange.length - 1; i++){
        if (randomNum >= probRange[i] && randomNum < probRange[i+1]){
            switch (i) {
                case 0: questionType = "basic1"; break;
                case 1: questionType = "basic2"; break;
                case 2: questionType = "basic3"; break;
                case 3: questionType = "quadratic"; break;
                case 4: questionType = "differentiation"; break;
                case 5: questionType = "integration"; break;
                default: alert("I don't know how, but you've broken it.");
            }
            break;
        }
    }

    const getRandom = (min, max) => {
        return Math.floor(Math.random() *  (max - min) + min);
    }

    const genBasic1 = () => {
        let xVal, a, b, diff1, diff2, diff3;
        do {
            xVal = getRandom(-maxVal, maxVal);
            a = getRandom(-maxVal, maxVal);
            diff1 = getRandom(-10, 10);
            diff2 = getRandom(-10, 10);
            diff3 = getRandom(-10, 10);
        } while (
            xVal === 0 || a === 0 || diff1 === 0 || diff2 === 0 || diff3 === 0 
            || xVal === a || a === 1 || diff1 === diff2 || diff2 === diff3 
            || diff3 === diff1 || diff1 === 1 || diff2 === 1 || diff3 === 1
            || xVal + diff1 === 0 || xVal + diff2 === 0 || xVal + diff3 === 0)
        b = xVal * a;

        questionObj = assignQuestionObj(
            `${a}x = ${b}`, 
            `x = ${xVal}`, 
            `x = ${xVal + diff1}`, 
            `x = ${xVal + diff2}`, 
            `x = ${xVal + diff3}`);
        return questionObj
    }

    const genBasic2 = () => {
        let xVal, a, b, c, diff1, diff2, diff3;
        do {
            xVal = getRandom(-maxVal, maxVal);
            a = getRandom(-maxVal, maxVal);
            c = getRandom(-100, 100);
            diff1 = getRandom(-10, 10);
            diff2 = getRandom(-10, 10);
            diff3 = getRandom(-10, 10);
        } while (
            xVal === 0 || a === 0 || diff1 === 0 || diff2 === 0 || diff3 === 0 
            || xVal === a || a === 1 || diff1 === diff2 || diff2 === diff3 
            || diff3 === diff1 || diff1 === 1 || diff2 === 1 || diff3 === 1
            || xVal + diff1 === 0 || xVal + diff2 === 0 || xVal + diff3 === 0
            || c === 0)
        b = xVal * a + c;
        let sign;
        if (c > 0){sign = "+"}else{sign = "-";c = c * -1}

        questionObj = assignQuestionObj(
            `${a}x ${sign} ${c} = ${b}`, 
            `x = ${xVal}`, 
            `x = ${xVal + diff1}`, 
            `x = ${xVal + diff2}`, 
            `x = ${xVal + diff3}`);
        return questionObj
    }

    const genBasic3 = () => {
        let xVal, a, b, c, d, diff1, diff2, diff3;
        do {
            xVal = getRandom(-maxVal, maxVal);
            a = getRandom(-maxVal, maxVal);
            d = getRandom(-maxVal, maxVal);
            c = getRandom(-100, 100);
            diff1 = getRandom(-10, 10);
            diff2 = getRandom(-10, 10);
            diff3 = getRandom(-10, 10);
        } while (
            xVal === 0 || a === 0 || diff1 === 0 || diff2 === 0 || diff3 === 0 
            || xVal === a || a === 1 || diff1 === diff2 || diff2 === diff3 
            || diff3 === diff1 || diff1 === 1 || diff2 === 1 || diff3 === 1
            || xVal + diff1 === 0 || xVal + diff2 === 0 || xVal + diff3 === 0
            || c === 0)
        b = xVal * a + c - xVal * d;
        let signC, signD;
        if (c > 0){signC = "+"}else{signC = "-";c = c * -1}
        if (d > 0){signD = "+"}else{signD = "-";d = d * -1}

        questionObj = assignQuestionObj(
            `${a}x ${signC} ${c} = ${b} ${signD} ${d}x`, 
            `x = ${xVal}`, 
            `x = ${xVal + diff1}`, 
            `x = ${xVal + diff2}`, 
            `x = ${xVal + diff3}`);
        return questionObj
    }

    const quadratic = () => {
        let xRoot1, xRoot2, diff1A, diff2A, diff3A, diff1B, diff2B, diff3B;
        do {
            xRoot1 = getRandom(-12, 12);
            xRoot2 = getRandom(-12, 12);
            diff1A = getRandom(-10, 10);
            diff1B = getRandom(-10, 10);
            diff2A = getRandom(-10, 10);
            diff2B = getRandom(-10, 10);
            diff3A = getRandom(-10, 10);
            diff3B = getRandom(-10, 10);
        } while (
        xRoot1 === 0 || xRoot2 === 0 || diff1A === 0 || diff2A === 0 || diff3A === 0
        || diff1B === 0 || diff2B === 0 || diff3B === 0 || diff1A + diff1B === diff2A + diff2B 
        || diff2A + diff2B === diff3A + diff3B || diff1A + diff1B === diff3A + diff3B)

        let b = xRoot1 + xRoot2;
        let c = xRoot1 * xRoot2;
        let signB, signC;
        if (b > 0){signB = "+"}else{signB = "-";b = b * -1}
        if (c > 0){signC = "+"}else{signC = "-";c = c * -1}

        questionObj = assignQuestionObj(
            `x<sup>2</sup> ${signB} ${b}x ${signC} ${c} = 0`, 
            `${xRoot1}, ${xRoot2}`, 
            `${xRoot1 + diff1A}, ${xRoot2 + diff1B}`, 
            `${xRoot1 + diff2A}, ${xRoot2 + diff2B}`, 
            `${xRoot1 + diff3A}, ${xRoot2 + diff3B}`);
        return questionObj
    }

    questionObj = quadratic();

    return questionObj;
}