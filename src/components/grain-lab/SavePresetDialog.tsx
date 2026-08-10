import React, { useState } from 'react';
import { Download, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface SavePresetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (presetData: any, downloadJson: boolean) => void;
  currentSettings: any;
}

export const SavePresetDialog: React.FC<SavePresetDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  currentSettings,
}) => {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSave = (downloadJson: boolean) => {
    if (!name.trim()) return;

    const presetData = {
      ...currentSettings,
      name: name.trim(),
      tag: tag.trim() || 'Custom Stock',
      description: description.trim() || 'User created film stock profile.',
    };

    onSave(presetData, downloadJson);
    setName('');
    setTag('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in-0">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-lg p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <Save className="w-5 h-5 text-zinc-200" />
          <h2 className="text-sm font-semibold text-zinc-100">Save Film Stock Preset</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-xs text-zinc-300">Preset / Film Stock Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. CineStill 50D, Tri-X Pushed 1600..."
              className="mt-1 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-xs"
              autoFocus
            />
          </div>

          <div>
            <Label className="text-xs text-zinc-300">Stock Subtitle / Tag</Label>
            <Input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="e.g. Fine Grain · Daylight"
              className="mt-1 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-xs"
            />
          </div>

          <div>
            <Label className="text-xs text-zinc-300">Description (Optional)</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Notes on grain structure, halation characteristics, contrast response..."
              className="mt-1 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-xs min-h-[60px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-zinc-800/80">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs"
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!name.trim()}
            onClick={() => handleSave(true)}
            className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-xs gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Save & Export .JSON
          </Button>
          <Button
            size="sm"
            disabled={!name.trim()}
            onClick={() => handleSave(false)}
            className="bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            Save to Library
          </Button>
        </div>
      </div>
    </div>
  );
};
