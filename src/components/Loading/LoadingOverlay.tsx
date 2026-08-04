import Spinner from "./Spinner";

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay = ({ message = "Loading..." }: LoadingOverlayProps) => {
  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        dark:bg-black/70
        backdrop-blur-sm
        z-50
        flex
        items-center
        justify-center"
      role="alert"
      aria-live="polite"
      aria-busy="true">
      <div
        className="
          bg-white
          dark:bg-slate-900
          rounded-2xl
          p-8
          flex
          flex-col
          items-center
          gap-4
          shadow-2xl">
        <Spinner size="lg" />
        <p className="text-slate-900 dark:text-white font-semibold">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
