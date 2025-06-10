export default function Bellabeat() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Bellabeat Case Study
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Google Coursera Data Analytics Capstone Project
          </p>
        </div>

        <div className="relative w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <iframe
            src="https://www.kaggle.com/embed/morenomatt/bellabeat-case-study-r?kernelSessionId=180358905"
            className="w-full h-[80vh] lg:h-[85vh] border-0"
            title="Bellabeat Case Study | R"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
