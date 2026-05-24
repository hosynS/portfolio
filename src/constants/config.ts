type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    techStack: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    certifications: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Saddam Hussain",
    fullName: "Saddam Hussain",
    email: "sadamhos92@gmail.com",
  },
  hero: {
    name: "Saddam Hussain",
    p: ["Code can win the day, but a team wins the long game."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me.",
      content: `I am a software engineer focused on backend systems, DevOps practices, and data-driven applications, with an interest in machine learning and AI. I enjoy building scalable APIs, distributed systems, and reliable infrastructure with a focus on maintainability and performance. I work with Go, Python, Spring Boot, Bash, and TypeScript, and I have experience with CI/CD pipelines, containerization, and system automation. I’m particularly interested in how backend systems, data workflows, and intelligent features can be combined to build efficient and practical applications!`,
    },
      
    experience: {
      p: "What I have done so far",
      h2: "Projects.",
    },
    techStack: {
       p: "Tools & technologies I work with",
      h2: "Tech Skills.",
  },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "What else I've built",
      h2: "Personal Ventures.",
      content: `These projects highlight my technical experience, practical problem-solving, and work across a broader range of tools and technologies. Together with other projects, they reflect my adaptability, curiosity, and ability to apply my skills in different contexts.`,
    },
    certifications: {
      p: "What I have earned",
      h2: "Certifications.",
  },
  },
};
