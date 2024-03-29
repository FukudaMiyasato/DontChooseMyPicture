export default function returnTheme() {


    const prompts = [
      'a girl walking through a field, in the style of ethereal trees, dark yellow and azure, majestic, sweeping seascapes, photorealistic representation, graceful balance, wimmelbilder, orange',
      'drawing an artistic digital image of a girl that has flowers in the crown, in the style of frank cho, elina karimova, mono-ha, strong facial expression, soft lines and shapes, high resolution, fashwave ',
      'red race car, in the style of sam spratt, historical illustrations, old masters, genndy tartakovsky, soggy, masaccio, monochromatic realism',
      'the drawing shows a woman with hair in an updo, in the style of hyperrealism and photorealism, glamorous hollywood portraits, trace monotone, realistic and hyper-detailed renderings, shiny/glossy, 32k uhd, detailed character illustrations',
      'a girl in a purple top in a neon city, in the style of chinapunk, iconic album covers, soft-focus portraits, luke fildes, light amber and silver, exotic, captivating lighting',
      'the flash, impasto technique, oil painting, contemporary era, primarily monochromatic with accents of orange and white.',
      'An image of a very tired old man, black background settings, highly details The facial expression reflects wisdoms and test of time. (Masterpiece), UHD, ((Highly details),',
      "The image features a lion wearing a pair of colorful sunglasses. The lion's face is prominently displayed in the foreground, with its eyes and nose clearly visible. The sunglasses are placed on the lion's face, giving it a unique and eye-catching appearance. The lion's mane is also visible, adding to the overall visual impact of the image.",
      'The image features a large pirate ship sailing on a body of water, with a skull and crossbones prominently displayed on the ship. The skull and crossbones are positioned in the middle of the ship, drawing attention to the pirate theme. There are several people on the ship, with some standing closer to the front and others near the middle and rear sections. The overall scene conveys a sense of adventure and excitement, as the pirate ship sails through the water.',
      'a portrait of a narcissistic girl in a paradise, emotive face, sultry, anime, in the style of comics, 8k, rough, dark background, muted colors, digital painting, very intricate',
      'Cara Delevingne, ((incorporeal)) ghost, surrounded by glowing fog, black backdrop background, dynamic portrait, hyperrealism, highly detailed RAW color art, bokeh',
      'digital portrait of a brutal cyberpunk samurai supervillain, badass, anime, in the style of comics, 8k uhd, rough, intense gaze, marvel comics, dark background, muted colors, epic composition, dramatic, digital painting, emotionally profound, very intricate',
      'an oil painting of a woman with long black hair, in the style of mike deodato, contemporary middle eastern and north african art, charming character illustrations, gray and amber, dmitri danish, digitally enhanced, alice pasquini --ar 1:2 --stylize 750 --v 6, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by wlop, charlie bowater and alexandra fomina',
      'digital wallpaper portrait of batman, dark knight, in the style of comics, 8k, rough, marvel comics, desperate, dark background, muted colors, epic composition, dramatic, digital painting, emotionally profound, very intricate',
      "An image of a woman's portrait in watercolor style. She should have a fair complexion with subtle blush on her cheeks, sharp facial features, piercing almond-shaped eyes, well-groomed arched eyebrows, a small straight nose, and soft pink lips. Her blonde hair is long, wavy, and voluminous. Overlay her figure with a dynamic pattern of geometric shapes in blues, yellows, and oranges, blending her form with abstract elements. Include splashes and drips of watercolor in blue, black, and brown that extend beyond her silhouette, creating a fluid and organic atmosphere. The portrait should exude a sense of vibrancy and movement.",
      'In style of Andy Warhol, portrait of Bart and Lisa Simpson',
      'lion painted in blue and green, in the style of whimsical watercolors, dark yellow and dark purple, characterful pen and ink, light orange and navy',
      "illustration of a girl with blue hair, art print, in the style of dark yellow and light azure, water drops, bold manga lines, the stars art group (xing xing), i can't believe how beautiful this is, dark yellow and orange, hyper-detailed",
      'Photograph, contemporary living room, soft light of morning, integration of beige flooring and matte stone features, unified color scheme of soothing white tones, creating a white and inviting atmosphere, 35mm f/1. 4G lens, set f/4, sophisticated furniture, including a white-colored sofa set and a minimalist side table, natural lights',
      'Envision Korean her 20s, with an air of confidence and creativity, fullbody shot, She sports a modern, asymmetrical haircut and wears a structured, neutral-toned jacket with comfortable yet stylish trousers, The composition is set in a minimalist studio, with dynamic lighting that casts a halo effect, emphasizing her role as an innovator, realism studio light, solid white background',
      'girl standing on a foggy pavement while holding her purse, in the style of yigal ozeri, video, beach portraits, kaethe butcher, close up, michael malm, soft hues',
      'woman in a red jacket, snowy, in the style of hyper-realistic portraiture, caninecore, mountainous vistas, timeless beauty, palewave, iconic, distinctive noses',
      'the seiko watch is green and has black hands, in the style of neo-traditional japanese, tokina at-x 11-16mm f/2. 8 pro dx ii, ocean academia, photorealistic detailing, holotone printing, stark and unfiltered, metallic finishes',
      "a drawing of a woman's face with a red eyeshadow, in the style of bold colorful lines, dark beige and orange, made of wire, flawless line work, captivating portraits, raw and edgy",
      'a young girl with curly blonde hair and bright blue eyes, wearing a flowy pink silk dress, is dancing on a blooming meadow, face drawn by the skilled artist Art Spiegelman, detailed, against a sunny sky background',
      'movie poster, male character in black, white and blue, in the style of yoh nagao, light-focused ',
      'Photograph, man, model pose, minimalist, stylish nessy long hairstyle, beard, profound gaze, solid white environment, studio lights setting',
      'illustration of a [white woman] with [half light blonde and half dark brown hair]. [Her hair is shoulder length]. In Buccaneers style. Tarot card. Background [vintage]. Cores [neon]. Screen printing artifacts. Messy lines and cores.',
      'the woman stands in front of a giant statue, in the style of cinematic sets, fenghua zhong, alessio albi, red and gray, cliff chiang, film/video, meticulous technique ',
      'girl in the middle of the street, standing by street lamps, in the style of cartoonish features, french landscape, li tiefu, disney animation, red and emerald, jeff danziger, rough-edged 2d animation ',
      'this image contains a 1980s close up shot illustration of a futuristic woman sitting in water, in the style of light orange and gold, cyberpunk manga, dripping paint, robotic motifs, close-up, shiny/glossy, light gold and yellow',
      'photorealistic, canon EOS 5d, minimalistic facede design, black semi glossy color on facade panel walls, geometric shaped outline, expert, dramatic lighting, lighting effects, motion blurring walking crowd',
      'capturing a model, silver and white color, man wearing an long loose cardigan, matte grey, washing cargo pants, Nike SB yellow color shoes, high tonal range, Canon EOS-1D, f/5. 6, grey background, realism lights',
      "a drawing of a woman's face in art form, in the style of colorful complexity, martin ansin, trapped emotions depicted, fine attention to anatomy, josef kote, distorted bodies, colorful melancholy",
      'a chinese boy is standing in front of a lunar new year dragon, in the style of digital painting, intricate costumes, victorian-inspired illustrations, daz3d, joyful chaos, light red and green, traditional costumes',
      'Close-up, front shot, Apple Airpod pro, orange color, Fujifilm GFX 100S, aperture at f/8, ISO 100, solid black environment',
      'A vibrant painter creating an abstract masterpiece, with colorful hair, Longshot, in the style of Kazuo Oga, Polkadot, blooming flowers, purple and pink, artistic influence, 32K, UHD, sharp focus',
      'A realistic, dramatic image of two computer monitors, one iMac Pro and one other monitor, sitting on a desk in a well-lit office. The desk is cluttered with papers and other objects. The image is shot with a wide-angle lens, giving a sense of space and scale',
      'horse rider, in the style of cinematic montages, dragon art, franciszek starowieyski, yellow and white, john howe, hyper-realistic details, himalayan art ',
      'A graceful swan with pure white feathers and elegant lily pads detailed with delicate water droplets in the scales, a serene pond background in the background very tranquil, Karma, a representation of grace, in the style of Paul Catherall illustrations, conveying a sense of serenity and beauty, ethereal Charcoal Art illustration, theme: Water Serenity',
      'A picture of a fearless warrior holding a sword, Disney Mulan reference, fierce and determined smile, dressed in vibrant red dress, half body::4, strong and courageous demeanor, and powerful appearance, Digital Art style, art by Martin Ansin, dynamic and intense soft focus portrait, piercing eyes and flowing hair, front view',
      'tall giant in the piazza from an old photograph, clear plastic wrap outside, steel robot frame inside, in the style of fine attention to anatomy, mamiya rb67, sōsaku hanga, chrome-plated, farm security administration photography, human connections',
    ]
      
    // Lógica de la función
    const randomNumber = Math.floor(Math.random() * prompts.length);
    return prompts[randomNumber]
  }