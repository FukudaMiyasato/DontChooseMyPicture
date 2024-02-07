export default function returnTheme() {

    const temas = ['Sabiduría','Amor','Odio','Fuerza','Felicidad','Desesperación','Envidia','Avaricia','Libertad','Injusticia','Maldad','Frío',' Venganza','Amenaza','Vejez','Juventud','Adolescencia','Dolor','Esperanza','Lujo','Miedo','Hambre', 'enfermedad','Salud','Compasión ','Curiosidad','Valentía', 'Gratitud', 'Generosidad', 'Honestidad', 'Integridad', 'Justicia', 'Paciencia', 'Paz', 'Perseverancia', 'Poder', 'Prudencia', 'Pureza', 'Resiliencia', 'Respeto', 'Sabotaje', 'Sacrificio', 'Seguridad', 'Serenidad', 'Silencio', 'Simpatía', 'sinceridad', 'Soledad', 'Sombra', 'Sueño', 'Superación', 'Ternura', 'Terror', 'Traición', 'Triunfo', 'Tristeza', 'Unión', 'Valor', 'Vanidad', 'Verdad', 'Victoria', 'Obsesión', 'Vulnerabilidad', 'Sabiduría Ancestral', 'Rencor', 'Renovación', 'Reflexión', 'Rebelión', 'Plenitud', 'Pionero', 'Bondad', 'Nostalgia', 'Nobleza', 'Misterio']
      
    const temasING = ['Wisdom','Love','Hate','Strength','Happiness','Despair','Envy','Avarice','Freedom','Injustice','Evil','Coldness','Revenge','Threat','Old age','Youth','Adolescence','Pain','Hope','Luxury','Fear','Hunger', 'disease','Health','Compassion','Curiosity','Courage', 'Gratitude', 'Generosity', 'Honesty', 'Integrity', 'Justice','Patience', 'Peace', 'Perseverance', 'Power', 'Prudence', 'Purity', 'Resilience', 'Respect', 'Sabotage','Sacrifice', 'Security', 'Serenity', 'Silence', 'Sympathy', 'sincerity', 'Loneliness', 'Shadow', 'Dream','Overcoming', 'Tenderness', 'Terror', 'Betrayal', 'Triumph', 'Sadness', 'Union', 'Courage', 'Vanity', 'Truth','Victory', 'Obsession', 'Vulnerability', 'Ancestral Wisdom', 'Grudge', 'Renewal', 'Reflection','Rebellion', 'Plenitude', 'Pioneer', 'Goodness', 'Nostalgia', 'Nobility', 'Mystery']

    const styles = ['dixit card','Surrealist','Minimalist','Futuristic','Retro','Psychedelic','Vaporwave','Baroque','Steampunk','Gothic','Impressionist','Abstract','Cubist','Fantasy', 'Apocalyptic','Medieval', 'Cyberpunk','Watercolor', 'Neon','Pastoral','Nocturnal'];

    // Lógica de la función
    const randomNumber = Math.floor(Math.random() * temas.length);
    const result = [temasING[randomNumber],temas[randomNumber],styles[Math.floor(Math.random() * styles.length)]];
    return result
  }