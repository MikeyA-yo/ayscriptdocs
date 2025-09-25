import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { 
  ArrowRight, 
  Terminal, 
  Calculator, 
  Globe, 
  Clock, 
  Zap, 
  Type,
  List,
  Database,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/docs/builtins')({
  component: BuiltinsPage,
})

function BuiltinsPage() {
  const [activeSection, setActiveSection] = useState('core')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = [
    { id: 'core', title: 'Core Functions', icon: <Zap size={16} /> },
    { id: 'math', title: 'Math Functions', icon: <Calculator size={16} /> },
    { id: 'string', title: 'String Functions', icon: <Type size={16} /> },
    { id: 'array', title: 'Array Functions', icon: <List size={16} /> },
    { id: 'http', title: 'HTTP Functions', icon: <Globe size={16} /> },
    { id: 'datetime', title: 'Date/Time Functions', icon: <Clock size={16} /> },
    { id: 'files', title: 'File System', icon: <Database size={16} /> },
    { id: 'timers', title: 'Timer Functions', icon: <Terminal size={16} /> },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false) // Close mobile menu when navigating
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-slate-800/90 backdrop-blur-sm border border-blue-400/30 text-white p-3 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className={`fixed left-0 top-0 h-full w-64 bg-slate-800/95 backdrop-blur-sm border-r border-blue-400/20 p-6 overflow-y-auto transform transition-transform duration-300 z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          <div className="flex items-center gap-2 mb-8">
            <img src="/ayscript.jpg" alt="AY Logo" className="w-8 h-8 rounded-lg" />
            <div>
              <h2 className="text-lg font-bold text-white">AY Built-ins</h2>
              <p className="text-xs text-blue-300">Standard Library</p>
            </div>
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
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-6 pt-6 border-t border-blue-400/20">
            <a 
              href="/docs" 
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm"
            >
              <ArrowRight size={14} />
              Back to Docs
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20 lg:pt-12 overflow-hidden">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Built-in Functions
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
                AY comes with a rich standard library of built-in functions for common programming tasks.
              </p>
            </motion.div>

            {/* Core Functions Section */}
            <motion.section
              id="core"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="text-cyan-400" />
                Core Functions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Input/Output Functions</h3>
                  <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-200 mb-2 text-sm sm:text-base">print(...values)</h4>
                        <p className="text-blue-100 text-sm mb-2">Prints values to the console</p>
                        <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                          <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">print("Hello", "World", 123)</code>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-200 mb-2">input(prompt?)</h4>
                        <p className="text-blue-100 text-sm mb-2">Gets user input from terminal (synchronous)</p>
                        <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                          <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">l name = input("Enter name: ")</code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-200 mb-2">writestdout(...values)</h4>
                        <p className="text-blue-100 text-sm mb-2">Prints to stdout without newline</p>
                        <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                          <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">writestdout("Loading...")</code>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-200 mb-2">errorlog(...msg)</h4>
                        <p className="text-blue-100 text-sm mb-2">Prints error messages to console</p>
                        <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                          <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">errorlog("Error occurred!")</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Stylized Output Functions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-300 mb-2">coolPrint(msg)</h4>
                      <p className="text-blue-100 text-sm mb-2">Prints with "[COOL PRINT]" prefix</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">coolPrint("Success!")</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-yellow-300 mb-2">fancyLog(msg)</h4>
                      <p className="text-blue-100 text-sm mb-2">Prints with "✨ FANCY LOG:" prefix</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">fancyLog("Info message")</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2">stylishWarn(msg)</h4>
                      <p className="text-blue-100 text-sm mb-2">Prints with "⚠️ STYLISH WARNING:" prefix</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">stylishWarn("Be careful!")</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">errorPop(msg)</h4>
                      <p className="text-blue-100 text-sm mb-2">Prints with "❌ ERROR POP:" prefix</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">errorPop("Fatal error!")</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Random & Utility Functions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">rand(min?, max?)</h4>
                      <p className="text-blue-100 text-sm mb-2">Returns random number (0-1 if no params, or between min-max)</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">l random = rand(1, 10)  // Random between 1-10, can be a float</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">randInt(min?, max?)</h4>
                      <p className="text-blue-100 text-sm mb-2">Returns random integer between min and max</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">l dice = randInt(1, 6)  // Random integer 1-6</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">round(num, precision?)</h4>
                      <p className="text-blue-100 text-sm mb-2">Rounds number to specified decimal places (default 0)</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-cyan-400 text-xs sm:text-sm whitespace-pre">l rounded = round(3.14159, 2)  // 3.14</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Math Functions Section */}
            <motion.section
              id="math"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="text-cyan-400" />
                Math Functions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Basic Math</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: 'abs(x)', desc: 'Returns absolute value', example: 'abs(-5) // 5' },
                      { name: 'max(...numbers)', desc: 'Returns the largest number', example: 'max(1, 5, 3) // 5' },
                      { name: 'min(...numbers)', desc: 'Returns the smallest number', example: 'min(1, 5, 3) // 1' },
                      { name: 'pow(base, exponent)', desc: 'Returns base raised to exponent', example: 'pow(2, 3) // 8' },
                      { name: 'sqrt(x)', desc: 'Returns square root', example: 'sqrt(16) // 4' },
                      { name: 'floor(x)', desc: 'Rounds down to nearest integer', example: 'floor(3.7) // 3' },
                      { name: 'ceil(x)', desc: 'Rounds up to nearest integer', example: 'ceil(3.2) // 4' },
                      { name: 'exp(x)', desc: 'Returns e raised to power of x', example: 'exp(1) // 2.718...' },
                      { name: 'log(x)', desc: 'Returns natural logarithm', example: 'log(e()) // 1' },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-3">
                        <h4 className="font-mono text-cyan-300 text-sm mb-1">{func.name}</h4>
                        <p className="text-blue-100 text-xs mb-2">{func.desc}</p>
                        <code className="text-gray-400 text-xs">{func.example}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Trigonometric Functions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Radian-based</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'sin(x)', desc: 'Returns sine', example: 'sin(pi() / 2) // 1' },
                          { name: 'cos(x)', desc: 'Returns cosine', example: 'cos(0) // 1' },
                          { name: 'tan(x)', desc: 'Returns tangent', example: 'tan(pi() / 4) // 1' },
                          { name: 'asin(x)', desc: 'Returns arcsine', example: 'asin(1) // π/2' },
                          { name: 'acos(x)', desc: 'Returns arccosine', example: 'acos(1) // 0' },
                          { name: 'atan(x)', desc: 'Returns arctangent', example: 'atan(1) // π/4' },
                        ].map((func, index) => (
                          <div key={index} className="bg-slate-700/30 rounded p-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-mono text-cyan-300 text-sm">{func.name}</h5>
                                <p className="text-blue-100 text-xs">{func.desc}</p>
                              </div>
                              <code className="text-gray-400 text-xs">{func.example}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Degree-based</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'sind(degrees)', desc: 'Returns sine of degrees', example: 'sind(90) // 1' },
                          { name: 'cosd(degrees)', desc: 'Returns cosine of degrees', example: 'cosd(0) // 1' },
                          { name: 'tand(degrees)', desc: 'Returns tangent of degrees', example: 'tand(45) // 1' },
                          { name: 'toRadians(degrees)', desc: 'Converts degrees to radians', example: 'toRadians(180) // π' },
                          { name: 'toDegrees(radians)', desc: 'Converts radians to degrees', example: 'toDegrees(pi()) // 180' },
                        ].map((func, index) => (
                          <div key={index} className="bg-slate-700/30 rounded p-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-mono text-cyan-300 text-sm">{func.name}</h5>
                                <p className="text-blue-100 text-xs">{func.desc}</p>
                              </div>
                              <code className="text-gray-400 text-xs">{func.example}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Constants & Advanced Functions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Mathematical Constants</h4>
                      <div className="space-y-2">
                        <div className="bg-slate-700/30 rounded p-3">
                          <h5 className="font-mono text-cyan-300 text-sm mb-1">pi()</h5>
                          <p className="text-blue-100 text-xs">Returns π (3.14159...)</p>
                        </div>
                        <div className="bg-slate-700/30 rounded p-3">
                          <h5 className="font-mono text-cyan-300 text-sm mb-1">e()</h5>
                          <p className="text-blue-100 text-xs">Returns Euler's number (2.71828...)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Hyperbolic Functions</h4>
                      <div className="space-y-2">
                        {[
                          'sinh(x) - Hyperbolic sine',
                          'cosh(x) - Hyperbolic cosine', 
                          'tanh(x) - Hyperbolic tangent',
                          'asinh(x) - Inverse hyperbolic sine',
                          'acosh(x) - Inverse hyperbolic cosine',
                          'atanh(x) - Inverse hyperbolic tangent'
                        ].map((func, index) => (
                          <div key={index} className="bg-slate-700/30 rounded p-2">
                            <code className="text-cyan-300 text-xs">{func}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* String Functions Section */}
            <motion.section
              id="strings"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Type className="text-cyan-400" />
                String Functions
              </h2>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { 
                      name: 'len(str)', 
                      desc: 'Returns length of string (also works with arrays)',
                      example: 'len("Hello") // 5'
                    },
                    { 
                      name: 'upper(str)', 
                      desc: 'Converts string to uppercase',
                      example: 'upper("hello") // "HELLO"'
                    },
                    { 
                      name: 'lower(str)', 
                      desc: 'Converts string to lowercase',
                      example: 'lower("HELLO") // "hello"'
                    },
                    { 
                      name: 'split(str, delimiter)', 
                      desc: 'Splits string into array',
                      example: 'split("a,b,c", ",") // ["a","b","c"]'
                    },
                    { 
                      name: 'reverse(str)', 
                      desc: 'Reverses a string',
                      example: 'reverse("hello") // "olleh"'
                    },
                    { 
                      name: 'join(arr, delimiter)', 
                      desc: 'Joins array elements into string',
                      example: 'join(["a","b"], "-") // "a-b"'
                    },
                  ].map((func, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">{func.name}</h4>
                      <p className="text-blue-100 text-sm mb-3">{func.desc}</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">{func.example}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Array Functions Section */}
            <motion.section
              id="arrays"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <List className="text-cyan-400" />
                Array Functions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Basic Array Operations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { 
                        name: 'push(arr, ...items)', 
                        desc: 'Adds items to array and returns modified array',
                        example: 'push([1,2], 3, 4) // [1,2,3,4]'
                      },
                      { 
                        name: 'pop(arr)', 
                        desc: 'Removes last item and returns modified array',
                        example: 'pop([1,2,3]) // [1,2]'
                      },
                      { 
                        name: 'sort(arr, compareFn?)', 
                        desc: 'Sorts array and returns it',
                        example: 'sort([3,1,2]) // [1,2,3]'
                      },
                      { 
                        name: 'reverse(arr)', 
                        desc: 'Reverses array and returns it',
                        example: 'reverse([1,2,3]) // [3,2,1]'
                      },
                      { 
                        name: 'slice(arr, start, end)', 
                        desc: 'Returns new sliced array',
                        example: 'slice([1,2,3,4], 1, 3) // [2,3]'
                      },
                      { 
                        name: 'includes(arr, value)', 
                        desc: 'Checks if array contains value',
                        example: 'includes([1,2,3], 2) // true'
                      },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                        <h4 className="font-mono text-cyan-300 text-sm mb-2">{func.name}</h4>
                        <p className="text-blue-100 text-xs mb-3">{func.desc}</p>
                        <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                          <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">{func.example}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Advanced Array Functions</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">filter(arr, callback)</h4>
                      <p className="text-blue-100 text-sm mb-3">Returns new filtered array</p>
                      <div className="bg-slate-800 overflow-auto rounded p-3">
                        <pre className="text-gray-300 text-xs">
                          <code>{`l evens = filter([1,2,3,4], f(x) { return x % 2 == 0 })
// Result: [2, 4]`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">map(arr, callback)</h4>
                      <p className="text-blue-100 text-sm mb-3">Returns new mapped array</p>
                      <div className="bg-slate-800 overflow-auto rounded p-3">
                        <pre className="text-gray-300 text-xs">
                          <code>{`l doubled = map([1,2,3], f(x) { return x * 2 })
// Result: [2, 4, 6]`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">newArr(arr, size, fillValue?)</h4>
                      <p className="text-blue-100 text-sm mb-3">Creates new array from existing with specified size and fill value</p>
                      <div className="bg-slate-800 overflow-auto rounded p-3">
                        <pre className="text-gray-300 text-xs">
                          <code>{`l zeros = newArr([], 5, 0)  // [0, 0, 0, 0, 0]`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* HTTP Functions Section */}
            <motion.section
              id="http"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="text-cyan-400" />
                HTTP Functions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Basic HTTP Requests</h3>
                  <div className="space-y-4">
                    {[
                      { 
                        name: 'httpGet(url, parseType?)', 
                        desc: 'Makes HTTP GET request',
                        example: `l promise = httpGet("https://api.example.com/data")
awaitPromise(promise, f(data) { print(data) }, f(err) { print(err) })`
                      },
                      { 
                        name: 'httpPost(url, data)', 
                        desc: 'Makes HTTP POST request with JSON data',
                        example: `l promise = httpPost("https://api.example.com/users", '{"name":"John"}')
awaitPromise(promise, f(response) { print("Created!") }, f(err) { print(err) })`
                      },
                      { 
                        name: 'httpPut(url, data)', 
                        desc: 'Makes HTTP PUT request with JSON data',
                        example: `httpPut("https://api.example.com/users/1", '{"name":"Jane"}')`
                      },
                      { 
                        name: 'httpDelete(url)', 
                        desc: 'Makes HTTP DELETE request',
                        example: `httpDelete("https://api.example.com/users/1")`
                      },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                        <h4 className="font-mono text-cyan-300 mb-2">{func.name}</h4>
                        <p className="text-blue-100 text-sm mb-3">{func.desc}</p>
                        <div className="bg-slate-800 rounded p-3">
                          <pre className="text-gray-300 text-xs overflow-x-auto">
                            <code>{func.example}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Promise Handling</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">awaitPromise(promise, onSuccess, onError)</h4>
                      <p className="text-blue-100 text-sm mb-3">Handles async operations</p>
                      <div className="bg-slate-800 rounded p-3">
                        <pre className="text-gray-300 text-xs">
                          <code>{`l promise = httpGet("https://api.example.com/user")
awaitPromise(promise, f(userData) {
    print("User: " + userData)
}, f(error) {
    errorlog("Failed to fetch user:", error)
})`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">parseJson(jsonString) / stringifyJson(obj)</h4>
                      <p className="text-blue-100 text-sm mb-3">Safely parse and stringify JSON</p>
                      <div className="bg-slate-800 rounded p-3">
                        <pre className="text-gray-300 text-xs">
                          <code>{`l jsonStr = '{"name": "Alice", "age": 30}'
l userData = parseJson(jsonStr)
l backToJson = stringifyJson(userData)`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Date/Time Functions Section */}
            <motion.section
              id="datetime"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="text-cyan-400" />
                Date/Time Functions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Current Date/Time</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">now()</h4>
                      <p className="text-blue-100 text-sm mb-3">Returns current Date object</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">l currentDate = now()</code>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">timestamp()</h4>
                      <p className="text-blue-100 text-sm mb-3">Returns current timestamp in milliseconds</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">l ts = timestamp()</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Date Formatting</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'dateToISO(date)', desc: 'Converts date to ISO string', example: 'dateToISO(now())' },
                      { name: 'dateToLocal(date)', desc: 'Converts date to local string', example: 'dateToLocal(now())' },
                      { name: 'dateToShort(date)', desc: 'MM/DD/YYYY format', example: 'dateToShort(now())' },
                      { name: 'dateToLong(date)', desc: 'Long readable format', example: 'dateToLong(now())' },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-lg p-3">
                        <h4 className="font-mono text-cyan-300 text-sm mb-1">{func.name}</h4>
                        <p className="text-blue-100 text-xs mb-2">{func.desc}</p>
                        <code className="text-gray-400 text-xs">{func.example}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Date Calculations</h3>
                  <div className="space-y-3">
                    {[
                      { 
                        name: 'dateAdd(date, value, unit)', 
                        desc: 'Adds time to date (units: years, months, days, hours, minutes, seconds)',
                        example: 'dateAdd(now(), 7, "days")  // Add 7 days'
                      },
                      { 
                        name: 'dateDiffInDays(date1, date2)', 
                        desc: 'Returns difference in days',
                        example: 'dateDiffInDays(now(), futureDate)'
                      },
                      { 
                        name: 'dateStartOf(date, unit)', 
                        desc: 'Gets start of time period (year, month, day, hour)',
                        example: 'dateStartOf(now(), "day")  // Start of today'
                      },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-lg p-3">
                        <h4 className="font-mono text-cyan-300 text-sm mb-1">{func.name}</h4>
                        <p className="text-blue-100 text-xs mb-2">{func.desc}</p>
                        <code className="text-gray-400 text-xs">{func.example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* File System Functions Section */}
            <motion.section
              id="files"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Database className="text-cyan-400" />
                File System Functions
              </h2>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-mono text-cyan-300 mb-2">read(path, options?)</h4>
                    <p className="text-blue-100 text-sm mb-3">Reads file content (default encoding: utf-8)</p>
                    <div className="bg-slate-800 rounded p-3">
                      <pre className="text-gray-300 text-xs">
                        <code>{`l content = read("config.txt")
l jsonConfig = read("config.json")`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-mono text-cyan-300 mb-2">write(file, data)</h4>
                    <p className="text-blue-100 text-sm mb-3">Writes content to file</p>
                    <div className="bg-slate-800 rounded p-3">
                      <pre className="text-gray-300 text-xs">
                        <code>{`write("output.txt", "Hello World!")
write("data.json", stringifyJson(userData))`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-amber-900/20 rounded-lg border border-amber-400/30">
                  <p className="text-amber-200 text-sm">
                    <strong>Note:</strong> File system functions work in Node.js environments. 
                    Use these for server-side scripts, data processing, and configuration management.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Timer Functions Section */}
            <motion.section
              id="timers"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-cyan-400" />
                Timer Functions
              </h2>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-mono text-cyan-300 mb-2">Timeout(fn, delay)</h4>
                    <p className="text-blue-100 text-sm mb-3">Sets a timeout to execute function after delay (milliseconds)</p>
                    <div className="bg-slate-800 rounded p-3">
                      <pre className="text-gray-300 text-xs">
                        <code>{`l timeoutId = Timeout(f() { 
    print("This runs after 2 seconds")
}, 2000)`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="font-mono text-cyan-300 mb-2">Interval(fn, interval)</h4>
                    <p className="text-blue-100 text-sm mb-3">Sets an interval to execute function repeatedly</p>
                    <div className="bg-slate-800 rounded p-3">
                      <pre className="text-gray-300 text-xs">
                        <code>{`l intervalId = Interval(f() {
    print("This runs every second")
}, 1000)`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">stopTimeout(timeoutId)</h4>
                      <p className="text-blue-100 text-sm mb-3">Clears a timeout</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">stopTimeout(timeoutId)</code>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-mono text-cyan-300 mb-2">stopInterval(intervalId)</h4>
                      <p className="text-blue-100 text-sm mb-3">Clears an interval</p>
                      <div className="bg-slate-800 rounded p-3 sm:p-4 overflow-x-auto">
                        <code className="text-gray-300 text-xs sm:text-sm whitespace-pre">stopInterval(intervalId)</code>
                      </div>
                    </div>
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
                href="/docs" 
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <ArrowRight size={16} className="rotate-180" />
                Back to Documentation
              </a>
              <button
                onClick={() => scrollToSection('core')}
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
