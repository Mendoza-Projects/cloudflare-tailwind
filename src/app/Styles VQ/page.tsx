export default function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-gray-300 z-10"></div>
    </div>
  );
}
