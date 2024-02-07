export default function returnTheme() {

    const temas = ['Sabiduría','Amor','Odio','Fuerza','Felicidad','Desesperación','Envidia','Avaricia','Libertad','Injusticia','Maldad','Frío',' Venganza','Amenaza','Vejez','Juventud','Adolescencia','Dolor','Esperanza','Lujo','Miedo','Hambre', 'voy a','Salud','Compasión ','Curiosidad','Valiente', 'Gratitud', 'Generosidad', 'Honestidad', 'Integridad', 'Justicia', 'Paciencia', 'Paz', 'Perseverancia', 'Poder', 'Prudencia', 'Pureza', 'Resiliencia', 'Respeto', 'Sabotaje', 'Sacrificio', 'Seguridad', 'Serenidad', 'Silencio', 'Simpatía', 'inceridad', 'Soledad', 'Sombra', 'Sueño', 'Superación', 'Ternura', 'Terror', 'Traición', 'Triunfo', 'Tristeza', 'Unión', 'Valor', 'Vanidad', 'Verdad', 'Victoria', 'Vigilancia', 'Vulnerabilidad', 'Sabiduría Ancestral', 'Rencor', 'Renovación', 'Reflexión', 'Rebelión', 'Plenitud', 'Pionero', 'Perdón', 'Nostalgia', 'Nobleza', 'Misterio']
      
    const temasING = ['Wisdom','Love','Hate','Strength','Happiness','Despair','Envy','Avarice','Freedom','Injustice','Evil','Coldness','Revenge','Threat','Old age','Youth','Adolescence','Pain','Hope','Luxury','Fear','Hunger', 'gonna','Health','Compassion','Curiosity','Brave', 'Gratitude', 'Generosity', 'Honesty', 'Integrity", "Justice','Patience', 'Peace', 'Perseverance', 'Power', 'Prudence', 'Purity', 'Resilience', 'Respect', 'Sabotage','Sacrifice', 'Security', 'Serenity', 'Silence', 'Sympathy', 'incerity', 'Loneliness', 'Shadow', 'Dream','Overcoming', 'Tenderness', 'Terror', 'Betrayal', 'Triumph', 'Sadness', 'Union', 'Courage', 'Vanity', 'Truth','Victory', 'Vigilance', 'Vulnerability', 'Ancestral Wisdom', 'Grudge', 'Renewal', 'Reflection','Rebellion', 'Plenitude', 'Pioneer', 'Forgiveness', 'Nostalgia', 'Nobility', 'Mystery']

    // Lógica de la función
    const randomNumber = Math.floor(Math.random() * temas.length);
    const result = [temasING[randomNumber],temas[randomNumber]];
    return result
  }