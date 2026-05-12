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
    title: "Saddam Hussain — Portfolio",
    fullName: "Saddam Hussain",
    email: "saddamhussain1919@gmail.com",
  },
  hero: {
    name: "Saddam Hussain",
    p: ["Systems Development | DevOps Automation | Cloud Infrastructure"],
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
      content: `With expertise in Python, Golang, Bash, and TypeScript, I specialize in bridging the gap between development and operations. I focus on the entire system lifecycle—from designing resilient backend microservices to automating the deployment pipelines that run them. I collaborate closely with teams to optimize complex integrations and deliver scalable, production-ready solutions. Let’s build something great together!`,
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
      p: "",
      h2: "Other Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    certifications: {
      p: "What I have earned",
      h2: "Certifications.",
  },
  },
};
