let question_numb=1;
const question1= {
    "question": "6*6=",
    "answers":
    [
        {
            "answer":"36",
            "isTrue":"true"
        },
        {
            "answer":"99",
            "isTrue":"false"
        },
        {
            "answer":"23",
            "isTrue":"false"
        },
        {
            "answer":"6",
            "isTrue":"false"
        }
    ]
}
const question2 = {
    "question": "6+6=",
    "answers":
    [
        {
            "answer":"36",
            "isTrue":"false"
        },
        {
            "answer":"26",
            "isTrue":"false"
        },
        {
            "answer":"6",
            "isTrue":"false"
        },
        {
            "answer":"12",
            "isTrue":"true"
        }
    ]
}
const question3 ={
    "question": "6-6=",
    "answers":
    [
        {
            "answer":"12",
            "isTrue":"false"

        },
        {
            "answer":"5",
            "isTrue":"false"
        },
        {
            "answer":"0",
            "isTrue":"true"
        },
        {
            "answer":"6",
            "isTrue":"false"
        }
    ]
}

const question4= {
    "question": "6+6*6=",
    "answers":
    [
        {
            "answer":"43",
            "isTrue":"false"

        },
        {
            "answer":"42",
            "isTrue":"true"
        },
        {
            "answer":"56",
            "isTrue":"false"
        },
        {
            "answer":"36",
            "isTrue":"false"
        }
    ]
}
const question5 = {
    "question": "6+6-66=",
    "answers":
    [
        {
            "answer":"-6",
            "isTrue":"false"
        },
        {
            "answer":"-54",
            "isTrue":"true"
        },
        {
            "answer":"54",
            "isTrue":"false"
        },
        {
            "answer":"-3",
            "isTrue":"false"
        }
    ]
}
const question6 = {
    "question": "66+66=",
    "answers":
    [
        {
            "answer":"132",
            "isTrue":"true"
        },
        {
            "answer":"113",
            "isTrue":"false"
        },
        {
            "answer":"125",
            "isTrue":"false"
        },
        {
            "answer":"166",
            "isTrue":"false"
        }
    ]
}
const question7 = {
    "question": "66-6=",
    "answers":
    [
        {
            "answer":"7",
            "isTrue":"false"
        },
        {
            "answer":"66",
            "isTrue":"false"
        },
        {
            "answer":"55",
            "isTrue":"false"
        },
        {
            "answer":"60",
            "isTrue":"true"
        }
    ]
}
const question8 = {
    "question": "66*6=",
    "answers":
    [
        {
            "answer":"396",
            "isTrue":"true"

        },
        {
            "answer":"33",
            "isTrue":"false"
        },
        {
            "answer":"666",
            "isTrue":"false"
        },
        {
            "answer":"344",
            "isTrue":"false"
        }
    ]
}
const question9 = {
    "question": "6+6+6=",
    "answers":
    [
        {
            "answer":"18",
            "isTrue":"true"
        },
        {
            "answer":"666",
            "isTrue":"false"
        },
        {
            "answer":"188",
            "isTrue":"false"
        },
        {
            "answer":"12",
            "isTrue":"false"
        }
    ]
}
const question10 = {
    "question": "6*6*6=",
    "answers":
    [
        {
            "answer":"216",
            "isTrue":"true"

        },
        {
            "answer":"66",
            "isTrue":"false"
        },
        {
            "answer":"26",
            "isTrue":"false"
        },
        {
            "answer":"36",
            "isTrue":"false"
        }
    ]
}
let questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]

function nextQuestion() {
    let question = document.getElementById('question');
    let answer1=document.getElementById('answer1');
    let answer2=document.getElementById('answer2');
    let answer3=document.getElementById('answer3');
    let answer4=document.getElementById('answer4');
    let result=document.getElementById('res');

    if (Number(question.dataset.numb) == 10){
        let res = document.getElementById('res')

        result.innerText='Правельных ответов: ' + res.dataset.answer;
        question.remove();
        answer1.remove();
        answer2.remove();
        answer3.remove();
        answer4.remove();
    } else {
    question.innerText=questions[Number(question.dataset.numb)].question;
    answer1.innerText=questions[Number(question.dataset.numb)].answers[0].answer;
    answer2.innerText=questions[Number(question.dataset.numb)].answers[1].answer;
    answer3.innerText=questions[Number(question.dataset.numb)].answers[2].answer;
    answer4.innerText=questions[Number(question.dataset.numb)].answers[3].answer;

    answer1.dataset.is_true=questions[Number(question.dataset.numb)].answers[0].isTrue;
    answer2.dataset.is_true=questions[Number(question.dataset.numb)].answers[1].isTrue;
    answer3.dataset.is_true=questions[Number(question.dataset.numb)].answers[2].isTrue;
    answer4.dataset.is_true=questions[Number(question.dataset.numb)].answers[3].isTrue;
    }
}

function start() {
    let question = document.getElementById('question');
    let answer1=document.getElementById('answer1');
    let answer2=document.getElementById('answer2');
    let answer3=document.getElementById('answer3');
    let answer4=document.getElementById('answer4');

    question.innerText=question1.question;
    console.log(question.innerText)
    answer1.innerText=question1.answers[0].answer;
    answer2.innerText=question1.answers[1].answer;
    answer3.innerText=question1.answers[2].answer;
    answer4.innerText=question1.answers[3].answer;

    answer1.dataset.is_true=question1.answers[0].isTrue;
    answer2.dataset.is_true=question1.answers[1].isTrue;
    answer3.dataset.is_true=question1.answers[2].isTrue;
    answer4.dataset.is_true=question1.answers[3].isTrue;
    event.srcElement.remove()
}

function isTrue() {
    let question = document.getElementById('question');
    let answer = document.getElementById(event.srcElement.id);
    console.log(answer)

    let res = document.getElementById('res')
    console.log(answer.dataset.is_true);
    if (answer.dataset.is_true=='true'){
        res.dataset.answer= Number(res.dataset.answer)+1;
        console.log(res.dataset.answer);
    }
    question.dataset.numb=Number(question.dataset.numb)+1;
    nextQuestion();
}