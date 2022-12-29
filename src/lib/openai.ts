import { Configuration, OpenAIApi } from 'openai';

//FIXME: This is a temporary API key. Please use your own API key.
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;

