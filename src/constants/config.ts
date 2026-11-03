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
    title: "Hussain",
    fullName: "Hussain",
    email: "shosyn@outlook.com",
  },
  hero: {
    name: "Hussain",
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
      content: `Backend and distributed systems engineer who has grown into machine learning engineering and data engineering, and specialized in DevOps. I design, build, and run scalable services, data pipelines, and ML-powered systems, from first design to production reliability. Across it all, I care about quality, scalability, and maintainability: systems built to last!`,
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
