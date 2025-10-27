import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';

// Ultra-short Module 1 data matching Module 8 style
const testSubtopics = [
  {
    id: 'active-listening',
    title: 'Active Listening',
    emoji: '👂',
    context: 'academic' as const,
    discover: {
      scenario: 'You are in a Cost Accounting lecture where the professor is explaining Process Costing vs Job Costing - a critical topic for your upcoming exam.',
      problemExplanation: [
        'Last time you zoned out during Marginal Costing and scored poorly.',
        'You struggle to stay focused during long lectures.',
        'You miss key concepts and struggle to ask questions.'
      ],
      solutionApproach: [
        'Use active listening techniques to stay engaged.',
        'Take structured notes and ask clarifying questions.',
        'Practice the 3-level listening framework.'
      ]
    },
    video: {
      title: 'Active Listening Mastery',
      duration: 8,
      script: `[0:00-0:45] WHY YOU MISS EVERYTHING

"You are in Cost Accounting lecture. Professor explains Process Costing. You hear words but miss meaning. Result: Exam failure (35/100). Friend: 'You were there but did not listen.' You: 'I heard everything!' Friend: 'Hearing ≠ Listening. You heard sounds. You did not UNDERSTAND meaning.' You realize: Passive hearing wastes time. By the end of this video, you will master active listening. Hear → Understand → Apply. Let us fix this."

[0:45-2:00] STEP 1: PRE-LECTURE PREPARATION

"Before lecture: Skim textbook Chapter 5. Write 2 questions: 'How is equivalent production calculated?' 'When do companies use process costing vs job costing?' This primes your brain to HUNT for answers during lecture. Pre-lecture prep = active listening foundation."

[2:00-3:30] STEP 2: STRATEGIC SEATING

"Sit front 3 rows, center position. Why? Fewer distractions, easier eye contact with professor, harder to check phone. If friends sit back, politely decline. Your grades matter more than socializing during class. Strategic seating = engagement boost."

[3:30-5:00] STEP 3: 3-LEVEL LISTENING FRAMEWORK

"Level 1 (Hear): Professor says 'Process costing is used in continuous production.' Level 2 (Understand): You mentally rephrase 'So like oil refineries or cement factories where products are identical.' Level 3 (Apply): You think 'This is why Amul uses process costing for milk processing!' Practice all 3 levels for EVERY major concept."

[5:00-6:30] STEP 4: CORNELL NOTE-TAKING

"Divide page: Left 30% = Keywords (Process Costing, Equivalent Units, FIFO Method), Right 70% = Explanations + Examples, Bottom 20% = Summary. When professor says 'This is important for exams,' mark with ⭐. When confused, mark with ❓ and ask later. Cornell notes = active processing."

[6:30-8:00] STEP 5: NON-VERBAL ENGAGEMENT

"Nod when you understand, lean forward during complex topics, make eye contact every 30 seconds, furrow brow when confused (professors notice and often re-explain). Avoid: yawning, checking time, doodling, whispering to neighbors. Non-verbal signals = engagement proof."`,
      content: [
        'Learn essential active listening techniques',
        'Understand the 3-level listening framework',
        'Practice note-taking and engagement strategies'
      ]
    },
    quiz: {
      title: 'Test Your Active Listening Knowledge',
      questions: [
        {
          id: 1,
          question: 'What is the primary goal of active listening?',
          options: [
            'To hear every word clearly',
            'To understand the complete message',
            'To respond quickly',
            'To show you are paying attention'
          ],
          correct: 1,
          explanation: 'Active listening aims to understand the complete message, including emotions and underlying meaning.'
        },
        {
          id: 2,
          question: 'Which technique shows you are actively listening?',
          options: [
            'Nodding occasionally',
            'Asking clarifying questions',
            'Maintaining eye contact',
            'All of the above'
          ],
          correct: 3,
          explanation: 'All these techniques demonstrate active listening and engagement with the speaker.'
        },
        {
          id: 3,
          question: 'What should you avoid during active listening?',
          options: [
            'Interrupting the speaker',
            'Planning your response',
            'Judging the speaker',
            'All of the above'
          ],
          correct: 3,
          explanation: 'Interrupting, planning responses, and judging all hinder effective active listening.'
        },
        {
          id: 4,
          question: 'How can you show empathy while listening?',
          options: [
            'By agreeing with everything',
            'By reflecting emotions',
            'By offering solutions',
            'By changing the topic'
          ],
          correct: 1,
          explanation: 'Reflecting emotions shows empathy and helps the speaker feel understood.'
        },
        {
          id: 5,
          question: 'What is the benefit of active listening?',
          options: [
            'Faster conversations',
            'Better relationships',
            'More talking time',
            'Easier responses'
          ],
          correct: 1,
          explanation: 'Active listening builds stronger relationships through better understanding and connection.'
        }
      ]
    },
    challenge: {
      title: 'Practice Active Listening',
      description: 'Practice active listening in a real conversation',
      contexts: {
        academic: {
          title: 'Academic Active Listening Mastery',
          description: 'Master active listening in lectures, study groups, and academic discussions.',
          instructions: [
            '• Pre-lecture prep: Skim textbook, write 2 questions—prime brain to hunt answers',
            '• Strategic seating: Front 3 rows, center—fewer distractions, easier eye contact',
            '• 3-level listening: Hear → Understand → Apply for every major concept',
            '• Cornell notes: Keywords left, explanations right, summary bottom—active processing',
            '• Non-verbal signals: Nod, lean forward, eye contact—professors notice engagement',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Multitasking trap: "Quick WhatsApp reply"—miss next 5 minutes explanation',
            '• Transcription machine: Writing every word—10 pages notes, zero understanding',
            '• Question anxiety: "Might sound stupid"—stay confused, fail exam',
            '• "Study later" delusion: Not reviewing 24hr—forget 80% content',
            '• Passive presence: Physically there, mentally planning weekend—hear but not process'
          ],
          successCriteria: [
            '✅ You explain Process Costing to classmate WITHOUT notes 2hr after lecture',
            '✅ You ask 1+ clarifying question per lecture showing active processing',
            '✅ Your exam score improves 15-20% compared to passive listening topics',
            '✅ Professors recognize you by name, appreciate engagement for recommendations',
            '✅ You retain 70%+ lecture content after 1 week (vs 20% for passive listeners)'
          ]
        },
        professional: {
          title: 'Professional Active Listening Excellence',
          description: 'Excel at active listening in meetings, interviews, and client interactions.',
          instructions: [
            '• Meeting prep: Review agenda, prepare 2-3 questions—show engagement from start',
            '• Eye contact: 60% speaker, 40% notes—balance attention and documentation',
            '• Paraphrase key points: "So you are saying..."—confirm understanding, show respect',
            '• Ask follow-up questions: "Can you elaborate on..."—demonstrate genuine interest',
            '• Take action notes: Who, what, when—turn listening into results',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Phone distraction: "Just checking email"—miss critical decisions, look unprofessional',
            '• Interrupting: "But what about..."—frustrate speaker, miss complete context',
            '• Solution jumping: "You should..."—solve wrong problem, waste everyone time',
            '• Selective hearing: Only listen to parts you agree with—miss important details',
            '• Fake listening: Nodding while thinking about lunch—damage trust, miss opportunities'
          ],
          successCriteria: [
            '✅ You summarize meeting outcomes accurately without checking notes',
            '✅ You ask 1+ insightful question per meeting showing deep engagement',
            '✅ Colleagues seek your input because you "really listen and understand"',
            '✅ You catch 90%+ of action items and deadlines without reminders',
            '✅ Client feedback mentions "excellent listening skills" in performance reviews'
          ]
        },
        personal: {
          title: 'Personal Active Listening Connection',
          description: 'Build deeper relationships through genuine active listening with family and friends.',
          instructions: [
            '• Full attention: Phone away, eye contact, lean in—show they matter most',
            '• Listen to understand: Not to respond—let them finish completely before speaking',
            '• Reflect emotions: "You sound frustrated..."—validate feelings, build connection',
            '• Ask open questions: "How did that make you feel?"—encourage deeper sharing',
            '• Avoid fixing: Sometimes they want to vent, not solutions—just listen',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Phone checking: "One sec..."—signal they are not important, damage trust',
            '• One-upping: "That is nothing, I..."—make it about you, minimize their experience',
            '• Quick fixes: "Just do this..."—rush to solve, miss emotional support need',
            '• Interrupting: "But you should..."—cut them off, show impatience, lose connection',
            '• Distracted listening: "Uh-huh" while thinking about work—hurt feelings, weaken bond'
          ],
          successCriteria: [
            '✅ Friends say "You really get me" after sharing personal struggles',
            '✅ You remember specific details from conversations weeks later',
            '✅ People open up more because they feel heard and understood',
            '✅ You avoid 90%+ misunderstandings that used to cause conflicts',
            '✅ Your relationships feel deeper and more meaningful than before'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Great job on maintaining eye contact throughout the conversation!',
        'Your clarifying questions showed genuine interest and understanding.',
        'Your empathetic responses helped the speaker feel heard and valued.'
      ],
      improvements: [
        'Try to avoid interrupting—let the speaker finish their complete thought.',
        'Consider asking more open-ended questions to encourage deeper sharing.'
      ],
      nextSteps: [
        'Practice active listening in daily conversations.',
        'Focus on reflecting emotions more effectively.',
        'Continue building your listening skills through regular practice.'
      ]
    },
    badge: {
      name: 'Active Listener',
      emoji: '👂',
      description: 'Congratulations! You have mastered the art of active listening.'
    },
    shareMessage: 'I just mastered Active Listening! 🎉 Now I can truly understand others and build stronger relationships. #ActiveListening #CommunicationSkills'
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    emoji: '🎤',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to present your quarterly results to the board of directors. Your promotion depends on this presentation.',
      problemExplanation: [
        'You feel nervous speaking in front of large groups.',
        'You struggle to organize your thoughts clearly.',
        'You worry about making mistakes or forgetting key points.'
      ],
      solutionApproach: [
        'Practice your presentation multiple times.',
        'Use storytelling to make your points memorable.',
        'Focus on your audience needs and interests.'
      ]
    },
    video: {
      title: 'Public Speaking Confidence',
      duration: 10,
      script: `[0:00-0:45] WHY YOU FREEZE ON STAGE

"You need to present quarterly results to board. Your promotion depends on this. You stand up. Heart racing. Mind blank. Words stumble. Result: Embarrassing presentation. Manager: 'You know the data but cannot present it. This limits your career.' You realize: Knowledge ≠ Presentation skills. By the end of this video, you will master public speaking. Confident delivery. Clear message. Let us fix this."

[0:45-2:15] STEP 1: OVERCOME FEAR WITH PREPARATION

"Fear comes from uncertainty. Solution: Over-prepare. Practice 3+ times out loud. Time yourself. Record yourself. Practice in front of mirror. Practice with friends. Preparation = confidence foundation. When you know your material inside out, fear reduces 80%."

[2:15-4:00] STEP 2: STRUCTURE YOUR PRESENTATION

"Start with hook: Problem, story, or statistic. Middle: 3 main points with examples. End: Clear call to action. Structure = audience engagement. Without structure, audience gets lost. With structure, they follow easily."

[4:00-5:45] STEP 3: USE STORYTELLING

"Data alone = boring. Data + story = memorable. Share case studies, examples, personal experiences. Stories make abstract concepts concrete. Stories create emotional connection. Stories = audience engagement."

[5:45-7:30] STEP 4: MASTER BODY LANGUAGE

"Stand tall, shoulders back. Make eye contact with different audience members. Use gestures to emphasize points. Move purposefully. Avoid: Crossing arms, looking down, fidgeting. Body language = confidence projection."

[7:30-9:15] STEP 5: HANDLE QUESTIONS CONFIDENTLY

"Listen to complete question. Pause 3 seconds before answering. If you do not know: 'That is a great question. Let me get back to you with specific details.' Never fake knowledge. Honesty = credibility."

[9:15-10:00] STEP 6: PRACTICE BREATHING TECHNIQUES

"Before speaking: 4-7-8 breathing (inhale 4, hold 7, exhale 8). During speaking: Pause for breath between sentences. Breathing = calm delivery. Calm delivery = audience confidence in you."`,
      content: [
        'Overcome fear and build confidence',
        'Structure presentations effectively',
        'Use body language and voice effectively'
      ]
    },
    quiz: {
      title: 'Test Your Public Speaking Knowledge',
      questions: [
        {
          id: 1,
          question: 'What is the most important factor in public speaking?',
          options: [
            'Perfect pronunciation',
            'Confidence and preparation',
            'Loud voice',
            'Fancy gestures'
          ],
          correct: 1,
          explanation: 'Confidence and preparation are the most important factors for effective public speaking.'
        },
        {
          id: 2,
          question: 'How should you start your presentation?',
          options: [
            'With a joke',
            'With a strong opening',
            'With an apology',
            'With background music'
          ],
          correct: 1,
          explanation: 'Start with a strong opening that captures attention and sets the tone.'
        },
        {
          id: 3,
          question: 'What should you do if you make a mistake?',
          options: [
            'Stop and apologize',
            'Continue confidently',
            'Start over',
            'Leave the stage'
          ],
          correct: 1,
          explanation: 'Continue confidently—most mistakes go unnoticed by the audience.'
        },
        {
          id: 4,
          question: 'How much should you practice before presenting?',
          options: [
            'Once',
            'A few times',
            'Until you are comfortable',
            'Never'
          ],
          correct: 2,
          explanation: 'Practice until you are comfortable with your material and delivery.'
        },
        {
          id: 5,
          question: 'What is the best way to handle nervousness?',
          options: [
            'Avoid speaking',
            'Use breathing techniques',
            'Speak faster',
            'Look at the floor'
          ],
          correct: 1,
          explanation: 'Breathing techniques help manage nervousness and improve delivery.'
        }
      ]
    },
    challenge: {
      title: 'Practice Public Speaking',
      description: 'Practice your public speaking skills in different contexts.',
      contexts: {
        academic: {
          title: 'Academic Presentation Excellence',
          description: 'Master presentations, thesis defenses, and academic discussions.',
          instructions: [
            '• Clear structure: Intro → Methods → Results → Conclusion—logical flow, easy to follow',
            '• Visual clarity: One idea per slide—avoid clutter, focus attention on key points',
            '• Data storytelling: Charts tell story—not just numbers, but what they mean',
            '• Practice timing: Rehearse with timer—stay within limits, respect audience time',
            '• Handle Q&A: Prepare for questions—anticipate challenges, show expertise',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Information overload: Too many slides, too much text—overwhelm audience, lose message',
            '• Reading slides: "As you can see..."—audience can read, they want your insights',
            '• Poor visuals: Tiny fonts, cluttered charts—hard to read, unprofessional appearance',
            '• No practice: "Wing it" approach—nervous delivery, poor timing, missed opportunities',
            '• Ignoring audience: No eye contact, no engagement—disconnect, lose attention'
          ],
          successCriteria: [
            '✅ You deliver presentations that are clear, engaging, and well-timed',
            '✅ You use visual aids effectively to support your message',
            '✅ You handle questions confidently and demonstrate deep knowledge',
            '✅ You receive positive feedback from professors and peers',
            '✅ You feel confident and in control during all presentations'
          ]
        },
        professional: {
          title: 'Professional Presentation Mastery',
          description: 'Excel at business presentations, client pitches, and team meetings.',
          instructions: [
            '• Know your audience: Tailor content to their needs—relevant examples, appropriate level',
            '• Start with impact: Hook with problem, story, or statistic—capture attention immediately',
            '• Use storytelling: Case studies, examples—make abstract concepts concrete and memorable',
            '• Call to action: Clear next steps—what should audience do after presentation',
            '• Professional polish: Rehearse, check technology—smooth delivery, no technical issues',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Death by PowerPoint: Too many slides—overwhelm audience, lose message',
            '• No rehearsal: "I know this topic..."—delivery suffers, miss key points',
            '• Weak opening: "Today I will talk about..."—boring start, lose attention',
            '• No clear action: Vague conclusion—miss opportunity to inspire action',
            '• Technical failures: Not testing equipment—embarrassing delays, unprofessional image'
          ],
          successCriteria: [
            '✅ You deliver presentations that achieve your business objectives',
            '✅ You engage audiences with compelling stories and clear calls to action',
            '✅ You receive positive feedback on your professional presentation skills',
            '✅ You feel confident and prepared for any presentation situation',
            '✅ You inspire action and achieve desired outcomes from your presentations'
          ]
        },
        personal: {
          title: 'Personal Presentation Confidence',
          description: 'Build confidence for social presentations, family events, and personal projects.',
          instructions: [
            '• Authentic voice: Be yourself—genuine, relatable, engaging, not trying to impress',
            '• Personal stories: Share experiences—connect emotionally, make abstract concrete',
            '• Simple structure: Clear beginning, middle, end—easy to follow, hard to mess up',
            '• Practice with friends: Get feedback—build confidence, improve delivery',
            '• Enjoy the process: Have fun—enthusiasm is contagious, audience will respond',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Trying to be perfect: "Must impress everyone..."—create pressure, reduce authenticity',
            '• Over-preparation: Memorizing every word—sound robotic, lose natural flow',
            '• Ignoring audience: No eye contact, no interaction—miss connection, lose engagement',
            '• Apologizing constantly: "Sorry, I am nervous..."—draw attention to weakness',
            '• Comparing yourself: "They are so much better..."—undermine confidence, miss your strengths'
          ],
          successCriteria: [
            '✅ You deliver personal presentations with confidence and authenticity',
            '✅ You connect with audiences through genuine stories and personal experiences',
            '✅ You receive positive feedback on your engaging and relatable style',
            '✅ You feel comfortable and enjoy presenting in personal settings',
            '✅ You inspire and connect with others through your presentations'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent eye contact and confident posture throughout your presentation!',
        'Your opening was engaging and captured the audience attention effectively.',
        'Your use of examples and stories made the content more relatable.'
      ],
      improvements: [
        'Try to slow down your pace slightly for better clarity.',
        'Consider adding more interactive elements to engage the audience.'
      ],
      nextSteps: [
        'Practice your presentation multiple times before delivering.',
        'Focus on maintaining steady eye contact with different audience members.',
        'Continue building your confidence through regular practice.'
      ]
    },
    badge: {
      name: 'Confident Speaker',
      emoji: '🎤',
      description: 'Congratulations! You have mastered public speaking skills.'
    },
    shareMessage: 'I just mastered Public Speaking! 🎉 Now I can deliver confident presentations that engage and inspire audiences. #PublicSpeaking #Confidence'
  },
  {
    id: 'written-communication',
    title: 'Written Communication',
    emoji: '✍️',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to write a critical email to your manager about a project delay that could affect the entire team.',
      problemExplanation: [
        'You struggle to express complex ideas clearly in writing.',
        'You worry about tone and how your message will be received.',
        'You find it difficult to organize your thoughts logically.'
      ],
      solutionApproach: [
        'Use clear, simple language and active voice.',
        'Structure your writing with clear paragraphs.',
        'Proofread carefully before sending.'
      ]
    },
    video: {
      title: 'Written Communication Excellence',
      duration: 9,
      script: `[0:00-0:45] WHY YOUR EMAILS GET IGNORED

"You write critical email to manager about project delay. You send it. No response for 3 days. Manager: 'Your email was confusing. Too long. No clear action. I did not know what you wanted.' You realize: Writing ≠ Communication. By the end of this video, you will master written communication. Clear message. Actionable content. Let us fix this."

[0:45-2:15] STEP 1: KNOW YOUR AUDIENCE

"Before writing: Who will read this? What do they need to know? What action do you want? Academic writing = formal tone, detailed analysis. Business writing = concise, action-oriented. Personal writing = warm, conversational. Audience = message adaptation."

[2:15-3:45] STEP 2: STRUCTURE WITH CLARITY

"Subject line: Specific, actionable. Opening: State purpose immediately. Body: One idea per paragraph. Use bullet points for lists. Closing: Clear next steps. Structure = reader comprehension. Without structure, readers get lost."

[3:45-5:15] STEP 3: USE ACTIVE VOICE

"Passive: 'The report was completed by the team.' Active: 'The team completed the report.' Active voice = clearer, more direct, easier to understand. Active voice = professional writing standard."

[5:15-6:45] STEP 4: BE CONCISE AND SPECIFIC

"Avoid: 'Please let me know your thoughts on this matter at your earliest convenience.' Use: 'Please review and respond by Friday.' Concise = respect for reader's time. Specific = clear expectations."

[6:45-8:15] STEP 5: PROOFREAD CAREFULLY

"Read aloud to catch errors. Check grammar, spelling, punctuation. Verify names, dates, numbers. Errors = unprofessional image. Proofreading = credibility protection."

[8:15-9:00] STEP 6: ADAPT TONE APPROPRIATELY

"Formal: 'I would appreciate your assistance.' Casual: 'Can you help me?' Match tone to relationship and context. Appropriate tone = relationship maintenance."`,
      content: [
        'Master clear and concise writing',
        'Use proper structure and formatting',
        'Adapt tone for different audiences'
      ]
    },
    quiz: {
      title: 'Test Your Written Communication Knowledge',
      questions: [
        {
          id: 1,
          question: 'What is the most important element of written communication?',
          options: [
            'Perfect grammar',
            'Clear message',
            'Fancy vocabulary',
            'Long sentences'
          ],
          correct: 1,
          explanation: 'A clear message is more important than perfect grammar or fancy vocabulary.'
        },
        {
          id: 2,
          question: 'How should you structure your writing?',
          options: [
            'Random thoughts',
            'Clear paragraphs',
            'One long paragraph',
            'No structure'
          ],
          correct: 1,
          explanation: 'Clear paragraphs with logical flow make your writing easier to understand.'
        },
        {
          id: 3,
          question: 'What voice should you use in business writing?',
          options: [
            'Passive voice',
            'Active voice',
            'Both equally',
            'Neither'
          ],
          correct: 1,
          explanation: 'Active voice makes your writing clearer and more direct.'
        },
        {
          id: 4,
          question: 'How important is proofreading?',
          options: [
            'Not important',
            'Somewhat important',
            'Very important',
            'Optional'
          ],
          correct: 2,
          explanation: 'Proofreading is very important to catch errors and improve clarity.'
        },
        {
          id: 5,
          question: 'What should you consider when writing?',
          options: [
            'Only your thoughts',
            'Your audience',
            'Word count',
            'Font size'
          ],
          correct: 1,
          explanation: 'Always consider your audience to tailor your message effectively.'
        }
      ]
    },
    challenge: {
      title: 'Practice Written Communication',
      description: 'Practice your writing skills in different contexts.',
      contexts: {
        academic: {
          title: 'Academic Writing Excellence',
          description: 'Master essays, reports, and academic papers.',
          instructions: [
            '• Clear thesis: One sentence stating your main argument—guide entire paper',
            '• Strong evidence: Facts, quotes, data—support every claim with proof',
            '• Logical structure: Intro → Body → Conclusion—flow naturally from point to point',
            '• Academic tone: Formal but clear—avoid slang, use precise vocabulary',
            '• Proper citations: Give credit where due—avoid plagiarism, build credibility',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Weak thesis: "This paper is about..."—vague, unfocused, poor grades',
            '• No evidence: Making claims without support—unconvincing, academic failure',
            '• Poor structure: Jumping between topics—confuse reader, lose argument',
            '• Informal language: "This is really cool..."—inappropriate for academic context',
            '• Plagiarism: Copying without citation—academic dishonesty, serious consequences'
          ],
          successCriteria: [
            '✅ You write papers with clear, arguable thesis statements',
            '✅ You support every claim with credible evidence and proper citations',
            '✅ You receive grades of B+ or higher on written assignments',
            '✅ Professors comment positively on your writing clarity and structure',
            '✅ You can explain your arguments clearly in class discussions'
          ]
        },
        professional: {
          title: 'Professional Writing Mastery',
          description: 'Excel at emails, reports, and business documents.',
          instructions: [
            '• Clear subject lines: Specific, actionable—help recipients prioritize and respond',
            '• Concise content: Get to point quickly—busy professionals appreciate brevity',
            '• Professional tone: Respectful, clear—build credibility, maintain relationships',
            '• Action items: What needs to be done, by when—make expectations clear',
            '• Proofread carefully: Check grammar, spelling—errors damage professional image',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague subjects: "Meeting" or "Update"—recipients cannot prioritize, delay responses',
            '• Too long: Walls of text—overwhelm readers, miss key points',
            '• Unprofessional tone: Casual language in business context—damage credibility',
            '• No clear action: "Let me know what you think..."—unclear expectations, delays',
            '• Typos everywhere: Grammatical errors—look unprofessional, hurt reputation'
          ],
          successCriteria: [
            '✅ You write emails that get quick, positive responses from colleagues',
            '✅ You create reports that are clear, actionable, and well-received',
            '✅ You receive compliments on your professional writing skills',
            '✅ You avoid misunderstandings caused by unclear written communication',
            '✅ You are trusted to write important documents and communications'
          ]
        },
        personal: {
          title: 'Personal Writing Connection',
          description: 'Improve personal letters, social media, and creative writing.',
          instructions: [
            '• Authentic voice: Write like you speak—genuine, relatable, engaging',
            '• Emotional connection: Share feelings, experiences—connect with readers personally',
            '• Clear purpose: Know why you are writing—inform, persuade, entertain, connect',
            '• Engaging stories: Use examples, anecdotes—make abstract concepts concrete',
            '• Respectful tone: Even in disagreement—maintain relationships, build bridges',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Fake voice: Trying to sound like someone else—inauthentic, unengaging',
            '• No emotion: Dry, boring writing—fail to connect, lose readers',
            '• Unclear purpose: Rambling without direction—confuse readers, waste time',
            '• No examples: Abstract concepts without stories—hard to understand, remember',
            '• Harsh tone: Attacking, insulting—damage relationships, create enemies'
          ],
          successCriteria: [
            '✅ You write personal messages that strengthen relationships',
            '✅ You receive positive feedback on your writing style and voice',
            '✅ You can express complex emotions and ideas clearly in writing',
            '✅ You avoid misunderstandings in personal written communication',
            '✅ You enjoy writing and feel confident in your abilities'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Your writing is clear and well-structured with good flow.',
        'You use active voice effectively to make your points direct.',
        'Your grammar and spelling are excellent throughout.'
      ],
      improvements: [
        'Consider adding more specific examples to support your arguments.',
        'Try to vary your sentence length for better rhythm and readability.'
      ],
      nextSteps: [
        'Practice writing in different styles and formats.',
        'Focus on adapting your tone for different audiences.',
        'Continue building your writing skills through regular practice.'
      ]
    },
    badge: {
      name: 'Skilled Writer',
      emoji: '✍️',
      description: 'Congratulations! You have mastered written communication.'
    },
    shareMessage: 'I just mastered Written Communication! 🎉 Now I can express my ideas clearly and persuasively in any written format. #WritingSkills #Communication'
  },
  {
    id: 'non-verbal-communication',
    title: 'Non-Verbal Communication',
    emoji: '👥',
    context: 'personal' as const,
    discover: {
      scenario: 'You are at a job interview and need to make a strong first impression through your body language and presence.',
      problemExplanation: [
        'You are unsure about appropriate body language in professional settings.',
        'You struggle to read others non-verbal cues.',
        'You want to project confidence and professionalism.'
      ],
      solutionApproach: [
        'Maintain good posture and eye contact.',
        'Use appropriate gestures and facial expressions.',
        'Practice reading others body language.'
      ]
    },
    video: {
      title: 'Non-Verbal Communication Power',
      duration: 7,
      script: `[0:00-0:45] WHY YOU LOOK UNPROFESSIONAL

"Job interview. You know your answers. You speak well. But interviewer looks uncomfortable. Result: Rejection. Feedback: 'Your body language was off-putting. Crossed arms, avoiding eye contact, slouching.' You realize: Words ≠ Complete message. 70% of communication is non-verbal. By the end of this video, you will master body language. Confident presence. Professional image. Let us fix this."

[0:45-2:00] STEP 1: MASTER POSTURE AND PRESENCE

"Stand tall, shoulders back, chest open. This projects confidence and authority. Avoid: Slouching, crossed arms, hands in pockets. Good posture = confidence projection. Poor posture = insecurity signal."

[2:00-3:15] STEP 2: CONTROL EYE CONTACT

"Maintain eye contact 60% of time (not 100% - that is staring). Look at different people in group settings. Avoid: Looking down, looking away constantly, staring. Eye contact = engagement and trust."

[3:15-4:30] STEP 3: USE APPROPRIATE GESTURES

"Use hands to emphasize points. Open palms = honesty and openness. Avoid: Pointing aggressively, fidgeting, closed fists. Gestures = message reinforcement."

[4:30-5:45] STEP 4: READ OTHERS' BODY LANGUAGE

"Notice: Crossed arms = defensive, leaning forward = interested, looking away = disengaged. Reading body language = understanding others' true feelings. Use this to adjust your approach."

[5:45-7:00] STEP 5: MATCH YOUR EXPRESSIONS TO YOUR MESSAGE

"Serious topic = serious expression. Positive news = warm smile. Mismatched expressions = confusion. Facial expressions = message consistency."`,
      content: [
        'Understand the impact of body language',
        'Learn to read non-verbal cues',
        'Project confidence through posture and gestures'
      ]
    },
    quiz: {
      title: 'Test Your Non-Verbal Communication Knowledge',
      questions: [
        {
          id: 1,
          question: 'What percentage of communication is non-verbal?',
          options: [
            '30%',
            '50%',
            '70%',
            '90%'
          ],
          correct: 2,
          explanation: 'Non-verbal communication makes up approximately 70% of how we communicate.'
        },
        {
          id: 2,
          question: 'What does maintaining eye contact show?',
          options: [
            'Aggression',
            'Confidence',
            'Disinterest',
            'Confusion'
          ],
          correct: 1,
          explanation: 'Maintaining appropriate eye contact shows confidence and builds connection.'
        },
        {
          id: 3,
          question: 'What should you avoid in professional settings?',
          options: [
            'Sitting up straight',
            'Crossing arms',
            'Making eye contact',
            'Smiling'
          ],
          correct: 1,
          explanation: 'Crossing arms can appear defensive or closed off in professional settings.'
        },
        {
          id: 4,
          question: 'How can you show you are listening actively?',
          options: [
            'Looking away',
            'Nodding occasionally',
            'Fidgeting',
            'Checking your phone'
          ],
          correct: 1,
          explanation: 'Nodding occasionally shows you are engaged and actively listening.'
        },
        {
          id: 5,
          question: 'What does leaning forward indicate?',
          options: [
            'Aggression',
            'Interest',
            'Boredom',
            'Disagreement'
          ],
          correct: 1,
          explanation: 'Leaning forward typically indicates interest and engagement in the conversation.'
        }
      ]
    },
    challenge: {
      title: 'Practice Non-Verbal Communication',
      description: 'Practice using body language effectively in different situations.',
      contexts: {
        academic: {
          title: 'Academic Non-Verbal Excellence',
          description: 'Master body language in presentations, discussions, and academic settings.',
          instructions: [
            '• Confident posture: Stand tall, shoulders back—project authority and competence',
            '• Eye contact: 60% speaker, 40% notes—balance attention and documentation',
            '• Open gestures: Palms visible, arms uncrossed—show openness and engagement',
            '• Facial expressions: Match your message—serious for facts, warm for discussions',
            '• Space awareness: Respect personal boundaries—professional distance, not intimidating',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Slouching: Poor posture—appear lazy, unprofessional, lose credibility',
            '• Avoiding eye contact: Looking down or away—seem nervous, unprepared, dishonest',
            '• Closed body language: Crossed arms, turned away—appear defensive, uninterested',
            '• Inappropriate expressions: Smiling during serious topics—confuse audience, seem insensitive',
            '• Invading space: Standing too close—make others uncomfortable, appear aggressive'
          ],
          successCriteria: [
            '✅ You maintain confident posture throughout presentations and discussions',
            '✅ You make appropriate eye contact that builds connection and trust',
            '✅ You use gestures that enhance your message without being distracting',
            '✅ You receive positive feedback on your professional presence and demeanor',
            '✅ You feel confident and in control of your non-verbal communication'
          ]
        },
        professional: {
          title: 'Professional Body Language Mastery',
          description: 'Excel at non-verbal communication in meetings, interviews, and business interactions.',
          instructions: [
            '• Power posture: Sit up straight, shoulders back—project confidence and competence',
            '• Handshake mastery: Firm grip, eye contact—make strong first impression',
            '• Mirror technique: Subtly match others body language—build rapport and connection',
            '• Gesture control: Use hands to emphasize points—enhance message, show engagement',
            '• Facial awareness: Maintain pleasant expression—approachable, professional, trustworthy',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Weak handshake: Limp grip—appear unconfident, unprofessional, forgettable',
            '• Fidgeting: Playing with pen, tapping foot—show nervousness, distract others',
            '• Negative expressions: Frowning, eye rolling—create tension, damage relationships',
            '• Poor posture: Slouching, leaning back—appear lazy, uninterested, unprofessional',
            '• Inappropriate touching: Patting, hugging—violate boundaries, create discomfort'
          ],
          successCriteria: [
            '✅ You make strong first impressions with confident handshakes and posture',
            '✅ You use body language that enhances your professional credibility',
            '✅ You build rapport through appropriate mirroring and engagement',
            '✅ You receive positive feedback on your professional presence and demeanor',
            '✅ You feel confident and in control in all professional interactions'
          ]
        },
        personal: {
          title: 'Personal Non-Verbal Connection',
          description: 'Build deeper relationships through positive body language and expressions.',
          instructions: [
            '• Warm expressions: Genuine smile, kind eyes—make others feel welcome and valued',
            '• Open posture: Arms uncrossed, facing others—show openness and receptiveness',
            '• Appropriate touch: Handshake, pat on back—build connection without invading space',
            '• Active listening body: Lean in, nod, maintain eye contact—show genuine interest',
            '• Emotional awareness: Match expressions to situation—appropriate, authentic, connecting',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Cold expressions: Blank face, avoiding eye contact—seem unfriendly, uninterested',
            '• Closed posture: Crossed arms, turned away—appear defensive, unreceptive',
            '• Inappropriate touching: Hugging strangers, patting inappropriately—violate boundaries',
            '• Distracted body language: Looking at phone, fidgeting—show disrespect, disinterest',
            '• Mismatched expressions: Smiling during sad news—confuse others, seem insensitive'
          ],
          successCriteria: [
            '✅ You make others feel comfortable and valued through your body language',
            '✅ You build deeper connections through appropriate non-verbal communication',
            '✅ You receive positive feedback on your warmth and approachability',
            '✅ You avoid misunderstandings caused by confusing non-verbal signals',
            '✅ You feel confident and authentic in your personal interactions'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent eye contact and confident posture throughout your interactions!',
        'Your gestures effectively emphasize your points without being distracting.',
        'You maintain a warm, approachable expression that puts others at ease.'
      ],
      improvements: [
        'Your body language consistently reinforces your spoken message.',
        'Consider using more open gestures to appear more welcoming and receptive.'
      ],
      nextSteps: [
        'Practice maintaining confident posture in different situations.',
        'Focus on reading others non-verbal cues more effectively.',
        'Continue building your body language awareness and skills.'
      ]
    },
    badge: {
      name: 'Body Language Master',
      emoji: '👥',
      description: 'Congratulations! You have mastered non-verbal communication.'
    },
    shareMessage: 'I just mastered Non-Verbal Communication! 🎉 Now I can project confidence and build stronger connections through body language. #BodyLanguage #Confidence'
  },
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution',
    emoji: '🤝',
    context: 'professional' as const,
    discover: {
      scenario: 'Two team members are having a disagreement about project priorities that is affecting the entire team productivity.',
      problemExplanation: [
        'You avoid conflicts because they make you uncomfortable.',
        'You struggle to find solutions that satisfy everyone.',
        'You worry about damaging relationships when addressing issues.'
      ],
      solutionApproach: [
        'Focus on interests, not positions.',
        'Use active listening to understand all perspectives.',
        'Seek win-win solutions that benefit everyone.'
      ]
    },
    video: {
      title: 'Conflict Resolution Strategies',
      duration: 11,
      script: `[0:00-0:45] WHY CONFLICTS DESTROY RELATIONSHIPS

"Team project disagreement. Two members argue about approach. Week 1: Tension. Week 2: Avoidance. Week 3: Project fails. Team breaks up. You realize: Unresolved conflicts = relationship destruction. By the end of this video, you will master conflict resolution. Win-win solutions. Stronger relationships. Let us fix this."

[0:45-2:30] STEP 1: LISTEN TO UNDERSTAND (NOT TO RESPOND)

"Most people listen to prepare their response. Wrong approach. Listen to UNDERSTAND their perspective. Ask: 'Help me understand why this is important to you.' Understanding = solution foundation."

[2:30-4:15] STEP 2: FOCUS ON INTERESTS, NOT POSITIONS

"Position: 'I want to use Method A.' Interest: 'I want to ensure quality and meet deadline.' Positions = fixed. Interests = flexible. Find solutions that meet both interests."

[4:15-6:00] STEP 3: USE 'I' STATEMENTS

"Avoid: 'You always...' 'You never...' Use: 'I feel...' 'I need...' 'I' statements = ownership of feelings. 'You' statements = blame and defensiveness."

[6:00-7:45] STEP 4: SEEK WIN-WIN SOLUTIONS

"Look for solutions that benefit everyone. Brainstorm multiple options. Be creative. Win-win = relationship preservation. Win-lose = relationship damage."

[7:45-9:30] STEP 5: STAY CALM AND PROFESSIONAL

"Emotions escalate conflicts. Stay calm. Take breaks if needed. Professional approach = constructive resolution. Emotional approach = destructive escalation."

[9:30-11:00] STEP 6: FOLLOW UP AND PREVENT FUTURE CONFLICTS

"After resolution: Check in regularly. Address issues early. Build communication habits. Prevention = better than resolution."`,
      content: [
        'Learn effective conflict resolution techniques',
        'Understand different conflict styles',
        'Practice mediation and negotiation skills'
      ]
    },
    quiz: {
      title: 'Test Your Conflict Resolution Knowledge',
      questions: [
        {
          id: 1,
          question: 'What is the first step in conflict resolution?',
          options: [
            'Take sides',
            'Listen actively',
            'Make demands',
            'Avoid the issue'
          ],
          correct: 1,
          explanation: 'Active listening is the first step to understanding different perspectives.'
        },
        {
          id: 2,
          question: 'What should you focus on during conflicts?',
          options: [
            'Winning',
            'Interests, not positions',
            'Being right',
            'Avoiding blame'
          ],
          correct: 1,
          explanation: 'Focus on underlying interests rather than fixed positions to find solutions.'
        },
        {
          id: 3,
          question: 'How should you approach difficult conversations?',
          options: [
            'Aggressively',
            'Calmly and professionally',
            'Defensively',
            'Passively'
          ],
          correct: 1,
          explanation: 'Stay calm and professional to maintain constructive dialogue.'
        },
        {
          id: 4,
          question: 'What is the goal of conflict resolution?',
          options: [
            'To win',
            'To find win-win solutions',
            'To avoid conflict',
            'To assign blame'
          ],
          correct: 1,
          explanation: 'The goal is to find solutions that benefit all parties involved.'
        },
        {
          id: 5,
          question: 'What should you avoid during conflicts?',
          options: [
            'Personal attacks',
            'Active listening',
            'Seeking understanding',
            'Finding solutions'
          ],
          correct: 0,
          explanation: 'Avoid personal attacks as they escalate conflicts and damage relationships.'
        }
      ]
    },
    challenge: {
      title: 'Practice Conflict Resolution',
      description: 'Practice resolving conflicts in different contexts.',
      contexts: {
        academic: {
          title: 'Academic Conflict Resolution',
          description: 'Handle disagreements in group projects, discussions, and academic settings.',
          instructions: [
            '• Listen first: Understand all perspectives—avoid jumping to conclusions or taking sides',
            '• Focus on facts: Separate emotions from issues—address problems, not personalities',
            '• Find common ground: Identify shared goals—build on agreement, not disagreement',
            '• Propose solutions: Offer multiple options—collaborative approach, not competitive',
            '• Document agreements: Write down decisions—prevent future misunderstandings',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Taking sides: "You are right, they are wrong..."—escalate conflict, damage relationships',
            '• Personal attacks: "You always..." or "You never..."—hurt feelings, destroy trust',
            '• Avoiding conflict: "Let us just move on..."—leave issues unresolved, create resentment',
            '• Win-lose thinking: "I must win this argument..."—prevent compromise, damage collaboration',
            '• Emotional reactions: Getting angry or defensive—cloud judgment, worsen situation'
          ],
          successCriteria: [
            '✅ You resolve group project conflicts without damaging relationships',
            '✅ You facilitate discussions that lead to better solutions and understanding',
            '✅ You receive positive feedback on your mediation and problem-solving skills',
            '✅ You help create collaborative environments where everyone feels heard',
            '✅ You turn conflicts into opportunities for learning and growth'
          ]
        },
        professional: {
          title: 'Professional Conflict Resolution',
          description: 'Navigate workplace conflicts, team disagreements, and professional disputes.',
          instructions: [
            '• Stay professional: Keep emotions in check—maintain respect, focus on solutions',
            '• Understand interests: Ask "Why is this important to you?"—find underlying needs',
            '• Seek win-win: Look for solutions that benefit all parties—build relationships, not enemies',
            '• Use data: Facts over opinions—objective evidence, not subjective feelings',
            '• Follow up: Check progress, ensure agreements are working—prevent future conflicts',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Emotional outbursts: Getting angry or defensive—damage reputation, escalate conflict',
            '• Blame game: "This is your fault..."—create enemies, prevent resolution',
            '• Ignoring conflicts: "It will work itself out..."—allow problems to grow worse',
            '• Power plays: Using authority to force solutions—create resentment, damage trust',
            '• Gossiping: Talking about conflicts behind backs—spread negativity, damage culture'
          ],
          successCriteria: [
            '✅ You resolve workplace conflicts professionally and constructively',
            '✅ You maintain positive relationships even after disagreements',
            '✅ You receive recognition for your mediation and problem-solving abilities',
            '✅ You help create a collaborative, respectful work environment',
            '✅ You turn conflicts into opportunities for process improvement and growth'
          ]
        },
        personal: {
          title: 'Personal Conflict Resolution',
          description: 'Handle family disputes, friendship conflicts, and personal disagreements.',
          instructions: [
            '• Choose timing: Address issues when calm—not during heated moments or stress',
            '• Use "I" statements: "I feel..." not "You always..."—express feelings, not accusations',
            '• Listen with empathy: Try to understand their perspective—show care, build connection',
            '• Focus on relationship: Preserve connection over being right—love over winning',
            '• Forgive and move forward: Let go of grudges—heal relationships, find peace',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Bringing up old issues: "Remember when you..."—reopen wounds, prevent healing',
            '• Stonewalling: Silent treatment, refusing to talk—damage relationships, create distance',
            '• Defensiveness: "That is not true!" or "You are wrong!"—escalate conflict, block understanding',
            '• Criticism: Attacking character, not behavior—hurt deeply, damage self-esteem',
            '• Contempt: Eye rolling, sarcasm, name-calling—destroy relationships, create hostility'
          ],
          successCriteria: [
            '✅ You resolve personal conflicts without damaging relationships',
            '✅ You communicate your feelings clearly without attacking others',
            '✅ You receive positive feedback on your empathy and understanding',
            '✅ You help create harmonious family and friendship environments',
            '✅ You turn conflicts into opportunities for deeper connection and growth'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent job staying calm and professional during the difficult conversation.',
        'Your active listening skills helped understand all perspectives involved.',
        'You successfully found common ground and proposed win-win solutions.'
      ],
      improvements: [
        'Your approach helped de-escalate the situation and build understanding.',
        'Consider practicing more "I" statements to express your feelings without blame.'
      ],
      nextSteps: [
        'Practice conflict resolution techniques in low-stakes situations.',
        'Focus on developing your mediation and negotiation skills.',
        'Continue building your confidence in handling difficult conversations.'
      ]
    },
    badge: {
      name: 'Conflict Resolution Expert',
      emoji: '🤝',
      description: 'Congratulations! You have mastered conflict resolution skills.'
    },
    shareMessage: 'I just mastered Conflict Resolution! 🎉 Now I can navigate disagreements and find win-win solutions that strengthen relationships. #ConflictResolution #Leadership'
  },
  {
    id: 'presentation-skills',
    title: 'Presentation Skills',
    emoji: '📊',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to present your team project to senior management. Your career advancement depends on this presentation.',
      problemExplanation: [
        'You feel nervous speaking in front of large groups.',
        'You struggle to organize your thoughts clearly.',
        'You worry about making mistakes or forgetting key points.'
      ],
      solutionApproach: [
        'Practice your presentation multiple times.',
        'Use storytelling to make your points memorable.',
        'Focus on your audience needs and interests.'
      ]
    },
    video: {
      title: 'Presentation Skills Mastery',
      duration: 12,
      script: `[0:00-0:45] WHY YOUR PRESENTATIONS BORE AUDIENCES

"You present your team project to senior management. Your career advancement depends on this. You read from slides. Audience looks bored. Manager: 'You have great data but terrible presentation skills. This limits your career growth.' You realize: Content ≠ Presentation. By the end of this video, you will master presentation skills. Engaging delivery. Memorable impact. Let us fix this."

[0:45-2:30] STEP 1: START WITH A STRONG HOOK

"First 30 seconds = audience attention. Use: Surprising statistic, personal story, provocative question. Hook = audience engagement. Weak opening = lost audience."

[2:30-4:15] STEP 2: STRUCTURE FOR CLARITY

"Tell them what you will tell them (intro). Tell them (body with 3 main points). Tell them what you told them (conclusion). Structure = audience comprehension."

[4:15-6:00] STEP 3: USE VISUAL AIDS EFFECTIVELY

"Slides support your message, do not replace it. One idea per slide. Use images, charts, minimal text. Visual aids = message reinforcement. Text-heavy slides = audience confusion."

[6:00-7:45] STEP 4: ENGAGE YOUR AUDIENCE

"Ask questions. Use polls. Share stories. Make eye contact. Move around. Engagement = audience attention. Monotone delivery = audience sleep."

[7:45-9:30] STEP 5: HANDLE QUESTIONS CONFIDENTLY

"Listen completely. Pause before answering. If you do not know: 'That is an excellent question. Let me research that and get back to you.' Honesty = credibility."

[9:30-11:15] STEP 6: PRACTICE AND PREPARE

"Practice out loud 3+ times. Time yourself. Record yourself. Practice with friends. Preparation = confidence. Confidence = better delivery."

[11:15-12:00] STEP 7: END WITH A CALL TO ACTION

"Tell audience exactly what you want them to do next. Clear action = presentation success. Vague ending = wasted opportunity."`,
      content: [
        'Create compelling presentations that engage audiences',
        'Use visual aids effectively',
        'Handle questions and manage nervousness'
      ]
    },
    quiz: {
      title: 'Test Your Presentation Skills Knowledge',
      questions: [
        {
          id: 1,
          question: 'What is the most important element of a presentation?',
          options: [
            'Fancy slides',
            'Clear message',
            'Loud voice',
            'Perfect timing'
          ],
          correct: 1,
          explanation: 'A clear, compelling message is the most important element of any presentation.'
        },
        {
          id: 2,
          question: 'How should you structure your presentation?',
          options: [
            'Random topics',
            'Clear beginning, middle, end',
            'Only main points',
            'No structure'
          ],
          correct: 1,
          explanation: 'Presentations should have a clear structure with beginning, middle, and end.'
        },
        {
          id: 3,
          question: 'What role should visual aids play?',
          options: [
            'Replace your speech',
            'Support your message',
            'Entertain the audience',
            'Fill time'
          ],
          correct: 1,
          explanation: 'Visual aids should support and enhance your spoken message, not replace it.'
        },
        {
          id: 4,
          question: 'How important is audience engagement?',
          options: [
            'Not important',
            'Somewhat important',
            'Very important',
            'Optional'
          ],
          correct: 2,
          explanation: 'Audience engagement is very important for effective presentations.'
        },
        {
          id: 5,
          question: 'What should you do if you make a mistake?',
          options: [
            'Stop and apologize',
            'Continue confidently',
            'Start over',
            'Leave the stage'
          ],
          correct: 1,
          explanation: 'Continue confidently—most mistakes go unnoticed and dwelling on them hurts your presentation.'
        }
      ]
    },
    challenge: {
      title: 'Practice Presentation Skills',
      description: 'Practice creating and delivering presentations in different contexts.',
      contexts: {
        academic: {
          title: 'Academic Presentation Excellence',
          description: 'Master thesis presentations, research talks, and academic conferences.',
          instructions: [
            '• Clear structure: Intro → Methods → Results → Conclusion—logical flow, easy to follow',
            '• Visual clarity: One idea per slide—avoid clutter, focus attention on key points',
            '• Data storytelling: Charts tell story—not just numbers, but what they mean',
            '• Practice timing: Rehearse with timer—stay within limits, respect audience time',
            '• Handle Q&A: Prepare for questions—anticipate challenges, show expertise',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Information overload: Too many slides, too much text—overwhelm audience, lose message',
            '• Reading slides: "As you can see..."—audience can read, they want your insights',
            '• Poor visuals: Tiny fonts, cluttered charts—hard to read, unprofessional appearance',
            '• No practice: "Wing it" approach—nervous delivery, poor timing, missed opportunities',
            '• Ignoring audience: No eye contact, no engagement—disconnect, lose attention'
          ],
          successCriteria: [
            '✅ You deliver presentations that are clear, engaging, and well-timed',
            '✅ You use visual aids effectively to support your message',
            '✅ You handle questions confidently and demonstrate deep knowledge',
            '✅ You receive positive feedback from professors and peers',
            '✅ You feel confident and in control during all presentations'
          ]
        },
        professional: {
          title: 'Professional Presentation Mastery',
          description: 'Excel at business presentations, client pitches, and team meetings.',
          instructions: [
            '• Know your audience: Tailor content to their needs—relevant examples, appropriate level',
            '• Start with impact: Hook with problem, story, or statistic—capture attention immediately',
            '• Use storytelling: Case studies, examples—make abstract concepts concrete and memorable',
            '• Call to action: Clear next steps—what should audience do after presentation',
            '• Professional polish: Rehearse, check technology—smooth delivery, no technical issues',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Death by PowerPoint: Too many slides—overwhelm audience, lose message',
            '• No rehearsal: "I know this topic..."—delivery suffers, miss key points',
            '• Weak opening: "Today I will talk about..."—boring start, lose attention',
            '• No clear action: Vague conclusion—miss opportunity to inspire action',
            '• Technical failures: Not testing equipment—embarrassing delays, unprofessional image'
          ],
          successCriteria: [
            '✅ You deliver presentations that achieve your business objectives',
            '✅ You engage audiences with compelling stories and clear calls to action',
            '✅ You receive positive feedback on your professional presentation skills',
            '✅ You feel confident and prepared for any presentation situation',
            '✅ You inspire action and achieve desired outcomes from your presentations'
          ]
        },
        personal: {
          title: 'Personal Presentation Confidence',
          description: 'Build confidence for social presentations, family events, and personal projects.',
          instructions: [
            '• Authentic voice: Be yourself—genuine, relatable, engaging, not trying to impress',
            '• Personal stories: Share experiences—connect emotionally, make abstract concrete',
            '• Simple structure: Clear beginning, middle, end—easy to follow, hard to mess up',
            '• Practice with friends: Get feedback—build confidence, improve delivery',
            '• Enjoy the process: Have fun—enthusiasm is contagious, audience will respond',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Trying to be perfect: "Must impress everyone..."—create pressure, reduce authenticity',
            '• Over-preparation: Memorizing every word—sound robotic, lose natural flow',
            '• Ignoring audience: No eye contact, no interaction—miss connection, lose engagement',
            '• Apologizing constantly: "Sorry, I am nervous..."—draw attention to weakness',
            '• Comparing yourself: "They are so much better..."—undermine confidence, miss your strengths'
          ],
          successCriteria: [
            '✅ You deliver personal presentations with confidence and authenticity',
            '✅ You connect with audiences through genuine stories and personal experiences',
            '✅ You receive positive feedback on your engaging and relatable style',
            '✅ You feel comfortable and enjoy presenting in personal settings',
            '✅ You inspire and connect with others through your presentations'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent structure and clear flow throughout your presentation!',
        'Your visual aids effectively supported your message without overwhelming.',
        'Great job engaging the audience with questions and interactive elements.'
      ],
      improvements: [
        'Your confident delivery and eye contact kept the audience engaged.',
        'Consider adding more personal stories to make your content more relatable.'
      ],
      nextSteps: [
        'Practice your presentation multiple times before delivering.',
        'Focus on maintaining steady eye contact with different audience members.',
        'Continue building your confidence through regular practice.'
      ]
    },
    badge: {
      name: 'Presentation Master',
      emoji: '📊',
      description: 'Congratulations! You have mastered presentation skills.'
    },
    shareMessage: 'I just mastered Presentation Skills! 🎉 Now I can create and deliver compelling presentations that engage and inspire audiences. #PresentationSkills #Confidence'
  }
];

const Module1Simple: React.FC = () => {
  const loadModuleProgress = () => {
    // Load module progress from localStorage or API
    return null;
  };

  const saveModuleProgress = (progress: any) => {
    // Save module progress to localStorage or API
    console.log('Saving module progress:', progress);
  };

  const updateSubtopicProgress = (subtopicId: string, progress: any) => {
    // Update subtopic progress
    console.log('Updating subtopic progress:', subtopicId, progress);
  };

  return (
    <ModuleTemplate
      moduleId="communication-skills"
      moduleTitle="Communication Skills"
      moduleDescription="Master the art of effective communication in all aspects of life."
      moduleColor="bg-blue-500"
      moduleNumber={1}
      learningObjectives={[
        'Develop active listening skills for better understanding',
        'Master public speaking and presentation techniques',
        'Improve written communication across different contexts',
        'Enhance non-verbal communication and body language',
        'Learn effective conflict resolution strategies',
        'Build confidence in all communication situations'
      ]}
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 60 },
        finalAssessment: { duration: 15 }
      }}
      subtopics={testSubtopics}
      assessment={{
        title: 'Communication Skills Assessment',
        description: 'Comprehensive evaluation of your communication abilities.',
        questions: [
          // Active Listening (1-5)
          {
            id: 1,
            question: 'How confident are you in your communication skills?',
            options: ['Not confident', 'Somewhat confident', 'Confident', 'Very confident'],
            correct: 3,
            explanation: 'Confidence is key to effective communication.'
          },
          {
            id: 2,
            question: 'How well do you listen to others?',
            options: ['Poor', 'Fair', 'Good', 'Excellent'],
            correct: 3,
            explanation: 'Active listening is essential for understanding others.'
          },
          {
            id: 3,
            question: 'How effectively do you express your ideas?',
            options: ['Poor', 'Fair', 'Good', 'Excellent'],
            correct: 3,
            explanation: 'Clear expression helps others understand your message.'
          },
          {
            id: 4,
            question: 'How well do you handle conflicts?',
            options: ['Poor', 'Fair', 'Good', 'Excellent'],
            correct: 3,
            explanation: 'Conflict resolution skills are crucial for relationships.'
          },
          {
            id: 5,
            question: 'How confident are you in public speaking?',
            options: ['Not confident', 'Somewhat confident', 'Confident', 'Very confident'],
            correct: 3,
            explanation: 'Public speaking confidence opens many opportunities.'
          },
          // Public Speaking (6-10)
          {
            id: 6,
            question: 'What is the most important factor in public speaking?',
            options: ['Perfect pronunciation', 'Confidence and preparation', 'Loud voice', 'Fancy gestures'],
            correct: 1,
            explanation: 'Confidence and preparation are the most important factors for effective public speaking.'
          },
          {
            id: 7,
            question: 'How should you start your presentation?',
            options: ['With a joke', 'With a strong opening', 'With an apology', 'With background music'],
            correct: 1,
            explanation: 'Start with a strong opening that captures attention and sets the tone.'
          },
          {
            id: 8,
            question: 'What should you do if you make a mistake?',
            options: ['Stop and apologize', 'Continue confidently', 'Start over', 'Leave the stage'],
            correct: 1,
            explanation: 'Continue confidently—most mistakes go unnoticed by the audience.'
          },
          {
            id: 9,
            question: 'How much should you practice before presenting?',
            options: ['Once', 'A few times', 'Until you are comfortable', 'Never'],
            correct: 2,
            explanation: 'Practice until you are comfortable with your material and delivery.'
          },
          {
            id: 10,
            question: 'What is the best way to handle nervousness?',
            options: ['Avoid speaking', 'Use breathing techniques', 'Speak faster', 'Look at the floor'],
            correct: 1,
            explanation: 'Breathing techniques help manage nervousness and improve delivery.'
          },
          // Written Communication (11-15)
          {
            id: 11,
            question: 'What is the most important element of written communication?',
            options: ['Perfect grammar', 'Clear message', 'Fancy vocabulary', 'Long sentences'],
            correct: 1,
            explanation: 'A clear message is more important than perfect grammar or fancy vocabulary.'
          },
          {
            id: 12,
            question: 'How should you structure your writing?',
            options: ['Random thoughts', 'Clear paragraphs', 'One long paragraph', 'No structure'],
            correct: 1,
            explanation: 'Clear paragraphs with logical flow make your writing easier to understand.'
          },
          {
            id: 13,
            question: 'What voice should you use in business writing?',
            options: ['Passive voice', 'Active voice', 'Both equally', 'Neither'],
            correct: 1,
            explanation: 'Active voice makes your writing clearer and more direct.'
          },
          {
            id: 14,
            question: 'How important is proofreading?',
            options: ['Not important', 'Somewhat important', 'Very important', 'Optional'],
            correct: 2,
            explanation: 'Proofreading is very important to catch errors and improve clarity.'
          },
          {
            id: 15,
            question: 'What should you consider when writing?',
            options: ['Only your thoughts', 'Your audience', 'Word count', 'Font size'],
            correct: 1,
            explanation: 'Always consider your audience to tailor your message effectively.'
          },
          // Non-Verbal Communication (16-20)
          {
            id: 16,
            question: 'What percentage of communication is non-verbal?',
            options: ['30%', '50%', '70%', '90%'],
            correct: 2,
            explanation: 'Non-verbal communication makes up approximately 70% of how we communicate.'
          },
          {
            id: 17,
            question: 'What does maintaining eye contact show?',
            options: ['Aggression', 'Confidence', 'Disinterest', 'Confusion'],
            correct: 1,
            explanation: 'Maintaining appropriate eye contact shows confidence and builds connection.'
          },
          {
            id: 18,
            question: 'What should you avoid in professional settings?',
            options: ['Sitting up straight', 'Crossing arms', 'Making eye contact', 'Smiling'],
            correct: 1,
            explanation: 'Crossing arms can appear defensive or closed off in professional settings.'
          },
          {
            id: 19,
            question: 'How can you show you are listening actively?',
            options: ['Looking away', 'Nodding occasionally', 'Fidgeting', 'Checking your phone'],
            correct: 1,
            explanation: 'Nodding occasionally shows you are engaged and actively listening.'
          },
          {
            id: 20,
            question: 'What does leaning forward indicate?',
            options: ['Aggression', 'Interest', 'Boredom', 'Disagreement'],
            correct: 1,
            explanation: 'Leaning forward typically indicates interest and engagement in the conversation.'
          },
          // Conflict Resolution (21-25)
          {
            id: 21,
            question: 'What is the first step in conflict resolution?',
            options: ['Take sides', 'Listen actively', 'Make demands', 'Avoid the issue'],
            correct: 1,
            explanation: 'Active listening is the first step to understanding different perspectives.'
          },
          {
            id: 22,
            question: 'What should you focus on during conflicts?',
            options: ['Winning', 'Interests, not positions', 'Being right', 'Avoiding blame'],
            correct: 1,
            explanation: 'Focus on underlying interests rather than fixed positions to find solutions.'
          },
          {
            id: 23,
            question: 'How should you approach difficult conversations?',
            options: ['Aggressively', 'Calmly and professionally', 'Defensively', 'Passively'],
            correct: 1,
            explanation: 'Stay calm and professional to maintain constructive dialogue.'
          },
          {
            id: 24,
            question: 'What is the goal of conflict resolution?',
            options: ['To win', 'To find win-win solutions', 'To avoid conflict', 'To assign blame'],
            correct: 1,
            explanation: 'The goal is to find solutions that benefit all parties involved.'
          },
          {
            id: 25,
            question: 'What should you avoid during conflicts?',
            options: ['Personal attacks', 'Active listening', 'Seeking understanding', 'Finding solutions'],
            correct: 0,
            explanation: 'Avoid personal attacks as they escalate conflicts and damage relationships.'
          },
          // Presentation Skills (26-30)
          {
            id: 26,
            question: 'What is the most important element of a presentation?',
            options: ['Fancy slides', 'Clear message', 'Loud voice', 'Perfect timing'],
            correct: 1,
            explanation: 'A clear, compelling message is the most important element of any presentation.'
          },
          {
            id: 27,
            question: 'How should you structure your presentation?',
            options: ['Random topics', 'Clear beginning, middle, end', 'Only main points', 'No structure'],
            correct: 1,
            explanation: 'Presentations should have a clear structure with beginning, middle, and end.'
          },
          {
            id: 28,
            question: 'What role should visual aids play?',
            options: ['Replace your speech', 'Support your message', 'Entertain the audience', 'Fill time'],
            correct: 1,
            explanation: 'Visual aids should support and enhance your spoken message, not replace it.'
          },
          {
            id: 29,
            question: 'How important is audience engagement?',
            options: ['Not important', 'Somewhat important', 'Very important', 'Optional'],
            correct: 2,
            explanation: 'Audience engagement is very important for effective presentations.'
          },
          {
            id: 30,
            question: 'What should you do if you make a mistake?',
            options: ['Stop and apologize', 'Continue confidently', 'Start over', 'Leave the stage'],
            correct: 1,
            explanation: 'Continue confidently—most mistakes go unnoticed and dwelling on them hurts your presentation.'
          }
        ],
        gradingScale: {
          excellent: { min: 27, max: 30, message: 'Outstanding communication skills!', xpReward: 100 },
          good: { min: 21, max: 26, message: 'Good communication skills with room for improvement.', xpReward: 75 },
          satisfactory: { min: 15, max: 20, message: 'Satisfactory communication skills.', xpReward: 50 },
          needsImprovement: { min: 0, max: 14, message: 'Communication skills need improvement.', xpReward: 25 }
        }
      }}
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
    />
  );
};

export default Module1Simple;
