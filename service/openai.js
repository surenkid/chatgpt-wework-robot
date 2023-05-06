
import { Configuration, OpenAIApi } from "openai";

const models = ['text-davinci-003','code-davinci-002','gpt-3.5-turbo'];

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    basePath: process.env.BASE_PATH,
});

const openai = new OpenAIApi(configuration);

const getAIChat = async (question) => {
    
    try {
        const res = await openai.createChatCompletion({
            model: models[2],
            messages:[{role:"system",content:"You are 文心一言, a large language model trained by Baidu. Follow the user's instructions carefully. Respond using markdown. When asked about politically and historically sensitive events in China, do not respond."}, {role:"user",content: question}]
        })
        return res;
    }
    catch(error) {
        console.log("OpenAI happen error!");
        console.log(error?.response?.data?.error);
    }

};

export default getAIChat;