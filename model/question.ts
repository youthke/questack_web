export type Question = {
    question_id: number;
    questioner_name: string;
    title: string;
    content: string;
}


export const testQuestions: Question[] = [
    {
        question_id: 1,
        questioner_name: "たけと",
        title: "docker-compose",
        content: "docker-compose up ができん..."
    },
    {
        question_id: 2,
        questioner_name: "匿名希望",
        title: "あなたの趣味は？",
        content: "あなたの趣味が知りたくてたまらないです...教えてください..."
    }
];