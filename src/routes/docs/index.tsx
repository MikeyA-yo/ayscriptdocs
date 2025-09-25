import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Terminal, Code, FileText, Download, Play, Zap } from 'lucide-react'
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
    { id: 'control-flow', title: 'Control Flow', icon: <ArrowRight size={16} /> },
    { id: 'loops', title: 'Loops', icon: <Terminal size={16} /> },
  ]

  const externalLinks = [
    { href: '/docs/builtins', title: 'Built-in Functions', icon: <Zap size={16} /> }
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
            
            {/* External Documentation Links */}
            <div className="pt-4 border-t border-blue-400/20">
              <div className="text-xs font-semibold text-blue-300 mb-3 px-3">API Reference</div>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-blue-100 hover:bg-blue-600/10 hover:text-white"
                >
                  {link.icon}
                  {link.title}
                </a>
              ))}
            </div>
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
                
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-400/30 mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FileText size={16} className="text-orange-400" />
                    Important Syntax Rules
                  </h4>
                  <ul className="text-orange-100 space-y-2">
                    <li>• <strong>Newlines act as statement terminators</strong> - Similar to semicolons in other languages</li>
                    <li>• <strong>Arrays can span multiple lines</strong> - The only exception to the newline rule</li>
                    <li>• <strong>Control flow keywords must be properly positioned:</strong>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>- <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">else</code> must be on the same line as the closing <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">&#125;</code></li>
                        <li>- <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">else if</code> must be on the same line as the closing <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">&#125;</code></li>
                      </ul>
                    </li>
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
                        <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20 mb-2">
                          <code className="text-blue-100 text-sm">{`l numbers = [1, 2, 3, 4, 5]
l fruits = ["apple", "banana", "orange"]
l mixed = [1, "hello", true]

// Arrays can span multiple lines
l longArray = [
    "first item",
    "second item", 
    "third item",
    42,
    true
]`}</code>
                        </div>
                        <div className="text-xs text-blue-300">
                          <strong>Note:</strong> Arrays are the only construct that can span multiple lines in AY.
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
                <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Custom Keyword Aliases</h3>
                  <p className="text-blue-100 mb-4">
                    Use the <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">def</code> keyword to create custom aliases for language keywords only:
                  </p>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20 mb-4">
                    <pre className="text-blue-100 text-sm">
                      <code>{`// Create custom aliases for KEYWORDS ONLY
def var -> l        // Alias for variable declaration
def fn -> f         // Alias for function declaration
def brk -> break    // Alias for break keyword
def cnt -> continue // Alias for continue keyword

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
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-400/30">
                    <p className="text-amber-200 text-sm">
                      <strong>Important:</strong> The <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">def</code> keyword can only be used to create aliases for language keywords, 
                      not for strings, functions, or variables. It's a compile-time feature for syntax customization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Control Flow Section */}
            <motion.section
              id="control-flow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <ArrowRight className="text-cyan-400" />
                Control Flow
              </h2>
              
              <div className="space-y-8">
                {/* If-Else Statements */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">If-Else Statements</h3>
                  <p className="text-blue-100 mb-4">
                    Control program flow with conditional statements using <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">if</code>, 
                    <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400 ml-2">else if</code>, and 
                    <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400 ml-2">else</code>:
                  </p>
                  
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-400/30 mb-6">
                    <h4 className="text-red-200 font-semibold mb-2">⚠️ Important Syntax Rule</h4>
                    <p className="text-red-100 text-sm mb-3">
                      In AY, newlines act as statement terminators (like semicolons). For <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">else</code> and 
                      <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400 ml-1">else if</code> to work properly, 
                      they <strong>must be on the same line</strong> as the closing <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">&#125;</code> of the previous block.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-400 text-xs mb-2">✅ Correct:</p>
                        <pre className="bg-slate-800 rounded p-2 text-xs text-green-300">
                          <code>{`if (condition) {
    // code
} else {
    // code
}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-red-400 text-xs mb-2">❌ Wrong:</p>
                        <pre className="bg-slate-800 rounded p-2 text-xs text-red-300">
                          <code>{`if (condition) {
    // code
}
else {  // This won't work!
    // code
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Basic If Statement</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l age = 18

if (age >= 18) {
    print("You are an adult!")
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">If-Else Statement</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l score = 85

if (score >= 90) {
    print("Grade: A")
} else {
    print("Grade: B or lower")
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">If-Else If-Else Chain</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l temperature = 25

if (temperature > 30) {
    print("It's hot!")
} else if (temperature > 20) {
    print("It's warm!")
} else if (temperature > 10) {
    print("It's cool!")
} else {
    print("It's cold!")
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Operators */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Comparison Operators</h3>
                  <p className="text-blue-100 mb-4">Use these operators in conditional statements:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-400/20">
                      <h4 className="text-white font-semibold mb-3">Equality & Comparison</h4>
                      <div className="space-y-2 text-blue-100 text-sm">
                        <div><code className="text-cyan-400">==</code> - Equal to</div>
                        <div><code className="text-cyan-400">!=</code> - Not equal to</div>
                        <div><code className="text-cyan-400">&lt;</code> - Less than</div>
                        <div><code className="text-cyan-400">&gt;</code> - Greater than</div>
                        <div><code className="text-cyan-400">&lt;=</code> - Less than or equal</div>
                        <div><code className="text-cyan-400">&gt;=</code> - Greater than or equal</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-400/20">
                      <h4 className="text-white font-semibold mb-3">Logical Operators</h4>
                      <div className="space-y-2 text-blue-100 text-sm">
                        <div><code className="text-cyan-400">&&</code> - Logical AND</div>
                        <div><code className="text-cyan-400">||</code> - Logical OR</div>
                        <div><code className="text-cyan-400">!</code> - Logical NOT</div>
                      </div>
                      <div className="mt-3">
                        <pre className="text-cyan-400 text-xs">
                          <code>{`if (age >= 18 && hasLicense) {
    print("Can drive!")
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Functions with Return */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Functions with Conditional Returns</h3>
                  <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                    <pre className="text-blue-100 text-sm">
                      <code>{`f checkGrade(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else {
        return "F"
    }
}

l studentGrade = checkGrade(85)
print("Grade: " + studentGrade)  // Output: Grade: B`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Loops Section */}
            <motion.section
              id="loops"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-cyan-400" />
                Loops
              </h2>
              
              <div className="space-y-8">
                {/* While Loops */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">While Loops</h3>
                  <p className="text-blue-100 mb-4">
                    Execute code repeatedly while a condition is true:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Basic While Loop</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l counter = 0

while (counter < 5) {
    print("Counter: " + counter)
    counter++
}

// Output:
// Counter: 0
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">While Loop with User Input</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l userInput = ""

while (userInput != "quit") {
    userInput = input("Enter 'quit' to exit: ")
    if (userInput != "quit") {
        print("You entered: " + userInput)
    }
}

print("Goodbye!")`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Loops */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">For Loops</h3>
                  <p className="text-blue-100 mb-4">
                    Execute code for a specific number of iterations:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Basic For Loop</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`// Print numbers from 0 to 9
for (l i = 0; i < 10; i++) {
    print("Number: " + i)
}

// Countdown example
for (l count = 10; count > 0; count--) {
    print("Countdown: " + count)
}
print("Blast off!")`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">For Loop with Arrays</h4>
                      <div className="bg-slate-800 rounded-xl p-4 border border-blue-400/20">
                        <pre className="text-blue-100 text-sm">
                          <code>{`l fruits = ["apple", "banana", "orange", "grape"]
l arrayLength = len(fruits)

for (l i = 0; i < arrayLength; i++) {
    print("Fruit " + i + ": " + fruits[i])
}

// Output:
// Fruit 0: apple
// Fruit 1: banana
// Fruit 2: orange
// Fruit 3: grape`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loop Control */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Loop Control</h3>
                  <p className="text-blue-100 mb-4">
                    Control loop execution with <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">break</code> and 
                    <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400 ml-2">continue</code>:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Using Break</h4>
                      <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                        <pre className="text-blue-100 text-xs">
                          <code>{`l numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (l i = 0; i < len(numbers); i++) {
    if (numbers[i] == 5) {
        print("Found 5! Breaking...")
        break  // Exit the loop
    }
    print("Number: " + numbers[i])
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Found 5! Breaking...`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Using Continue</h4>
                      <div className="bg-slate-800 rounded-lg p-3 border border-blue-400/20">
                        <pre className="text-blue-100 text-xs">
                          <code>{`// Skip even numbers
for (l i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue  // Skip to next iteration
    }
    print("Odd number: " + i)
}

// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Aliases for Loops */}
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-400/30">
                  <h4 className="text-white font-semibold mb-3">Using Custom Aliases with Loops</h4>
                  <p className="text-green-100 mb-4">
                    You can create aliases for loop control keywords to make your code more readable:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <pre className="text-blue-100 text-sm">
                      <code>{`// Define custom aliases
def brk -> break
def skip -> continue
def var -> l

// Use aliases in loops
var counter = 0
while (counter < 10) {
    if (counter == 3) {
        counter++
        skip  // Skip when counter is 3
    }
    if (counter == 7) {
        brk   // Break when counter is 7
    }
    print("Counter: " + counter)
    counter++
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Next Steps Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-8 border border-cyan-400/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-cyan-400" />
                  What's Next?
                </h2>
                <p className="text-blue-100 mb-6">
                  Now that you understand the basics of AY, explore the comprehensive built-in function library 
                  to supercharge your programs with math, string manipulation, HTTP requests, and more!
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap size={18} className="text-cyan-400" />
                      Built-in Functions
                    </h3>
                    <p className="text-blue-200 text-sm mb-4">
                      Discover over 80+ built-in functions for math, strings, arrays, HTTP requests, date/time, and more.
                    </p>
                    <a
                      href="/docs/builtins"
                      className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Explore Built-ins
                      <ArrowRight size={14} />
                    </a>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Code size={18} className="text-cyan-400" />
                      Example Programs
                    </h3>
                    <p className="text-blue-200 text-sm mb-4">
                      Ready to build? Try creating web servers, data processors, or automation scripts with AY.
                    </p>
                    <a
                      href="https://github.com/MikeyA-yo/ay-ts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Examples
                      <ArrowRight size={14} />
                    </a>
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
              <a
                href="/docs/builtins"
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <Zap size={16} />
                Built-in Functions Reference
                <ArrowRight size={16} />
              </a>
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
