export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <section className="container mx-auto px-6 py-8 lg:px-8 h-screen flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1 overflow-hidden">
          {/* Image Section */}
          <div className="relative group flex-1 lg:flex-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative h-full">
              <img
                src="/assets/MattPortrait.jpeg"
                alt="Matt Portrait"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 flex flex-col flex-1 lg:flex-1 overflow-y-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
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
            <div className="space-y-4 flex-1">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Building modern, responsive web applications with React,
                    TypeScript, and cutting-edge technologies.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Product Strategy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Bridging the gap between user needs and technical
                    implementation through data-driven decisions.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Data Analytics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Transforming raw data into actionable insights to drive
                    product innovation and growth.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    User Experience
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Designing intuitive interfaces that prioritize user needs
                    and create meaningful interactions.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Team Leadership
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Leading cross-functional teams to deliver exceptional
                    products that exceed user expectations.
                  </p>
                </div>

                <div className="group hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
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
