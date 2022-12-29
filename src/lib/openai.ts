import { Configuration, OpenAIApi } from 'openai';

//FIXME: This is a temporary API key. Please use your own API key.
const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default openai;

