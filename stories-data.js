// Stories data - embedded to avoid CORS issues when opening HTML directly
const STORIES_DATA ={
  "stories": [
    {
      "id": "pre-k-cat-nap",
      "title": "The Cat's Nap",
      "level": "pre-k",
      "topic": ["animals", "bedtime"],
      "wordCount": 24,
      "readabilityScore": 1.0,
      "phonicsPatterns": ["short-a", "cvc"],
      "estimatedMinutes": 2,
      "coverImage": "🐱",
      "pages": [
        {
          "pageNumber": 1,
          "content": "The cat sat on the mat.",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "cat", "phonics": "/kæt/", "definition": "A small furry pet that meows", "imageEmoji": "🐱"},
            {"text": "sat", "phonics": "/sæt/", "definition": "Past tense of sit - to rest on your bottom", "imageEmoji": "🪑"},
            {"text": "on", "phonics": "/ɑn/", "definition": "On top of something", "imageEmoji": "⬆️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "mat", "phonics": "/mæt/", "definition": "A small rug or carpet you can sit on", "imageEmoji": "🧘"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "The cat had a nap.",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "cat", "phonics": "/kæt/", "definition": "A small furry pet that meows", "imageEmoji": "🐱"},
            {"text": "had", "phonics": "/hæd/", "definition": "Past tense of have - to possess or experience", "imageEmoji": "✋"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "nap", "phonics": "/næp/", "definition": "A short sleep during the day", "imageEmoji": "😴"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "The cat woke up and was happy!",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "cat", "phonics": "/kæt/", "definition": "A small furry pet that meows", "imageEmoji": "🐱"},
            {"text": "woke", "phonics": "/woʊk/", "definition": "Past tense of wake - to stop sleeping", "imageEmoji": "👀"},
            {"text": "up", "phonics": "/ʌp/", "definition": "Moving toward a higher position", "imageEmoji": "⬆️"},
            {"text": "and", "phonics": "/ænd/", "definition": "Used to connect words or ideas", "imageEmoji": "➕"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is - to be something", "imageEmoji": "✨"},
            {"text": "happy", "phonics": "/ˈhæpi/", "definition": "Feeling good and joyful", "imageEmoji": "😊"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "Where did the cat sit?",
          "options": ["On the mat", "In a tree", "On a chair"],
          "correctAnswer": 0,
          "explanation": "The story says the cat sat on the mat!"
        },
        {
          "question": "What did the cat do?",
          "options": ["Had a nap", "Ate food", "Played outside"],
          "correctAnswer": 0,
          "explanation": "Great! The cat had a nap!"
        },
        {
          "question": "How did the cat feel when it woke up?",
          "options": ["Happy", "Sad", "Angry"],
          "correctAnswer": 0,
          "explanation": "Perfect! The cat woke up and was happy!"
        }
      ]
    },
    {
      "id": "pre-k-happy-duck",
      "title": "The Happy Duck",
      "level": "pre-k",
      "topic": ["animals", "water", "fun"],
      "wordCount": 30,
      "readabilityScore": 1.0,
      "phonicsPatterns": ["short-u", "cvc"],
      "estimatedMinutes": 2,
      "coverImage": "🦆",
      "pages": [
        {
          "pageNumber": 1,
          "content": "The duck is in the pond.",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "duck", "phonics": "/dʌk/", "definition": "A water bird that says quack", "imageEmoji": "🦆"},
            {"text": "is", "phonics": "/ɪz/", "definition": "To be something", "imageEmoji": "✨"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Inside or within a place", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "pond", "phonics": "/pɑnd/", "definition": "A small area of water", "imageEmoji": "💧"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "The duck can swim and splash!",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "duck", "phonics": "/dʌk/", "definition": "A water bird that says quack", "imageEmoji": "🦆"},
            {"text": "can", "phonics": "/kæn/", "definition": "To be able to do something", "imageEmoji": "💪"},
            {"text": "swim", "phonics": "/swɪm/", "definition": "To move through water", "imageEmoji": "🏊"},
            {"text": "and", "phonics": "/ænd/", "definition": "Used to connect words", "imageEmoji": "➕"},
            {"text": "splash", "phonics": "/splæʃ/", "definition": "To make water fly around", "imageEmoji": "💦"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "The duck says quack quack quack!",
          "words": [
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "duck", "phonics": "/dʌk/", "definition": "A water bird that says quack", "imageEmoji": "🦆"},
            {"text": "says", "phonics": "/sɛz/", "definition": "To speak or make a sound", "imageEmoji": "💬"},
            {"text": "quack", "phonics": "/kwæk/", "definition": "The sound a duck makes", "imageEmoji": "🔊"},
            {"text": "quack", "phonics": "/kwæk/", "definition": "The sound a duck makes", "imageEmoji": "🔊"},
            {"text": "quack", "phonics": "/kwæk/", "definition": "The sound a duck makes", "imageEmoji": "🔊"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "Where is the duck?",
          "options": ["In the pond", "In a tree", "In a house"],
          "correctAnswer": 0,
          "explanation": "Great! The duck is in the pond!"
        },
        {
          "question": "What can the duck do?",
          "options": ["Swim and splash", "Fly high", "Run fast"],
          "correctAnswer": 0,
          "explanation": "Perfect! The duck can swim and splash!"
        },
        {
          "question": "What sound does the duck make?",
          "options": ["Quack quack", "Meow meow", "Woof woof"],
          "correctAnswer": 0,
          "explanation": "Yes! The duck says quack quack quack!"
        }
      ]
    },
    {
      "id": "k-big-red-ball",
      "title": "The Big Red Ball",
      "level": "k",
      "topic": ["toys", "friends"],
      "wordCount": 78,
      "readabilityScore": 1.5,
      "phonicsPatterns": ["short-e", "digraphs", "blends"],
      "estimatedMinutes": 3,
      "coverImage": "⚽",
      "pages": [
        {
          "pageNumber": 1,
          "content": "Emma had a big red ball.",
          "words": [
            {"text": "Emma", "phonics": "/ˈɛmə/", "definition": "A girl's name", "imageEmoji": "👧"},
            {"text": "had", "phonics": "/hæd/", "definition": "Past tense of have - to possess something", "imageEmoji": "✋"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "big", "phonics": "/bɪɡ/", "definition": "Large in size", "imageEmoji": "📏"},
            {"text": "red", "phonics": "/rɛd/", "definition": "A color like an apple or fire truck", "imageEmoji": "🔴"},
            {"text": "ball", "phonics": "/bɔl/", "definition": "A round toy you can throw and catch", "imageEmoji": "⚽"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "She played with the ball in the park. She kicked it high into the sky!",
          "words": [
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a girl or woman", "imageEmoji": "👧"},
            {"text": "played", "phonics": "/pleɪd/", "definition": "Had fun doing an activity", "imageEmoji": "🎮"},
            {"text": "with", "phonics": "/wɪθ/", "definition": "Together or alongside", "imageEmoji": "🤝"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "ball", "phonics": "/bɔl/", "definition": "A round toy you can throw and catch", "imageEmoji": "⚽"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Inside or within a place", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "park", "phonics": "/pɑrk/", "definition": "A place with grass and trees where people play", "imageEmoji": "🏞️"},
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a girl or woman", "imageEmoji": "👧"},
            {"text": "kicked", "phonics": "/kɪkt/", "definition": "Hit something with your foot", "imageEmoji": "🦵"},
            {"text": "it", "phonics": "/ɪt/", "definition": "Refers to a thing", "imageEmoji": "👈"},
            {"text": "high", "phonics": "/haɪ/", "definition": "Far up in the air", "imageEmoji": "⬆️"},
            {"text": "into", "phonics": "/ˈɪntu/", "definition": "Moving toward the inside of", "imageEmoji": "➡️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "sky", "phonics": "/skaɪ/", "definition": "The space above us where clouds and birds are", "imageEmoji": "☁️"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "Her friend Ben came to play. They threw the ball back and forth all day!",
          "words": [
            {"text": "Her", "phonics": "/hɜr/", "definition": "Belonging to a girl or woman", "imageEmoji": "👧"},
            {"text": "friend", "phonics": "/frɛnd/", "definition": "Someone you like and play with", "imageEmoji": "👫"},
            {"text": "Ben", "phonics": "/bɛn/", "definition": "A boy's name", "imageEmoji": "👦"},
            {"text": "came", "phonics": "/keɪm/", "definition": "Past tense of come - to move toward", "imageEmoji": "👉"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show direction or purpose", "imageEmoji": "➡️"},
            {"text": "play", "phonics": "/pleɪ/", "definition": "To have fun doing activities", "imageEmoji": "🎮"},
            {"text": "They", "phonics": "/ðeɪ/", "definition": "Two or more people", "imageEmoji": "👥"},
            {"text": "threw", "phonics": "/θru/", "definition": "Past tense of throw - to make something fly through the air", "imageEmoji": "🏀"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "ball", "phonics": "/bɔl/", "definition": "A round toy you can throw and catch", "imageEmoji": "⚽"},
            {"text": "back", "phonics": "/bæk/", "definition": "To return to where it came from", "imageEmoji": "↩️"},
            {"text": "and", "phonics": "/ænd/", "definition": "Used to connect words or ideas", "imageEmoji": "➕"},
            {"text": "forth", "phonics": "/fɔrθ/", "definition": "Moving forward in direction", "imageEmoji": "↪️"},
            {"text": "all", "phonics": "/ɔl/", "definition": "Every part of something", "imageEmoji": "💯"},
            {"text": "day", "phonics": "/deɪ/", "definition": "The time when the sun is up", "imageEmoji": "☀️"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "What color was Emma's ball?",
          "options": ["Red", "Blue", "Green"],
          "correctAnswer": 0,
          "explanation": "That's right! Emma had a big RED ball!"
        },
        {
          "question": "Where did Emma play with the ball?",
          "options": ["In the park", "At home", "At school"],
          "correctAnswer": 0,
          "explanation": "Correct! She played with the ball in the park!"
        },
        {
          "question": "Who came to play with Emma?",
          "options": ["Her friend Ben", "Her mom", "Her teacher"],
          "correctAnswer": 0,
          "explanation": "Excellent! Her friend Ben came to play with her!"
        }
      ]
    },
    {
      "id": "k-pizza-day",
      "title": "Pizza Day",
      "level": "k",
      "topic": ["food", "cooking", "family"],
      "wordCount": 65,
      "readabilityScore": 1.5,
      "phonicsPatterns": ["long-a", "digraphs"],
      "estimatedMinutes": 3,
      "coverImage": "🍕",
      "pages": [
        {
          "pageNumber": 1,
          "content": "Today we are making pizza! Mom gets the dough ready.",
          "words": [
            {"text": "Today", "phonics": "/təˈdeɪ/", "definition": "This very day", "imageEmoji": "📅"},
            {"text": "we", "phonics": "/wi/", "definition": "You and me together", "imageEmoji": "👥"},
            {"text": "are", "phonics": "/ɑr/", "definition": "To be or exist", "imageEmoji": "✨"},
            {"text": "making", "phonics": "/ˈmeɪkɪŋ/", "definition": "Creating or building something", "imageEmoji": "🔨"},
            {"text": "pizza", "phonics": "/ˈpitsə/", "definition": "A flat bread with cheese and toppings", "imageEmoji": "🍕"},
            {"text": "Mom", "phonics": "/mɑm/", "definition": "Your mother", "imageEmoji": "👩"},
            {"text": "gets", "phonics": "/ɡɛts/", "definition": "To obtain or prepare", "imageEmoji": "✋"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "dough", "phonics": "/doʊ/", "definition": "A soft mixture used to make bread", "imageEmoji": "🥖"},
            {"text": "ready", "phonics": "/ˈrɛdi/", "definition": "Prepared and waiting", "imageEmoji": "✅"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "I put red sauce on top. Then I add lots of cheese!",
          "words": [
            {"text": "I", "phonics": "/aɪ/", "definition": "Yourself", "imageEmoji": "👦"},
            {"text": "put", "phonics": "/pʊt/", "definition": "To place something somewhere", "imageEmoji": "👇"},
            {"text": "red", "phonics": "/rɛd/", "definition": "A color like an apple", "imageEmoji": "🔴"},
            {"text": "sauce", "phonics": "/sɔs/", "definition": "A thick liquid for flavor", "imageEmoji": "🥫"},
            {"text": "on", "phonics": "/ɑn/", "definition": "On top of", "imageEmoji": "⬆️"},
            {"text": "top", "phonics": "/tɑp/", "definition": "The highest part", "imageEmoji": "🔝"},
            {"text": "Then", "phonics": "/ðɛn/", "definition": "After that, next", "imageEmoji": "⏭️"},
            {"text": "I", "phonics": "/aɪ/", "definition": "Yourself", "imageEmoji": "👦"},
            {"text": "add", "phonics": "/æd/", "definition": "To put more of something", "imageEmoji": "➕"},
            {"text": "lots", "phonics": "/lɑts/", "definition": "A large amount", "imageEmoji": "💯"},
            {"text": "of", "phonics": "/ʌv/", "definition": "Belonging to or part of", "imageEmoji": "📦"},
            {"text": "cheese", "phonics": "/tʃiz/", "definition": "A yellow dairy food", "imageEmoji": "🧀"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "We bake it in the oven. The pizza smells so good! Yum yum!",
          "words": [
            {"text": "We", "phonics": "/wi/", "definition": "You and me together", "imageEmoji": "👥"},
            {"text": "bake", "phonics": "/beɪk/", "definition": "To cook in an oven", "imageEmoji": "🔥"},
            {"text": "it", "phonics": "/ɪt/", "definition": "Refers to a thing", "imageEmoji": "👈"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Inside", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "oven", "phonics": "/ˈʌvən/", "definition": "A hot box for cooking food", "imageEmoji": "🔥"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "pizza", "phonics": "/ˈpitsə/", "definition": "A flat bread with cheese and toppings", "imageEmoji": "🍕"},
            {"text": "smells", "phonics": "/smɛlz/", "definition": "What your nose senses", "imageEmoji": "👃"},
            {"text": "so", "phonics": "/soʊ/", "definition": "Very much", "imageEmoji": "💯"},
            {"text": "good", "phonics": "/ɡʊd/", "definition": "Pleasant or nice", "imageEmoji": "👍"},
            {"text": "Yum", "phonics": "/jʌm/", "definition": "Expression when food tastes delicious", "imageEmoji": "😋"},
            {"text": "yum", "phonics": "/jʌm/", "definition": "Expression when food tastes delicious", "imageEmoji": "😋"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "What are we making today?",
          "options": ["Pizza", "Cake", "Soup"],
          "correctAnswer": 0,
          "explanation": "Correct! We are making pizza!"
        },
        {
          "question": "What did I add on top of the sauce?",
          "options": ["Cheese", "Apples", "Ice cream"],
          "correctAnswer": 0,
          "explanation": "Great job! You added lots of cheese!"
        },
        {
          "question": "Where do we bake the pizza?",
          "options": ["In the oven", "In the fridge", "Outside"],
          "correctAnswer": 0,
          "explanation": "Perfect! We bake the pizza in the oven!"
        }
      ]
    },
    {
      "id": "grade-1-the-garden",
      "title": "The Garden",
      "level": "grade-1",
      "topic": ["nature", "gardening", "patience"],
      "wordCount": 142,
      "readabilityScore": 2.0,
      "phonicsPatterns": ["long-vowels", "r-controlled", "multi-syllable"],
      "estimatedMinutes": 4,
      "coverImage": "🌱",
      "pages": [
        {
          "pageNumber": 1,
          "content": "Maya loved to help her grandmother in the garden. Every spring, they planted seeds together.",
          "words": [
            {"text": "Maya", "phonics": "/ˈmaɪə/", "definition": "A girl's name", "imageEmoji": "👧"},
            {"text": "loved", "phonics": "/lʌvd/", "definition": "Had strong feelings of care and joy for something", "imageEmoji": "❤️"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "help", "phonics": "/hɛlp/", "definition": "To do something useful for someone", "imageEmoji": "🤝"},
            {"text": "her", "phonics": "/hɜr/", "definition": "Belonging to a girl or woman", "imageEmoji": "👧"},
            {"text": "grandmother", "phonics": "/ˈɡrænˌmʌðər/", "definition": "Your parent's mother", "imageEmoji": "👵"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Inside or within a place", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "garden", "phonics": "/ˈɡɑrdən/", "definition": "A place where you grow flowers and vegetables", "imageEmoji": "🌻"},
            {"text": "Every", "phonics": "/ˈɛvri/", "definition": "Each one without exception", "imageEmoji": "💯"},
            {"text": "spring", "phonics": "/sprɪŋ/", "definition": "The season after winter when flowers bloom", "imageEmoji": "🌸"},
            {"text": "they", "phonics": "/ðeɪ/", "definition": "Two or more people", "imageEmoji": "👥"},
            {"text": "planted", "phonics": "/ˈplæntɪd/", "definition": "Put seeds or plants into the ground", "imageEmoji": "🌱"},
            {"text": "seeds", "phonics": "/sidz/", "definition": "Tiny parts of plants that grow into new plants", "imageEmoji": "🌰"},
            {"text": "together", "phonics": "/təˈɡɛðər/", "definition": "With each other at the same time", "imageEmoji": "🤝"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "Maya's favorite seeds were sunflowers. She watered them every day and watched them carefully.",
          "words": [
            {"text": "Maya's", "phonics": "/ˈmaɪəz/", "definition": "Belonging to Maya", "imageEmoji": "👧"},
            {"text": "favorite", "phonics": "/ˈfeɪvərɪt/", "definition": "The one you like best", "imageEmoji": "⭐"},
            {"text": "seeds", "phonics": "/sidz/", "definition": "Tiny parts of plants that grow into new plants", "imageEmoji": "🌰"},
            {"text": "were", "phonics": "/wɜr/", "definition": "Past tense of are - to be something", "imageEmoji": "✨"},
            {"text": "sunflowers", "phonics": "/ˈsʌnˌflaʊərz/", "definition": "Tall yellow flowers that face the sun", "imageEmoji": "🌻"},
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a girl or woman", "imageEmoji": "👧"},
            {"text": "watered", "phonics": "/ˈwɔtərd/", "definition": "Gave water to plants", "imageEmoji": "💧"},
            {"text": "them", "phonics": "/ðɛm/", "definition": "Those people or things", "imageEmoji": "👈"},
            {"text": "every", "phonics": "/ˈɛvri/", "definition": "Each one without exception", "imageEmoji": "💯"},
            {"text": "day", "phonics": "/deɪ/", "definition": "24 hours when the sun comes up and goes down", "imageEmoji": "☀️"},
            {"text": "and", "phonics": "/ænd/", "definition": "Used to connect words or ideas", "imageEmoji": "➕"},
            {"text": "watched", "phonics": "/wɑtʃt/", "definition": "Looked at carefully", "imageEmoji": "👀"},
            {"text": "them", "phonics": "/ðɛm/", "definition": "Those people or things", "imageEmoji": "👈"},
            {"text": "carefully", "phonics": "/ˈkɛrfəli/", "definition": "With close attention and care", "imageEmoji": "🔍"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "Then one morning, Maya saw something amazing! A tiny green sprout pushed up through the soil.",
          "words": [
            {"text": "Then", "phonics": "/ðɛn/", "definition": "After that, next", "imageEmoji": "⏭️"},
            {"text": "one", "phonics": "/wʌn/", "definition": "A single thing", "imageEmoji": "1️⃣"},
            {"text": "morning", "phonics": "/ˈmɔrnɪŋ/", "definition": "The early part of the day", "imageEmoji": "🌅"},
            {"text": "Maya", "phonics": "/ˈmaɪə/", "definition": "A girl's name", "imageEmoji": "👧"},
            {"text": "saw", "phonics": "/sɔ/", "definition": "Past tense of see - to notice with your eyes", "imageEmoji": "👀"},
            {"text": "something", "phonics": "/ˈsʌmθɪŋ/", "definition": "A thing that is not named", "imageEmoji": "❓"},
            {"text": "amazing", "phonics": "/əˈmeɪzɪŋ/", "definition": "Very surprising and wonderful", "imageEmoji": "✨"},
            {"text": "A", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "tiny", "phonics": "/ˈtaɪni/", "definition": "Very very small", "imageEmoji": "🔬"},
            {"text": "green", "phonics": "/ɡrin/", "definition": "A color like grass and leaves", "imageEmoji": "🟢"},
            {"text": "sprout", "phonics": "/spraʊt/", "definition": "A young plant just starting to grow", "imageEmoji": "🌱"},
            {"text": "pushed", "phonics": "/pʊʃt/", "definition": "Moved by pressing forward", "imageEmoji": "✊"},
            {"text": "up", "phonics": "/ʌp/", "definition": "Toward a higher position", "imageEmoji": "⬆️"},
            {"text": "through", "phonics": "/θru/", "definition": "From one side to the other", "imageEmoji": "➡️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "soil", "phonics": "/sɔɪl/", "definition": "The dirt where plants grow", "imageEmoji": "🌍"}
          ]
        },
        {
          "pageNumber": 4,
          "content": "By summer, the sunflower was taller than Maya! She learned that good things take time to grow.",
          "words": [
            {"text": "By", "phonics": "/baɪ/", "definition": "Not later than", "imageEmoji": "⏰"},
            {"text": "summer", "phonics": "/ˈsʌmər/", "definition": "The hot season after spring", "imageEmoji": "☀️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "sunflower", "phonics": "/ˈsʌnˌflaʊər/", "definition": "A tall yellow flower that faces the sun", "imageEmoji": "🌻"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is - to be something", "imageEmoji": "✨"},
            {"text": "taller", "phonics": "/ˈtɔlər/", "definition": "More high than before", "imageEmoji": "⬆️"},
            {"text": "than", "phonics": "/ðæn/", "definition": "Used to compare two things", "imageEmoji": "⚖️"},
            {"text": "Maya", "phonics": "/ˈmaɪə/", "definition": "A girl's name", "imageEmoji": "👧"},
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a girl or woman", "imageEmoji": "👧"},
            {"text": "learned", "phonics": "/lɜrnd/", "definition": "Gained knowledge or understanding", "imageEmoji": "📚"},
            {"text": "that", "phonics": "/ðæt/", "definition": "Used to introduce information", "imageEmoji": "💡"},
            {"text": "good", "phonics": "/ɡʊd/", "definition": "Pleasant or nice", "imageEmoji": "👍"},
            {"text": "things", "phonics": "/θɪŋz/", "definition": "Objects or ideas", "imageEmoji": "📦"},
            {"text": "take", "phonics": "/teɪk/", "definition": "To need or require", "imageEmoji": "⏳"},
            {"text": "time", "phonics": "/taɪm/", "definition": "The passing of seconds, minutes, hours", "imageEmoji": "⏰"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "grow", "phonics": "/ɡroʊ/", "definition": "To become bigger or develop", "imageEmoji": "📏"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "Who did Maya help in the garden?",
          "options": ["Her grandmother", "Her teacher", "Her friend"],
          "correctAnswer": 0,
          "explanation": "That's right! Maya loved to help her grandmother in the garden!"
        },
        {
          "question": "What kind of seeds did Maya plant?",
          "options": ["Sunflower seeds", "Tomato seeds", "Rose seeds"],
          "correctAnswer": 0,
          "explanation": "Perfect! Maya's favorite seeds were sunflowers!"
        },
        {
          "question": "What lesson did Maya learn?",
          "options": ["Good things take time to grow", "Plants don't need water", "Flowers grow in one day"],
          "correctAnswer": 0,
          "explanation": "Excellent! Maya learned that good things take time to grow!"
        }
      ]
    },
    {
      "id": "grade-1-lost-puppy",
      "title": "The Lost Puppy",
      "level": "grade-1",
      "topic": ["animals", "kindness", "helping"],
      "wordCount": 120,
      "readabilityScore": 2.0,
      "phonicsPatterns": ["long-vowels", "blends"],
      "estimatedMinutes": 4,
      "coverImage": "🐕",
      "pages": [
        {
          "pageNumber": 1,
          "content": "Jake was walking home from school. He heard a small sound. Whimper, whimper!",
          "words": [
            {"text": "Jake", "phonics": "/dʒeɪk/", "definition": "A boy's name", "imageEmoji": "👦"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "walking", "phonics": "/ˈwɔkɪŋ/", "definition": "Moving on foot", "imageEmoji": "🚶"},
            {"text": "home", "phonics": "/hoʊm/", "definition": "The place where you live", "imageEmoji": "🏠"},
            {"text": "from", "phonics": "/frʌm/", "definition": "Starting at a place", "imageEmoji": "📍"},
            {"text": "school", "phonics": "/skul/", "definition": "A place where children learn", "imageEmoji": "🏫"},
            {"text": "He", "phonics": "/hi/", "definition": "Refers to a boy or man", "imageEmoji": "👦"},
            {"text": "heard", "phonics": "/hɜrd/", "definition": "Sensed with your ears", "imageEmoji": "👂"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "small", "phonics": "/smɔl/", "definition": "Little or tiny", "imageEmoji": "🔬"},
            {"text": "sound", "phonics": "/saʊnd/", "definition": "Something you hear", "imageEmoji": "🔊"},
            {"text": "Whimper", "phonics": "/ˈwɪmpər/", "definition": "A soft crying sound", "imageEmoji": "😢"},
            {"text": "whimper", "phonics": "/ˈwɪmpər/", "definition": "A soft crying sound", "imageEmoji": "😢"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "Behind a bush, he found a tiny puppy. The puppy looked scared and alone. It had no collar.",
          "words": [
            {"text": "Behind", "phonics": "/bɪˈhaɪnd/", "definition": "At the back of", "imageEmoji": "👈"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "bush", "phonics": "/bʊʃ/", "definition": "A small plant with leaves", "imageEmoji": "🌿"},
            {"text": "he", "phonics": "/hi/", "definition": "Refers to a boy or man", "imageEmoji": "👦"},
            {"text": "found", "phonics": "/faʊnd/", "definition": "Discovered something", "imageEmoji": "🔍"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "tiny", "phonics": "/ˈtaɪni/", "definition": "Very small", "imageEmoji": "🔬"},
            {"text": "puppy", "phonics": "/ˈpʌpi/", "definition": "A baby dog", "imageEmoji": "🐕"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "puppy", "phonics": "/ˈpʌpi/", "definition": "A baby dog", "imageEmoji": "🐕"},
            {"text": "looked", "phonics": "/lʊkt/", "definition": "Appeared to be", "imageEmoji": "👀"},
            {"text": "scared", "phonics": "/skɛrd/", "definition": "Feeling afraid", "imageEmoji": "😨"},
            {"text": "and", "phonics": "/ænd/", "definition": "Plus, also", "imageEmoji": "➕"},
            {"text": "alone", "phonics": "/əˈloʊn/", "definition": "By yourself with no one else", "imageEmoji": "😔"},
            {"text": "It", "phonics": "/ɪt/", "definition": "Refers to a thing or animal", "imageEmoji": "👈"},
            {"text": "had", "phonics": "/hæd/", "definition": "Possessed or owned", "imageEmoji": "✋"},
            {"text": "no", "phonics": "/noʊ/", "definition": "Not any", "imageEmoji": "🚫"},
            {"text": "collar", "phonics": "/ˈkɑlər/", "definition": "A band worn around a pet's neck", "imageEmoji": "⭕"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "Jake picked up the puppy gently. 'Don't worry, little one. I will help you find your home,' he said softly.",
          "words": [
            {"text": "Jake", "phonics": "/dʒeɪk/", "definition": "A boy's name", "imageEmoji": "👦"},
            {"text": "picked", "phonics": "/pɪkt/", "definition": "Lifted up with hands", "imageEmoji": "✋"},
            {"text": "up", "phonics": "/ʌp/", "definition": "In an upward direction", "imageEmoji": "⬆️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "puppy", "phonics": "/ˈpʌpi/", "definition": "A baby dog", "imageEmoji": "🐕"},
            {"text": "gently", "phonics": "/ˈdʒɛntli/", "definition": "In a soft and careful way", "imageEmoji": "🤲"},
            {"text": "Don't", "phonics": "/doʊnt/", "definition": "Do not", "imageEmoji": "🚫"},
            {"text": "worry", "phonics": "/ˈwɜri/", "definition": "To feel anxious or concerned", "imageEmoji": "😟"},
            {"text": "little", "phonics": "/ˈlɪtəl/", "definition": "Small in size", "imageEmoji": "🔬"},
            {"text": "one", "phonics": "/wʌn/", "definition": "A single thing", "imageEmoji": "1️⃣"},
            {"text": "I", "phonics": "/aɪ/", "definition": "Yourself", "imageEmoji": "👦"},
            {"text": "will", "phonics": "/wɪl/", "definition": "Going to do something", "imageEmoji": "💪"},
            {"text": "help", "phonics": "/hɛlp/", "definition": "To assist someone", "imageEmoji": "🤝"},
            {"text": "you", "phonics": "/ju/", "definition": "The person being spoken to", "imageEmoji": "👈"},
            {"text": "find", "phonics": "/faɪnd/", "definition": "To discover or locate", "imageEmoji": "🔍"},
            {"text": "your", "phonics": "/jʊr/", "definition": "Belonging to you", "imageEmoji": "👈"},
            {"text": "home", "phonics": "/hoʊm/", "definition": "The place where you live", "imageEmoji": "🏠"},
            {"text": "he", "phonics": "/hi/", "definition": "Refers to a boy or man", "imageEmoji": "👦"},
            {"text": "said", "phonics": "/sɛd/", "definition": "Spoke words", "imageEmoji": "💬"},
            {"text": "softly", "phonics": "/ˈsɔftli/", "definition": "In a quiet and gentle way", "imageEmoji": "🤫"}
          ]
        },
        {
          "pageNumber": 4,
          "content": "Jake took the puppy to the animal shelter. The next day, the puppy's family came to get him. Everyone was so happy!",
          "words": [
            {"text": "Jake", "phonics": "/dʒeɪk/", "definition": "A boy's name", "imageEmoji": "👦"},
            {"text": "took", "phonics": "/tʊk/", "definition": "Past tense of take - to carry", "imageEmoji": "✋"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "puppy", "phonics": "/ˈpʌpi/", "definition": "A baby dog", "imageEmoji": "🐕"},
            {"text": "to", "phonics": "/tu/", "definition": "In the direction of", "imageEmoji": "➡️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "animal", "phonics": "/ˈænəməl/", "definition": "A living creature that is not human", "imageEmoji": "🐾"},
            {"text": "shelter", "phonics": "/ˈʃɛltər/", "definition": "A safe place for animals", "imageEmoji": "🏠"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "next", "phonics": "/nɛkst/", "definition": "Coming after this one", "imageEmoji": "⏭️"},
            {"text": "day", "phonics": "/deɪ/", "definition": "A 24-hour period", "imageEmoji": "📅"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "puppy's", "phonics": "/ˈpʌpiz/", "definition": "Belonging to the puppy", "imageEmoji": "🐕"},
            {"text": "family", "phonics": "/ˈfæməli/", "definition": "People related to each other", "imageEmoji": "👨‍👩‍👧"},
            {"text": "came", "phonics": "/keɪm/", "definition": "Arrived at a place", "imageEmoji": "👉"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "get", "phonics": "/ɡɛt/", "definition": "To obtain or pick up", "imageEmoji": "✋"},
            {"text": "him", "phonics": "/hɪm/", "definition": "Refers to a boy or male animal", "imageEmoji": "👦"},
            {"text": "Everyone", "phonics": "/ˈɛvriˌwʌn/", "definition": "All the people", "imageEmoji": "👥"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "so", "phonics": "/soʊ/", "definition": "Very much", "imageEmoji": "💯"},
            {"text": "happy", "phonics": "/ˈhæpi/", "definition": "Feeling joy and pleasure", "imageEmoji": "😊"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "What did Jake hear on his way home?",
          "options": ["A whimpering sound", "Music", "Thunder"],
          "correctAnswer": 0,
          "explanation": "Correct! Jake heard a whimpering sound!"
        },
        {
          "question": "Where did Jake find the puppy?",
          "options": ["Behind a bush", "In a tree", "At his house"],
          "correctAnswer": 0,
          "explanation": "Great! Jake found the puppy behind a bush!"
        },
        {
          "question": "Where did Jake take the puppy?",
          "options": ["To the animal shelter", "To the park", "To school"],
          "correctAnswer": 0,
          "explanation": "Perfect! Jake took the puppy to the animal shelter to help find its family!"
        }
      ]
    },
    {
      "id": "grade-2-brave-robot",
      "title": "The Brave Little Robot",
      "level": "grade-2",
      "topic": ["technology", "courage", "friendship"],
      "wordCount": 185,
      "readabilityScore": 2.5,
      "phonicsPatterns": ["multi-syllable", "compound-words"],
      "estimatedMinutes": 5,
      "coverImage": "🤖",
      "pages": [
        {
          "pageNumber": 1,
          "content": "In a busy factory, there lived a small robot named Bolt. Unlike the other robots, Bolt was curious about the world outside the factory walls.",
          "words": [
            {"text": "In", "phonics": "/ɪn/", "definition": "Inside a place", "imageEmoji": "📦"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "busy", "phonics": "/ˈbɪzi/", "definition": "Full of activity", "imageEmoji": "⚡"},
            {"text": "factory", "phonics": "/ˈfæktəri/", "definition": "A building where things are made", "imageEmoji": "🏭"},
            {"text": "there", "phonics": "/ðɛr/", "definition": "In that place", "imageEmoji": "👉"},
            {"text": "lived", "phonics": "/lɪvd/", "definition": "Made a home", "imageEmoji": "🏠"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "small", "phonics": "/smɔl/", "definition": "Little in size", "imageEmoji": "🔬"},
            {"text": "robot", "phonics": "/ˈroʊbɑt/", "definition": "A machine that can move and do tasks", "imageEmoji": "🤖"},
            {"text": "named", "phonics": "/neɪmd/", "definition": "Called by a name", "imageEmoji": "📛"},
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "A robot's name, also a metal fastener", "imageEmoji": "🔩"},
            {"text": "Unlike", "phonics": "/ʌnˈlaɪk/", "definition": "Different from", "imageEmoji": "↔️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "other", "phonics": "/ˈʌðər/", "definition": "Different ones", "imageEmoji": "👥"},
            {"text": "robots", "phonics": "/ˈroʊbɑts/", "definition": "Machines that can move and do tasks", "imageEmoji": "🤖"},
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "The robot's name", "imageEmoji": "🔩"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "curious", "phonics": "/ˈkjʊriəs/", "definition": "Wanting to know or learn", "imageEmoji": "🤔"},
            {"text": "about", "phonics": "/əˈbaʊt/", "definition": "Concerning or regarding", "imageEmoji": "💭"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "world", "phonics": "/wɜrld/", "definition": "The earth and everything on it", "imageEmoji": "🌍"},
            {"text": "outside", "phonics": "/ˈaʊtˌsaɪd/", "definition": "Beyond the walls or boundaries", "imageEmoji": "🚪"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "factory", "phonics": "/ˈfæktəri/", "definition": "A building where things are made", "imageEmoji": "🏭"},
            {"text": "walls", "phonics": "/wɔlz/", "definition": "Structures that form the sides of buildings", "imageEmoji": "🧱"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "One day, Bolt heard strange beeping sounds from the storage room. The other robots were too scared to investigate, but Bolt decided to be brave.",
          "words": [
            {"text": "One", "phonics": "/wʌn/", "definition": "A single thing", "imageEmoji": "1️⃣"},
            {"text": "day", "phonics": "/deɪ/", "definition": "A 24-hour period", "imageEmoji": "📅"},
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "The robot's name", "imageEmoji": "🔩"},
            {"text": "heard", "phonics": "/hɜrd/", "definition": "Sensed with ears or sensors", "imageEmoji": "👂"},
            {"text": "strange", "phonics": "/streɪndʒ/", "definition": "Unusual or odd", "imageEmoji": "❓"},
            {"text": "beeping", "phonics": "/ˈbipɪŋ/", "definition": "Making short electronic sounds", "imageEmoji": "📟"},
            {"text": "sounds", "phonics": "/saʊndz/", "definition": "Things you hear", "imageEmoji": "🔊"},
            {"text": "from", "phonics": "/frʌm/", "definition": "Coming out of", "imageEmoji": "📍"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "storage", "phonics": "/ˈstɔrɪdʒ/", "definition": "A place to keep things", "imageEmoji": "📦"},
            {"text": "room", "phonics": "/rum/", "definition": "A space inside a building", "imageEmoji": "🚪"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "other", "phonics": "/ˈʌðər/", "definition": "Different ones", "imageEmoji": "👥"},
            {"text": "robots", "phonics": "/ˈroʊbɑts/", "definition": "Machines that can move and do tasks", "imageEmoji": "🤖"},
            {"text": "were", "phonics": "/wɜr/", "definition": "Past tense of are", "imageEmoji": "✨"},
            {"text": "too", "phonics": "/tu/", "definition": "Excessively or very", "imageEmoji": "💯"},
            {"text": "scared", "phonics": "/skɛrd/", "definition": "Feeling fear", "imageEmoji": "😨"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "investigate", "phonics": "/ɪnˈvɛstəˌɡeɪt/", "definition": "To examine or look into", "imageEmoji": "🔍"},
            {"text": "but", "phonics": "/bʌt/", "definition": "However, on the other hand", "imageEmoji": "↔️"},
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "The robot's name", "imageEmoji": "🔩"},
            {"text": "decided", "phonics": "/dɪˈsaɪdɪd/", "definition": "Made a choice", "imageEmoji": "💡"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "be", "phonics": "/bi/", "definition": "To exist as", "imageEmoji": "✨"},
            {"text": "brave", "phonics": "/breɪv/", "definition": "Having courage despite fear", "imageEmoji": "💪"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "Inside the dark room, Bolt discovered an old robot who was stuck under a heavy box. 'Please help me!' the robot called out weakly.",
          "words": [
            {"text": "Inside", "phonics": "/ɪnˈsaɪd/", "definition": "Within something", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "dark", "phonics": "/dɑrk/", "definition": "Without light", "imageEmoji": "🌑"},
            {"text": "room", "phonics": "/rum/", "definition": "A space inside a building", "imageEmoji": "🚪"},
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "The robot's name", "imageEmoji": "🔩"},
            {"text": "discovered", "phonics": "/dɪˈskʌvərd/", "definition": "Found something", "imageEmoji": "🔍"},
            {"text": "an", "phonics": "/æn/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "old", "phonics": "/oʊld/", "definition": "Not new or young", "imageEmoji": "⏳"},
            {"text": "robot", "phonics": "/ˈroʊbɑt/", "definition": "A machine that can move", "imageEmoji": "🤖"},
            {"text": "who", "phonics": "/hu/", "definition": "Which person or thing", "imageEmoji": "❓"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "stuck", "phonics": "/stʌk/", "definition": "Unable to move", "imageEmoji": "🚫"},
            {"text": "under", "phonics": "/ˈʌndər/", "definition": "Below something", "imageEmoji": "⬇️"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "heavy", "phonics": "/ˈhɛvi/", "definition": "Weighing a lot", "imageEmoji": "⚖️"},
            {"text": "box", "phonics": "/bɑks/", "definition": "A container with sides", "imageEmoji": "📦"},
            {"text": "Please", "phonics": "/pliz/", "definition": "A polite word when asking", "imageEmoji": "🙏"},
            {"text": "help", "phonics": "/hɛlp/", "definition": "To assist someone", "imageEmoji": "🤝"},
            {"text": "me", "phonics": "/mi/", "definition": "Yourself", "imageEmoji": "👈"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "robot", "phonics": "/ˈroʊbɑt/", "definition": "A machine that can move", "imageEmoji": "🤖"},
            {"text": "called", "phonics": "/kɔld/", "definition": "Shouted or said loudly", "imageEmoji": "📢"},
            {"text": "out", "phonics": "/aʊt/", "definition": "Away from inside", "imageEmoji": "🚪"},
            {"text": "weakly", "phonics": "/ˈwikli/", "definition": "Without strength", "imageEmoji": "😓"}
          ]
        },
        {
          "pageNumber": 4,
          "content": "Bolt used all his strength to lift the box. The old robot was free! From that day on, all the robots knew that being small doesn't mean you can't be brave and strong.",
          "words": [
            {"text": "Bolt", "phonics": "/boʊlt/", "definition": "The robot's name", "imageEmoji": "🔩"},
            {"text": "used", "phonics": "/juzd/", "definition": "Made use of", "imageEmoji": "🔧"},
            {"text": "all", "phonics": "/ɔl/", "definition": "Every bit of", "imageEmoji": "💯"},
            {"text": "his", "phonics": "/hɪz/", "definition": "Belonging to him", "imageEmoji": "👈"},
            {"text": "strength", "phonics": "/strɛŋθ/", "definition": "Physical power", "imageEmoji": "💪"},
            {"text": "to", "phonics": "/tu/", "definition": "Used to show purpose", "imageEmoji": "➡️"},
            {"text": "lift", "phonics": "/lɪft/", "definition": "To raise up", "imageEmoji": "⬆️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "box", "phonics": "/bɑks/", "definition": "A container", "imageEmoji": "📦"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "old", "phonics": "/oʊld/", "definition": "Not new", "imageEmoji": "⏳"},
            {"text": "robot", "phonics": "/ˈroʊbɑt/", "definition": "A machine that can move", "imageEmoji": "🤖"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "free", "phonics": "/fri/", "definition": "Not trapped or stuck", "imageEmoji": "🕊️"},
            {"text": "From", "phonics": "/frʌm/", "definition": "Starting at", "imageEmoji": "📍"},
            {"text": "that", "phonics": "/ðæt/", "definition": "Refers to something specific", "imageEmoji": "👉"},
            {"text": "day", "phonics": "/deɪ/", "definition": "A 24-hour period", "imageEmoji": "📅"},
            {"text": "on", "phonics": "/ɑn/", "definition": "Continuing forward", "imageEmoji": "➡️"},
            {"text": "all", "phonics": "/ɔl/", "definition": "Every one", "imageEmoji": "💯"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "robots", "phonics": "/ˈroʊbɑts/", "definition": "Machines that can move", "imageEmoji": "🤖"},
            {"text": "knew", "phonics": "/nu/", "definition": "Understood or were aware", "imageEmoji": "💡"},
            {"text": "that", "phonics": "/ðæt/", "definition": "Used to introduce information", "imageEmoji": "💭"},
            {"text": "being", "phonics": "/ˈbiɪŋ/", "definition": "Existing as", "imageEmoji": "✨"},
            {"text": "small", "phonics": "/smɔl/", "definition": "Little in size", "imageEmoji": "🔬"},
            {"text": "doesn't", "phonics": "/ˈdʌzənt/", "definition": "Does not", "imageEmoji": "🚫"},
            {"text": "mean", "phonics": "/min/", "definition": "To signify or indicate", "imageEmoji": "💭"},
            {"text": "you", "phonics": "/ju/", "definition": "The person or thing", "imageEmoji": "👈"},
            {"text": "can't", "phonics": "/kænt/", "definition": "Cannot", "imageEmoji": "🚫"},
            {"text": "be", "phonics": "/bi/", "definition": "To exist as", "imageEmoji": "✨"},
            {"text": "brave", "phonics": "/breɪv/", "definition": "Having courage", "imageEmoji": "💪"},
            {"text": "and", "phonics": "/ænd/", "definition": "Also, plus", "imageEmoji": "➕"},
            {"text": "strong", "phonics": "/strɔŋ/", "definition": "Having power and force", "imageEmoji": "💪"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "What made Bolt different from the other robots?",
          "options": ["He was curious about the outside world", "He was the biggest robot", "He could fly"],
          "correctAnswer": 0,
          "explanation": "Correct! Bolt was curious about the world outside the factory!"
        },
        {
          "question": "Why were the other robots scared?",
          "options": ["They heard strange beeping sounds", "There was a fire", "The factory was closing"],
          "correctAnswer": 0,
          "explanation": "Right! The other robots were too scared to investigate the strange beeping sounds!"
        },
        {
          "question": "What lesson did the robots learn from Bolt?",
          "options": ["Being small doesn't mean you can't be brave", "Robots should stay in the factory", "Never help others"],
          "correctAnswer": 0,
          "explanation": "Excellent! They learned that being small doesn't mean you can't be brave and strong!"
        }
      ]
    },
    {
      "id": "grade-3-dragons-treasure",
      "title": "The Dragon's Treasure",
      "level": "grade-3",
      "topic": ["fantasy", "adventure", "friendship"],
      "wordCount": 220,
      "readabilityScore": 3.0,
      "phonicsPatterns": ["complex-syllables", "prefixes-suffixes"],
      "estimatedMinutes": 6,
      "coverImage": "🐉",
      "pages": [
        {
          "pageNumber": 1,
          "content": "High in the Misty Mountains lived a dragon named Ember. Unlike the fearsome dragons in stories, Ember was kind and lonely. She guarded a magnificent treasure, but what she really wanted was a friend.",
          "words": [
            {"text": "High", "phonics": "/haɪ/", "definition": "Far up from the ground", "imageEmoji": "⬆️"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Within a place", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "Misty", "phonics": "/ˈmɪsti/", "definition": "Covered with mist or fog", "imageEmoji": "🌫️"},
            {"text": "Mountains", "phonics": "/ˈmaʊntənz/", "definition": "Very tall hills", "imageEmoji": "⛰️"},
            {"text": "lived", "phonics": "/lɪvd/", "definition": "Made a home", "imageEmoji": "🏠"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "dragon", "phonics": "/ˈdræɡən/", "definition": "A large mythical fire-breathing creature", "imageEmoji": "🐉"},
            {"text": "named", "phonics": "/neɪmd/", "definition": "Called by a name", "imageEmoji": "📛"},
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "A glowing piece of coal; the dragon's name", "imageEmoji": "🔥"},
            {"text": "Unlike", "phonics": "/ʌnˈlaɪk/", "definition": "Different from", "imageEmoji": "↔️"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "fearsome", "phonics": "/ˈfɪrsəm/", "definition": "Scary or frightening", "imageEmoji": "😱"},
            {"text": "dragons", "phonics": "/ˈdræɡənz/", "definition": "Mythical fire-breathing creatures", "imageEmoji": "🐉"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Within", "imageEmoji": "📦"},
            {"text": "stories", "phonics": "/ˈstɔriz/", "definition": "Tales or narratives", "imageEmoji": "📖"},
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "The dragon's name", "imageEmoji": "🔥"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "kind", "phonics": "/kaɪnd/", "definition": "Gentle and caring", "imageEmoji": "💗"},
            {"text": "and", "phonics": "/ænd/", "definition": "Also, plus", "imageEmoji": "➕"},
            {"text": "lonely", "phonics": "/ˈloʊnli/", "definition": "Sad from being alone", "imageEmoji": "😔"},
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a female", "imageEmoji": "👧"},
            {"text": "guarded", "phonics": "/ˈɡɑrdɪd/", "definition": "Protected and watched over", "imageEmoji": "🛡️"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "magnificent", "phonics": "/mæɡˈnɪfəsənt/", "definition": "Extremely beautiful or impressive", "imageEmoji": "✨"},
            {"text": "treasure", "phonics": "/ˈtrɛʒər/", "definition": "Valuable items like gold and jewels", "imageEmoji": "💎"},
            {"text": "but", "phonics": "/bʌt/", "definition": "However", "imageEmoji": "↔️"},
            {"text": "what", "phonics": "/wʌt/", "definition": "Used to ask about something", "imageEmoji": "❓"},
            {"text": "she", "phonics": "/ʃi/", "definition": "Refers to a female", "imageEmoji": "👧"},
            {"text": "really", "phonics": "/ˈrɪli/", "definition": "Truly or actually", "imageEmoji": "💯"},
            {"text": "wanted", "phonics": "/ˈwɑntɪd/", "definition": "Desired or wished for", "imageEmoji": "💭"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "friend", "phonics": "/frɛnd/", "definition": "Someone you care about", "imageEmoji": "👫"}
          ]
        },
        {
          "pageNumber": 2,
          "content": "One autumn morning, a brave young adventurer named Luna climbed the mountain. She wasn't seeking treasure - she was searching for rare healing herbs for her sick grandmother.",
          "words": [
            {"text": "One", "phonics": "/wʌn/", "definition": "A single thing", "imageEmoji": "1️⃣"},
            {"text": "autumn", "phonics": "/ˈɔtəm/", "definition": "The season between summer and winter", "imageEmoji": "🍂"},
            {"text": "morning", "phonics": "/ˈmɔrnɪŋ/", "definition": "Early part of the day", "imageEmoji": "🌅"},
            {"text": "a", "phonics": "/ə/", "definition": "One thing", "imageEmoji": "1️⃣"},
            {"text": "brave", "phonics": "/breɪv/", "definition": "Having courage", "imageEmoji": "💪"},
            {"text": "young", "phonics": "/jʌŋ/", "definition": "Not old", "imageEmoji": "👧"},
            {"text": "adventurer", "phonics": "/ædˈvɛntʃərər/", "definition": "Someone who goes on exciting journeys", "imageEmoji": "🗺️"},
            {"text": "named", "phonics": "/neɪmd/", "definition": "Called by a name", "imageEmoji": "📛"},
            {"text": "Luna", "phonics": "/ˈlunə/", "definition": "A girl's name meaning moon", "imageEmoji": "🌙"},
            {"text": "climbed", "phonics": "/klaɪmd/", "definition": "Went up using hands and feet", "imageEmoji": "🧗"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "mountain", "phonics": "/ˈmaʊntən/", "definition": "A very tall hill", "imageEmoji": "⛰️"},
            {"text": "She", "phonics": "/ʃi/", "definition": "Refers to a female", "imageEmoji": "👧"},
            {"text": "wasn't", "phonics": "/ˈwʌzənt/", "definition": "Was not", "imageEmoji": "🚫"},
            {"text": "seeking", "phonics": "/ˈsikɪŋ/", "definition": "Looking for or searching", "imageEmoji": "🔍"},
            {"text": "treasure", "phonics": "/ˈtrɛʒər/", "definition": "Valuable items like gold", "imageEmoji": "💎"},
            {"text": "she", "phonics": "/ʃi/", "definition": "Refers to a female", "imageEmoji": "👧"},
            {"text": "was", "phonics": "/wʌz/", "definition": "Past tense of is", "imageEmoji": "✨"},
            {"text": "searching", "phonics": "/ˈsɜrtʃɪŋ/", "definition": "Looking carefully for something", "imageEmoji": "🔍"},
            {"text": "for", "phonics": "/fɔr/", "definition": "To get or obtain", "imageEmoji": "🎯"},
            {"text": "rare", "phonics": "/rɛr/", "definition": "Very uncommon or hard to find", "imageEmoji": "💎"},
            {"text": "healing", "phonics": "/ˈhilɪŋ/", "definition": "Making someone healthy again", "imageEmoji": "🏥"},
            {"text": "herbs", "phonics": "/hɜrbz/", "definition": "Plants used for medicine or flavor", "imageEmoji": "🌿"},
            {"text": "for", "phonics": "/fɔr/", "definition": "To benefit", "imageEmoji": "🎯"},
            {"text": "her", "phonics": "/hɜr/", "definition": "Belonging to a female", "imageEmoji": "👧"},
            {"text": "sick", "phonics": "/sɪk/", "definition": "Not feeling well or ill", "imageEmoji": "🤒"},
            {"text": "grandmother", "phonics": "/ˈɡrænˌmʌðər/", "definition": "Your parent's mother", "imageEmoji": "👵"}
          ]
        },
        {
          "pageNumber": 3,
          "content": "When Ember and Luna met, they were both surprised. 'Please don't be afraid,' Ember said gently. 'I've been hoping someone would visit.' Luna saw the kindness in the dragon's eyes and smiled.",
          "words": [
            {"text": "When", "phonics": "/wɛn/", "definition": "At what time", "imageEmoji": "⏰"},
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "The dragon's name", "imageEmoji": "🔥"},
            {"text": "and", "phonics": "/ænd/", "definition": "Also, plus", "imageEmoji": "➕"},
            {"text": "Luna", "phonics": "/ˈlunə/", "definition": "The girl's name", "imageEmoji": "🌙"},
            {"text": "met", "phonics": "/mɛt/", "definition": "Came together", "imageEmoji": "🤝"},
            {"text": "they", "phonics": "/ðeɪ/", "definition": "Two or more people", "imageEmoji": "👥"},
            {"text": "were", "phonics": "/wɜr/", "definition": "Past tense of are", "imageEmoji": "✨"},
            {"text": "both", "phonics": "/boʊθ/", "definition": "The two together", "imageEmoji": "👥"},
            {"text": "surprised", "phonics": "/sərˈpraɪzd/", "definition": "Feeling unexpected wonder", "imageEmoji": "😲"},
            {"text": "Please", "phonics": "/pliz/", "definition": "A polite word when asking", "imageEmoji": "🙏"},
            {"text": "don't", "phonics": "/doʊnt/", "definition": "Do not", "imageEmoji": "🚫"},
            {"text": "be", "phonics": "/bi/", "definition": "To exist as", "imageEmoji": "✨"},
            {"text": "afraid", "phonics": "/əˈfreɪd/", "definition": "Feeling fear", "imageEmoji": "😨"},
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "The dragon's name", "imageEmoji": "🔥"},
            {"text": "said", "phonics": "/sɛd/", "definition": "Spoke words", "imageEmoji": "💬"},
            {"text": "gently", "phonics": "/ˈdʒɛntli/", "definition": "In a soft and kind way", "imageEmoji": "🤲"},
            {"text": "I've", "phonics": "/aɪv/", "definition": "I have", "imageEmoji": "✋"},
            {"text": "been", "phonics": "/bɪn/", "definition": "Past form of be", "imageEmoji": "✨"},
            {"text": "hoping", "phonics": "/ˈhoʊpɪŋ/", "definition": "Wishing for something", "imageEmoji": "💭"},
            {"text": "someone", "phonics": "/ˈsʌmˌwʌn/", "definition": "A person", "imageEmoji": "👤"},
            {"text": "would", "phonics": "/wʊd/", "definition": "Expressing a wish", "imageEmoji": "💭"},
            {"text": "visit", "phonics": "/ˈvɪzɪt/", "definition": "Come to see", "imageEmoji": "🚪"},
            {"text": "Luna", "phonics": "/ˈlunə/", "definition": "The girl's name", "imageEmoji": "🌙"},
            {"text": "saw", "phonics": "/sɔ/", "definition": "Noticed with eyes", "imageEmoji": "👀"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "kindness", "phonics": "/ˈkaɪndnɪs/", "definition": "Being gentle and caring", "imageEmoji": "💗"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Within", "imageEmoji": "📦"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "dragon's", "phonics": "/ˈdræɡənz/", "definition": "Belonging to the dragon", "imageEmoji": "🐉"},
            {"text": "eyes", "phonics": "/aɪz/", "definition": "Organs used to see", "imageEmoji": "👀"},
            {"text": "and", "phonics": "/ænd/", "definition": "Also, plus", "imageEmoji": "➕"},
            {"text": "smiled", "phonics": "/smaɪld/", "definition": "Made a happy face", "imageEmoji": "😊"}
          ]
        },
        {
          "pageNumber": 4,
          "content": "Ember showed Luna where the healing herbs grew in her secret garden. In return, Luna visited Ember every week, bringing stories from the village below. The dragon discovered that the greatest treasure isn't gold or jewels - it's friendship.",
          "words": [
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "The dragon's name", "imageEmoji": "🔥"},
            {"text": "showed", "phonics": "/ʃoʊd/", "definition": "Let someone see", "imageEmoji": "👀"},
            {"text": "Luna", "phonics": "/ˈlunə/", "definition": "The girl's name", "imageEmoji": "🌙"},
            {"text": "where", "phonics": "/wɛr/", "definition": "In what place", "imageEmoji": "📍"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "healing", "phonics": "/ˈhilɪŋ/", "definition": "Making healthy again", "imageEmoji": "🏥"},
            {"text": "herbs", "phonics": "/hɜrbz/", "definition": "Plants used for medicine", "imageEmoji": "🌿"},
            {"text": "grew", "phonics": "/ɡru/", "definition": "Became bigger", "imageEmoji": "📏"},
            {"text": "in", "phonics": "/ɪn/", "definition": "Within a place", "imageEmoji": "📦"},
            {"text": "her", "phonics": "/hɜr/", "definition": "Belonging to a female", "imageEmoji": "👧"},
            {"text": "secret", "phonics": "/ˈsikrɪt/", "definition": "Hidden or private", "imageEmoji": "🤫"},
            {"text": "garden", "phonics": "/ˈɡɑrdən/", "definition": "A place where plants grow", "imageEmoji": "🌻"},
            {"text": "In", "phonics": "/ɪn/", "definition": "As a way of", "imageEmoji": "📦"},
            {"text": "return", "phonics": "/rɪˈtɜrn/", "definition": "To give back", "imageEmoji": "🔄"},
            {"text": "Luna", "phonics": "/ˈlunə/", "definition": "The girl's name", "imageEmoji": "🌙"},
            {"text": "visited", "phonics": "/ˈvɪzɪtɪd/", "definition": "Came to see", "imageEmoji": "🚪"},
            {"text": "Ember", "phonics": "/ˈɛmbər/", "definition": "The dragon's name", "imageEmoji": "🔥"},
            {"text": "every", "phonics": "/ˈɛvri/", "definition": "Each one", "imageEmoji": "💯"},
            {"text": "week", "phonics": "/wik/", "definition": "Seven days", "imageEmoji": "📅"},
            {"text": "bringing", "phonics": "/ˈbrɪŋɪŋ/", "definition": "Carrying something to", "imageEmoji": "🎁"},
            {"text": "stories", "phonics": "/ˈstɔriz/", "definition": "Tales or narratives", "imageEmoji": "📖"},
            {"text": "from", "phonics": "/frʌm/", "definition": "Coming out of", "imageEmoji": "📍"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "village", "phonics": "/ˈvɪlɪdʒ/", "definition": "A small town", "imageEmoji": "🏘️"},
            {"text": "below", "phonics": "/bɪˈloʊ/", "definition": "Lower in position", "imageEmoji": "⬇️"},
            {"text": "The", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "dragon", "phonics": "/ˈdræɡən/", "definition": "A mythical creature", "imageEmoji": "🐉"},
            {"text": "discovered", "phonics": "/dɪˈskʌvərd/", "definition": "Found out or learned", "imageEmoji": "💡"},
            {"text": "that", "phonics": "/ðæt/", "definition": "Used to introduce information", "imageEmoji": "💭"},
            {"text": "the", "phonics": "/thə/", "definition": "Used to point to something specific", "imageEmoji": "👉"},
            {"text": "greatest", "phonics": "/ˈɡreɪtəst/", "definition": "The best or most important", "imageEmoji": "🏆"},
            {"text": "treasure", "phonics": "/ˈtrɛʒər/", "definition": "Something very valuable", "imageEmoji": "💎"},
            {"text": "isn't", "phonics": "/ˈɪzənt/", "definition": "Is not", "imageEmoji": "🚫"},
            {"text": "gold", "phonics": "/ɡoʊld/", "definition": "A precious yellow metal", "imageEmoji": "🪙"},
            {"text": "or", "phonics": "/ɔr/", "definition": "Used to link alternatives", "imageEmoji": "↔️"},
            {"text": "jewels", "phonics": "/ˈdʒuəlz/", "definition": "Precious stones", "imageEmoji": "💎"},
            {"text": "it's", "phonics": "/ɪts/", "definition": "It is", "imageEmoji": "✨"},
            {"text": "friendship", "phonics": "/ˈfrɛndˌʃɪp/", "definition": "A close bond between people", "imageEmoji": "💕"}
          ]
        }
      ],
      "comprehensionQuestions": [
        {
          "question": "What made Ember different from other dragons?",
          "options": ["She was kind and wanted a friend", "She could breathe ice", "She didn't have wings"],
          "correctAnswer": 0,
          "explanation": "Perfect! Ember was kind and lonely, unlike the fearsome dragons in stories!"
        },
        {
          "question": "Why did Luna climb the mountain?",
          "options": ["To find healing herbs for her grandmother", "To steal treasure", "To become famous"],
          "correctAnswer": 0,
          "explanation": "Excellent! Luna was searching for rare healing herbs for her sick grandmother!"
        },
        {
          "question": "What did Ember learn was the greatest treasure?",
          "options": ["Friendship", "Gold and jewels", "A castle"],
          "correctAnswer": 0,
          "explanation": "Wonderful! Ember discovered that the greatest treasure is friendship!"
        }
      ]
    }
  ]
}
;
