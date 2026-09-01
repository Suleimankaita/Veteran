import React, { useMemo, useState } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Mail,
  LockKeyhole,
  User,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  KeyRound,
  Sparkles,
} from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    identifier: "",
    password: "",
    confirmPassword: "",
    accountType: "member",
    remember: false,
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* ============================================================
     INPUT HANDLER
  ============================================================ */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setMessage("");
  };

  /* ============================================================
     PASSWORD STRENGTH
  ============================================================ */

  const passwordRules = useMemo(
    () => ({
      length: form.password.length >= 8,
      uppercase: /[A-Z]/.test(form.password),
      number: /[0-9]/.test(form.password),
      special: /[^A-Za-z0-9]/.test(form.password),
    }),
    [form.password]
  );

  const passwordScore =
    Object.values(passwordRules).filter(Boolean).length;

  /* ============================================================
     CHANGE MODE
  ============================================================ */

  const changeMode = (newMode) => {
    setMode(newMode);
    setError("");
    setMessage("");
    setLoading(false);
  };

  /* ============================================================
     LOGIN
  ============================================================ */

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.identifier.trim()) {
      setError("Please enter your email or username.");
      return;
    }

    if (!form.password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      /*
        CONNECT YOUR API HERE

        const response = await fetch(
          "/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              identifier: form.identifier,
              password: form.password,
              remember: form.remember,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
      */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setMessage("Login successful. Redirecting...");

      // Example:
      // window.location.href = "/dashboard";

    } catch (err) {
      setError(
        err.message || "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     SIGNUP
  ============================================================ */

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }

    if (!form.lastName.trim()) {
      setError("Please enter your last name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (passwordScore < 3) {
      setError(
        "Please create a stronger password."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.acceptTerms) {
      setError(
        "Please accept the organization terms."
      );
      return;
    }

    setLoading(true);

    try {
      /*
        CONNECT YOUR API HERE

        IMPORTANT:
        Never allow the frontend to create an ADMIN account.

        Send only:

        {
          firstName,
          lastName,
          email,
          phone,
          password,
          accountType
        }

        Your backend decides the final role.
      */

      await new Promise((resolve) => setTimeout(resolve, 1300));

      setMessage(
        "Your RHV account has been created successfully."
      );

      setTimeout(() => {
        setMode("login");

        setForm((prev) => ({
          ...prev,
          identifier: prev.email,
          password: "",
          confirmPassword: "",
        }));

        setMessage("");
      }, 1800);

    } catch (err) {
      setError(
        err.message ||
          "Unable to create your account."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     FORGOT PASSWORD
  ============================================================ */

  const handleForgot = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      /*
        CONNECT PASSWORD RESET API HERE
      */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setMessage(
        "If an account exists with this email, password reset instructions have been sent."
      );
    } catch (err) {
      setError(
        err.message ||
          "Unable to process your request."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     MAIN
  ============================================================ */

  return (
    <div className="min-h-screen bg-[#f6faf8] text-slate-900">

      {/* ======================================================
          DESKTOP GRID
      ====================================================== */}

      <div className="grid min-h-screen lg:grid-cols-[46%_54%]">

        {/* ====================================================
            LEFT BRAND AREA
        ==================================================== */}

        <section className="relative hidden overflow-hidden bg-[#064e3b] lg:block">

          {/* Decorative circles */}

          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-200/10 blur-3xl" />

          {/* Grid */}

          <div className="absolute inset-0 opacity-[0.035]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative z-10 flex min-h-screen flex-col justify-between p-12 xl:p-16">

            {/* BRAND */}

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-xs font-black text-white backdrop-blur">
                RHV
              </div>

              <div>
                <h2 className="text-sm font-black tracking-wide text-white">
                  RENEWED HOPE
                </h2>

                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-200">
                  Veterans
                </p>
              </div>

            </div>

            {/* CENTER */}

            <div className="max-w-xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">

                <Sparkles
                  size={13}
                  className="text-emerald-200"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                  Renewed Hope Veterans
                </span>

              </div>

              <h1 className="text-5xl font-black leading-[1.04] tracking-tight text-white xl:text-6xl">

                Honoring service.

                <br />

                <span className="text-emerald-200">
                  Empowering futures.
                </span>

              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-emerald-50/70">
                A connected organizational platform created
                to strengthen the veteran community, coordinate
                programs, manage activities, and build meaningful
                opportunities.
              </p>

              {/* FEATURE CARDS */}

              <div className="mt-10 grid grid-cols-3 gap-3">

                <FeatureCard
                  icon={ShieldCheck}
                  title="Secure"
                  description="Protected access"
                />

                <FeatureCard
                  icon={Users}
                  title="Community"
                  description="Connected people"
                />

                <FeatureCard
                  icon={HeartHandshake}
                  title="Impact"
                  description="Meaningful support"
                />

              </div>

              {/* STAT */}

              <div className="mt-10 flex items-center gap-8">

                <div>
                  <p className="text-2xl font-black text-white">
                    RHV
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-widest text-emerald-100/40">
                    Organization
                  </p>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-black text-white">
                    Community
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-widest text-emerald-100/40">
                    Together
                  </p>
                </div>

              </div>

            </div>

            {/* FOOTER */}

            <div className="flex items-center justify-between border-t border-white/10 pt-6">

              <p className="text-[9px] text-emerald-100/40">
                © {new Date().getFullYear()} Renewed Hope Veterans
              </p>

              <p className="text-[9px] text-emerald-100/30">
                Organization Platform
              </p>

            </div>

          </div>

        </section>

        {/* ====================================================
            RIGHT AUTH AREA
        ==================================================== */}

        <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-10">

          <div className="w-full max-w-[470px]">

            {/* MOBILE BRAND */}

            <div className="mb-8 flex items-center gap-3 lg:hidden">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[10px] font-black text-emerald-700">
                RHV
              </div>

              <div>
                <p className="text-xs font-black">
                  RENEWED HOPE
                </p>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-emerald-600">
                  Veterans
                </p>
              </div>

            </div>


            {/* =================================================
                LOGIN
            ================================================= */}

            {mode === "login" && (

              <div className="animate-[fadeIn_.3s_ease-out]">

                <Header
                  icon={ShieldCheck}
                  title="Welcome back"
                  description="Sign in to access your RHV organization account."
                />

                <Status
                  error={error}
                  message={message}
                />

                <form
                  onSubmit={handleLogin}
                  className="mt-8 space-y-5"
                >

                  <Input
                    label="Email or Username"
                    name="identifier"
                    value={form.identifier}
                    onChange={handleChange}
                    placeholder="Enter your email or username"
                    icon={Mail}
                  />

                  <PasswordInput
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    visible={showPassword}
                    setVisible={setShowPassword}
                  />

                  <div className="flex items-center justify-between">

                    <label className="flex cursor-pointer items-center gap-2">

                      <input
                        type="checkbox"
                        name="remember"
                        checked={form.remember}
                        onChange={handleChange}
                        className="h-3.5 w-3.5 accent-emerald-600"
                      />

                      <span className="text-[9px] text-slate-500">
                        Keep me signed in
                      </span>

                    </label>

                    <button
                      type="button"
                      onClick={() => changeMode("forgot")}
                      className="text-[9px] font-bold text-emerald-600"
                    >
                      Forgot password?
                    </button>

                  </div>

                  <SubmitButton
                    loading={loading}
                    text="Sign in"
                    loadingText="Signing in..."
                  />

                </form>

                <Divider />

                <p className="text-center text-[10px] text-slate-400">

                  Don't have an account?

                  <button
                    onClick={() => changeMode("signup")}
                    className="ml-1 font-bold text-emerald-600"
                  >
                    Create an account
                  </button>

                </p>

                <SecurityNote />

              </div>
            )}


            {/* =================================================
                SIGNUP
            ================================================= */}

            {mode === "signup" && (

              <div className="animate-[fadeIn_.3s_ease-out]">

                <Header
                  icon={User}
                  title="Join RHV"
                  description="Create your account and become part of the RHV community."
                />

                <Status
                  error={error}
                  message={message}
                />

                <form
                  onSubmit={handleSignup}
                  className="mt-7 space-y-4"
                >

                  {/* NAME */}

                  <div className="grid grid-cols-2 gap-3">

                    <Input
                      label="First Name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                    />

                    <Input
                      label="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                    />

                  </div>

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    icon={Mail}
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    icon={Phone}
                  />

                  {/* ACCOUNT TYPE */}

                  <div>

                    <label className="mb-2 block text-[10px] font-bold text-slate-700">
                      Account Type
                    </label>

                    <div className="grid grid-cols-2 gap-3">

                      <AccountType
                        selected={
                          form.accountType === "member"
                        }
                        title="Member"
                        description="Join the RHV community"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            accountType: "member",
                          }))
                        }
                      />

                      <AccountType
                        selected={
                          form.accountType === "volunteer"
                        }
                        title="Volunteer"
                        description="Support RHV programs"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            accountType: "volunteer",
                          }))
                        }
                      />

                    </div>

                  </div>

                  {/* PASSWORD */}

                  <PasswordInput
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    visible={showPassword}
                    setVisible={setShowPassword}
                  />

                  {/* STRENGTH */}

                  {form.password && (
                    <div>

                      <div className="flex gap-1">

                        {[1, 2, 3, 4].map((level) => (

                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              passwordScore >= level
                                ? "bg-emerald-500"
                                : "bg-slate-100"
                            }`}
                          />

                        ))}

                      </div>

                      <p className="mt-2 text-[8px] text-slate-400">
                        Use 8+ characters with uppercase,
                        numbers and special characters.
                      </p>

                    </div>
                  )}

                  <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    visible={showConfirm}
                    setVisible={setShowConfirm}
                  />

                  {/* TERMS */}

                  <label className="flex cursor-pointer items-start gap-2">

                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={form.acceptTerms}
                      onChange={handleChange}
                      className="mt-0.5 h-3.5 w-3.5 accent-emerald-600"
                    />

                    <span className="text-[9px] leading-4 text-slate-400">
                      I agree to the RHV organization's
                      <span className="mx-1 font-bold text-emerald-600">
                        Terms
                      </span>
                      and
                      <span className="ml-1 font-bold text-emerald-600">
                        Privacy Policy
                      </span>
                    </span>

                  </label>

                  <SubmitButton
                    loading={loading}
                    text="Create account"
                    loadingText="Creating account..."
                  />

                </form>

                <Divider />

                <p className="text-center text-[10px] text-slate-400">

                  Already have an account?

                  <button
                    onClick={() => changeMode("login")}
                    className="ml-1 font-bold text-emerald-600"
                  >
                    Sign in
                  </button>

                </p>

              </div>
            )}


            {/* =================================================
                FORGOT PASSWORD
            ================================================= */}

            {mode === "forgot" && (

              <div className="animate-[fadeIn_.3s_ease-out]">

                <button
                  onClick={() => changeMode("login")}
                  className="mb-8 flex items-center gap-2 text-[9px] font-bold text-slate-400 transition hover:text-emerald-600"
                >
                  <ArrowLeft size={13} />
                  Back to login
                </button>

                <Header
                  icon={KeyRound}
                  title="Reset your password"
                  description="Enter your email and we'll send instructions to reset your RHV password."
                />

                <Status
                  error={error}
                  message={message}
                />

                <form
                  onSubmit={handleForgot}
                  className="mt-8 space-y-5"
                >

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    icon={Mail}
                  />

                  <SubmitButton
                    loading={loading}
                    text="Send reset link"
                    loadingText="Sending..."
                  />

                </form>

                <div className="mt-7 text-center">

                  <button
                    onClick={() => changeMode("login")}
                    className="text-[10px] font-bold text-emerald-600"
                  >
                    Return to login
                  </button>

                </div>

              </div>
            )}

          </div>

        </section>

      </div>

      {/* ======================================================
          GLOBAL ANIMATION
      ====================================================== */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}


/* ==============================================================
   HEADER
============================================================== */

function Header({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div>

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
        <Icon size={21} />
      </div>

      <h1 className="text-3xl font-black tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
        {description}
      </p>

    </div>
  );
}


/* ==============================================================
   INPUT
============================================================== */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-bold text-slate-700"
      >
        {label}
      </label>

      <div className="relative">

        {Icon && (
          <Icon
            size={15}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-12 w-full rounded-xl border border-slate-200 bg-white text-xs text-slate-900 outline-none transition placeholder:text-slate-300 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 ${
            Icon
              ? "pl-10 pr-4"
              : "px-4"
          }`}
        />

      </div>

    </div>
  );
}


/* ==============================================================
   PASSWORD INPUT
============================================================== */

function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  visible,
  setVisible,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-bold text-slate-700"
      >
        {label}
      </label>

      <div className="relative">

        <LockKeyhole
          size={15}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-11 text-xs outline-none transition placeholder:text-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
        />

        <button
          type="button"
          onClick={() =>
            setVisible((prev) => !prev)
          }
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
        >

          {visible ? (
            <EyeOff size={15} />
          ) : (
            <Eye size={15} />
          )}

        </button>

      </div>

    </div>
  );
}


/* ==============================================================
   ACCOUNT TYPE
============================================================== */

function AccountType({
  selected,
  title,
  description,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-xl border p-3 text-left transition-all duration-200 ${
        selected
          ? "border-emerald-500 bg-emerald-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-emerald-200"
      }`}
    >

      {selected && (
        <span className="absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Check size={9} />
        </span>
      )}

      <p
        className={`text-[10px] font-bold ${
          selected
            ? "text-emerald-700"
            : "text-slate-700"
        }`}
      >
        {title}
      </p>

      <p className="mt-1 pr-4 text-[8px] leading-3 text-slate-400">
        {description}
      </p>

    </button>
  );
}


/* ==============================================================
   SUBMIT BUTTON
============================================================== */

function SubmitButton({
  loading,
  text,
  loadingText,
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl disabled:pointer-events-none disabled:opacity-70"
    >

      {loading ? (
        <>
          <Loader2
            size={16}
            className="animate-spin"
          />

          {loadingText}
        </>
      ) : (
        <>
          {text}

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </>
      )}

    </button>
  );
}


/* ==============================================================
   STATUS
============================================================== */

function Status({
  error,
  message,
}) {
  if (!error && !message) return null;

  return (
    <div
      className={`mt-6 rounded-xl border px-4 py-3 ${
        error
          ? "border-red-100 bg-red-50"
          : "border-emerald-100 bg-emerald-50"
      }`}
    >

      <p
        className={`text-[10px] font-semibold ${
          error
            ? "text-red-600"
            : "text-emerald-700"
        }`}
      >
        {error || message}
      </p>

    </div>
  );
}


/* ==============================================================
   DIVIDER
============================================================== */

function Divider() {
  return (
    <div className="my-7 flex items-center gap-4">

      <div className="h-px flex-1 bg-slate-100" />

      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300">
        RHV
      </span>

      <div className="h-px flex-1 bg-slate-100" />

    </div>
  );
}


/* ==============================================================
   SECURITY NOTE
============================================================== */

function SecurityNote() {
  return (
    <div className="mt-7 flex items-center justify-center gap-2 text-[8px] text-slate-400">

      <ShieldCheck size={11} />

      Secure organization authentication

    </div>
  );
}


/* ==============================================================
   FEATURE CARD
============================================================== */

function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">

      <Icon
        size={17}
        className="text-emerald-200"
      />

      <p className="mt-4 text-[10px] font-bold text-white">
        {title}
      </p>

      <p className="mt-1 text-[8px] text-emerald-100/50">
        {description}
      </p>

    </div>
  );
}