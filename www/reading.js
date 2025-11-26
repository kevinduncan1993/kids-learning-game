/* ====================================
   READING GAME JAVASCRIPT
   ==================================== */

// ====================================
// GLOBAL STATE
// ====================================
let currentProfile = null;
let selectedAvatar = null;
let currentStory = null;
let currentMode = null; // 'read-to-me' or 'read-myself'
let currentPageIndex = 0;
let readingStartTime = 0;
let quizAnswers = [];
let currentQuestionIndex = 0;
let wordsLookedUp = [];

// ====================================
// PROFILE MANAGER
// ====================================
const ProfileManager = {
    loadProfiles() {
        const profiles = localStorage.getItem('reading_profiles');
        return profiles ? JSON.parse(profiles) : [];
    },

    saveProfiles(profiles) {
        localStorage.setItem('reading_profiles', JSON.stringify(profiles));
    },

    createProfile(name, avatar) {
        const profiles = this.loadProfiles();
        const newProfile = {
            id: this.generateUUID(),
            name: name,
            avatar: avatar,
            createdAt: Date.now(),
            lastActive: Date.now(),
            preferences: {
                fontSize: 'medium',
                highContrast: false,
                autoPlaySpeed: 1.0
            }
        };
        profiles.push(newProfile);
        this.saveProfiles(profiles);
        return newProfile;
    },

    selectProfile(profileId) {
        const profiles = this.loadProfiles();
        currentProfile = profiles.find(p => p.id === profileId);
        if (currentProfile) {
            currentProfile.lastActive = Date.now();
            this.saveProfiles(profiles);
            this.applyPreferences();
        }
        return currentProfile;
    },

    applyPreferences() {
        if (!currentProfile) return;

        const prefs = currentProfile.preferences;

        // Apply font size
        const pageText = document.getElementById('page-text');
        if (pageText) {
            pageText.className = `page-text font-${prefs.fontSize}`;
        }

        // Apply high contrast
        if (prefs.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }

        // Apply TTS speed
        const speedSlider = document.getElementById('speed-slider');
        if (speedSlider) {
            speedSlider.value = prefs.autoPlaySpeed;
            document.getElementById('speed-value').textContent = prefs.autoPlaySpeed + 'x';
        }
    },

    updatePreferences(updates) {
        if (!currentProfile) return;

        const profiles = this.loadProfiles();
        const profile = profiles.find(p => p.id === currentProfile.id);
        if (profile) {
            Object.assign(profile.preferences, updates);
            this.saveProfiles(profiles);
            currentProfile.preferences = profile.preferences;
            this.applyPreferences();
        }
    },

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
};

// ====================================
// STORY MANAGER
// ====================================
const StoryManager = {
    stories: [],

    async init() {
        // Load stories from embedded data (no CORS issues)
        if (typeof STORIES_DATA !== 'undefined') {
            this.stories = STORIES_DATA.stories;
            console.log(`✅ Loaded ${this.stories.length} stories from embedded data:`, this.stories.map(s => s.title));
        } else {
            console.error('❌ STORIES_DATA not found, using default stories');
            this.stories = this.getDefaultStories();
        }
    },

    async loadStoriesFromFile() {
        // No longer needed - kept for compatibility
    },

    getDefaultStories() {
        // Fallback stories if JSON fails to load
        return [
            {
                id: 'pre-k-cat-nap',
                title: 'The Cat\'s Nap',
                level: 'pre-k',
                topic: ['animals', 'bedtime'],
                wordCount: 12,
                readabilityScore: 1.0,
                phonicsPatterns: ['short-a', 'cvc'],
                estimatedMinutes: 1,
                coverImage: '🐱',
                pages: [
                    {
                        pageNumber: 1,
                        content: 'The cat sat on the mat.',
                        words: [
                            { text: 'The', phonics: '/thə/', definition: 'Used to point to something specific', imageEmoji: '👉' },
                            { text: 'cat', phonics: '/kæt/', definition: 'A small furry pet that meows', imageEmoji: '🐱' },
                            { text: 'sat', phonics: '/sæt/', definition: 'Past tense of sit - to rest on your bottom', imageEmoji: '🪑' },
                            { text: 'on', phonics: '/ɑn/', definition: 'On top of something', imageEmoji: '⬆️' },
                            { text: 'the', phonics: '/thə/', definition: 'Used to point to something specific', imageEmoji: '👉' },
                            { text: 'mat', phonics: '/mæt/', definition: 'A small rug or carpet', imageEmoji: '🧘' }
                        ]
                    },
                    {
                        pageNumber: 2,
                        content: 'The cat had a nap.',
                        words: [
                            { text: 'The', phonics: '/thə/', definition: 'Used to point to something specific', imageEmoji: '👉' },
                            { text: 'cat', phonics: '/kæt/', definition: 'A small furry pet that meows', imageEmoji: '🐱' },
                            { text: 'had', phonics: '/hæd/', definition: 'Past tense of have - to possess or experience', imageEmoji: '✋' },
                            { text: 'a', phonics: '/ə/', definition: 'One thing', imageEmoji: '1️⃣' },
                            { text: 'nap', phonics: '/næp/', definition: 'A short sleep during the day', imageEmoji: '😴' }
                        ]
                    }
                ],
                comprehensionQuestions: [
                    {
                        question: 'Where did the cat sit?',
                        options: ['On the mat', 'In a tree', 'On a chair'],
                        correctAnswer: 0,
                        explanation: 'The story says the cat sat on the mat!'
                    },
                    {
                        question: 'What did the cat do?',
                        options: ['Had a nap', 'Ate food', 'Played outside'],
                        correctAnswer: 0,
                        explanation: 'Great! The cat had a nap!'
                    }
                ]
            }
        ];
    },

    getStoryById(id) {
        return this.stories.find(s => s.id === id);
    },

    getStoriesByLevel(level) {
        if (level === 'all') return this.stories;
        return this.stories.filter(s => s.level === level);
    }
};

// ====================================
// PROGRESS MANAGER
// ====================================
const ProgressManager = {
    getProgressKey(profileId) {
        return `reading_progress_${profileId}`;
    },

    loadProgress(profileId) {
        const key = this.getProgressKey(profileId);
        const progress = localStorage.getItem(key);
        return progress ? JSON.parse(progress) : this.getDefaultProgress(profileId);
    },

    getDefaultProgress(profileId) {
        return {
            profileId: profileId,
            storyProgress: {},
            readingStreak: {
                current: 0,
                longest: 0,
                lastReadDate: null
            },
            stats: {
                totalBooksRead: 0,
                totalTimeReading: 0,
                averageComprehension: 0,
                totalComprehensionQuestions: 0,
                correctComprehensionAnswers: 0
            }
        };
    },

    saveProgress(progress) {
        const key = this.getProgressKey(progress.profileId);
        localStorage.setItem(key, JSON.stringify(progress));
    },

    updateStoryProgress(profileId, storyId, updates) {
        const progress = this.loadProgress(profileId);

        if (!progress.storyProgress[storyId]) {
            progress.storyProgress[storyId] = {
                status: 'not-started',
                currentPage: 0,
                lastReadAt: 0,
                totalReads: 0,
                comprehensionScore: 0,
                timeSpent: 0,
                wordsLookedUp: []
            };
        }

        Object.assign(progress.storyProgress[storyId], updates);

        // Update global stats
        if (updates.status === 'completed') {
            progress.stats.totalBooksRead++;
            this.updateReadingStreak(progress);
        }

        if (updates.timeSpent !== undefined) {
            progress.stats.totalTimeReading += updates.timeSpent;
        }

        if (updates.comprehensionScore !== undefined) {
            progress.stats.totalComprehensionQuestions += currentStory.comprehensionQuestions.length;
            progress.stats.correctComprehensionAnswers += quizAnswers.filter(a => a).length;
            progress.stats.averageComprehension = Math.round(
                (progress.stats.correctComprehensionAnswers / progress.stats.totalComprehensionQuestions) * 100
            );
        }

        this.saveProgress(progress);
        return progress;
    },

    updateReadingStreak(progress) {
        const today = new Date().toISOString().split('T')[0];
        const lastRead = progress.readingStreak.lastReadDate;

        if (!lastRead) {
            progress.readingStreak.current = 1;
            progress.readingStreak.longest = 1;
            progress.readingStreak.lastReadDate = today;
        } else if (lastRead !== today) {
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            if (lastRead === yesterday) {
                progress.readingStreak.current++;
                progress.readingStreak.longest = Math.max(
                    progress.readingStreak.longest,
                    progress.readingStreak.current
                );
            } else {
                progress.readingStreak.current = 1;
            }
            progress.readingStreak.lastReadDate = today;
        }
    },

    getRecommendations(profileId) {
        const progress = this.loadProgress(profileId);
        const inProgressStories = [];
        const recommendedStories = [];

        // Find stories in progress
        Object.keys(progress.storyProgress).forEach(storyId => {
            const storyProg = progress.storyProgress[storyId];
            if (storyProg.status === 'in-progress') {
                const story = StoryManager.getStoryById(storyId);
                if (story) inProgressStories.push(story);
            }
        });

        // Recommend stories based on comprehension level
        const avgComprehension = progress.stats.averageComprehension || 75;
        let recommendedLevel = 'pre-k';

        if (avgComprehension >= 90) {
            recommendedLevel = 'grade-1';
        } else if (avgComprehension >= 80) {
            recommendedLevel = 'k';
        }

        // Get stories at recommended level that haven't been completed
        StoryManager.stories.forEach(story => {
            if (story.level === recommendedLevel) {
                const storyProg = progress.storyProgress[story.id];
                if (!storyProg || storyProg.status !== 'completed') {
                    recommendedStories.push(story);
                }
            }
        });

        return {
            continueReading: inProgressStories.slice(0, 3),
            recommended: recommendedStories.slice(0, 3)
        };
    }
};

// ====================================
// TTS ENGINE
// ====================================
const TTSEngine = {
    utterance: null,
    voice: null,
    currentWordIndex: 0,
    words: [],
    isPlaying: false,
    onWordHighlight: null,
    onComplete: null,

    init() {
        // Load voices
        if (speechSynthesis.getVoices().length === 0) {
            speechSynthesis.addEventListener('voiceschanged', () => {
                this.selectVoice();
            });
        } else {
            this.selectVoice();
        }
    },

    selectVoice() {
        const voices = speechSynthesis.getVoices();
        // Priority: kid-friendly voices
        this.voice = voices.find(v =>
            v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            v.name.includes('Google US English Female') ||
            v.name.includes('Microsoft Zira')
        ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    },

    speakPage(text, onWordHighlight, onComplete) {
        speechSynthesis.cancel();

        this.utterance = new SpeechSynthesisUtterance(text);
        this.utterance.voice = this.voice;
        this.utterance.rate = parseFloat(document.getElementById('speed-slider')?.value || 1.0);
        this.utterance.pitch = 1.2;
        this.utterance.volume = 1.0;

        this.words = text.split(/\s+/);
        this.currentWordIndex = 0;
        this.onWordHighlight = onWordHighlight;
        this.onComplete = onComplete;

        // Word boundary event for synchronized highlighting
        this.utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const wordIndex = this.getWordIndexFromCharIndex(text, event.charIndex);
                if (this.onWordHighlight) this.onWordHighlight(wordIndex);
            }
        };

        this.utterance.onend = () => {
            this.isPlaying = false;
            if (this.onComplete) this.onComplete();
        };

        this.isPlaying = true;
        speechSynthesis.speak(this.utterance);
    },

    pause() {
        if (this.isPlaying) {
            speechSynthesis.pause();
            this.isPlaying = false;
        }
    },

    resume() {
        if (!this.isPlaying && speechSynthesis.paused) {
            speechSynthesis.resume();
            this.isPlaying = true;
        }
    },

    stop() {
        speechSynthesis.cancel();
        this.isPlaying = false;
    },

    speakWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.voice = this.voice;
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        speechSynthesis.speak(utterance);
    },

    getWordIndexFromCharIndex(text, charIndex) {
        let currentPos = 0;
        for (let i = 0; i < this.words.length; i++) {
            if (charIndex >= currentPos && charIndex < currentPos + this.words[i].length) {
                return i;
            }
            currentPos += this.words[i].length + 1;
        }
        return Math.max(0, this.words.length - 1);
    }
};

// ====================================
// SCREEN NAVIGATION
// ====================================
function initReadingGame() {
    loadProfiles();
}

function showProfileSelect() {
    hideAllScreens();
    document.getElementById('reading-profile-select').classList.add('active');
    loadProfiles();
}

function showStoryLibrary() {
    if (!currentProfile) {
        alert('Please select a profile first!');
        return;
    }
    hideAllScreens();
    document.getElementById('reading-library').classList.add('active');
    loadStoryLibrary();
}

function showStoryDetail() {
    if (!currentStory) {
        showStoryLibrary();
        return;
    }
    hideAllScreens();
    document.getElementById('reading-story-detail').classList.add('active');
    renderStoryDetail();
}

function showReadingView() {
    hideAllScreens();
    document.getElementById('reading-view').classList.add('active');
}

function showQuiz() {
    hideAllScreens();
    document.getElementById('reading-quiz').classList.add('active');
    initQuiz();
}

function showCompletion() {
    hideAllScreens();
    document.getElementById('reading-complete').classList.add('active');
    renderCompletion();
}

function showParentDashboard() {
    hideAllScreens();
    document.getElementById('parent-dashboard').classList.add('active');
    loadParentDashboard();
}

function hideAllScreens() {
    document.querySelectorAll('.reading-screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// ====================================
// PROFILE FUNCTIONS
// ====================================
function loadProfiles() {
    const profiles = ProfileManager.loadProfiles();
    const grid = document.getElementById('profile-grid');
    grid.innerHTML = '';

    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.onclick = () => selectProfileCard(profile.id);

        const progress = ProgressManager.loadProgress(profile.id);
        const stats = `${progress.stats.totalBooksRead} books read`;

        card.innerHTML = `
            <div class="profile-avatar">${profile.avatar}</div>
            <div class="profile-name">${profile.name}</div>
            <div class="profile-stats">${stats}</div>
        `;
        grid.appendChild(card);
    });

    // Add "Create New Profile" card
    const addCard = document.createElement('div');
    addCard.className = 'profile-card add-profile-btn';
    addCard.onclick = showProfileCreatePopup;
    addCard.innerHTML = `
        <div class="add-profile-icon">➕</div>
        <div class="profile-name">Create New Profile</div>
    `;
    grid.appendChild(addCard);
}

function selectProfileCard(profileId) {
    ProfileManager.selectProfile(profileId);
    showStoryLibrary();
}

function showProfileCreatePopup() {
    document.getElementById('profile-create-popup').classList.add('show');
    document.getElementById('profile-name-input').value = '';
    selectedAvatar = '🦄';
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.avatar === selectedAvatar) {
            opt.classList.add('selected');
        }
    });
}

function closeProfileCreatePopup() {
    document.getElementById('profile-create-popup').classList.remove('show');
}

function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.avatar === avatar) {
            opt.classList.add('selected');
        }
    });
}

function createProfile() {
    const name = document.getElementById('profile-name-input').value.trim();
    if (!name) {
        alert('Please enter a name!');
        return;
    }

    ProfileManager.createProfile(name, selectedAvatar);
    closeProfileCreatePopup();
    loadProfiles();
}

// ====================================
// STORY LIBRARY FUNCTIONS
// ====================================
function loadStoryLibrary() {
    filterStories('all');
}

function filterStories(level) {
    const stories = StoryManager.getStoriesByLevel(level);
    console.log(`🔍 Filtering stories for level "${level}": Found ${stories.length} stories`, stories.map(s => s.title));

    const grid = document.getElementById('story-grid');
    grid.innerHTML = '';

    // Update filter buttons
    document.querySelectorAll('.level-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === level) {
            btn.classList.add('active');
        }
    });

    const progress = ProgressManager.loadProgress(currentProfile.id);

    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.onclick = () => selectStory(story.id);

        const storyProg = progress.storyProgress[story.id];
        const progressPercent = storyProg && storyProg.currentPage ?
            Math.round((storyProg.currentPage / story.pages.length) * 100) : 0;

        const levelClass = `level-${story.level}`;

        card.innerHTML = `
            <div class="story-cover">${story.coverImage}</div>
            <div class="story-title">${story.title}</div>
            <div class="story-meta">${story.wordCount} words • ${story.estimatedMinutes} min</div>
            <span class="story-level-badge ${levelClass}">${story.level.toUpperCase()}</span>
            ${progressPercent > 0 ? `
                <div class="story-progress">
                    <div class="story-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            ` : ''}
        `;
        grid.appendChild(card);
    });

    if (stories.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #636e72;">No stories found for this level.</p>';
    }
}

function selectStory(storyId) {
    currentStory = StoryManager.getStoryById(storyId);
    showStoryDetail();
}

function renderStoryDetail() {
    document.getElementById('story-detail-cover').textContent = currentStory.coverImage;
    document.getElementById('story-detail-title').textContent = currentStory.title;
    document.getElementById('story-detail-level').textContent = currentStory.level.toUpperCase();
    document.getElementById('story-detail-words').textContent = currentStory.wordCount;
    document.getElementById('story-detail-time').textContent = currentStory.estimatedMinutes;
}

// ====================================
// READING FUNCTIONS
// ====================================
function startReading(mode) {
    currentMode = mode;
    currentPageIndex = 0;
    readingStartTime = Date.now();
    wordsLookedUp = [];
    showReadingView();
    renderPage();

    // Show/hide audio controls based on mode
    if (mode === 'read-to-me') {
        document.getElementById('audio-controls').style.display = 'flex';
    } else {
        document.getElementById('audio-controls').style.display = 'none';
    }

    // Mark story as in-progress
    ProgressManager.updateStoryProgress(currentProfile.id, currentStory.id, {
        status: 'in-progress',
        currentPage: 0,
        lastReadAt: Date.now()
    });
}

function renderPage() {
    const page = currentStory.pages[currentPageIndex];
    const pageTextEl = document.getElementById('page-text');
    pageTextEl.innerHTML = '';

    // Update progress info
    document.getElementById('current-page-num').textContent = currentPageIndex + 1;
    document.getElementById('total-pages-num').textContent = currentStory.pages.length;

    // Render words as spans
    page.words.forEach((wordData, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'highlight-word';
        wordSpan.setAttribute('data-word-index', index);
        wordSpan.textContent = wordData.text;
        wordSpan.onclick = () => showWordDetail(wordData);

        if (index > 0) {
            pageTextEl.appendChild(document.createTextNode(' '));
        }

        pageTextEl.appendChild(wordSpan);
    });

    // Update navigation buttons
    document.getElementById('prev-page-btn').disabled = currentPageIndex === 0;
    document.getElementById('next-page-btn').disabled = false;

    // Auto-play in read-to-me mode
    if (currentMode === 'read-to-me') {
        setTimeout(() => {
            playPageAudio();
        }, 500);
    }
}

let highlightedWordIndex = -1;

function highlightWord(wordIndex) {
    // Remove previous highlight
    if (highlightedWordIndex >= 0) {
        const prevWord = document.querySelector(
            `.highlight-word[data-word-index="${highlightedWordIndex}"]`
        );
        if (prevWord) prevWord.classList.remove('active-word');
    }

    // Add new highlight
    const currentWord = document.querySelector(
        `.highlight-word[data-word-index="${wordIndex}"]`
    );
    if (currentWord) {
        currentWord.classList.add('active-word');
        currentWord.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    highlightedWordIndex = wordIndex;
}

function playPageAudio() {
    const page = currentStory.pages[currentPageIndex];
    const text = page.content;

    TTSEngine.speakPage(text, highlightWord, () => {
        // When done, update button
        const playBtn = document.getElementById('play-pause-btn');
        playBtn.textContent = '▶ Play';
    });

    // Update button
    const playBtn = document.getElementById('play-pause-btn');
    playBtn.textContent = '⏸ Pause';
}

function toggleAudio() {
    if (TTSEngine.isPlaying) {
        TTSEngine.pause();
        document.getElementById('play-pause-btn').textContent = '▶ Play';
    } else if (speechSynthesis.paused) {
        TTSEngine.resume();
        document.getElementById('play-pause-btn').textContent = '⏸ Pause';
    } else {
        playPageAudio();
    }
}

function restartAudio() {
    TTSEngine.stop();
    highlightedWordIndex = -1;
    document.querySelectorAll('.highlight-word').forEach(word => {
        word.classList.remove('active-word');
    });
    playPageAudio();
}

function changeSpeed(value) {
    document.getElementById('speed-value').textContent = parseFloat(value).toFixed(1) + 'x';
    ProfileManager.updatePreferences({ autoPlaySpeed: parseFloat(value) });
}

function nextPage() {
    TTSEngine.stop();

    if (currentPageIndex < currentStory.pages.length - 1) {
        currentPageIndex++;
        ProgressManager.updateStoryProgress(currentProfile.id, currentStory.id, {
            currentPage: currentPageIndex
        });
        renderPage();
    } else {
        // Story complete, go to quiz
        const timeSpent = Math.floor((Date.now() - readingStartTime) / 1000);
        ProgressManager.updateStoryProgress(currentProfile.id, currentStory.id, {
            status: 'completed',
            timeSpent: timeSpent,
            totalReads: (ProgressManager.loadProgress(currentProfile.id).storyProgress[currentStory.id]?.totalReads || 0) + 1,
            wordsLookedUp: wordsLookedUp
        });
        showQuiz();
    }
}

function previousPage() {
    TTSEngine.stop();

    if (currentPageIndex > 0) {
        currentPageIndex--;
        renderPage();
    }
}

// ====================================
// WORD DETAIL FUNCTIONS
// ====================================
function showWordDetail(wordData) {
    document.getElementById('word-emoji').textContent = wordData.imageEmoji;
    document.getElementById('word-text').textContent = wordData.text;
    document.getElementById('word-phonics').textContent = wordData.phonics;
    document.getElementById('word-definition').textContent = wordData.definition;

    document.getElementById('word-detail-popup').classList.add('show');

    // Pronounce word
    TTSEngine.speakWord(wordData.text);

    // Track for analytics
    if (!wordsLookedUp.includes(wordData.text)) {
        wordsLookedUp.push(wordData.text);
    }
}

function closeWordPopup() {
    document.getElementById('word-detail-popup').classList.remove('show');
}

// ====================================
// QUIZ FUNCTIONS
// ====================================
function initQuiz() {
    quizAnswers = [];
    currentQuestionIndex = 0;
    renderQuestion();
}

function renderQuestion() {
    if (currentQuestionIndex >= currentStory.comprehensionQuestions.length) {
        completeReading();
        return;
    }

    const question = currentStory.comprehensionQuestions[currentQuestionIndex];

    document.getElementById('quiz-progress').textContent =
        `Question ${currentQuestionIndex + 1} of ${currentStory.comprehensionQuestions.length}`;

    document.getElementById('quiz-question').textContent = question.question;
    document.getElementById('quiz-feedback').textContent = '';

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index, question.correctAnswer, question.explanation);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, correctIndex, explanation) {
    const isCorrect = selectedIndex === correctIndex;
    quizAnswers.push(isCorrect);

    // Visual feedback
    const buttons = document.querySelectorAll('.quiz-option-btn');
    buttons.forEach(btn => btn.disabled = true);

    buttons[correctIndex].classList.add('correct');
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('incorrect');
    }

    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = isCorrect ?
        '🎉 Great job! ' + explanation :
        '💪 Not quite! ' + explanation;

    // Play sound
    if (isCorrect) {
        playSuccessSound();
    }

    // Move to next question after 3 seconds
    setTimeout(() => {
        currentQuestionIndex++;
        renderQuestion();
    }, 3000);
}

function completeReading() {
    const comprehensionScore = Math.round((quizAnswers.filter(a => a).length / quizAnswers.length) * 100);

    ProgressManager.updateStoryProgress(currentProfile.id, currentStory.id, {
        comprehensionScore: comprehensionScore
    });

    showCompletion();
}

function renderCompletion() {
    const progress = ProgressManager.loadProgress(currentProfile.id);
    const storyProg = progress.storyProgress[currentStory.id];
    const comprehensionScore = storyProg.comprehensionScore;

    document.getElementById('completion-emoji').textContent = comprehensionScore >= 80 ? '🏆' : '🎉';
    document.getElementById('completion-title').textContent = comprehensionScore >= 80 ? 'Amazing!' : 'Great Job!';

    document.getElementById('completed-story-title').textContent = currentStory.title;
    document.getElementById('completed-time').textContent = formatTime(storyProg.timeSpent);
    document.getElementById('completed-comprehension').textContent = comprehensionScore + '%';
    document.getElementById('completed-streak').textContent = progress.readingStreak.current + ' days';

    // Show confetti
    createConfetti();
}

// ====================================
// SETTINGS FUNCTIONS
// ====================================
function toggleSettingsPanel() {
    document.getElementById('settings-panel-popup').classList.toggle('show');

    // Update current settings
    const prefs = currentProfile.preferences;
    document.querySelectorAll('.setting-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === prefs.fontSize) {
            btn.classList.add('active');
        }
    });

    document.getElementById('high-contrast-toggle').checked = prefs.highContrast;
}

function closeSettingsPanel() {
    document.getElementById('settings-panel-popup').classList.remove('show');
}

function setFontSize(size) {
    ProfileManager.updatePreferences({ fontSize: size });

    document.querySelectorAll('.setting-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === size) {
            btn.classList.add('active');
        }
    });
}

function toggleHighContrast(enabled) {
    ProfileManager.updatePreferences({ highContrast: enabled });
}

// ====================================
// PARENT DASHBOARD FUNCTIONS
// ====================================
function loadParentDashboard() {
    const profiles = ProfileManager.loadProfiles();

    // Load profile tabs
    const tabsContainer = document.getElementById('dashboard-profile-selector');
    tabsContainer.innerHTML = '';

    profiles.forEach((profile, index) => {
        const btn = document.createElement('button');
        btn.className = 'dashboard-profile-btn' + (index === 0 ? ' active' : '');
        btn.textContent = profile.avatar + ' ' + profile.name;
        btn.onclick = () => loadProfileDashboard(profile.id);
        tabsContainer.appendChild(btn);
    });

    // Load first profile by default
    if (profiles.length > 0) {
        loadProfileDashboard(profiles[0].id);
    }
}

function loadProfileDashboard(profileId) {
    // Update active tab
    document.querySelectorAll('.dashboard-profile-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const progress = ProgressManager.loadProgress(profileId);

    // Render stats
    const statsHTML = `
        <div class="stat-card">
            <h4>📖 Total Books Read</h4>
            <div class="stat-value">${progress.stats.totalBooksRead}</div>
        </div>
        <div class="stat-card">
            <h4>⏱️ Total Reading Time</h4>
            <div class="stat-value">${formatTime(progress.stats.totalTimeReading)}</div>
        </div>
        <div class="stat-card">
            <h4>✅ Average Comprehension</h4>
            <div class="stat-value">${progress.stats.averageComprehension}%</div>
        </div>
        <div class="stat-card">
            <h4>🔥 Reading Streak</h4>
            <div class="stat-value">${progress.readingStreak.current} days</div>
            <div class="stat-subtitle">Longest: ${progress.readingStreak.longest} days</div>
        </div>
    `;
    document.getElementById('dashboard-stats').innerHTML = statsHTML;

    // Render history
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    const storyHistory = Object.keys(progress.storyProgress)
        .map(storyId => ({
            id: storyId,
            ...progress.storyProgress[storyId]
        }))
        .sort((a, b) => b.lastReadAt - a.lastReadAt)
        .slice(0, 5);

    if (storyHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #636e72;">No reading history yet.</p>';
    } else {
        storyHistory.forEach(item => {
            const story = StoryManager.getStoryById(item.id);
            if (!story) return;

            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div>
                    <div class="history-item-title">${story.coverImage} ${story.title}</div>
                    <div class="history-item-meta">
                        ${item.status} • ${item.comprehensionScore}% comprehension •
                        ${new Date(item.lastReadAt).toLocaleDateString()}
                    </div>
                </div>
            `;
            historyList.appendChild(historyItem);
        });
    }
}

// ====================================
// UTILITY FUNCTIONS
// ====================================
function formatTime(seconds) {
    if (seconds < 60) return seconds + 's';
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
}

// ====================================
// INITIALIZATION
// ====================================
window.addEventListener('DOMContentLoaded', async () => {
    await StoryManager.init();
    TTSEngine.init();
});

// Export functions for index.html
window.initReadingGame = initReadingGame;
