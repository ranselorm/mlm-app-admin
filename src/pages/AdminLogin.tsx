import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const LoginForm = () => {
  const [email, setEmail] = useState("admin@yahwe-eita.com");
  const [password, setPassword] = useState("p@ssw0rd123");
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);

  const loginMutation = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          // setUser(data.user);
          console.log(data);
          navigate("/", { replace: true });
          console.log("Login success");
        },
      }
    );
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-md">
        {/* Left Side - Form */}
        <div className="w-full p-8 flex flex-col justify-center mx-auto">
          <div className="flex items-center justify-center mb-6 w-10 h-10 mx-auto">
            <img src="/icon.png" alt="Logo" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome back!
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label className="text-sm mb-2 text-gray-500">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded border border-gray-300 focus-visible:ring-0"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-500 mb-2">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus-visible:ring-0 rounded border border-gray-300"
              />
            </div>
            <div className="flex items-center justify-end text-sm">
              <a href="#" className="text-main hover:underline">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full bg-main text-white hover:bg-main cursor-pointer mt-4"
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
