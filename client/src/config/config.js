const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "Hey my love",
        "I made something untuk pacarku yg moodnya kurang baik hari ini 💖",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "Surprise!",
      ],
      [
        "Aku buatin krna aku masih sayang banget sama kamu",
        "Smoga kamu suka dan engga nakalin aku yaa xixii",
      ],
      ["jangan lupa untuk inget aku klo aku itu cinta banget sama kamu", "So enjoy cyg!"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#cf6b87",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "apa makanan kesukaan aku?",
        description: "masa kamu gatau sih yg pernah kamu buatin",
        correctAnswer: "nasgor", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "mie", label: "mie ayam" },
          { value: "nasgor", label: "Naci Goreng" },
          { value: "kebab", label: "kebab" },
          { value: "bakso", label: "Bakso" },
        ],
      },
      {
        id: 2,
        title: "berapa kali kita date dari bulan 11?",
        description: "klo gatau nakal",
        correctAnswer: "10",
        options: [
          { value: "10", label: "10" },
          { value: "7", label: "7" },
          { value: "8", label: "8" },
          { value: "9", label: "9" },
        ],
      },
      {
        id: 3,
        title: "ulang tahun aku?",
        description: "aku aja tau lahir kamu masa kami gatau",
        correctAnswer: "juni-12",
        options: [
          { value: "juni-12", label: "Juni 12th" },
          { value: "juni-06", label: "Juni 06th" },
          { value: "august-14", label: "August 14th" },
          { value: "sept-14", label: "September 14th" },
        ],
      },
      // You can add more questions here
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 3, // If score is 3 or above, this GIF will be shown
        heading: "Wow!!!!!!! unbelievable",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 2, // If score is exactly 2, this GIF will be shown
        heading: "Ehhh, not bad! so I still love you",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 1, // If score is exactly 1, this GIF will be shown
        heading: "It's okay,cayang kamu udh brusaha nebakk",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "umm... wtf???",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "Gambarin aku bunga lucuk dan ss ke wa",
      "Gambar love",
      "Gambar random apa aja yg lucuk",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "Kirim",
      finalText: "Maacih cyg kuu❤️",
      loading: "Sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
    // Placeholder text for the letter input
    placeholder: {
      default: `Now, bacaa pesan lucukk yg aku buatin ini untuk kamuu smoga moood kamu makin baik`,
      emptyInput: "sayangg, pas aku coba ngerangkai kata buat nunjukinn betapa dalamnya perasaanku ke kamu, aku sadar kalau bahasa yang kita pake itu rasanya terbatas. gaada kamus yang cukup kaya, ga ada puisi yang cukup indah, n gaada metafora yang cukup tepat buat benar-benar nangkapp besarnya cintaa yang kurasain. cintaku ke kamu bukan cuma sekedar kata sifat, bukan juga sekedar emosi sesaat. kamu itu bagian dari diriku yang paling berharga, kamu juga alasan kenapa aku percaya sama keajaiban, n sama kekuatan cinta yang mampu naklukin segalanya. aku mencintaimu lebih dari kata-kata yang bisa kuucapkan, lebih dari waktu yang bisa kuhitung, dan lebih dari yang pernah kubayangkan mungkin. and if u know sayang, dari awal cintaku gapernah sedikitpun berkurang bahkan malah bertambah sampai sekarang. so i wish kita bakal selalu bersama kedepannya apapun rintangannya sampai ke jenjang rumah tangga yang sebenarnya, i love love love u very much:",
      success: "Thank you for the message my love!",
      error: "Failed to send the message. try it again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `http://localhost:3000`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "sayangg, pas aku coba ngerangkai kata buat nunjukinn betapa dalamnya perasaanku ke kamu, aku sadar kalau bahasa yang kita pake itu rasanya terbatas. gaada kamus yang cukup kaya, ga ada puisi yang cukup indah, n gaada metafora yang cukup tepat buat benar-benar nangkapp besarnya cintaa yang kurasain. cintaku ke kamu bukan cuma sekedar kata sifat, bukan juga sekedar emosi sesaat. kamu itu bagian dari diriku yang paling berharga, kamu juga alasan kenapa aku percaya sama keajaiban, n sama kekuatan cinta yang mampu naklukin segalanya. aku mencintaimu lebih dari kata-kata yang bisa kuucapkan, lebih dari waktu yang bisa kuhitung, dan lebih dari yang pernah kubayangkan mungkin. and if u know sayang, dari awal cintaku gapernah sedikitpun berkurang bahkan malah bertambah sampai sekarang. so i wish kita bakal selalu bersama kedepannya apapun rintangannya sampai ke jenjang rumah tangga yang sebenarnya, i love love love u very much",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;
