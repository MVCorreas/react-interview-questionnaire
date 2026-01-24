"use client";
import Card from "./components/Card";
import Timer from "./components/Timer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 text-gray-900 dark:bg-black dark:text-gray-100">
      <div className="w-full max-w-3xl space-y-8">
        <Header />
        <section className="rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="space-y-6">
            <Card />
            <div className="flex justify-center">
              <Timer />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
