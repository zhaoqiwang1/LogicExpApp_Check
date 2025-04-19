
// #region 以下的代码将输入玩家ID那一块的DIV元素调用出来:
const enterIdDiv = document.getElementById('enterID');

const inputElement = enterIdDiv.querySelector('#userInput');
const buttonElement = enterIdDiv.querySelector('#submitButton');
const outputElement = enterIdDiv.querySelector('#outputText');

export const enterIdDivElements = {
    inputElement, 
    buttonElement, 
    outputElement
};
// #endregion


// #region 以下的代码将阶段一的对应的重要元素调用出来:
const phaseOneDiv = document.getElementById('phaseOne-div');
const submitPhaseOneAnswers = phaseOneDiv.querySelector('#phaseTwoPageHTMLButton');

// Item 1:
const phaseOneItem1 = phaseOneDiv.querySelector('#grid-item1');
const phaseOneoutputElementItem1 = phaseOneItem1.querySelector('#outputText');

// Item 2:
const phaseOneItem2 = phaseOneDiv.querySelector('#grid-item2');
const phaseOneoutputElementItem2 = phaseOneItem2.querySelector('#outputText');

// Item 3:
const phaseOneItem3 = phaseOneDiv.querySelector('#grid-item3');
const phaseOneoutputElementItem3 = phaseOneItem3.querySelector('#outputText');

// Item 4:
const phaseOneItem4 = phaseOneDiv.querySelector('#grid-item4');
const phaseOneoutputElementItem4 = phaseOneItem4.querySelector('#outputText');

export const phaseOneDivElements = {
        submitPhaseOneAnswers,

        phaseOneItem1,
        phaseOneoutputElementItem1,

        phaseOneItem2,
        phaseOneoutputElementItem2,

        phaseOneItem3,
        phaseOneoutputElementItem3,

        phaseOneItem4, 
        phaseOneoutputElementItem4

};
// #endregion

// #region 以下的代码将阶段二的对应的重要元素调用出来:

const phaseTwoDiv = document.getElementById('phaseTwo-div');
const submitPhaseTwoAnswers = phaseTwoDiv.querySelector('#phaseThreePageHTMLButton');

// Item 1:
const phaseTwoItem1 = phaseTwoDiv.querySelector('#grid-item1');
const phaseTwoOutputElementItem1 = phaseTwoItem1.querySelector('#outputText');

// Item 2:
const phaseTwoItem2 = phaseTwoDiv.querySelector('#grid-item2');
const phaseTwoOutputElementItem2 = phaseTwoItem2.querySelector('#outputText');

// Item 3:
const phaseTwoItem3 = phaseTwoDiv.querySelector('#grid-item3');
const phaseTwoOutputElementItem3 = phaseTwoItem3.querySelector('#outputText');

// Item 4:
const phaseTwoItem4 = phaseTwoDiv.querySelector('#grid-item4');
const phaseTwoOutputElementItem4 = phaseTwoItem4.querySelector('#outputText');

export const phaseTwoDivElements = {
    submitPhaseTwoAnswers,

    phaseTwoItem1,
    phaseTwoOutputElementItem1,

    phaseTwoItem2,
    phaseTwoOutputElementItem2,

    phaseTwoItem3,
    phaseTwoOutputElementItem3,

    phaseTwoItem4,
    phaseTwoOutputElementItem4,
};
// #endregion


// #region 以下的代码将阶段三Rep Phase2 的对应的重要元素调用出来:
const phase3Rep2Div = document.getElementById('phaseThree-rep-Phase2-div');

// Item 1:
const phase3Rep2DivItem1 = phase3Rep2Div.querySelector('#grid-item1');
const phase3Rep2DivOutputElementItem1 = phase3Rep2DivItem1.querySelector('#outputText');

// Item 2:
const phase3Rep2DivItem2 = phase3Rep2Div.querySelector('#grid-item2');
const phase3Rep2DivOutputElementItem2 = phase3Rep2DivItem2.querySelector('#outputText');

// Item 3:
const phase3Rep2DivItem3 = phase3Rep2Div.querySelector('#grid-item3');
const phase3Rep2DivOutputElementItem3 = phase3Rep2DivItem3.querySelector('#outputText');

// Item 4:
const phase3Rep2DivItem4 = phase3Rep2Div.querySelector('#grid-item4');
const phase3Rep2DivOutputElementItem4 = phase3Rep2DivItem4.querySelector('#outputText');


export const phase3Rep2DivElements = {

    phase3Rep2DivItem1,
    phase3Rep2DivOutputElementItem1,

    phase3Rep2DivItem2,
    phase3Rep2DivOutputElementItem2,

    phase3Rep2DivItem3,
    phase3Rep2DivOutputElementItem3,

    phase3Rep2DivItem4,
    phase3Rep2DivOutputElementItem4,
};

// #endregion


// #region 以下的代码将阶段三 new Arguments 的对应的重要元素调用出来:
const phase3NewArgDiv = document.getElementById('phaseThree-newArg-div');

// Item 1:
const phase3NewArgDivItem1 = phase3NewArgDiv.querySelector('#grid-item1');
const phase3NewArgDivOutputElementItem1 = phase3NewArgDivItem1.querySelector('#outputText');

// Item 2:
const phase3NewArgDivItem2 = phase3NewArgDiv.querySelector('#grid-item2');
const phase3NewArgDivOutputElementItem2 = phase3NewArgDivItem2.querySelector('#outputText');

// Item 3:
const phase3NewArgDivItem3 = phase3NewArgDiv.querySelector('#grid-item3');
const phase3NewArgDivOutputElementItem3 = phase3NewArgDivItem3.querySelector('#outputText');

// Item 4:
const phase3NewArgDivItem4 = phase3NewArgDiv.querySelector('#grid-item4');
const phase3NewArgDivOutputElementItem4 = phase3NewArgDivItem4.querySelector('#outputText');

export const phase3NewArgDivElements = {

    phase3NewArgDivItem1,
    phase3NewArgDivOutputElementItem1,

    phase3NewArgDivItem2,
    phase3NewArgDivOutputElementItem2,

    phase3NewArgDivItem3,
    phase3NewArgDivOutputElementItem3,

    phase3NewArgDivItem4,
    phase3NewArgDivOutputElementItem4,
};

// #endregion



