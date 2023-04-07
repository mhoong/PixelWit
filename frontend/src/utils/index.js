import { randomPrompts } from '../constants';

export function randomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    const randomResult = randomPrompts[randomIndex];
    
    if(randomResult === prompt) return randomPrompt(prompt)

    return randomResult
}