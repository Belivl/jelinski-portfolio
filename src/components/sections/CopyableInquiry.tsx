import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import {
  Copy,
  Check,
  Mail,
  Camera,
  PartyPopper,
  Calendar,
  Box,
  MessageSquare,
  DollarSign,
  Send,
  Loader2,
  Edit,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { DatePickerInput } from "@/components/ui/calendarInput";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Field, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const projectTypesData = [
  { id: "portrait", icon: Camera },
  { id: "party", icon: PartyPopper },
  { id: "event", icon: Calendar },
  { id: "3d", icon: Box },
  { id: "other", icon: MessageSquare },
];

const currencies = [
  { id: "PLN", symbol: "zł" },
  { id: "EUR", symbol: "€" },
];

export function CopyableInquiry() {
  const { t, language } = useLanguage();
  const inquiryT = t.contact.inquiry;
  // const form = useRef<HTMLFormElement>(null); // Unused

  const projectTypes = projectTypesData.map((type) => ({
    ...type,
    name: inquiryT.types[type.id as keyof typeof inquiryT.types],
  }));

  const [copied, setCopied] = useState(false);
  const [subjectCopied, setSubjectCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // EmailJS States
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isManualEdit, setIsManualEdit] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    projectType: "portrait",
    details: "",
    hasBudget: false,
    budget: "500",
    currency: "PLN",
    _honey: "",
  });

  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    if (!isManualEdit) {
      setMessageBody(generateMessage());
    }
  }, [formData, language]); // Re-generate when form data or language changes, unless manually edited

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (id: string) => {
    setFormData((prev) => ({ ...prev, projectType: id }));
  };

  const handleCurrencySelect = (id: string) => {
    setFormData((prev) => ({ ...prev, currency: id }));
  };

  const toggleBudget = () => {
    setFormData((prev) => ({ ...prev, hasBudget: !prev.hasBudget }));
  };

  const handleBudgetSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, budget: e.target.value }));
  };

  const getCurrencySymbol = (id: string) => {
    return currencies.find((c) => c.id === id)?.symbol || "$";
  };

  const generateSubject = () => {
    const { name, date, location, projectType } = formData;
    const typeLabel =
      projectTypes.find((t) => t.id === projectType)?.name ||
      inquiryT.subjectFallback;
    const dateStr = date ? `[${date}]` : "";
    const locStr = location ? `[${location}]` : "";
    const nameStr = name ? ` - ${name}` : "";

    return `[${typeLabel}]${dateStr}${locStr}${nameStr}`;
  };

  const generateMessage = () => {
    const {
      name,
      date,
      location,
      projectType,
      details,
      hasBudget,
      budget,
      currency,
    } = formData;
    const clientName = name || inquiryT.templates.defaultName;
    const eventDate = date || inquiryT.templates.defaultDate;
    const eventLocation = location || inquiryT.templates.defaultLocation;
    const extraDetails = details || inquiryT.templates.defaultDetails;
    const budgetInfo = hasBudget
      ? `\n${inquiryT.templates.budgetRange} ${budget} ${getCurrencySymbol(
          currency,
        )}`
      : "";

    const templates = inquiryT.templates;

    const getTemplate = (type: string) => {
      const temp = templates[type as keyof typeof templates];
      const t = temp as any;

      if (type === "pricing") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.projectType} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.closing}\n${t.regards}\n${clientName}`;
      }
      if (type === "portrait") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.sessionType} ${extraDetails}\n${t.timeframe} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.availability}\n${t.best}\n${clientName}`;
      }
      if (type === "wedding") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n${t.guests} ${extraDetails}\n\n${t.discuss}\n${t.warmly}\n${clientName}`;
      }
      if (type === "party") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.occasion} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.availability}\n${t.cheers}\n${clientName}`;
      }
      if (type === "event") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.name} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.closing}\n${t.regards}\n${clientName}`;
      }
      if (type === "3d") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.description} ${extraDetails}\n${t.deadline} ${eventDate}\n${t.purpose} ${eventLocation}\n\n${t.closing}\n${t.best}\n${clientName}`;
      }

      // other
      const ot = templates.other;
      return `${ot.hi}\n\n${ot.intro}\n${budgetInfo}\n\n${ot.subject} ${projectType}\n${ot.message} ${extraDetails}\n${ot.dateLocation} ${eventDate} / ${eventLocation}\n\n${ot.closing}\n${ot.best}\n${clientName}`;
    };

    return getTemplate(projectType);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySubject = () => {
    navigator.clipboard.writeText(generateSubject());
    setSubjectCopied(true);
    setTimeout(() => setSubjectCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData._honey) {
      console.warn("EmailJS: Honeypot triggered. Likely a bot.");
      return;
    }

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    ) {
      console.error("EmailJS Error: Missing environment variables:", {
        serviceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
        publicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        templateId: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      });
      setEmailStatus("error");
      return;
    }

    setIsSending(true);
    setEmailStatus("idle");

    const commonParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: generateSubject(),
      message: messageBody,
      to_name: "Michal Jelinski",
    };

    // Primary email to site owner
    const sendPrimary = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      commonParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
    );

    // Auto-reply to user
    const sendAutoReply = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID
      ? emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
          commonParams,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          },
        )
      : Promise.resolve();

    Promise.all([sendPrimary, sendAutoReply]).then(
      ([primaryRes]) => {
        console.log("EmailJS SUCCESS!", primaryRes.status, primaryRes.text);
        setEmailStatus("success");
        setIsSending(false);
        setTimeout(() => setEmailStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS FAILED...", error);
        setEmailStatus("error");
        setIsSending(false);
        setTimeout(() => setEmailStatus("idle"), 5000);
      },
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto grid grid-cols-1  gap-8 lg:gap-12 mb-24">
      {/* Form Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <SectionHeader>{inquiryT.title}</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {projectTypes.map((type) => {
              const isActive = formData.projectType === type.id;
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-200 group ${
                    isActive
                      ? "bg-neutral-100 border-neutral-100 text-black shadow-lg scale-[1.02]"
                      : "bg-card border-t-neutral-700 border-l-neutral-700 border-b-neutral-800 border-r-neutral-800 text-neutral-400 hover:border-amber-600 hover:bg-neutral-800"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-black"
                        : "text-neutral-500 group-hover:text-primary"
                    }`}
                  />
                  <span className="text-xs font-semibold">{type.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Field className="gap-1">
              <FieldLabel htmlFor="name">{inquiryT.form.fullName}</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder={inquiryT.form.placeholders.name}
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="email">
                {inquiryT.form.email || "Email"}
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={
                    inquiryT.form.placeholders.email || "example@mail.com"
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <DatePickerInput
                  value={formData.date}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, date: value }))
                  }
                />
              </div>
              <Field className="w-full gap-1">
                <FieldLabel htmlFor="location">
                  {inquiryT.form.location}
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="location"
                    name="location"
                    placeholder={inquiryT.form.placeholders.location}
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Field>
            </div>
          </div>

          <Field className="gap-1">
            <FieldLabel htmlFor="details">{inquiryT.form.details}</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="details"
                name="details"
                rows={3}
                spellCheck="false"
                placeholder={inquiryT.form.placeholders.details}
                value={formData.details}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Field>
          {/* Budget Section */}
          <div className="space-y-4 p-4 rounded-md bg-input/30 border border-input hover:border-primary/50 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <Label htmlFor="budget-toggle" className="cursor-pointer">
                  {inquiryT.form.budget.toggle}
                </Label>
              </div>
              <button
                id="budget-toggle"
                onClick={toggleBudget}
                className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
                  formData.hasBudget ? "bg-primary" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
                    formData.hasBudget ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {formData.hasBudget && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="pt-2 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {inquiryT.form.budget.range}
                      </span>
                      <span className="text-sm font-bold text-white underline decoration-primary/50 underline-offset-4">
                        {formData.budget}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="4000"
                      step="100"
                      value={formData.budget}
                      onChange={handleBudgetSlider}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
                    />

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex gap-1 flex-1">
                        {currencies.map((curr) => (
                          <button
                            key={curr.id}
                            onClick={() => handleCurrencySelect(curr.id)}
                            className={`flex-1 h-8 text-[10px] font-bold rounded-md border transition-all duration-200 ${
                              formData.currency === curr.id
                                ? "bg-white border-white text-black"
                                : "bg-zinc-900/50 border-white/5 text-gray-400 hover:border-white/20"
                            }`}
                          >
                            {curr.id}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <FieldTitle className="text-[10px] text-gray-500 shrink-0">
                          {inquiryT.form.budget.manual}
                        </FieldTitle>
                        <InputGroup className="h-7">
                          <InputGroupInput
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="text-xs py-0 px-2"
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col sm:flex-row gap-3"></div>
        </div>
      </div>

      {/* Honeypot Field */}
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        value={formData._honey}
        tabIndex={-1}
        autoComplete="off"
        onChange={handleInputChange}
      />

      {/* Preview Section */}
      <div className="relative">
        <div className="sticky top-8 bg-neutral-900 border border-white/10 rounded-2xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <span className="w-12 h-12 rounded-lg  flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </span>
              {inquiryT.preview.title}
            </h3>
          </div>

          {/* Step 1: Copy Email - Optional if sending directly */}
          <div className=" space-y-3 gap-6 flex flex-col mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 border border-white/10 text-neutral-400 font-bold text-sm shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t.contact.step1title}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {t.contact.step1copy}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={handleCopyEmail}
                className={`w-full dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 hover:bg-neutral-600 transition-all duration-200 dark:text-white ${
                  emailCopied
                    ? "border-green-500/50 bg-green-500/10 hover:bg-green-500/20"
                    : ""
                }`}
              >
                {emailCopied ? (
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {emailCopied
                  ? inquiryT.buttons.emailCopied
                  : inquiryT.buttons.copyEmail}
              </Button>
            </div>
          </div>

          {/* Step 2: Review & Send Body */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-primary/20 to-primary/10 border border-primary/30 text-primary font-bold text-sm shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Edit className="w-4 h-4 text-primary" />
                  {inquiryT.preview?.editMessage || "Edit Message"}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {t.contact.step2custom}
                </p>
              </div>
            </div>

            {/* Subject Display */}
            <div className="space-y-2 mb-4 mt-6">
              <div className="flex items-center justify-between">
                <SectionHeader className="mb-0">
                  {inquiryT.preview.subject}
                </SectionHeader>
              </div>
              <div className="p-3 bg-black/10 border border-white/5 rounded-lg font-mono text-xs text-white truncate flex items-center justify-between gap-2">
                {generateSubject()}{" "}
                <button
                  onClick={handleCopySubject}
                  className={`text-[10px] flex items-center gap-1.5 px-2 py-1 rounded-md transition-all duration-200 ${
                    subjectCopied
                      ? "text-green-500 bg-green-500/10"
                      : "text-primary hover:text-primary/80 hover:bg-primary/10"
                  }`}
                >
                  {subjectCopied ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  {subjectCopied
                    ? inquiryT.preview.subjectCopied
                    : inquiryT.preview.copySubject}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <SectionHeader>{inquiryT.preview.body}</SectionHeader>
              <InputGroup>
                <InputGroupTextarea
                  value={messageBody}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setMessageBody(e.target.value);
                    setIsManualEdit(true);
                  }}
                  className="bg-black/20 text-gray-300 min-h-[300px] font-mono text-xs border-0 resize-y focus-visible:ring-0"
                />
              </InputGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Button
                onClick={handleCopy}
                variant="outline"
                className={`w-full transition-all duration-200 border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-300 ${
                  copied
                    ? "bg-green-600/10 text-green-500 border-green-500/50"
                    : ""
                }`}
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-2" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {copied
                  ? inquiryT.buttons.copied
                  : inquiryT.buttons.copyInquiry}
              </Button>

              <Button
                onClick={sendEmail}
                disabled={isSending || !formData.email}
                className={`w-full transition-all duration-200 ${
                  emailStatus === "success"
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : emailStatus === "error"
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-primary hover:bg-amber-600 text-white"
                }`}
              >
                {isSending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : emailStatus === "success" ? (
                  <Check className="w-4 h-4 mr-2" />
                ) : emailStatus === "error" ? (
                  <Mail className="w-4 h-4 mr-2" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}

                {isSending
                  ? inquiryT.preview?.sending || "Sending..."
                  : emailStatus === "success"
                    ? inquiryT.preview?.sent || "Sent!"
                    : emailStatus === "error"
                      ? inquiryT.preview?.error || "Failed"
                      : inquiryT.preview?.sendMessage || "Send Email"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
