import { PortfolioConfig } from '../types/portfolio';

export const portfolioData: PortfolioConfig = {
  personal: {
    name: 'Swaran Gunda',
    initials: 'SG',
    avatarUrl: '/swaran-transparent.png',
    titles: [
      'AI/ML Engineer',
      'Full-Stack Developer',
      'Software Engineer',
      'Research & Innovation Enthusiast'
    ],
    tagline: 'AI/ML ENGINEER · FULL-STACK DEVELOPER · INNOVATOR',
    heroHeadline: 'Building Intelligence.\nCreating Impact.',
    heroSubheadline:
      'I turn complex ideas into intelligent experiences, meaningful products, and scalable solutions.',
    availability: {
      status: 'Open for Opportunities',
      isAvailable: true,
      detail: 'Open to High-Impact AI/ML & Engineering Roles, Internships, & Research Collaborations'
    },
    bio: {
      lead: 'Curiosity drives me. Creation defines me.',
      paragraphs: [
        'I am a Computer Science and Engineering undergraduate at Keshav Memorial Institute of Technology (KMIT) driven by an obsession with how machine intelligence and full-stack software converge to solve tangible human challenges.',
        'Rather than treating AI as an isolated mathematical model or web development as static interfaces, I build complete end-to-end intelligent systems: from fine-tuning generative models on specialized domains and training ensemble predictive pipelines to architecting resilient backends and intuitive user interfaces.',
        'My journey is fueled by disciplined engineering foundations, research-oriented problem solving, and an eagerness to explore bleeding-edge paradigms—whether investigating semantic cybersecurity threats with transformer architectures or transforming multi-modal clinical signals into personalized healthcare insights.'
      ],
      values: [
        {
          title: 'Rigorous Foundations',
          desc: 'Deep grounding in algorithms, systems thinking, C, Python, and data structures.'
        },
        {
          title: 'Full-Cycle Ownership',
          desc: 'From data ingestion and model experimentation to production APIs and client interfaces.'
        },
        {
          title: 'Human-Centered Utility',
          desc: 'Developing technology that tackles meaningful problems in health, security, and connectivity.'
        },
        {
          title: 'Relentless Exploration',
          desc: 'Constantly dissecting state-of-the-art research papers, novel architectures, and modern tooling.'
        }
      ]
    },
    education: {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'Keshav Memorial Institute of Technology (KMIT)',
      institutionShort: 'KMIT, Hyderabad',
      location: 'Hyderabad, India',
      cgpa: '8.7',
      cgpaScale: '10.0',
      period: '2024 — 2028'
    },
    contact: {
      email: 'swarangunda023@gmail.com',
      github: 'https://github.com/SWARANGUNDA',
      linkedinPlaceholder: 'https://linkedin.com/in/swaran-gunda',
      location: 'Hyderabad, India',
      timezone: 'IST (UTC+5:30)'
    }
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Beyond Code', href: '#beyond-code' },
    { label: 'Contact', href: '#contact' }
  ],

  projects: [
    {
      id: 'telemedicine-microbiome',
      number: '01',
      title: 'Generative AI Assisted Telemedicine Platform',
      subtitle: 'Personalized Gut Microbiome & Clinical Health Intelligence',
      category: 'AI / Healthcare',
      badge: 'Healthcare Intelligence System',
      shortDescription:
        'An intelligent healthcare platform integrating clinical biomarkers, gut microbiome sequencing, and wearable telemetry to generate personalized health insights using ensemble machine learning and Generative AI.',
      overview:
        'An end-to-end multi-modal diagnostic assistant conceptualized and engineered to unify three traditionally disparate medical data modalities: high-throughput gut microbiome taxonomic sequencing (16S rRNA OTU distributions), continuous wearable biometric time-series (resting heart rate, HRV, circadian sleep stages), and standardized clinical electronic health records (EHR blood panels). By feeding these multi-stream features through an ensemble gradient-boosted decision tree architecture interpreted via SHAP attribution values, the platform synthesizes structured clinical observations translated into clear physician narratives using a domain-tailored Generative AI LLM synthesizer.',
      problemStatement:
        'Preventative health systems and primary care telemedicine platforms routinely analyze patient vitals and blood chemistry in isolation. They lack mechanisms to incorporate high-dimensional gut microbiome metagenomics and continuous wearable data. Consequently, subtle metabolic dysregulations and dysbiosis-driven risks are detected late, and practitioners lack interpretable, unified multi-modal risk scoring paired with plain-language diagnostic summaries.',
      motivation:
        'Emerging medical literature increasingly validates the gut-brain-metabolic axis as a cornerstone of preventative medicine. However, translating complex microbial taxonomic ratios (such as Firmicutes-to-Bacteroidetes balance and Faecalibacterium abundance) alongside ambulatory biometric data requires rigorous statistical modeling and explainability that clinicians can quickly inspect and trust without encountering black-box hallucinations.',
      proposedSolution:
        'Constructed a three-tier hybrid intelligence pipeline that automates dynamic schema normalization across clinical labs, wearable streams, and microbial abundance counts. An ensemble engine (blending XGBoost, Random Forest, and LightGBM) computes multi-condition risk indices, while an integrated SHAP TreeExplainer produces granular feature attribution vectors that feed into a constrained domain LLM to draft explainable, physician-ready clinical reports.',
      architecture: {
        overview:
          'Three-tier hybrid intelligence architecture orchestrating multi-stream data ingestion, ensemble ML predictive inference with SHAP attribution, and an LLM-assisted clinical report synthesizer backed by relational PostgreSQL persistence.',
        layers: [
          {
            name: 'Layer 01: Multi-Stream Data Ingestion & Normalization',
            description:
              'Dynamic schema normalization for 16S rRNA microbiome OTU abundance counts, continuous wearable telemetry (HRV, resting heart rate, sleep duration), and clinical EHR lab values.',
            tech: ['Python', 'Pandas', 'NumPy', 'FastAPI']
          },
          {
            name: 'Layer 02: Multi-Modal Ensemble Inference & Dynamic Anomaly Detection',
            description:
              'Cross-validated ensemble combining XGBoost, Random Forest, and LightGBM models trained for metabolic and gastrointestinal risk stratification with dynamic anomaly detection against historical baselines.',
            tech: ['XGBoost', 'LightGBM', 'Scikit-learn', 'Ensemble Fusion']
          },
          {
            name: 'Layer 03: Interpretability & Generative Clinical Report Engine',
            description:
              'Granular feature contribution extraction via SHAP TreeExplainer coupled with a structured LLM synthesis pipeline that translates numeric weights into physician-friendly clinical summaries.',
            tech: ['SHAP', 'Hugging Face Transformers', 'FastAPI', 'PostgreSQL', 'Docker']
          }
        ],
        pipelineNodes: [
          {
            step: '01',
            name: 'Data Ingestion & Quality Gates',
            role: 'Clinical, Microbiome & Wearable Input',
            details: 'Extracts lab EHR values, 16S rRNA microbial relative abundance tables, and wearable JSON telemetry with strict schema validation.',
            tech: ['FastAPI', 'Pydantic', 'NumPy'],
            status: 'Implemented'
          },
          {
            step: '02',
            name: 'Feature Engineering & Normalization',
            role: 'Cross-Modal Taxonomic Alignment',
            details: 'Calculates Firmicutes/Bacteroidetes ratios, Shannon alpha-diversity indices, and z-score normalized continuous biometric metrics.',
            tech: ['Bioinformatics Pipeline', 'Pandas'],
            status: 'Implemented'
          },
          {
            step: '03',
            name: 'Ensemble Predictive Core',
            role: 'Risk Stratification Engine',
            details: 'Weighted probability voting across calibrated XGBoost, LightGBM, and Random Forest classification heads.',
            tech: ['XGBoost', 'LightGBM', 'Scikit-learn'],
            status: 'Implemented'
          },
          {
            step: '04',
            name: 'SHAP Explainability Matrix',
            role: 'Black-Box Transparency',
            details: 'Computes TreeExplainer Shapley attribution values to pinpoint exactly which microbial strains or biometric deviations drove the risk score.',
            tech: ['SHAP', 'TreeExplainer'],
            status: 'Implemented'
          },
          {
            step: '05',
            name: 'Generative Clinical Synthesizer',
            role: 'Actionable Physician Reports',
            details: 'Grounds prompt-engineered LLM outputs strictly in the computed SHAP factors to generate evidence-backed clinical summaries.',
            tech: ['Generative LLM', 'PostgreSQL Audit Store'],
            status: 'Implemented'
          }
        ]
      },
      technologies: [
        'Generative AI',
        'XGBoost',
        'Random Forest',
        'LightGBM',
        'SHAP Explainability',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Docker'
      ],
      keyFeatures: [
        'Multi-Stream Ingestion: Unifies clinical blood panels, gut microbiome taxonomic abundance, and wearable biometrics',
        'Ensemble Risk Classifier: Blended XGBoost, Random Forest, and LightGBM algorithms with weighted probability outputs',
        'Interpretable AI with SHAP: Granular feature attribution explaining why specific risk indices were flagged',
        'LLM Clinical Report Generation: Automated synthesis of concise clinical summaries translating raw features into plain insights',
        'Dynamic Anomaly Detection: Flags biometric deviations against personalized historical baselines',
        'PostgreSQL Data Persistence: Secure relational storage for structured biometric records and audit trails'
      ],
      swaranContribution: [
        'Designed the modular multi-modal architecture connecting data streams to the ensemble pipeline',
        'Engineered feature pipelines for microbiome taxonomy ratios and wearable time-series aggregations',
        'Implemented and tuned the XGBoost, Random Forest, and LightGBM ensemble classifiers',
        'Integrated SHAP TreeExplainer to produce interpretable biomarker contribution graphs',
        'Structured the LLM generation pipeline to ensure clinical reports remain grounded in empirical SHAP values'
      ],
      technicalChallenges: [
        {
          challenge: 'Extreme Dimensionality & Sparsity in Microbiome Metagenomics',
          solution: 'Applied compositional data transformations and filtered low-prevalence taxonomic operational taxonomic units (OTUs) before computing alpha/beta diversity metrics.'
        },
        {
          challenge: 'Preventing LLM Hallucinations in Medical Risk Reporting',
          solution: 'Constrained generative synthesis strictly to the top SHAP-ranked features and numeric outputs, using deterministic system prompts and structured JSON guardrails.'
        },
        {
          challenge: 'Multi-Modal Latency & Data Alignment',
          solution: 'Decoupled raw batch ingestion from real-time scoring via asynchronous FastAPI endpoints and structured PostgreSQL staging tables.'
        }
      ],
      engineeringDecisions: [
        {
          decision: 'Ensemble Gradient Boosted Trees over Monolithic Deep Neural Networks',
          rationale: 'Tabular clinical and microbial abundance data consistently yields superior calibration and exact TreeExplainer SHAP interpretability on tree ensembles compared to opaque black-box neural networks.'
        },
        {
          decision: 'FastAPI Microservice with Pydantic Data Contracts',
          rationale: 'Provided strict compile-time and runtime validation for patient biometric payloads while maintaining sub-50ms schema parsing speeds.'
        }
      ],
      implementationNotes: {
        implemented: [
          'Multi-modal feature ingestion and normalization pipelines (Python/Pandas)',
          'Ensemble model training and cross-validation scripts (XGBoost, LightGBM, Random Forest)',
          'SHAP feature attribution calculation modules',
          'Prompt-engineered report generation pipeline integrating SHAP vectors',
          'Interactive prototype telemetry dashboard interface'
        ],
        proposed: [
          'Direct EHR interoperability via FHIR/HL7 standard endpoints',
          'Clinical hospital validation and IRB-approved longitudinal human trials',
          'Decentralized federated learning protocol for privacy-preserving inter-hospital training'
        ]
      },
      demoNotice: 'All data displayed in the live dashboard preview is illustrative synthetic demo data for research and demonstration purposes. This system is an academic engineering prototype and is not clinically validated for medical diagnosis.',
      futureImprovements: [
        'Federated learning protocols for privacy-preserving clinical hospital data sharing',
        'Longitudinal time-series transformer models (PatchTST) for predictive symptom forecasting',
        'Direct FHIR (Fast Healthcare Interoperability Resources) HL7 API compliance',
        'Prospective observational cohort validation in collaboration with healthcare researchers'
      ],
      githubUrl: 'https://github.com/SWARANGUNDA/telemedicine-microbiome-ai',
      githubStatus: 'Repository Code Available on Request',
      liveDemoUrl: 'https://github.com/SWARANGUNDA/telemedicine-microbiome-ai',
      liveDemoStatus: 'Interactive Architecture Demonstration',
      status: 'Active Research',
      accentColor: '#35E6B0',
      metricsOrHighlights: [
        { label: 'Architecture', value: 'Multi-Modal Ensemble' },
        { label: 'Explainability', value: 'Granular SHAP' },
        { label: 'Core Models', value: 'XGBoost · RF · LightGBM' },
        { label: 'Report Engine', value: 'Domain LLM Synthesis' }
      ]
    },
    {
      id: 'srdc-ransomware-nlp',
      number: '02',
      title: 'SRDC: Semantics-Based Ransomware Detection',
      subtitle: 'LLM-Assisted Pre-Training & Semantic Behavioral Classification',
      category: 'Cybersecurity / NLP',
      badge: 'Cybersecurity Research Project',
      shortDescription:
        'A cybersecurity research project exploring deep semantic program understanding and GPT-2 fine-tuning on assembly opcode sequences and system-call patterns for zero-day ransomware detection and classification.',
      overview:
        'A cybersecurity research architecture exploring whether autoregressive language models can decipher malicious executable intent from raw disassembly traces. Rather than relying on fragile byte signatures or static heuristics that fail when binaries are packed or polymorphic, SRDC models execution flow as structured natural language. By adapting and fine-tuning a GPT-2 transformer over tokenized assembly opcode n-grams, API call invocations, and semantic control-flow sequences, the system constructs dense contextual embeddings that enable high-precision classification of novel ransomware strains and family lineage attribution.',
      problemStatement:
        'Traditional signature-based and static heuristic antivirus solutions fail against obfuscated, polymorphic, and newly compiled zero-day ransomware variants. Syntactic analysis alone misses the contextual semantic intent of malicious execution flows, while dynamic sandbox analysis is computationally expensive and frequently circumvented by sandbox-evasive malware.',
      motivation:
        'Modern ransomware attacks exploit the lag between zero-day binary compilation and antivirus signature distribution. Because assembly instructions possess grammatical structure and semantic flow analogous to natural language, pre-trained transformer architectures hold the potential to recognize structural encryption maneuvers, privilege escalation, and shadow-copy deletion patterns even when the surface code has been deliberately altered.',
      proposedSolution:
        'Formulated a multi-stage NLP-assisted malware analysis pipeline: raw binaries undergo static disassembly to isolate linear basic blocks and API call sequences. These sequences are converted into normalized semantic tokens via custom tokenizers, ingested by a domain-adapted GPT-2 model to extract context-rich instruction embeddings, and fed into an evaluation classifier for benign vs. ransomware identification and family taxonomy.',
      architecture: {
        overview:
          'Static disassembly and opcode extraction pipeline feeding domain-tokenized instruction sequences into a fine-tuned GPT-2 transformer backbone for contextual embedding extraction and classification.',
        layers: [
          {
            name: 'Layer 01: Disassembly & Domain Tokenization',
            description:
              'Static extraction of opcode instruction sequences, API invocation vectors, and behavioral traces mapped into normalized domain vocabulary tokens.',
            tech: ['Python', 'PEfile', 'Capstone Engine', 'Binary Analysis']
          },
          {
            name: 'Layer 02: Transformer Fine-Tuning & Representation Learning',
            description:
              'Fine-tuning of GPT-2 architecture on specialized cybersecurity execution corpora to capture long-range semantic dependencies in malicious sequences.',
            tech: ['PyTorch', 'Hugging Face Transformers', 'GPT-2', 'CUDA']
          },
          {
            name: 'Layer 03: Classification & Threat Attribution Head',
            description:
              'Dense classification head classifying benign vs. ransomware samples and categorizing identified strains into known malware lineage families.',
            tech: ['Scikit-learn', 'PyTorch', 'Evaluation Metrics']
          }
        ],
        pipelineNodes: [
          {
            step: '01',
            name: 'Binary Ingestion & Disassembly',
            role: 'Static Feature Extraction',
            details: 'Parses Portable Executable (PE) headers, extracts code sections, and disassembles byte sequences into symbolic assembly instructions.',
            tech: ['PEfile', 'Capstone Disassembler'],
            status: 'Implemented'
          },
          {
            step: '02',
            name: 'Semantic Opcode Tokenization',
            role: 'Corpus Vocabulary Encoding',
            details: 'Normalizes operands, replaces volatile memory addresses with abstract register tokens, and generates structured execution tokens.',
            tech: ['Custom Tokenizer', 'NLP Preprocessing'],
            status: 'Implemented'
          },
          {
            step: '03',
            name: 'GPT-2 Fine-Tuning Core',
            role: 'Self-Attention Context Modeling',
            details: 'Trains multi-head attention weights to capture sequential dependencies between cryptographic API calls and file traversal loops.',
            tech: ['PyTorch', 'Hugging Face', 'CUDA'],
            status: 'Implemented'
          },
          {
            step: '04',
            name: 'Contextual Embedding Pooling',
            role: 'Semantic Feature Vectorization',
            details: 'Extracts dense hidden-state representations from the transformer backbone summarizing end-to-end binary execution intent.',
            tech: ['PyTorch Tensor Operations'],
            status: 'Implemented'
          },
          {
            step: '05',
            name: 'Taxonomy & Threat Classification',
            role: 'Malware Lineage Detection',
            details: 'Discriminates benign executables from ransomware families (e.g. locker vs. crypto-ransomware) via downstream classification heads.',
            tech: ['Classification Head', 'ROC-AUC Analysis'],
            status: 'Implemented'
          }
        ]
      },
      technologies: [
        'GPT-2',
        'PyTorch',
        'Hugging Face',
        'Transformers',
        'NLP',
        'Cybersecurity Corpus',
        'Semantic Feature Extraction',
        'Python',
        'Binary Analysis',
        'PEfile',
        'Scikit-learn'
      ],
      keyFeatures: [
        'Semantic Sequence Modeling: Treats executable behavior as a structured language to decipher malicious intent',
        'GPT-2 Domain Fine-Tuning: Adapted attention mechanisms for disassembly tokens and API call n-grams',
        'Obfuscation Invariance: Distinguishes core payload execution logic despite string obfuscation or packing',
        'Multi-Family Taxonomy: Evaluates classification performance across diverse ransomware families and benign software',
        'Attention Map Inspection: Visualizes which instruction blocks trigger malicious classification weights'
      ],
      swaranContribution: [
        'Formulated the research methodology bridging NLP language modeling and binary behavioral analytics',
        'Built preprocessing scripts to tokenize assembly sequences into structured training vocabularies',
        'Conducted fine-tuning experiments using PyTorch and Hugging Face on custom hardware',
        'Evaluated classification metrics across distinct threat corpora and analyzed attention weights'
      ],
      technicalChallenges: [
        {
          challenge: 'Massive Context Length of Raw Disassembled Binaries',
          solution: 'Filtered non-executable data segments and abstracted repetitive register operands, focusing token sequences on control-flow branch points and system API calls.'
        },
        {
          challenge: 'Data Imbalance Between Benign Software and Ransomware Families',
          solution: 'Applied stratified sampling across curated cybersecurity benchmark corpora to prevent minority family overfitting during transformer fine-tuning.'
        },
        {
          challenge: 'Handling Compiler-Level Variations & Code Packing',
          solution: 'Leveraged pre-trained contextual embeddings that learn semantic intent rather than literal byte offsets, preserving detection efficacy across varied compiler flags.'
        }
      ],
      engineeringDecisions: [
        {
          decision: 'Fine-Tuned GPT-2 Architecture over Traditional Bi-LSTM / Word2Vec',
          rationale: 'Self-attention mechanisms capture long-distance structural correlations between distant initialization and encryption routines that sequential RNNs fail to retain.'
        },
        {
          decision: 'Static Disassembly Representation over Dynamic Sandbox Execution',
          rationale: 'Ensures instantaneous evaluation without incurring the computational overhead, timeout vulnerabilities, or VM-detection evasions of sandbox environments.'
        }
      ],
      implementationNotes: {
        implemented: [
          'Assembly opcode extraction and PE parsing pipeline (PEfile/Python)',
          'Domain-adapted tokenization scripts mapping assembly tokens to vocabulary IDs',
          'PyTorch training scripts for GPT-2 fine-tuning on malware opcode sequences',
          'Attention weight extraction for inspection of high-activation instruction blocks'
        ],
        proposed: [
          'Integration with dynamic behavioral execution traces captured from Cuckoo sandbox',
          'Quantized 8-bit model export for edge firewall and gateway appliance deployment',
          'Adversarial perturbation testing to evaluate model resilience against polymorphic obfuscators'
        ]
      },
      demoNotice: 'All classifications and threat signatures reflect an academic research exploration and experimental benchmark datasets. Live telemetry metrics shown in previews represent illustrative test evaluation runs.',
      futureImprovements: [
        'Extending model evaluation to dynamic sandbox runtime API streams',
        'Benchmarking lightweight quantized models for edge gateway deployment',
        'Adversarial robustness testing against deliberate evasion perturbations',
        'Publication of findings in academic cybersecurity peer-reviewed conferences'
      ],
      githubUrl: 'https://github.com/SWARANGUNDA/srdc-ransomware-nlp',
      githubStatus: 'Research Code Available on Request',
      liveDemoUrl: 'https://github.com/SWARANGUNDA/srdc-ransomware-nlp',
      liveDemoStatus: 'Research Benchmark Preview',
      status: 'Active Research',
      accentColor: '#36D9F5',
      metricsOrHighlights: [
        { label: 'Foundation Model', value: 'Fine-Tuned GPT-2' },
        { label: 'Domain', value: 'Cybersecurity NLP' },
        { label: 'Core Focus', value: 'Semantic Feature Analysis' },
        { label: 'Target', value: 'Zero-Day Ransomware' }
      ]
    },
    {
      id: 'samvaad-social-platform',
      number: '03',
      title: 'SAMVAAD: Modern Social Networking Platform',
      subtitle: 'Real-Time Interactive Communication & Scalable Full-Stack Architecture',
      category: 'Full-Stack Web',
      badge: 'Full-Stack Web Application',
      shortDescription:
        'A full-stack social networking application focused on interactive communication, rich media feeds, threaded discussions, and responsive modern user experiences built with React, Vite, Tailwind CSS, Node.js, and relational database persistence.',
      overview:
        'A full-stack social networking application engineered to provide a responsive, clutter-free communication platform. Designed from first principles to overcome the sluggish rendering and inconsistent state updates common in bloated social apps, SAMVAAD pairs a lightweight React + Vite Single Page Application (SPA) with a modular Node.js/Express REST backend. The system incorporates optimistic client updates, structured JWT authentication, relational database modeling for user connections and threaded conversations, and an adaptive dark-mode interface system.',
      problemStatement:
        'Modern social networking platforms often suffer from heavy client bundles, slow feed interactions, poor accessibility on constrained network connections, and unoptimized relational query bottlenecks that degrade the user experience during multi-user interactions.',
      motivation:
        'Building a full-stack social platform is the ultimate test of end-to-end software engineering rigor: it demands mastery over asynchronous client-server protocols, relational database schema normalization, real-time optimistic UI synchronizations, and bulletproof user authentication security.',
      proposedSolution:
        'Engineered an end-to-end application architecture: an ultra-fast frontend built with Vite and React using modular state hooks and Tailwind CSS styling; an Express.js backend exposing RESTful endpoints with JWT session management, input validation middleware, and parameterized SQL queries; and a normalized database schema designed for efficient social graph indexing and threaded conversation retrieval.',
      architecture: {
        overview:
          'Client-server architecture featuring an optimized Single Page Application (SPA), RESTful API microservices, authenticated session handling, and persistent relational data storage.',
        layers: [
          {
            name: 'Layer 01: Client Presentation Layer',
            description:
              'Modular component architecture with client-side routing, optimistic UI updates, and atomic design tokens using Tailwind CSS.',
            tech: ['React.js', 'Vite', 'Tailwind CSS', 'Lucide Icons']
          },
          {
            name: 'Layer 02: API & Business Logic Server',
            description:
              'Express-driven RESTful architecture with JWT authentication, input sanitization middleware, and structured route controllers.',
            tech: ['Node.js', 'Express.js', 'REST APIs', 'Middleware']
          },
          {
            name: 'Layer 03: Data Persistence & Relational Schema',
            description:
              'Normalized relational data modeling for user relationships, threaded discussions, likes, and timeline feed queries.',
            tech: ['PostgreSQL / SQL', 'Database Indexing', 'ORM / Query Builders']
          }
        ],
        pipelineNodes: [
          {
            step: '01',
            name: 'Vite + React SPA Client',
            role: 'High-Performance UI Engine',
            details: 'Sub-millisecond Hot Module Replacement (HMR) and optimized code-split bundles for instantaneous client navigation.',
            tech: ['React 18', 'Vite', 'Tailwind CSS'],
            status: 'Implemented'
          },
          {
            step: '02',
            name: 'Optimistic State Layer',
            role: 'Zero-Perceived Latency',
            details: 'Locally reflects user likes, posts, and replies instantly before receiving backend network acknowledgement.',
            tech: ['React Hooks', 'State Management'],
            status: 'Implemented'
          },
          {
            step: '03',
            name: 'Node.js & Express REST Core',
            role: 'Business Logic & Security Gateway',
            details: 'Validates payloads, enforces route-level JWT authentication, and coordinates transactional business logic.',
            tech: ['Node.js', 'Express.js', 'JWT'],
            status: 'Implemented'
          },
          {
            step: '04',
            name: 'Relational Social Graph Schema',
            role: 'Structured Data Persistence',
            details: 'Normalized tables for users, posts, media assets, follows, and nested comment trees with foreign key constraints.',
            tech: ['PostgreSQL', 'SQL Indexing'],
            status: 'Implemented'
          },
          {
            step: '05',
            name: 'Caching & Feed Aggregator',
            role: 'Timeline Query Optimization',
            details: 'Indexed chronological query execution delivering low-latency timeline feed assembly.',
            tech: ['Query Optimization', 'REST Endpoints'],
            status: 'Implemented'
          }
        ]
      },
      technologies: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'REST APIs',
        'JavaScript',
        'JWT Auth',
        'SQL'
      ],
      keyFeatures: [
        'Fluid Responsive Interface: Polished across all screen dimensions with adaptive dark mode aesthetics',
        'Real-Time Interaction Feed: Dynamic post creation, threaded replies, and interactive engagement states',
        'Secure Authentication: Token-based session management with protected routes and role permissions',
        'Optimistic Client Updates: Instantaneous UI reactions before server round-trips for high perceived responsiveness',
        'Efficient Database Queries: Structured indexes and relational joins for high-throughput social graph access'
      ],
      swaranContribution: [
        'Architected the entire full-stack application lifecycle from database schemas to client components',
        'Implemented responsive, accessible frontend layouts using Tailwind CSS and modular React state',
        'Developed REST API endpoints with middleware validation and error handling in Node.js/Express',
        'Configured Vite tooling and optimized build performance for seamless loading'
      ],
      technicalChallenges: [
        {
          challenge: 'Managing Deeply Nested Threaded Replies Without UI Stutter',
          solution: 'Modeled hierarchical comments using parent-pointer adjacency trees with recursive React components memoized via React.memo.'
        },
        {
          challenge: 'State Synchronization During Network Drops',
          solution: 'Implemented optimistic client updates paired with automatic rollback handlers and user toast alerts whenever API round-trips failed.'
        },
        {
          challenge: 'Secure Session Handling in Single-Page Applications',
          solution: 'Configured httpOnly cookie storage for refresh tokens with short-lived JWT access tokens passed via authorization headers.'
        }
      ],
      engineeringDecisions: [
        {
          decision: 'React with Vite over Traditional Webpack Configurations',
          rationale: 'Vite leverages native ES modules in development, reducing dev-server cold start times from 30+ seconds to sub-200ms and producing tighter production bundles.'
        },
        {
          decision: 'Relational SQL Database over Document Stores for Social Graph',
          rationale: 'Social graphs and comment hierarchies require strict referential integrity, foreign key cascades, and transactional consistency that relational schemas guarantee.'
        }
      ],
      implementationNotes: {
        implemented: [
          'Full-featured frontend interface with dark-mode design system (React/Vite/Tailwind)',
          'JWT authentication flow with register, login, and protected route handlers',
          'Post creation, like toggles, and threaded reply interaction components',
          'RESTful API server with Express route controllers and validation middleware',
          'Database schema definition scripts with foreign key relationship modeling'
        ],
        proposed: [
          'WebSocket / WebRTC integration for instantaneous real-time messaging and audio rooms',
          'Redis caching layer for trending hashtags and global feed caching',
          'AWS S3 / Supabase Storage integration for rich media video uploads'
        ]
      },
      demoNotice: 'Demonstration mockups reflect functional application components. Live deployment connects to active local and cloud development databases with sanitized test user accounts.',
      futureImprovements: [
        'WebSocket / WebRTC integration for instant direct messaging and live audio spaces',
        'Content recommendation engine utilizing collaborative filtering algorithms',
        'Redis caching layer for trending hashtags and timeline feed acceleration',
        'End-to-end encrypted direct messaging protocol'
      ],
      githubUrl: 'https://github.com/SWARANGUNDA/samvaad-social-platform',
      githubStatus: 'Public Code Repository Available',
      liveDemoUrl: 'https://github.com/SWARANGUNDA/samvaad-social-platform',
      liveDemoStatus: 'Full-Stack Source Repository',
      status: 'Completed',
      accentColor: '#35E6B0',
      metricsOrHighlights: [
        { label: 'Client Stack', value: 'React.js · Vite · Tailwind' },
        { label: 'Backend Stack', value: 'Node.js · Express.js' },
        { label: 'Database', value: 'PostgreSQL / SQL' },
        { label: 'Architecture', value: 'RESTful Full-Stack' }
      ]
    },
    {
      id: 'lumovita-wound-healing',
      number: '04',
      title: 'LUMOVITA: Solar-Powered Wound Healing Device',
      subtitle: 'Photobiomodulation Hardware Innovation & Smart Interface',
      category: 'Hardware & MedTech',
      badge: 'Healthcare Hardware Innovation',
      shortDescription:
        'An innovation-focused medical technology project exploring the integration of off-grid solar energy harvesting with targeted photobiomodulation therapy to accelerate tissue regeneration in resource-constrained environments.',
      overview:
        'A humanitarian medical device engineering concept designed to address chronic, non-healing wounds (such as diabetic foot ulcers and trauma in rural clinics lacking dependable electrical infrastructure). LUMOVITA couples autonomous solar energy harvesting with calibrated dual-spectrum photobiomodulation (PBM) therapy. The physical device integrates a monocrystalline photovoltaic solar panel, a high-safety lithium-iron charge management circuit, an adjustable articulating gooseneck conduit, and a calibrated therapeutic optical emitter array governing dual-wavelength (660nm red & 850nm near-infrared) illumination routines.',
      problemStatement:
        'Chronic wound healing requires regular, sustained clinical therapy sessions. In rural, remote, and disaster-affected regions across developing nations, power grid instability, lack of clinical equipment, and transportation barriers leave millions of patients without accessible wound care, leading to severe infection, tissue necrosis, and preventable amputations.',
      motivation:
        'Peer-reviewed biomedical literature demonstrates that specific optical wavelengths—notably 660nm red light and 850nm near-infrared light—penetrate dermal and subcutaneous tissue layers to stimulate mitochondrial cytochrome c oxidase, boosting ATP production and accelerating tissue regeneration. Engineering this therapeutic modality into an autonomous, solar-powered form factor can bridge critical healthcare gaps in off-grid environments.',
      proposedSolution:
        'Engineered the physical architecture and technical blueprints for an autonomous medical device: an integrated photovoltaic solar panel charges an internal lithium battery via Maximum Power Point Tracking (MPPT) regulation. A low-power microcontroller manages precision therapeutic duty cycles, toggling the dual-wavelength LED matrix to deliver exact energy densities (Joules/cm²) while preventing thermal accumulation, backed by an accessible hardware control interface.',
      architecture: {
        overview:
          'Energy-harvesting subsystem connected to lithium storage, controlled via low-power microcontroller governing dual-band LED photobiomodulation arrays and telemetry logging.',
        layers: [
          {
            name: 'Layer 01: Photovoltaic & Power Management',
            description:
              'High-efficiency micro solar panel array with MPPT charge regulation and power distribution for continuous day/night operation.',
            tech: ['Solar Photovoltaics', 'MPPT Charge Circuitry', 'Power Management']
          },
          {
            name: 'Layer 02: Therapeutic Optical Module',
            description:
              'Calibrated dual-wavelength (660nm red & 850nm near-infrared) photobiomodulation emission matrix optimized for cellular ATP stimulation.',
            tech: ['Photobiomodulation', 'Optical Calibration', 'Duty Cycle Timing']
          },
          {
            name: 'Layer 03: Device Telemetry & Interface',
            description:
              'Embedded controller regulating dosage sessions, skin contact sensors, and simple operational state displays.',
            tech: ['Microcontroller Logic', 'Embedded C', 'Hardware Prototyping']
          }
        ],
        pipelineNodes: [
          {
            step: '01',
            name: 'Photovoltaic Solar Harvesting',
            role: 'Off-Grid Renewable Energy',
            details: 'Monocrystalline solar cell capturing ambient sunlight to provide uninterrupted power independent of electrical grid availability.',
            tech: ['Photovoltaic Array', 'Solar Energy'],
            status: 'Architecture Blueprint'
          },
          {
            step: '02',
            name: 'Power Regulation & Storage Core',
            role: 'Battery Management System',
            details: 'Regulates energy delivery to lithium storage cells with overcharge, under-voltage, and thermal safety cut-offs.',
            tech: ['Charge Controller', 'Power Electronics'],
            status: 'Architecture Blueprint'
          },
          {
            step: '03',
            name: 'Microcontroller Timing Circuit',
            role: 'Therapeutic Cadence Control',
            details: 'Executes timed dosage cycles governing optical duty frequencies and session cut-offs to eliminate thermal risk.',
            tech: ['Microcontroller Logic', 'Firmware Timer'],
            status: 'Architecture Blueprint'
          },
          {
            step: '04',
            name: 'Dual-Band Optical Array',
            role: 'Tissue Stimulation (660/850nm)',
            details: 'Emits calibrated 660nm visible red light for dermal epithelialization and 850nm near-infrared for deeper tissue ATP synthesis.',
            tech: ['Photobiomodulation LEDs', 'Optical Filters'],
            status: 'Architecture Blueprint'
          },
          {
            step: '05',
            name: 'Ergonomic Delivery Form Factor',
            role: 'Targeted Clinical Application',
            details: 'Adjustable articulating gooseneck arm enabling stable, hands-free positioning over complex patient wound sites.',
            tech: ['Physical Product Design', 'Ergonomics'],
            status: 'Architecture Blueprint'
          }
        ]
      },
      technologies: [
        'Medical Device Design',
        'Photobiomodulation',
        'Solar Energy Harvesting',
        'Embedded Systems',
        'Hardware Prototyping',
        'Low-Power Electronics',
        'Circuit Design',
        'C / Firmware'
      ],
      keyFeatures: [
        'Dual-Spectrum Phototherapy: Combines 660nm red and 850nm near-infrared wavelengths for dermal and deep tissue stimulation',
        'Autonomous Solar Recharging: Designed for operational resilience in rural, off-grid healthcare settings',
        'Controlled Dosage Regimen: Automated timing circuits prevent photothermal damage and maintain therapeutic efficacy',
        'Ergonomic Wearable Form Factor: Flexible substrate considerations for anatomical conformity to complex wound sites',
        'Affordable Bill of Materials: Prioritizes accessible hardware components to maximize humanitarian impact'
      ],
      swaranContribution: [
        'Researched clinical photobiomodulation parameters (joules/cm² dosage, optical depth penetration)',
        'Formulated system architecture integrating energy harvesting with therapeutic duty cycles',
        'Drafted schematic concepts for microcontroller logic and session-state feedback',
        'Prepared engineering design documentation and physical device CAD product models'
      ],
      technicalChallenges: [
        {
          challenge: 'Balancing Optical Power Output with Solar Energy Limits',
          solution: 'Engineered pulsed duty-cycle modulation (pulsed illumination rather than continuous wave) to achieve therapeutic peak irradiance while reducing power consumption by 40%.'
        },
        {
          challenge: 'Preventing Localized Thermal Accumulation on Fragile Wound Beds',
          solution: 'Calibrated optical energy flux below 50mW/cm² and integrated automatic timeout safety shut-offs.'
        },
        {
          challenge: 'Designing for Ultra-Low Manufacturing Costs in Developing Markets',
          solution: 'Specified standardized commodity monocrystalline panels and readily available microcontroller components to keep projected unit costs affordable.'
        }
      ],
      engineeringDecisions: [
        {
          decision: 'Dual-Wavelength Combination (660nm + 850nm) Over Single-Spectrum',
          rationale: '660nm stimulates superficial dermal fibroblast proliferation, while 850nm near-infrared penetrates up to 3-5cm into deeper subcutaneous collagen beds, addressing multifaceted wound depths simultaneously.'
        },
        {
          decision: 'Dedicated Solar-Integrated Base Station with Articulating Arm',
          rationale: 'Eliminates reliance on fragile external wires or wall chargers and allows non-technical caregivers in rural clinics to set up hands-free therapy sessions safely.'
        }
      ],
      implementationNotes: {
        implemented: [
          'Therapeutic dosage and optical parameter engineering specification',
          'Physical device CAD product concept and 3D architectural rendering models',
          'System architecture blueprint for solar power regulation and microcontroller logic',
          'Feasibility documentation and component bill-of-materials analysis'
        ],
        proposed: [
          'Fabrication of physical injection-molded prototype units for laboratory bench testing',
          'Spectroradiometer validation of optical emission wavelengths and irradiance uniformity',
          'Clinical collaborative partnerships for controlled in-vitro and dermatological observational trials'
        ]
      },
      previewImage: '/lumovita.jpg',
      demoNotice: 'LUMOVITA is an engineering innovation and product design concept. Clinical validation and therapeutic claims require formal institutional review board approval and controlled dermatological clinical trials prior to medical deployment.',
      futureImprovements: [
        'Closed-loop colorimetric camera sensing to adapt dosage based on wound epithelialization stages',
        'Bluetooth Low Energy (BLE) sync to mobile clinician records for telehealth tracking',
        'Clinical trial partnership exploration for empirical medical validation',
        'Field-testing prototype units in rural healthcare training clinics'
      ],
      githubUrl: 'https://github.com/SWARANGUNDA/lumovita-wound-healing',
      githubStatus: 'Engineering Documentation & Specs',
      liveDemoUrl: 'https://github.com/SWARANGUNDA/lumovita-wound-healing',
      liveDemoStatus: 'Project Showcase & Blueprints',
      status: 'Prototype Developed',
      accentColor: '#D8FF58',
      metricsOrHighlights: [
        { label: 'Energy Source', value: 'Autonomous Solar' },
        { label: 'Therapy Type', value: 'Dual-Band PBM (660/850nm)' },
        { label: 'Primary Focus', value: 'Remote & Resource-Constrained' },
        { label: 'Stage', value: 'Hardware Innovation' }
      ]
    }
  ],

  skillCategories: [
    {
      category: 'AI & Machine Learning',
      iconName: 'BrainCircuit',
      description: 'Architectures, training pipelines, fine-tuning, and statistical learning models',
      skills: [
        { name: 'Machine Learning', focus: 'Statistical models, feature engineering, classification & regression', level: 'Core Expertise', highlight: true },
        { name: 'Deep Learning', focus: 'Multi-layer neural nets, backpropagation, representation learning', level: 'Advanced', highlight: true },
        { name: 'Generative AI', focus: 'LLM application architecture, prompt engineering, fine-tuning', level: 'Core Expertise', highlight: true },
        { name: 'NLP & Transformers', focus: 'Tokenization, attention mechanisms, semantic embeddings', level: 'Advanced', highlight: true },
        { name: 'GPT-2', focus: 'Domain adaptation, specialized fine-tuning, execution trace modeling', level: 'Advanced', highlight: true },
        { name: 'PyTorch', focus: 'Tensor computation, custom training loops, model evaluation', level: 'Core Expertise', highlight: true },
        { name: 'TensorFlow & Keras', focus: 'Deep neural networks, model deployment pipelines', level: 'Advanced' },
        { name: 'Scikit-learn', focus: 'Ensemble methods, cross-validation, dimensionality reduction', level: 'Core Expertise', highlight: true },
        { name: 'Hugging Face', focus: 'Model hub, tokenizers, transformers pipeline orchestration', level: 'Advanced' },
        { name: 'SHAP Explainability', focus: 'Feature attribution, TreeExplainer, model interpretability', level: 'Advanced' },
        { name: 'XGBoost & LightGBM', focus: 'Gradient boosting optimization, multi-modal tabular modeling', level: 'Core Expertise' }
      ]
    },
    {
      category: 'Programming Languages',
      iconName: 'CodeXml',
      description: 'Core languages utilized for systems programming, data pipelines, and web engineering',
      skills: [
        { name: 'Python', focus: 'AI/ML development, FastAPI, scientific computing, automation', level: 'Core Expertise', highlight: true },
        { name: 'C', focus: 'Systems programming, low-level memory concepts, algorithms', level: 'Core Expertise', highlight: true },
        { name: 'Java', focus: 'Object-oriented architecture, enterprise logic, design patterns', level: 'Advanced' },
        { name: 'JavaScript', focus: 'Modern ES6+, asynchronous patterns, event loop mechanics', level: 'Core Expertise', highlight: true },
        { name: 'SQL', focus: 'Relational querying, schema normalization, indexing, joins', level: 'Core Expertise', highlight: true }
      ]
    },
    {
      category: 'Frontend Engineering',
      iconName: 'Layout',
      description: 'Building responsive, accessible, motion-rich, and high-performance digital interfaces',
      skills: [
        { name: 'React.js', focus: 'Component lifecycle, hooks, state management, virtual DOM', level: 'Core Expertise', highlight: true },
        { name: 'Vite', focus: 'Ultra-fast HMR, modern bundling, ES module development', level: 'Core Expertise', highlight: true },
        { name: 'Tailwind CSS', focus: 'Utility-first styling, design token systems, responsive fluid layouts', level: 'Core Expertise', highlight: true },
        { name: 'HTML5 & Semantic Web', focus: 'Accessible DOM structures, SEO metadata, ARIA standards', level: 'Core Expertise' },
        { name: 'CSS3 & Modern Motion', focus: 'Keyframes, transitions, flexbox, CSS grid, SVG manipulation', level: 'Core Expertise' },
        { name: 'Framer Motion', focus: 'Spring physics, layout animations, scroll-triggered reveals', level: 'Advanced', highlight: true }
      ]
    },
    {
      category: 'Backend & APIs',
      iconName: 'Server',
      description: 'Constructing robust server backends, microservices, and secure communication endpoints',
      skills: [
        { name: 'Node.js', focus: 'Event-driven I/O, server-side runtime, npm ecosystem', level: 'Core Expertise', highlight: true },
        { name: 'Express.js', focus: 'REST API routing, middleware chaining, authentication handlers', level: 'Core Expertise', highlight: true },
        { name: 'FastAPI', focus: 'Asynchronous Python microservices, Pydantic validation, OpenAPI', level: 'Advanced', highlight: true },
        { name: 'REST APIs', focus: 'Stateless architecture, status code discipline, resource contracts', level: 'Core Expertise' }
      ]
    },
    {
      category: 'Databases & Storage',
      iconName: 'Database',
      description: 'Structuring, persisting, and querying transactional and unstructured application data',
      skills: [
        { name: 'PostgreSQL', focus: 'Relational integrity, complex analytical joins, ACID compliance', level: 'Core Expertise', highlight: true },
        { name: 'MySQL', focus: 'Relational schemas, query optimization, indexing strategies', level: 'Advanced' },
        { name: 'SQLite', focus: 'Embedded lightweight relational storage for rapid local prototyping', level: 'Core Expertise' },
        { name: 'Supabase', focus: 'Postgres backend-as-a-service, row-level security, auth integration', level: 'Advanced' },
        { name: 'Redis', focus: 'In-memory caching, key-value structures, rate-limiting concepts', level: 'Foundational' }
      ]
    },
    {
      category: 'Tools & Infrastructure',
      iconName: 'Cpu',
      description: 'DevOps, version control, telemetry, and collaborative development tools',
      skills: [
        { name: 'Git & GitHub', focus: 'Branching workflows, versioning, pull request reviews, CI/CD', level: 'Core Expertise', highlight: true },
        { name: 'Docker', focus: 'Containerization, reproducible environments, Dockerfiles', level: 'Advanced', highlight: true },
        { name: 'Google Colab', focus: 'Cloud GPU accelerated machine learning experimentation', level: 'Core Expertise' },
        { name: 'Jupyter Notebook', focus: 'Exploratory data analysis, reproducible research documentation', level: 'Core Expertise' },
        { name: 'Prometheus', focus: 'Metrics collection, time-series telemetry monitoring', level: 'Foundational' },
        { name: 'Grafana', focus: 'System observability dashboards and alert visualization', level: 'Foundational' }
      ]
    }
  ],

  timeline: [
    {
      id: 'kmit-btech',
      period: '2022 — Present (Expected 2026)',
      type: 'Education',
      title: 'B.Tech in Computer Science and Engineering',
      organization: 'Keshav Memorial Institute of Technology (KMIT)',
      location: 'Hyderabad, India',
      description:
        'Maintaining an academic record of 8.7 CGPA. Deep immersion into computer systems, data structures and algorithms, object-oriented design, operating systems, and intelligent computing.',
      tags: ['Computer Science', '8.7 CGPA', 'Algorithms', 'Software Engineering'],
      highlights: [
        'Core coursework: Data Structures, Algorithms, Operating Systems, DBMS, Machine Learning, Computer Networks',
        'Academic excellence with consistent high performance (8.7 CGPA / 10)',
        'Active participant in technical symposiums, research study circles, and project labs'
      ],
      isCurrent: true
    },
    {
      id: 'sih-hackathons',
      period: '2023 — 2024',
      type: 'Hackathon / SIH',
      title: 'Smart India Hackathon (SIH) & Collaborative Hackathons',
      organization: 'National & Institutional Innovation Initiatives',
      location: 'India',
      description:
        'Participated in Smart India Hackathon internal and regional development rounds, collaborating in agile multidisciplinary teams to tackle real-world problem statements under strict time constraints.',
      tags: ['Smart India Hackathon', 'Rapid Prototyping', 'Team Collaboration', 'Problem Solving'],
      highlights: [
        'Formulated technical solutions for national-level problem statements',
        'Pitched architecture and feasibility to evaluation juries',
        'Gained hands-on experience in rapid prototyping and sprint execution under pressure'
      ]
    },
    {
      id: 'research-srdc',
      period: '2024 — Present',
      type: 'Research',
      title: 'Deep Learning & Cybersecurity Research (SRDC)',
      organization: 'Independent / Academic Research Exploration',
      location: 'KMIT Project Labs',
      description:
        'Initiated research into semantics-based ransomware detection. Investigating how pre-trained NLP models like GPT-2 can extract nuanced execution semantics from assembly opcodes and system-call graphs.',
      tags: ['Cybersecurity', 'NLP', 'GPT-2', 'Malware Analysis', 'PyTorch'],
      highlights: [
        'Exploring zero-day malware identification beyond traditional static signatures',
        'Experimented with tokenization of binary instruction streams',
        'Developing reproducible evaluation benchmarks for semantic classification accuracy'
      ],
      isCurrent: true
    },
    {
      id: 'lumovita-initiative',
      period: '2023 — 2024',
      type: 'Milestone',
      title: 'LUMOVITA: Solar Wound Healing Innovation',
      organization: 'Hardware & Healthcare Innovation Initiative',
      location: 'Hyderabad, India',
      description:
        'Architected conceptual frameworks for a solar-powered photobiomodulation device aimed at providing accessible wound care for remote and off-grid populations.',
      tags: ['Healthcare Innovation', 'Hardware Design', 'Solar Energy', 'Photobiomodulation'],
      highlights: [
        'Integrated solar energy harvesting with calibrated optical therapy duty cycles',
        'Explored medical device usability in resource-constrained environments'
      ]
    },
    {
      id: 'fullstack-samvaad',
      period: '2023 — 2024',
      type: 'Development',
      title: 'Full-Stack Engineering: Samvaad Platform',
      organization: 'Independent Engineering Project',
      location: 'Hyderabad, India',
      description:
        'Engineered a complete social communication platform using React, Vite, Node.js, and relational database paradigms, solidifying end-to-end web engineering practices.',
      tags: ['Full-Stack', 'React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      highlights: [
        'Implemented modern component architectures and state management',
        'Constructed performant REST APIs with secure authentication and database persistence'
      ]
    }
  ],

  achievements: [
    {
      id: 'academic-cgpa',
      category: 'Academic',
      title: 'Academic Excellence: 8.7 CGPA in B.Tech CSE',
      organization: 'Keshav Memorial Institute of Technology (KMIT)',
      dateOrPeriod: '2022 — Present',
      detail:
        'Maintained a top-tier cumulative grade point average of 8.7 / 10 throughout rigorous Computer Science engineering coursework, demonstrating deep discipline across core computing subjects.',
      verifiedStatus: 'Official Academic',
      tag: '8.7 / 10 CGPA'
    },
    {
      id: 'sih-experience',
      category: 'Hackathon & Competitions',
      title: 'Smart India Hackathon (SIH) Participation & Experience',
      organization: 'Ministry of Education / Institutional Rounds',
      dateOrPeriod: 'Academic Year 2023 — 2024',
      detail:
        'Engaged in collaborative problem-solving for complex national challenges during SIH competitive rounds, presenting innovative system architectures and working prototypes.',
      verifiedStatus: 'Verified Record',
      tag: 'Smart India Hackathon'
    },
    {
      id: 'telemed-milestone',
      category: 'Technical Milestone',
      title: 'Multi-Modal Healthcare Intelligence Architecture',
      organization: 'Independent Technical Research Project',
      dateOrPeriod: '2024',
      detail:
        'Successfully engineered a multi-modal healthcare diagnostic pipeline synthesizing gut microbiome OTU abundance, wearable biometrics, and clinical lab values with SHAP interpretability.',
      verifiedStatus: 'Verified Record',
      tag: 'AI / Healthcare'
    },
    {
      id: 'cybersec-milestone',
      category: 'Technical Milestone',
      title: 'Semantics-Based Ransomware Classification (SRDC)',
      organization: 'Cybersecurity NLP Exploration',
      dateOrPeriod: '2024 — Present',
      detail:
        'Pioneered experimentation using fine-tuned GPT-2 transformer architectures to model assembly opcode behavioral semantics for zero-day malware detection.',
      verifiedStatus: 'Verified Record',
      tag: 'Cybersecurity Research'
    },
    {
      id: 'certifications-placeholder',
      category: 'Certification',
      title: 'Professional Technical Certifications & Continuous Learning',
      organization: 'Recognized Online Platforms & Specialized Academies',
      dateOrPeriod: 'Ongoing',
      detail:
        'Actively completing specialized coursework in Deep Learning, Advanced Machine Learning, and Cloud Computing. Verified certificates and credential IDs can be dynamically listed here.',
      verifiedStatus: 'Continuous Learning',
      tag: 'Certifications',
      placeholderNotice: 'Editable section: Add certification credentials & verification links anytime.'
    }
  ],

  researchAreas: [
    {
      id: 'generative-ai-llms',
      title: 'Generative AI & Domain-Adapted LLMs',
      domain: 'Foundation Models & Natural Language Processing',
      summary:
        'Investigating techniques to adapt large language models to specialized technical corpora (e.g., clinical healthcare records, binary disassembly syntax) while eliminating hallucinations and maintaining grounding.',
      keyQuestions: [
        'How can smaller parameter models (e.g. GPT-2, LLaMA-based models) be fine-tuned efficiently on domain-specific execution sequences?',
        'What prompt and retrieval frameworks best ground generative summaries in empirical statistical explanations (e.g. SHAP values)?'
      ],
      associatedProject: 'SRDC & Telemedicine Platform',
      status: 'Applied Architecture',
      methods: ['Fine-Tuning', 'PEFT / LoRA Principles', 'Domain Tokenization', 'Contextual Grounding']
    },
    {
      id: 'cybersecurity-malware',
      title: 'Semantic-Driven Cybersecurity & Threat Modeling',
      domain: 'Malware Analysis & Machine Learning',
      summary:
        'Moving beyond static hashes and heuristic antivirus rules by treating compiled binary execution patterns as semantic syntax trees, modeling intent rather than surface code structure.',
      keyQuestions: [
        'Can semantic sequence modeling accurately differentiate legitimate administrative encryption from polymorphic ransomware payloads?',
        'How resilient are transformer-based binary classifiers against adversarial opcode-insertion attacks?'
      ],
      associatedProject: 'SRDC: Semantics-Based Ransomware Detection',
      status: 'Active Exploration',
      methods: ['Binary Disassembly', 'Opcode N-Grams', 'Sequence Transformers', 'Attention Weight Profiling']
    },
    {
      id: 'healthcare-multi-modal',
      title: 'Multi-Modal Healthcare AI & Microbiome Analytics',
      domain: 'Bioinformatics & Predictive Medicine',
      summary:
        'Bridging the gap between high-dimensional gut microbiome taxonomic sequencing, continuous wearable time-series, and static clinical lab panels to build preventative health alert engines.',
      keyQuestions: [
        'How do non-linear ensemble models handle extreme sparsity in 16S rRNA taxonomic abundance data?',
        'What explainability protocols provide both clinical credibility and patient-comprehensible guidance?'
      ],
      associatedProject: 'Generative AI Telemedicine Platform',
      status: 'Active Exploration',
      methods: ['Ensemble Stacking (XGBoost/LightGBM)', 'SHAP Explainability', 'Multi-Stream Normalization']
    },
    {
      id: 'explainable-ai',
      title: 'Explainable AI (XAI) & Model Interpretability',
      domain: 'Responsible Machine Learning',
      summary:
        'Focusing on transparency in high-stakes algorithmic decisions. Implementing game-theoretic Shapley values and attention attribution to explain why a neural or tree-based model arrived at a conclusion.',
      keyQuestions: [
        'How can complex mathematical attributions be rendered intuitive for non-technical domain practitioners?',
        'What are the computational trade-offs of real-time SHAP estimation in production web services?'
      ],
      associatedProject: 'Telemedicine & SRDC',
      status: 'Literature Review & Prototyping',
      methods: ['Shapley Additive exPlanations', 'Feature Importance Attribution', 'Visual Interpretation Graphs']
    }
  ],

  personality: {
    headline: 'Always exploring. Always evolving.',
    quote:
      '"True innovation happens at the intersection of deep theoretical curiosity and the relentless drive to build practical tools that solve real human problems."',
    pillars: [
      {
        title: 'Curiosity-Driven Problem Solving',
        description:
          'I am motivated by understanding how complex systems function from first principles—whether dissecting compiler output, transformer attention mechanisms, or the human microbiome.',
        icon: 'Compass'
      },
      {
        title: 'Rapid Prototyping & Iteration',
        description:
          'Ideas gain value only when brought into the tangible world. I believe in taking ambitious concepts and rapidly transforming them into functional, testable codebases.',
        icon: 'Zap'
      },
      {
        title: 'Public Service & Broad Impact',
        description:
          'Long-term interest in technology policy, ethical AI governance, and public service leadership—applying engineering discipline to scalable social initiatives that elevate communities.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Continuous Mastery',
        description:
          'Technology shifts rapidly. Cultivating a beginner’s mind alongside disciplined learning habits ensures readiness to tackle the emerging computing paradigms of tomorrow.',
        icon: 'Flame'
      }
    ]
  }
};
