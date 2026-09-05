import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  UserCheck,
  Shield,
  ShieldCheck,
  Heart,
  Users,
  Flag,
  TrendingUp,
  Hand,
  Medal,
  GraduationCap,
  MapPin,
  Upload,
  X,
  Loader2,
  Check,
  CheckCircle2,
  KeyRound,
  UserPlus,
  Calendar,
  Briefcase,
  Building2,
  ChevronRight,
  CircleCheck,
  PersonStanding,
} from "lucide-react";
import { useLoginMutation, useRegMutation } from "../fetatures/ApiSlice";
import { motion, AnimatePresence } from "framer-motion";

import Member from "../assets/Member.png";
import { useDispatch, useSelector } from "react-redux";
import { Authenticate, SetToken } from "../fetatures/AppSlice";

export default function RHVAuth() {
  /* =========================================================
     DATA
  ========================================================= */

  const STATES = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory",
  ];

  const MEMBERSHIP_CATEGORIES = [
    {
      title: "Full Member",
      icon: UserCheck,
      description:
        "Active members committed to the vision and mission of RHV.",
    },
    {
      title: "Associate Member",
      icon: Users,
      description:
        "Supporters and partners contributing to our objectives.",
    },
    {
      title: "Volunteer",
      icon: Hand,
      description:
        "Individuals contributing their time and professional skills.",
    },
    {
      title: "Youth Member",
      icon: GraduationCap,
      description:
        "Young leaders building their future and communities.",
    },
    {
      title: "Honorary Member",
      icon: Medal,
      description:
        "Individuals recognized for exceptional contributions.",
    },
  ];

  const INTERESTS = [
    "Community Development",
    "Welfare & Support",
    "Leadership & Governance",
    "Healthcare Outreach",
    "Education & Training",
    "Environmental Projects",
    "Youth Development",
    "Event Planning",
  ];

  const EDUCATION_LEVELS = [
    "Primary Education",
    "Secondary Education",
    "OND / NCE",
    "HND",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
    "Other",
  ];

  const GENDERS = [
    "Male",
    "Female",
    "Prefer not to say",
  ];

  const MARITAL_STATUSES = [
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Prefer not to say",
  ];

  const INITIAL_FORM = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",

    phone: "",
    Username: "",
    email: "",
    address: "",

    country: "Nigeria",
    state: "",
    lga: "",
    ward: "",

    occupation: "",
    organization: "",
    skills: "",
    education: "",

    membershipCategory: "",
    interests: [],

    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",

    password: "",
    confirmPassword: "",

    termsAccepted: false,
    privacyAccepted: false,
    informationAccurate: false,
  };

  const [loginUser, { isLoading: isLoginLoading,isSuccess,isError,error }] = useLoginMutation();
  const [RegistrationApi, { isLoading: isReginLoading,isSuccess:isRegSuccess,isError:isRegerror,error:RegError }] = useRegMutation();

  /* =========================================================
     STATE
  ========================================================= */

  const [mode, setMode] = useState("login");

  const [form, setForm] =
    useState(INITIAL_FORM);

  const [loginForm, setLoginForm] =
    useState({
      email: "",
      password: "",
      remember: false,
    });

  const [errors, setErrors] =
    useState({});

  const [loginErrors, setLoginErrors] =
    useState({});

  const [currentStep, setCurrentStep] =
    useState(1);

  const [submitState, setSubmitState] =
    useState("idle");

  const [message, setMessage] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [
    showLoginPassword,
    setShowLoginPassword,
  ] = useState(false);

  const [photo, setPhoto] =
    useState(null);

  const [photoPreview, setPhotoPreview] =
    useState("");

  const fileInputRef =
    useRef(null);

  const fieldRefs =
    useRef({});

  /* =========================================================
     FIELD REF
  ========================================================= */

  const registerFieldRef = (
    name,
    element
  ) => {
    if (element) {
      fieldRefs.current[name] =
        element;
    }
  };

  /* =========================================================
     CLEAN PHOTO URL
  ========================================================= */

  useEffect(()=>{
    if(isError && error){

      
      setSubmitState("error");

      setMessage(
        error?.data?.message ||
          "An error occurred. Please try again."
      );
      // console.log(error)
        // const fieldErrors = error?.data?.message;
        // setMessage(fieldErrors);
        // setLoginErrors("success");
      
  }
},[isError,error])

  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(
          photoPreview
        );
      }
    };
  }, [photoPreview]);

  /* =========================================================
     PASSWORD STRENGTH
  ========================================================= */

  const passwordStrength = useMemo(() => {
    const password = form.password;

    let score = 0;

    if (password.length >= 8)
      score++;

    if (/[A-Z]/.test(password))
      score++;

    if (/[a-z]/.test(password))
      score++;

    if (/[0-9]/.test(password))
      score++;

    if (/[^A-Za-z0-9]/.test(password))
      score++;

    let label = "Very weak";

    if (score === 2)
      label = "Weak";

    if (score === 3)
      label = "Medium";

    if (score === 4)
      label = "Strong";

    if (score === 5)
      label = "Very strong";

    return {
      score,
      label,
    };
  }, [form.password]);

  /* =========================================================
     MODE SWITCH
  ========================================================= */

  const switchMode = (nextMode) => {
    setMode(nextMode);

    setErrors({});
    setLoginErrors({});

    setSubmitState("idle");
    setMessage("");

    if (nextMode === "signup") {
      setCurrentStep(1);
    }
  };

  /* =========================================================
     GENERIC FORM CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    const nextValue =
      type === "checkbox"
        ? checked
        : value;

    setForm((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    /*
     * IMPORTANT:
     * Clear the exact field error immediately.
     */
    setErrors((previous) => {
      const next = {
        ...previous,
      };

      delete next[name];

      /*
       * Password confirmation depends
       * on password.
       */
      if (
        name === "password" ||
        name === "confirmPassword"
      ) {
        delete next.confirmPassword;
      }

      return next;
    });

    setSubmitState("idle");
    setMessage("");
  };

  /* =========================================================
     LOGIN CHANGE
  ========================================================= */

  const handleLoginChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setLoginForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setLoginErrors((previous) => {
      const next = {
        ...previous,
      };

      delete next[name];

      return next;
    });

    setSubmitState("idle");
    setMessage("");
  };

  /* =========================================================
     INTERESTS
  ========================================================= */

  const handleInterestChange = (
    interest
  ) => {
    setForm((previous) => {
      const alreadySelected =
        previous.interests.includes(
          interest
        );

      return {
        ...previous,

        interests: alreadySelected
          ? previous.interests.filter(
              (item) =>
                item !== interest
            )
          : [
              ...previous.interests,
              interest,
            ],
      };
    });

    setErrors((previous) => {
      const next = {
        ...previous,
      };

      delete next.interests;

      return next;
    });

    setSubmitState("idle");
  };

  /* =========================================================
     PHOTO UPLOAD
  ========================================================= */

  const handlePhotoChange = (
    event
  ) => {
    const selectedFile =
      event.target.files?.[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowedTypes.includes(
        selectedFile.type
      )
    ) {
      setErrors((previous) => ({
        ...previous,
        photo:
          "Only JPG, PNG and WEBP images are allowed.",
      }));

      event.target.value = "";

      return;
    }

    if (
      selectedFile.size >
      2 * 1024 * 1024
    ) {
      setErrors((previous) => ({
        ...previous,
        photo:
          "Profile photo must not exceed 2MB.",
      }));

      event.target.value = "";

      return;
    }

    if (photoPreview) {
      URL.revokeObjectURL(
        photoPreview
      );
    }

    const preview =
      URL.createObjectURL(
        selectedFile
      );

    setPhoto(selectedFile);
    setPhotoPreview(preview);

    setErrors((previous) => {
      const next = {
        ...previous,
      };

      delete next.photo;

      return next;
    });

    setSubmitState("idle");
  };

  /* =========================================================
     REMOVE PHOTO
  ========================================================= */

  const removePhoto = () => {
    if (photoPreview) {
      URL.revokeObjectURL(
        photoPreview
      );
    }

    setPhoto(null);
    setPhotoPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* =========================================================
     SCROLL TO FIRST ERROR
  ========================================================= */

  const scrollToFirstError = (
    errorObject
  ) => {
    const firstError =
      Object.keys(errorObject)[0];

    if (!firstError) return;

    setTimeout(() => {
      const element =
        fieldRefs.current[
          firstError
        ];

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        if (
          typeof element.focus ===
          "function"
        ) {
          element.focus();
        }
      }
    }, 100);
  };

  /* =========================================================
     LOGIN VALIDATION
  ========================================================= */

  const validateLogin = () => {
    const nextErrors = {};

    const username =
      loginForm.email.trim();

    if (!username) {
      nextErrors.email =
        "Username is required.";
    } else if (
      username.length < 3
    ) {
      nextErrors.email =
        "Username must be at least 3 characters.";
    }

    if (!loginForm.password) {
      nextErrors.password =
        "Password is required.";
    }

    setLoginErrors(nextErrors);

    if (
      Object.keys(nextErrors).length
    ) {
      setTimeout(() => {
        const first =
          Object.keys(nextErrors)[0];

        fieldRefs.current[
          `login-${first}`
        ]?.focus();

        fieldRefs.current[
          `login-${first}`
        ]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }

    return (
      Object.keys(nextErrors)
        .length === 0
    );
  };

  /* =========================================================
     SIGNUP VALIDATION
  ========================================================= */

  const validateSignup = () => {
    const nextErrors = {};

    const firstName =
      form.firstName.trim();

    const lastName =
      form.lastName.trim();

    const phone =
      form.phone.trim();

    const email =
      form.email.trim();
      
    const Username =
      form.Username.trim();

    const address =
      form.address.trim();

    const lga =
      form.lga.trim();

    const ward =
      form.ward.trim();

    const occupation =
      form.occupation.trim();

    const emergencyName =
      form.emergencyName.trim();

    const emergencyRelationship =
      form.emergencyRelationship.trim();

    const emergencyPhone =
      form.emergencyPhone.trim();

    /* PERSONAL */

    if (!firstName) {
      nextErrors.firstName =
        "First name is required.";
    }

    if (!lastName) {
      nextErrors.lastName =
        "Last name is required.";
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth =
        "Date of birth is required.";
    }

    if (!form.gender) {
      nextErrors.gender =
        "Please select your gender.";
    }

    /* CONTACT */

    if (!phone) {
      nextErrors.phone =
        "Phone number is required.";
    } else if (
      phone.replace(/\D/g, "")
        .length < 10
    ) {
      nextErrors.phone =
        "Please enter a valid phone number.";
    }

    if (!email) {
      nextErrors.email =
        "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if(!Username){
      nextErrors.Username="Username is required"
    }

    if (!address) {
      nextErrors.address =
        "Home address is required.";
    }

    if (!form.state) {
      nextErrors.state =
        "Please select your state.";
    }

    if (!lga) {
      nextErrors.lga =
        "LGA is required.";
    }

    if (!ward) {
      nextErrors.ward =
        "Ward is required.";
    }

    /* MEMBERSHIP */

    if (!occupation) {
      nextErrors.occupation =
        "Occupation is required.";
    }

    if (!form.membershipCategory) {
      nextErrors.membershipCategory =
        "Please select a membership category.";
    }

    if (
      form.interests.length === 0
    ) {
      nextErrors.interests =
        "Please select at least one area of interest.";
    }

    /* EMERGENCY */

    if (!emergencyName) {
      nextErrors.emergencyName =
        "Emergency contact name is required.";
    }

    if (!emergencyRelationship) {
      nextErrors.emergencyRelationship =
        "Relationship is required.";
    }

    if (!emergencyPhone) {
      nextErrors.emergencyPhone =
        "Emergency phone number is required.";
    }

    /* PHOTO */

    if (!photo) {
      nextErrors.photo =
        "Please upload your profile photo.";
    }

    /* PASSWORD */

    if (!form.password) {
      nextErrors.password =
        "Create a password.";
    } else if (
      form.password.length < 8
    ) {
      nextErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      form.password !==
      form.confirmPassword
    ) {
      nextErrors.confirmPassword =
        "Passwords do not match.";
    }

    /* AGREEMENTS */

    if (!form.termsAccepted) {
      nextErrors.termsAccepted =
        "You must accept the Terms and Conditions.";
    }

    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted =
        "You must accept the Privacy Policy.";
    }

    if (!form.informationAccurate) {
      nextErrors.informationAccurate =
        "Please confirm that your information is accurate.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors)
        .length === 0
    );
  };

  /* =========================================================
     STEP VALIDATION
  ========================================================= */

  const validateCurrentStep =
    () => {
      const stepErrors = {};

      /* STEP 1 */

      if (currentStep === 1) {
        if (!form.firstName.trim()) {
          stepErrors.firstName =
            "First name is required.";
        }

        if (!form.lastName.trim()) {
          stepErrors.lastName =
            "Last name is required.";
        }

        if (!form.dateOfBirth) {
          stepErrors.dateOfBirth =
            "Date of birth is required.";
        }

        if (!form.gender) {
          stepErrors.gender =
            "Please select your gender.";
        }
      }

      /* STEP 2 */

      if (currentStep === 2) {
        if (!form.phone.trim()) {
          stepErrors.phone =
            "Phone number is required.";
        } else if (
          form.phone.replace(
            /\D/g,
            ""
          ).length < 10
        ) {
          stepErrors.phone =
            "Please enter a valid phone number.";
        }

        if (!form.email.trim()) {
          stepErrors.email =
            "Email address is required.";
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            form.email.trim()
          )
        ) {
          stepErrors.email =
            "Please enter a valid email address.";
        }

        if (!form.address.trim()) {
          stepErrors.address =
            "Home address is required.";
        }

        if (!form.state) {
          stepErrors.state =
            "Please select your state.";
        }

        if (!form.lga.trim()) {
          stepErrors.lga =
            "LGA is required.";
        }

        if (!form.ward.trim()) {
          stepErrors.ward =
            "Ward is required.";
        }
      }

      /* STEP 3 */

      if (currentStep === 3) {
        if (!form.occupation.trim()) {
          stepErrors.occupation =
            "Occupation is required.";
        }

        if (!form.membershipCategory) {
          stepErrors.membershipCategory =
            "Please select a membership category.";
        }

        if (
          form.interests.length ===
          0
        ) {
          stepErrors.interests =
            "Please select at least one area of interest.";
        }
      }

      /* STEP 4 */

      if (currentStep === 4) {
        if (!form.password) {
          stepErrors.password =
            "Create a password.";
        } else if (
          form.password.length < 8
        ) {
          stepErrors.password =
            "Password must contain at least 8 characters.";
        }

        if (!form.confirmPassword) {
          stepErrors.confirmPassword =
            "Please confirm your password.";
        } else if (
          form.password !==
          form.confirmPassword
        ) {
          stepErrors.confirmPassword =
            "Passwords do not match.";
        }

        if (!form.emergencyName.trim()) {
          stepErrors.emergencyName =
            "Emergency contact name is required.";
        }

        if (
          !form.emergencyRelationship.trim()
        ) {
          stepErrors.emergencyRelationship =
            "Relationship is required.";
        }

        if (!form.emergencyPhone.trim()) {
          stepErrors.emergencyPhone =
            "Emergency phone number is required.";
        }

        if (!photo) {
          stepErrors.photo =
            "Please upload your profile photo.";
        }

        if (!form.termsAccepted) {
          stepErrors.termsAccepted =
            "You must accept the Terms and Conditions.";
        }

        if (!form.privacyAccepted) {
          stepErrors.privacyAccepted =
            "You must accept the Privacy Policy.";
        }

        if (!form.informationAccurate) {
          stepErrors.informationAccurate =
            "Please confirm that your information is accurate.";
        }
      }

      setErrors((previous) => ({
        ...previous,
        ...stepErrors,
      }));

      if (
        Object.keys(stepErrors)
          .length > 0
      ) {
        scrollToFirstError(
          stepErrors
        );

        return false;
      }

      return true;
    };

  /* =========================================================
     NEXT STEP
  ========================================================= */

  const nextStep = () => {
    const valid =
      validateCurrentStep();

    if (!valid) {
      setSubmitState("error");
      return;
    }

    setSubmitState("idle");
    setMessage("");

    setCurrentStep(
      (previous) =>
        Math.min(previous + 1, 4)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     PREVIOUS STEP
  ========================================================= */

  const previousStep = () => {
    setSubmitState("idle");
    setMessage("");

    setCurrentStep(
      (previous) =>
        Math.max(previous - 1, 1)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     LOGIN
  ========================================================= */

  const dispatch=useDispatch()


  const m=useSelector(Authenticate);

  const handleLogin = async (
    event
  ) => {
    event.preventDefault();
    
    

    setSubmitState("idle");
    setMessage("");

    const valid =
      validateLogin();

    if (!valid) {
      setSubmitState("error");

      return;
    }

    setSubmitState("loading");

    try {

        const username = loginForm.email.trim();

        const UserLogn = await loginUser({
          Username: username,
          Password: loginForm.password,
        });

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            1000
          )
      );
      console.log(UserLogn)
      if(UserLogn?.data?.success){
        setSubmitState("success");
        dispatch(SetToken(UserLogn?.data?.
accessToken
))

  console.log(m)

        setMessage(
          "Login successful. Your authentication API can now be connected here."
        );

      }

    } catch (error) {
      setSubmitState("error");

      setMessage(
        error?.data?.message ||error?.message ||
          "Unable to sign in. Please try again."
      );
    }
  };

  /* =========================================================
     SIGNUP
  ========================================================= */

  const handleSignup = async (
    event
  ) => {
    event.preventDefault();

    setSubmitState("idle");
    setMessage("");

    const valid =
      validateSignup();

    if (!valid) {
      setSubmitState("error");

      scrollToFirstError(
        errors
      );

      return;
    }

    setSubmitState("loading");

    try {
      const formData =
        new FormData();

      Object.entries(form).forEach(
        ([key, value]) => {
          if (
            key === "interests"
          ) {
            value.forEach(
              (interest) => {
                formData.append(
                  "interests[]",
                  interest
                );
              }
            );
          } else {
            formData.append(
              key,
              String(value)
            );
          }
        }
      );

      if (photo) {
        formData.append(
          "photo",
          photo
        );
      }

      const ms=await RegistrationApi(formData)
      
      console.log(ms)

      /*
       * CONNECT YOUR BACKEND HERE
       *
       * Example:
       *
       * const response =
       *   await fetch(
       *     "/api/auth/register",
       *     {
       *       method: "POST",
       *       body: formData,
       *       credentials: "include",
       *     }
       *   );
       *
       * const data =
       *   await response.json();
       *
       * if (!response.ok) {
       *   throw new Error(
       *     data.message ||
       *       "Registration failed"
       *   );
       * }
       */

      console.log(
        "RHV registration data:",
        form
      );

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            1500
          )
      );

      setSubmitState("success");

      setMessage(
        "Your RHV membership application has been prepared successfully."
      );
    } catch (error) {
      setSubmitState("error");

      setMessage(
        error?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  /* =========================================================
     SHARED INPUT CLASS
  ========================================================= */

  const inputClass = (
    error,
    hasIcon = false
  ) =>
    `w-full ${
      hasIcon ? "pl-10" : "px-4"
    } pr-4 py-3.5 bg-white border rounded-xl text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 ${
      error
        ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        : "border-gray-200 hover:border-gray-300 focus:border-[#054226] focus:ring-4 focus:ring-[#054226]/10"
    }`;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="min-h-screen bg-[#f7f9f8] font-sans text-gray-900">

      <div className="min-h-screen grid lg:grid-cols-[0.82fr_1.18fr]">

        {/* =================================================
            LEFT BRAND AREA
        ================================================= */}

        <aside className="hidden lg:block relative overflow-hidden bg-[#032e1a]">

          <img
            src={Member}
            alt="Renewed Hope Veterans members"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-linear-to-br from-[#032e1a] via-[#054226]/95 to-[#032e1a]" />

          <div className="relative z-10 min-h-screen p-12 xl:p-16 flex flex-col justify-between text-white">

            {/* BRAND */}

            <div>
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-[#c99e38] flex items-center justify-center shadow-lg">

                  <Shield
                    size={25}
                  />

                </div>

                <div>
                  <p className="font-black text-lg leading-none">
                    RENEWED HOPE
                  </p>

                  <p className="text-xs tracking-[0.32em] text-[#c99e38] mt-1">
                    VETERANS
                  </p>
                </div>

              </div>
            </div>

            {/* CONTENT */}

            <div className="max-w-xl">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <p className="text-[#c99e38] text-xs font-black uppercase tracking-[0.25em] mb-5">
                  SERVICE • UNITY • IMPACT
                </p>

                <h2 className="text-5xl xl:text-6xl font-black leading-[1.02]">
                  Together We
                  <br />

                  <span className="text-[#c99e38]">
                    Serve.
                  </span>

                  <br />

                  Together We
                  <br />

                  <span className="text-[#c99e38]">
                    Build.
                  </span>
                </h2>

                <p className="text-gray-300 mt-6 leading-relaxed max-w-lg">
                  Renewed Hope Veterans is
                  building a connected
                  community of veterans,
                  volunteers, young leaders
                  and citizens committed to
                  service, empowerment and
                  national development.
                </p>

              </motion.div>

              {/* STATISTICS */}

              <div className="grid grid-cols-2 gap-3 mt-10">

                {[
                  {
                    icon: Users,
                    number: "15K+",
                    label: "Members",
                  },
                  {
                    icon: Flag,
                    number: "36",
                    label: "State Chapters",
                  },
                  {
                    icon: Heart,
                    number: "500+",
                    label: "Projects",
                  },
                  {
                    icon: TrendingUp,
                    number: "10K+",
                    label: "Volunteers",
                  },
                ].map(
                  ({
                    icon: Icon,
                    number,
                    label,
                  }) => (
                    <div
                      key={label}
                      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4"
                    >

                      <Icon
                        size={19}
                        className="text-[#c99e38] mb-3"
                      />

                      <p className="font-black text-xl">
                        {number}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        {label}
                      </p>

                    </div>
                  )
                )}

              </div>
            </div>

            {/* FOOTER */}

            <div className="flex items-center gap-3 text-xs text-gray-400">

              <Lock size={14} />

              Secure member portal

              <span>•</span>

              RHV

            </div>

          </div>
        </aside>

        {/* =================================================
            RIGHT AREA
        ================================================= */}

        <main className="min-h-screen flex flex-col">

          {/* MOBILE HEADER */}

          <div className="lg:hidden bg-[#032e1a] text-white px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#c99e38] flex items-center justify-center">

                <Shield size={21} />

              </div>

              <div>

                <p className="font-black text-sm">
                  RENEWED HOPE
                </p>

                <p className="text-[9px] tracking-[0.25em] text-[#c99e38]">
                  VETERANS
                </p>

              </div>

            </div>

          </div>

          <div className="flex-1 flex items-start lg:items-center justify-center px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-20">

            <AnimatePresence mode="wait">

              {/* =================================================
                  LOGIN
              ================================================= */}

              {mode === "login" ? (

                <motion.div
                  key="login"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="w-full max-w-md"
                >

                  {/* HEADER */}

                  <div className="mb-8">

                    <div className="w-14 h-14 rounded-2xl bg-[#054226] flex items-center justify-center shadow-lg mb-5">

                      <ShieldCheck
                        size={28}
                        className="text-[#c99e38]"
                      />

                    </div>

                    <h1 className="text-3xl md:text-4xl font-black">
                      Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2 leading-relaxed">
                      Sign in to access your
                      RHV member account and
                      dashboard.
                    </p>

                  </div>

                  {/* STATUS */}

                  {submitState ===
                    "success" && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex gap-3">

                      <CheckCircle2
                        className="text-green-600 shrink-0"
                        size={20}
                      />

                      <div>

                        <p className="font-bold text-sm text-green-800">
                          Success
                        </p>

                        <p className="text-xs text-green-700 mt-1">
                          {message}
                        </p>

                      </div>

                    </div>
                  )}

                  {submitState ===
                    "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3">

                      <AlertCircle
                        className="text-red-600 shrink-0"
                        size={20}
                      />

                      <div>

                        <p className="font-bold text-sm text-red-800">
                          Please check your details
                        </p>

                        <p className="text-xs text-red-700 mt-1">
                          {message ||
                            "Correct the highlighted fields and try again."}
                        </p>

                      </div>

                    </div>
                  )}

                  {/* LOGIN FORM */}

                  <form
                    onSubmit={handleLogin}
                    noValidate
                    className="space-y-5"
                  >

                    {/* EMAIL */}

                    <div>

                      <label
                        htmlFor="login-email"
                        className="block text-xs font-bold text-gray-700 mb-2"
                      >
                        Username
                      </label>

                      <div className="relative">

                        <Mail
                          size={17}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />

                        <input
                          ref={(element) =>
                            registerFieldRef(
                              "login-email",
                              element
                            )
                          }
                          id="login-email"
                          name="email"
                          type="text"
                          autoComplete="username"
                          value={
                            loginForm.email
                          }
                          onChange={
                            handleLoginChange
                          }
                          placeholder="Enter your username"
                          aria-invalid={Boolean(
                            loginErrors.email
                          )}
                          className={inputClass(
                            loginErrors.email,
                            true
                          )}
                        />

                      </div>

                      {loginErrors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-600">

                          <AlertCircle
                            size={13}
                          />

                          {
                            loginErrors.email
                          }

                        </p>
                      )}

                    </div>

                    {/* PASSWORD */}

                    <div>

                      <label
                        htmlFor="login-password"
                        className="block text-xs font-bold text-gray-700 mb-2"
                      >
                        Password
                      </label>

                      <div className="relative">

                        <Lock
                          size={17}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />

                        <input
                          ref={(element) =>
                            registerFieldRef(
                              "login-password",
                              element
                            )
                          }
                          id="login-password"
                          name="password"
                          type={
                            showLoginPassword
                              ? "text"
                              : "password"
                          }
                          autoComplete="current-password"
                          value={
                            loginForm.password
                          }
                          onChange={
                            handleLoginChange
                          }
                          placeholder="Enter your password"
                          aria-invalid={Boolean(
                            loginErrors.password
                          )}
                          className={`${inputClass(
                            loginErrors.password,
                            true
                          )} pr-12`}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowLoginPassword(
                              (previous) =>
                                !previous
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#054226]"
                          aria-label={
                            showLoginPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >

                          {showLoginPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}

                        </button>

                      </div>

                      {loginErrors.password && (
                        <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-600">

                          <AlertCircle
                            size={13}
                          />

                          {
                            loginErrors.password
                          }

                        </p>
                      )}

                    </div>

                    {/* OPTIONS */}

                    <div className="flex items-center justify-between gap-3">

                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">

                        <input
                          type="checkbox"
                          name="remember"
                          checked={
                            loginForm.remember
                          }
                          onChange={
                            handleLoginChange
                          }
                          className="w-4 h-4 accent-[#054226]"
                        />

                        Remember me

                      </label>

                      <button
                        type="button"
                        className="text-sm font-bold text-[#054226] hover:text-[#c99e38] transition-colors"
                      >
                        Forgot password?
                      </button>

                    </div>

                    {/* LOGIN BUTTON */}

                    <button
                      type="submit"
                      disabled={
                        submitState ===
                        "loading"
                      }
                      className="w-full bg-[#054226] hover:bg-[#032e1a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >

                      {submitState ===
                      "loading" ? (
                        <>
                          <Loader2
                            size={20}
                            className="animate-spin"
                          />

                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign In

                          <ArrowRight
                            size={19}
                          />
                        </>
                      )}

                    </button>

                  </form>

                  {/* CREATE ACCOUNT */}

                  <div className="relative my-8">

                    <div className="border-t border-gray-200" />

                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#f7f9f8] px-4 text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap">
                      NEW TO RHV?
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      switchMode(
                        "signup"
                      )
                    }
                    className="w-full border-2 border-[#054226] text-[#054226] hover:bg-[#054226] hover:text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >

                    <UserPlus
                      size={19}
                    />

                    Create Membership
                    Account

                  </button>

                  <div className="mt-8 flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">

                    <Lock
                      size={18}
                      className="text-[#054226] shrink-0 mt-0.5"
                    />

                    <p className="text-xs text-gray-500 leading-relaxed">
                      Your credentials are
                      protected. Never share
                      your password with
                      another person.
                    </p>

                  </div>

                </motion.div>

              ) : (

                /* =================================================
                    SIGNUP
                ================================================= */

                <motion.div
                  key="signup"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="w-full max-w-3xl"
                >

                  {/* SIGNUP HEADER */}

                  <div className="mb-8">

                    <div className="flex items-start justify-between gap-5 mb-7">

                      <div>

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c99e38]">
                          RHV MEMBERSHIP
                        </p>

                        <h1 className="text-3xl md:text-4xl font-black mt-1">
                          Create Your Account
                        </h1>

                        <p className="text-gray-500 mt-2 leading-relaxed">
                          Join a growing
                          community committed
                          to service and
                          national development.
                        </p>

                      </div>

                      <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#054226] items-center justify-center shrink-0">

                        <UserPlus
                          size={26}
                          className="text-[#c99e38]"
                        />

                      </div>

                    </div>

                    {/* PROGRESS */}

                    <div className="flex items-center">

                      {[1, 2, 3, 4].map(
                        (step, index) => (
                          <React.Fragment
                            key={step}
                          >

                            <button
                              type="button"
                              disabled={
                                step >
                                currentStep
                              }
                              onClick={() => {
                                if (
                                  step <
                                  currentStep
                                ) {
                                  setCurrentStep(
                                    step
                                  );
                                  setErrors(
                                    {}
                                  );
                                }
                              }}
                              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all ${
                                currentStep >=
                                step
                                  ? "bg-[#054226] text-white shadow-md"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >

                              {currentStep >
                              step ? (
                                <Check
                                  size={16}
                                />
                              ) : (
                                step
                              )}

                            </button>

                            {index < 3 && (
                              <div
                                className={`h-1 flex-1 mx-2 rounded-full transition-all ${
                                  currentStep >
                                  step
                                    ? "bg-[#054226]"
                                    : "bg-gray-100"
                                }`}
                              />
                            )}

                          </React.Fragment>
                        )
                      )}

                    </div>

                    <div className="grid grid-cols-4 mt-2 text-[9px] sm:text-[10px] font-bold uppercase text-gray-400">

                      <span>
                        Personal
                      </span>

                      <span className="text-center">
                        Location
                      </span>

                      <span className="text-center">
                        Membership
                      </span>

                      <span className="text-right">
                        Security
                      </span>

                    </div>

                  </div>

                  {/* GLOBAL ERROR */}

                  {submitState ===
                    "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">

                      <AlertCircle
                        size={20}
                        className="text-red-600 shrink-0"
                      />

                      <div>

                        <p className="font-bold text-sm text-red-800">
                          Please correct the highlighted fields
                        </p>

                        <p className="text-xs text-red-700 mt-1">
                          {message ||
                            "Some required information is missing or invalid."}
                        </p>

                      </div>

                    </div>
                  )}

                  {/* SUCCESS */}

                  {submitState ===
                    "success" && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">

                      <CheckCircle2
                        size={20}
                        className="text-green-600 shrink-0"
                      />

                      <div>

                        <p className="font-bold text-sm text-green-800">
                          Registration successful
                        </p>

                        <p className="text-xs text-green-700 mt-1">
                          {message}
                        </p>

                      </div>

                    </div>
                  )}

                  {/* FORM */}

                  <form
                    onSubmit={
                      handleSignup
                    }
                    noValidate
                  >

                    <AnimatePresence
                      mode="wait"
                    >

                      {/* =================================================
                          STEP 1
                      ================================================= */}

                      {currentStep ===
                        1 && (
                        <motion.div
                          key="step1"
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                          }}
                          transition={{
                            duration:
                              0.25,
                          }}
                          className="space-y-6"
                        >

                          <div className="flex items-start gap-3">

                            <div className="w-10 h-10 rounded-xl bg-[#054226]/10 flex items-center justify-center shrink-0">

                              <User
                                size={20}
                                className="text-[#054226]"
                              />

                            </div>

                            <div>

                              <h2 className="font-black text-lg">
                                Personal Information
                              </h2>

                              <p className="text-xs text-gray-500 mt-1">
                                Tell us a little
                                about yourself.
                              </p>

                            </div>

                          </div>

                          <div className="grid md:grid-cols-2 gap-4">

                            {/* FIRST NAME */}

                            <div>

                              <label
                                htmlFor="firstName"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                First Name *
                              </label>

                              <input
                                ref={(element) =>
                                  registerFieldRef(
                                    "firstName",
                                    element
                                  )
                                }
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={
                                  form.firstName
                                }
                                onChange={
                                  handleChange
                                }
                                placeholder="First name"
                                className={inputClass(
                                  errors.firstName
                                )}
                              />

                              {errors.firstName && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.firstName
                                  }
                                </p>
                              )}

                            </div>

                            {/* LAST NAME */}

                            <div>

                              <label
                                htmlFor="lastName"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Last Name *
                              </label>

                              <input
                                ref={(element) =>
                                  registerFieldRef(
                                    "lastName",
                                    element
                                  )
                                }
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={
                                  form.lastName
                                }
                                onChange={
                                  handleChange
                                }
                                placeholder="Last name"
                                className={inputClass(
                                  errors.lastName
                                )}
                              />

                              {errors.lastName && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.lastName
                                  }
                                </p>
                              )}

                            </div>

                            {/* DOB */}

                            <div>

                              <label
                                htmlFor="dateOfBirth"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Date of Birth *
                              </label>

                              <div className="relative">

                                <Calendar
                                  size={17}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "dateOfBirth",
                                      element
                                    )
                                  }
                                  id="dateOfBirth"
                                  name="dateOfBirth"
                                  type="date"
                                  value={
                                    form.dateOfBirth
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  className={inputClass(
                                    errors.dateOfBirth,
                                    true
                                  )}
                                />

                              </div>

                              {errors.dateOfBirth && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.dateOfBirth
                                  }
                                </p>
                              )}

                            </div>

                            {/* GENDER */}

                            <div>

                              <label
                                htmlFor="gender"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Gender *
                              </label>

                              <select
                                ref={(element) =>
                                  registerFieldRef(
                                    "gender",
                                    element
                                  )
                                }
                                id="gender"
                                name="gender"
                                value={
                                  form.gender
                                }
                                onChange={
                                  handleChange
                                }
                                className={inputClass(
                                  errors.gender
                                )}
                              >

                                <option value="">
                                  Select gender
                                </option>

                                {GENDERS.map(
                                  (
                                    gender
                                  ) => (
                                    <option
                                      key={
                                        gender
                                      }
                                      value={
                                        gender
                                      }
                                    >
                                      {
                                        gender
                                      }
                                    </option>
                                  )
                                )}

                              </select>

                              {errors.gender && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.gender
                                  }
                                </p>
                              )}

                            </div>

                            {/* MARITAL */}

                            <div className="md:col-span-2">

                              <label
                                htmlFor="maritalStatus"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Marital Status
                              </label>

                              <select
                                id="maritalStatus"
                                name="maritalStatus"
                                value={
                                  form.maritalStatus
                                }
                                onChange={
                                  handleChange
                                }
                                className={inputClass(
                                  errors.maritalStatus
                                )}
                              >

                                <option value="">
                                  Select marital
                                  status
                                </option>

                                {MARITAL_STATUSES.map(
                                  (
                                    status
                                  ) => (
                                    <option
                                      key={
                                        status
                                      }
                                      value={
                                        status
                                      }
                                    >
                                      {
                                        status
                                      }
                                    </option>
                                  )
                                )}

                              </select>

                            </div>

                          </div>

                        </motion.div>
                      )}

                      {/* =================================================
                          STEP 2
                      ================================================= */}

                      {currentStep ===
                        2 && (
                        <motion.div
                          key="step2"
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                          }}
                          transition={{
                            duration:
                              0.25,
                          }}
                          className="space-y-6"
                        >

                          <div className="flex items-start gap-3">

                            <div className="w-10 h-10 rounded-xl bg-[#054226]/10 flex items-center justify-center shrink-0">

                              <MapPin
                                size={20}
                                className="text-[#054226]"
                              />

                            </div>

                            <div>

                              <h2 className="font-black text-lg">
                                Contact & Location
                              </h2>

                              <p className="text-xs text-gray-500 mt-1">
                                Help us identify
                                your local RHV
                                chapter.
                              </p>

                            </div>

                          </div>

                          <div className="grid md:grid-cols-2 gap-4">

                            {/* PHONE */}

                            <div>

                              <label
                                htmlFor="phone"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Phone Number *
                              </label>

                              <div className="relative">

                                <Phone
                                  size={17}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "phone",
                                      element
                                    )
                                  }
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  autoComplete="tel"
                                  value={
                                    form.phone
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="+234 800 000 0000"
                                  className={inputClass(
                                    errors.phone,
                                    true
                                  )}
                                />

                              </div>

                              {errors.phone && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.phone
                                  }
                                </p>
                              )}

                            </div>

                            {/* EMAIL */}

                            <div>

                              <label
                                htmlFor="email"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Email *
                              </label>

                              <div className="relative">

                                <Mail
                                  size={17}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "email",
                                      element
                                    )
                                  }
                                  id="email"
                                  name="email"
                                  type="text"
                                  autoComplete="email"
                                  value={
                                    form.email
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="you@example.com"
                                  className={inputClass(
                                    errors.email,
                                    true
                                  )}
                                />

                              </div>

                              {errors.email && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.email
                                  }
                                </p>
                              )}

                            </div>
                            <div>

                              <label
                                htmlFor="Username"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Username *
                              </label>

                              <div className="relative">

                                <PersonStanding
                                  size={17}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "Username",
                                      element
                                    )
                                  }
                                  id="Username"
                                  name="Username"
                                  type="text"
                                  autoComplete="Username"
                                  value={
                                    form.Username
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="Username"
                                  className={inputClass(
                                    errors.Username,
                                    true
                                  )}
                                />

                              </div>

                              {errors.Username && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.Username
                                  }
                                </p>
                              )}

                            </div>

                            {/* ADDRESS */}

                            <div className="md:col-span-2">

                              <label
                                htmlFor="address"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Home Address *
                              </label>

                              <input
                                ref={(element) =>
                                  registerFieldRef(
                                    "address",
                                    element
                                  )
                                }
                                id="address"
                                name="address"
                                type="text"
                                autoComplete="street-address"
                                value={
                                  form.address
                                }
                                onChange={
                                  handleChange
                                }
                                placeholder="Your residential address"
                                className={inputClass(
                                  errors.address
                                )}
                              />

                              {errors.address && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.address
                                  }
                                </p>
                              )}

                            </div>

                            {/* COUNTRY */}

                            <div>

                              <label
                                htmlFor="country"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Country
                              </label>

                              <select
                                id="country"
                                name="country"
                                value={
                                  form.country
                                }
                                onChange={
                                  handleChange
                                }
                                className={inputClass()}
                              >

                                <option value="Nigeria">
                                  Nigeria
                                </option>

                              </select>

                            </div>

                            {/* STATE */}

                            <div>

                              <label
                                htmlFor="state"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                State *
                              </label>

                              <select
                                ref={(element) =>
                                  registerFieldRef(
                                    "state",
                                    element
                                  )
                                }
                                id="state"
                                name="state"
                                value={
                                  form.state
                                }
                                onChange={
                                  handleChange
                                }
                                className={inputClass(
                                  errors.state
                                )}
                              >

                                <option value="">
                                  Select state
                                </option>

                                {STATES.map(
                                  (
                                    state
                                  ) => (
                                    <option
                                      key={
                                        state
                                      }
                                      value={
                                        state
                                      }
                                    >
                                      {
                                        state
                                      }
                                    </option>
                                  )
                                )}

                              </select>

                              {errors.state && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.state
                                  }
                                </p>
                              )}

                            </div>

                            {/* LGA */}

                            <div>

                              <label
                                htmlFor="lga"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Local Government Area *
                              </label>

                              <input
                                ref={(element) =>
                                  registerFieldRef(
                                    "lga",
                                    element
                                  )
                                }
                                id="lga"
                                name="lga"
                                type="text"
                                value={
                                  form.lga
                                }
                                onChange={
                                  handleChange
                                }
                                placeholder="e.g. Kaita"
                                className={inputClass(
                                  errors.lga
                                )}
                              />

                              {errors.lga && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.lga
                                  }
                                </p>
                              )}

                            </div>

                            {/* WARD */}

                            <div>

                              <label
                                htmlFor="ward"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Ward *
                              </label>

                              <input
                                ref={(element) =>
                                  registerFieldRef(
                                    "ward",
                                    element
                                  )
                                }
                                id="ward"
                                name="ward"
                                type="text"
                                value={
                                  form.ward
                                }
                                onChange={
                                  handleChange
                                }
                                placeholder="Your ward"
                                className={inputClass(
                                  errors.ward
                                )}
                              />

                              {errors.ward && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex gap-1 items-center">
                                  <AlertCircle
                                    size={13}
                                  />
                                  {
                                    errors.ward
                                  }
                                </p>
                              )}

                            </div>

                          </div>

                        </motion.div>
                      )}

                      {/* =================================================
                          STEP 3
                      ================================================= */}

                      {currentStep ===
                        3 && (
                        <motion.div
                          key="step3"
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                          }}
                          transition={{
                            duration:
                              0.25,
                          }}
                          className="space-y-7"
                        >

                          <div className="flex items-start gap-3">

                            <div className="w-10 h-10 rounded-xl bg-[#054226]/10 flex items-center justify-center shrink-0">

                              <ShieldCheck
                                size={20}
                                className="text-[#054226]"
                              />

                            </div>

                            <div>

                              <h2 className="font-black text-lg">
                                Membership Details
                              </h2>

                              <p className="text-xs text-gray-500 mt-1">
                                Choose how you
                                want to contribute
                                to RHV.
                              </p>

                            </div>

                          </div>

                          {/* MEMBERSHIP */}

                          <div>

                            <p className="text-sm font-bold text-gray-800 mb-3">
                              Membership Category *
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3">

                              {MEMBERSHIP_CATEGORIES.map(
                                (
                                  item
                                ) => {
                                  const Icon =
                                    item.icon;

                                  const selected =
                                    form.membershipCategory ===
                                    item.title;

                                  return (
                                    <button
                                      key={
                                        item.title
                                      }
                                      type="button"
                                      onClick={() => {
                                        setForm(
                                          (
                                            previous
                                          ) => ({
                                            ...previous,
                                            membershipCategory:
                                              item.title,
                                          })
                                        );

                                        setErrors(
                                          (
                                            previous
                                          ) => {
                                            const next =
                                              {
                                                ...previous,
                                              };

                                            delete next.membershipCategory;

                                            return next;
                                          }
                                        );

                                        setSubmitState(
                                          "idle"
                                        );
                                      }}
                                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                                        selected
                                          ? "border-[#054226] bg-[#054226]/5 shadow-sm"
                                          : "border-gray-200 bg-white hover:border-gray-300"
                                      }`}
                                    >

                                      <div className="flex items-start gap-3">

                                        <div
                                          className={`p-2 rounded-lg ${
                                            selected
                                              ? "bg-[#054226] text-white"
                                              : "bg-gray-100 text-gray-500"
                                          }`}
                                        >

                                          <Icon
                                            size={
                                              18
                                            }
                                          />

                                        </div>

                                        <div className="flex-1">

                                          <div className="flex justify-between gap-2">

                                            <h3 className="font-bold text-sm">
                                              {
                                                item.title
                                              }
                                            </h3>

                                            {selected && (
                                              <CircleCheck
                                                size={
                                                  17
                                                }
                                                className="text-[#054226]"
                                              />
                                            )}

                                          </div>

                                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                            {
                                              item.description
                                            }
                                          </p>

                                        </div>

                                      </div>

                                    </button>
                                  );
                                }
                              )}

                            </div>

                            {errors.membershipCategory && (
                              <p className="mt-2 text-[11px] text-red-600 flex items-center gap-1">
                                <AlertCircle
                                  size={13}
                                />
                                {
                                  errors.membershipCategory
                                }
                              </p>
                            )}

                          </div>

                          {/* PROFESSIONAL */}

                          <div>

                            <p className="text-sm font-bold text-gray-800 mb-3">
                              Professional Information
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">

                              {/* OCCUPATION */}

                              <div>

                                <label
                                  htmlFor="occupation"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Occupation *
                                </label>

                                <div className="relative">

                                  <Briefcase
                                    size={
                                      17
                                    }
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                  />

                                  <input
                                    ref={(element) =>
                                      registerFieldRef(
                                        "occupation",
                                        element
                                      )
                                    }
                                    id="occupation"
                                    name="occupation"
                                    type="text"
                                    value={
                                      form.occupation
                                    }
                                    onChange={
                                      handleChange
                                    }
                                    placeholder="Your occupation"
                                    className={inputClass(
                                      errors.occupation,
                                      true
                                    )}
                                  />

                                </div>

                                {errors.occupation && (
                                  <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1">
                                    <AlertCircle
                                      size={
                                        13
                                      }
                                    />
                                    {
                                      errors.occupation
                                    }
                                  </p>
                                )}

                              </div>

                              {/* ORGANIZATION */}

                              <div>

                                <label
                                  htmlFor="organization"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Organization
                                </label>

                                <div className="relative">

                                  <Building2
                                    size={
                                      17
                                    }
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                  />

                                  <input
                                    id="organization"
                                    name="organization"
                                    type="text"
                                    value={
                                      form.organization
                                    }
                                    onChange={
                                      handleChange
                                    }
                                    placeholder="Company / organization"
                                    className={inputClass(
                                      errors.organization,
                                      true
                                    )}
                                  />

                                </div>

                              </div>

                              {/* SKILLS */}

                              <div>

                                <label
                                  htmlFor="skills"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Skills / Expertise
                                </label>

                                <input
                                  id="skills"
                                  name="skills"
                                  type="text"
                                  value={
                                    form.skills
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="e.g. Leadership, IT, Medicine"
                                  className={inputClass(
                                    errors.skills
                                  )}
                                />

                              </div>

                              {/* EDUCATION */}

                              <div>

                                <label
                                  htmlFor="education"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Highest Education
                                </label>

                                <select
                                  id="education"
                                  name="education"
                                  value={
                                    form.education
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  className={inputClass(
                                    errors.education
                                  )}
                                >

                                  <option value="">
                                    Select education
                                  </option>

                                  {EDUCATION_LEVELS.map(
                                    (
                                      level
                                    ) => (
                                      <option
                                        key={
                                          level
                                        }
                                        value={
                                          level
                                        }
                                      >
                                        {
                                          level
                                        }
                                      </option>
                                    )
                                  )}

                                </select>

                              </div>

                            </div>

                          </div>

                          {/* INTERESTS */}

                          <div>

                            <p className="text-sm font-bold text-gray-800 mb-3">
                              Areas of Interest *
                            </p>

                            <div className="grid sm:grid-cols-2 gap-2">

                              {INTERESTS.map(
                                (
                                  interest
                                ) => {
                                  const selected =
                                    form.interests.includes(
                                      interest
                                    );

                                  return (
                                    <button
                                      key={
                                        interest
                                      }
                                      type="button"
                                      onClick={() =>
                                        handleInterestChange(
                                          interest
                                        )
                                      }
                                      className={`flex items-center gap-3 p-3 rounded-xl border text-left text-sm transition-all ${
                                        selected
                                          ? "border-[#054226] bg-[#054226]/5 text-[#054226] font-semibold"
                                          : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                                      }`}
                                    >

                                      <div
                                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                                          selected
                                            ? "bg-[#054226] border-[#054226]"
                                            : "border-gray-300"
                                        }`}
                                      >

                                        {selected && (
                                          <Check
                                            size={
                                              13
                                            }
                                            className="text-white"
                                          />
                                        )}

                                      </div>

                                      {
                                        interest
                                      }

                                    </button>
                                  );
                                }
                              )}

                            </div>

                            {errors.interests && (
                              <p className="mt-2 text-[11px] text-red-600 flex items-center gap-1">
                                <AlertCircle
                                  size={13}
                                />
                                {
                                  errors.interests
                                }
                              </p>
                            )}

                          </div>

                        </motion.div>
                      )}

                      {/* =================================================
                          STEP 4
                      ================================================= */}

                      {currentStep ===
                        4 && (
                        <motion.div
                          key="step4"
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                          }}
                          transition={{
                            duration:
                              0.25,
                          }}
                          className="space-y-7"
                        >

                          <div className="flex items-start gap-3">

                            <div className="w-10 h-10 rounded-xl bg-[#054226]/10 flex items-center justify-center shrink-0">

                              <Lock
                                size={20}
                                className="text-[#054226]"
                              />

                            </div>

                            <div>

                              <h2 className="font-black text-lg">
                                Security & Verification
                              </h2>

                              <p className="text-xs text-gray-500 mt-1">
                                Secure your account
                                and complete
                                your membership
                                application.
                              </p>

                            </div>

                          </div>

                          {/* PASSWORDS */}

                          <div className="grid md:grid-cols-2 gap-4">

                            {/* PASSWORD */}

                            <div>

                              <label
                                htmlFor="password"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Create Password *
                              </label>

                              <div className="relative">

                                <Lock
                                  size={
                                    17
                                  }
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "password",
                                      element
                                    )
                                  }
                                  id="password"
                                  name="password"
                                  type={
                                    showPassword
                                      ? "text"
                                      : "password"
                                  }
                                  autoComplete="new-password"
                                  value={
                                    form.password
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="Create a strong password"
                                  className={`${inputClass(
                                    errors.password,
                                    true
                                  )} pr-12`}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setShowPassword(
                                      (
                                        previous
                                      ) =>
                                        !previous
                                    )
                                  }
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#054226]"
                                >

                                  {showPassword ? (
                                    <EyeOff
                                      size={
                                        18
                                      }
                                    />
                                  ) : (
                                    <Eye
                                      size={
                                        18
                                      }
                                    />
                                  )}

                                </button>

                              </div>

                              {form.password && (
                                <div className="mt-3">

                                  <div className="flex gap-1">

                                    {[1, 2, 3, 4, 5].map(
                                      (
                                        item
                                      ) => (
                                        <div
                                          key={
                                            item
                                          }
                                          className={`h-1.5 flex-1 rounded-full transition-all ${
                                            passwordStrength.score >=
                                            item
                                              ? "bg-[#054226]"
                                              : "bg-gray-200"
                                          }`}
                                        />
                                      )
                                    )}

                                  </div>

                                  <p className="text-[11px] text-gray-500 mt-1">
                                    Password strength:{" "}
                                    <span className="font-bold text-gray-700">
                                      {
                                        passwordStrength.label
                                      }
                                    </span>
                                  </p>

                                </div>
                              )}

                              {errors.password && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1">
                                  <AlertCircle
                                    size={
                                      13
                                    }
                                  />
                                  {
                                    errors.password
                                  }
                                </p>
                              )}

                            </div>

                            {/* CONFIRM */}

                            <div>

                              <label
                                htmlFor="confirmPassword"
                                className="block text-xs font-bold text-gray-700 mb-2"
                              >
                                Confirm Password *
                              </label>

                              <div className="relative">

                                <Lock
                                  size={
                                    17
                                  }
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                />

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "confirmPassword",
                                      element
                                    )
                                  }
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  type={
                                    showConfirmPassword
                                      ? "text"
                                      : "password"
                                  }
                                  autoComplete="new-password"
                                  value={
                                    form.confirmPassword
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="Confirm your password"
                                  className={`${inputClass(
                                    errors.confirmPassword,
                                    true
                                  )} pr-12`}
                                />

                                <button
                                  type="button"
                                  onClick={() =>
                                    setShowConfirmPassword(
                                      (
                                        previous
                                      ) =>
                                        !previous
                                    )
                                  }
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#054226]"
                                >

                                  {showConfirmPassword ? (
                                    <EyeOff
                                      size={
                                        18
                                      }
                                    />
                                  ) : (
                                    <Eye
                                      size={
                                        18
                                      }
                                    />
                                  )}

                                </button>

                              </div>

                              {form.confirmPassword &&
                                form.password ===
                                  form.confirmPassword && (
                                  <p className="mt-1.5 text-[11px] text-green-600 flex items-center gap-1">

                                    <Check
                                      size={
                                        13
                                      }
                                    />

                                    Passwords
                                    match

                                  </p>
                                )}

                              {errors.confirmPassword && (
                                <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1">
                                  <AlertCircle
                                    size={
                                      13
                                    }
                                  />
                                  {
                                    errors.confirmPassword
                                  }
                                </p>
                              )}

                            </div>

                          </div>

                          {/* EMERGENCY */}

                          <div>

                            <p className="text-sm font-bold text-gray-800 mb-3">
                              Emergency Contact
                            </p>

                            <div className="grid md:grid-cols-3 gap-4">

                              <div>

                                <label
                                  htmlFor="emergencyName"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Contact Name *
                                </label>

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "emergencyName",
                                      element
                                    )
                                  }
                                  id="emergencyName"
                                  name="emergencyName"
                                  type="text"
                                  value={
                                    form.emergencyName
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="Full name"
                                  className={inputClass(
                                    errors.emergencyName
                                  )}
                                />

                                {errors.emergencyName && (
                                  <p className="mt-1.5 text-[11px] text-red-600">
                                    {
                                      errors.emergencyName
                                    }
                                  </p>
                                )}

                              </div>

                              <div>

                                <label
                                  htmlFor="emergencyRelationship"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Relationship *
                                </label>

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "emergencyRelationship",
                                      element
                                    )
                                  }
                                  id="emergencyRelationship"
                                  name="emergencyRelationship"
                                  type="text"
                                  value={
                                    form.emergencyRelationship
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="e.g. Brother"
                                  className={inputClass(
                                    errors.emergencyRelationship
                                  )}
                                />

                                {errors.emergencyRelationship && (
                                  <p className="mt-1.5 text-[11px] text-red-600">
                                    {
                                      errors.emergencyRelationship
                                    }
                                  </p>
                                )}

                              </div>

                              <div>

                                <label
                                  htmlFor="emergencyPhone"
                                  className="block text-xs font-bold text-gray-700 mb-2"
                                >
                                  Phone Number *
                                </label>

                                <input
                                  ref={(element) =>
                                    registerFieldRef(
                                      "emergencyPhone",
                                      element
                                    )
                                  }
                                  id="emergencyPhone"
                                  name="emergencyPhone"
                                  type="tel"
                                  value={
                                    form.emergencyPhone
                                  }
                                  onChange={
                                    handleChange
                                  }
                                  placeholder="+234..."
                                  className={inputClass(
                                    errors.emergencyPhone
                                  )}
                                />

                                {errors.emergencyPhone && (
                                  <p className="mt-1.5 text-[11px] text-red-600">
                                    {
                                      errors.emergencyPhone
                                    }
                                  </p>
                                )}

                              </div>

                            </div>

                          </div>

                          {/* PHOTO */}

                          <div>

                            <p className="text-sm font-bold text-gray-800 mb-3">
                              Profile Photo *
                            </p>

                            <div className={`flex flex-col sm:flex-row gap-5 items-center border rounded-2xl p-5 transition-all ${
                              errors.photo
                                ? "border-red-300 bg-red-50/30"
                                : "border-gray-200 bg-white"
                            }`}>

                              <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={
                                  handlePhotoChange
                                }
                                className="hidden"
                              />

                              {photoPreview ? (

                                <div className="relative">

                                  <img
                                    src={
                                      photoPreview
                                    }
                                    alt="Profile preview"
                                    className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-md"
                                  />

                                  <button
                                    type="button"
                                    onClick={
                                      removePhoto
                                    }
                                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md"
                                    aria-label="Remove photo"
                                  >

                                    <X
                                      size={
                                        14
                                      }
                                    />

                                  </button>

                                </div>

                              ) : (

                                <button
                                  type="button"
                                  onClick={() =>
                                    fileInputRef.current?.click()
                                  }
                                  className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-[#054226] hover:text-[#054226] transition-all"
                                >

                                  <Upload
                                    size={
                                      22
                                    }
                                  />

                                  <span className="text-[10px] mt-2 font-bold">
                                    Upload
                                  </span>

                                </button>

                              )}

                              <div className="flex-1">

                                <h4 className="font-bold text-gray-800">
                                  Member identification
                                  photo
                                </h4>

                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                  Upload a clear
                                  recent photo.
                                  JPG, PNG or
                                  WEBP. Maximum
                                  size 2MB.
                                </p>

                                {!photoPreview && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      fileInputRef.current?.click()
                                    }
                                    className="mt-3 text-sm font-bold text-[#054226] hover:text-[#c99e38]"
                                  >
                                    Choose photo →
                                  </button>
                                )}

                              </div>

                            </div>

                            {errors.photo && (
                              <p className="mt-1.5 text-[11px] text-red-600 flex items-center gap-1">
                                <AlertCircle
                                  size={
                                    13
                                  }
                                />
                                {
                                  errors.photo
                                }
                              </p>
                            )}

                          </div>

                          {/* AGREEMENTS */}

                          <div className="space-y-4 border-t border-gray-200 pt-5">

                            {/* TERMS */}

                            <label className="flex items-start gap-3 cursor-pointer">

                              <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={
                                  form.termsAccepted
                                }
                                onChange={
                                  handleChange
                                }
                                className="mt-1 w-4 h-4 accent-[#054226]"
                              />

                              <span className="text-xs text-gray-600 leading-relaxed">
                                I agree to the{" "}
                                <span className="font-bold text-[#054226]">
                                  Terms and Conditions
                                </span>
                                .
                              </span>

                            </label>

                            {errors.termsAccepted && (
                              <p className="ml-7 text-[11px] text-red-600">
                                {
                                  errors.termsAccepted
                                }
                              </p>
                            )}

                            {/* PRIVACY */}

                            <label className="flex items-start gap-3 cursor-pointer">

                              <input
                                type="checkbox"
                                name="privacyAccepted"
                                checked={
                                  form.privacyAccepted
                                }
                                onChange={
                                  handleChange
                                }
                                className="mt-1 w-4 h-4 accent-[#054226]"
                              />

                              <span className="text-xs text-gray-600 leading-relaxed">
                                I accept the{" "}
                                <span className="font-bold text-[#054226]">
                                  Privacy Policy
                                </span>
                                .
                              </span>

                            </label>

                            {errors.privacyAccepted && (
                              <p className="ml-7 text-[11px] text-red-600">
                                {
                                  errors.privacyAccepted
                                }
                              </p>
                            )}

                            {/* ACCURACY */}

                            <label className="flex items-start gap-3 cursor-pointer">

                              <input
                                type="checkbox"
                                name="informationAccurate"
                                checked={
                                  form.informationAccurate
                                }
                                onChange={
                                  handleChange
                                }
                                className="mt-1 w-4 h-4 accent-[#054226]"
                              />

                              <span className="text-xs text-gray-600 leading-relaxed">
                                I confirm that
                                the information
                                I provided is
                                accurate and
                                complete.
                              </span>

                            </label>

                            {errors.informationAccurate && (
                              <p className="ml-7 text-[11px] text-red-600">
                                {
                                  errors.informationAccurate
                                }
                              </p>
                            )}

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                    {/* =================================================
                        NAVIGATION
                    ================================================= */}

                    <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">

                      {currentStep >
                        1 && (
                        <button
                          type="button"
                          onClick={
                            previousStep
                          }
                          disabled={
                            submitState ===
                            "loading"
                          }
                          className="px-5 py-3.5 border border-gray-200 bg-white rounded-xl font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50"
                        >

                          <ArrowLeft
                            size={18}
                          />

                          Back

                        </button>
                      )}

                      {currentStep <
                      4 ? (

                        <button
                          type="button"
                          onClick={
                            nextStep
                          }
                          className="flex-1 bg-[#054226] hover:bg-[#032e1a] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        >

                          Continue

                          <ChevronRight
                            size={18}
                          />

                        </button>

                      ) : (

                        <button
                          type="submit"
                          disabled={
                            submitState ===
                            "loading"
                          }
                          className="flex-1 bg-[#054226] hover:bg-[#032e1a] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        >

                          {submitState ===
                          "loading" ? (
                            <>
                              <Loader2
                                size={
                                  20
                                }
                                className="animate-spin"
                              />

                              Creating
                              Account...
                            </>
                          ) : (
                            <>
                              Complete
                              Registration

                              <ArrowRight
                                size={
                                  18
                                }
                              />
                            </>
                          )}

                        </button>

                      )}

                    </div>

                  </form>

                  {/* SWITCH LOGIN */}

                  <div className="text-center mt-7 pb-5">

                    <p className="text-sm text-gray-500">
                      Already have an RHV
                      account?
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        switchMode(
                          "login"
                        )
                      }
                      className="mt-2 text-sm font-black text-[#054226] hover:text-[#c99e38] inline-flex items-center gap-1 transition-colors"
                    >

                      Sign in instead

                      <ArrowRight
                        size={15}
                      />

                    </button>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {/* FOOTER */}

          <footer className="px-5 py-5 text-center border-t border-gray-100 bg-white">

            <p className="text-[11px] text-gray-400">
              ©{" "}
              {new Date().getFullYear()}{" "}
              Renewed Hope Veterans. All
              rights reserved.
            </p>

          </footer>

        </main>

      </div>

    </div>
  );
}
