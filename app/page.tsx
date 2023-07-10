export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto mt-4">
        <div className="flex">
          <div className="w-1/3 bg-red-500 h-20 m-2" />
          <div className="w-1/3 bg-red-500 h-20 m-2" />
          <div className="w-1/3 bg-red-500 h-20 m-2" />
        </div>
        <div className="flex">
          <div className="w-1/3 bg-red-500 h-20 m-2" />
          <div className="w-1/3 bg-red-500 h-20 m-2" />
          <div className="w-1/3 bg-pink-500 h-20 m-2" />
        </div>
      </div>
    </main>
  );
}
