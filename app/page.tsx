export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start p-8 md:p-16">
      
      {/* --- โซนที่ 1: Hero Section --- */}
      <div className="text-center space-y-6 max-w-3xl mt-20">
        <p className="text-blue-400 font-semibold tracking-wide uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Krittaphat</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          I am passionate about Web Development, DevOps, and Creative Tech. 
          I love building modern applications and scalable infrastructure.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 border border-gray-600 hover:border-white rounded-full font-medium transition-all duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* --- โซนที่ 2: Projects Showcase --- */}
      <div className="mt-32 w-full max-w-5xl pb-20">
        <h2 className="text-3xl font-bold border-b border-gray-800 pb-4 mb-8">Featured Projects</h2>
        
        {/* กล่อง Grid เรียงผลงาน 3 ช่อง */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* ผลงานที่ 1: DevOps & K8s */}
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

          {/* ผลงานที่ 2: Web Dev (แก้ชื่อเป็น Temple Website) */}
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

          {/* ผลงานที่ 3: Creative Tech */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-all duration-300 cursor-pointer hover:-translate-y-2">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Creative Tech</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              3D modeling with Blender, game development in Unity, and 2D art creation in Clip Studio Paint.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Unity</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">Blender</span>
              <span className="px-3 py-1 bg-gray-800 text-xs rounded-full font-medium">C#</span>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}