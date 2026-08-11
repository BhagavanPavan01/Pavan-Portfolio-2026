export const experienceData = [
    {
        id: "pharmacy-teaching",
        company: "JNTU-GV College of Pharmaceutical Sciences",
        role: "Instructor - Computer Applications in Pharmacy",
        duration: "PRESENT",
        desc: "Teaching pharmacy students the fundamentals of Computer Applications in Pharmacy, covering practical usage of HTML, CSS, Databases, MySQL, MS Word, and MS Excel.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: {
            // live: "REPLACE_WITH_LIVE_LINK_OR_LEAVE_HASH",
            // github: "REPLACE_WITH_GITHUB_LINK_OR_LEAVE_HASH",
            certificate: "REPLACE_WITH_YOUR_CERTIFICATE_LINK_HERE"
        },
        tags: ["Teaching", "HTML/CSS", "MySQL", "MS Office"],
        descriptionPoints: [
            "Instructing pharmacy students on Computer Applications in Pharmacy according to their curriculum.",
            "Covering essential web technologies including fundamentals of HTML and CSS.",
            "Teaching data management using Databases and MySQL.",
            "Providing hands-on training with MS Word and MS Excel for academic and professional documentation."
        ],
        workflow: "Designed comprehensive lesson plans integrating theory with practical lab sessions. Employed hands-on exercises to ensure students actively apply software and database concepts to pharmaceutical scenarios.",
        process: "The focus is reducing technical barriers for non-tech students, simplifying complex concepts like relational databases and web markup so that future pharmacists can effectively leverage tech tools in their practice."
    },
    {
        id: "saiket-intern", // String ID to match how Project params are used
        company: "Saiket Systems",
        role: "Web Development Intern",
        duration: "OCT 2024 – NOV 2024",
        desc: "Developed responsive user interfaces using HTML, CSS, and JavaScript, gaining hands-on experience in building interactive web applications and executing layout structures.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: {
            live: "https://github.com/BhagavanPavan01/Saiket-systems-full-stack-internship",
            github: "https://github.com/BhagavanPavan01/Saiket-systems-full-stack-internship",
            certificate: "https://res.cloudinary.com/decaajhdd/image/upload/v1770384753/Saiket_systems_Internship_certficate_page-0001_kzp4ph.jpg"
        },
        tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Node.js", "Express.js", "MySql"], // Using 'tags' instead of 'skills' to match projects mapping easier

        // Detailed fields equivalent to projects for the expanded view
        descriptionPoints: [
            "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
            "Gained hands-on experience in building user-friendly and interactive web applications.",
            "Competently executed real-world layout structures and highly responsive grid designs."
        ],
        workflow: "Initiated with UI mockups, transitioned into modular HTML/CSS development, and integrated interactive JavaScript components followed by comprehensive responsive testing across devices.",
        process: "The core philosophy was to build lightweight, fast-loading, and completely fluid interfaces without relying heavily on bloated frameworks, emphasizing core web technologies.",
        internshipTasks: [
            {
                name: "Task 1: Create a Static Portfolio Website with a Theme",
                overview: "Designed a static portfolio featuring a homepage, a 'Projects' placeholder section, and a contact form with JavaScript validation.",
                skillsUsed: "HTML, CSS, JavaScript",
                outcome: "A pristine, responsive layout ready for future dynamic data integration."
            },
            {
                name: "Task 2: Responsive E-Commerce Landing Page",
                overview: "Used HTML, CSS, and styling frameworks to map out a responsive e-commerce landing page. Added interactive features like JS-powered toggles and fluid form validation.",
                skillsUsed: "UI/UX Design, CSS Frameworks, DOM Manipulation.",
                outcome: "Mobile-first architecture that easily scales across devices."
            },
            {
                name: "Task 3: Front-End Framework Basics (To-Do App)",
                overview: "Established the fundamentals in React.js by building a complex To-Do List Application allowing users to Add, Edit, Delete tasks dynamically.",
                skillsUsed: "React Hooks (useState, useEffect), Component Lifecycle.",
                outcome: "Mastered component-based UI engineering."
            },
            {
                name: "Task 4: Build a Basic REST API",
                overview: "Used Node.js and Express to formulate a robust API architecture. Generated endpoints for CRUD operations targeting a 'User' entity.",
                skillsUsed: "Node.js, Express, Postman Testing, JSON Mapping.",
                outcome: "Developed the server logic necessary to handle complex user data schemas."
            },
            {
                name: "Task 5: Database Integration",
                overview: "Attached the prior REST API to a MongoDB Database, persisting the payload configurations seamlessly.",
                skillsUsed: "MongoDB, Mongoose, Data Schemas, Secure Integration.",
                outcome: "Reliable data storage replacing ephemeral arrays."
            },
            {
                name: "Task 6: Build a Full Stack Application (Ultra Update)",
                overview: "In this final task, I unified the React Front-End and the Express/MongoDB Back-End into a stunning, futuristic User Management System (UserFlow). Data is piped securely, displayed dynamically, and augmented by a custom AI Assistant widget.",
                isHighlight: true,
                features: [
                    "Glassmorphic Premium UI: Total redesign of the application using ultra-modern Glassmorphism, deep dark mode, gradient highlights, and fluid CSS animations.",
                    "Dynamic Stats Dashboard: Real-time analytical calculation of Total Users, Average Age, and Unique Professions directly in the header.",
                    "Search & Filtering Logic: Instantaneous filtering of the user directory natively interacting with React useMemo hooks.",
                    "Dynamic User Avatars: Auto-generated initials avatars integrated into the UserCard.",
                    "Integrated AI Assistant Chatbot: Access an internal bot styled to seamlessly blend with the futuristic layout.",
                    "Responsive Security Auth: Secure JWT-powered login and registration forms featuring responsive slide-animations."
                ],
                workflowSteps: [
                    "1. Bootstrapping the Backend Server: cd Task-6/backend, npm install, npm run dev (http://localhost:5000)",
                    "2. Bootstrapping the Frontend UI: cd Task-6/frontend, npm install, npm start (http://localhost:3000)",
                    "3. User Flow Simulation: Register/Login, Dashboard Visualization, Search & CRUD, AI Interaction"
                ]
            }
        ]
    }
];
