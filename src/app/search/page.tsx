import "../globals.css";

export default function Search() {
  return (
    <main className="">
      <div className="flex flex-col items-center w-full">
        <h1 className=" bg-gradient-to-b from-amber-600 to-amber-700 text-transparent bg-clip-text text-5xl font-black uppercase text-center mt-5">Search</h1>
        <h2 className=" text-amber-700 text-xl font-bold text-center my-2">by rock type or locality</h2>

        <div id="tableDisplay" className="flex flex-col w-11/12 min-h-screen bg-slate-500">
          <p className="text-black ">test</p>
        </div>
      </div>
    </main>
  );
}