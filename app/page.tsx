export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start p-8 md:p-16">
      
      {/* --- โซนที่ 1: Hero Section --- */}
      <div className="text-center space-y-6 max-w-3xl mt-16 flex flex-col items-center">
        
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-800 hover:border-blue-500 transition-all duration-500 mb-2 shadow-xl hover:shadow-blue-500/20">
          <img 
            src="/getstudentimageftp.jpg" 
            alt="Krittaphat Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-blue-400 font-semibold tracking-wide uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Krittaphat</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          I am passionate about Web Development, DevOps, and Creative Tech. 
          Always eager to learn new technologies and improve my skills.
        </p>
        
        <div className="flex justify-center gap-4 pt-6">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            View Projects
          </a>
          <a href="https://github.com/krittaphat054-lgtm" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-600 hover:border-white rounded-full font-medium transition-all duration-300">
            GitHub Profile
          </a>
        </div>
      </div>

      {/* --- โซนที่ 2: Projects Showcase --- */}
      <div id="projects" className="mt-32 w-full max-w-5xl scroll-mt-12">
        <h2 className="text-3xl font-bold border-b border-gray-800 pb-4 mb-8">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <a href="https://github.com/krittaphat054-lgtm/logistics-api" target="_blank" rel="noopener noreferrer" className="block">
            <div className="h-full bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-orange-500 transition-all duration-300 cursor-pointer hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">NEW</div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">Logistics Microservices</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                High-performance order processing API using Message Queue to handle massive concurrent requests.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">RabbitMQ</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Docker</span>
              </div>
            </div>
          </a>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h3 className="text-xl font-bold text-blue-400 mb-2">CI/CD & Kubernetes</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Automated deployment pipeline using GitHub Actions, Docker, and Kubernetes for scalable web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Docker</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">K8s</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">CI/CD</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-emerald-500 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Temple Website</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              A modern website showcasing the history and beauty of local temples, featuring clean design and responsive layout.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Tailwind</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Game Dev: Pha Pan Suk</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Created a 2D game named "Pha Pan Suk" using Unity. Currently studying and actively practicing 3D modeling with Blender.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Unity</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">C# / C++</span>
              <span className="px-3 py-1 border border-purple-500/50 text-purple-400 text-xs rounded-full font-medium">Blender</span>
            </div>
          </div>

        </div>
      </div>

      {/* --- โซนที่ 3: Experience, Education & Profile --- */}
      <div className="mt-20 w-full max-w-5xl pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* ฝั่งซ้าย: Experience & Education Timeline */}
          <div>
            <h2 className="text-3xl font-bold border-b border-gray-800 pb-4 mb-8 text-blue-400">Experience & Education</h2>
            <div className="space-y-8">
              
              {/* อัปเดตประสบการณ์ฝึกงาน */}
              <div className="relative pl-6 border-l-2 border-purple-500">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <h3 className="text-xl font-bold">IT Intern <span className="text-purple-300 text-sm font-normal ml-2">(4 Months)</span></h3>
                <p className="text-purple-400 text-sm font-semibold mb-2">Cyberpay Technology Co., Ltd.</p>
                <p className="text-gray-400 text-sm leading-relaxed">Completed a 4-month internship focused on full-cycle web development. Responsibilities included building websites and conducting rigorous system testing (QA) to ensure stability, performance, and bug-free user experiences.</p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <h3 className="text-xl font-bold">Chiang Mai Rajabhat University</h3>
                <p className="text-blue-400 text-sm font-semibold mb-2">2022 - 2025</p>
                <p className="text-gray-400 text-sm">Bachelor of Science in Computer Science</p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-800">
                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">Wangchinwittaya School</h3>
                <p className="text-gray-500 text-sm font-semibold mb-2">2013 - 2022</p>
                <p className="text-gray-400 text-sm">High School - Science and Mathematics Program</p>
              </div>

            </div>
          </div>

          {/* ฝั่งขวา: Soft Skills & Awards */}
          <div>
            <h2 className="text-3xl font-bold border-b border-gray-800 pb-4 mb-8 text-emerald-400">Profile & Awards</h2>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-6 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-4">Core Soft Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">💡</span>
                  <div>
                    <h4 className="font-semibold text-gray-200">Problem-Solving & Debugging</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Able to tackle unexpected errors calmly and find effective solutions (e.g., CI/CD pipelines, Docker, Server configurations).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🚀</span>
                  <div>
                    <h4 className="font-semibold text-gray-200">Fast Learner & Adaptable</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Quick to pick up new frameworks and technologies (Next.js, RabbitMQ, Bun) to meet enterprise demands.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">💪</span>
                  <div>
                    <h4 className="font-semibold text-gray-200">Resilience & Growth Mindset</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Highly driven, not afraid to fail, and always eager to tailor my skills to match industry requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-emerald-500/30 p-6 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">🏆 Outstanding Academic Award</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Awarded for Excellence in Computer Science at the National Science Week (2025).
              </p>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}