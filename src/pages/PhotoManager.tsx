import { useState, useMemo, useEffect } from "react";
import { getPhotos } from "@/data/photos.ts";
import type { Photo } from "@/data/photos.ts";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Copy,
  Download,
  Save,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Square,
  RefreshCcw,
  UploadCloud,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TAG_CATEGORIES } from "@/data/tags";

import { Link } from "react-router-dom";
const CATEGORIES: Photo["category"][] = [
  "client",
  "portrait",
  "landscape",
  "various",
  "event",
  "black-and-white",
  "travel",
];
const ITEMS_PER_PAGE = 20;

export function PhotoManager() {
  const [photos, setPhotos] = useState<Photo[]>(getPhotos());
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterTag, setFilterTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"title" | "date" | "category">("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [bulkMode, setBulkMode] = useState(false);
  const [bulkTitle, setBulkTitle] = useState("");
  const [bulkCamera, setBulkCamera] = useState("");
  const [bulkPlace, setBulkPlace] = useState("");
  const [bulkDate, setBulkDate] = useState("");

  const selectedPhoto = photos.find((p) => p.id === selectedPhotoId);

  // Extract all unique cameras from photos
  const availableCameras = useMemo(() => {
    const cameras = new Set<string>();
    photos.forEach((p) => cameras.add(p.camera));
    return Array.from(cameras).sort();
  }, [photos]);

  // Filter and sort photos
  const filteredPhotos = useMemo(() => {
    let result = photos;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(query)) ||
          p.camera.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)),
      );
    }

    // Category filter
    if (filterCategory !== "all") {
      result = result.filter((p) => p.category === filterCategory);
    }

    // Tag filter
    if (filterTag !== "all") {
      result = result.filter((p) => p.tags.includes(filterTag));
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "title")
        return (a.title || "").localeCompare(b.title || "");
      if (sortBy === "date") {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

    return result;
  }, [photos, searchQuery, filterCategory, filterTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE);
  const paginatedPhotos = filteredPhotos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const updatePhoto = (id: string, updates: Partial<Photo>) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    );
  };

  const bulkUpdatePhotos = (updates: Partial<Photo>) => {
    setPhotos((prev) =>
      prev.map((p) =>
        p.id && selectedPhotos.has(p.id) ? { ...p, ...updates } : p,
      ),
    );
  };

  const toggleTag = (photoId: string, tag: string) => {
    const photo = photos.find((p) => p.id === photoId);
    if (!photo) return;

    const newTags = photo.tags.includes(tag)
      ? photo.tags.filter((t) => t !== tag)
      : [...photo.tags, tag];

    updatePhoto(photoId, { tags: newTags });
  };

  const togglePhotoSelection = (photoId: string) => {
    const newSelected = new Set(selectedPhotos);
    if (newSelected.has(photoId) && photoId) {
      newSelected.delete(photoId);
    } else if (photoId) {
      newSelected.add(photoId);
    }
    setSelectedPhotos(newSelected);
  };

  const selectAll = () => {
    const ids = new Set<string>();
    paginatedPhotos.forEach((p) => {
      if (p.id) ids.add(p.id);
    });
    setSelectedPhotos(ids);
  };

  const deselectAll = () => {
    setSelectedPhotos(new Set());
  };

  // Compute common properties of selected photos
  const {
    commonTags,
    commonCategory,
    commonTitle,
    commonCamera,
    commonPlace,
    commonDate,
  } = useMemo(() => {
    if (selectedPhotos.size === 0)
      return {
        commonTags: [],
        commonCategory: null,
        commonTitle: null,
        commonCamera: null,
        commonPlace: null,
        commonDate: null,
      };

    const selected = photos.filter((p) => p.id && selectedPhotos.has(p.id));
    if (selected.length === 0)
      return {
        commonTags: [],
        commonCategory: null,
        commonTitle: null,
        commonCamera: null,
        commonPlace: null,
        commonDate: null,
      };

    // Helper for common value
    const getCommonValue = (key: keyof Photo) => {
      const first = selected[0][key];
      return selected.every((p) => p[key] === first) ? first : null;
    };

    // Common Tags: present in EVERY selected photo
    const firstTags = selected[0].tags;
    const commonTags = firstTags.filter((tag) =>
      selected.every((p) => p.tags.includes(tag)),
    );

    return {
      commonTags,
      commonCategory: getCommonValue("category"),
      commonTitle: getCommonValue("title"),
      commonCamera: getCommonValue("camera"),
      commonPlace: getCommonValue("place"),
      commonDate: getCommonValue("date"),
    };
  }, [selectedPhotos, photos]);

  // Sync state with selection changes
  useEffect(() => {
    setBulkTitle(typeof commonTitle === "string" ? commonTitle : "");
    setBulkCamera(typeof commonCamera === "string" ? commonCamera : "");
    setBulkPlace(typeof commonPlace === "string" ? commonPlace : "");
    setBulkDate(typeof commonDate === "string" ? commonDate : "");
  }, [commonTitle, commonCamera, commonPlace, commonDate, selectedPhotos]);

  const toggleBulkTag = (tag: string) => {
    const isCommon = commonTags.includes(tag);

    setPhotos((prev) =>
      prev.map((p) => {
        if (!p.id || !selectedPhotos.has(p.id)) return p;

        let newTags = p.tags;
        if (isCommon) {
          newTags = newTags.filter((t) => t !== tag);
        } else {
          if (!newTags.includes(tag)) {
            newTags = [...newTags, tag];
          }
        }
        return { ...p, tags: newTags };
      }),
    );
  };

  const bulkSetCategory = (category: Photo["category"]) => {
    bulkUpdatePhotos({ category });
  };

  const applyBulkTitle = () => {
    bulkUpdatePhotos({ title: bulkTitle });
    setBulkTitle("");
  };

  const applyBulkCamera = () => {
    bulkUpdatePhotos({ camera: bulkCamera });
    setBulkCamera("");
  };

  const applyBulkPlace = () => {
    bulkUpdatePhotos({ place: bulkPlace });
    setBulkPlace("");
  };

  const applyBulkDate = () => {
    bulkUpdatePhotos({ date: bulkDate });
    setBulkDate("");
  };

  const copyToClipboard = () => {
    const exportData = photos.map(({ id, ...rest }) => rest);
    const dataString = `export const photoData: Photo[] = ${JSON.stringify(
      exportData,
      null,
      2,
    )};`;
    navigator.clipboard.writeText(dataString);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const downloadJSON = () => {
    const exportData = photos.map(({ id, ...rest }) => rest);
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "photos.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      // Remove generated IDs before saving
      const exportData = photos.map(({ id, ...rest }) => rest);

      const response = await fetch("/api/save-photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exportData),
      });

      if (!response.ok) throw new Error("Failed to save");

      // Show success feedback
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving:", error);
      alert("Failed to save changes. Check console for details.");
    } finally {
      setIsSaving(false);
    }
  };

  const resetChanges = () => {
    if (
      confirm(
        "Are you sure you want to reset? All unsaved changes will be lost.",
      )
    ) {
      window.location.reload();
    }
  };

  const allUsedTags = useMemo(() => {
    const tags = new Set<string>();
    photos.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [photos]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 pb-20">
      <div className="container mx-auto px-6">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors mb-8 font-mono text-xs uppercase tracking-widest group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-amber-500">
                📸 Photo Manager
              </h1>
              <p className="text-neutral-400">
                {photos.length} total photos • {filteredPhotos.length} filtered
                {bulkMode &&
                  selectedPhotos.size > 0 &&
                  ` • ${selectedPhotos.size} selected`}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={resetChanges}
                className="gap-2 text-red-400 hover:text-red-300 border-red-900/50 hover:bg-red-950"
              >
                <RefreshCcw className="w-4 h-4" />
                Reset
              </Button>
              <Button
                variant="gold"
                onClick={saveChanges}
                disabled={isSaving}
                className="gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                {isSaving ? "Saving..." : "Save to File"}
              </Button>
              <div className="w-px h-8 bg-neutral-800 mx-2" />
              <Button
                variant={bulkMode ? "gold" : "outline"}
                onClick={() => {
                  setBulkMode(!bulkMode);
                  setSelectedPhotos(new Set());
                }}
                className="gap-2"
              >
                {bulkMode ? (
                  <CheckSquare className="w-4 h-4" />
                ) : (
                  <Square className="w-4 h-4" />
                )}
                Bulk Mode
              </Button>
              <Button
                variant="outline"
                onClick={copyToClipboard}
                className="gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Array
              </Button>
              <Button
                variant="outline"
                onClick={downloadJSON}
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download JSON
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-neutral-900 p-4 rounded-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-neutral-800 border border-neutral-700 rounded pl-10 pr-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={filterTag}
              onChange={(e) => {
                setFilterTag(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
            >
              <option value="all">All Tags</option>
              {allUsedTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>

        {showCopyNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-24 right-6 bg-green-500 text-black px-6 py-3 rounded-lg shadow-lg z-50 font-medium"
          >
            ✓ Copied to clipboard!
          </motion.div>
        )}

        {/* Bulk Actions */}
        {bulkMode && (
          <div className="mb-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-amber-500">
                Bulk Actions ({selectedPhotos.size} selected)
              </h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={selectAll}>
                  Select All ({paginatedPhotos.length})
                </Button>
                <Button size="sm" variant="outline" onClick={deselectAll}>
                  Deselect All
                </Button>
              </div>
            </div>

            {selectedPhotos.size > 0 && (
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-neutral-400 mb-2">Set Metadata:</p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Title */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder={
                          selectedPhotos.size > 0 && commonTitle === null
                            ? "(Multiple)"
                            : "Set Title"
                        }
                        value={bulkTitle}
                        onChange={(e) => setBulkTitle(e.target.value)}
                        className={`bg-neutral-800 border border-neutral-600 rounded px-2 py-1 text-sm flex-1 focus:border-amber-500 focus:outline-none ${
                          commonTitle === null && !bulkTitle
                            ? "italic placeholder:text-neutral-500"
                            : ""
                        }`}
                      />
                      <Button
                        size="sm"
                        variant="gold"
                        onClick={applyBulkTitle}
                        disabled={!bulkTitle}
                      >
                        Set
                      </Button>
                    </div>
                    {/* Camera */}
                    <div className="flex gap-2">
                      <Select value={bulkCamera} onValueChange={setBulkCamera}>
                        <SelectTrigger
                          className={`bg-neutral-800 border border-neutral-600 h-8 text-sm focus:border-amber-500 rounded-md ${
                            commonCamera === null && !bulkCamera
                              ? "text-neutral-500 italic"
                              : ""
                          }`}
                        >
                          <SelectValue
                            placeholder={
                              selectedPhotos.size > 0 && commonCamera === null
                                ? "(Multiple)"
                                : "Camera"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700">
                          {availableCameras.map((cam) => (
                            <SelectItem key={cam} value={cam}>
                              {cam}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        size="sm"
                        variant="gold"
                        onClick={applyBulkCamera}
                        disabled={!bulkCamera}
                      >
                        Set
                      </Button>
                    </div>
                    {/* Place */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder={
                          selectedPhotos.size > 0 && commonPlace === null
                            ? "(Multiple)"
                            : "Set Place"
                        }
                        value={bulkPlace}
                        onChange={(e) => setBulkPlace(e.target.value)}
                        className={`bg-neutral-800 border border-neutral-600 rounded px-2 py-1 text-sm flex-1 focus:border-amber-500 focus:outline-none ${
                          commonPlace === null && !bulkPlace
                            ? "italic placeholder:text-neutral-500"
                            : ""
                        }`}
                      />
                      <Button
                        size="sm"
                        variant="gold"
                        onClick={applyBulkPlace}
                        disabled={!bulkPlace}
                      >
                        Set
                      </Button>
                    </div>
                    {/* Date */}
                    <div className="flex gap-2">
                      <input
                        type="date"
                        value={bulkDate}
                        onChange={(e) => setBulkDate(e.target.value)}
                        className={`bg-neutral-800 border border-neutral-600 rounded px-2 py-1 text-sm flex-1 focus:border-amber-500 focus:outline-none ${
                          commonDate === null && !bulkDate
                            ? "text-neutral-500"
                            : ""
                        }`}
                      />
                      <Button
                        size="sm"
                        variant="gold"
                        onClick={applyBulkDate}
                        disabled={!bulkDate}
                      >
                        Set
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mb-2">Add Tags:</p>
                <div className="space-y-3">
                  {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
                    <div key={category}>
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Button
                            key={tag}
                            size="sm"
                            variant={
                              commonTags.includes(tag) ? "gold" : "outline"
                            }
                            onClick={() => toggleBulkTag(tag)}
                            className="text-xs h-7 px-2"
                          >
                            {commonTags.includes(tag) ? "✓ " : "+ "}
                            {tag}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs text-neutral-400 mb-2">Set Category:</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <Button
                        key={cat}
                        size="sm"
                        variant={commonCategory === cat ? "gold" : "outline"}
                        onClick={() => bulkSetCategory(cat)}
                        className="text-xs capitalize"
                      >
                        {cat.replace("-", " ")}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex  gap-6">
          {/* Photo List */}
          <div className=" bg-neutral-900 rounded-lg p-4 w-fit">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-amber-500">
                Photos ({paginatedPhotos.length} of {filteredPhotos.length})
              </h2>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-400px)] overflow-y-auto mb-4 w-fit">
              <AnimatePresence mode="popLayout">
                {paginatedPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`p-3 rounded cursor-pointer transition-colors flex items-center gap-3 w-fit ${
                      selectedPhotoId === photo.id
                        ? "bg-amber-500 text-black"
                        : photo.id && selectedPhotos.has(photo.id)
                          ? "bg-amber-500/20 border border-amber-500/50"
                          : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
                    onClick={() => {
                      if (bulkMode && photo.id) {
                        togglePhotoSelection(photo.id);
                      } else if (photo.id) {
                        setSelectedPhotoId(photo.id);
                      }
                    }}
                  >
                    {bulkMode && (
                      <div className="shrink-0">
                        {photo.id && selectedPhotos.has(photo.id) ? (
                          <CheckSquare className="w-5 h-5" />
                        ) : (
                          <Square className="w-5 h-5" />
                        )}
                      </div>
                    )}
                    <div className="flex justify-between items-center w-fit">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {photo.title || "Untitled"}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          {photo.category} • {photo.tags.length} tags
                        </div>
                      </div>
                      <img
                        src={photo.url}
                        alt={photo.title || "Photo"}
                        className="w-16 h-16 object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-neutral-400">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Photo Editor */}
          <div className=" bg-neutral-900 rounded-lg p-6 max-h-[calc(100vh-200px)] overflow-y-auto w-full ">
            {selectedPhoto && !bulkMode ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-amber-500">
                    Edit Photo
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedPhotoId(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Preview */}
                <div className=" rounded-lg overflow-hidden bg-neutral-800">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.title || "Photo"}
                    className="w-1/4 h-auto object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={selectedPhoto.title || ""}
                      onChange={(e) =>
                        selectedPhoto.id &&
                        updatePhoto(selectedPhoto.id, { title: e.target.value })
                      }
                      className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Untitled"
                    />
                  </div>

                  {/* Camera */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Camera
                    </label>
                    <div className="flex gap-2">
                      <Select
                        value={selectedPhoto.camera}
                        onValueChange={(value) =>
                          selectedPhoto.id &&
                          updatePhoto(selectedPhoto.id, { camera: value })
                        }
                      >
                        <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 focus:border-amber-500">
                          <SelectValue placeholder="Select or type camera" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700">
                          {availableCameras.map((camera) => (
                            <SelectItem
                              key={camera}
                              value={camera}
                              className="focus:bg-neutral-700"
                            >
                              {camera}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <input
                        type="text"
                        value={selectedPhoto.camera}
                        onChange={(e) =>
                          selectedPhoto.id &&
                          updatePhoto(selectedPhoto.id, {
                            camera: e.target.value,
                          })
                        }
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
                        placeholder="Or type new camera"
                      />
                    </div>
                  </div>

                  {/* Place */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Place (optional)
                    </label>
                    <input
                      type="text"
                      value={selectedPhoto.place || ""}
                      onChange={(e) =>
                        selectedPhoto.id &&
                        updatePhoto(selectedPhoto.id, { place: e.target.value })
                      }
                      className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none"
                      placeholder="Location where photo was taken"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Date (optional)
                    </label>
                    <input
                      type="date"
                      value={selectedPhoto.date || ""}
                      onChange={(e) =>
                        selectedPhoto.id &&
                        updatePhoto(selectedPhoto.id, { date: e.target.value })
                      }
                      className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <Button
                        key={cat}
                        variant={
                          selectedPhoto.category === cat ? "gold" : "outline"
                        }
                        size="sm"
                        onClick={() =>
                          selectedPhoto.id &&
                          updatePhoto(selectedPhoto.id, { category: cat })
                        }
                        className="capitalize"
                      >
                        {cat.replace("-", " ")}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tags ({selectedPhoto.tags.length})
                  </label>
                  <div className="space-y-4 mb-4">
                    {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Button
                              key={tag}
                              variant={
                                selectedPhoto.tags.includes(tag)
                                  ? "gold"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                selectedPhoto.id &&
                                toggleTag(selectedPhoto.id, tag)
                              }
                              className="text-xs h-7 px-2"
                            >
                              {selectedPhoto.tags.includes(tag) && "✓ "}
                              {tag}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* URL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={selectedPhoto.url}
                    onChange={(e) =>
                      selectedPhoto.id &&
                      updatePhoto(selectedPhoto.id, { url: e.target.value })
                    }
                    className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
                  />
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-neutral-500">
                <div className="text-center">
                  <Save className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>
                    {bulkMode
                      ? "Select photos to perform bulk operations"
                      : "Select a photo to edit"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
