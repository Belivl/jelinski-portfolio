import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Copy,
  Check,
  Mail,
  Camera,
  PartyPopper,
  Calendar,
  Box,
  MessageSquare,
  Tag,
  DollarSign,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/LanguageContext";

const projectTypesData = [
  { id: "portrait", icon: Camera },
  { id: "party", icon: PartyPopper },
  { id: "event", icon: Calendar },
  { id: "3d", icon: Box },
  { id: "other", icon: MessageSquare },
];

const currencies = [
  { id: "USD", symbol: "$" },
  { id: "EUR", symbol: "€" },
  { id: "PLN", symbol: "zł" },
];

export function CopyableInquiry() {
  const { t } = useLanguage();
  const inquiryT = t.contact.inquiry;

  const projectTypes = projectTypesData.map((type) => ({
    ...type,
    name: inquiryT.types[type.id as keyof typeof inquiryT.types],
  }));

  const [copied, setCopied] = useState(false);
  const [subjectCopied, setSubjectCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    projectType: "portrait",
    details: "",
    hasBudget: false,
    budget: "1000",
    currency: "PLN",
  });

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
    const { name, date, location, projectType, hasBudget, budget, currency } =
      formData;
    const typeLabel =
      projectTypes.find((t) => t.id === projectType)?.name ||
      inquiryT.subjectFallback;
    const dateStr = date ? `[${date}]` : "";
    const locStr = location ? `[${location}]` : "";
    const budgetStr = hasBudget
      ? `[${inquiryT.templates.budgetRange.replace(
          ":",
          "",
        )} ${budget}${getCurrencySymbol(currency)}]`
      : "";
    const nameStr = name ? ` - ${name}` : "";

    return `[${typeLabel}]${dateStr}${locStr}${budgetStr}${nameStr}`;
  };

  const generateMessage = () => {
    const {
      name,
      email,
      date,
      location,
      projectType,
      details,
      hasBudget,
      budget,
      currency,
    } = formData;
    const clientName = name || inquiryT.templates.defaultName;
    const clientEmail = email || inquiryT.templates.defaultEmail;
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
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.projectType} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.closing}\n${t.regards}\n${clientName}\n${clientEmail}`;
      }
      if (type === "portrait") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.sessionType} ${extraDetails}\n${t.timeframe} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.availability}\n${t.best}\n${clientName}\n${clientEmail}`;
      }
      if (type === "wedding") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n${t.guests} ${extraDetails}\n\n${t.discuss}\n${t.warmly}\n${clientName}\n${clientEmail}`;
      }
      if (type === "party") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.occasion} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.availability}\n${t.cheers}\n${clientName}\n${clientEmail}`;
      }
      if (type === "event") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.name} ${extraDetails}\n${t.date} ${eventDate}\n${t.location} ${eventLocation}\n\n${t.closing}\n${t.regards}\n${clientName}\n${clientEmail}`;
      }
      if (type === "3d") {
        return `${t.hi}\n\n${t.intro}\n${budgetInfo}\n\n${t.description} ${extraDetails}\n${t.deadline} ${eventDate}\n${t.purpose} ${eventLocation}\n\n${t.closing}\n${t.best}\n${clientName}\n${clientEmail}`;
      }

      // other
      const ot = templates.other;
      return `${ot.hi}\n\n${ot.intro}\n${budgetInfo}\n\n${ot.subject} ${projectType}\n${ot.message} ${extraDetails}\n${ot.dateLocation} ${eventDate} / ${eventLocation}\n\n${ot.closing}\n${ot.best}\n${clientName}\n${clientEmail}`;
    };

    return getTemplate(projectType);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
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

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Form Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">
            {inquiryT.title}
          </Label>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{inquiryT.form.fullName}</Label>
              <Input
                id="name"
                name="name"
                placeholder={inquiryT.form.placeholders.name}
                value={formData.name}
                onChange={handleInputChange}
                className="bg-card border-neutral-800 hover:border-amber-600 transition-colors duration-200 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{inquiryT.form.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={inquiryT.form.placeholders.email}
                value={formData.email}
                onChange={handleInputChange}
                className="bg-card border-neutral-800 hover:border-amber-600 transition-colors duration-200 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">{inquiryT.form.date}</Label>
              <Input
                id="date"
                name="date"
                placeholder={inquiryT.form.placeholders.date}
                value={formData.date}
                onChange={handleInputChange}
                className="bg-card border-neutral-800 hover:border-amber-600 transition-colors duration-200 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">{inquiryT.form.location}</Label>
              <Input
                id="location"
                name="location"
                placeholder={inquiryT.form.placeholders.location}
                value={formData.location}
                onChange={handleInputChange}
                className="bg-card border-neutral-800 hover:border-amber-600 transition-colors duration-200 text-white"
              />
            </div>
          </div>

          {/* Budget Section */}
          <div className="space-y-4 p-4 rounded-md bg-card border border-neutral-800 hover:border-amber-600 transition-colors duration-200">
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
                      min="500"
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
                        <Label className="text-[10px] text-gray-500 shrink-0">
                          {inquiryT.form.budget.manual}
                        </Label>
                        <Input
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="h-7 text-xs bg-zinc-900/50 border-white/5 py-0 px-2 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">{inquiryT.form.details}</Label>
            <textarea
              id="details"
              name="details"
              rows={3}
              placeholder={inquiryT.form.placeholders.details}
              value={formData.details}
              onChange={handleInputChange}
              className="flex w-full rounded-md border border-neutral-800 hover:border-amber-600 transition-all duration-200 bg-card px-3 py-2 text-sm text-white shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleCopyEmail}
            className="flex-1 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 hover:bg-neutral-600 bg-bg-neutral-200 hover:border-neutral-600 transition-all duration-200 dark:text-white"
          >
            {emailCopied ? (
              <Check className="w-4 h-4 text-green-500 mr-2" />
            ) : (
              <Mail className="w-4 h-4 mr-2" />
            )}
            {emailCopied
              ? inquiryT.buttons.emailCopied
              : inquiryT.buttons.copyEmail}
          </Button>
          <Button
            onClick={handleCopy}
            className="flex-1 hover:bg-amber-600 transition-all duration-200"
          >
            {copied ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? inquiryT.buttons.copied : inquiryT.buttons.copyInquiry}
          </Button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="relative">
        <div className="sticky top-8 bg-neutral-900 border border-white/10 rounded-2xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-4 h-4" />
              </span>
              {inquiryT.preview.title}
            </h3>
          </div>

          {/* Subject Line Preview */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-[10px] uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                <Tag className="w-3 h-3" /> {inquiryT.preview.subject}
              </Label>
              <button
                onClick={handleCopySubject}
                className="text-[10px] text-primary hover:underline flex items-center gap-1"
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
            <div className="p-3 bg-black/10 border border-white/5 rounded-lg font-mono text-xs text-white truncate">
              {generateSubject()}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-wider text-neutral-500">
              {inquiryT.preview.body}
            </Label>
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  formData.projectType +
                  formData.name +
                  formData.date +
                  formData.hasBudget +
                  formData.budget +
                  formData.currency
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-black/20 rounded-md p-5 border border-white/5 h-[340px] overflow-y-auto custom-scrollbar"
              >
                <pre className="whitespace-pre-wrap font-mono text-xs text-gray-300 leading-relaxed">
                  {generateMessage()}
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-[10px] text-neutral-500 text-center italic">
            {inquiryT.preview.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
