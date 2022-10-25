const hskLevel = {
    hsk1: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "HSK 1",
        color: "primary"
    },
    hsk2: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "HSK 2",
        color: "secondary"
    },
    hsk3: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "HSK 3",
        color: "success"
    },
    hsk4: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "HSK 4",
        color: "info"
    },
    hsk5: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "HSK 5",
        color: "danger"
    },
    hsk6: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "HSK 6",
        color: "dark"
    }
};

const dictionary = [
    {
        _id: "001nhajij12cdj2j97",
        name: "你好",
        pianying: "nǐ hǎo",
        translation: "привет, здравствуйте",
        type: "фраза",
        example: "你好！有什么需要帮助的吗？",
        difficulty: hskLevel.hsk1,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j98",
        name: "家",
        pianying: "jiā",
        translation: "Семья",
        type: "фраза",
        example: "我家有五口人",
        difficulty: hskLevel.hsk2,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j99",
        name: "这",
        pianying: "zhè",
        translation: "Этот, эти",
        type: "предлог",
        example: "这是什么？",
        difficulty: hskLevel.hsk2,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j10",
        name: "什么",
        pianying: "shén me",
        translation: "Что? что-то",
        type: "местоим",
        example: "什么意思？",
        difficulty: [hskLevel.hsk1, hskLevel.hsk2],
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j11",
        name: "我",
        pianying: "wǒ",
        translation: "Я",
        type: "местоим",
        example: "我是学生",
        difficulty: hskLevel.hsk1,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j12",
        name: "动力",
        pianying: "dòng li",
        translation: "Мотивация",
        type: "Сущ",
        example: "没运动力",
        difficulty: [hskLevel.hsk3, hskLevel.hsk4],
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j13",
        name: "裤子",
        pianying: "kù zi",
        translation: "привет, здравствуйте",
        type: "сущ",
        example: "一条裤子",
        difficulty: [hskLevel.hsk3, hskLevel.hsk2],
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j14",
        name: "妈妈",
        pianying: "mā ma",
        translation: "Мама",
        type: "суш",
        example: "你好！有什么需要帮助的吗？",
        difficulty: 1,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j15",
        name: "要",
        pianying: "yào",
        translation: "хотеть, требовать, нужно",
        type: "мод.глагол",
        example: "我要吃饭",
        difficulty: hskLevel.hsk1,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j16",
        name: "跑步",
        pianying: "páo bu",
        translation: "Бегать, бежать",
        type: "глагол",
        example: "你喜欢跑步吗？",
        difficulty: hskLevel.hsk3,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j17",
        name: "喝",
        pianying: "he",
        translation: "Пить, выпивать",
        type: "глагол",
        example: "我喝醉了",
        difficulty: [hskLevel.hsk1, hskLevel.hsk2],
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j18",
        name: "包围",
        pianying: "bāo wéi",
        translation: "Окружать, осаждать",
        type: "Глагол",
        example: "包围她吧！",
        difficulty: hskLevel.hsk5,
        bookmark: false
    },
    {
        _id: "001nhajij12cdj2j19",
        name: "众所周知",
        pianying: "zhòng suǒ zhōu zhī",
        translation: "Окружать, осаждать",
        type: "Идиома",
        example: "众所周知，他是坏人",
        difficulty: hskLevel.hsk6,
        bookmark: false
    },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(dictionary);
        }, 2000);
    });

export default fetchAll();
