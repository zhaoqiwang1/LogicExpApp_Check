import {topicArguments, topicsTitle, topicsContent, topicsQuestion, topicArguments_phase3New} from './contents.js'

// #region 给第一阶段的几个topic生成随机的顺序:

let topicsArray = [0, 1, 2, 3]; 
// 0到3分别对应 topicsTitle里的"culture", "technology", "economics", "societal".

function randomizeArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
    }

const randomized_topicsArray = randomizeArray(topicsArray);
// #endregion

// #region 按照上面生成的随机顺序，在第一阶段的四个grids里分别按这个随机顺序展示topics:
export function displayPhase1Topics() {
    document.querySelector('.js-grid-item1-topic-phase1').innerHTML = `
    <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
    <p>${topicsContent[randomized_topicsArray[0]]}</p>
    <hr>
    <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;

    document.querySelector('.js-grid-item2-topic-phase1').innerHTML = `
    <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
    <p>${topicsContent[randomized_topicsArray[1]]}</p>
    <hr>
    <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;

    document.querySelector('.js-grid-item3-topic-phase1').innerHTML = `
    <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
    <p>${topicsContent[randomized_topicsArray[2]]}</p>
    <hr>
    <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;

    document.querySelector('.js-grid-item4-topic-phase1').innerHTML = `
    <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
    <p>${topicsContent[randomized_topicsArray[3]]}</p>
    <hr>
    <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
}
// #endregion


// #region 在阶段二，按照对应的规则给玩家展示阶段二的内容。这里的代码一共分为4部分，分别对应从左到右的4个grids:
// 注意，如果玩家ID为偶数，那么他就被分到FCon里；反之，如果玩家ID为奇数，他就被分到FIcon里。
export function displayPhase2TopicsItem1(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-grid-item1-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-grid-item1-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-grid-item1-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-grid-item1-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    }
}
export function displayPhase2TopicsItem2(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-grid-item2-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-grid-item2-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-grid-item2-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-grid-item2-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    }

}
export function displayPhase2TopicsItem3(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-grid-item3-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-grid-item3-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-grid-item3-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-grid-item3-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    }

}
export function displayPhase2TopicsItem4(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-grid-item4-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-grid-item4-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-grid-item4-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-grid-item4-topic-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    }

}
// #endregion


// #region 在阶段三，重复阶段二的内容。这里的代码一共分为4部分，分别对应从左到右的4个grids:
export function displayPhase3Rep2Item1(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item1-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item1-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item1-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item1-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    }
}
export function displayPhase3Rep2Item2(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item2-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item2-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item2-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item2-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    }

}
export function displayPhase3Rep2Item3(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item3-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item3-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item3-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item3-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    }

}
export function displayPhase3Rep2Item4(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item4-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item4-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item4-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item4-phase3-rep-phase2').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    }

}
// #endregion


// #region 在阶段三， 给被试者在每一个topic下形成一个新的arguments。这里的代码一共分为4部分，分别对应从左到右的4个grids:
export function displayPhase3NewArgItem1(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item1-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item1-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item1-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item1-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[0]]}</h2>
        <p>${topicsContent[randomized_topicsArray[0]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[0]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[0]]}</p>
    `;
    }
}
export function displayPhase3NewArgItem2(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item2-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item2-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item2-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item2-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[1]]}</h2>
        <p>${topicsContent[randomized_topicsArray[1]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[1]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[1]]}</p>
    `;
    }

}
export function displayPhase3NewArgItem3(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item3-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item3-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item3-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item3-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[2]]}</h2>
        <p>${topicsContent[randomized_topicsArray[2]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[2]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[2]]}</p>
    `;
    }

}
export function displayPhase3NewArgItem4(playerId, standPoint) {
    if (playerId % 2 === 0 && standPoint === "是") {
        document.querySelector('.js-item4-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 0 && standPoint === "否") {
        document.querySelector('.js-item4-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "是") {
        document.querySelector('.js-item4-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].supportingArg}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].opposingArg_F}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    } else if (playerId % 2 === 1 && standPoint === "否") {
        document.querySelector('.js-item4-phase3-newArg').innerHTML = `
        <h2>${topicsTitle[randomized_topicsArray[3]]}</h2>
        <p>${topicsContent[randomized_topicsArray[3]]}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].topic_text}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].supportingArg_F}</p>
        <p>${topicArguments_phase3New[randomized_topicsArray[3]].opposingArg}</p>
        <hr>
        <p>${topicsQuestion[randomized_topicsArray[3]]}</p>
    `;
    }

}
// #endregion