import {displayPhase1Topics, displayPhase2TopicsItem1, displayPhase2TopicsItem2,displayPhase2TopicsItem3,displayPhase2TopicsItem4, displayPhase3Rep2Item1, displayPhase3Rep2Item2, displayPhase3Rep2Item3, displayPhase3Rep2Item4,displayPhase3NewArgItem1,displayPhase3NewArgItem2,displayPhase3NewArgItem3,displayPhase3NewArgItem4} from './displayTopics.js'
import { enterIdDivElements, phaseOneDivElements, phaseTwoDivElements, phase3Rep2DivElements, phase3NewArgDivElements } from './getHtmlElements.js';
import { questionInputElements } from './questionsElements.js';
/*
const inputElement = document.getElementById('userInput');
const buttonElement = document.getElementById('submitButton');
const outputElement = document.getElementById('outputText');
*/
let idValue;


enterIdDivElements.buttonElement.addEventListener('click', function () {
    // #region 首先，被试者需要输入他们的玩家ID:
    // idValue = enterIdDivElements.inputElement.value;
    idValue = questionInputElements.idInput.value;
    console.log(questionInputElements.idInput);
    // 如果没有输入玩家ID，会有以下的警报：
    if (idValue.trim() === '') {
        alert('请输入你的玩家ID。');
    } else { 

    enterIdDivElements.outputElement.textContent = `你输入的内容是: ${idValue}`;
    console.log(idValue);
    console.log(idValue % 2);
    const displayPhaseOneDiv = document.getElementById('phaseOne-div');
    displayPhaseOneDiv.classList.remove('hidden');
    // #endregion

    // #region 按照生成的随机顺序，展示第一阶段的几个topics:
    displayPhase1Topics();
    // #endregion

    phaseOneDivElements.submitPhaseOneAnswers.addEventListener('click', function () {
        // --  如果第一阶段有任何一个问题没有回答，以下code会发送alert:
            if (eval(questionInputElements.codeStringPhase1)) {
                alert('这一阶段你有未回答的问题，请回答所有的问题。');
            } else {
        //--
        
        // #region 点击进入第二阶段后，把第二阶段的div展示出来:
        const displayPhaseTwoDiv = document.getElementById('phaseTwo-div');
        displayPhaseTwoDiv.classList.remove('hidden');
        // #endregion

        // #region 点击第一阶段几个topic的立场之后，收集其点击的数据: 
        const phaseOneSelectedChoiceItem1 = phaseOneDivElements.phaseOneItem1.querySelector('input[name="phase1-gridItem1-choice"]:checked');

        const phaseOneSelectedChoiceItem2 = phaseOneDivElements.phaseOneItem2.querySelector('input[name="phase1-gridItem2-choice"]:checked');

        const phaseOneSelectedChoiceItem3 = phaseOneDivElements.phaseOneItem3.querySelector('input[name="phase1-gridItem3-choice"]:checked');

        const phaseOneSelectedChoiceItem4 = phaseOneDivElements.phaseOneItem4.querySelector('input[name="phase1-gridItem4-choice"]:checked');
        // #endregion

        // #region 点击第一阶段几个topic的立场之后，将玩家的立场选择展示在每个topic对应的位置下方: 
        if (phaseOneSelectedChoiceItem1) {
            phaseOneDivElements.phaseOneoutputElementItem1.textContent = `你的立场是: ${phaseOneSelectedChoiceItem1.value}`;
        } else {
            phaseOneDivElements.phaseOneoutputElementItem1.textContent = `你的立场是: 请做出选择`;
        }

        if (phaseOneSelectedChoiceItem2) {
            phaseOneDivElements.phaseOneoutputElementItem2.textContent = `你的立场是: ${phaseOneSelectedChoiceItem2.value}`;
        } else {
            phaseOneDivElements.phaseOneoutputElementItem2.textContent = `你的立场是: 请做出选择`;
        }

        if (phaseOneSelectedChoiceItem3) {
            phaseOneDivElements.phaseOneoutputElementItem3.textContent = `你的立场是: ${phaseOneSelectedChoiceItem3.value}`;
        } else {
            phaseOneDivElements.phaseOneoutputElementItem3.textContent = `你的立场是: 请做出选择`;
        }

        if (phaseOneSelectedChoiceItem4) {
            phaseOneDivElements.phaseOneoutputElementItem4.textContent = `你的立场是: ${phaseOneSelectedChoiceItem4.value}`;
        } else {
            phaseOneDivElements.phaseOneoutputElementItem4.textContent = `你的立场是: 请做出选择`;
        }
        // #endregion

            // #region Randomly Display our Topics in Phase Two.
            displayPhase2TopicsItem1(idValue, phaseOneSelectedChoiceItem1.value);
            displayPhase2TopicsItem2(idValue, phaseOneSelectedChoiceItem2.value);
            displayPhase2TopicsItem3(idValue, phaseOneSelectedChoiceItem3.value);
            displayPhase2TopicsItem4(idValue, phaseOneSelectedChoiceItem4.value);
            // #endregion
            
            phaseTwoDivElements.submitPhaseTwoAnswers.addEventListener('click', function () {
                // 以下代码检查第二阶段是否有未回答的问题：
                
             //   const phase2Inputs = document.querySelectorAll('#phaseTwo-div input');
              //  console.log(phase2Inputs);
               // console.log(phase2Inputs[2].value);
               // for (let i = 0; i < phase2Inputs.length; i++) {
               //     if (phase2Inputs[i].value === '') {
               //         alert('有问题未回答，请检查！');
               //         return;
              //      } else {

                    

                
                // #region 点击进入第三阶段后，把第三阶段的div展示出来:
                 const displayPhaseThreeEssayDiv = document.getElementById('phaseThree-essay-div');
                 displayPhaseThreeEssayDiv.classList.remove('hidden');
                // #endregion

                // #region 收集阶段二的问题回答数据: 
                // Item 1:
                const phaseTwoSelectedReadItem1 = phaseTwoDivElements.phaseTwoItem1.querySelector('input[name="phase2-Item1-read"]:checked');
                const phaseTwoSelectedQual1Item1 = phaseTwoDivElements.phaseTwoItem1.querySelector('input[name="phase2-Item1-quality1"]:checked');
                const phaseTwoSelectedQual2Item1 = phaseTwoDivElements.phaseTwoItem1.querySelector('input[name="phase2-Item1-quality2"]:checked');
                const phaseTwoSelectedChoiceItem1 = phaseTwoDivElements.phaseTwoItem1.querySelector('input[name="phase2-gridItem1-choice"]:checked');
                // Item 2:
                const phaseTwoSelectedReadItem2 = phaseTwoDivElements.phaseTwoItem2.querySelector('input[name="phase2-Item2-read"]:checked');
                const phaseTwoSelectedQual1Item2 = phaseTwoDivElements.phaseTwoItem2.querySelector('input[name="phase2-Item2-quality1"]:checked');
                const phaseTwoSelectedQual2Item2 = phaseTwoDivElements.phaseTwoItem2.querySelector('input[name="phase2-Item2-quality2"]:checked');
                const phaseTwoSelectedChoiceItem2 = phaseTwoDivElements.phaseTwoItem2.querySelector('input[name="phase2-gridItem2-choice"]:checked');
                // Item 3:
                const phaseTwoSelectedReadItem3 = phaseTwoDivElements.phaseTwoItem3.querySelector('input[name="phase2-Item3-read"]:checked');
                const phaseTwoSelectedQual1Item3 = phaseTwoDivElements.phaseTwoItem3.querySelector('input[name="phase2-Item3-quality1"]:checked');
                const phaseTwoSelectedQual2Item3 = phaseTwoDivElements.phaseTwoItem3.querySelector('input[name="phase2-Item3-quality2"]:checked');
                const phaseTwoSelectedChoiceItem3 = phaseTwoDivElements.phaseTwoItem3.querySelector('input[name="phase2-gridItem3-choice"]:checked');
                // Item 4:
                const phaseTwoSelectedReadItem4 = phaseTwoDivElements.phaseTwoItem4.querySelector('input[name="phase2-Item4-read"]:checked');
                const phaseTwoSelectedQual1Item4 = phaseTwoDivElements.phaseTwoItem4.querySelector('input[name="phase2-Item4-quality1"]:checked');
                const phaseTwoSelectedQual2Item4 = phaseTwoDivElements.phaseTwoItem4.querySelector('input[name="phase2-Item4-quality2"]:checked');
                const phaseTwoSelectedChoiceItem4 = phaseTwoDivElements.phaseTwoItem4.querySelector('input[name="phase2-gridItem4-choice"]:checked');

                // #endregion

                // #region 收集完玩家在第二阶段的回答后，展示其回答在问题的下方: 
                if (
                    phaseTwoSelectedChoiceItem1,phaseTwoSelectedReadItem1,phaseTwoSelectedQual1Item1,
                    phaseTwoSelectedQual2Item1
                ) {
                    phaseTwoDivElements.phaseTwoOutputElementItem1.textContent = `你选择的阅读是：${phaseTwoSelectedReadItem1.value}。观点一打分为：${phaseTwoSelectedQual1Item1.value}, 观点二打分为${phaseTwoSelectedQual2Item1.value}。你的立场是: ${phaseTwoSelectedChoiceItem1.value}`;
                } else {
                    phaseTwoDivElements.phaseTwoOutputElementItem1.textContent = `请做出选择`;
                }

                if (
                    phaseTwoSelectedChoiceItem2,phaseTwoSelectedReadItem2,phaseTwoSelectedQual1Item2,
                    phaseTwoSelectedQual2Item2
                ) {
                    phaseTwoDivElements.phaseTwoOutputElementItem2.textContent = `你选择的阅读是：${phaseTwoSelectedReadItem2.value}。观点一打分为：${phaseTwoSelectedQual1Item2.value}, 观点二打分为${phaseTwoSelectedQual2Item2.value}。你的立场是: ${phaseTwoSelectedChoiceItem2.value}`;
                } else {
                    phaseTwoDivElements.phaseTwoOutputElementItem2.textContent = `请做出选择`;
                }

                if (
                    phaseTwoSelectedChoiceItem3,phaseTwoSelectedReadItem3,phaseTwoSelectedQual1Item3,
                    phaseTwoSelectedQual2Item3
                ) {
                    phaseTwoDivElements.phaseTwoOutputElementItem3.textContent = `你选择的阅读是：${phaseTwoSelectedReadItem3.value}。观点一打分为：${phaseTwoSelectedQual1Item3.value}, 观点二打分为${phaseTwoSelectedQual2Item3.value}。你的立场是: ${phaseTwoSelectedChoiceItem3.value}`;
                } else {
                    phaseTwoDivElements.phaseTwoOutputElementItem3.textContent = `请做出选择`;
                }

                if (
                    phaseTwoSelectedChoiceItem4,phaseTwoSelectedReadItem4,phaseTwoSelectedQual1Item4,
                    phaseTwoSelectedQual2Item4
                ) {
                    phaseTwoDivElements.phaseTwoOutputElementItem4.textContent = `你选择的阅读是：${phaseTwoSelectedReadItem4.value}。观点一打分为：${phaseTwoSelectedQual1Item4.value}, 观点二打分为${phaseTwoSelectedQual2Item4.value}。你的立场是: ${phaseTwoSelectedChoiceItem4.value}`;
                } else {
                    phaseTwoDivElements.phaseTwoOutputElementItem4.textContent = `请做出选择`;
                }

                // #endregion
                
               const repeatPhase2Button = document.querySelector('.js-phase3-ctn-rep-phase2');
               repeatPhase2Button.addEventListener('click', function () {
                    const displayPhase3RepPhase2Div = document.getElementById('phaseThree-rep-Phase2-div');
                    displayPhase3RepPhase2Div.classList.remove('hidden');

                    // #region Randomly Display our Topics in Phase Two.
                    displayPhase3Rep2Item1(idValue, phaseOneSelectedChoiceItem1.value);
                    displayPhase3Rep2Item2(idValue, phaseOneSelectedChoiceItem2.value);
                    displayPhase3Rep2Item3(idValue, phaseOneSelectedChoiceItem3.value);
                    displayPhase3Rep2Item4(idValue, phaseOneSelectedChoiceItem4.value);
                    // #endregion

                        const startNewArgPhase3Button =  document.querySelector('.js-phase3-ctn-new-args');
                        startNewArgPhase3Button.addEventListener('click', function () {
                            const displayPhase3NewArgDiv = document.getElementById('phaseThree-newArg-div');
                            displayPhase3NewArgDiv.classList.remove('hidden');

                            // #region 收集阶段三重复阶段二的问题回答数据: 
                            // Item 1:
                            const phase3Rep2SelectedReadItem1 = phase3Rep2DivElements.phase3Rep2DivItem1.querySelector('input[name="phase3Rep2-Item1-read"]:checked');
                            const phase3Rep2SelectedQual1Item1 = phase3Rep2DivElements.phase3Rep2DivItem1.querySelector('input[name="phase3Rep2-Item1-quality1"]:checked');
                            const phase3Rep2SelectedQual2Item1 = phase3Rep2DivElements.phase3Rep2DivItem1.querySelector('input[name="phase3Rep2-Item1-quality2"]:checked');
                            const phase3Rep2SelectedChoiceItem1 = phase3Rep2DivElements.phase3Rep2DivItem1.querySelector('input[name="phase3Rep2-gridItem1-choice"]:checked');
                            
                            // Item 2:
                            const phase3Rep2SelectedReadItem2 = phase3Rep2DivElements.phase3Rep2DivItem2.querySelector('input[name="phase3Rep2-Item2-read"]:checked');
                            const phase3Rep2SelectedQual1Item2 = phase3Rep2DivElements.phase3Rep2DivItem2.querySelector('input[name="phase3Rep2-Item2-quality1"]:checked');
                            const phase3Rep2SelectedQual2Item2 = phase3Rep2DivElements.phase3Rep2DivItem2.querySelector('input[name="phase3Rep2-Item2-quality2"]:checked');
                            const phase3Rep2SelectedChoiceItem2 = phase3Rep2DivElements.phase3Rep2DivItem2.querySelector('input[name="phase3Rep2-gridItem2-choice"]:checked');

                            // Item 3:
                            const phase3Rep2SelectedReadItem3 = phase3Rep2DivElements.phase3Rep2DivItem3.querySelector('input[name="phase3Rep2-Item3-read"]:checked');
                            const phase3Rep2SelectedQual1Item3 = phase3Rep2DivElements.phase3Rep2DivItem3.querySelector('input[name="phase3Rep2-Item3-quality1"]:checked');
                            const phase3Rep2SelectedQual2Item3 = phase3Rep2DivElements.phase3Rep2DivItem3.querySelector('input[name="phase3Rep2-Item3-quality2"]:checked');
                            const phase3Rep2SelectedChoiceItem3 = phase3Rep2DivElements.phase3Rep2DivItem3.querySelector('input[name="phase3Rep2-gridItem3-choice"]:checked');

                            // Item 4:
                            const phase3Rep2SelectedReadItem4 = phase3Rep2DivElements.phase3Rep2DivItem4.querySelector('input[name="phase3Rep2-Item4-read"]:checked');
                            const phase3Rep2SelectedQual1Item4 = phase3Rep2DivElements.phase3Rep2DivItem4.querySelector('input[name="phase3Rep2-Item4-quality1"]:checked');
                            const phase3Rep2SelectedQual2Item4 = phase3Rep2DivElements.phase3Rep2DivItem4.querySelector('input[name="phase3Rep2-Item4-quality2"]:checked');
                            const phase3Rep2SelectedChoiceItem4 = phase3Rep2DivElements.phase3Rep2DivItem4.querySelector('input[name="phase3Rep2-gridItem4-choice"]:checked');
                            // #endregion

                            // #region 收集完玩家在phase3Rep2的回答后，展示其回答在问题的下方
                            if (
                                phase3Rep2SelectedReadItem1,phase3Rep2SelectedQual1Item1,phase3Rep2SelectedQual2Item1,
                                phase3Rep2SelectedChoiceItem1
                            ) {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem1.textContent = `你选择的阅读是：${phase3Rep2SelectedReadItem1.value}。观点一打分为：${phase3Rep2SelectedQual1Item1.value}, 观点二打分为${phase3Rep2SelectedQual2Item1.value}。你的立场是: ${phase3Rep2SelectedChoiceItem1.value}`;
                            } else {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem1.textContent = `请做出选择`;
                            }

                            if (
                                phase3Rep2SelectedReadItem2,phase3Rep2SelectedQual1Item2,phase3Rep2SelectedQual2Item2,
                                phase3Rep2SelectedChoiceItem2
                            ) {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem2.textContent = `你选择的阅读是：${phase3Rep2SelectedReadItem2.value}。观点一打分为：${phase3Rep2SelectedQual1Item2.value}, 观点二打分为${phase3Rep2SelectedQual2Item2.value}。你的立场是: ${phase3Rep2SelectedChoiceItem2.value}`;
                            } else {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem2.textContent = `请做出选择`;
                            }

                            if (
                                phase3Rep2SelectedReadItem3,phase3Rep2SelectedQual1Item3,phase3Rep2SelectedQual2Item3,
                                phase3Rep2SelectedChoiceItem3
                            ) {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem3.textContent = `你选择的阅读是：${phase3Rep2SelectedReadItem3.value}。观点一打分为：${phase3Rep2SelectedQual1Item3.value}, 观点二打分为${phase3Rep2SelectedQual2Item3.value}。你的立场是: ${phase3Rep2SelectedChoiceItem3.value}`;
                            } else {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem3.textContent = `请做出选择`;
                            }

                            if (
                                phase3Rep2SelectedReadItem4,phase3Rep2SelectedQual1Item4,phase3Rep2SelectedQual2Item4,
                                phase3Rep2SelectedChoiceItem4
                            ) {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem4.textContent = `你选择的阅读是：${phase3Rep2SelectedReadItem4.value}。观点一打分为：${phase3Rep2SelectedQual1Item4.value}, 观点二打分为${phase3Rep2SelectedQual2Item4.value}。你的立场是: ${phase3Rep2SelectedChoiceItem4.value}`;
                            } else {
                                phase3Rep2DivElements.phase3Rep2DivOutputElementItem4.textContent = `请做出选择`;
                            }
                            // #endregion
 
                            // #region Randomly Display our Topics in Phase Three - new Arguments.
                            displayPhase3NewArgItem1(idValue, phaseOneSelectedChoiceItem1.value);
                            displayPhase3NewArgItem2(idValue, phaseOneSelectedChoiceItem2.value);
                            displayPhase3NewArgItem3(idValue, phaseOneSelectedChoiceItem3.value);
                            displayPhase3NewArgItem4(idValue, phaseOneSelectedChoiceItem4.value);
                            // #endregion

                                const endGameButton =  document.querySelector('.js-phase3-endGame');
                                endGameButton.addEventListener('click', function () {

                                    // #region 收集阶段三 New Arg  部分的问题回答数据: 
                                    // Item 1:
                                    const phase3NewArgSelectedReadItem1 = phase3NewArgDivElements.phase3NewArgDivItem1.querySelector('input[name="phase3newArg-Item1-read"]:checked');
                                    const phase3NewArgSelectedQual1Item1 = phase3NewArgDivElements.phase3NewArgDivItem1.querySelector('input[name="phase3newArg-Item1-quality1"]:checked');
                                    const phase3NewArgSelectedQual2Item1 = phase3NewArgDivElements.phase3NewArgDivItem1.querySelector('input[name="phase3newArg-Item1-quality2"]:checked');
                                    const phase3NewArgSelectedChoiceItem1 = phase3NewArgDivElements.phase3NewArgDivItem1.querySelector('input[name="phase3newArg-gridItem1-choice"]:checked');
                                    // Item 2:
                                    const phase3NewArgSelectedReadItem2 = phase3NewArgDivElements.phase3NewArgDivItem2.querySelector('input[name="phase3newArg-Item2-read"]:checked');
                                    const phase3NewArgSelectedQual1Item2 = phase3NewArgDivElements.phase3NewArgDivItem2.querySelector('input[name="phase3newArg-Item2-quality1"]:checked');
                                    const phase3NewArgSelectedQual2Item2 = phase3NewArgDivElements.phase3NewArgDivItem2.querySelector('input[name="phase3newArg-Item2-quality2"]:checked');
                                    const phase3NewArgSelectedChoiceItem2 = phase3NewArgDivElements.phase3NewArgDivItem2.querySelector('input[name="phase3newArg-gridItem2-choice"]:checked');
                                    // Item 3:
                                    const phase3NewArgSelectedReadItem3 = phase3NewArgDivElements.phase3NewArgDivItem3.querySelector('input[name="phase3newArg-Item3-read"]:checked');
                                    const phase3NewArgSelectedQual1Item3 = phase3NewArgDivElements.phase3NewArgDivItem3.querySelector('input[name="phase3newArg-Item3-quality1"]:checked');
                                    const phase3NewArgSelectedQual2Item3 = phase3NewArgDivElements.phase3NewArgDivItem3.querySelector('input[name="phase3newArg-Item3-quality2"]:checked');
                                    const phase3NewArgSelectedChoiceItem3 = phase3NewArgDivElements.phase3NewArgDivItem3.querySelector('input[name="phase3newArg-gridItem3-choice"]:checked');
                                    // Item 4:
                                    const phase3NewArgSelectedReadItem4 = phase3NewArgDivElements.phase3NewArgDivItem4.querySelector('input[name="phase3newArg-Item4-read"]:checked');
                                    const phase3NewArgSelectedQual1Item4 = phase3NewArgDivElements.phase3NewArgDivItem4.querySelector('input[name="phase3newArg-Item4-quality1"]:checked');
                                    const phase3NewArgSelectedQual2Item4 = phase3NewArgDivElements.phase3NewArgDivItem4.querySelector('input[name="phase3newArg-Item4-quality2"]:checked');
                                    const phase3NewArgSelectedChoiceItem4 = phase3NewArgDivElements.phase3NewArgDivItem4.querySelector('input[name="phase3newArg-gridItem4-choice"]:checked');
                                    // #endregion


                                    // #region 收集完玩家在阶段三 New Arg 的回答后，展示其回答在问题的下方 
                                    if (
                                        phase3NewArgSelectedReadItem1,phase3NewArgSelectedQual1Item1,phase3NewArgSelectedQual2Item1,
                                        phase3NewArgSelectedChoiceItem1
                                    ) {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem1.textContent = `你选择的阅读是：${phase3NewArgSelectedReadItem1.value}。观点一打分为：${phase3NewArgSelectedQual1Item1.value}, 观点二打分为${phase3NewArgSelectedQual2Item1.value}。你的立场是: ${phase3NewArgSelectedChoiceItem1.value}`;
                                    } else {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem1.textContent = `请做出选择`;
                                    }

                                    if (
                                        phase3NewArgSelectedReadItem2,phase3NewArgSelectedQual1Item2,phase3NewArgSelectedQual2Item2,
                                        phase3NewArgSelectedChoiceItem2
                                    ) {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem2.textContent = `你选择的阅读是：${phase3NewArgSelectedReadItem2.value}。观点一打分为：${phase3NewArgSelectedQual1Item2.value}, 观点二打分为${phase3NewArgSelectedQual2Item2.value}。你的立场是: ${phase3NewArgSelectedChoiceItem2.value}`;
                                    } else {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem2.textContent = `请做出选择`;
                                    }

                                    if (
                                        phase3NewArgSelectedReadItem3,phase3NewArgSelectedQual1Item3,phase3NewArgSelectedQual2Item3,
                                        phase3NewArgSelectedChoiceItem3
                                    ) {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem3.textContent = `你选择的阅读是：${phase3NewArgSelectedReadItem3.value}。观点一打分为：${phase3NewArgSelectedQual1Item3.value}, 观点二打分为${phase3NewArgSelectedQual2Item3.value}。你的立场是: ${phase3NewArgSelectedChoiceItem3.value}`;
                                    } else {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem3.textContent = `请做出选择`;
                                    }

                                    if (
                                        phase3NewArgSelectedReadItem4,phase3NewArgSelectedQual1Item4,phase3NewArgSelectedQual2Item4,
                                        phase3NewArgSelectedChoiceItem4
                                    ) {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem4.textContent = `你选择的阅读是：${phase3NewArgSelectedReadItem4.value}。观点一打分为：${phase3NewArgSelectedQual1Item4.value}, 观点二打分为${phase3NewArgSelectedQual2Item4.value}。你的立场是: ${phase3NewArgSelectedChoiceItem4.value}`;
                                    } else {
                                        phase3NewArgDivElements.phase3NewArgDivOutputElementItem4.textContent = `请做出选择`;
                                    }
                                    // #endregion



                                });

                        });


               });
       //    }} // 给第二阶段没有回答问题加 alert
            });
        } // 给第一阶段没有选择任何选项加alert

    });
}// 给没有输入玩家ID加alert
});
console.log(idValue);
console.log(idValue % 2);



/*
const openPhaseTwoPageHTMLButton = document.getElementById('phaseTwoPageHTMLButton');
openPhaseTwoPageHTMLButton.addEventListener('click', function() {
            const displayPhaseTwoDiv = document.getElementById('phaseTwo-div');
            displayPhaseTwoDiv.classList.remove('hidden');
    });
const openPhaseThreePageHTMLButton = document.getElementById('phaseThreePageHTMLButton');
openPhaseThreePageHTMLButton.addEventListener('click', function() {
            const displayPhaseThreeDiv = document.getElementById('phaseThree-div');
            displayPhaseThreeDiv.classList.remove('hidden');
    });
*/

