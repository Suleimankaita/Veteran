import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Heart,
  Flag,
  Users,
  TrendingUp,
  Hand,
  BookOpen,
  Medal,
  Lock,
  User,
  UserCheck,
  GraduationCap,
  ShieldCheck,
  Quote,
  Star,
  Upload,
  Calendar,
  ArrowRightCircle,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
} from 'lucide-react';

import Member from '../assets/Member.png';

// --------------------------------------------------
// ANIMATION VARIANTS
// --------------------------------------------------

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --------------------------------------------------
// DATA
// --------------------------------------------------

const STATES = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
  'Federal Capital Territory',
];

const MEMBERSHIP_CATEGORIES = [
  'Full Member',
  'Associate Member',
  'Volunteer',
  'Youth Member',
  'Honorary Member',
];

const INTERESTS = [
  'Community Development',
  'Welfare & Support',
  'Leadership & Governance',
  'Healthcare Outreach',
  'Education & Training',
  'Environmental Projects',
  'Youth Development',
  'Event Planning',
];

const EDUCATION_LEVELS = [
  'Primary Education',
  'Secondary Education',
  'OND / NCE',
  'HND',
  "Bachelor's Degree",
  "Master's Degree",
  'Doctorate',
  'Other',
];

const GENDERS = [
  'Male',
  'Female',
  'Prefer not to say',
];

const MARITAL_STATUSES = [
  'Single',
  'Married',
  'Divorced',
  'Widowed',
  'Prefer not to say',
];

// --------------------------------------------------
// INITIAL FORM
// --------------------------------------------------

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  maritalStatus: '',

  phone: '',
  email: '',
  address: '',

  country: 'Nigeria',
  state: '',
  lga: '',
  ward: '',

  occupation: '',
  organization: '',
  skills: '',
  education: '',

  membershipCategory: '',
  interests: [],

  emergencyName: '',
  emergencyRelationship: '',
  emergencyPhone: '',

  termsAccepted: false,
  privacyAccepted: false,
  informationAccurate: false,
};

// --------------------------------------------------
// HERO
// --------------------------------------------------

const Hero = ({ scrollToRegistration, scrollToBenefits }) => (
  <div className="relative bg-white pt-8 pb-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={Member}
        alt="Veterans and community members"
        className="w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-white/40" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[#054226] font-bold tracking-wide text-sm uppercase"
        >
          JOIN US TODAY
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-6xl font-extrabold text-[#054226] leading-tight"
        >
          Join the Renewed <br />
          Hope Veterans <br />
          <span className="text-[#c99e38]">Community</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-600 text-lg max-w-lg leading-relaxed"
        >
          Become part of a community committed to veteran empowerment,
          leadership, civic engagement, community development, collaboration,
          and meaningful service across Nigeria.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-4 pt-4"
        >
          <button
            type="button"
            onClick={scrollToRegistration}
            className="bg-[#054226] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#032e1a] transition-all"
          >
            <UserCheck size={18} />
            Join Today
          </button>

          <button
            type="button"
            onClick={scrollToBenefits}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-gray-50 transition-all"
          >
            Learn More
            <ArrowRightCircle size={18} />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Features Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#054226]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white space-y-6 max-w-md ml-auto"
      >
        {[
          {
            icon: Heart,
            title: 'Make a Difference',
            desc: 'Contribute to meaningful community and veteran-focused initiatives.',
          },
          {
            icon: TrendingUp,
            title: 'Grow Your Leadership',
            desc: 'Develop leadership skills and contribute your experience to society.',
          },
          {
            icon: Users,
            title: 'Build Connections',
            desc: 'Connect with veterans, volunteers, and community members across Nigeria.',
          },
          {
            icon: Shield,
            title: 'Be Part of Something Big',
            desc: 'Join an organized community committed to service and national development.',
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="bg-[#c99e38]/20 p-3 rounded-full border border-[#c99e38]/50 text-[#c99e38]">
              <item.icon size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

// --------------------------------------------------
// STATS
// --------------------------------------------------

const Stats = () => (
  <div className="bg-[#032e1a] py-8 px-4 relative z-20 shadow-xl rounded-t-3xl -mt-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-green-800">
      {[
        { count: '15,000+', label: 'Registered Members' },
        { count: '500+', label: 'Community Projects' },
        { count: '36', label: 'State Chapters' },
        { count: '10,000+', label: 'Active Volunteers' },
        { count: '150+', label: 'Partner Organizations' },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-white px-2"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#c99e38]">
            {stat.count}
          </h2>

          <p className="text-xs md:text-sm mt-1 text-gray-300 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

// --------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------

export default function RenewedHopeVeterans() {
  const registrationRef = useRef(null);
  const benefitsRef = useRef(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');

  // ------------------------------------------------
  // SCROLL
  // ------------------------------------------------

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // ------------------------------------------------
  // FORM HANDLERS
  // ------------------------------------------------

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: '',
      }));
    }

    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitMessage('');
    }
  };

  const handleInterestChange = (interest) => {
    setForm((previous) => {
      const exists = previous.interests.includes(interest);

      return {
        ...previous,
        interests: exists
          ? previous.interests.filter((item) => item !== interest)
          : [...previous.interests, interest],
      };
    });

    setErrors((previous) => ({
      ...previous,
      interests: '',
    }));
  };

  // ------------------------------------------------
  // PHOTO UPLOAD
  // ------------------------------------------------

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/webp',
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setErrors((previous) => ({
        ...previous,
        photo: 'Please upload a JPG, PNG, or WEBP image.',
      }));

      event.target.value = '';
      return;
    }
    const Size=2 * 1024 * 1024

    if (selectedFile.size > Size) {
      setErrors((previous) => ({
        ...previous,
        photo: 'The profile photo must not exceed 2MB.',
      }));

      event.target.value = '';
      return;
    }

    setPhoto(selectedFile);
    setPhotoPreview(URL.createObjectURL(selectedFile));

    setErrors((previous) => ({
      ...previous,
      photo: '',
    }));
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // ------------------------------------------------
  // VALIDATION
  // ------------------------------------------------

  const validateForm = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth = 'Date of birth is required.';
    }

    if (!form.gender) {
      nextErrors.gender = 'Please select your gender.';
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.address.trim()) {
      nextErrors.address = 'Home address is required.';
    }

    if (!form.state) {
      nextErrors.state = 'Please select your state.';
    }

    if (!form.lga) {
      nextErrors.lga = 'Please enter your LGA.';
    }

    if (!form.ward) {
      nextErrors.ward = 'Please enter your ward.';
    }

    if (!form.occupation.trim()) {
      nextErrors.occupation = 'Occupation is required.';
    }

    if (!form.membershipCategory) {
      nextErrors.membershipCategory =
        'Please select a membership category.';
    }

    if (form.interests.length === 0) {
      nextErrors.interests =
        'Please select at least one area of interest.';
    }

    if (!form.emergencyName.trim()) {
      nextErrors.emergencyName = 'Emergency contact name is required.';
    }

    if (!form.emergencyRelationship.trim()) {
      nextErrors.emergencyRelationship =
        'Emergency contact relationship is required.';
    }

    if (!form.emergencyPhone.trim()) {
      nextErrors.emergencyPhone =
        'Emergency contact phone is required.';
    }

    if (!photo) {
      nextErrors.photo = 'Please upload a profile photo.';
    }

    if (!form.termsAccepted) {
      nextErrors.termsAccepted =
        'You must accept the Terms and Conditions.';
    }

    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted =
        'You must accept the Privacy Policy.';
    }

    if (!form.informationAccurate) {
      nextErrors.informationAccurate =
        'Please confirm that the information is accurate.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  // ------------------------------------------------
  // SUBMIT
  // ------------------------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitMessage('');

    const isValid = validateForm();

    if (!isValid) {
      setSubmitState('error');

      setTimeout(() => {
        const firstError = document.querySelector(
          '[data-field-error="true"]'
        );

        firstError?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 50);

      return;
    }

    setSubmitState('loading');

    try {
      /*
       * The FormData is prepared here so it can be sent directly
       * to your backend when the API endpoint is available.
       */

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === 'interests') {
          value.forEach((interest) => {
            formData.append('interests[]', interest);
          });
        } else {
          formData.append(key, String(value));
        }
      });

      if (photo) {
        formData.append('photo', photo);
      }

      /*
       * IMPORTANT:
       *
       * Your backend endpoint has not been supplied yet.
       *
       * When your API is ready, replace this section with:
       *
       * const response = await fetch('/api/members', {
       *   method: 'POST',
       *   body: formData,
       * });
       *
       * if (!response.ok) {
       *   throw new Error('Registration failed.');
       * }
       */

      console.log('Membership application ready for API:', {
        form,
        photo,
        formData,
      });

      /*
       * Temporary frontend-only success state.
       * This does NOT pretend that the application was saved
       * to a database.
       */

      await new Promise((resolve) => setTimeout(resolve, 700));

      setSubmitState('success');

      setSubmitMessage(
        'Your application has been prepared successfully. Connect this form to the RHV backend to complete registration.'
      );
    } catch (error) {
      console.error(error);

      setSubmitState('error');

      setSubmitMessage(
        'Something went wrong while preparing your application. Please try again.'
      );
    }
  };

  // ------------------------------------------------
  // RESET
  // ------------------------------------------------

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitState('idle');
    setSubmitMessage('');
    removePhoto();
  };

  // ------------------------------------------------
  // ERROR COUNT
  // ------------------------------------------------

  const errorCount = useMemo(
    () => Object.values(errors).filter(Boolean).length,
    [errors]
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

      {/* HERO */}
      <Hero
        scrollToRegistration={scrollToRegistration}
        scrollToBenefits={scrollToBenefits}
      />

      {/* STATS */}
      <Stats />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[45%] xl:w-[45%] space-y-16">

            {/* WHY JOIN */}
            <motion.section
              ref={benefitsRef}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px',
              }}
              variants={staggerContainer}
              id="why-join-us"
            >
              <h2 className="text-center font-bold text-xl mb-8 uppercase tracking-widest text-gray-800 border-b pb-4">
                Why Join Us?
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Heart,
                    title: 'Community Impact',
                    text: 'Be part of meaningful projects that strengthen communities.',
                  },
                  {
                    icon: Flag,
                    title: 'Leadership',
                    text: 'Develop leadership skills and contribute your experience.',
                  },
                  {
                    icon: Users,
                    title: 'Networking',
                    text: 'Connect with veterans and community members across Nigeria.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Personal Growth',
                    text: 'Gain skills, experience, and opportunities for development.',
                  },
                  {
                    icon: Hand,
                    title: 'Volunteer',
                    text: 'Contribute your time and skills to worthwhile initiatives.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Training & Development',
                    text: 'Access workshops, training, and capacity-building opportunities.',
                  },
                  {
                    icon: Medal,
                    title: 'Recognition',
                    text: 'Be recognized for meaningful contributions and achievements.',
                  },
                  {
                    icon: Lock,
                    title: 'Member Resources',
                    text: 'Access relevant member resources, activities, and opportunities.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                  >
                    <item.icon className="text-[#054226] mb-3 w-8 h-8 stroke-[1.5]" />

                    <h3 className="font-bold text-sm mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* MEMBERSHIP CATEGORIES */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px',
              }}
              variants={staggerContainer}
            >
              <h2 className="text-center font-bold text-xl mb-8 uppercase tracking-widest text-gray-800 border-b pb-4">
                Membership Categories
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  {
                    icon: User,
                    title: 'Full Member',
                    text: 'Active members committed to the vision and mission.',
                  },
                  {
                    icon: UserCheck,
                    title: 'Associate Member',
                    text: 'Supporters and partners contributing to our goals.',
                  },
                  {
                    icon: Hand,
                    title: 'Volunteer',
                    text: 'Individuals who volunteer their time and skills.',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Youth Member',
                    text: 'Young leaders building their future and community.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Honorary Member',
                    text: 'Recognized for exceptional contributions.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-between"
                  >
                    <div>
                      <item.icon className="text-[#054226] mb-2 w-8 h-8 stroke-[1.5] mx-auto" />

                      <h3 className="font-bold text-sm mb-1">
                        {item.title}
                      </h3>

                      <p className="text-[10px] text-gray-500 mb-3">
                        {item.text}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setForm((previous) => ({
                          ...previous,
                          membershipCategory: item.title,
                        }));

                        setErrors((previous) => ({
                          ...previous,
                          membershipCategory: '',
                        }));

                        scrollToRegistration();
                      }}
                      className="w-full bg-[#054226] hover:bg-[#032e1a] text-white text-xs py-1.5 rounded transition-colors"
                    >
                      Select
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* TESTIMONIALS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px',
              }}
              variants={staggerContainer}
            >
              <div className="flex items-center justify-between border-b pb-4 mb-8">
                <h2 className="font-bold text-xl uppercase tracking-widest text-gray-800">
                  What Our Members Say
                </h2>

                <Quote className="text-[#c99e38] opacity-30 w-8 h-8" />
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: 'Adekunle O.',
                    chapter: 'Lagos State Chapter',
                    text: 'Joining RHV gave me the opportunity to serve my community and grow as a leader.',
                    img: 'https://i.pravatar.cc/100?img=11',
                  },
                  {
                    name: 'Maryam S.',
                    chapter: 'Kaduna State Chapter',
                    text: 'The training and support I received as a member has been life-changing.',
                    img: 'https://i.pravatar.cc/100?img=47',
                  },
                  {
                    name: 'Ibrahim T.',
                    chapter: 'Kano State Chapter',
                    text: 'RHV is more than an organization, it is a community with a purpose.',
                    img: 'https://i.pravatar.cc/100?img=12',
                  },
                ].map((test, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4"
                  >
                    <img
                      src={test.img}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm text-gray-600 mb-2 italic">
                        "{test.text}"
                      </p>

                      <h4 className="font-bold text-sm">
                        {test.name}
                      </h4>

                      <p className="text-[10px] text-gray-400 mb-1">
                        {test.chapter}
                      </p>

                      <div className="flex text-[#c99e38] gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={10}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              className="bg-[#054226] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield size={120} />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-3">
                  Be the Change. Join Today!
                </h2>

                <p className="text-gray-300 mb-6 max-w-sm">
                  Together, we can strengthen communities, empower veterans,
                  and contribute to a better Nigeria.
                </p>

                <button
                  type="button"
                  onClick={scrollToRegistration}
                  className="bg-[#c99e38] hover:bg-[#b58b29] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 shadow-lg transition-all"
                >
                  Join Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: REGISTRATION */}
          <motion.div
            ref={registrationRef}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] xl:w-[55%]"
            id="membership-registration"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">

              {/* HEADER */}

              {/* STATUS */}
              {submitState === 'success' && (
                <div className="mb-6 p-4 rounded-xl border border-green-200 bg-green-50 flex gap-3 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />

                  <div className="flex-1">
                    <p className="font-bold text-green-800">
                      Application Prepared
                    </p>

                    <p className="text-sm text-green-700 mt-1">
                      {submitMessage}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitState('idle')}
                    className="text-green-700 hover:text-green-900"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {submitState === 'error' && (
                <div className="mb-6 p-4 rounded-xl border border-red-200 bg-red-50 flex gap-3 items-start">
                  <AlertCircle className="text-red-600 shrink-0" size={20} />

                  <div className="flex-1">
                    <p className="font-bold text-red-800">
                      Please check your application
                    </p>

                    <p className="text-sm text-red-700 mt-1">
                      {submitMessage ||
                        `${errorCount} field${
                          errorCount === 1 ? '' : 's'
                        } require${
                          errorCount === 1 ? 's' : ''
                        } attention.`}
                    </p>
                  </div>
                </div>
              )}

              {/* FORM */}
              <form
                className="space-y-8"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* PERSONAL INFO */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <User
                      size={16}
                      className="text-[#054226]"
                    />
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <Field
                      label="First Name *"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                    />

                    <Field
                      label="Last Name *"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />

                    <div>
                      <label className="sr-only">
                        Date of Birth
                      </label>

                      <div className="relative">
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={form.dateOfBirth}
                          onChange={handleChange}
                          className={`form-input pr-10 ${
                            errors.dateOfBirth
                              ? 'border-red-400'
                              : ''
                          }`}
                        />

                        {/* <Calendar
                          size={16}
                          className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                        /> */}
                      </div>

                      {errors.dateOfBirth && (
                        <ErrorText text={errors.dateOfBirth} />
                      )}
                    </div>

                    <div>
                      <label className="sr-only">
                        Gender
                      </label>

                      <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className={`form-select text-gray-500 ${
                          errors.gender
                            ? 'border-red-400'
                            : ''
                        }`}
                      >
                        <option value="">
                          Gender *
                        </option>

                        {GENDERS.map((gender) => (
                          <option key={gender} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </select>

                      {errors.gender && (
                        <ErrorText text={errors.gender} />
                      )}
                    </div>

                    <select
                      name="maritalStatus"
                      value={form.maritalStatus}
                      onChange={handleChange}
                      className="form-select text-gray-500 lg:col-span-2"
                    >
                      <option value="">
                        Marital Status
                      </option>

                      {MARITAL_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CONTACT */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Phone
                      size={16}
                      className="text-[#054226]"
                    />
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Field
                      type="tel"
                      label="Phone Number *"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />

                    <Field
                      type="email"
                      label="Email Address *"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />

                    <div className="md:col-span-2">
                      <Field
                        label="Home Address *"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        error={errors.address}
                      />
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <MapPin
                      size={16}
                      className="text-[#054226]"
                    />
                    Location
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="form-select text-gray-500"
                    >
                      <option value="Nigeria">
                        Nigeria
                      </option>
                    </select>

                    <div>
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className={`form-select text-gray-500 ${
                          errors.state
                            ? 'border-red-400'
                            : ''
                        }`}
                      >
                        <option value="">
                          State *
                        </option>

                        {STATES.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>

                      {errors.state && (
                        <ErrorText text={errors.state} />
                      )}
                    </div>

                    <div>
                      <Field
                        label="Local Government Area *"
                        name="lga"
                        value={form.lga}
                        onChange={handleChange}
                        error={errors.lga}
                      />
                    </div>

                    <div>
                      <Field
                        label="Ward *"
                        name="ward"
                        value={form.ward}
                        onChange={handleChange}
                        error={errors.ward}
                      />
                    </div>
                  </div>
                </div>

                {/* PROFESSIONAL */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <GraduationCap
                      size={16}
                      className="text-[#054226]"
                    />
                    Professional Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Field
                      label="Occupation *"
                      name="occupation"
                      value={form.occupation}
                      onChange={handleChange}
                      error={errors.occupation}
                    />

                    <Field
                      label="Organization (if any)"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                    />

                    <Field
                      label="Skills / Expertise"
                      name="skills"
                      value={form.skills}
                      onChange={handleChange}
                    />

                    <select
                      name="education"
                      value={form.education}
                      onChange={handleChange}
                      className="form-select text-gray-500"
                    >
                      <option value="">
                        Highest Education
                      </option>

                      {EDUCATION_LEVELS.map((education) => (
                        <option
                          key={education}
                          value={education}
                        >
                          {education}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* MEMBERSHIP DETAILS */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <ShieldCheck
                      size={16}
                      className="text-[#054226]"
                    />
                    Membership Details
                  </h3>

                  <div>
                    <select
                      name="membershipCategory"
                      value={form.membershipCategory}
                      onChange={handleChange}
                      className={`form-select text-gray-500 w-full mb-4 ${
                        errors.membershipCategory
                          ? 'border-red-400'
                          : ''
                      }`}
                    >
                      <option value="">
                        Membership Category *
                      </option>

                      {MEMBERSHIP_CATEGORIES.map((category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                    </select>

                    {errors.membershipCategory && (
                      <ErrorText
                        text={errors.membershipCategory}
                      />
                    )}
                  </div>

                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Areas of Interest (Select all that apply) *
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                    {INTERESTS.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form.interests.includes(
                            interest
                          )}
                          onChange={() =>
                            handleInterestChange(interest)
                          }
                          className="w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]"
                        />

                        {interest}
                      </label>
                    ))}
                  </div>

                  {errors.interests && (
                    <ErrorText text={errors.interests} />
                  )}
                </div>

                {/* EMERGENCY */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Phone
                      size={16}
                      className="text-[#054226]"
                    />
                    Emergency Contact
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <Field
                      label="Contact Name *"
                      name="emergencyName"
                      value={form.emergencyName}
                      onChange={handleChange}
                      error={errors.emergencyName}
                    />

                    <Field
                      label="Relationship *"
                      name="emergencyRelationship"
                      value={form.emergencyRelationship}
                      onChange={handleChange}
                      error={errors.emergencyRelationship}
                    />

                    <Field
                      type="tel"
                      label="Contact Phone *"
                      name="emergencyPhone"
                      value={form.emergencyPhone}
                      onChange={handleChange}
                      error={errors.emergencyPhone}
                    />
                  </div>
                </div>

                {/* UPLOAD & AGREEMENT */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Upload
                      size={16}
                      className="text-[#054226]"
                    />
                    Upload & Agreement
                  </h3>

                  <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* PHOTO */}
                    <div className="w-full md:w-1/3">

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handlePhotoChange}
                        className="hidden"
                        id="profile-photo"
                      />

                      <label
                        htmlFor="profile-photo"
                        className={`w-full min-h-[170px] border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors ${
                          errors.photo
                            ? 'border-red-400'
                            : 'border-gray-300'
                        }`}
                      >
                        {photoPreview ? (
                          <div className="relative">
                            <img
                              src={photoPreview}
                              alt="Profile preview"
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />

                            <button
                              type="button"
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                removePhoto();
                              }}
                              className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                              aria-label="Remove photo"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-gray-400 mb-2" />

                            <span className="text-sm font-bold text-gray-700">
                              Upload Photo
                            </span>

                            <span className="text-[10px] text-gray-400 mt-1">
                              JPG, PNG, WEBP (Max 2MB)
                            </span>
                          </>
                        )}
                      </label>

                      {errors.photo && (
                        <ErrorText text={errors.photo} />
                      )}
                    </div>

                    {/* AGREEMENTS */}
                    <div className="w-full md:w-2/3 space-y-4">

                      <AgreementCheckbox
                        name="termsAccepted"
                        checked={form.termsAccepted}
                        onChange={handleChange}
                        error={errors.termsAccepted}
                      >
                        I agree to the{' '}
                        <span className="font-bold text-gray-800">
                          Terms and Conditions
                        </span>{' '}
                        *
                      </AgreementCheckbox>

                      <AgreementCheckbox
                        name="privacyAccepted"
                        checked={form.privacyAccepted}
                        onChange={handleChange}
                        error={errors.privacyAccepted}
                      >
                        I have read and accept the{' '}
                        <span className="font-bold text-gray-800">
                          Privacy Policy
                        </span>{' '}
                        *
                      </AgreementCheckbox>

                      <AgreementCheckbox
                        name="informationAccurate"
                        checked={form.informationAccurate}
                        onChange={handleChange}
                        error={errors.informationAccurate}
                      >
                        I confirm that the information provided is
                        accurate.
                      </AgreementCheckbox>

                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="w-full bg-[#054226] hover:bg-[#032e1a] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-md font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg"
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />
                      Preparing Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {/* RESET */}
                {submitState === 'success' && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-md font-semibold transition-colors"
                  >
                    Start New Application
                  </button>
                )}

              </form>
            </div>
          </motion.div>
        </div>
      </main>

      {/* GLOBAL FORM CSS */}
      <style>{`
        .form-input,
        .form-select {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          outline: none;
          background-color: #fcfcfc;
          transition: all 0.2s;
        }

        .form-input:focus,
        .form-select:focus {
          border-color: #054226;
          box-shadow: 0 0 0 2px rgba(5, 66, 38, 0.1);
          background-color: #ffffff;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        input[type="date"] {
          color: #6b7280;
        }

        input[type="checkbox"] {
          accent-color: #054226;
        }
      `}</style>
    </div>
  );
}

// --------------------------------------------------
// REUSABLE FIELD
// --------------------------------------------------

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="sr-only"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
        className={`form-input ${
          error ? 'border-red-400' : ''
        }`}
      />

      {error && (
        <p
          id={`${name}-error`}
          data-field-error="true"
          className="mt-1 text-[11px] text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// --------------------------------------------------
// ERROR
// --------------------------------------------------

function ErrorText({ text }) {
  return (
    <p
      data-field-error="true"
      className="mt-1 text-[11px] text-red-600"
    >
      {text}
    </p>
  );
}

// --------------------------------------------------
// AGREEMENT CHECKBOX
// --------------------------------------------------

function AgreementCheckbox({
  name,
  checked,
  onChange,
  error,
  children,
}) {
  return (
    <div>
      <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]"
        />

        <span>{children}</span>
      </label>

      {error && (
        <p
          data-field-error="true"
          className="ml-6 mt-1 text-[11px] text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}