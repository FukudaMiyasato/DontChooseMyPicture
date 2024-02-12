export default function returnTheme() {

    const recomendations = [
      'Use specific styles or designs',
      'Use specific styles or designs',
      'Use specific styles or designs',
      'Use specific styles or designs',
      'Use specific styles or designs',
      'You can use painters styles',
      'AI recognizes fictional characters',
      'use words in instructions',
      'you can ask a character to make gestures',
      'You can ask him to make logos',
      ]

    const prompts = [
      'young boy rendered in the Pixar animation style',
      'two young boys leaping in a style inspired by manga',
      'girl designed in anime style',
      'image of a house drawn in a realistic style',
      'image of a house drawn in a hyper-realistic style',
      'image of an old man depicted in the style of Vincent van Gogh',
      'Goku fighting Vegeta',
      'Draw a computer with word LVL written on it',
      'image of a cat making the sign of the horns with its paw in a whimsical and imaginative style',
      'logo for an Innovation Center, designed to reflect creativity, growth, and technological advancement',
    ]
      
    // Lógica de la función
    const randomNumber = Math.floor(Math.random() * prompts.length);
    const result = [prompts[randomNumber],recomendations[randomNumber]];
    return result
  }