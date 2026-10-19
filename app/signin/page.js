import Layout from "../home/Layout";
import Image from "next/image";

export const metadata = {
  title: "Sign In - Localhost",
  description: "Sign in to your Localhost account",
  alternates: {
    canonical: "https://localhost.com/signin",
  },
};

export default function SignInPage() {
  return (
    <Layout>
      <section className="relative min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/fd86f8ae0e6c5209160eb709c1f7ae052ffd8c5a.jpg"
          alt="Mountain landscape background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-[450px]">
          <h1 className="text-2xl font-bold">Sign in</h1>

          <form className="mt-6 flex flex-col gap-4" aria-label="Sign in form">
            <div className="flex items-center border border-neutral-300 rounded-lg px-4 py-3">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 outline-none text-sm"
              />
              <span className="text-neutral-400">👤</span>
            </div>

            <div className="flex items-center border border-neutral-300 rounded-lg px-4 py-3">
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="flex-1 outline-none text-sm"
              />
              <span className="text-neutral-400">🔒</span>
            </div>

            <button
              type="submit"
              className="bg-teal-500 text-white py-3 rounded-lg font-semibold"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <hr className="flex-1 border-neutral-300" />
            <span className="text-sm text-neutral-500">Or sign in with</span>
            <hr className="flex-1 border-neutral-300" />
          </div>

          <div className="flex gap-4 justify-center">
            <button aria-label="Sign in with Google" className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-3">
              <span>G</span>
              <span className="text-sm">Google</span>
            </button>
            <button aria-label="Sign in with Facebook" className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-3">
              <span>f</span>
              <span className="text-sm">Facebook</span>
            </button>
            <button aria-label="Sign in with Apple" className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-3">
              <span>🍎</span>
              <span className="text-sm">Apple</span>
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-neutral-500">
            Don&apos;t have an account yet? <a href="/signup" className="text-teal-500 font-semibold">Sign up</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}