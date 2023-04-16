const headElem = document.getElementById('head');
const buttonsElem = document.getElementById('buttons');
const pagesElem = document.getElementById('pages');

class Quiz {
    constructor(type, questions, results) {
        //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
        this.type = type;

        //Массив с вопросами
        this.questions = questions;

        //Массив с возможными результатами
        this.results = results;

        //Количество набранных очков
        this.score = 0;

        //Номер результата из массива
        this.result = 0;

        //Номер текущего вопроса
        this.current = 0;
    }

    Click(index) {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        //Если было добавлено хотя одно очко, то считаем, что ответ верный
        if (value >= 1) {
            correct = index;
        } else {
            //Иначе ищем, какой ответ может быть правильным
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    //Переход к следующему вопросу
    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

//Класс, представляющий вопрос
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

//Класс, представляющий ответ
class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

//Класс, представляющий результат
class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    //Этот метод проверяет, достаточно ли очков набрал пользователь
    Check(value) {
        if (this.value <= value) {
            return true;
        } else {
            return false;
        }
    }
}

//Массив с результатами
const results = [
    new Result('Вам многому нужно научиться', 0),
    new Result('Вы уже неплохо разбираетесь', 7),
    new Result('Ваш уровень выше среднего', 12),
    new Result('Вы в совершенстве знаете тему', 16),
];

//Массив с вопросами
const questions = [
    new Question('Что позволяет вычислить алгоритм Евклида?', [
        new Answer('Производную числа', 0),
        new Answer('Наибольший общий делитель', 1),
        new Answer('Среднее арифметическое двух чисел', 0),
        new Answer('Остаток от деления двух чисел', 0),
    ]),

    new Question('Определите НОД двух чисел 24 и 36, используя алгоритм Евклида. Результат будет равен:', [
        new Answer('24', 0),
        new Answer('36', 0),
        new Answer('12', 1),
        new Answer('72', 0),
    ]),

    new Question('Как называется натуральное число, которое не имеет делителей, кроме самого себя и единицы?', [
        new Answer('Простое число', 1),
        new Answer('составное число', 0),
        new Answer('каноническое число ', 0),
        new Answer('криптографическое число ', 0),
    ]),

    new Question('Как называются числа, не имеющие общих делителей кроме единицы?', [
        new Answer('Числа Эйлера', 0),
        new Answer('Взаимно простые числа', 1),
        new Answer('Канонические числа', 0),
        new Answer('Криптографические числа', 0),
    ]),

    new Question('Результат выполнения фрагмента программы: while XY do if X>Y then X:=X-Y else Y:=Y–X при X=34 и Y=56 будет равен:', [
        new Answer('12', 0),
        new Answer('2', 1),
        new Answer('22', 0),
        new Answer('952', 0),
    ]),

    new Question('Чему будет равно значение переменной А при X=34 и Y=56 в результате выполнения условного оператора: if X>Y then А:=X-Y else А:=Y–X?', [
        new Answer('2', 0),
        new Answer('12', 0),
        new Answer('22', 1),
        new Answer('952', 0),
    ]),

    new Question('В геометрической трактовке алгоритма Евклида какое математическое действие следует выполнять с длинами анализируемых отрезков?', [
        new Answer('Сумму', 0),
        new Answer('Произведение', 0),
        new Answer('Частное', 0),
        new Answer('Разность', 1),
    ]),

    new Question('Выберите вариант ответа, содержащий только взаимно простые числа', [
        new Answer('3, 5, 19, 38 ', 0),
        new Answer('5, 9, 27, 54 ', 0),
        new Answer('4, 7, 15, 59 ', 1),
        new Answer('7, 27, 77, 147 ', 0),
    ]),

    new Question('Выберите вариант ответа, содержащий только простые числа', [
        new Answer('2, 6, 18, 39, 58, 117 ', 0),
        new Answer('3, 7, 19, 39, 59, 101 ', 0),
        new Answer('2, 11, 31, 61, 101, 131 ', 1),
        new Answer('2, 7, 17, 37, 57, 107 ', 0),
    ]),

    new Question('Функция Эйлера - это...', [
        new Answer('Функция, которая не равна количеству равных чисел, больших m и простых с m', 0),
        new Answer('Функция, осуществляющая преобразование массива входных данных произвольной длины в выходную битовую строку установленной длины, выполняемое определённым алгоритмом.', 0),
        new Answer('Функция, которая равна количеству натуральных чисел, меньших m и взаимно простых с m.', 1),
        new Answer('Не знаю', 0),
    ]),

    new Question('Разложите число 56 на множители(каноническое разложение)', [
        new Answer('2^3*7', 1),
        new Answer('2^3*6', 0),
        new Answer('4^3*7', 0),
        new Answer('2^2*7', 0),
    ]),

    new Question('Сравнимыми по модулю m называются? ', [
        new Answer('Взаимно простые числа, разность которых делится на m', 0),
        new Answer('Простые числа, разность которых делится на m', 0),
        new Answer('Целые числа, разность которых делится на m', 1),
        new Answer('Не знаю', 0),
    ]),

    new Question('Буфер — это…', [
        new Answer('Область памяти где расположены значения констант программы', 0),
        new Answer('Запоминающее устройство, содержащее управляющие программы', 0),
        new Answer('Область памяти для временного хранения информации', 1),
        new Answer('Не знаю', 0),
    ]),

    new Question('Как вычисляется сравнение по модулю?', [
        new Answer('a ≡ b (mod m)', 1),
        new Answer('p ≡ a (mod m).', 0),
        new Answer('m ≡ b (mod a).', 0),
        new Answer('a ≡ m (mod b).', 0),
    ]),

    new Question('Какие значения может принимать символ Лежандра?', [
        new Answer('1 и -1', 0),
        new Answer('0 и 1', 0),
        new Answer('0 и -1', 0),
        new Answer('0, 1 и -1', 1),
    ]),

    new Question('Символ Лежандра - это... ', [
        new Answer('Это функция, определенная для всех целых чисел a и нечетных целых чисел n.', 0),
        new Answer('Это функция, определенная, если a — любое целое число, а p — простое число, превышающее 2.', 1),
        new Answer('Определяет числа как составные или вероятно простые.', 0),
        new Answer('Не знаю', 0),
    ]),

    new Question('Квадратичный вычет - это... ', [
        new Answer('Если число p — простое и 0 < a < p, то число a является квадратичным вычетом по модулю p, если существуют значения x такие, что x2 = a (mod p).', 1),
        new Answer('Если число p — простое и a < 0 < p, то число a является квадратичным вычетом по модулю p, если существуют значения x такие, что x = a (mod p).', 0),
        new Answer('Если число p — простое и 0 < p < a, то число a является квадратичным вычетом по модулю p, если существуют значения x такие, что x2 = a (mod m). ', 1),
        new Answer('Не знаю ', 0),
    ]),
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update() {
    //Проверяем, есть ли ещё вопросы
    if (quiz.current < quiz.questions.length) {
        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = quiz.questions[quiz.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = '';

        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement('button');
            btn.className = 'button';

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute('index', i);

            buttonsElem.appendChild(btn);
        }

        //Выводим номер текущего вопроса
        pagesElem.innerHTML = quiz.current + 1 + ' / ' + quiz.questions.length;

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    } else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = '';
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = 'Очки: ' + quiz.score;
    }
}

function Init() {
    //Находим все кнопки
    let btns = document.getElementsByClassName('button');

    for (let i = 0; i < btns.length; i++) {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener('click', function(e) {
            Click(e.target.getAttribute('index'));
        });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName('button');

    //Делаем кнопки серыми
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = 'button button_passive';
    }

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = 'button button_correct';
        }

        if (index != correct) {
            btns[index].className = 'button button_wrong';
        }
    } else {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = 'button button_correct';
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}