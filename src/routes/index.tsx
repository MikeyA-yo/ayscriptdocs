import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Code, Terminal, Zap, Download, Github, BookOpen, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  const [copied, setCopied] = useState(false)
  
  const codeExample = `// Define custom aliases for better readability
def var -> l
def fn -> f

// Variables and basic operations
var message = "Welcome to AY Language!"
var numbers = [3, 1, 4, 1, 5, 9]

// Functions with multiple parameters
fn calculate(a, b, c, d) {
    var sum = a + b + c + d
    var average = sum / 4
    return average
}

var result = calculate(10, 20, 30, 40)  // 25
print("Average: " + result)`

  const scrollToInstallation = () => {
    const installationSection = document.getElementById('installation-section')
    if (installationSection) {
      installationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('npm install -g ayscript')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="/ayscript.jpg"
              alt="AY Language Logo"
              className="w-24 h-24 mx-auto mb-8 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              The <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AY</span> Language
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A simple, custom programming language designed for experimentation, simplicity, and quick scripting
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToInstallation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Get Started
              </motion.button>
              
              <motion.a
                href="https://github.com/MikeyA-yo/ay-ts"
                className="border border-blue-300 hover:border-white text-blue-200 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View on GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose AY?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-cyan-400" />,
                title: "Simple Syntax",
                description: "Clean, minimal syntax with custom aliases using the 'def' keyword for maximum readability"
              },
              {
                icon: <Code className="w-12 h-12 text-blue-400" />,
                title: "JavaScript Compatible",
                description: "Compiles to JavaScript, allowing you to run your AY code in any JavaScript environment"
              },
              {
                icon: <Terminal className="w-12 h-12 text-sky-400" />,
                title: "Rich Standard Library",
                description: "Comprehensive built-in functions for math, strings, arrays, HTTP requests, and more"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-300/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See AY in Action
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Experience the clean syntax and powerful features that make AY perfect for rapid prototyping and learning.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Custom keyword aliases with 'def'
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Simple variable declarations with 'l'
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Functions defined with 'f'
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Rich built-in function library
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-blue-400/30">
                <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-blue-200 text-sm ml-2">example.ay</span>
                </div>
                <pre className="p-6 text-sm text-blue-100 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started Today
          </motion.h2>
          
          <motion.div
            className="bg-slate-800 rounded-xl p-6 mb-8 border border-blue-400/30 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-blue-200 text-sm mb-2">Install AY globally via npm:</p>
            <div className="flex items-center justify-center gap-3">
              <code className="text-cyan-400 text-lg font-mono">npm install -g ayscript</code>
              <motion.button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 hover:border-blue-400/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-blue-300" />
                )}
              </motion.button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 text-sm mt-2"
              >
                Copied to clipboard!
              </motion.p>
            )}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={20} />
              Read Documentation
            </motion.button>
            
            <motion.button
              className="border border-blue-300 hover:border-white text-blue-200 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Contribute
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-200">
            Built with ❤️ for developers who love simple, expressive code
          </p>
        </div>
      </footer>
    </div>
  )
}
