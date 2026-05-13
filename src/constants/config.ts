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
    p: ["Great code matters, but so does the team behind it."],
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
      h2: "Overview.",
      content: `I work across the full stack of modern engineering — from backend services and system integrations to DevOps pipelines and data workflows. I'm actively moving deeper into the DevOps space — CI/CD pipelines, infrastructure automation, and keeping systems reliable in production are where my focus is headed. What I enjoy most is the collaborative side: pairing with teams, aligning on goals, and shipping things that actually hold up in production. Python, Go, Bash, TypeScript — give me the tools, I'll make them work!`,
    },
      
    experience: {
      p: "What I have done so far",
      h2: "Projects.",
    },
    techStack: {
       p: "Tools & technologies I work with",
      h2: "Tech Stack.",
  },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "What else I've built",
      h2: "Other Projects.",
      content: `These projects complement my main portfolio by highlighting additional technical experience, practical problem-solving, and work across a broader range of tools and technologies. Together, they reflect my adaptability, curiosity, and ability to apply my skills in different contexts.`,
    },
    certifications: {
      p: "What I have earned",
      h2: "Certifications.",
  },
  },
};
