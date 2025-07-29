import mongoose from 'mongoose'
import dotenv from 'dotenv'
// Adjust paths as per your project structure
import Post from './models/post.model.js'
import User from './models/user.model.js'

// Load environment variables (e.g., MONGODB_URI)
dotenv.config()

const MONGODB_URI = process.env.mongooseURI

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected successfully for seeding!')

    // --- 1. Clean up existing data (optional, but good for fresh seeds) ---
    console.log('Clearing existing posts and users...')
    await Post.deleteMany({})
    await User.deleteMany({})
    console.log('Existing data cleared.')

    // --- 2. Create Sample Users ---
    const sampleUsers = [
      {
        username: 'tech_guru_ai',
        email: 'tech.guru.ai@toni.dev',
        avatar: 'https://placehold.co/100x100/FF5733/FFFFFF?text=TG'
      },
      {
        username: 'apple_dev_pro',
        email: 'apple.dev.pro@toni.dev',
        avatar: 'https://placehold.co/100x100/3366FF/FFFFFF?text=AD'
      },
      {
        username: 'ml_enthusiast',
        email: 'ml.enthusiast@toni.dev',
        avatar: 'https://placehold.co/100x100/33CC33/FFFFFF?text=ME'
      },
      {
        username: 'smart_home_wiz',
        email: 'smart.home.wiz@toni.dev',
        avatar: 'https://placehold.co/100x100/FFCC00/000000?text=SH'
      }
    ]

    const createdUsers = await User.insertMany(sampleUsers)
    console.log(`${createdUsers.length} sample users inserted.`)
    const userMap = {}
    createdUsers.forEach((user) => {
      userMap[user.username] = user._id
    })

    // --- 3. Create Sample Posts linked to the created users ---
    const samplePosts = [
      {
        user: userMap['tech_guru_ai'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1005/800/600', // Image of a data center or circuit board
        title: 'Demystifying On-Device AI: What Apple Intelligence Means for Your iPhone',
        slug: 'on-device-ai-apple-intelligence-iphone',
        description:
          'Explore the technical capabilities and implications of Apple Intelligence running directly on iPhone hardware. How does it work without the cloud?',
        content:
          "## The Edge of AI: Apple Intelligence Unpacked\n\nApple's recent announcements about \"Apple Intelligence\" signal a significant shift towards **on-device AI processing**. This isn't just about cloud-powered features; it's about complex AI models running directly on your iPhone, ensuring privacy and speed.\n\n### The M-series Chip Advantage\n\nWe'll dive into how the neural engine in Apple's M-series and A-series chips enables these capabilities, discussing the **benefits of edge computing** for AI workloads. What are the computational requirements, and how does power efficiency play a role?\n\n### Privacy by Design\n\nOne of the core tenets of Apple Intelligence is **privacy**. We'll examine the architectural choices that allow AI tasks to be performed without sending sensitive user data to external servers. This includes a look at Private Cloud Compute.\n\n### Real-World Applications for Developers\n\nFor developers, the new APIs offer unprecedented opportunities. We'll explore how to integrate features like advanced writing tools, image generation (Genmoji, Image Playground), and enhanced Siri context directly into your apps, leveraging Apple's foundation models.\n\n**Keywords:** Apple Intelligence, On-device AI, Edge Computing, iPhone AI, MacBook AI, M-series chip, Neural Engine, Privacy, Machine Learning, iOS Development, macOS Development.",
        isFeatured: true,
        visit: 320
      },
      {
        user: userMap['apple_dev_pro'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1021/800/600', // Image of a MacBook Pro with code on screen
        title: 'Optimizing Machine Learning Models for Apple Silicon (M1/M2/M3)',
        slug: 'optimizing-ml-apple-silicon',
        description:
          'A deep dive into adapting and optimizing TensorFlow, PyTorch, and Core ML models to leverage the performance of Apple Silicon Macs.',
        content:
          "## Unleashing ML Potential on Your Mac\n\nThe advent of Apple Silicon (M1, M2, M3) has revolutionized local machine learning development. This post provides technical guidance on **optimizing your ML workflows** to fully utilize the integrated GPU and Neural Engine.\n\n### Core ML vs. Open Source Frameworks\n\nWe'll compare performance and development considerations when using Apple's native **Core ML** framework versus popular open-source libraries like **TensorFlow** and **PyTorch** on Apple Silicon. Benchmarking results and common pitfalls will be discussed.\n\n### Data Preparation and Pre-processing for On-Device Inference\n\nEffective data handling is key. This section covers strategies for **efficient data loading and pre-processing** on macOS for optimal ML model performance, including using `MLMultiArray` and `CVPixelBuffer` efficiently.\n\n### Practical Code Examples\n\nWalk through code snippets demonstrating how to convert models, leverage **Metal Performance Shaders (MPS)**, and profile your ML application's performance on an Apple Silicon device. We'll cover common challenges and best practices.\n\n**Keywords:** Apple Silicon, M1, M2, M3, Machine Learning, TensorFlow, PyTorch, Core ML, Optimization, macOS, ML Development, Neural Engine, GPU acceleration.",
        isFeatured: true,
        visit: 280
      },
      {
        user: userMap['apple_dev_pro'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1033/800/600', // Image of an iPhone displaying an AR app
        title: 'Building Immersive AR Experiences with Vision Pro and iPhone Connectivity',
        slug: 'ar-vision-pro-iphone-connectivity',
        description:
          "Explore the technical aspects of developing augmented reality applications that leverage both iPhone's capabilities and Apple Vision Pro.",
        content:
          "## Bridging Realities: iPhone to Vision Pro AR Development\n\nApple's Vision Pro introduces a new paradigm for augmented reality. This article focuses on the **technical synergy between iPhone and Vision Pro** for building next-generation AR applications.\n\n### Data Flow and Synchronization Challenges\n\nUnderstand how to efficiently transfer data, synchronize states, and manage **real-time interactions** between an iPhone application and a Vision Pro experience. We'll discuss `ARKit`, `RealityKit`, and `MultipeerConnectivity` in this context.\n\n### Spatial Computing APIs and Best Practices\n\nDive into the new **Spatial Computing APIs** and best practices for designing user interfaces and interactions that feel native and intuitive across both devices. Considerations for object permanence, environmental understanding, and haptic feedback will be covered.\n\n### Performance Tuning for Mixed Reality\n\nOptimizing your AR app for performance on both iPhone and Vision Pro is critical. Learn about **rendering pipelines, shader optimization, and memory management** techniques to ensure smooth frame rates and a compelling user experience.\n\n**Keywords:** Augmented Reality, ARKit, RealityKit, Apple Vision Pro, iPhone Development, Spatial Computing, Mixed Reality, iOS Development, visionOS, XR.",
        isFeatured: false,
        visit: 190
      },
      {
        user: userMap['ml_enthusiast'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1084/800/600', // Image of a modern smart home setup
        title: 'The AI-Powered Smart Home: Beyond Siri and HomeKit Automation',
        slug: 'ai-powered-smart-home-beyond-homekit',
        description:
          'An in-depth look at how AI is transforming smart home ecosystems, extending beyond basic voice commands and into predictive automation and adaptive environments.',
        content:
          '## Your Home, Smarter: The AI Revolution Within\n\nThe smart home is evolving rapidly, moving past simple "if-this-then-that" automations. This post explores the **role of advanced AI and machine learning** in creating truly intelligent and adaptive home environments.\n\n### Predictive Analytics for Energy Efficiency\n\nDiscover how AI algorithms analyze historical data (weather, occupancy, routines) to **predict energy consumption** and proactively adjust climate control, lighting, and appliance usage for optimal efficiency and cost savings.\n\n### Contextual Awareness and Personalization\n\nBeyond just detecting presence, learn how **contextual AI** uses multiple sensor inputs (audio, visual, motion) to understand user intent and personalize experiences – from recommending entertainment to adjusting ambiance automatically.\n\n### Securing Your AI-Driven Home\n\nWith increased intelligence comes increased responsibility. We\'ll discuss the **security implications and best practices** for protecting data and maintaining privacy in an AI-powered smart home, including local processing vs. cloud-based AI.\n\n**Keywords:** Smart Home, AI, Machine Learning, HomeKit, Home Automation, IoT, Predictive Analytics, Contextual AI, Privacy, Cybersecurity, Consumer Electronics.',
        isFeatured: false,
        visit: 95
      },
      {
        user: userMap['tech_guru_ai'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1018/800/600', // Abstract AI-related image
        title: 'Ethical AI Development: Navigating Bias and Transparency in Tech Products',
        slug: 'ethical-ai-development-bias-transparency',
        description:
          'A critical discussion on the ethical considerations in designing and deploying AI systems, focusing on bias detection, explainability, and responsible innovation.',
        content:
          '## AI\'s Moral Compass: Building Responsible Systems\n\nAs AI becomes more ubiquitous in consumer technology, the need for **ethical development practices** is paramount. This article delves into the challenges and strategies for building AI that is fair, transparent, and accountable.\n\n### Identifying and Mitigating Algorithmic Bias\n\nExplore the sources of **algorithmic bias** in training data and model design, and learn about techniques for detection, measurement, and mitigation, including data augmentation and fairness-aware algorithms.\n\n### The Importance of Explainable AI (XAI)\n\n"Black box" AI models pose significant challenges. We discuss the principles and methods of **Explainable AI (XAI)**, enabling developers to understand and communicate how their AI systems arrive at decisions, fostering trust and accountability.\n\n### Regulatory Landscape and Industry Best Practices\n\nAn overview of emerging **AI regulations** (e.g., EU AI Act, NIST AI Risk Management Framework) and industry best practices for responsible AI governance, including data privacy, user consent, and human oversight.\n\n**Keywords:** Ethical AI, AI Bias, Explainable AI (XAI), AI Governance, Responsible AI, Data Privacy, Machine Learning Ethics, AI Regulations, Tech Ethics.',
        isFeatured: true,
        visit: 210
      },
      {
        user: userMap['smart_home_wiz'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1040/800/600', // Image of a smart device
        title: 'Beyond Voice Commands: Advanced AI for Home Automation',
        slug: 'advanced-ai-home-automation',
        description:
          'Exploring how AI goes beyond basic voice assistants to enable truly intelligent and proactive home automation systems.',
        content:
          "## The Next Generation of Smart Homes\n\nVoice assistants like Siri and Alexa have made smart homes accessible, but the true potential lies in **advanced AI that anticipates your needs**. This post dives into how AI is making homes more intuitive.\n\n### Contextual Intelligence and Routines\n\nLearn how AI uses **contextual data** (time of day, occupancy, weather, user preferences) to create dynamic routines that adapt to your lifestyle, rather than rigid schedules.\n\n### Edge AI for Responsiveness and Privacy\n\nWe'll discuss the benefits of **processing AI on edge devices** within the home for faster response times and enhanced privacy, reducing reliance on constant cloud communication.\n\n### Integration with Health and Wellness\n\nExplore emerging trends where smart home AI integrates with **health and wellness data** from wearables to create environments optimized for sleep, mood, and overall well-being.\n\n**Keywords:** Smart Home, Home Automation, AI, IoT, Voice Assistants, Contextual AI, Edge Computing, Privacy, Wellness Tech.",
        isFeatured: false,
        visit: 80
      },
      {
        user: userMap['ml_enthusiast'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1043/800/600', // Image of a neural network or AI concept
        title: 'Federated Learning on Mobile Devices: A Privacy-Preserving AI Approach',
        slug: 'federated-learning-mobile-privacy',
        description:
          'A technical overview of Federated Learning and its application in mobile AI, focusing on privacy benefits and implementation challenges.',
        content:
          "## Collaborative AI, Private Data: The Power of Federated Learning\n\n**Federated Learning** is a distributed machine learning approach that enables AI models to be trained on decentralized data residing on mobile devices, without ever collecting the raw data centrally. This is a game-changer for privacy.\n\n### How Federated Learning Works\n\nWe'll break down the core concepts: **local model training, gradient aggregation, and secure aggregation protocols**. Understand the communication flow and cryptographic techniques that ensure privacy.\n\n### Challenges and Solutions in Mobile Deployment\n\nImplementing Federated Learning on mobile devices presents unique challenges, including **network heterogeneity, device resource constraints, and data drift**. We'll explore current research and practical solutions.\n\n### Use Cases in Consumer Tech\n\nFrom predictive text and personalized recommendations to health monitoring and smart home automation, discover how Federated Learning is being applied to enhance user experiences while safeguarding sensitive data.\n\n**Keywords:** Federated Learning, Mobile AI, Privacy-Preserving AI, Machine Learning, Edge AI, Data Privacy, On-device ML, Distributed Learning, iOS Development, Android Development.",
        isFeatured: true,
        visit: 250
      },
      {
        user: userMap['tech_guru_ai'], // Link to specific user
        coverImage: 'https://picsum.photos/id/1050/800/600', // Image of a futuristic city or data stream
        title: 'The Future of Personal Computing: How AI Will Reshape macOS and Windows',
        slug: 'future-personal-computing-ai-macos-windows',
        description:
          'Predicting the evolution of desktop operating systems with advanced AI integration, focusing on intelligent assistants, proactive workflows, and seamless cross-device experiences.',
        content:
          "## Beyond the Desktop: AI-Driven Operating Systems\n\nThe traditional desktop operating system is on the cusp of a major transformation, driven by **deep AI integration**. This article envisions how AI will fundamentally change how we interact with macOS and Windows.\n\n### Proactive Assistance and Contextual Awareness\n\nImagine an OS that anticipates your needs. We'll explore how AI will enable **proactive task management, intelligent file organization, and context-aware notifications**, making your computer a true personal assistant.\n\n### Generative AI for Content Creation and Productivity\n\nFrom drafting emails and summarizing documents to generating code snippets and designing presentations, **generative AI** will become an integral part of everyday productivity tools directly within the OS.\n\n### Cross-Device Continuity with AI\n\nExamine how AI will enhance **seamless continuity** between your desktop, laptop, tablet, and smartphone, creating a unified and intelligent computing experience across all your devices.\n\n**Keywords:** Personal Computing, AI, macOS, Windows, Operating System, Generative AI, Intelligent Assistant, Productivity, Cross-Device, Future Tech.",
        isFeatured: false,
        visit: 120
      }
    ]

    const createdPosts = await Post.insertMany(samplePosts)
    console.log(`${createdPosts.length} sample posts inserted.`)

    // --- 4. Update Users with Saved Posts (linking to the newly created posts) ---
    // Example: tech_guru_ai saves the first and last post
    await User.updateOne(
      { username: 'tech_guru_ai' },
      { $addToSet: { savedPosts: [createdPosts[0]._id, createdPosts[7]._id] } } // Link by _id
    )

    // Example: apple_dev_pro saves the second and third post
    await User.updateOne(
      { username: 'apple_dev_pro' },
      { $addToSet: { savedPosts: [createdPosts[1]._id, createdPosts[2]._id] } }
    )

    // Example: ml_enthusiast saves the fourth and seventh post
    await User.updateOne(
      { username: 'ml_enthusiast' },
      { $addToSet: { savedPosts: [createdPosts[3]._id, createdPosts[6]._id] } }
    )

    console.log('Users updated with saved posts.')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await mongoose.disconnect()
    console.log('MongoDB connection closed.')
  }
}

seedDatabase()
