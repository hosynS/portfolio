import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className={`-my-10 sm:my-0 mt-0 xl:mt-12 flex flex-col xl:flex-row xl:gap-10 gap-0 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-4 sm:p-8 max-w-full"
      >
        <Header useMotion={false} {...config.contact} />

<div className="mt-6 flex items-center gap-5">
  <a
    href="https://www.linkedin.com/in/saddam-hussain-khan"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0A66C2]/500 bg-[#0A66C2]/15 shadow-[0_0_18px_rgba(10,102,194,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#0A66C2]/25 hover:shadow-[0_0_24px_rgba(10,102,194,0.45)]"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#0A66C2"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  </a>

  <a
    href="https://discord.com/users/1208099151389138947"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#5865F2]/500 bg-[#5865F2]/15 shadow-[0_0_18px_rgba(88,101,242,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#5865F2]/25 hover:shadow-[0_0_24px_rgba(88,101,242,0.45)]"
    aria-label="Discord"
    title="Discord"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#5865F2"
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.015.05.05 0 0 0-.052.025c-.14.249-.297.575-.406.833a12.19 12.19 0 0 0-3.658 0 8.958 8.958 0 0 0-.412-.833.051.051 0 0 0-.052-.025 13.236 13.236 0 0 0-3.257 1.015.041.041 0 0 0-.019.019C.533 5.78-.32 8.595.099 11.375a.06.06 0 0 0 .022.037 13.312 13.312 0 0 0 3.995 2.03.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.051.051 0 0 0-.01-.059.051.051 0 0 0-.017-.011 8.325 8.325 0 0 1-1.248-.595.05.05 0 0 1-.005-.084.034.034 0 0 1 .01-.007c.084-.063.168-.129.248-.195a.05.05 0 0 1 .052-.007c2.619 1.196 5.456 1.196 8.044 0a.05.05 0 0 1 .053.006c.08.066.164.132.248.195a.05.05 0 0 1-.004.084 8.203 8.203 0 0 1-1.249.594.05.05 0 0 0-.027.065c.236.465.51.908.817 1.328a.05.05 0 0 0 .056.02 13.3 13.3 0 0 0 4.001-2.03.05.05 0 0 0 .021-.037c.5-3.177-.838-5.967-2.548-8.45a.041.041 0 0 0-.019-.02m-8.198 6.06c-.789 0-1.438-.724-1.438-1.612s.637-1.612 1.438-1.612c.806 0 1.45.73 1.438 1.612 0 .888-.637 1.612-1.438 1.612m5.316 0c-.789 0-1.438-.724-1.438-1.612s.637-1.612 1.438-1.612c.806 0 1.45.73 1.438 1.612 0 .888-.632 1.612-1.438 1.612" />
    </svg>
  </a>
</div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[280px] sm:h-[350px] md:h-[420px] xl:h-auto flex-1 w-full flex items-center justify-center overflow-visible"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
