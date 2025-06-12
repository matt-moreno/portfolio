export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <section className="container mx-auto px-6 py-16 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative">
              <img
                src="/assets/MattPortrait.jpeg"
                alt="Matt Portrait"
                className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nec ultrices libero, et bibendum massa. Nulla facilisi. Proin
                vel mauris felis. Integer vehicula lorem non sapien facilisis, a
                faucibus nisi blandit. Vivamus in ultricies ipsum, at malesuada
                lorem. Sed pharetra lorem non risus volutpat, in venenatis
                ligula vulputate. Nulla id sem at nisi vehicula tristique.
                Aliquam erat volutpat. Ut sit amet turpis sed arcu tincidunt
                posuere. Mauris interdum arcu vitae orci varius tincidunt.
                Suspendisse potenti. Nam vestibulum, turpis in condimentum
                pharetra, sapien risus interdum ipsum, non volutpat urna ligula
                non enim.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Frontend Development
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Building modern, responsive web applications with React,
                    TypeScript, and cutting-edge technologies.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Product Strategy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Bridging the gap between user needs and technical
                    implementation through data-driven decisions.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Data Analytics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Transforming raw data into actionable insights to drive
                    product innovation and growth.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    User Experience
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Designing intuitive interfaces that prioritize user needs
                    and create meaningful interactions.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Team Leadership
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Leading cross-functional teams to deliver exceptional
                    products that exceed user expectations.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Innovation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Constantly exploring new technologies and methodologies to
                    push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
