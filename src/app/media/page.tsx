export default function MediaPage() {
  return (
    <div className="max-h-screen max-w-screen flex flex-col lg:px-40 md:px-32 sm:px-20 px-4 space-y-10 lg:space-y-20">
      <div className="flex justify-center p-2 sm:text-7xl text-5xl font-bold lg:mt-10">
        MEDIA
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>
  );
}
