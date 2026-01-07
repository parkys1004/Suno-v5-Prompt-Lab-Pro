import { Genre } from './types';

export const ATTRIBUTE_LABELS = ['에너지', '전자음', '어쿠스틱', '분위기', '복잡성'];

export const GENRE_DATA: Genre[] = [
  // --- Standard 20 Genres ---
  { id: 1, name: "Lo-fi Hip Hop", category: "Standard", desc: "차분한 비트와 부드러운 재즈 화성이 특징입니다.", attr: [7, 8, 3, 9, 4], tags: ["Chill", "Study", "Jazz"], 
    prompts: [
      { text: "lo-fi hip hop, jazzy chords, rainy day atmosphere, vinyl crackle", desc: "비 오는 날의 감성적인 재즈 힙합" },
      { text: "chill lo-fi, soft piano melody, slow tempo, relaxing vibe", desc: "편안한 피아노 선율의 휴식용 비트" },
      { text: "lofi hiphop, nocturnal, city lights, muted trumpet, smooth bass", desc: "도시의 야경과 어울리는 차분한 무드" },
      { text: "study beats, lofi, organic textures, bird chirping, warm pads", desc: "공부할 때 듣기 좋은 자연적인 질감" },
      { text: "lofi jazz hop, saxophone, dusty drums, nostalgic, sunset", desc: "노을 지는 저녁의 노스탤지어" },
      { text: "chillhop, electric piano, boom bap drums, relaxed, mellow", desc: "여유로운 그루브의 칠홉 스타일" }
    ] 
  },
  { id: 2, name: "Synthwave", category: "Standard", desc: "80년대 복고풍 사운드와 네온 감성 장르입니다.", attr: [8, 10, 1, 9, 6], tags: ["Retro", "80s", "Cyberpunk"], 
    prompts: [
      { text: "80s synthwave, retro-futuristic, analog synths, driving beat", desc: "80년대 미래주의 감성의 질주" },
      { text: "dreamy chillwave, hazy synths, nostalgic, slow tempo", desc: "몽환적이고 안개 낀 듯한 사운드" },
      { text: "outrun, neon nights, fast electronic drums, arpeggiated bass", desc: "네온 사인을 가르는 빠른 드라이브" },
      { text: "dark synthwave, horror movie style, deep bass, aggressive synths", desc: "어둡고 위협적인 복고풍 호러 스타일" },
      { text: "vaporwave style, chopped and screwed, elevator music remix, nostalgic", desc: "기괴하면서도 그리운 베이퍼웨이브" },
      { text: "synthwave disco, funky, dancing, 80s pop, bright", desc: "춤추기 좋은 밝은 신스 팝 디스코" }
    ]
  },
  { id: 3, name: "Hard Rock", category: "Standard", desc: "강력한 기타 리프와 파워풀한 드럼이 특징입니다.", attr: [10, 2, 4, 5, 7], tags: ["Heavy", "Energy", "Riff"], 
    prompts: [
      { text: "hard rock, heavy distorted guitar riffs, powerful drums", desc: "클래식하고 강력한 하드 록 리프" },
      { text: "modern hard rock, drop-D tuning, punchy production", desc: "현대적이고 깔끔하게 다듬어진 사운드" },
      { text: "stadium rock, anthem, cheering crowd, soaring guitar solo", desc: "경기장을 가득 채우는 웅장한 록" },
      { text: "blues rock, crunchy guitar, gravelly vocals, steady beat", desc: "거친 보컬과 블루지한 기타의 조화" },
      { text: "70s hard rock, vintage tube amp sound, cowbell, driving bass", desc: "빈티지한 70년대 정통 록 사운드" },
      { text: "grunge style, raw energy, distorted, melancholic verses", desc: "너바나 스타일의 거칠고 우울한 록" }
    ]
  },
  { id: 4, name: "Orchestral", category: "Standard", desc: "웅장한 오케스트라 사운드로 서사적 분위기를 연출합니다.", attr: [6, 1, 10, 9, 9], tags: ["Epic", "Cinematic", "Grand"], 
    prompts: [
      { text: "epic orchestral, cinematic strings, powerful brass, heroic", desc: "영웅의 등장을 알리는 웅장한 연주" },
      { text: "dark orchestral, suspenseful atmosphere, gothic fantasy", desc: "고딕 판타지 느낌의 긴장감 넘치는 곡" },
      { text: "melancholic strings, emotional violin solo, soft cello, weep", desc: "가슴을 울리는 서글픈 현악 중주" },
      { text: "magic adventure, whimsical woodwinds, bells, fantasy world", desc: "모험을 떠나는 듯한 신비로운 사운드" },
      { text: "action cinematic, fast staccato strings, heavy percussion, intense", desc: "박진감 넘치는 액션 영화 배경 음악" },
      { text: "baroque orchestra, harpsichord, formal, royal palace vibe", desc: "왕궁의 무도회가 연상되는 고전적 무드" }
    ]
  },
  { id: 5, name: "Future Bass", category: "Standard", desc: "화려한 신스와 감성적 보컬 찹이 조화를 이룹니다.", attr: [9, 10, 2, 7, 7], tags: ["Modern", "Vibrant", "Melodic"], 
    prompts: [
      { text: "future bass, melodic drops, vocal chops, bright synths", desc: "화려한 보컬 찹과 멜로딕한 드랍" },
      { text: "kawaii future bass, cute sounds, high energy, bubbly", desc: "귀엽고 톡톡 튀는 미래 비트" },
      { text: "melodic dubstep style, heavy bass, emotional piano intro, epic", desc: "서정적인 피아노와 강력한 베이스" },
      { text: "chill future bass, smooth atmosphere, soft vocal layers", desc: "부드럽고 몽환적인 칠(Chill) 스타일" },
      { text: "glitch hop influence, colorful synths, syncopated rhythm", desc: "현란하고 리드미컬한 신스 연주" },
      { text: "summer future bass, tropical vibes, energetic, dancing", desc: "여름 페스티벌에 어울리는 에너지" }
    ]
  },
  { id: 6, name: "Classic Jazz", category: "Standard", desc: "즉흥 연주와 스윙 리듬이 돋보이는 장르입니다.", attr: [5, 2, 9, 7, 10], tags: ["Smooth", "Sophisticated", "Swing"], 
    prompts: [
      { text: "classic swing jazz, big band style, brass section", desc: "웅장한 빅밴드 스윙 스타일" },
      { text: "smooth jazz, saxophone solo, upright bass, lounge vibe", desc: "라운지 바의 감미로운 색소폰" },
      { text: "bebop, fast tempo, virtuosic piano, chaotic but harmonic", desc: "빠르고 기교 넘치는 정통 비밥" },
      { text: "jazz fusion, electric guitar, synth elements, complex drums", desc: "록과 신스가 섞인 현대적 재즈" },
      { text: "vocal jazz, female crooner, smoky atmosphere, piano trio", desc: "차분하고 매혹적인 재즈 보컬 곡" },
      { text: "bossa nova, nylon guitar, shaker, brazilian breeze", desc: "여유롭고 시원한 보사노바 리듬" }
    ]
  },
  { id: 7, name: "Trap", category: "Standard", desc: "강렬한 808 베이스와 빠른 하이햇이 특징입니다.", attr: [9, 8, 1, 6, 5], tags: ["Aggressive", "Dark", "808"], 
    prompts: [
      { text: "dark trap beat, heavy 808 bass, fast hi-hats, sinister", desc: "어둡고 긴장감 넘치는 묵직한 비트" },
      { text: "aggressive trap, hard hitting drums, phonk influence", desc: "에너지가 폭발하는 공격적인 사운드" },
      { text: "chill trap, ethereal pads, melodic flute, laid back", desc: "감성적이고 나른한 칠 트랩" },
      { text: "drill style, sliding 808, aggressive flow, street vibe", desc: "영국식 드릴 특유의 슬라이딩 베이스" },
      { text: "hype trap, upbeat, energetic synth, party atmosphere", desc: "파티 분위기의 신나는 하이프 비트" },
      { text: "latin trap, acoustic guitar, reggaeton rhythm, urban", desc: "라틴 기타가 가미된 세련된 트랩" }
    ]
  },
  { id: 8, name: "Acoustic Folk", category: "Standard", desc: "통기타와 목소리로 소박하고 따뜻한 감성을 전합니다.", attr: [4, 1, 10, 6, 4], tags: ["Warm", "Nature", "Acoustic"], 
    prompts: [
      { text: "acoustic folk, fingerstyle guitar, soft male vocals", desc: "귀가 즐거운 소박한 핑거스타일" },
      { text: "indie folk, banjo, group harmonies, rustic", desc: "포근한 화음과 시골 마을의 감성" },
      { text: "sad folk, melancholic acoustic guitar, breathy female vocals", desc: "슬프고 서정적인 인디 포크" },
      { text: "upbeat folk, stomps and claps, energetic acoustic strumming", desc: "박수와 발구르기가 섞인 신나는 포크" },
      { text: "contemporary folk, light strings, storytelling style, warm", desc: "이야기를 들려주는 듯한 현대적 포크" },
      { text: "winter folk, crackling fire sound, soft humming, cozy", desc: "벽롯불 앞에서 듣는 따뜻한 음악" }
    ]
  },
  { id: 9, name: "Techno", category: "Standard", desc: "반복적인 비트와 기계적인 질감이 매력적입니다.", attr: [10, 10, 0, 5, 6], tags: ["Industrial", "Minimal", "Club"], 
    prompts: [
      { text: "dark industrial techno, pounding kick, acid synths", desc: "어둡고 묵직한 지하 클럽 사운드" },
      { text: "minimal techno, glitchy textures, hypnotic rhythm", desc: "절제된 소리와 최면적인 반복" },
      { text: "dub techno, deep echoes, atmospheric, cavernous", desc: "공간감이 깊은 몽환적 테크노" },
      { text: "peak time techno, high energy, strobe light vibe, driving", desc: "클럽의 절정을 장식하는 강렬한 비트" },
      { text: "melodic techno, emotional pads, progressive layers", desc: "멜로디가 강조된 서사적 테크노" },
      { text: "detroit techno, vintage machine sounds, soul influence", desc: "디트로이트 오리지널 기계음 사운드" }
    ]
  },
  { id: 10, name: "R&B Soul", category: "Standard", desc: "감성적인 보컬과 그루비한 리듬의 조화입니다.", attr: [6, 4, 6, 8, 7], tags: ["Sensual", "Groovy", "Vocal"], 
    prompts: [
      { text: "contemporary R&B, silky vocals, deep bass, sensual", desc: "매끄러운 보컬의 현대적 알앤비" },
      { text: "neo-soul, jazzy Rhodes piano, laid back groove", desc: "재즈 느낌의 여유로운 그루브" },
      { text: "90s R&B, slow jam, romantic harmonies, finger snaps", desc: "90년대 감성의 로맨틱 슬로우 잼" },
      { text: "pbr&b, alternative, dark atmosphere, falsetto vocals", desc: "몽환적이고 실험적인 알앤비 스타일" },
      { text: "motown soul, vintage horns, energetic rhythm, gospel feel", desc: "빈티지한 모타운 스타일 소울" },
      { text: "bedroom r&b, lo-fi textures, intimate, whispery vocals", desc: "아주 개인적이고 조용한 무드" }
    ]
  },
  { id: 11, name: "Heavy Metal", category: "Standard", desc: "왜곡된 기타음과 파괴적인 드럼이 특징입니다.", attr: [10, 2, 1, 4, 8], tags: ["Extreme", "Aggressive", "Fast"], 
    prompts: [
      { text: "thrash metal, fast palm-muted riffs, double bass drums", desc: "빠르고 강력한 정통 트래쉬 메탈" },
      { text: "power metal, high pitched vocals, epic fantasy lyrics", desc: "판타지 서사가 담긴 웅장한 메탈" },
      { text: "death metal, growling vocals, technical drumming, dark", desc: "기술적이고 파괴적인 데스 메탈" },
      { text: "doom metal, slow and heavy, crushing riffs, dark atmosphere", desc: "느리지만 압도적으로 무거운 둠 메탈" },
      { text: "glam metal, 80s style, catchy chorus, flamboyant", desc: "화려한 80년대 스타일의 글램 메탈" },
      { text: "symphonic metal, female operatic vocals, orchestra, choir", desc: "오케스트라와 오페라 보컬의 결합" }
    ]
  },
  { id: 12, name: "Disco", category: "Standard", desc: "70년대 댄스 홀을 상징하는 경쾌한 리듬입니다.", attr: [9, 6, 4, 5, 5], tags: ["Dance", "Retro", "Happy"], 
    prompts: [
      { text: "70s disco, funky bassline, string section, danceable", desc: "70년대 정통 디스코 그루브" },
      { text: "nu-disco, modern house hybrid, funky guitar licks", desc: "현대적으로 재해석된 세련된 디스코" },
      { text: "space disco, cosmic synths, robotic vocals, futuristic", desc: "우주적인 신스 사운드가 가미된 디스코" },
      { text: "italo disco, analog drum machine, bright melodies, catchy", desc: "밝고 중독적인 이탈로 디스코" },
      { text: "disco house, filtered loops, uplifting energy, funky", desc: "흥겨운 에너지가 가득한 디스코 하우스" },
      { text: "boogie disco, soulful vocals, clap rhythm, mid-tempo", desc: "소울풀하고 리드미컬한 부기 스타일" }
    ]
  },
  { id: 13, name: "Reggae", category: "Standard", desc: "자메이카의 엇박자 리듬과 느긋한 분위기입니다.", attr: [5, 3, 7, 8, 5], tags: ["Island", "Relaxed", "Rhythmic"], 
    prompts: [
      { text: "roots reggae, deep dub bass, offbeat guitar skank", desc: "전통적인 자메이카 루트 레게" },
      { text: "dancehall, fast digital riddim, energetic flow", desc: "빠르고 에너지 넘치는 댄스홀" },
      { text: "dub reggae, echo effects, minimal, spacey atmosphere", desc: "공간감과 에코가 강조된 덥 레게" },
      { text: "reggae fusion, pop influence, melodic chorus, sunny vibe", desc: "대중적인 팝 감각의 밝은 레게" },
      { text: "ska, fast tempo, upbeat brass section, walking bass", desc: "빠른 리듬과 브라스가 특징인 스카" },
      { text: "lover's rock, romantic lyrics, smooth production, soft", desc: "부드럽고 로맨틱한 분위기의 레게" }
    ]
  },
  { id: 14, name: "City Pop", category: "Standard", desc: "80년대의 도회적이고 세련된 감성 팝입니다.", attr: [7, 6, 4, 8, 6], tags: ["Urban", "Nostalgic", "Stylish"], 
    prompts: [
      { text: "80s Japanese city pop, funky bass, clean electric guitar", desc: "도쿄의 야경이 연상되는 시티팝" },
      { text: "nostalgic city pop, urban night drive vibe, saxophone", desc: "밤거리를 달리는 듯한 감성 사운드" },
      { text: "dreamy city pop, sunset beach, warm synths, sweet vocals", desc: "노을 진 해변과 어울리는 달콤한 곡" },
      { text: "upbeat city pop, groovy brass, bright energy, stylish", desc: "화려하고 세련된 업템포 시티팝" },
      { text: "jazzy city pop, Rhodes piano, sophisticated chords", desc: "재즈 화성이 돋보이는 도시적 감성" },
      { text: "mellow city pop, midnight cruise, smooth rhythm, calm", desc: "조용한 자정의 드라이브와 어울리는 무드" }
    ]
  },
  { id: 15, name: "Deep House", category: "Standard", desc: "몽환적인 패드와 부드러운 비트의 댄스 음악입니다.", attr: [7, 10, 1, 10, 6], tags: ["Atmospheric", "Club", "Hypnotic"], 
    prompts: [
      { text: "deep house, 124 bpm, soulful vocal samples, mellow", desc: "소울풀한 보컬과 부드러운 딥하우스" },
      { text: "hypnotic deep house, repetitive bassline, spacey pads", desc: "최면적이고 우주적인 반복 비트" },
      { text: "tropical deep house, marimba, flute, sunny atmosphere", desc: "해변 라운지에 어울리는 트로피컬" },
      { text: "organic deep house, hand percussion, tribal elements", desc: "자연적인 타악기가 섞인 오가닉 하우스" },
      { text: "chicago deep house, vintage chords, raw drum machine", desc: "시카고 정통 스타일의 빈티지 사운드" },
      { text: "progressive deep house, build-ups, evolving textures", desc: "점진적으로 발전하는 몽환적 전개" }
    ]
  },
  { id: 16, name: "Classical Baroque", category: "Standard", desc: "화려하고 복잡한 대위법의 고전 음악입니다.", attr: [4, 0, 10, 7, 10], tags: ["Bach", "Intricate", "Harpsichord"], 
    prompts: [
      { text: "baroque style, harpsichord, complex counterpoint", desc: "바흐 스타일의 정교한 연주" },
      { text: "vivaldi style, fast solo violin, baroque orchestra", desc: "비발디처럼 빠른 바이올린 협주곡" },
      { text: "elegant baroque flute, harpsichord accompaniment, courtly", desc: "우아한 플루트와 하프시코드 협주" },
      { text: "fugal baroque, multiple layers, intellectual, rigorous", desc: "지적이고 엄격한 푸가 스타일" },
      { text: "slow baroque sarabande, heavy cello, dramatic, tragic", desc: "느리고 장엄하며 비극적인 선율" },
      { text: "bright baroque concertato, brass and strings, celebratory", desc: "축제 분위기의 밝은 금관 협주곡" }
    ]
  },
  { id: 17, name: "Country Bluegrass", category: "Standard", desc: "밴조와 피들을 활용한 흥겨운 민속 음악입니다.", attr: [6, 0, 10, 5, 8], tags: ["Banjo", "Folk", "Fast"], 
    prompts: [
      { text: "fast bluegrass, banjo shredding, fiddle solos, upbeat", desc: "빠른 밴조 연주와 흥겨운 무드" },
      { text: "traditional country, acoustic rhythm, harmonica", desc: "하모니카와 어쿠스틱의 조화" },
      { text: "outlaw country, deep baritone vocals, electric guitar twang", desc: "거칠고 반항적인 무드의 컨트리" },
      { text: "country ballad, pedal steel guitar, sentimental, storytelling", desc: "페달 스틸 기타의 서정적인 발라드" },
      { text: "honky tonk, upright piano, swing rhythm, bar vibe", desc: "신나는 피아노 연주의 펍 음악" },
      { text: "modern country pop, clean production, radio friendly, acoustic", desc: "대중적이고 세련된 현대적 컨트리" }
    ]
  },
  { id: 18, name: "Ambient Zen", category: "Standard", desc: "명상을 위한 공간감 넘치는 정적인 음악입니다.", attr: [1, 9, 2, 10, 2], tags: ["Zen", "Space", "Minimal"], 
    prompts: [
      { text: "ambient zen, ethereal pads, meditation bowls, silent", desc: "명상을 위한 우주적 정적 사운드" },
      { text: "nature ambient, flowing water sounds, soft flute", desc: "자연의 소리가 담긴 평화로운 무드" },
      { text: "dark ambient, eerie drones, empty space, cinematic", desc: "어둡고 기괴한 심연의 사운드" },
      { text: "celestial ambient, twinkling stars, airy textures, vast", desc: "광활한 우주를 유영하는 듯한 느낌" },
      { text: "industrial ambient, cold metal reverb, mechanical humming", desc: "차갑고 기계적인 공업용 배경 음악" },
      { text: "healing ambient, warm frequencies, alpha waves, deep rest", desc: "치유와 수면을 위한 따스한 주파수" }
    ]
  },
  { id: 19, name: "Funk Groove", category: "Standard", desc: "리드미컬한 베이스와 그루비한 리듬이 특징입니다.", attr: [8, 4, 6, 5, 8], tags: ["Groove", "70s", "Bass"], 
    prompts: [
      { text: "70s funk, slap bass, wah guitar, brass section, groovy", desc: "슬랩 베이스가 돋보이는 정통 펑크" },
      { text: "modern funk, neo-soul influence, clean guitars", desc: "세련된 현대적 감각의 펑크" },
      { text: "fast funk, high energy, James Brown style, staccato horns", desc: "열정적이고 폭발적인 펑크 그루브" },
      { text: "psychedelic funk, fuzzy guitars, trippy synths, deep pocket", desc: "몽롱하고 실험적인 펑크 사운드" },
      { text: "funky house, disco loops, groovy electronic drums, upbeat", desc: "펑크 요소가 가미된 신나는 하우스" },
      { text: "smooth funk, liquid bassline, late night vibe, chill", desc: "부드럽고 유연한 심야용 펑크" }
    ]
  },
  { id: 20, name: "Blues", category: "Standard", desc: "인간의 슬픔과 감정을 기타에 담은 장르입니다.", attr: [5, 2, 8, 7, 6], tags: ["Emotional", "Guitar", "Soul"], 
    prompts: [
      { text: "slow blues, electric guitar solo, emotional, organ", desc: "가슴을 울리는 긴 기타 솔로" },
      { text: "delta blues, slide guitar, acoustic, raw vocals", desc: "거친 질감의 정통 델타 블루스" },
      { text: "shuffle blues, upbeat rhythm, piano, harmonica solo", desc: "경쾌한 리듬의 셔플 블루스" },
      { text: "jazz blues, sophisticated chords, brass section, smooth", desc: "재즈와 블루스가 결합된 세련된 무드" },
      { text: "chicago blues, electric, amplified harmonica, steady beat", desc: "시카고 스타일의 전기 블루스" },
      { text: "melancholic blues ballad, crying guitar, soft piano, sad", desc: "비 내리는 밤에 어울리는 슬픈 발라드" }
    ]
  },

  // --- K-POP 20 Genres/Styles ---
  { id: 101, name: "K-Pop: Newjeans Style", category: "K-POP", desc: "뉴트로와 UK 개러지 비트가 섞인 미니멀한 팝입니다.", attr: [6, 7, 4, 9, 5], tags: ["Newtro", "UK Garage", "Chill"], 
    prompts: [
      { text: "k-pop, Newjeans style, UK garage beat, jersey club, nostalgic", desc: "청량하고 미니멀한 이지리스닝" },
      { text: "y2k pop, 90s aesthetic, drum and bass lite, airy vocals", desc: "Y2K 감성의 몽환적 댄스곡" },
      { text: "lo-fi kpop, soft synths, muted drums, teenage dream atmosphere", desc: "나른하고 감성적인 하이틴 무드" },
      { text: "rhythmic k-pop, 2-step garage, clean production, catchy hook", desc: "세련된 리듬감의 트렌디한 팝" },
      { text: "summer breeze kpop, light synth, acoustic guitar pluck, refreshing", desc: "여름 바람처럼 시원하고 가벼운 곡" },
      { text: "minimalist kpop pop, deep house influence, chic, effortless", desc: "절제된 미학이 돋보이는 시크한 스타일" }
    ]
  },
  { id: 102, name: "K-Pop: Aespa Style", category: "K-POP", desc: "하이퍼팝과 메탈릭한 사운드의 SMP 스타일입니다.", attr: [10, 10, 1, 6, 9], tags: ["Hyperpop", "Cyberpunk", "Powerful"], 
    prompts: [
      { text: "k-pop, aespa style, aggressive synth, metallic texture, futuristic", desc: "쇠맛 나는 강력한 하이퍼팝" },
      { text: "dark k-pop, glitchy edm, heavy distortion, dramatic bridge", desc: "사이버네틱한 걸크러쉬 곡" },
      { text: "kwangya theme, cinematic electronic, mysterious intro, huge bass", desc: "웅장하고 신비로운 광야 세계관 음악" },
      { text: "techno-pop kpop, hard hitting kicks, robotic vocal layers, intense", desc: "기계적이고 강렬한 테크노 팝" },
      { text: "experimental kpop, complex structure, hyperpop elements, high energy", desc: "실험적이고 에너지 넘치는 사운드" },
      { text: "virtual diva style, vocaloid influence, fast bpm, digital world", desc: "디지털 감성이 폭발하는 미래형 팝" }
    ]
  },
  { id: 103, name: "K-Pop: IVE Style", category: "K-POP", desc: "우아하고 화려한 멜로디의 나르시시즘 팝입니다.", attr: [8, 7, 3, 7, 7], tags: ["Elegant", "Royal", "Chic"], 
    prompts: [
      { text: "k-pop, IVE style, elegant pop, classy strings, glamorous disco", desc: "우아하고 화려한 공주풍 댄스" },
      { text: "majestic k-pop, royal aesthetic, chic vocals, clean production", desc: "도도하고 세련된 틴프레시" },
      { text: "narcissistic pop, confident aura, catchy chorus, stylish arrangement", desc: "자신감 넘치는 세련된 분위기" },
      { text: "romantic disco kpop, sparkly synths, funky bass, dreamy vocals", desc: "반짝이는 신스와 디스코의 만남" },
      { text: "chic k-pop, rhythmic guitar, luxury vibe, high teen queen", desc: "럭셔리하고 시크한 하이틴 퀸 스타일" },
      { text: "sophisticated dance kpop, string stabs, modern pop, graceful", desc: "우아한 현악기가 가미된 댄스 팝" }
    ]
  },
  { id: 104, name: "K-Pop: BTS Style", category: "K-POP", desc: "힙합 기반의 퍼포먼스와 대중적 멜로디의 조화입니다.", attr: [9, 7, 4, 6, 8], tags: ["Global", "Hip-hop", "Anthem"], 
    prompts: [
      { text: "k-pop, bts style, dynamic hip hop, anthem, soaring vocals", desc: "에너제틱한 힙합과 웅장한 보컬" },
      { text: "disco pop k-pop, funky bassline, positive vibes, retro influence", desc: "경쾌하고 대중적인 글로벌 팝" },
      { text: "old school k-hiphop, heavy boom bap, powerful rap, soul sample", desc: "초기 힙합 스타일의 묵직한 비트" },
      { text: "emotional k-pop, piano ballad intro, explosive bridge, inspirational", desc: "가슴 벅찬 서사를 담은 감동적인 곡" },
      { text: "funk-pop kpop, upbeat brass, danceable, cheerful, star quality", desc: "스타성이 넘치는 유쾌한 펑크 팝" },
      { text: "modern r&b kpop, smooth vocals, trap drums, moody, stylish", desc: "분위기 있는 트렌디 알앤비 힙합" }
    ]
  },
  { id: 105, name: "K-Pop: Stray Kids Style", category: "K-POP", desc: "자극적이고 실험적인 '마라맛' 힙합 장르입니다.", attr: [10, 9, 1, 4, 9], tags: ["Noise Music", "Experimental", "Aggressive"], 
    prompts: [
      { text: "k-pop, stray kids style, heavy industrial trap, aggressive rap", desc: "강렬하고 실험적인 마라맛 힙합" },
      { text: "fast electronic k-pop, chaotic energy, big drop, dark synth", desc: "에너지가 폭발하는 하이테크 트랩" },
      { text: "noise pop kpop, unexpected sounds, metal influence, hybrid", desc: "노이즈를 음악으로 승화시킨 사운드" },
      { text: "drill-hop kpop, intense 808, fast flow, aggressive atmosphere", desc: "거칠고 빠른 호흡의 스트릿 비트" },
      { text: "experimental electronic kpop, dubstep influence, glitch, powerful", desc: "덥스텝과 글리치가 섞인 실험적 댄스" },
      { text: "stadium hype kpop, shouting vocals, heavy percussion, tribal", desc: "떼창과 강렬한 타악기의 조합" }
    ]
  },
  { id: 106, name: "K-Pop: Ballad (OST)", category: "K-POP", desc: "드라마의 감동을 극대화하는 서정적 발라드입니다.", attr: [3, 1, 9, 8, 7], tags: ["Drama", "Emotional", "Sad"], 
    prompts: [
      { text: "k-pop ballad, kdrama ost style, emotional piano, strings", desc: "눈물을 자아내는 절절한 발라드" },
      { text: "winter k-pop ballad, soft vocal, delicate piano, nostalgic", desc: "포근하고 쓸쓸한 겨울 감성" },
      { text: "acoustic k-ballad, fingerstyle guitar, raw emotion, intimate", desc: "기타 하나로 들려주는 진솔한 고백" },
      { text: "cinematic k-ost, orchestral swell, soaring high notes, tragic", desc: "영화처럼 웅장하고 비극적인 선율" },
      { text: "r&b k-ballad, soulful vocals, warm bass, late night vibe", desc: "소울풀하고 세련된 감성 발라드" },
      { text: "indie k-ballad, minimal arrangement, poetic lyrics, calm", desc: "여백의 미가 느껴지는 시적인 곡" }
    ]
  },
  { id: 107, name: "K-Pop: Trot (EDM Ver.)", category: "K-POP", desc: "뽕짝 리듬에 EDM을 결합한 흥겨운 장르입니다.", attr: [9, 8, 3, 4, 6], tags: ["Exciting", "Traditional", "EDM"], 
    prompts: [
      { text: "k-trot, edm trot, fast tempo, exciting rhythm, brass stabs", desc: "흥이 폭발하는 축제용 뽕디엠" },
      { text: "traditional trot, accordion, high energy, catchy hook", desc: "중독성 있는 전통 리듬의 댄스" },
      { text: "nu-trot, modern pop influence, disco beat, cheerful", desc: "세련된 팝 감각의 현대적 트로트" },
      { text: "highway trot, drive music, repetitive rhythm, energetic", desc: "고속도로에서 듣기 좋은 무한 반복 비트" },
      { text: "ballad trot, emotional vibrato, nostalgic, folk elements", desc: "가슴 뭉클한 감성과 기교의 발라드" },
      { text: "hard-trot, heavy synths, techno elements, party anthem", desc: "테크노와 만난 가장 강력한 트로트" }
    ]
  },
  { id: 108, name: "K-Pop: R&B (DEAN Style)", category: "K-POP", desc: "트렌디한 사운드와 세련된 보컬의 알앤비입니다.", attr: [5, 6, 5, 9, 8], tags: ["Trendy", "Chill", "Groovy"], 
    prompts: [
      { text: "k-r&b, alternative soul, vibey synths, smooth vocals", desc: "새벽에 듣기 좋은 세련된 사운드" },
      { text: "groovy k-r&b, moody production, chill vibe, jazzy chords", desc: "감각적인 비트와 독보적인 음색" },
      { text: "lofi k-r&b, vinyl texture, soft electric piano, intimate", desc: "따뜻하고 아늑한 로우파이 알앤비" },
      { text: "futuristic k-r&b, digital effects, complex vocal layers, chic", desc: "미래지향적이고 감각적인 스타일" },
      { text: "trap-soul kpop, deep bass, moody, emotional r&b", desc: "트랩 비트가 가미된 묵직한 알앤비" },
      { text: "90s k-r&b nostalgia, boy band style, smooth harmonies", desc: "90년대 보이그룹 감성의 부드러운 화음" }
    ]
  },
  { id: 109, name: "K-Pop: Le Sserafim Style", category: "K-POP", desc: "당당한 태도와 미니멀한 라틴/댄스 스타일입니다.", attr: [8, 8, 3, 6, 7], tags: ["Fearless", "Chic", "Latin"], 
    prompts: [
      { text: "k-pop, le sserafim style, house beat, latin pop influence", desc: "자신감 넘치는 세련된 하우스 댄스" },
      { text: "reggaeton k-pop, rhythmic, powerful bass, minimal", desc: "미니멀하면서 비트감이 강한 곡" },
      { text: "fearless concept, heavy bassline, catwalk vibe, chic", desc: "런웨이가 떠오르는 당당한 사운드" },
      { text: "afrobeats kpop, organic percussion, catchy rhythm, cool", desc: "아프로비트가 섞인 트렌디한 스타일" },
      { text: "fast house kpop, energetic, repetitive synth stabs, fashion", desc: "패셔너블하고 에너제틱한 댄스" },
      { text: "anti-fragile style, powerful chanting, hybrid dance, strong", desc: "강인함이 느껴지는 독특한 리듬의 곡" }
    ]
  },
  { id: 110, name: "K-Pop: Cute/Bubbly", category: "K-POP", desc: "밝고 희망찬 캔디팝과 상큼한 댄스입니다.", attr: [8, 6, 4, 5, 6], tags: ["Kawaii", "Happy", "Upbeat"], 
    prompts: [
      { text: "k-pop, bubbly style, cute concept, high energy, bright", desc: "상큼 발랄한 과즙미 넘치는 댄스" },
      { text: "sweet k-pop, candy pop, melodic, positive vibes", desc: "청순하고 희망찬 에너지가 가득한 곡" },
      { text: "school boy concept, upbeat, cheerful piano, innocent", desc: "풋풋하고 설레는 첫사랑 같은 느낌" },
      { text: "tropical cute kpop, summer, bright synths, energetic hook", desc: "여름의 상큼함을 담은 트로피컬 팝" },
      { text: "disco-pop kpop, sparkly, retro cute, happy vibes", desc: "반짝이는 복고풍의 귀여운 팝" },
      { text: "whimsical kpop, magic world, playful sound effects, fun", desc: "동화 속 세계처럼 장난기 넘치는 곡" }
    ]
  },
  { id: 111, name: "K-Pop: IU Style", category: "K-POP", desc: "재즈, 포크, 팝이 어우러진 서사적 아티스트입니다.", attr: [4, 2, 8, 7, 9], tags: ["Storytelling", "Acoustic", "Warm"], 
    prompts: [
      { text: "k-pop, iu style, whimsical orchestrations, poetic, acoustic", desc: "동화 같은 서사가 담긴 따뜻한 곡" },
      { text: "jazzy k-pop ballad, soft piano, nostalgic, airy high notes", desc: "감미로운 재즈 선율과 서정적인 멜로디" },
      { text: "modern folk k-pop, guitar picking, warm, story-driven", desc: "진솔한 이야기를 들려주는 포크 스타일" },
      { text: "epic pop, cinematic strings, hopeful, soaring vocals", desc: "희망과 벅찬 감동을 주는 대곡 스타일" },
      { text: "bossanova kpop, sophisticated, breezy, lighthearted", desc: "가볍고 산뜻한 보사노바풍 케이팝" },
      { text: "vintage pop kpop, big band, colorful, theatrical", desc: "뮤지컬 한 장면처럼 다채롭고 화려한 곡" }
    ]
  },
  { id: 112, name: "K-Pop: Dark (Dreamcatcher)", category: "K-POP", desc: "메탈과 팝을 결합한 웅장하고 미스터리한 분위기입니다.", attr: [9, 5, 3, 7, 9], tags: ["Rock", "Metal", "Mystery"], 
    prompts: [
      { text: "k-pop, rock influence, heavy guitar, gothic theme, fast", desc: "다크하고 웅장한 록 기반 케이팝" },
      { text: "dark fantasy k-pop, haunting melodies, rock ballad", desc: "강렬한 기타와 미스터리한 무드" },
      { text: "symphonic rock kpop, dramatic choir, powerful drums, epic", desc: "오케스트라와 록이 결합된 압도적 곡" },
      { text: "nightmare concept, eerie intro, explosive chorus, fast rock", desc: "긴박감이 넘치는 빠른 템포의 록" },
      { text: "j-rock style kpop, high energy, melodic metal, intense", desc: "일본 록 스타일의 감성 메탈 팝" },
      { text: "horror kpop, suspenseful, heavy riffs, dark atmosphere", desc: "공포 영화처럼 서늘하고 강력한 사운드" }
    ]
  },
  { id: 113, name: "K-Pop: Hip-Hop (Zico Style)", category: "K-POP", desc: "재치 있는 비트와 랩 중심의 트렌디한 힙합입니다.", attr: [8, 7, 2, 6, 8], tags: ["Swag", "Funky", "Rap"], 
    prompts: [
      { text: "k-pop, zico style, funky hip hop, bouncy beat, horns", desc: "어깨가 들썩이는 위트 있는 비트" },
      { text: "modern k-hiphop, trap influenced, catchy rap, hype", desc: "중독성 넘치는 랩과 트렌디 사운드" },
      { text: "90s k-hiphop revival, funky bass, retro scratch, cool", desc: "90년대 한국 힙합 감성의 재해석" },
      { text: "chill k-hiphop, jazzy vibes, laid back rap, smooth", desc: "나른하고 편안한 무드의 힙합 곡" },
      { text: "latin hip-hop kpop, rhythmic guitar, reggaeton beat, swag", desc: "라틴 리듬이 섞인 스타일리시한 힙합" },
      { text: "experimental rap kpop, unique production, unconventional, fun", desc: "개성 넘치고 장난기 가득한 실험적 랩" }
    ]
  },
  { id: 114, name: "K-Pop: City Pop (KR Ver.)", category: "K-POP", desc: "한국적 감성이 섞인 복고풍 도회지 음악입니다.", attr: [6, 7, 4, 8, 6], tags: ["Retro", "Night Drive", "Smooth"], 
    prompts: [
      { text: "k-city pop, korean retro, night drive, smooth synth", desc: "8090 한국 도시 밤의 감성" },
      { text: "nostalgic k-pop, 80s synth, urban, romantic", desc: "낭만적인 신스와 복고풍 선율" },
      { text: "funky k-city pop, slap bass, stylish, neon lights", desc: "네온 사인 아래 세련된 펑크 시티팝" },
      { text: "sweet k-city pop, female vocals, summer night, breezy", desc: "여름 밤공기처럼 산뜻하고 달콤한 곡" },
      { text: "dreamy k-city pop, lo-fi texture, nostalgic, urban", desc: "아련한 추억이 떠오르는 몽환적 시티팝" },
      { text: "mid-tempo k-city pop, rhodes piano, sophisticated, chic", desc: "고급스럽고 시크한 도심 속 음악" }
    ]
  },
  { id: 115, name: "K-Pop: Summer Anthem", category: "K-POP", desc: "청량함과 트로피컬 사운드가 폭발하는 곡입니다.", attr: [9, 8, 3, 5, 5], tags: ["Summer", "Tropical", "Refreshing"], 
    prompts: [
      { text: "k-pop summer song, tropical house, refreshing, bright", desc: "시원한 바닷가 분위기의 여름 댄스" },
      { text: "upbeat k-pop, high energy, whistling, tropical vibe", desc: "청량함이 터지는 에너제틱 팝" },
      { text: "beach party kpop, steel drums, sunny, happy energy", desc: "해변 파티에 어울리는 흥겨운 사운드" },
      { text: "surf pop kpop, electric guitar, summer breeze, youthful", desc: "서핑을 즐기는 듯한 활기찬 청춘의 곡" },
      { text: "reggaeton summer kpop, rhythmic, vacation, island style", desc: "휴양지의 여유로운 라틴 리듬 팝" },
      { text: "bright summer k-pop, brass, joyful, clear skies, dancing", desc: "맑은 하늘 아래 즐기는 기분 좋은 팝" }
    ]
  },
  { id: 116, name: "K-Pop: G-Idle Style", category: "K-POP", desc: "민속적 사운드와 웅장한 컨셉의 실험적 팝입니다.", attr: [9, 6, 4, 8, 10], tags: ["Ethnic", "Unique", "Powerful"], 
    prompts: [
      { text: "k-pop, g-idle style, ethnic instruments, powerful anthem", desc: "이색적인 오리엔탈 사운드와 강력한 훅" },
      { text: "theatrical k-pop, storytelling, unique vocal delivery", desc: "드라마틱한 구성과 유니크한 무드" },
      { text: "dark ethnic kpop, mysterious, heavy percussion, dramatic", desc: "비밀스럽고 웅장한 민속적 트랩" },
      { text: "avant-garde kpop, bold structure, chanting, artistic", desc: "예술적이고 대담한 구성의 케이팝" },
      { text: "tango influence kpop, passionate, dark strings, rhythmic", desc: "정열적인 탱고 선율이 가미된 댄스" },
      { text: "majestic k-pop, royal choir, powerful message, intense", desc: "메시지가 담긴 압도적이고 웅장한 연주" }
    ]
  },
  { id: 117, name: "K-Pop: Synth-Pop (Sunmi Style)", category: "K-POP", desc: "레트로 신스팝과 몽환적인 분위기가 특징입니다.", attr: [7, 9, 2, 8, 7], tags: ["Retro", "Synth", "Dreamy"], 
    prompts: [
      { text: "k-pop, sunmi style, 80s synth pop, dreamy vibe, hypnotic", desc: "중독적이고 몽환적인 복고 신스팝" },
      { text: "hazy k-pop, elegant synth, smooth rhythm, aesthetic", desc: "우아하고 분위기 있는 레트로 댄스" },
      { text: "dark synth kpop, intense mood, electric beats, alluring", desc: "치명적이고 매혹적인 다크 신스 팝" },
      { text: "city night synthpop, neon light vibe, nostalgic, cool", desc: "밤의 도심과 어울리는 쿨한 신스 사운드" },
      { text: "pop-rock synth kpop, guitar layers, catchy, upbeat", desc: "기타 사운드가 어우러진 신나는 신스 팝" },
      { text: "ethereal k-pop, floating feeling, soft pads, romantic", desc: "우주를 떠다니는 듯한 낭만적인 무드" }
    ]
  },
  { id: 118, name: "K-Pop: Rock (Day6 Style)", category: "K-POP", desc: "밴드 사운드와 감성 보컬의 청춘 록 발라드입니다.", attr: [7, 2, 8, 6, 8], tags: ["Band", "Emotional", "Youth"], 
    prompts: [
      { text: "k-pop band style, emotional rock ballad, powerful drums", desc: "가슴 벅찬 청춘의 밴드 사운드" },
      { text: "bittersweet k-pop rock, driving rhythm, hopeful melody", desc: "아련하면서 희망찬 록 발라드" },
      { text: "pop-punk kpop, high energy, fast guitar, rebellious youth", desc: "반항적이고 활기찬 팝 펑크 스타일" },
      { text: "acoustic rock kpop, warm band sound, nostalgic, intimate", desc: "따스하고 소박한 밴드 연주곡" },
      { text: "anthem rock kpop, stadium vibe, big chorus, unity", desc: "경기장을 채우는 웅장한 떼창 록" },
      { text: "modern rock kpop, synth layers, sophisticated, cool", desc: "신스 사운드가 세련되게 입혀진 현대적 록" }
    ]
  },
  { id: 119, name: "K-Pop: Indie Pop", category: "K-POP", desc: "잔잔한 어쿠스틱과 독보적 감성의 인디 음악입니다.", attr: [4, 2, 9, 8, 5], tags: ["Coffee Shop", "Minimal", "Indie"], 
    prompts: [
      { text: "k-indie, soft acoustic, coffee shop music, minimal", desc: "카페에서 듣기 좋은 잔잔한 무드" },
      { text: "dreamy k-indie, hazy guitar, slow tempo, introspective", desc: "나른하고 감성적인 인디 팝 선율" },
      { text: "warm k-indie, male and female duet, sweet, homey", desc: "포근하고 다정한 남녀 듀엣 곡" },
      { text: "quirky k-indie, playful ukulele, lighthearted, unique", desc: "개성 있고 귀여운 인디 스타일" },
      { text: "lo-fi indie pop kpop, dusty beats, melancholic, real", desc: "로우파이한 질감의 솔직한 인디 팝" },
      { text: "city night k-indie, electric piano, smooth, lonely but peaceful", desc: "평화롭지만 고독한 밤의 인디 사운드" }
    ]
  },
  { id: 120, name: "K-Pop: Techno/Rave", category: "K-POP", desc: "강렬한 비트와 댄스 브레이크 중심의 스타일입니다.", attr: [10, 10, 0, 4, 7], tags: ["Dance Break", "Club", "Powerful"], 
    prompts: [
      { text: "k-pop club banger, techno influence, massive drop", desc: "클럽을 흔들 강력한 댄스 퍼포먼스" },
      { text: "futuristic k-pop dance, high bpm, pulse, electrifying", desc: "심박수를 높이는 빠른 비트의 곡" },
      { text: "rave style kpop, heavy laser synths, hard kicks, high energy", desc: "레이브 파티 무드의 강렬한 EDM" },
      { text: "cyberpunk dance kpop, glitchy, high tech, powerful bass", desc: "사이버네틱한 무드의 테크노 댄스" },
      { text: "acid house kpop, funky 303 bass, repetitive, hypnotic", desc: "중독적이고 최면적인 하우스 케이팝" },
      { text: "big room house kpop, festival vibe, huge anthem, intense", desc: "축제 현장을 사로잡는 웅장한 댄스" }
    ]
  }
];