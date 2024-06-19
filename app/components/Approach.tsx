"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Minha <span className="text-sky-300">abordagem</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planejamento & Estrategia"
          description="Colaboraremos para mapear os objetivos,
           o público-alvo e as principais funcionalidades do seu site.
            Discutiremos coisas como estrutura do site, navegação 
            e requisitos de conteúdo."
          icon={<AceternityIcon order="Etapa 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-400"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card 
          title="Desenvolvimento & Atualização de progresso"
          description="Assim que chegarmos a um acordo sobre o plano,
           eu coloco minha playlist lofi e mergulho na codificação.
           Dos esboços iniciais ao código refinado, mantenho você atualizado
           em cada etapa do processo." 
          icon={<AceternityIcon order="Etapa 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card 
          title="Desenvolvimento & Lançamento"
          description="É aqui que a mágica acontece!
           Com base no design aprovado, traduzirei tudo em código funcional,
           construindo seu site do zero." 
          icon={<AceternityIcon order="Etapa 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-700"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card 
      flex items-center justify-center dark:border-white/[0.2] 
      max-w-sm w-full h-full mx-auto p-4 relative 
      lg:h-[35rem] rounded-3xl
      "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm text-center dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{
            color:'#E4ECFF' 
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="inline-flex h-12 animate-shimmer items-center 
      justify-center rounded-md 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
      bg-[length:200%_100%] px-6 py-4 text-slate-400 transition-colors
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
    focus:ring-offset-slate-50 text-2xl font-bold">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
