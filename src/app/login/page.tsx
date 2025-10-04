import { FormClientSide } from "./formClientSide";

export default function Login() {
  return (
    <div className="font-sans flex items-center justify-between min-h-screen bg-white">
      <section className="bg-zinc-800 w-full h-screen rounded-r-4xl pl-10 pt-10">
        <p className="text-white">
          Welcome to <span className="font-bold">hIO-js</span> Admin
        </p>
        <h1 className="text-white font-bold text-3xl max-w-2xl mt-5">
          The place where productivity meets simplicity
        </h1>
      </section>
      <section className="bg-white w-full h-screen flex justify-center items-center p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="text-4xl font-bold mb-2">Get Started Now</h1>
          <p className="text-slate-400 mb-10">
            Please log in with your credentials to continue
          </p>
          <FormClientSide />
        </div>
      </section>
    </div>
  );
}
