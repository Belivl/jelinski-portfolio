import { useState, useMemo, useEffect } from "react";
import type { Photo } from "@/data/photos";
import { useAllPhotos } from "@/hooks/usePhotos";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
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
  ChevronsLeft,
  ChevronsRight,
  CheckSquare,
  Square,
  RefreshCcw,
  UploadCloud,
  LayoutGrid,
  List,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TAG_CATEGORIES } from "@/data/tags";
import { Link } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { getBlogPosts } from "@/lib/contentful";
import { AlertCircle, Zap } from "lucide-react";

const CATEGORIES: Photo["category"][] = [
  "client",
  "portrait",
  "landscape",
  "various",
  "event",
  "black-and-white",
  "travel",
  "street", // Added street to match your data
  "animal", // Added animal
  "architecture", // Added architecture
  "cars", // Added cars
];

// Pagination items per page default
const DEFAULT_ITEMS_PER_PAGE = 20;

export function PhotoManager() {
  const convexPhotos = useAllPhotos();
  const updatePhotoMutation = useMutation(api.photos.updatePhoto);

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [dirtyIds, setDirtyIds] = useState<Set<string>>(new Set());

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
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [gridColumns, setGridColumns] = useState(1);
  const [filterIncomplete, setFilterIncomplete] = useState(false);
  const [missingPhotos, setMissingPhotos] = useState<
    { url: string; blogPostId: string; title: string }[]
  >([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const addPhotoMutation = useMutation(api.photos.addPhoto);

  // Populate local state from Convex once loaded
  useEffect(() => {
    if (convexPhotos.length > 0 && photos.length === 0) {
      setPhotos(convexPhotos);
    }
  }, [convexPhotos, photos.length]);

  // Sync with Blog Posts to find missing photos
  useEffect(() => {
    const checkMissingPhotos = async () => {
      // Don't check until we have some photos loaded to compare against
      if (photos.length === 0) return;

      setIsSyncing(true);
      try {
        const posts = await getBlogPosts();
        const existingUrls = new Set(photos.map((p) => p.url));

        const missing: typeof missingPhotos = [];
        posts.forEach((post) => {
          post.images.forEach((url) => {
            if (!existingUrls.has(url)) {
              missing.push({
                url,
                blogPostId: post.id,
                title: post.title,
              });
            }
          });
        });
        setMissingPhotos(missing);
      } catch (error) {
        console.error("Failed to sync blog photos:", error);
      } finally {
        setIsSyncing(false);
      }
    };

    checkMissingPhotos();
  }, [photos.length]);

  const addMissingPhoto = async (missing: (typeof missingPhotos)[0]) => {
    try {
      const newPhoto: any = {
        url: missing.url,
        title: "Untitled",
        category: "various", // Default
        camera: "Unknown",
        tags: [],
        blogPostId: missing.blogPostId,
        date: new Date().toISOString().split("T")[0],
      };

      const id = await addPhotoMutation(newPhoto);
      // Update local state to include the new photo immediately
      setPhotos((prev) => [...prev, { ...newPhoto, id: id as string }]);
      setMissingPhotos((prev) => prev.filter((p) => p.url !== missing.url));
    } catch (error) {
      console.error("Failed to add missing photo:", error);
      alert("Failed to add photo. Check console.");
    }
  };

  const addAllMissing = async () => {
    if (!confirm(`Add all ${missingPhotos.length} missing photos to database?`))
      return;
    for (const missing of missingPhotos) {
      await addMissingPhoto(missing);
    }
    alert("Batch import complete!");
  };

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

    // Auditor filter
    if (filterIncomplete) {
      result = result.filter(
        (p) =>
          !p.title ||
          p.title === "Untitled" ||
          p.tags.length === 0 ||
          !p.date ||
          !p.place,
      );
    }

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

  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);

  const paginatedPhotos = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPhotos.slice(start, start + itemsPerPage);
  }, [filteredPhotos, currentPage, itemsPerPage]);

  const updatePhoto = (id: string, updates: Partial<Photo>) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    );
    setDirtyIds((prev) => new Set(prev).add(id));
  };

  const bulkUpdatePhotos = (updates: Partial<Photo>) => {
    const idsToUpdate = new Set<string>();
    setPhotos((prev) =>
      prev.map((p) => {
        if (p.id && selectedPhotos.has(p.id)) {
          idsToUpdate.add(p.id);
          return { ...p, ...updates };
        }
        return p;
      }),
    );
    setDirtyIds((prev) => {
      const next = new Set(prev);
      idsToUpdate.forEach((id) => next.add(id));
      return next;
    });
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
    const idsToUpdate = new Set<string>();

    setPhotos((prev) =>
      prev.map((p) => {
        if (!p.id || !selectedPhotos.has(p.id)) return p;
        idsToUpdate.add(p.id);

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
    setDirtyIds((prev) => {
      const next = new Set(prev);
      idsToUpdate.forEach((id) => next.add(id));
      return next;
    });
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
    if (dirtyIds.size === 0) {
      alert("No changes to save.");
      return;
    }

    setIsSaving(true);
    try {
      const promises = Array.from(dirtyIds).map(async (id) => {
        const photo = photos.find((p) => p.id === id);
        if (!photo) return;

        // Exclude _id, _creationTime, and id from updates object
        // We only want updatable fields
        const { id: _idArg, _id, _creationTime, ...fields } = photo as any;

        try {
          await updatePhotoMutation({
            id: id as Id<"photos">,
            updates: fields,
          });
        } catch (e) {
          console.error(`Failed to update photo ${id}`, e);
        }
      });

      await Promise.all(promises);
      setDirtyIds(new Set());
      alert("Changes saved successfully to Convex!");
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
      // Re-sync with Convex
      if (convexPhotos.length > 0) {
        setPhotos(convexPhotos);
      }
      setDirtyIds(new Set());
    }
  };

  const allUsedTags = useMemo(() => {
    const tags = new Set<string>();
    photos.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [photos]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 pb-20">
      <div className=" mx-auto px-6">
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
                {dirtyIds.size > 0 && (
                  <span className="text-amber-400 font-bold ml-2">
                    • {dirtyIds.size} unsaved changes
                  </span>
                )}
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
                disabled={isSaving || dirtyIds.size === 0}
                className="gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                {isSaving ? "Saving..." : "Save to Convex"}
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-neutral-900 p-4 rounded-lg">
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
              onChange={(e) =>
                setSortBy(e.target.value as "title" | "date" | "category")
              }
              className="bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="category">Sort by Category</option>
            </select>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Audit:
              </span>
              <Button
                variant={filterIncomplete ? "gold" : "outline"}
                size="sm"
                onClick={() => {
                  setFilterIncomplete(!filterIncomplete);
                  setCurrentPage(1);
                }}
                className="gap-2 h-9 px-3"
                title="Show photos with missing info"
              >
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs">Incomplete</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Density:
              </span>
              <div className="flex bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
                {[20, 40, 60].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setItemsPerPage(num);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 text-xs rounded-md transition-all font-mono ${
                      itemsPerPage === num
                        ? "bg-amber-500 text-black font-bold shadow-lg"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
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

        {isSyncing && (
          <div className="mb-4 flex items-center gap-2 text-xs font-mono text-amber-500/50 animate-pulse">
            <RefreshCcw className="w-3 h-3 animate-spin" />
            Syncing with Contentful...
          </div>
        )}

        {missingPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-amber-500/20 text-amber-500 shrink-0">
                <Zap className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-amber-500 flex items-center gap-2">
                  New Photos Detected
                  <div className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500 text-black">
                    {missingPhotos.length}
                  </div>
                </h3>
                <p className="text-xs text-amber-200/60 leading-relaxed">
                  The following images were found in your blog posts but haven't
                  been added to the gallery database yet.
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button
                variant="gold"
                size="sm"
                onClick={addAllMissing}
                className="px-6 flex-1 md:flex-none shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                Batch Import Missing
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMissingPhotos([])}
                className="text-white/40 hover:text-white"
              >
                Hide
              </Button>
            </div>
          </motion.div>
        )}

        <div className="h-[calc(100vh-280px)] border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50 backdrop-blur-xl shadow-2xl">
          <ResizablePanelGroup orientation="horizontal">
            {/* Photo List Panel */}
            <ResizablePanel
              defaultSize={30}
              minSize={20}
              className="flex flex-col"
            >
              <div className="p-4 border-b border-neutral-800 bg-neutral-900/80 sticky top-0 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-amber-500 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Archive
                    </h2>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {filteredPhotos.length} TOTAL
                    </span>
                  </div>
                  <div className="flex bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
                    <button
                      onClick={() => setGridColumns(1)}
                      className={`p-1.5 rounded-md transition-all ${
                        gridColumns === 1
                          ? "bg-amber-500 text-black shadow-lg"
                          : "text-neutral-500 hover:text-white"
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setGridColumns(2)}
                      className={`p-1.5 rounded-md transition-all ${
                        gridColumns === 2
                          ? "bg-amber-500 text-black shadow-lg"
                          : "text-neutral-500 hover:text-white"
                      }`}
                      title="Compact Grid"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`flex-1 overflow-y-auto custom-scrollbar p-2 ${gridColumns === 1 ? "space-y-2" : "grid grid-cols-2 gap-2 content-start"}`}
              >
                <AnimatePresence mode="popLayout">
                  {paginatedPhotos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`group relative rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedPhotoId === photo.id
                          ? "bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                          : photo.id && selectedPhotos.has(photo.id)
                            ? "bg-amber-500/10 border border-amber-500/30"
                            : "bg-neutral-800/40 hover:bg-neutral-800 border border-transparent hover:border-neutral-700"
                      } ${gridColumns === 1 ? "p-2" : "p-1.5"}`}
                      onClick={() => {
                        if (bulkMode && photo.id) {
                          togglePhotoSelection(photo.id);
                        } else if (photo.id) {
                          setSelectedPhotoId(photo.id);
                        }
                      }}
                    >
                      <div
                        className={`flex items-center ${gridColumns === 1 ? "gap-3" : "flex-col gap-1.5 text-center"}`}
                      >
                        <div
                          className={`relative rounded-lg overflow-hidden shrink-0 shadow-lg ${gridColumns === 1 ? "w-12 h-12" : "w-full aspect-square"}`}
                        >
                          <img
                            src={photo.url}
                            alt={photo.title || "Photo"}
                            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                          />
                          {bulkMode && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              {photo.id && selectedPhotos.has(photo.id) ? (
                                <CheckSquare className="w-5 h-5 text-amber-500" />
                              ) : (
                                <Square className="w-5 h-5 text-white/50" />
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`font-medium truncate text-sm ${selectedPhotoId === photo.id ? "text-black" : "text-white"}`}
                          >
                            {photo.title || "Untitled"}
                          </div>
                          <div
                            className={`text-[10px] mt-0.5 uppercase tracking-wider ${selectedPhotoId === photo.id ? "text-black/60" : "text-neutral-500"}`}
                          >
                            {photo.category} • {photo.tags.length} tags
                          </div>
                        </div>
                        {photo.id && dirtyIds.has(photo.id) && (
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-3 border-t border-neutral-800 bg-neutral-900/80 flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className="h-7 w-7 text-neutral-500 hover:text-white"
                      title="First Page"
                    >
                      <ChevronsLeft className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="h-7 w-7 text-neutral-400 hover:text-white"
                      title="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                  </div>

                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                    {currentPage} / {totalPages}
                  </span>

                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="h-7 w-7 text-neutral-400 hover:text-white"
                      title="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                      className="h-7 w-7 text-neutral-500 hover:text-white"
                      title="Last Page"
                    >
                      <ChevronsRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Photo Editor Panel */}
            <ResizablePanel
              defaultSize={70}
              minSize={30}
              className="bg-black/20 w-full"
            >
              <div className="h-full overflow-y-auto custom-scrollbar p-6 w-full ">
                {bulkMode ? (
                  <div className="max-w-4xl mx-auto space-y-8 w-full ">
                    <div className="flex justify-between items-center bg-amber-500/10 p-4 rounded-2xl border border-amber-500/30 w-full">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500 text-black">
                          <CheckSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-amber-500 leading-tight">
                            Collective Mutation
                          </h2>
                          <p className="text-xs text-amber-500/60 font-mono">
                            Targeting {selectedPhotos.size} Fragments
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={selectAll}
                          className="text-[10px] font-mono border-amber-500/30 hover:bg-amber-500/10"
                        >
                          ALL ({paginatedPhotos.length})
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={deselectAll}
                          className="text-[10px] font-mono border-amber-500/30 hover:bg-amber-500/10"
                        >
                          NONE
                        </Button>
                      </div>
                    </div>

                    {selectedPhotos.size > 0 ? (
                      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Bulk Metadata Card */}
                        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6 shadow-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-1 h-4 bg-amber-500 rounded-full" />
                            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                              Core Attributes
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title */}
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                Bulk Title{" "}
                                {commonTitle === null && (
                                  <span className="text-amber-500/50 italic ml-1">
                                    (Mixed)
                                  </span>
                                )}
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="New common title..."
                                  value={bulkTitle}
                                  onChange={(e) => setBulkTitle(e.target.value)}
                                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
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
                            </div>

                            {/* Camera */}
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                Bulk Instrument{" "}
                                {commonCamera === null && (
                                  <span className="text-amber-500/50 italic ml-1">
                                    (Mixed)
                                  </span>
                                )}
                              </label>
                              <div className="flex gap-2">
                                <Select
                                  value={bulkCamera}
                                  onValueChange={setBulkCamera}
                                >
                                  <SelectTrigger className="flex-1 bg-neutral-800 border-neutral-700 rounded-xl">
                                    <SelectValue placeholder="Select instrument" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-neutral-900 border-neutral-800">
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
                            </div>

                            {/* Place */}
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                Bulk Location{" "}
                                {commonPlace === null && (
                                  <span className="text-amber-500/50 italic ml-1">
                                    (Mixed)
                                  </span>
                                )}
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="New common location..."
                                  value={bulkPlace}
                                  onChange={(e) => setBulkPlace(e.target.value)}
                                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
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
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                Bulk Temporal Marker{" "}
                                {commonDate === null && (
                                  <span className="text-amber-500/50 italic ml-1">
                                    (Mixed)
                                  </span>
                                )}
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="date"
                                  value={bulkDate}
                                  onChange={(e) => setBulkDate(e.target.value)}
                                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm text-neutral-400"
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
                        </div>

                        {/* Bulk Category Card */}
                        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4 shadow-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-1 h-4 bg-amber-500 rounded-full" />
                            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                              Categorization
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                              <Button
                                key={cat}
                                size="sm"
                                variant={
                                  commonCategory === cat ? "gold" : "outline"
                                }
                                onClick={() => bulkSetCategory(cat)}
                                className="text-[10px] h-7 px-3 capitalize font-mono tracking-wider"
                              >
                                {cat.replace("-", " ")}
                              </Button>
                            ))}
                          </div>
                        </div>

                        {/* Bulk Tags Card */}
                        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6 shadow-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-1 h-4 bg-amber-500 rounded-full" />
                            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                              Descriptor Sync
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {Object.entries(TAG_CATEGORIES).map(
                              ([category, tags]) => (
                                <div key={category} className="space-y-3">
                                  <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest flex justify-between">
                                    {category}
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {tags.map((tag) => (
                                      <button
                                        key={tag}
                                        onClick={() => toggleBulkTag(tag)}
                                        className={`px-2 py-1 rounded-lg text-[10px] transition-all duration-300 border ${
                                          commonTags.includes(tag)
                                            ? "bg-amber-500/20 border-amber-500 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                                            : "bg-neutral-800/40 border-neutral-800 text-neutral-500 hover:border-neutral-700"
                                        }`}
                                      >
                                        {commonTags.includes(tag) ? "✓ " : "+ "}
                                        {tag}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-64 flex flex-col items-center justify-center text-neutral-600 space-y-4">
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-800 flex items-center justify-center">
                          <CheckSquare className="w-6 h-6 opacity-20" />
                        </div>
                        <p className="text-sm font-mono opacity-50 uppercase tracking-widest">
                          Select target fragments from the archive
                        </p>
                      </div>
                    )}
                  </div>
                ) : selectedPhoto ? (
                  <div className=" space-y-8">
                    <div className="flex justify-between items-center bg-neutral-900/50 p-4 rounded-2xl border border-neutral-800">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                          <CheckSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white leading-tight">
                            {selectedPhoto.title || "Untitled Fragment"}
                          </h2>
                          <p className="text-xs text-neutral-500 font-mono">
                            ID: {selectedPhoto.id}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedPhotoId(null)}
                        className="rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-red-400"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Preview Image */}
                      <div className="space-y-4">
                        <div className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-neutral-800 border border-neutral-700 shadow-2xl">
                          <img
                            src={selectedPhoto.url}
                            alt={selectedPhoto.title || "Photo"}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                              <Search className="w-4 h-4" />
                              <span className="font-mono">
                                {selectedPhoto.url.split("/").pop()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800">
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                            Global Resource Identifier (URL)
                          </label>
                          <input
                            type="text"
                            value={selectedPhoto.url}
                            onChange={(e) =>
                              selectedPhoto.id &&
                              updatePhoto(selectedPhoto.id, {
                                url: e.target.value,
                              })
                            }
                            className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-xs font-mono text-amber-200/70"
                          />
                        </div>
                      </div>

                      {/* Editing Fields */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                              Title / Identity
                            </label>
                            <input
                              type="text"
                              value={selectedPhoto.title || ""}
                              onChange={(e) =>
                                selectedPhoto.id &&
                                updatePhoto(selectedPhoto.id, {
                                  title: e.target.value,
                                })
                              }
                              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-all placeholder:text-neutral-600"
                              placeholder="Assign a title..."
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                                Instrument (Camera)
                              </label>
                              <Select
                                value={selectedPhoto.camera}
                                onValueChange={(value) =>
                                  selectedPhoto.id &&
                                  updatePhoto(selectedPhoto.id, {
                                    camera: value,
                                  })
                                }
                              >
                                <SelectTrigger className="w-full bg-neutral-800/50 border-neutral-700 rounded-xl">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-900 border-neutral-800">
                                  {availableCameras.map((camera) => (
                                    <SelectItem key={camera} value={camera}>
                                      {camera}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                                New Camera
                              </label>
                              <input
                                type="text"
                                value={selectedPhoto.camera}
                                onChange={(e) =>
                                  selectedPhoto.id &&
                                  updatePhoto(selectedPhoto.id, {
                                    camera: e.target.value,
                                  })
                                }
                                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
                                placeholder="Override camera..."
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                                Location / Realm
                              </label>
                              <input
                                type="text"
                                value={selectedPhoto.place || ""}
                                onChange={(e) =>
                                  selectedPhoto.id &&
                                  updatePhoto(selectedPhoto.id, {
                                    place: e.target.value,
                                  })
                                }
                                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm"
                                placeholder="Void"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                                Temporal Marker (Date)
                              </label>
                              <input
                                type="date"
                                value={selectedPhoto.date || ""}
                                onChange={(e) =>
                                  selectedPhoto.id &&
                                  updatePhoto(selectedPhoto.id, {
                                    date: e.target.value,
                                  })
                                }
                                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-xl px-4 py-2 focus:border-amber-500 focus:outline-none text-sm text-neutral-300"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3">
                            Categorization Domain
                          </label>
                          <div className="flex flex-wrap gap-2 p-3 bg-neutral-900/30 rounded-2xl border border-neutral-800">
                            {CATEGORIES.map((cat) => (
                              <Button
                                key={cat}
                                variant={
                                  selectedPhoto.category === cat
                                    ? "gold"
                                    : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                  selectedPhoto.id &&
                                  updatePhoto(selectedPhoto.id, {
                                    category: cat,
                                  })
                                }
                                className="text-[10px] h-7 px-3 capitalize font-mono tracking-wider"
                              >
                                {cat.replace("-", " ")}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3">
                            Descriptors / Tags ({selectedPhoto.tags.length})
                          </label>
                          <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                            {Object.entries(TAG_CATEGORIES).map(
                              ([category, tags]) => (
                                <div key={category} className="space-y-2">
                                  <h4 className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
                                    {category}
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {tags.map((tag) => (
                                      <button
                                        key={tag}
                                        onClick={() =>
                                          selectedPhoto.id &&
                                          toggleTag(selectedPhoto.id, tag)
                                        }
                                        className={`px-2 py-1 rounded-lg text-[10px] transition-all duration-300 border ${
                                          selectedPhoto.tags.includes(tag)
                                            ? "bg-amber-500/20 border-amber-500 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                                            : "bg-neutral-800/40 border-neutral-800 text-neutral-500 hover:border-neutral-700"
                                        }`}
                                      >
                                        {tag}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-neutral-600">
                    <div className="text-center space-y-4 max-w-sm">
                      <div className="w-20 h-20 mx-auto rounded-3xl bg-neutral-900 flex items-center justify-center border border-neutral-800 shadow-inner group">
                        <Save className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-neutral-400">
                          {bulkMode
                            ? "Omni-Editor Active"
                            : "Awaiting Selection"}
                        </p>
                        <p className="text-sm font-mono opacity-50">
                          {bulkMode
                            ? "Select multiple fragments to proceed with collective transformation"
                            : "Select a fragment from the archive to begin local refinement"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
