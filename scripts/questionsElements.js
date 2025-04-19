
const idInput = document.querySelector('input[name="playerId-input"]');
const phase1Item1Input = document.querySelectorAll('input[name="phase1-gridItem1-choice"]');
const phase1Item2Input = document.querySelectorAll('input[name="phase1-gridItem2-choice"]');
const phase1Item3Input = document.querySelectorAll('input[name="phase1-gridItem3-choice"]');
const phase1Item4Input = document.querySelectorAll('input[name="phase1-gridItem4-choice"]');
// 每个阶段因未回答完问题而产生alert的condition 会随着这个阶段需要回答的问题的增多而变得很长。
// 这里，我把这些conditions提前写好，保存为一个string,再在 gamePage.js 对应的 if statement里unstring。
const codeStringPhase1 = '!Array.from(questionInputElements.phase1Item1Input).some(radio => radio.checked) || !Array.from(questionInputElements.phase1Item2Input).some(radio => radio.checked) || !Array.from(questionInputElements.phase1Item3Input).some(radio => radio.checked) || !Array.from(questionInputElements.phase1Item4Input).some(radio => radio.checked)';

export const questionInputElements = {
    idInput,
    phase1Item1Input,
    phase1Item2Input,
    phase1Item3Input,
    phase1Item4Input,
    codeStringPhase1
};

