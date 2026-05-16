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
      content: `I work across the full stack of modern engineering, with experience spanning DevOps, backend systems, integrations, and data workflows. I specialize in building scalable, reliable platforms through infrastructure automation, CI/CD pipelines, and production-focused engineering practices. I enjoy turning complex architectures into maintainable and dependable solutions that perform reliably in real-world environments. I thrive in collaborative teams where engineering meets execution — aligning around shared goals, solving problems deeply, and delivering technology built for long-term sustainability. Whether working with Python, Go, Bash, or TypeScript, I adapt quickly and build with reliability and scalability in mind.`,
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
