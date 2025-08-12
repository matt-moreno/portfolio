import { X, ExternalLink, LucideIcon } from "lucide-react";

export interface BannerData {
  title: string;
  description: string;
  shortDescription: string;
  buttonText: string;
  buttonUrl: string;
  icon?: LucideIcon;
  isDismissible?: boolean;
}

interface BannerProps {
  data: BannerData;
  isVisible?: boolean;
  onDismiss?: () => void;
}

export default function Banner({
  data,
  isVisible = true,
  onDismiss,
}: BannerProps) {
  if (!isVisible) return null;

  const handleButtonClick = () => {
    window.open(data.buttonUrl, "_blank", "noopener,noreferrer");
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  const IconComponent = data.icon;

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white shadow-lg z-50 border-b border-slate-600/30">
      {/* Desktop: Account for sidebar width */}
      <div className="ml-0 md:ml-[300px] transition-all duration-300">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              {IconComponent && (
                <IconComponent className="h-6 w-6 text-blue-400 animate-pulse flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium">
                  <span className="font-bold">{data.title}</span>
                  <span className="hidden sm:inline">
                    {" "}
                    - {data.description}
                  </span>
                  <span className="sm:hidden"> {data.shortDescription}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={handleButtonClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center space-x-2 shadow-md"
              >
                <span>{data.buttonText}</span>
                <ExternalLink className="h-4 w-4" />
              </button>

              {data.isDismissible && (
                <button
                  onClick={handleDismiss}
                  className="text-slate-300 hover:text-white transition-colors duration-200 p-1"
                  aria-label="Close banner"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      </div>
    </div>
  );
}
