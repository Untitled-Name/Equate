import React from "react";

export default function GenerateQuestion (difficulty, randomNum) {
    let questionObj = {};
    let probRange = [];
    let questionType;


     /*
        Difficulty                                                              Easy    Medium  Hard

        Basic algebra                                                           0.90    0.30    0.10 (only 3)
                            ax = b                                              0.30    0.05    0
                            ax + c = b                                          0.30    0.15    0
                            ax + c = b + dx                                     0.30    0.10    0.10

        Quadratic equation  ax^2 + bx + c = d                                   0.10    0.50    0.30

        Differentiation     d/dx f(x) => f(x) = Above                           0       0.10    0.30
        
        Integration         ∫ f'(x) dx                                          0       0.10    0.30
    */
    
    
    console.log(difficulty, "mode")

    switch (difficulty){
        case "easy": probRange = [0,0.3,0.6,0.9,1.0,1.0,1.0]; break;
        case "normal": probRange = [0,0.05,0.2,0.3,0.8,0.9,1.0]; break;
        case "hard": probRange = [0,0,0,0.1,0.4,0.7,1.0]; break;
    }

    for (let i = 0; i < probRange.length - 1; i++){
        console.log(i, ":", probRange[i], probRange[i+1])
        if (randomNum >= probRange[i] && randomNum < probRange[i+1]){
            console.log(randomNum, i)
            switch (i) {
                case 0: questionType = "basic1"; break;
                case 1: questionType = "basic2"; break;
                case 2: questionType = "basic3"; break;
                case 3: questionType = "quadratic"; break;
                case 4: questionType = "differentiation"; break;
                case 5: questionType = "integration"; break;
            }
            break;
        }
    }
    questionObj.question = questionType;
    questionObj.correctAns = "a";
    questionObj.wrongAns1 = "b";
    questionObj.wrongAns2 = "c";
    questionObj.wrongAns3 = "d";

    console.log(questionObj)

    return questionObj;
}