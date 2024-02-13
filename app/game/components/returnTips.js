
const OpenAI = require('openai');

export default async function returnTips(key, promptSystem, promptUser) {

        const openai = new OpenAI({
            apiKey: key,
            dangerouslyAllowBrowser: true,
        });
        const promptToSystem = "You are an expert wizard in creating prompts to generate images, just return 3 tips in html code <OL> <LI> that make some reference to the following text: ' "+promptSystem + "'"
        const promptToRecomendation ='Give me 3 short tips so that the next prompt is like yours return in html code <OL> <LI> : '+promptUser

        const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": promptToSystem},
            {"role": "user", "content": promptToRecomendation}],
        model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0].message.content)
    
    return completion.choices[0].message.content
}