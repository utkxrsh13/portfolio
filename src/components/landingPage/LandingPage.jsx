import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import PropTypes from 'prop-types';

const LandingPage = ({ onEnter = () => {} }) => {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const [bootSequence, setBootSequence] = useState(false);

  const terminalSequence = [
    { command: "$ whoami", output: "utkarsh_dev", delay: 1000 },
    { command: "$ pwd", output: "/home/utkarsh/portfolio", delay: 800 },
    { command: "$ ls -la skills/", output: "javascript  react  node  python  docker", delay: 1200 },
    { command: "$ cat welcome.txt", output: "Welcome to my digital workspace", delay: 1000 },
    { command: "$ ./run_portfolio.sh", output: "Initializing portfolio...", delay: 800 }
  ];

  // Matrix rain effect
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array.from({ length: columns }, () => Math.random() * 100);

    const interval = setInterval(() => {
      setMatrixChars(prev => {
        const newChars = [];
        for (let i = 0; i < columns; i++) {
          if (Math.random() > 0.95) {
            drops[i] = 0;
          }
          const char = chars[Math.floor(Math.random() * chars.length)];
          newChars.push({
            char,
            x: i * 20,
            y: drops[i] * 20,
            opacity: Math.random() * 0.5 + 0.1
          });
          drops[i]++;
          if (drops[i] * 20 > window.innerHeight) {
            drops[i] = 0;
          }
        }
        return newChars;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Boot sequence and typing effect
  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 4000); // Increased from 500ms to 4000ms (4 seconds)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!bootSequence) return;

    let commandIndex = 0;
    let charIndex = 0;
    let isTypingOutput = false;
    let currentCommand = '';
    let fullText = '';

    const typeNext = () => {
      if (commandIndex >= terminalSequence.length) {
        setShowButton(true);
        return;
      }

      const current = terminalSequence[commandIndex];
      
      if (!isTypingOutput) {
        // Typing command
        if (charIndex < current.command.length) {
          currentCommand += current.command[charIndex];
          fullText = fullText.split('\n').slice(0, -1).join('\n') + (fullText ? '\n' : '') + currentCommand;
          setTypedText(fullText);
          charIndex++;
          setTimeout(typeNext, 50 + Math.random() * 50);
        } else {
          // Command complete, add output
          isTypingOutput = true;
          charIndex = 0;
          fullText += '\n' + current.output;
          setTypedText(fullText);
          setTimeout(() => {
            commandIndex++;
            isTypingOutput = false;
            charIndex = 0;
            currentCommand = '';
            fullText += '\n';
            setTimeout(typeNext, current.delay);
          }, 500);
        }
      }
    };

    const startTyping = setTimeout(typeNext, 1000);
    return () => clearTimeout(startTyping);
  }, [bootSequence]);

  // Cursor blinking
  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursor);
  }, []);

  const handleEnter = () => {
    // Terminal-style enter effect
    setTypedText(prev => prev + '\n$ Starting portfolio interface...\n> Redirecting...');
    setTimeout(onEnter, 1500);
  };

  return (
    <div className="fixed inset-0 bg-white text-green font-mono overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none">
        {matrixChars.map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 text-xs select-none"
            style={{
              left: char.x,
              top: char.y,
              opacity: char.opacity
            }}
            animate={{ opacity: [char.opacity, 0] }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {char.char}
          </motion.div>
        ))}
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.1) 2px,
              rgba(0, 255, 0, 0.1) 4px
            )`
          }}
        />
      </div>

      {/* Terminal window */}
      <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl bg-black/90 border border-green-500/50 rounded-lg shadow-2xl shadow-green-500/20 backdrop-blur-sm overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-green-900/20 border-b border-green-500/30 rounded-t-lg">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-green-300">
              utkarsh@portfolio:~$ 
            </div>
            <div className="text-xs text-green-600">
              {new Date().toLocaleTimeString()}
            </div>
          </div>

          
                <div className="p-3 md:p-6 h-96 overflow-hidden">
                {!bootSequence ? (
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center h-full"
                  >
                  <div className="text-center">
                    <motion.div
                    animate={{ 
                      textShadow: [
                      "0 0 5px #00ff00",
                      "0 0 20px #00ff00",
                      "0 0 5px #00ff00"
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="text-4xl mb-4"
                    >
                    ▓▓▓ BOOTING SYSTEM ▓▓▓
                    </motion.div>
                    
                    {/* Additional boot messages */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="text-green-400 text-sm mb-2"
                    >
                      Initializing core modules...
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="text-green-400 text-sm mb-2"
                    >
                      Loading portfolio data...
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 0.5 }}
                      className="text-green-400 text-sm mb-4"
                    >
                      Preparing interface...
                    </motion.div>
                    
                    <motion.div
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 3.5, delay: 0.5 }} // Increased duration and reduced delay
                    className="h-1 bg-green-500 mx-auto"
                    style={{ maxWidth: "200px" }}
                    />
                  </div>
                  </motion.div>
                ) : (
                  <div className="h-full overflow-y-auto overflow-x-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="whitespace-pre-wrap text-sm leading-relaxed break-words"
                  >
                    
                  <div className="text-green-300 mb-4 text-xs md:text-xs overflow-hidden">
                    <div className="whitespace-pre text-center max-w-full scale-75 md:scale-100 origin-top">
{`╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ██╗   ██╗████████╗██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗║
║  ██║   ██║╚══██╔══╝██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██║  ██║║
║  ██║   ██║   ██║   █████╔╝ ███████║██████╔╝███████╗███████║║
║  ██║   ██║   ██║   ██╔═██╗ ██╔══██║██╔══██╗╚════██║██╔══██║║
║  ╚██████╔╝   ██║   ██║  ██╗██║  ██║██║  ██║███████║██║  ██║║
║   ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝║
║                                                            ║
║                    FULL-STACK DEVELOPER                    ║
╚════════════════════════════════════════════════════════════╝`}
                    </div>
                  </div>
                  
                  <div className="text-green-400">
                    {typedText}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                      █
                    </span>
                  </div>
                </motion.div>

                {/* Enter button */}
                <AnimatePresence>
                  {showButton && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mt-8 flex justify-center"
                    >
                      <button
                        onClick={handleEnter}
                        className="group relative bg-transparent border-2 border-green-500 px-8 py-3 text-green-400 font-mono text-lg hover:bg-green-500/10 hover:text-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                          className="absolute inset-0 border-2 border-green-400"
                        />
                        
                        <div className="relative flex items-center gap-3">
                          <span>[ ENTER PORTFOLIO ]</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <HiArrowRight className="text-xl" />
                          </motion.div>
                        </div>

                        {/* Glitch effect on hover */}
                        <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          />
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Terminal footer */}
          <div className="px-4 py-2 bg-green-900/10 border-t border-green-500/30 rounded-b-lg text-xs text-green-600 flex justify-between">
            <span>READY</span>
            <span>Press [ENTER] to continue</span>
            <span>CPU: 2.3GHz</span>
          </div>
        </motion.div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-500/50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-500/50"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-500/50"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-500/50"></div>

      {/* System info overlay */}
      <div className="absolute top-6 right-6 text-xs text-green-300 font-mono bg-gray-800/70 p-2 rounded border border-green-400/50">
        <div>SYSTEM STATUS: <span className="text-green-200">ONLINE</span></div>
        <div>CONNECTION: <span className="text-green-200">SECURE</span></div>
        <div>PROTOCOL: <span className="text-green-200">HTTPS/2.0</span></div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  onEnter: PropTypes.func,
};

export default LandingPage;