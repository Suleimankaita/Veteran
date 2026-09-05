import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Check,
  ChevronDown,
  CircleAlert,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  Trash2,
  User,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Plus,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| RHV EDIT MEMBER
|--------------------------------------------------------------------------
|
| This page is designed around your current MongoDB schemas:
|
| MembersSchema
| RHVProfiles
| RHVUserAddress
| RHVUserInformation
|
|--------------------------------------------------------------------------
*/

const ROLE_OPTIONS = [
  "Admin",
  "Chairman",
  "Sectery",
  "ViceChairman",
  "Traderer",
  "Member",
];

const MARITAL_STATUS_OPTIONS = [
  "Single",
  "Married",
  "Divorced",
  "Widowed",
  "Separated",
];

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

const INTEREST_SUGGESTIONS = [
  "Community Development",
  "Youth Empowerment",
  "Veterans Welfare",
  "Education",
  "Healthcare",
  "Agriculture",
  "Technology",
  "Entrepreneurship",
  "Leadership",
  "Humanitarian Services",
  "Security",
  "Women Empowerment",
];

const EMPTY_FORM = {
  // MembersSchema
  Username: "",
  Role: "Member",

  // RHVProfiles
  Firtname: "",
  Lastname: "",
  Password: "",
  profileImg: "",
  PhoneNumber: "",
  Email: "",

  // RHVUserAddress
  HouseNumber: "",
  StreetName: "",
  State: "",
  LocalGov: "",
  Ward: "",
  constactPhone: "",
  country: "Nigeria",

  // RHVUserInformation
  Occupation: "",
  Organization: "",
  Skills: "",
  Qualification: "",
  dateOfBirth: "",
  realtionship: "",
  maritalStatus: "",
  emergencyRelationship: "",
  AreasOfInterest: [],
};

export default function RHVEditMember() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState(EMPTY_FORM);
  const [initialForm, setInitialForm] = useState(EMPTY_FORM);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [errors, setErrors] = useState({});
  const [interestInput, setInterestInput] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [toast, setToast] = useState(null);

  const [profilePreview, setProfilePreview] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Load Member
  |--------------------------------------------------------------------------
  |
  | Replace this mock request with:
  |
  | GET /api/admin/members/:id
  |
  */

  useEffect(() => {
    loadMember();
  }, [id]);

  const loadMember = async () => {
    try {
      setLoading(true);

      /*
       * REAL API:
       *
       * const response = await fetch(`/api/admin/members/${id}`, {
       *   credentials: "include"
       * });
       *
       * const data = await response.json();
       */

      // Temporary example data
      await new Promise((resolve) => setTimeout(resolve, 700));

      const mockMember = {
        Username: "abdullahi_veteran",
        Role: "Member",

        Firtname: "Abdullahi",
        Lastname: "Mohammed",
        Password: "",
        profileImg: "",
        PhoneNumber: "08031234567",
        Email: "abdullahi@example.com",

        HouseNumber: "12",
        StreetName: "Veterans Avenue",
        State: "Katsina",
        LocalGov: "Katsina",
        Ward: "Kofar Sauri",
        constactPhone: "08031234567",
        country: "Nigeria",

        Occupation: "Business Owner",
        Organization: "ABC Enterprises",
        Skills: "Leadership, Management, Community Mobilization",
        Qualification: "B.Sc Business Administration",
        dateOfBirth: "1985-06-15",
        realtionship: "Aisha Mohammed",
        maritalStatus: "Married",
        emergencyRelationship: "Wife",
        AreasOfInterest: [
          "Veterans Welfare",
          "Community Development",
          "Youth Empowerment",
        ],
      };

      setForm(mockMember);
      setInitialForm(mockMember);
      setProfilePreview(mockMember.profileImg || "");
    } catch (error) {
      console.error(error);

      showToast(
        "error",
        "Unable to load member information."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Dirty State
  |--------------------------------------------------------------------------
  */

  const isDirty = useMemo(() => {
    return JSON.stringify(form) !== JSON.stringify(initialForm);
  }, [form, initialForm]);

  /*
  |--------------------------------------------------------------------------
  | Input Handler
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Profile Image
  |--------------------------------------------------------------------------
  */

  const handleProfileImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("error", "Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast(
        "error",
        "Profile image must be less than 5MB."
      );
      return;
    }

    const preview = URL.createObjectURL(file);

    setProfilePreview(preview);

    /*
     * Keep the actual File object separately in production
     * and send it using FormData.
     */

    setForm((previous) => ({
      ...previous,
      profileImg: file,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | Interests
  |--------------------------------------------------------------------------
  */

  const addInterest = (interest) => {
    const cleanInterest = interest.trim();

    if (!cleanInterest) return;

    if (
      form.AreasOfInterest.some(
        (item) =>
          item.toLowerCase() === cleanInterest.toLowerCase()
      )
    ) {
      setInterestInput("");
      return;
    }

    setForm((previous) => ({
      ...previous,
      AreasOfInterest: [
        ...previous.AreasOfInterest,
        cleanInterest,
      ],
    }));

    setInterestInput("");
  };

  const removeInterest = (interest) => {
    setForm((previous) => ({
      ...previous,
      AreasOfInterest:
        previous.AreasOfInterest.filter(
          (item) => item !== interest
        ),
    }));
  };

  const handleInterestKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addInterest(interestInput);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Validation
  |--------------------------------------------------------------------------
  */

  const validateForm = () => {
    const nextErrors = {};

    if (!form.Username.trim()) {
      nextErrors.Username = "Username is required.";
    }

    if (!form.Firtname.trim()) {
      nextErrors.Firtname = "First name is required.";
    }

    if (!form.Lastname.trim()) {
      nextErrors.Lastname = "Last name is required.";
    }

    if (!form.Email.trim()) {
      nextErrors.Email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.Email)
    ) {
      nextErrors.Email = "Enter a valid email address.";
    }

    if (!form.PhoneNumber) {
      nextErrors.PhoneNumber = "Phone number is required.";
    }

    if (!form.State) {
      nextErrors.State = "State is required.";
    }

    if (!form.country.trim()) {
      nextErrors.country = "Country is required.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  /*
  |--------------------------------------------------------------------------
  | Save
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showToast(
        "error",
        "Please correct the highlighted fields."
      );
      return;
    }

    try {
      setSaving(true);

      /*
       * REAL API:
       *
       * const formData = new FormData();
       *
       * Object.entries(form).forEach(([key, value]) => {
       *   if (key === "AreasOfInterest") {
       *     formData.append(
       *       key,
       *       JSON.stringify(value)
       *     );
       *   } else if (value !== "") {
       *     formData.append(key, value);
       *   }
       * });
       *
       * await fetch(`/api/admin/members/${id}`, {
       *   method: "PATCH",
       *   body: formData,
       *   credentials: "include"
       * });
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setInitialForm(form);

      showToast(
        "success",
        "Member information updated successfully."
      );
    } catch (error) {
      console.error(error);

      showToast(
        "error",
        "Failed to update member information."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Toast
  |--------------------------------------------------------------------------
  */

  const showToast = (type, message) => {
    setToast({
      type,
      message,
    });

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  /*
  |--------------------------------------------------------------------------
  | Cancel
  |--------------------------------------------------------------------------
  */

  const handleCancel = () => {
    if (isDirty) {
      const confirmLeave = window.confirm(
        "You have unsaved changes. Are you sure you want to leave?"
      );

      if (!confirmLeave) return;
    }

    navigate(-1);
  };

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7faf8] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-[#075c35]/20 border-t-[#075c35] animate-spin" />

          <p className="text-sm text-gray-500">
            Loading member information...
          </p>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (
    <div className="min-h-screen bg-[#f7faf8] text-gray-900">
      {/* Toast */}
      {toast && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            x: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          className={`fixed top-5 right-5 z-[100] min-w-[320px] max-w-[420px] rounded-2xl shadow-2xl border px-5 py-4 flex items-start gap-3 ${
            toast.type === "success"
              ? "bg-white border-green-200"
              : "bg-white border-red-200"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              toast.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {toast.type === "success" ? (
              <Check size={18} />
            ) : (
              <CircleAlert size={18} />
            )}
          </div>

          <div className="flex-1">
            <p className="font-semibold text-sm">
              {toast.type === "success"
                ? "Success"
                : "Error"}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => setToast(null)}
            className="text-gray-400 hover:text-gray-700"
          >
            <X size={17} />
          </button>
        </motion.div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[76px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleCancel}
                className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition"
              >
                <ArrowLeft size={19} />
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-[#043c23]">
                    Edit Member
                  </h1>

                  {isDirty && (
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Unsaved changes
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-0.5">
                  Update member profile and information
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCancel}
                className="hidden sm:flex h-10 px-4 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-medium text-sm"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={saving}
                className="h-10 px-4 sm:px-5 rounded-xl bg-[#075c35] hover:bg-[#043c23] text-white font-semibold text-sm flex items-center gap-2 disabled:opacity-60 transition shadow-sm"
              >
                {saving ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    <span className="hidden sm:inline">
                      Saving...
                    </span>
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-6">
            {/* MAIN */}
            <div className="space-y-6">
              {/* Profile */}
              <Section
                icon={User}
                title="Personal Information"
                description="Basic identity information of the RHV member."
              >
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8">
                  {/* Avatar */}
                  <div className="flex lg:flex-col items-center lg:items-center gap-4">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-[#e9f3ee] border-4 border-white shadow-lg flex items-center justify-center">
                        {profilePreview ? (
                          <img
                            src={profilePreview}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User
                            size={48}
                            className="text-[#075c35]"
                          />
                        )}
                      </div>

                      <label className="absolute right-0 bottom-0 w-10 h-10 rounded-full bg-[#c99e38] text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#ae842c] transition">
                        <Camera size={18} />

                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProfileImage}
                        />
                      </label>
                    </div>

                    <div className="text-center">
                      <p className="font-semibold text-sm">
                        Profile Photo
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        JPG, PNG up to 5MB
                      </p>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      label="First Name"
                      name="Firtname"
                      value={form.Firtname}
                      onChange={handleChange}
                      required
                      error={errors.Firtname}
                      icon={User}
                    />

                    <InputField
                      label="Last Name"
                      name="Lastname"
                      value={form.Lastname}
                      onChange={handleChange}
                      required
                      error={errors.Lastname}
                      icon={User}
                    />

                    <InputField
                      label="Username"
                      name="Username"
                      value={form.Username}
                      onChange={handleChange}
                      required
                      error={errors.Username}
                    />

                    <InputField
                      label="Date of Birth"
                      name="dateOfBirth"
                      type="date"
                      value={form.dateOfBirth}
                      onChange={handleChange}
                      icon={Heart}
                    />

                    <SelectField
                      label="Marital Status"
                      name="maritalStatus"
                      value={form.maritalStatus}
                      onChange={handleChange}
                      options={MARITAL_STATUS_OPTIONS}
                    />

                    <InputField
                      label="Relationship / Emergency Contact Name"
                      name="realtionship"
                      value={form.realtionship}
                      onChange={handleChange}
                      icon={Users}
                    />
                  </div>
                </div>
              </Section>

              {/* Contact */}
              <Section
                icon={Phone}
                title="Contact Information"
                description="Member's primary communication channels."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="Email Address"
                    name="Email"
                    type="email"
                    value={form.Email}
                    onChange={handleChange}
                    required
                    error={errors.Email}
                    icon={Mail}
                  />

                  <InputField
                    label="Phone Number"
                    name="PhoneNumber"
                    type="tel"
                    value={form.PhoneNumber}
                    onChange={handleChange}
                    required
                    error={errors.PhoneNumber}
                    icon={Phone}
                  />

                  <InputField
                    label="Emergency / Contact Phone"
                    name="constactPhone"
                    type="tel"
                    value={form.constactPhone}
                    onChange={handleChange}
                    icon={Phone}
                  />
                </div>
              </Section>

              {/* Address */}
              <Section
                icon={MapPin}
                title="Address & Location"
                description="Residential and geographic information."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="House Number"
                    name="HouseNumber"
                    value={form.HouseNumber}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Street Name"
                    name="StreetName"
                    value={form.StreetName}
                    onChange={handleChange}
                  />

                  <SelectField
                    label="State"
                    name="State"
                    value={form.State}
                    onChange={handleChange}
                    options={STATES}
                    required
                    error={errors.State}
                  />

                  <InputField
                    label="Local Government Area"
                    name="LocalGov"
                    value={form.LocalGov}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Ward"
                    name="Ward"
                    value={form.Ward}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    error={errors.country}
                  />
                </div>
              </Section>

              {/* Professional */}
              <Section
                icon={Briefcase}
                title="Professional Information"
                description="Professional background, skills and qualifications."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="Occupation"
                    name="Occupation"
                    value={form.Occupation}
                    onChange={handleChange}
                    icon={Briefcase}
                  />

                  <InputField
                    label="Organization"
                    name="Organization"
                    value={form.Organization}
                    onChange={handleChange}
                    icon={Briefcase}
                  />

                  <InputField
                    label="Qualification"
                    name="Qualification"
                    value={form.Qualification}
                    onChange={handleChange}
                    icon={GraduationCap}
                  />

                  <div className="md:col-span-2">
                    <TextareaField
                      label="Skills"
                      name="Skills"
                      value={form.Skills}
                      onChange={handleChange}
                      placeholder="e.g. Leadership, Engineering, Accounting, Community Mobilization..."
                    />
                  </div>
                </div>
              </Section>

              {/* Interests */}
              <Section
                icon={Heart}
                title="Areas of Interest"
                description="Programs and areas where the member would like to contribute."
              >
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {form.AreasOfInterest.map(
                      (interest) => (
                        <span
                          key={interest}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#e9f3ee] text-[#075c35] border border-[#cde3d6] text-sm font-medium"
                        >
                          {interest}

                          <button
                            type="button"
                            onClick={() =>
                              removeInterest(interest)
                            }
                            className="hover:text-red-600"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        value={interestInput}
                        onChange={(e) =>
                          setInterestInput(
                            e.target.value
                          )
                        }
                        onKeyDown={
                          handleInterestKeyDown
                        }
                        placeholder="Add an area of interest..."
                        className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 outline-none focus:ring-2 focus:ring-[#075c35]/15 focus:border-[#075c35]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        addInterest(interestInput)
                      }
                      className="h-11 px-4 rounded-xl bg-[#075c35] text-white font-medium flex items-center gap-2"
                    >
                      <Plus size={17} />
                      Add
                    </button>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Suggestions
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {INTEREST_SUGGESTIONS.filter(
                        (item) =>
                          !form.AreasOfInterest.includes(
                            item
                          )
                      ).map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() =>
                            addInterest(interest)
                          }
                          className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-[#075c35] hover:text-[#075c35] hover:bg-[#f1f8f4] transition"
                        >
                          + {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* Emergency */}
              <Section
                icon={Shield}
                title="Emergency Contact"
                description="Information used for emergency communication."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="Emergency Contact Name"
                    name="realtionship"
                    value={form.realtionship}
                    onChange={handleChange}
                    icon={User}
                  />

                  <InputField
                    label="Emergency Relationship"
                    name="emergencyRelationship"
                    value={
                      form.emergencyRelationship
                    }
                    onChange={handleChange}
                    placeholder="e.g. Wife, Husband, Brother, Sister"
                  />

                  <InputField
                    label="Emergency Phone"
                    name="constactPhone"
                    type="tel"
                    value={form.constactPhone}
                    onChange={handleChange}
                    icon={Phone}
                  />
                </div>
              </Section>

              {/* Account */}
              <Section
                icon={Shield}
                title="Account & Administration"
                description="Administrative controls for this member."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SelectField
                    label="Member Role"
                    name="Role"
                    value={form.Role}
                    onChange={handleChange}
                    options={ROLE_OPTIONS}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        name="Password"
                        value={form.Password}
                        onChange={handleChange}
                        placeholder="Leave empty to keep current password"
                        autoComplete="new-password"
                        className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 pr-24 outline-none focus:ring-2 focus:ring-[#075c35]/15 focus:border-[#075c35]"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#075c35]"
                      >
                        {showPassword
                          ? "Hide"
                          : "Show"}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      Leave blank if the password
                      should remain unchanged.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 flex gap-3">
                  <CircleAlert
                    size={19}
                    className="text-amber-600 shrink-0 mt-0.5"
                  />

                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Password security
                    </p>

                    <p className="text-sm text-amber-800 mt-1">
                      Never store or send an existing
                      password from the frontend. Your
                      backend should hash a newly supplied
                      password using a secure password
                      hashing algorithm.
                    </p>
                  </div>
                </div>
              </Section>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">
              {/* Member summary */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Member Preview
                </p>

                <div className="flex flex-col items-center text-center mt-5">
                  <div className="w-24 h-24 rounded-full bg-[#e9f3ee] overflow-hidden flex items-center justify-center border-4 border-white shadow">
                    {profilePreview ? (
                      <img
                        src={profilePreview}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User
                        size={36}
                        className="text-[#075c35]"
                      />
                    )}
                  </div>

                  <h2 className="font-bold text-lg mt-4">
                    {form.Firtname || "First Name"}{" "}
                    {form.Lastname || "Last Name"}
                  </h2>

                  <p className="text-sm text-gray-500">
                    @{form.Username || "username"}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9f3ee] text-[#075c35] text-xs font-semibold">
                    <Check size={13} />
                    {form.Role}
                  </span>
                </div>
              </div>

              {/* Sections */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Profile Sections
                </p>

                <div className="space-y-1">
                  <SidebarLink
                    icon={User}
                    label="Personal Information"
                  />

                  <SidebarLink
                    icon={Phone}
                    label="Contact Information"
                  />

                  <SidebarLink
                    icon={MapPin}
                    label="Address & Location"
                  />

                  <SidebarLink
                    icon={Briefcase}
                    label="Professional Information"
                  />

                  <SidebarLink
                    icon={Heart}
                    label="Areas of Interest"
                  />

                  <SidebarLink
                    icon={Shield}
                    label="Emergency Contact"
                  />

                  <SidebarLink
                    icon={Shield}
                    label="Account & Administration"
                  />
                </div>
              </div>

              {/* Save card */}
              <div className="bg-[#043c23] rounded-2xl p-5 text-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Save size={19} />
                </div>

                <h3 className="font-bold">
                  Save your changes
                </h3>

                <p className="text-sm text-white/70 mt-2 leading-6">
                  Review the member information before
                  saving. Important administrative changes
                  should be recorded in the RHV audit log.
                </p>

                <button
                  type="submit"
                  disabled={saving || !isDirty}
                  className="w-full mt-5 h-11 rounded-xl bg-[#c99e38] hover:bg-[#ae842c] text-white font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {saving
                    ? "Saving..."
                    : isDirty
                    ? "Save Changes"
                    : "No Changes"}
                </button>
              </div>

              {/* Danger */}
              <div className="bg-white border border-red-200 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Trash2 size={17} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-red-700">
                      Danger Zone
                    </h3>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Permanent account actions
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      "error",
                      "Delete should be implemented through a protected confirmation workflow."
                    )
                  }
                  className="w-full mt-4 h-10 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-sm font-semibold transition"
                >
                  Delete Member
                </button>
              </div>
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Section
|--------------------------------------------------------------------------
*/

function Section({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="px-5 sm:px-7 py-5 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e9f3ee] text-[#075c35] flex items-center justify-center shrink-0">
            <Icon size={19} />
          </div>

          <div>
            <h2 className="font-bold text-lg text-[#043c23]">
              {title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7">{children}</div>
    </motion.section>
  );
}

/*
|--------------------------------------------------------------------------
| Input
|--------------------------------------------------------------------------
*/

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  error,
  icon: Icon,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        )}

        <input
          type={type}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-11 rounded-xl border bg-white outline-none transition ${
            Icon ? "pl-10" : "px-4"
          } pr-4 ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-[#075c35] focus:ring-2 focus:ring-[#075c35]/10"
          }`}
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Textarea
|--------------------------------------------------------------------------
*/

function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <textarea
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none resize-none focus:border-[#075c35] focus:ring-2 focus:ring-[#075c35]/10 transition"
      />
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Select
|--------------------------------------------------------------------------
*/

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          className={`appearance-none w-full h-11 rounded-xl border bg-white px-4 pr-10 outline-none ${
            error
              ? "border-red-400"
              : "border-gray-200 focus:border-[#075c35] focus:ring-2 focus:ring-[#075c35]/10"
          }`}
        >
          <option value="">
            Select {label}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Sidebar Link
|--------------------------------------------------------------------------
*/

function SidebarLink({ icon: Icon, label }) {
  return (
    <button
      type="button"
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-gray-600 hover:bg-[#f1f8f4] hover:text-[#075c35] transition"
    >
      <Icon size={17} />
      <span>{label}</span>
    </button>
  );
}