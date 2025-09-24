import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Terminal, Code, FileText, Download, Play } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/docs/')({
  component: DocsPage,
})

function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: <FileText size={16} /> },
    { id: 'installation', title: 'Installation', icon: <Download size={16} /> },
    { id: 'compiler', title: 'Using the Compiler', icon: <Terminal size={16} /> },
    { id: 'variables', title: 'Variables & Data Types', icon: <Code size={16} /> },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-full w-64 bg-slate-800/50 backdrop-blur-sm border-r border-blue-400/20 p-6">
          <div className="flex items-center gap-2 mb-8">
            <img src="/ayscript.jpg" alt="AY Logo" className="w-8 h-8 rounded-lg" />
            <h2 className="text-xl font-bold text-white">AY Docs</h2>
          </div>
          
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600/30 text-blue-200 border border-blue-400/30'
                    : 'text-blue-100 hover:bg-blue-600/10'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AY Language Documentation
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Learn how to use the AY programming language for experimentation, scripting, and rapid prototyping.
              </p>
            </motion.div>

            {/* Introduction Section */}
            <motion.section
              id="introduction"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="text-cyan-400" />
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-blue-100 text-lg mb-4">
                  AY is a simple, custom programming language designed for experimentation, simplicity, customization, and quick scripting. 
                  This compiler translates AY programs into JavaScript, allowing you to run your AY code in any JavaScript server-side environment.
                </p>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20 mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="text-blue-100 space-y-2">
                    <li>• Simple, minimal syntax with custom keyword aliases</li>
                    <li>• Compiles to JavaScript for universal compatibility</li>
                    <li>• Rich standard library with built-in functions</li>
                    <li>• Functional programming paradigm</li>
                    <li>• Perfect for rapid prototyping and learning</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Installation Section */}
            <motion.section
              id="installation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Download className="text-cyan-400" />
                Installation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Option 1: Install from npm (Recommended)</h3>
                  <p className="text-blue-100 mb-4">Install the AY compiler globally using npm:</p>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                    <code className="text-cyan-400 font-mono">npm install -g ayscript</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Option 2: Install from Source</h3>
                  <p className="text-blue-100 mb-4">For development or contributing:</p>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20 space-y-2">
                    <div><code className="text-cyan-400 font-mono">git clone https://github.com/MikeyA-yo/ay-ts.git</code></div>
                    <div><code className="text-cyan-400 font-mono">cd ay-ts</code></div>
                    <div><code className="text-cyan-400 font-mono">npm install</code></div>
                    <div><code className="text-cyan-400 font-mono">npx tsc</code></div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Using the Compiler Section */}
            <motion.section
              id="compiler"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-cyan-400" />
                Using the Compiler
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Basic Usage</h3>
                  <p className="text-blue-100 mb-4">
                    To compile and run an AY program, follow these steps:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">1. Create an AY file</h4>
                      <p className="text-blue-100 mb-2">Write your AY code in a file with the <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">.ay</code> extension:</p>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <code className="text-cyan-400 font-mono">myprogram.ay</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">2. Compile the program</h4>
                      <p className="text-blue-100 mb-2">Use the AY compiler to generate JavaScript:</p>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <code className="text-cyan-400 font-mono">ayc myprogram.ay</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">3. Run the generated JavaScript</h4>
                      <p className="text-blue-100 mb-2">Execute the compiled JavaScript file with Node.js:</p>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <code className="text-cyan-400 font-mono">node myprogram.js</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/30">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Play size={16} className="text-cyan-400" />
                    Quick Example
                  </h4>
                  <div className="bg-slate-800 rounded-lg p-4 mb-4">
                    <pre className="text-blue-100 text-sm overflow-x-auto">
                      <code>{`// hello.ay
l message = "Hello, AY Language!"
print(message)`}</code>
                    </pre>
                  </div>
                  <div className="text-blue-100 text-sm space-y-1">
                    <div><code className="text-cyan-400">$ ayc hello.ay</code></div>
                    <div><code className="text-cyan-400">$ node hello.js</code></div>
                    <div className="text-green-400">Hello, AY Language!</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Variables & Data Types Section */}
            <motion.section
              id="variables"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Code className="text-cyan-400" />
                Variables & Data Types
              </h2>
              
              <div className="space-y-8">
                {/* Variable Declaration */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Variable Declaration</h3>
                  <p className="text-blue-100 mb-4">
                    Variables in AY are declared using the <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">l</code> keyword and are block-scoped:
                  </p>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                    <pre className="text-blue-100 text-sm">
                      <code>{`l name = "Alice"
l age = 25
l isActive = true`}</code>
                    </pre>
                  </div>
                </div>

                {/* Data Types */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Supported Data Types</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Primitive Types */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Strings</h4>
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                          <code className="text-blue-100 text-sm">{`l greeting = "Hello World"
l message = 'Single quotes work too'`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Numbers</h4>
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                          <code className="text-blue-100 text-sm">{`l integer = 42
l decimal = 3.14159
l negative = -100`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Booleans</h4>
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                          <code className="text-blue-100 text-sm">{`l isTrue = true
l isFalse = false`}</code>
                        </div>
                      </div>
                    </div>

                    {/* Complex Types */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Arrays</h4>
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                          <code className="text-blue-100 text-sm">{`l numbers = [1, 2, 3, 4, 5]
l fruits = ["apple", "banana", "orange"]
l mixed = [1, "hello", true]`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Functions</h4>
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                          <code className="text-blue-100 text-sm">{`f greet(name) {
    return "Hello, " + name + "!"
}
l sayHello = greet`}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Object Handling */}
                <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-400/30">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Code size={16} className="text-amber-400" />
                    Working with Objects
                  </h4>
                  <p className="text-blue-100 mb-4">
                    AY is currently functional-only and doesn't support object literals. However, you can work with object-like data 
                    using JSON strings, especially when dealing with HTTP responses:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <pre className="text-blue-100 text-sm overflow-x-auto">
                      <code>{`// Working with JSON strings for object-like data
l userJson = '{"name": "Alice", "age": 25, "email": "alice@example.com"}'

// HTTP methods can return objects as JSON strings
l promise = httpGet("https://api.example.com/user/123")
awaitPromise(promise, f(data) {
    // data will be a JSON string like '{"id": 123, "name": "John"}'
    print("User data: " + data)
}, f(error) {
    print("Error: " + error)
})

// You can parse JSON using the built-in parseJson function
l userData = parseJson(userJson)
print("Parsed user data available as JSON string")`}</code>
                    </pre>
                  </div>
                  <div className="mt-4 text-sm text-amber-200">
                    <strong>Note:</strong> While objects aren't first-class citizens in AY, JSON strings provide a way to work with structured data, 
                    particularly when interfacing with APIs and web services.
                  </div>
                </div>

                {/* Custom Aliases */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Custom Keyword Aliases</h3>
                  <p className="text-blue-100 mb-4">
                    Use the <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">def</code> keyword to create custom aliases for better readability:
                  </p>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                    <pre className="text-blue-100 text-sm">
                      <code>{`// Create custom aliases
def var -> l
def fn -> f

// Now use your custom syntax
var userName = "Alice"
var userAge = 30

fn calculateAge(birthYear) {
    var currentYear = 2025
    return currentYear - birthYear
}

var age = calculateAge(1995)
print("Age: " + age)`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Navigation */}
            <motion.div
              className="flex justify-between items-center pt-8 border-t border-blue-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div></div>
              <button
                onClick={() => scrollToSection('introduction')}
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                Back to Top
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
