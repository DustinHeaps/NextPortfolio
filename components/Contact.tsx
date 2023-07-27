import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Email = `https://formspree.io/f/${process.env.NEXT_PUBLIC_EMAIL_ID}`;

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    // Clear the form after success
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }, []);

  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id='contact'
      className='wrapper-xs gap-4 flex flex-col items-center justify-center '
      ref={ref}
    >
      <motion.p
        initial='hidden'
        animate={controls}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='font-bold text-sm flex items-center text-textGreen font-linkFont'
      >
        <span className='mr-2'>05. </span> What&apos;s next?
      </motion.p>
      <motion.h2
        initial='hidden'
        animate={controls}
        variants={animationVariants}
        transition={{ duration: 1.0, delay: 0.2 }}
        className='text-3xl font-titleFont mdl:text-5xl font-semibold'
      >
        Get In Touch
      </motion.h2>
      <div className='w-full'>
        <motion.form
          initial={{
            y: 20,
            opacity: 0,
          }}
          action={Email}
          method='POST'
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          ref={formRef}
          className='flex flex-col bg-transparent gap-4 mx-auto max-w-2xl text-gray-300 caret-primary focus:caret-primary max-w-[600px]'
        >
          <div className='flex flex-col gap-1'>
            <label className='label-styles'>Name</label>
            <input
              className='contact-input'
              type='text'
              placeholder='Name'
              name='name'
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='label-styles'>Email</label>
            <input
              className='contact-input'
              type='email'
              placeholder='Email'
              name='email'
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='label-styles'>Message</label>
            <textarea
              className='contact-input'
              rows={6}
              placeholder='Message'
              name='message'
              required
            ></textarea>
          </div>
          <div className='text-center'>
            <motion.button
              initial='hidden'
              animate={controls}
              variants={animationVariants}
              transition={{ duration: 1.0, delay: 0.4 }}
              className='btn-get-in-touch'
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
