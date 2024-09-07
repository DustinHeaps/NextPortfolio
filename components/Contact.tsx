"use client"

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { formSchema, FormSchemaType } from "@/models/Form";
import ReactLoading from "react-loading";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);


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

  const onSubmit = async () => {
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      toast.success("Email sent successfully");
      formRef.current?.reset();
    } catch (error) {
      console.error(`Error sending email: ${(error as Error).message}`);
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
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
              id='name'
              type='text'
              placeholder='Name'
              required
              {...register("name")}
            />
            {errors.name && (
              <span className='text-red-800'>{errors.name?.message}</span>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label className='label-styles'>Email</label>
            <input
              className='contact-input'
              type='text'
              placeholder='Email'  
              required
              {...register("email")}
            />
            {errors.email && (
              <span className='text-red-800'>{errors.email?.message}</span>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <label className='label-styles'>Message</label>
            <textarea
              className='contact-input'
              rows={6}
              placeholder='Message'
              required
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className='text-red-800'>{errors.message?.message}</span>
            )}
          </div>
          <div className='flex items-center justify-center'>
            <motion.button
              disabled={isSubmitting}
              initial='hidden'
              animate={controls}
              variants={animationVariants}
              transition={{ duration: 1.0, delay: 0.4 }}
              className='btn-get-in-touch text-base flex items-center justify-center'
            >
              {!isSubmitting ? (
                "Submit"
              ) : (
                <>
                  <ReactLoading
                    type={"spin"}
                    color={"#64ffda"}
                    height={25}
                    width={25}
                    className='mr-3'
                  />
                  <span> Submitting...</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
