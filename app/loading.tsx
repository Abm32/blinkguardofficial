export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-solana-purple border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-300 text-lg">Loading BlinkGuard...</p>
      </div>
    </div>
  )
}

