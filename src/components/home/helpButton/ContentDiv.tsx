/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Balloon } from './Balloon';

const chatData = [
  { title: 'Oi, eu sou o Aron, assistente virtual  da Cnc Tech.', link: null, subtitle: null },
  { title: 'Escolha uma das opções rápidas que estão no menu ou clique em “Outros assuntos” para falar com profissional da Cnc.', link: null, subtitle: null },
  { title: null, link: { title: 'Encontrar revendedor mais perto', href: '/representantes' }, subtitle: 'Olá, isso é um teste' }
  // Adicione mais posições conforme necessário
];

export function ContentDivChatBot() {
  const totalStep = chatData.length;
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState(Array(totalStep).fill('Digitando...'));

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[step] = chatData[step].title;
        return newMessages;
      });

      // Desativar "digitando..." e atualizar para o próximo passo após o tempo de digitação
      setIsTyping(false);
      setStep((prevStep) => (prevStep < totalStep - 1 ? prevStep + 1 : prevStep));
    }, 3000); // Ajuste o tempo conforme necessário

    return () => clearTimeout(typingTimeout);
  }, [step, totalStep]);

  return (
    <div className="bg-neutral-300 w-full h-full py-8 px-6 flex flex-col">
      <AnimatePresence>
        <div className='flex flex-col gap-6'>
          {chatData.map((data, index) => (
            <motion.div
              key={`balloon-${index}`}
              initial={{ opacity: 0, y: 20, display: index <= step ? 'block' : 'none' }}
              animate={index <= step ? { opacity: 1, y: 0, display: 'block' } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Balloon
                title={isTyping && index === step ? 'Digitando...' : data.title}
                subtitle={data.subtitle}
                link={data.link}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}