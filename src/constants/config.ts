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
      content: `I am a software engineer who has recently completed a specialization in DevOps, with a broad foundation in backend systems, distributed architectures, and data-driven application development. I focus on building scalable APIs, automated delivery pipelines, and reliable infrastructure that prioritizes quality, maintainability, and long-term sustainability. I work end-to-end — from system design and implementation to deployment and monitoring — driven by the goal of delivering software that is automated, operationally resilient, and built to last!`,
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
