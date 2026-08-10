import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Layers,
  Flame,
  Sun,
  Zap,
  Sliders,
  Download,
  Upload,
  Copy,
  Trash2,
  ZoomIn,
  Save,
  FolderOpen,
  RotateCcw,
  FileArchive,
  ArrowLeft,
  Palette,
  Image as ImageIcon,
} from 'lucide-react';
import JSZip from 'jszip';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CollapsibleSection } from '@/components/grain-lab/CollapsibleSection';
import { InfoTooltip } from '@/components/grain-lab/InfoTooltip';
import { SavePresetDialog } from '@/components/grain-lab/SavePresetDialog';

// Preset Model
export interface FilmPreset {
  id: string;
  name: string;
  tag: string;
  description?: string;
  isCustom?: boolean;

  // Kodak Spectral Profile & Color Science
  spectralProfile: number; // 0: Gold 200, 1: UltraMax 400, 2: Ektar 100, 3: Ektachrome E100, 4: Portra 400, 5: Tri-X 400, 6: CineStill 800T, 7: Vision3 500T, 8: HP5, 9: Neutral
  profileMix: number; // 0% - 100%
  profileSat: number; // 0% - 200%
  profileLatitude: number; // 0.5 - 2.5 (Highlight roll-off)
  profileToe: number; // 0.5 - 2.0 (Shadow toe)
  profileWarmth: number; // -50 to +50
  profileDIR: number; // 0% - 100% (Inter-image effect)

  // Grain Simulation
  tile: number;
  jitter: number;
  clumping: number;
  engine: number;
  w: [number, number, number, number];
  offR: [number, number];
  offG: [number, number];
  offB: [number, number];
  gray: number;
  useBase: boolean;
  baseBlend: number;
  baseCol: string;
  gammaIn: number;
  gammaNoise: number;
  gammaOut: number;

  // Halation & Bloom
  halationEnable: boolean;
  halationThresh: number;
  halationRad: number;
  halationIntensity: number;
  halationColor: string;
  halationFalloff: number;
  bloomEnable: boolean;
  bloomThresh: number;
  bloomRad: number;
  bloomIntensity: number;
  bloomColor: string;

  // Defects
  dustEnable: boolean;
  dustScale: number;
  dustMin: number;
  dustMax: number;
  dustBright: number;
  dustAmount: number;
  dustSeed?: number;
  scratchEnable: boolean;
  scratchMode: number;
  scratchAngle: number;
  scratchScale: number;
  scratchThick: number;
  scratchColor: string;
  scratchIntensity: number;
  scratchSeed?: number;
  hairEnable: boolean;
  hairCount: number;
  hairLen: number;
  hairCurl: number;
  hairThick: number;
  hairOpacity: number;
  hairSeed?: number;
}

// Built-in Stock Presets with Kodak Sensitometric Research
const DEFAULT_PRESETS: Record<string, FilmPreset> = {
  kodak_gold_200: {
    id: 'kodak_gold_200',
    name: 'Kodak Gold 200',
    tag: 'Warm Amber · (E-7022)',
    description: 'Official Kodak Publication E-7022. Warm golden amber color balance, rich saturated yellows and warm reds, classic medium T-GRAIN (PGI 44), moderate contrast, and gentle golden highlight roll-off.',
    spectralProfile: 0,
    profileMix: 100,
    profileSat: 120,
    profileLatitude: 1.25,
    profileToe: 1.15,
    profileWarmth: 20,
    profileDIR: 50,
    tile: 4,
    jitter: 85,
    clumping: 35,
    engine: 0,
    w: [1.0, 0.90, 0.76, 0.52],
    offR: [0, 0],
    offG: [6, 3],
    offB: [2, 7],
    gray: 0,
    useBase: true,
    baseBlend: 18,
    baseCol: '#160e07',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.65,
    halationRad: 14.0,
    halationIntensity: 65,
    halationColor: '#ea4200',
    halationFalloff: 1.9,
    bloomEnable: true,
    bloomThresh: 0.72,
    bloomRad: 22.0,
    bloomIntensity: 35,
    bloomColor: '#fff5dc',
    dustEnable: false,
    dustScale: 0.8,
    dustMin: 0.5,
    dustMax: 2.5,
    dustBright: -0.6,
    dustAmount: 30,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.0,
    scratchThick: 1.0,
    scratchColor: '#ffffff',
    scratchIntensity: 40,
    hairEnable: false,
    hairCount: 1,
    hairLen: 45,
    hairCurl: 1.0,
    hairThick: 1.0,
    hairOpacity: 70,
  },
  kodak_ultramax_400: {
    id: 'kodak_ultramax_400',
    name: 'Kodak UltraMax 400',
    tag: 'Vibrant · ISO 400 (E-7006)',
    description: 'Official Kodak Publication E-7006. High-speed color negative film with punchy primary reds, vivid cobalt blues, punchy contrast (gamma 1.35), energetic ISO 400 grain (PGI 46), and vibrant consumer skin tones.',
    spectralProfile: 1,
    profileMix: 100,
    profileSat: 130,
    profileLatitude: 1.0,
    profileToe: 1.30,
    profileWarmth: 8,
    profileDIR: 60,
    tile: 3,
    jitter: 90,
    clumping: 40,
    engine: 0,
    w: [1.0, 0.92, 0.78, 0.55],
    offR: [0, 0],
    offG: [5, 2],
    offB: [1, 6],
    gray: 0,
    useBase: true,
    baseBlend: 15,
    baseCol: '#140b08',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.62,
    halationRad: 16.0,
    halationIntensity: 70,
    halationColor: '#ea3500',
    halationFalloff: 1.8,
    bloomEnable: true,
    bloomThresh: 0.68,
    bloomRad: 24.0,
    bloomIntensity: 40,
    bloomColor: '#fff8ea',
    dustEnable: false,
    dustScale: 0.9,
    dustMin: 0.5,
    dustMax: 2.8,
    dustBright: -0.6,
    dustAmount: 35,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.0,
    scratchThick: 1.0,
    scratchColor: '#ffffff',
    scratchIntensity: 40,
    hairEnable: false,
    hairCount: 1,
    hairLen: 45,
    hairCurl: 1.0,
    hairThick: 1.0,
    hairOpacity: 70,
  },
  kodak_ektar_100: {
    id: 'kodak_ektar_100',
    name: 'Kodak Ektar 100',
    tag: 'Ultra-Vivid · PGI <25 (E-4046)',
    description: 'Official Kodak Publication E-4046. The world\'s finest grain color negative film (PGI < 25). Engineered with micro-structure optimized T-GRAIN emulsions and advanced 2-equivalent DIR couplers. Features extreme color saturation, brilliant cyan-blues, high acutance resolving power (200 lines/mm), and steep contrast.',
    spectralProfile: 2,
    profileMix: 100,
    profileSat: 145,
    profileLatitude: 0.85,
    profileToe: 1.40,
    profileWarmth: -4,
    profileDIR: 90,
    tile: 6,
    jitter: 65,
    clumping: 8,
    engine: 0,
    w: [1.0, 0.86, 0.70, 0.44],
    offR: [0, 0],
    offG: [3, 1],
    offB: [1, 4],
    gray: 0,
    useBase: true,
    baseBlend: 10,
    baseCol: "#0c080e",
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.78,
    halationRad: 8.0,
    halationIntensity: 30,
    halationColor: "#ea2a00",
    halationFalloff: 2.4,
    bloomEnable: false,
    bloomThresh: 0.75,
    bloomRad: 16.0,
    bloomIntensity: 25,
    bloomColor: "#fff5ea",
    dustEnable: false,
    dustScale: 0.5,
    dustMin: 0.3,
    dustMax: 1.5,
    dustBright: -0.5,
    dustAmount: 15,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 0.8,
    scratchThick: 0.8,
    scratchColor: "#ffffff",
    scratchIntensity: 30,
    hairEnable: false,
    hairCount: 1,
    hairLen: 30,
    hairCurl: 0.6,
    hairThick: 0.8,
    hairOpacity: 50,
  },
  kodak_ektachrome_e100: {
    id: 'kodak_ektachrome_e100',
    name: 'Kodak Ektachrome E100',
    tag: 'E-6 Slide Film · (E-4000)',
    description: 'Official Kodak Publication E-4000. Professional E-6 color reversal transparency slide film. Features direct positive reversal development, pure neutral D-min without orange mask, high contrast (gamma 1.85), rich deep D-max blacks, crisp highlight knee, and vivid saturated blues and greens.',
    spectralProfile: 3,
    profileMix: 100,
    profileSat: 135,
    profileLatitude: 0.70,
    profileToe: 1.55,
    profileWarmth: -8,
    profileDIR: 75,
    tile: 5,
    jitter: 70,
    clumping: 12,
    engine: 0,
    w: [1.0, 0.88, 0.72, 0.46],
    offR: [0, 0],
    offG: [3, 2],
    offB: [1, 5],
    gray: 0,
    useBase: false,
    baseBlend: 0,
    baseCol: "#000000",
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: false,
    halationThresh: 0.80,
    halationRad: 8.0,
    halationIntensity: 25,
    halationColor: "#ffffff",
    halationFalloff: 2.5,
    bloomEnable: true,
    bloomThresh: 0.70,
    bloomRad: 18.0,
    bloomIntensity: 30,
    bloomColor: "#f8faff",
    dustEnable: false,
    dustScale: 0.6,
    dustMin: 0.4,
    dustMax: 1.8,
    dustBright: -0.7,
    dustAmount: 20,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 0.8,
    scratchThick: 0.8,
    scratchColor: "#ffffff",
    scratchIntensity: 30,
    hairEnable: false,
    hairCount: 1,
    hairLen: 30,
    hairCurl: 0.6,
    hairThick: 0.8,
    hairOpacity: 50,
  },
  kodak_portra_400: {
    id: 'kodak_portra_400',
    name: 'Kodak Portra 400',
    tag: 'Portrait Latitude · (E-4050)',
    description: 'Official Kodak Publication E-4050. The ultimate portrait color negative film (PGI 37). Engineered with antenna dye sensitization for ideal human skin reflectance, smooth pastel color balance, wide +3 stop highlight exposure latitude, soft contrast (gamma 0.98), and micro-fine tabular grain.',
    spectralProfile: 4,
    profileMix: 100,
    profileSat: 102,
    profileLatitude: 1.8,
    profileToe: 0.85,
    profileWarmth: 6,
    profileDIR: 30,
    tile: 5,
    jitter: 70,
    clumping: 10,
    engine: 0,
    w: [1.0, 0.88, 0.72, 0.48],
    offR: [0, 0],
    offG: [4, 2],
    offB: [2, 5],
    gray: 0,
    useBase: true,
    baseBlend: 12,
    baseCol: '#140c08',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.75,
    halationRad: 10.0,
    halationIntensity: 40,
    halationColor: '#ea4a00',
    halationFalloff: 2.2,
    bloomEnable: true,
    bloomThresh: 0.70,
    bloomRad: 20.0,
    bloomIntensity: 35,
    bloomColor: '#fffcf5',
    dustEnable: false,
    dustScale: 0.5,
    dustMin: 0.3,
    dustMax: 1.5,
    dustBright: 0.4,
    dustAmount: 20,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 0.8,
    scratchThick: 0.8,
    scratchColor: '#fefae0',
    scratchIntensity: 30,
    hairEnable: false,
    hairCount: 1,
    hairLen: 30,
    hairCurl: 0.6,
    hairThick: 0.8,
    hairOpacity: 50,
  },
  kodak_trix_400: {
    id: 'kodak_trix_400',
    name: 'Kodak Tri-X 400',
    tag: 'Panchromatic B&W · (F-4017)',
    description: 'Official Kodak Publication F-4017. Legendary panchromatic black-and-white emulsion (400-650nm sensitivity, RMS 17). Features high acutance edge sharpness, rich metallic silver D-max density, wide exposure latitude with printable shadow detail, and classic soot micro-dust specks.',
    spectralProfile: 5,
    profileMix: 100,
    profileSat: 0,
    profileLatitude: 1.4,
    profileToe: 1.25,
    profileWarmth: 0,
    profileDIR: 0,
    tile: 3,
    jitter: 95,
    clumping: 55,
    engine: 0,
    w: [1.0, 0.95, 0.80, 0.60],
    offR: [0, 0],
    offG: [0, 0],
    offB: [0, 0],
    gray: 1,
    useBase: false,
    baseBlend: 0,
    baseCol: '#050505',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: false,
    halationThresh: 0.65,
    halationRad: 14.0,
    halationIntensity: 60,
    halationColor: '#ffffff',
    halationFalloff: 1.8,
    bloomEnable: true,
    bloomThresh: 0.75,
    bloomRad: 18.0,
    bloomIntensity: 35,
    bloomColor: '#ffffff',
    dustEnable: true,
    dustScale: 1.3,
    dustMin: 0.8,
    dustMax: 4.0,
    dustBright: -0.9,
    dustAmount: 60,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.0,
    scratchThick: 1.2,
    scratchColor: '#ffffff',
    scratchIntensity: 50,
    hairEnable: true,
    hairCount: 2,
    hairLen: 75,
    hairCurl: 1.4,
    hairThick: 1.3,
    hairOpacity: 85,
  },
  cinestill: {
    id: 'cinestill',
    name: 'CineStill 800T',
    tag: 'Tungsten 3200K · Red Halation',
    description: 'ECN-2 Hollywood motion picture film (Vision3 500T base) prepared for C-41 with anti-halation Remjet layer removed. Features 3200K tungsten spectral balance, prominent red halation glow around specular highlights, cinema highlight latitude, and organic dye clouds.',
    spectralProfile: 6,
    profileMix: 100,
    profileSat: 115,
    profileLatitude: 1.6,
    profileToe: 0.95,
    profileWarmth: -14,
    profileDIR: 40,
    tile: 3,
    jitter: 85,
    clumping: 30,
    engine: 0,
    w: [1.0, 0.92, 0.78, 0.55],
    offR: [0, 0],
    offG: [7, 4],
    offB: [2, 8],
    gray: 0,
    useBase: true,
    baseBlend: 20,
    baseCol: '#071018',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.60,
    halationRad: 22.0,
    halationIntensity: 110,
    halationColor: '#ff2600',
    halationFalloff: 1.6,
    bloomEnable: true,
    bloomThresh: 0.72,
    bloomRad: 28.0,
    bloomIntensity: 45,
    bloomColor: '#fff5e0',
    dustEnable: true,
    dustScale: 0.9,
    dustMin: 0.5,
    dustMax: 2.5,
    dustBright: -0.5,
    dustAmount: 35,
    scratchEnable: true,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.2,
    scratchThick: 1.1,
    scratchColor: '#ffffff',
    scratchIntensity: 60,
    hairEnable: false,
    hairCount: 2,
    hairLen: 50,
    hairCurl: 1.0,
    hairThick: 1.0,
    hairOpacity: 70,
  },
  vision3: {
    id: 'vision3',
    name: 'Vision3 500T',
    tag: 'Cinema Negative · ECN-2',
    description: 'Premier Hollywood motion picture stock. Features unmatched dynamic latitude, ultra-gentle highlight roll-off, subtle anti-halation glow, and fine dye cloud clustering.',
    spectralProfile: 7,
    profileMix: 100,
    profileSat: 108,
    profileLatitude: 1.8,
    profileToe: 0.90,
    profileWarmth: -10,
    profileDIR: 35,
    tile: 4,
    jitter: 75,
    clumping: 15,
    engine: 0,
    w: [1.0, 0.9, 0.75, 0.5],
    offR: [0, 0],
    offG: [5, 2],
    offB: [2, 6],
    gray: 0,
    useBase: true,
    baseBlend: 12,
    baseCol: '#0c0f16',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.68,
    halationRad: 15.0,
    halationIntensity: 75,
    halationColor: '#ea3800',
    halationFalloff: 2.0,
    bloomEnable: true,
    bloomThresh: 0.65,
    bloomRad: 32.0,
    bloomIntensity: 60,
    bloomColor: '#fffaed',
    dustEnable: false,
    dustScale: 0.7,
    dustMin: 0.4,
    dustMax: 2.0,
    dustBright: -0.6,
    dustAmount: 25,
    scratchEnable: false,
    scratchMode: 1,
    scratchAngle: -15,
    scratchScale: 0.8,
    scratchThick: 0.9,
    scratchColor: '#f1f5f9',
    scratchIntensity: 40,
    hairEnable: false,
    hairCount: 1,
    hairLen: 40,
    hairCurl: 0.8,
    hairThick: 1.0,
    hairOpacity: 60,
  },
  hp5: {
    id: 'hp5',
    name: 'Ilford HP5 Plus',
    tag: 'Classic B&W · ISO 400',
    description: 'British medium-speed black-and-white stock with sharp acutance, smooth mid-tone gradations, and delicate silver halide flecks.',
    spectralProfile: 8,
    profileMix: 100,
    profileSat: 0,
    profileLatitude: 1.3,
    profileToe: 1.1,
    profileWarmth: 0,
    profileDIR: 0,
    tile: 4,
    jitter: 85,
    clumping: 35,
    engine: 0,
    w: [1.0, 0.85, 0.7, 0.45],
    offR: [0, 0],
    offG: [0, 0],
    offB: [0, 0],
    gray: 1,
    useBase: false,
    baseBlend: 0,
    baseCol: '#080808',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: false,
    halationThresh: 0.7,
    halationRad: 12.0,
    halationIntensity: 50,
    halationColor: '#ffffff',
    halationFalloff: 2.0,
    bloomEnable: false,
    bloomThresh: 0.75,
    bloomRad: 20.0,
    bloomIntensity: 40,
    bloomColor: '#ffffff',
    dustEnable: true,
    dustScale: 0.8,
    dustMin: 0.5,
    dustMax: 2.2,
    dustBright: -0.6,
    dustAmount: 35,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.0,
    scratchThick: 1.0,
    scratchColor: '#ffffff',
    scratchIntensity: 40,
    hairEnable: false,
    hairCount: 1,
    hairLen: 45,
    hairCurl: 1.0,
    hairThick: 1.0,
    hairOpacity: 70,
  },
  grindhouse: {
    id: 'grindhouse',
    name: 'Grindhouse 35mm',
    tag: 'Projection Wear · Halation',
    description: 'Heavy projection wear, pronounced halation glow, mechanical transport scratches, and gate hairs.',
    spectralProfile: 0,
    profileMix: 85,
    profileSat: 118,
    profileLatitude: 1.1,
    profileToe: 1.3,
    profileWarmth: 12,
    profileDIR: 40,
    tile: 2,
    jitter: 100,
    clumping: 70,
    engine: 0,
    w: [1.0, 0.95, 0.85, 0.65],
    offR: [0, 0],
    offG: [8, 4],
    offB: [3, 9],
    gray: 0,
    useBase: true,
    baseBlend: 25,
    baseCol: '#0a0d14',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: true,
    halationThresh: 0.55,
    halationRad: 28.0,
    halationIntensity: 130,
    halationColor: '#ff2200',
    halationFalloff: 1.4,
    bloomEnable: true,
    bloomThresh: 0.6,
    bloomRad: 36.0,
    bloomIntensity: 70,
    bloomColor: '#fff0d0',
    dustEnable: true,
    dustScale: 2.2,
    dustMin: 1.0,
    dustMax: 5.5,
    dustBright: -0.85,
    dustAmount: 75,
    scratchEnable: true,
    scratchMode: 2,
    scratchAngle: 12,
    scratchScale: 2.5,
    scratchThick: 1.6,
    scratchColor: '#f1f5f9',
    scratchIntensity: 85,
    hairEnable: true,
    hairCount: 5,
    hairLen: 90,
    hairCurl: 1.8,
    hairThick: 1.5,
    hairOpacity: 90,
  },
  default: {
    id: 'default',
    name: 'Standard 4x4',
    tag: 'Clean Neutral',
    description: 'Clean baseline physical stochastic simulation with balanced crystal depth and neutral linear color response.',
    spectralProfile: 9,
    profileMix: 0,
    profileSat: 100,
    profileLatitude: 1.0,
    profileToe: 1.0,
    profileWarmth: 0,
    profileDIR: 0,
    tile: 4,
    jitter: 80,
    clumping: 20,
    engine: 0,
    w: [1.0, 0.9, 0.75, 0.5],
    offR: [0, 0],
    offG: [6, 3],
    offB: [1, 7],
    gray: 0,
    useBase: false,
    baseBlend: 0,
    baseCol: '#080e16',
    gammaIn: 2.2,
    gammaNoise: 2.2,
    gammaOut: 2.2,
    halationEnable: false,
    halationThresh: 0.65,
    halationRad: 16.0,
    halationIntensity: 80,
    halationColor: '#ea2600',
    halationFalloff: 1.8,
    bloomEnable: false,
    bloomThresh: 0.7,
    bloomRad: 24.0,
    bloomIntensity: 50,
    bloomColor: '#fff6e8',
    dustEnable: false,
    dustScale: 1.0,
    dustMin: 0.6,
    dustMax: 3.2,
    dustBright: -0.7,
    dustAmount: 45,
    scratchEnable: false,
    scratchMode: 0,
    scratchAngle: 0,
    scratchScale: 1.0,
    scratchThick: 1.2,
    scratchColor: '#e5e7eb',
    scratchIntensity: 60,
    hairEnable: false,
    hairCount: 3,
    hairLen: 60,
    hairCurl: 1.2,
    hairThick: 1.2,
    hairOpacity: 80,
  },
};

// Shaders Source Code
const vsSource = `#version 300 es
in vec2 a_position;
in vec2 a_texCoord;
out vec2 v_texCoord;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
}`;

const fsSource = `#version 300 es
precision highp float;
precision highp int;

in vec2 v_texCoord;
out vec4 fragColor;

uniform sampler2D u_image;
uniform sampler2D u_noise;
uniform vec2 u_image_size;
uniform vec2 u_noise_size;

// Kodak Spectral Profile & Color Science Uniforms
uniform int u_spectral_profile;
uniform float u_profile_mix;
uniform float u_profile_sat;
uniform float u_profile_latitude;
uniform float u_profile_toe;
uniform float u_profile_warmth;
uniform float u_profile_dir;

// Grain Engine Uniforms
uniform int u_noise_tile_size;
uniform float u_grain_jitter;
uniform float u_grain_clumping;
uniform ivec2 u_noise_offsets_r;
uniform ivec2 u_noise_offsets_g;
uniform ivec2 u_noise_offsets_b;
uniform vec4 u_layer_weights;
uniform int u_grayscale;
uniform vec3 u_base_color;
uniform float u_use_base_color;
uniform float u_in_texture_gamma;
uniform float u_in_noise_gamma;
uniform float u_out_texture_gamma;
uniform int u_noise_engine;

// Halation Uniforms
uniform int u_halation_enable;
uniform float u_halation_thresh;
uniform float u_halation_rad;
uniform float u_halation_intensity;
uniform vec3 u_halation_color;
uniform float u_halation_falloff;

// Bloom Uniforms
uniform int u_bloom_enable;
uniform float u_bloom_thresh;
uniform float u_bloom_rad;
uniform float u_bloom_intensity;
uniform vec3 u_bloom_color;

// Dust & Dirt Particles Uniforms
uniform int u_dust_enable;
uniform float u_dust_scale;
uniform float u_dust_size_min;
uniform float u_dust_size_max;
uniform float u_dust_brightness;
uniform float u_dust_amount;
uniform int u_dust_seed;

// Film Scratches Uniforms
uniform int u_scratch_enable;
uniform int u_scratch_mode;
uniform float u_scratch_angle;
uniform float u_scratch_scale;
uniform float u_scratch_thickness;
uniform vec3 u_scratch_color;
uniform float u_scratch_intensity;
uniform int u_scratch_seed;

// Gate Hairs & Fibers Uniforms
uniform int u_hair_enable;
uniform int u_hair_count;
uniform float u_hair_len;
uniform float u_hair_curl;
uniform float u_hair_thick;
uniform float u_hair_opacity;
uniform int u_hair_seed;

// View Mode
uniform int u_view_mode;
uniform float u_split_pos;

uvec3 pcg3d(uvec3 v) {
    v = v * 1664525u + 1013904223u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    v ^= v >> 16u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    return v;
}

uvec4 pcg4d(uvec4 v) {
    v = v * 1664525u + 1013904223u;
    v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
    v ^= v >> 16u;
    v.x += v.y * v.w; v.y += v.z * v.x; v.z += v.x * v.y; v.w += v.y * v.z;
    return v;
}

ivec2 hash2(ivec2 p) {
    uvec2 v = uvec2(uint(p.x), uint(p.y));
    v = v * 1664525u + 1013904223u;
    v.x += v.y * 1103515245u;
    v.y += v.x * 134775813u;
    v ^= v >> 16u;
    return ivec2(int(v.x & 0x7fffu), int(v.y & 0x7fffu));
}

// ----------------------------------------------------
// KODAK SPECTRAL SENSITIVITY & COLOR SCIENCE PIPELINE
// ----------------------------------------------------

vec3 apply_spectral_convolution(vec3 rgb, int profile) {
    if (profile == 0) {
        // Kodak Gold 200 (E-7022): Warm amber, golden yellow lift, warm shadows
        vec3 col;
        col.r = rgb.r * 1.14 + rgb.g * 0.08 - rgb.b * 0.14;
        col.g = rgb.r * 0.02 + rgb.g * 1.05 + rgb.b * 0.02;
        col.b = -rgb.r * 0.16 + rgb.g * 0.10 + rgb.b * 0.86;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 1) {
        // Kodak UltraMax 400 (E-7006): High saturation primaries, deep cobalt blues and vivid scarlet reds
        vec3 col;
        col.r = rgb.r * 1.22 - rgb.g * 0.09 - rgb.b * 0.07;
        col.g = -rgb.r * 0.07 + rgb.g * 1.18 - rgb.b * 0.05;
        col.b = -rgb.r * 0.09 - rgb.g * 0.07 + rgb.b * 1.26;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 2) {
        // Kodak Ektar 100 (E-4046): Extreme saturation, deep cyan sky, crimson reds, vivid emerald greens
        vec3 col;
        col.r = rgb.r * 1.34 - rgb.g * 0.18 - rgb.b * 0.12;
        col.g = -rgb.r * 0.14 + rgb.g * 1.32 - rgb.b * 0.16;
        col.b = -rgb.r * 0.10 - rgb.g * 0.18 + rgb.b * 1.38;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 3) {
        // Kodak Ektachrome E100 (E-4000 Slide): E-6 slide positive, cool crisp blues, brilliant greens
        vec3 col;
        col.r = rgb.r * 1.26 - rgb.g * 0.14 - rgb.b * 0.09;
        col.g = -rgb.r * 0.11 + rgb.g * 1.24 - rgb.b * 0.09;
        col.b = -rgb.r * 0.07 - rgb.g * 0.11 + rgb.b * 1.28;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 4) {
        // Kodak Portra 400 (E-4050): Antenna-dye skin-optimized reflectance, soft creamy pastels
        vec3 col;
        col.r = rgb.r * 1.06 - rgb.g * 0.03 - rgb.b * 0.02;
        col.g = -rgb.r * 0.02 + rgb.g * 1.04 + rgb.b * 0.01;
        col.b = -rgb.r * 0.01 + rgb.g * 0.02 + rgb.b * 0.98;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 5) {
        // Kodak Tri-X 400 (F-4017): Panchromatic silver response (400-650nm)
        float mono = dot(rgb, vec3(0.33, 0.53, 0.14));
        return vec3(mono);
    } else if (profile == 6) {
        // CineStill 800T: 3200K Tungsten cinema balance
        vec3 col;
        col.r = rgb.r * 1.16 + rgb.g * 0.06 - rgb.b * 0.20;
        col.g = rgb.r * 0.04 + rgb.g * 0.98 + rgb.b * 0.06;
        col.b = -rgb.r * 0.24 + rgb.g * 0.08 + rgb.b * 1.20;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 7) {
        // Vision3 500T: Motion picture latitude
        vec3 col;
        col.r = rgb.r * 1.09 + rgb.g * 0.03 - rgb.b * 0.11;
        col.g = rgb.r * 0.02 + rgb.g * 1.03 + rgb.b * 0.02;
        col.b = -rgb.r * 0.13 + rgb.g * 0.04 + rgb.b * 1.11;
        return clamp(col, 0.0, 1.0);
    } else if (profile == 8) {
        // Ilford HP5 Plus: Classic panchromatic B&W
        float mono = dot(rgb, vec3(0.30, 0.59, 0.11));
        return vec3(mono);
    } else {
        return rgb;
    }
}

vec3 apply_dir_inhibition(vec3 rgb, float dirStrength) {
    if (dirStrength <= 0.0) return rgb;
    float k = (dirStrength / 100.0) * 0.45;
    vec3 inhibited;
    inhibited.r = rgb.r - k * (rgb.g * 0.6 + rgb.b * 0.4);
    inhibited.g = rgb.g - k * (rgb.r * 0.5 + rgb.b * 0.5);
    inhibited.b = rgb.b - k * (rgb.r * 0.4 + rgb.g * 0.6);
    return clamp(inhibited / max(0.001, 1.0 - k), 0.0, 1.0);
}

vec3 apply_sensitometric_curve(vec3 rgb, float toe, float latitude, int profile) {
    // S-curve D-log H characteristic modeling
    // Toe: Shadow soft-lift
    vec3 toe_comp = pow(rgb, vec3(1.0 / max(0.3, toe)));

    // Midtone gamma slope
    float gamma = 1.15;
    if (profile == 0) gamma = 1.20; // Gold 200
    if (profile == 1) gamma = 1.35; // UltraMax 400 punchy
    if (profile == 2) gamma = 1.48; // Ektar steep
    if (profile == 3) gamma = 1.85; // Ektachrome slide high contrast
    if (profile == 4) gamma = 0.96; // Portra soft portrait
    if (profile == 5) gamma = 1.28; // Tri-X 400

    vec3 mid_comp = pow(toe_comp, vec3(gamma));

    // Highlight shoulder compression with exposure latitude
    float lat = max(0.4, latitude);
    vec3 shoulder = 1.0 - exp(-mid_comp * lat);
    shoulder /= (1.0 - exp(-vec3(lat)));

    return clamp(shoulder, 0.0, 1.0);
}

vec3 apply_film_color_science(vec3 linear_rgb) {
    if (u_profile_mix <= 0.0 || u_spectral_profile == 9) return linear_rgb;

    vec3 film_rgb = apply_spectral_convolution(linear_rgb, u_spectral_profile);

    // Apply DIR inter-image coupler dye separation
    film_rgb = apply_dir_inhibition(film_rgb, u_profile_dir);

    // Apply Sensitometric D-log H S-curve
    film_rgb = apply_sensitometric_curve(film_rgb, u_profile_toe, u_profile_latitude, u_spectral_profile);

    // Apply Color Temperature / Warmth shift
    if (abs(u_profile_warmth) > 0.01) {
        float w = u_profile_warmth / 100.0;
        film_rgb.r *= (1.0 + w * 0.45);
        film_rgb.g *= (1.0 + w * 0.12);
        film_rgb.b *= (1.0 - w * 0.55);
        film_rgb = clamp(film_rgb, 0.0, 1.0);
    }

    // Apply Dye Density / Saturation
    if (abs(u_profile_sat - 100.0) > 0.01) {
        float lum = dot(film_rgb, vec3(0.299, 0.587, 0.114));
        film_rgb = clamp(mix(vec3(lum), film_rgb, u_profile_sat / 100.0), 0.0, 1.0);
    }

    // Blend between original linear RGB and film profile
    return mix(linear_rgb, film_rgb, u_profile_mix);
}

float voronoi_crystal(vec2 p, uint seed) {
    vec2 ip = floor(p);
    vec2 fp = fract(p);
    float d = 1.0;
    for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
            ivec2 g = ivec2(i, j);
            uvec3 r = pcg3d(uvec3(uvec2(ivec2(ip) + g + ivec2(10000)), seed));
            vec2 o = vec2(float(r.x & 0xffffu), float(r.y & 0xffffu)) / 65535.0;
            vec2 r_vec = vec2(g) + o - fp;
            d = min(d, dot(r_vec, r_vec));
        }
    }
    return sqrt(d);
}

vec4 get_continuous_noise(vec2 pos, uint channel_seed, float in_noise_gamma, ivec2 noise_size, int engine, float clumping) {
    if (engine == 0) {
        ivec2 ip = ivec2(floor(pos));
        uvec3 s1 = pcg3d(uvec3(uvec2(ip + ivec2(20000000)), channel_seed));
        uvec3 s2 = pcg3d(uvec3(uvec2(ip + ivec2(40000000)), channel_seed + 1013904223u));
        vec4 s = vec4(float(s1.x), float(s1.y), float(s2.x), float(s2.y)) * (1.0 / 4294967296.0);
        
        if (clumping > 0.01) {
            float v = voronoi_crystal(pos * 0.45, channel_seed);
            s = mix(s, vec4(v), clumping * 0.45);
        }
        return pow(s, vec4(1.0 / in_noise_gamma));
    } else if (engine == 1) {
        float v1 = voronoi_crystal(pos * 0.8, channel_seed);
        float v2 = voronoi_crystal(pos * 1.4 + vec2(3.1, 7.4), channel_seed + 77u);
        float v3 = voronoi_crystal(pos * 2.1 + vec2(5.8, 1.9), channel_seed + 153u);
        float v4 = voronoi_crystal(pos * 3.0 + vec2(2.3, 8.1), channel_seed + 231u);
        return pow(vec4(v1, v2, v3, v4), vec4(1.0 / in_noise_gamma));
    } else {
        ivec2 sub_coord = ivec2(floor(pos));
        ivec2 macro_tile = sub_coord / noise_size;
        ivec2 jitter = hash2(macro_tile + ivec2(int(channel_seed) * 17, int(channel_seed) * 31));
        ivec2 wrapped = (sub_coord + jitter) % noise_size;
        if (wrapped.x < 0) wrapped.x += noise_size.x;
        if (wrapped.y < 0) wrapped.y += noise_size.y;

        vec4 noise_sample = texelFetch(u_noise, wrapped, 0);
        return pow(noise_sample, vec4(1.0 / in_noise_gamma));
    }
}

float render_channel_continuous(float value, vec2 sample_pos, uint channel_seed, vec4 layer_weights, ivec2 noise_size, float in_noise_gamma, int engine, float clumping) {
    vec4 noise_sample = get_continuous_noise(sample_pos, channel_seed, in_noise_gamma, noise_size, engine, clumping);

    float noised_value = step(noise_sample.r, value * layer_weights.r);
    noised_value = max(noised_value, step(noise_sample.g, value * layer_weights.g));
    noised_value = max(noised_value, step(noise_sample.b, value * layer_weights.b));
    noised_value = max(noised_value, step(noise_sample.a, value * layer_weights.a));

    return noised_value > 0.0 ? 1.0 : 0.0;
}

vec3 apply_halation(vec3 col, vec2 uv, vec2 img_size) {
    if (u_halation_enable == 0 || u_halation_intensity <= 0.0) return col;

    vec2 texel = 1.0 / img_size;
    float rad = max(1.0, u_halation_rad);
    vec3 highlight_acc = vec3(0.0);
    float total_w = 0.0;

    const int TAPS = 16;
    for (int i = 0; i < TAPS; i++) {
        float r = sqrt((float(i) + 0.5) / float(TAPS));
        float theta = float(i) * 2.39996323;
        vec2 offset = vec2(cos(theta), sin(theta)) * (r * rad) * texel;

        vec3 s = texture(u_image, uv + offset).rgb;
        float lum = dot(s, vec3(0.299, 0.587, 0.114));
        float overexposed = max(0.0, lum - u_halation_thresh);
        float w = pow(max(0.0, 1.0 - r), u_halation_falloff);

        highlight_acc += s * overexposed * w;
        total_w += w;
    }

    if (total_w > 0.0) {
        vec3 halo = (highlight_acc / total_w) * u_halation_color * (u_halation_intensity * 3.5);
        col = 1.0 - (1.0 - col) * (1.0 - clamp(halo, 0.0, 1.0));
    }
    return col;
}

vec3 apply_bloom(vec3 col, vec2 uv, vec2 img_size) {
    if (u_bloom_enable == 0 || u_bloom_intensity <= 0.0) return col;

    vec2 texel = 1.0 / img_size;
    float rad = max(1.0, u_bloom_rad);
    vec3 bloom_acc = vec3(0.0);
    float total_w = 0.0;

    const int TAPS = 16;
    for (int i = 0; i < TAPS; i++) {
        float r = sqrt((float(i) + 0.5) / float(TAPS));
        float theta = float(i) * 2.39996323 + 1.2;
        vec2 offset = vec2(cos(theta), sin(theta)) * (r * rad) * texel;

        vec3 s = texture(u_image, uv + offset).rgb;
        float lum = dot(s, vec3(0.299, 0.587, 0.114));
        float b_val = smoothstep(u_bloom_thresh, 1.0, lum);
        float w = 1.0 - r * 0.65;

        bloom_acc += s * b_val * w;
        total_w += w;
    }

    if (total_w > 0.0) {
        vec3 bloom = (bloom_acc / total_w) * u_bloom_color * (u_bloom_intensity * 1.6);
        col += bloom;
    }
    return col;
}

vec3 apply_dust(vec3 col, vec2 pix_coord) {
    if (u_dust_enable == 0 || u_dust_amount <= 0.0) return col;

    float cell_size = 54.0 / max(0.1, u_dust_scale);
    vec2 grid_pos = pix_coord / cell_size;
    ivec2 base_cell = ivec2(floor(grid_pos));
    vec2 local_pos = fract(grid_pos) * cell_size;

    float total_dust = 0.0;

    for (int dy = -1; dy <= 1; dy++) {
        for (int dx = -1; dx <= 1; dx++) {
            ivec2 c = base_cell + ivec2(dx, dy);
            uvec4 h = pcg4d(uvec4(uint(c.x + 30000), uint(c.y + 30000), uint(u_dust_seed), 54321u));

            float prob = float(h.x) * (1.0 / 4294967296.0);
            if (prob < 0.42 * u_dust_scale) {
                vec2 center = vec2(float(h.y), float(h.z)) * (cell_size / 4294967296.0);
                vec2 delta = (local_pos - vec2(float(dx), float(dy)) * cell_size) - center;

                float angle = atan(delta.y, delta.x);
                float deform = 1.0 + 0.35 * sin(angle * 3.0 + float(h.w)) + 0.2 * cos(angle * 5.0 + float(h.y));
                
                float size_norm = float(h.w & 0xffffu) / 65535.0;
                float r = mix(u_dust_size_min, u_dust_size_max, size_norm);
                float dist = length(delta) / deform;

                float speck = smoothstep(r, r * 0.2, dist);
                total_dust = max(total_dust, speck);
            }
        }
    }

    if (total_dust > 0.0) {
        float factor = total_dust * u_dust_amount;
        if (u_dust_brightness < 0.0) {
            col = mix(col, vec3(0.0), factor * (-u_dust_brightness));
        } else {
            col = mix(col, vec3(1.0), factor * u_dust_brightness);
        }
    }

    return col;
}

vec3 apply_scratches(vec3 col, vec2 pix_coord) {
    if (u_scratch_enable == 0 || u_scratch_intensity <= 0.0) return col;

    float track_width = 80.0 / max(0.1, u_scratch_scale);
    float max_scratch = 0.0;
    int total_passes = (u_scratch_mode == 2) ? 3 : 1;

    for (int pass = 0; pass < 3; pass++) {
        if (pass >= total_passes) break;

        float ang_rad = radians(u_scratch_angle);
        if (u_scratch_mode == 1) {
            ang_rad += ((pass == 0) ? -0.3 : 0.3);
        } else if (u_scratch_mode == 2) {
            ang_rad = float(pass) * 1.05 - 1.0;
        }

        vec2 rot_coord;
        float cosA = cos(ang_rad);
        float sinA = sin(ang_rad);
        rot_coord.x = pix_coord.x * cosA - pix_coord.y * sinA;
        rot_coord.y = pix_coord.x * sinA + pix_coord.y * cosA;

        int center_track = int(floor(rot_coord.x / track_width));

        for (int t = -1; t <= 1; t++) {
            int track = center_track + t;
            uvec4 h = pcg4d(uvec4(uint(track + 40000 + pass * 500), uint(u_scratch_seed), 9999u, 1111u));

            float active_prob = float(h.x) * (1.0 / 4294967296.0);
            if (active_prob < 0.38 * u_scratch_scale) {
                float track_center_x = (float(track) + float(h.y) * (1.0 / 4294967296.0)) * track_width;
                float wobble = sin(rot_coord.y * 0.02 + float(h.z)) * 2.0 + sin(rot_coord.y * 0.09 + float(h.w)) * 0.7;
                float line_x = track_center_x + wobble;

                float dist_x = abs(rot_coord.x - line_x);
                float seg = sin(rot_coord.y * 0.004 + float(h.w)) * cos(rot_coord.y * 0.015 + float(h.y));
                float seg_active = smoothstep(-0.25, 0.25, seg);

                float line_profile = smoothstep(u_scratch_thickness, u_scratch_thickness * 0.2, dist_x) * seg_active;
                max_scratch = max(max_scratch, line_profile);
            }
        }
    }

    if (max_scratch > 0.0) {
        col = mix(col, u_scratch_color, max_scratch * u_scratch_intensity);
    }

    return col;
}

vec3 apply_hairs(vec3 col, vec2 pix_coord, vec2 img_size) {
    if (u_hair_enable == 0 || u_hair_opacity <= 0.0 || u_hair_count <= 0) return col;

    float max_hair = 0.0;

    for (int i = 0; i < 10; i++) {
        if (i >= u_hair_count) break;

        uvec4 h = pcg4d(uvec4(uint(i * 1337 + 77), uint(u_hair_seed), 4321u, 8765u));
        vec2 p0 = vec2(float(h.x) * (1.0 / 4294967296.0), float(h.y) * (1.0 / 4294967296.0)) * img_size;

        float angle = float(h.z) * (6.2831853 / 4294967296.0);
        vec2 dir = vec2(cos(angle), sin(angle));
        vec2 normal = vec2(-dir.y, dir.x);

        vec2 delta = pix_coord - p0;
        float proj_len = dot(delta, dir);
        float proj_dist = dot(delta, normal);

        float half_len = u_hair_len * 0.5;
        if (abs(proj_len) < half_len) {
            float t = proj_len / half_len;
            float curve_offset = sin(t * 3.14159 * (1.0 + u_hair_curl)) * (u_hair_len * 0.15 * u_hair_curl);
            curve_offset += (t * t) * (u_hair_len * 0.1 * (float(h.w & 0xffu) / 128.0 - 1.0));

            float dist_to_spine = abs(proj_dist - curve_offset);
            float taper = 1.0 - smoothstep(0.7, 1.0, abs(t));
            float thick = max(0.4, u_hair_thick * taper);

            float hair_alpha = smoothstep(thick, thick * 0.2, dist_to_spine) * taper;
            max_hair = max(max_hair, hair_alpha);
        }
    }

    if (max_hair > 0.0) {
        col = mix(col, vec3(0.04, 0.03, 0.03), max_hair * u_hair_opacity);
    }

    return col;
}

void main() {
    vec4 original_color = texture(u_image, v_texCoord);

    if (u_view_mode == 2 || (u_view_mode == 0 && v_texCoord.x > u_split_pos)) {
        fragColor = original_color;
        return;
    }

    vec3 rgb = original_color.rgb;
    if (u_view_mode == 3) {
        rgb = vec3(0.5);
    } else {
        // 1. Convert sRGB input into Linear RGB photon exposure
        rgb = pow(rgb, vec3(1.0 / u_in_texture_gamma));

        // 2. Apply Kodak Spectral Sensitivity & Photochemical Color Transformation
        rgb = apply_film_color_science(rgb);

        if (u_grayscale == 1) {
            float l = dot(rgb, vec3(0.299, 0.587, 0.114));
            rgb = vec3(l);
        }
    }

    ivec2 noise_size = ivec2(u_noise_size);
    vec3 grain_count = vec3(0.0);

    vec2 base_grain_coord = v_texCoord * u_image_size * float(u_noise_tile_size);

    for (int y = 0; y < 8; ++y) {
        if (y >= u_noise_tile_size) break;
        for (int x = 0; x < 8; ++x) {
            if (x >= u_noise_tile_size) break;

            vec2 sub_pos = base_grain_coord + vec2(float(x), float(y));

            if (u_grain_jitter > 0.001) {
                uvec3 j_hash = pcg3d(uvec3(uvec2(ivec2(floor(sub_pos)) + ivec2(1337)), 777u));
                vec2 j_offset = (vec2(float(j_hash.x & 0xffffu), float(j_hash.y & 0xffffu)) / 65535.0 - 0.5) * u_grain_jitter;
                sub_pos += j_offset;
            }

            grain_count.r += render_channel_continuous(rgb.r, sub_pos + vec2(u_noise_offsets_r), 101u, u_layer_weights, noise_size, u_in_noise_gamma, u_noise_engine, u_grain_clumping);
            grain_count.g += render_channel_continuous(rgb.g, sub_pos + vec2(u_noise_offsets_g), 203u, u_layer_weights, noise_size, u_in_noise_gamma, u_noise_engine, u_grain_clumping);
            grain_count.b += render_channel_continuous(rgb.b, sub_pos + vec2(u_noise_offsets_b), 307u, u_layer_weights, noise_size, u_in_noise_gamma, u_noise_engine, u_grain_clumping);
        }
    }

    float tile_area = float(u_noise_tile_size * u_noise_tile_size);
    vec3 reconstructed = grain_count / tile_area;
    vec3 out_rgb = pow(reconstructed, vec3(u_out_texture_gamma));

    if (u_view_mode != 3) {
        if (u_grayscale == 1) {
            out_rgb = vec3(out_rgb.r);
        } else {
            vec3 base_color = mix(vec3(0.0), u_base_color, u_use_base_color);
            out_rgb = mix(base_color, vec3(1.0), out_rgb);
        }

        out_rgb = apply_halation(out_rgb, v_texCoord, u_image_size);
        out_rgb = apply_bloom(out_rgb, v_texCoord, u_image_size);
        out_rgb = apply_dust(out_rgb, v_texCoord * u_image_size);
        out_rgb = apply_scratches(out_rgb, v_texCoord * u_image_size);
        out_rgb = apply_hairs(out_rgb, v_texCoord * u_image_size, u_image_size);
    }

    fragColor = vec4(out_rgb, original_color.a);
}`;

// Image Library Item Model
interface ImageItem {
  id: string;
  name: string;
  img: HTMLImageElement;
  thumbUrl: string;
  selected: boolean;
  settings: FilmPreset;
}

export const FilmGrainLab: React.FC = () => {
  // Application State
  const [presets, setPresets] = useState<Record<string, FilmPreset>>(DEFAULT_PRESETS);
  const [activePresetId, setActivePresetId] = useState<string>('kodak_gold_200');
  const [settings, setSettings] = useState<FilmPreset>(DEFAULT_PRESETS.kodak_gold_200);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'split' | 'processed' | 'original' | 'mask'>('split');
  const [splitRatio, setSplitRatio] = useState<number>(0.5);
  const [loupeActive, setLoupeActive] = useState<boolean>(false);
  const [loupeZoom, setLoupeZoom] = useState<number>(4);
  const [isDraggingSplit, setIsDraggingSplit] = useState<boolean>(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);
  const [batchProgress, setBatchProgress] = useState<{ open: boolean; current: number; total: number; filename: string; percent: number }>({
    open: false,
    current: 0,
    total: 0,
    filename: '',
    percent: 0,
  });
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Status indicators
  const [renderTime, setRenderTime] = useState<string>('0.5 ms');
  const [totalSamples, setTotalSamples] = useState<string>('19.2M');

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const loupeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const loupeContainerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const presetFileInputRef = useRef<HTMLInputElement | null>(null);

  // WebGL Context References
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const imageTextureRef = useRef<WebGLTexture | null>(null);
  const noiseTextureRef = useRef<WebGLTexture | null>(null);

  // Helper Toast
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  // Convert Hex to RGB
  const hexToRgb = (hex: string): [number, number, number] => {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return [((bigint >> 16) & 255) / 255.0, ((bigint >> 8) & 255) / 255.0, (bigint & 255) / 255.0];
  };

  // Generate Blue Noise Texture
  const generateBlueNoise = (gl: WebGL2RenderingContext) => {
    const size = 256;
    const data = new Uint8Array(size * size * 4);

    const hashInt = (x: number, y: number, s: number) => {
      let h = Math.imul(x ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(y ^ 0xc2b2ae35, 0x7feb352d) ^ Math.imul(s, 0x846ca68b);
      h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
      h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967296.0;
    };

    for (let c = 0; c < 4; c++) {
      const len = size * size;
      const scores = new Float32Array(len);
      const indices = new Uint32Array(len);

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const idx = y * size + x;
          scores[idx] = hashInt(x, y, c * 10007 + 7919);
          indices[idx] = idx;
        }
      }
      indices.sort((a, b) => scores[a] - scores[b]);
      for (let i = 0; i < len; i++) {
        data[indices[i] * 4 + c] = Math.floor((i / len) * 256);
      }
    }

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    return tex;
  };

  // Upload Texture Helper
  const uploadImageTexture = useCallback((img: HTMLImageElement) => {
    const gl = glRef.current;
    const canvas = canvasRef.current;
    if (!gl || !canvas || !img) return;

    canvas.width = img.width;
    canvas.height = img.height;

    if (imageTextureRef.current) gl.deleteTexture(imageTextureRef.current);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    imageTextureRef.current = tex;
  }, []);

  // WebGL Render Loop
  const renderWebGL = useCallback((customSettings?: FilmPreset, customImg?: HTMLImageElement) => {
    const gl = glRef.current;
    const program = programRef.current;
    const canvas = canvasRef.current;
    const activeImg = customImg || images[activeImageIndex]?.img;
    const s = customSettings || settings;

    if (!gl || !program || !canvas || !activeImg || !imageTextureRef.current || !noiseTextureRef.current) return;

    const t0 = performance.now();

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTextureRef.current);
    gl.uniform1i(gl.getUniformLocation(program, 'u_image'), 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, noiseTextureRef.current);
    gl.uniform1i(gl.getUniformLocation(program, 'u_noise'), 1);

    gl.uniform2f(gl.getUniformLocation(program, 'u_image_size'), activeImg.width, activeImg.height);
    gl.uniform2f(gl.getUniformLocation(program, 'u_noise_size'), 256.0, 256.0);

    // Kodak Spectral Profile & Color Science Uniforms
    gl.uniform1i(gl.getUniformLocation(program, 'u_spectral_profile'), s.spectralProfile ?? 0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_mix'), (s.profileMix ?? 100) / 100.0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_sat'), s.profileSat ?? 100);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_latitude'), s.profileLatitude ?? 1.0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_toe'), s.profileToe ?? 1.0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_warmth'), s.profileWarmth ?? 0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_profile_dir'), s.profileDIR ?? 0);

    const baseColorRgb = hexToRgb(s.baseCol);
    const halationColorRgb = hexToRgb(s.halationColor);
    const bloomColorRgb = hexToRgb(s.bloomColor);
    const scratchColorRgb = hexToRgb(s.scratchColor);

    gl.uniform1i(gl.getUniformLocation(program, 'u_noise_tile_size'), s.tile);
    gl.uniform1f(gl.getUniformLocation(program, 'u_grain_jitter'), s.jitter / 100.0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_grain_clumping'), s.clumping / 100.0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_noise_engine'), s.engine);
    gl.uniform2i(gl.getUniformLocation(program, 'u_noise_offsets_r'), s.offR[0], s.offR[1]);
    gl.uniform2i(gl.getUniformLocation(program, 'u_noise_offsets_g'), s.offG[0], s.offG[1]);
    gl.uniform2i(gl.getUniformLocation(program, 'u_noise_offsets_b'), s.offB[0], s.offB[1]);
    gl.uniform4f(gl.getUniformLocation(program, 'u_layer_weights'), s.w[0], s.w[1], s.w[2], s.w[3]);

    gl.uniform1i(gl.getUniformLocation(program, 'u_grayscale'), s.gray);
    gl.uniform3f(gl.getUniformLocation(program, 'u_base_color'), baseColorRgb[0], baseColorRgb[1], baseColorRgb[2]);
    gl.uniform1f(gl.getUniformLocation(program, 'u_use_base_color'), s.useBase ? s.baseBlend / 100.0 : 0.0);

    gl.uniform1f(gl.getUniformLocation(program, 'u_in_texture_gamma'), s.gammaIn);
    gl.uniform1f(gl.getUniformLocation(program, 'u_in_noise_gamma'), s.gammaNoise);
    gl.uniform1f(gl.getUniformLocation(program, 'u_out_texture_gamma'), s.gammaOut);

    // Halation
    gl.uniform1i(gl.getUniformLocation(program, 'u_halation_enable'), s.halationEnable ? 1 : 0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_halation_thresh'), s.halationThresh);
    gl.uniform1f(gl.getUniformLocation(program, 'u_halation_rad'), s.halationRad);
    gl.uniform1f(gl.getUniformLocation(program, 'u_halation_intensity'), s.halationIntensity / 100.0);
    gl.uniform3f(gl.getUniformLocation(program, 'u_halation_color'), halationColorRgb[0], halationColorRgb[1], halationColorRgb[2]);
    gl.uniform1f(gl.getUniformLocation(program, 'u_halation_falloff'), s.halationFalloff);

    // Bloom
    gl.uniform1i(gl.getUniformLocation(program, 'u_bloom_enable'), s.bloomEnable ? 1 : 0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_bloom_thresh'), s.bloomThresh);
    gl.uniform1f(gl.getUniformLocation(program, 'u_bloom_rad'), s.bloomRad);
    gl.uniform1f(gl.getUniformLocation(program, 'u_bloom_intensity'), s.bloomIntensity / 100.0);
    gl.uniform3f(gl.getUniformLocation(program, 'u_bloom_color'), bloomColorRgb[0], bloomColorRgb[1], bloomColorRgb[2]);

    // Dust
    gl.uniform1i(gl.getUniformLocation(program, 'u_dust_enable'), s.dustEnable ? 1 : 0);
    gl.uniform1f(gl.getUniformLocation(program, 'u_dust_scale'), s.dustScale);
    gl.uniform1f(gl.getUniformLocation(program, 'u_dust_size_min'), s.dustMin);
    gl.uniform1f(gl.getUniformLocation(program, 'u_dust_size_max'), s.dustMax);
    gl.uniform1f(gl.getUniformLocation(program, 'u_dust_brightness'), s.dustBright);
    gl.uniform1f(gl.getUniformLocation(program, 'u_dust_amount'), s.dustAmount / 100.0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_dust_seed'), s.dustSeed || 1337);

    // Scratches
    gl.uniform1i(gl.getUniformLocation(program, 'u_scratch_enable'), s.scratchEnable ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_scratch_mode'), s.scratchMode);
    gl.uniform1f(gl.getUniformLocation(program, 'u_scratch_angle'), s.scratchAngle);
    gl.uniform1f(gl.getUniformLocation(program, 'u_scratch_scale'), s.scratchScale);
    gl.uniform1f(gl.getUniformLocation(program, 'u_scratch_thickness'), s.scratchThick);
    gl.uniform3f(gl.getUniformLocation(program, 'u_scratch_color'), scratchColorRgb[0], scratchColorRgb[1], scratchColorRgb[2]);
    gl.uniform1f(gl.getUniformLocation(program, 'u_scratch_intensity'), s.scratchIntensity / 100.0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_scratch_seed'), s.scratchSeed || 7777);

    // Hairs
    gl.uniform1i(gl.getUniformLocation(program, 'u_hair_enable'), s.hairEnable ? 1 : 0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_hair_count'), s.hairCount);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hair_len'), s.hairLen);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hair_curl'), s.hairCurl);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hair_thick'), s.hairThick);
    gl.uniform1f(gl.getUniformLocation(program, 'u_hair_opacity'), s.hairOpacity / 100.0);
    gl.uniform1i(gl.getUniformLocation(program, 'u_hair_seed'), s.hairSeed || 4242);

    let modeId = 0;
    if (viewMode === 'processed') modeId = 1;
    if (viewMode === 'original') modeId = 2;
    if (viewMode === 'mask') modeId = 3;

    gl.uniform1i(gl.getUniformLocation(program, 'u_view_mode'), modeId);
    gl.uniform1f(gl.getUniformLocation(program, 'u_split_pos'), splitRatio);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    const dt = (performance.now() - t0).toFixed(1);
    setRenderTime(`${dt} ms`);

    const samples = ((activeImg.width * activeImg.height * s.tile * s.tile) / 1000000).toFixed(1);
    setTotalSamples(`${samples}M`);
  }, [images, activeImageIndex, settings, viewMode, splitRatio]);

  // Initialize WebGL & Shaders
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true, antialias: false });
    if (!gl) {
      alert('WebGL 2.0 is required for film grain simulation.');
      return;
    }
    glRef.current = gl;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    programRef.current = prog;

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const texBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'a_position');
    const texLoc = gl.getAttribLocation(prog, 'a_texCoord');

    gl.enableVertexAttribArray(posLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(texLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuf);
    gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0);

    noiseTextureRef.current = generateBlueNoise(gl);

    // Load Photographic Sample Image by default
    loadSampleImage();

    // Load saved user presets from localStorage
    try {
      const saved = localStorage.getItem('filmgrain_custom_presets');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPresets((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Update Settings change
  const updateSetting = <K extends keyof FilmPreset>(key: K, value: FilmPreset[K]) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      if (images[activeImageIndex]) {
        images[activeImageIndex].settings = next;
      }
      return next;
    });
  };

  // Re-render when settings, images or modes change
  useEffect(() => {
    renderWebGL();
  }, [renderWebGL]);

  // Load Test Target
  const loadSampleImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#1c1d22';
    ctx.fillRect(0, 0, 1200, 800);

    const portraitGrad = ctx.createRadialGradient(600, 360, 40, 600, 360, 320);
    portraitGrad.addColorStop(0, '#f5deb3');
    portraitGrad.addColorStop(0.3, '#d29672');
    portraitGrad.addColorStop(0.6, '#6b4435');
    portraitGrad.addColorStop(1, '#1c1d22');
    ctx.fillStyle = portraitGrad;
    ctx.beginPath();
    ctx.arc(600, 360, 320, 0, Math.PI * 2);
    ctx.fill();

    const specGrad = ctx.createRadialGradient(530, 290, 5, 530, 290, 80);
    specGrad.addColorStop(0, '#ffffff');
    specGrad.addColorStop(0.4, '#fffaeb');
    specGrad.addColorStop(1, 'rgba(255, 250, 235, 0)');
    ctx.fillStyle = specGrad;
    ctx.beginPath();
    ctx.arc(530, 290, 80, 0, Math.PI * 2);
    ctx.fill();

    const wedgeW = 1000 / 10;
    for (let i = 0; i < 10; i++) {
      const val = Math.round((i / 9) * 255);
      ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
      ctx.fillRect(100 + i * wedgeW, 680, wedgeW - 3, 50);
    }

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '500 13px Inter, sans-serif';
    ctx.fillText('0% D-MAX', 100, 668);
    ctx.fillText('18% GRAY', 500, 668);
    ctx.fillText('100% HIGHLIGHT', 980, 668);

    const img = new Image();
    img.onload = () => {
      addImageToLibrary(img, 'Photographic Target');
    };
    img.src = canvas.toDataURL();
  };

  // Add Image to Reel
  const addImageToLibrary = (img: HTMLImageElement, name: string) => {
    const thumbCanvas = document.createElement('canvas');
    const maxDim = 120;
    let tw = img.width, th = img.height;
    if (tw > th) {
      th = Math.round((th * maxDim) / tw);
      tw = maxDim;
    } else {
      tw = Math.round((tw * maxDim) / th);
      th = maxDim;
    }
    thumbCanvas.width = tw;
    thumbCanvas.height = th;
    const tctx = thumbCanvas.getContext('2d')!;
    tctx.drawImage(img, 0, 0, tw, th);
    const thumbUrl = thumbCanvas.toDataURL('image/jpeg', 0.8);

    const newItem: ImageItem = {
      id: 'img_' + Math.random().toString(36).substr(2, 9),
      name: name || `Photo ${images.length + 1}`,
      img: img,
      thumbUrl: thumbUrl,
      selected: true,
      settings: { ...settings },
    };

    setImages((prev) => {
      const updated = [...prev, newItem];
      setActiveImageIndex(updated.length - 1);
      uploadImageTexture(img);
      return updated;
    });
  };

  // Set Active Image in Reel
  const setActiveImage = (idx: number) => {
    if (idx < 0 || idx >= images.length) return;
    setActiveImageIndex(idx);
    const item = images[idx];
    uploadImageTexture(item.img);
    setSettings(item.settings);
  };

  // Multi-File Upload Handlers
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter((f) => f.type.startsWith('image/'));
    if (!files.length) return;
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => addImageToLibrary(img, file.name);
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  // Apply Preset Function
  const applyPreset = (presetId: string) => {
    const p = presets[presetId];
    if (!p) return;
    setActivePresetId(presetId);
    setSettings({ ...p });
    if (images[activeImageIndex]) {
      images[activeImageIndex].settings = { ...p };
    }
    showToast(`Applied preset: ${p.name}`);
  };

  // Handle Spectral Profile Dropdown Change
  const handleSpectralProfileDropdown = (profileIdx: number) => {
    // Map spectralProfile index to corresponding preset ID if available
    const stockPresetMap: Record<number, string> = {
      0: 'kodak_gold_200',
      1: 'kodak_ultramax_400',
      2: 'kodak_ektar_100',
      3: 'kodak_ektachrome_e100',
      4: 'kodak_portra_400',
      5: 'kodak_trix_400',
      6: 'cinestill',
      7: 'vision3',
      8: 'hp5',
      9: 'default',
    };

    const targetPresetId = stockPresetMap[profileIdx];
    if (targetPresetId && presets[targetPresetId]) {
      applyPreset(targetPresetId);
    } else {
      updateSetting('spectralProfile', profileIdx);
    }
  };

  // Save Custom Preset
  const handleSaveCustomPreset = (presetData: FilmPreset, downloadJson: boolean) => {
    const id = 'custom_' + Date.now();
    const newPreset = { ...presetData, id, isCustom: true };

    setPresets((prev) => {
      const updated = { ...prev, [id]: newPreset };
      try {
        const customOnly = Object.values(updated).filter((p) => p.isCustom);
        const customMap: Record<string, FilmPreset> = {};
        customOnly.forEach((c) => (customMap[c.id] = c));
        localStorage.setItem('filmgrain_custom_presets', JSON.stringify(customMap));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    if (downloadJson) {
      const jsonStr = JSON.stringify(newPreset, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = `${newPreset.name.toLowerCase().replace(/\s+/g, '_')}.json`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    }

    showToast(`Preset "${newPreset.name}" saved!`);
  };

  // Import JSON Preset from File
  const handleImportPresetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.name && data.tile) {
          handleSaveCustomPreset(data, false);
          applyPreset(data.id || 'custom_' + Date.now());
        }
      } catch (err) {
        alert('Invalid preset JSON file.');
      }
    };
    reader.readAsText(file);
  };

  // Copy Settings to Selected Images
  const copySettingsToSelected = () => {
    let count = 0;
    setImages((prev) =>
      prev.map((item) => {
        if (item.selected) {
          count++;
          return { ...item, settings: { ...settings } };
        }
        return item;
      })
    );
    showToast(`Copied settings to ${count} photo${count !== 1 ? 's' : ''}`);
  };

  // Single PNG Full-Res Export
  const exportSinglePNG = () => {
    const activeItem = images[activeImageIndex];
    const canvas = canvasRef.current;
    if (!activeItem || !canvas) return;

    const prevMode = viewMode;
    setViewMode('processed');
    renderWebGL();

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const baseName = activeItem.name.replace(/\.[^/.]+$/, '');
      const timeStr = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      a.download = `filmgrain-${baseName}-${timeStr}.png`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);

      setViewMode(prevMode);
      renderWebGL();
    }, 'image/png');
  };

  // Batch Export with ZIP
  const exportBatch = async () => {
    const selected = images.filter((img) => img.selected);
    if (!selected.length) {
      alert('Select at least one photo in the reel to export.');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    setBatchProgress({
      open: true,
      current: 0,
      total: selected.length,
      filename: '',
      percent: 0,
    });

    const zip = new JSZip();
    const prevActive = activeImageIndex;
    const prevMode = viewMode;
    setViewMode('processed');

    for (let i = 0; i < selected.length; i++) {
      const item = selected[i];
      const pct = Math.round(((i + 1) / selected.length) * 100);

      setBatchProgress({
        open: true,
        current: i + 1,
        total: selected.length,
        filename: `${item.name} (${item.img.width} × ${item.img.height} px)`,
        percent: pct,
      });

      uploadImageTexture(item.img);
      renderWebGL(item.settings, item.img);

      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (blob) {
        const baseName = item.name.replace(/\.[^/.]+$/, '');
        const outName = `filmgrain_${String(i + 1).padStart(2, '0')}_${baseName}.png`;
        zip.file(outName, blob);
      }

      await new Promise((r) => setTimeout(r, 60));
    }

    setBatchProgress((prev) => ({ ...prev, filename: 'Compressing ZIP archive...' }));
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    const timeStr = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    a.download = `filmgrain_batch_${timeStr}.zip`;
    a.href = zipUrl;
    a.click();
    URL.revokeObjectURL(zipUrl);

    setBatchProgress({ open: false, current: 0, total: 0, filename: '', percent: 0 });
    setViewMode(prevMode);
    setActiveImage(prevActive);
    showToast(`Exported ${selected.length} photos as ZIP archive!`);
  };

  // Loupe Mouse Tracking
  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const loupe = loupeContainerRef.current;
    const loupeCanvas = loupeCanvasRef.current;
    if (!canvas || !loupe || !loupeCanvas || !loupeActive || !images[activeImageIndex]) {
      if (loupe) loupe.style.display = 'none';
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (mouseX < 0 || mouseX > rect.width || mouseY < 0 || mouseY > rect.height) {
      loupe.style.display = 'none';
      return;
    }

    loupe.style.display = 'block';

    const size = 140;
    let posX = e.clientX + 16;
    let posY = e.clientY - size - 12;

    if (posX + size > window.innerWidth - 10) posX = e.clientX - size - 16;
    if (posY < 60) posY = e.clientY + 18;

    loupe.style.left = `${posX}px`;
    loupe.style.top = `${posY}px`;

    const normX = mouseX / rect.width;
    const normY = mouseY / rect.height;
    const srcX = normX * canvas.width;
    const srcY = normY * canvas.height;

    const sampleW = size / loupeZoom;
    const sampleH = size / loupeZoom;

    const ctx = loupeCanvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(canvas, srcX - sampleW / 2, srcY - sampleH / 2, sampleW, sampleH, 0, 0, size, size);
    }
  };

  // Split Divider Dragging
  const handleSplitMouseDown = () => {
    if (viewMode !== 'split') return;
    setIsDraggingSplit(true);
  };

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDraggingSplit || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      setSplitRatio(x / rect.width);
    };

    const handleWindowMouseUp = () => setIsDraggingSplit(false);

    if (isDraggingSplit) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      window.addEventListener('mouseup', handleWindowMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isDraggingSplit]);

  const activeItem = images[activeImageIndex];
  const selectedCount = images.filter((img) => img.selected).length;

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 text-zinc-100 font-sans overflow-hidden select-none">
      {/* Top Header Navigation */}
      <header className="min-h-13 bg-zinc-900/90 border-b border-zinc-800 flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-2 gap-2 flex-shrink-0 z-40">
        <div className="flex items-center gap-2.5">
          <Link
            to="/"
            className="text-xs text-zinc-400 hover:text-zinc-100 flex items-center gap-1 px-2 py-1 rounded bg-zinc-950 border border-zinc-800 transition-colors"
            title="Return to main portfolio"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </Link>
          <div className="h-4 w-px bg-zinc-800" />
          <Sparkles className="w-4 h-4 text-zinc-100" />
          <h1 className="text-sm font-semibold tracking-tight text-zinc-100">Film Grain Lab</h1>
          <span className="hidden sm:inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
            React + WebGL 2.0
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-zinc-950 p-0.5 rounded border border-zinc-800 text-xs overflow-x-auto max-w-full">
          {(['split', 'processed', 'original', 'mask'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2.5 py-1 rounded transition-colors capitalize whitespace-nowrap ${
                viewMode === mode
                  ? 'bg-zinc-800 text-zinc-100 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {mode === 'split' ? 'Split View' : mode === 'mask' ? 'Grain Mask' : mode}
            </button>
          ))}

          <div className="h-4 w-px bg-zinc-800 mx-1 flex-shrink-0" />

          {/* Loupe Toggle */}
          <button
            onClick={() => setLoupeActive(!loupeActive)}
            className={`px-2 py-1 rounded flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              loupeActive ? 'bg-zinc-800 text-zinc-100 font-medium' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Loupe</span>
          </button>

          {/* Loupe Zoom Level Pills */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded px-0.5 ml-1 flex-shrink-0">
            {[2, 4, 8, 16].map((zoom) => (
              <button
                key={zoom}
                onClick={() => {
                  setLoupeZoom(zoom);
                  if (!loupeActive) setLoupeActive(true);
                }}
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  loupeZoom === zoom ? 'bg-zinc-800 text-zinc-100 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {zoom}x
              </button>
            ))}
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadSampleImage}
            className="h-8 text-xs border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hidden lg:flex"
          >
            Load Target
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="h-8 text-xs border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 gap-1.5"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload</span>
          </Button>

          <Button
            size="sm"
            onClick={exportSinglePNG}
            className="h-8 text-xs bg-zinc-100 hover:bg-white text-zinc-950 font-semibold gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export PNG</span>
          </Button>
        </div>
      </header>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileUpload}
      />
      <input
        ref={presetFileInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={handleImportPresetFile}
      />

      {/* Main Workspace Column */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Controls (Collapsible Sections) */}
        <aside className="w-88 bg-zinc-900/60 border-r border-zinc-800/80 flex flex-col overflow-y-auto flex-shrink-0 z-10 scrollbar-thin scrollbar-thumb-zinc-800">
          
          {/* Section 1: Presets & Stock Profiles */}
          <CollapsibleSection
            id="presets"
            title="Film Stocks & Presets"
            icon={<Sliders className="w-3.5 h-3.5" />}
            defaultOpen={true}
            infoTitle="Official Kodak Film Profiles"
            infoDescription="Authentic sensitometric and spectral profiles for Kodak Gold 200, Ektar 100, Ektachrome E100, Portra 400, Tri-X 400, and UltraMax 400 based on published Kodak technical publications."
            actionButton={
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSaveModalOpen(true)}
                  className="h-6 px-1.5 text-[11px] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                  title="Save current parameters as custom preset"
                >
                  <Save className="w-3 h-3 mr-1" /> Save
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => presetFileInputRef.current?.click()}
                  className="h-6 px-1.5 text-[11px] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                  title="Import preset .JSON file"
                >
                  <FolderOpen className="w-3 h-3 mr-1" /> Load
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => applyPreset('kodak_gold_200')}
                  className="h-6 px-1.5 text-[11px] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                  title="Reset to Kodak Gold 200"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              </div>
            }
          >
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {Object.values(presets).map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p.id)}
                  className={`text-left p-2 rounded border transition-all ${
                    activePresetId === p.id
                      ? 'bg-zinc-800 border-zinc-400 shadow-sm'
                      : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <span className="text-xs font-medium text-zinc-100 block truncate">{p.name}</span>
                  <span className="text-[10px] font-mono text-zinc-400 block truncate mt-0.5">{p.tag}</span>
                </button>
              ))}
            </div>
          </CollapsibleSection>

          {/* Section 2: Spectral Film Science & Color Transformation */}
          <CollapsibleSection
            id="spectral"
            title="Spectral Color Profile"
            badge={
              settings.spectralProfile === 0 ? 'Gold 200' :
              settings.spectralProfile === 1 ? 'UltraMax' :
              settings.spectralProfile === 2 ? 'Ektar 100' :
              settings.spectralProfile === 3 ? 'Ektachrome' :
              settings.spectralProfile === 4 ? 'Portra 400' :
              settings.spectralProfile === 5 ? 'Tri-X 400' :
              settings.spectralProfile === 6 ? 'CineStill' :
              settings.spectralProfile === 7 ? 'Vision3' :
              settings.spectralProfile === 8 ? 'HP5' : 'Linear'
            }
            icon={<Palette className="w-3.5 h-3.5" />}
            defaultOpen={true}
            infoTitle="Photochemical Spectral Sensitivity & Color Science"
            infoDescription="Applies published Kodak spectral sensitivity matrices, DIR inter-image coupler inhibition, and D-log H characteristic S-curves (toe, contrast gamma, and highlight latitude) before silver halide grain rendering."
          >
            <div className="space-y-3">
              {/* Profile Selection Dropdown */}
              <div>
                <span className="text-xs text-zinc-300 block mb-1">Film Stock Emulsion Profile</span>
                <select
                  value={settings.spectralProfile}
                  onChange={(e) => handleSpectralProfileDropdown(parseInt(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-xs text-zinc-200 outline-none cursor-pointer focus:border-zinc-600"
                >
                  <option value={0}>Kodak Gold 200 (E-7022 Warm Amber C-41)</option>
                  <option value={1}>Kodak UltraMax 400 (E-7006 High Saturation)</option>
                  <option value={2}>Kodak Ektar 100 (E-4046 Ultra-Vivid PGI &lt;25)</option>
                  <option value={3}>Kodak Ektachrome E100 (E-4000 E-6 Slide)</option>
                  <option value={4}>Kodak Portra 400 (E-4050 Portrait Latitude)</option>
                  <option value={5}>Kodak Tri-X 400 (F-4017 Panchromatic B&W)</option>
                  <option value={6}>CineStill 800T (3200K Tungsten Motion Picture)</option>
                  <option value={7}>Kodak Vision3 500T (Hollywood Cinema Negative)</option>
                  <option value={8}>Ilford HP5 Plus (Classic British B&W)</option>
                  <option value={9}>Neutral Linear (No Color Shift)</option>
                </select>
              </div>

              {/* Profile Mix Slider */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Profile Intensity / Mix</span>
                    <InfoTooltip
                      title="Spectral Profile Mix"
                      description="Controls the blend between the unadjusted linear sensor color and the photographic film spectral response."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileMix}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={settings.profileMix}
                  onChange={(e) => updateSetting('profileMix', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Color Saturation / Dye Density */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Dye Density / Saturation</span>
                    <InfoTooltip
                      title="Coupler Dye Saturation"
                      description="Modulates the chromogenic dye density formed during development (e.g. vivid cyan in Ektar vs pastel in Portra)."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileSat}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={settings.profileSat}
                  onChange={(e) => updateSetting('profileSat', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Highlight Latitude (Shoulder) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Highlight Latitude / Roll-off</span>
                    <InfoTooltip
                      title="Highlight Shoulder Compression"
                      description="Simulates the characteristic shoulder roll-off of negative film (+3 stops overexposure latitude in Portra 400 without harsh digital clipping)."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileLatitude.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.05"
                  value={settings.profileLatitude}
                  onChange={(e) => updateSetting('profileLatitude', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Shadow Toe / Contrast */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Shadow Toe / Base Fog</span>
                    <InfoTooltip
                      title="Sensitometric Shadow Toe"
                      description="Controls the soft toe compression in deep shadow regions where silver halide crystals begin photon activation."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileToe.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.05"
                  value={settings.profileToe}
                  onChange={(e) => updateSetting('profileToe', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Warmth / Kelvin Balance */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Spectral Warmth / Kelvin</span>
                    <InfoTooltip
                      title="Color Temperature Spectral Shift"
                      description="Daylight 5500K (Gold 200) to Tungsten 3200K (CineStill 800T) color temperature shift."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileWarmth > 0 ? `+${settings.profileWarmth}` : settings.profileWarmth}</span>
                </div>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="1"
                  value={settings.profileWarmth}
                  onChange={(e) => updateSetting('profileWarmth', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* DIR Coupler Inter-image Separation */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Inter-Image DIR Separation</span>
                    <InfoTooltip
                      title="Developer Inhibitor Releasing Couplers"
                      description="Chemical cross-layer developer suppression during development that sharpens color boundaries and cleans up secondary color pollution."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.profileDIR}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={settings.profileDIR}
                  onChange={(e) => updateSetting('profileDIR', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Section 3: Silver Halide Grain & Emulsion */}
          <CollapsibleSection
            id="grain"
            title="Silver Halide Grain"
            badge={`${settings.tile}x${settings.tile}`}
            icon={<Layers className="w-3.5 h-3.5" />}
            defaultOpen={false}
            infoTitle="Binary Stochastic Silver Halide Simulation"
            infoDescription="Physical silver crystals are discrete binary absorbers. Sub-pixel stochastic step evaluation across 4 emulsion layers simulates true 3D crystal occlusion."
          >
            <div className="space-y-3">
              {/* Engine Mode */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Distribution Engine</span>
                    <InfoTooltip
                      title="Stochastic Noise Distribution"
                      description="Aperiodic PCG-3D evaluates continuous high-entropy coordinates to completely prevent lattice grids or repeating Moiré patterns."
                    />
                  </div>
                </div>
                <select
                  value={settings.engine}
                  onChange={(e) => updateSetting('engine', parseInt(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-xs text-zinc-200 outline-none cursor-pointer focus:border-zinc-600"
                >
                  <option value={0}>Aperiodic PCG-3D Continuous (Zero Lattice)</option>
                  <option value={1}>Simplex-Voronoi Continuous Halide Crystals</option>
                  <option value={2}>Scrambled Blue Noise (Jittered Void-Cluster)</option>
                </select>
              </div>

              {/* Subpixel Tiling */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Subpixel Fineness</span>
                    <InfoTooltip
                      title="Sub-pixel subdivisions"
                      description="Higher subdivisions increase crystal density per pixel for fine-grain stocks like Kodak Portra 160 or Fuji Pro."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.tile}x{settings.tile} ({settings.tile * settings.tile} subpixels)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={settings.tile}
                  onChange={(e) => updateSetting('tile', parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Crystal Spatial Jitter */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Crystal Spatial Jitter</span>
                    <InfoTooltip
                      title="Continuous Spatial Jitter"
                      description="Stochastically shifts crystal centers off rigid Cartesian coordinates, completely destroying pixel grid artifacts."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.jitter}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={settings.jitter}
                  onChange={(e) => updateSetting('jitter', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* Grain Clumping / Roughness */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Grain Clumping / Roughness</span>
                    <InfoTooltip
                      title="Voronoi Halide Crystal Clumping"
                      description="Simulates natural chemical crystal clustering and organic boundary clump shapes found in high-ISO pushed emulsions."
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-200">{settings.clumping}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={settings.clumping}
                  onChange={(e) => updateSetting('clumping', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              {/* 4 Layer Weights */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300">Emulsion Depth Occlusion (4 Layers)</span>
                    <InfoTooltip
                      title="3D Emulsion Crystal Occlusion"
                      description="Weights controlling photon transmission through 4 physical crystal layers from top emulsion surface down to film base."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {([0, 1, 2, 3] as const).map((idx) => (
                    <div key={idx} className="bg-zinc-950 border border-zinc-800 p-1.5 rounded text-center">
                      <span className="text-[10px] font-mono text-zinc-500 block mb-1">L{idx + 1}</span>
                      <input
                        type="range"
                        min="0.0"
                        max="1.0"
                        step="0.05"
                        value={settings.w[idx]}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          const nw: [number, number, number, number] = [settings.w[0], settings.w[1], settings.w[2], settings.w[3]];
                          nw[idx] = val;
                          updateSetting('w', nw);
                        }}
                        className="w-full h-1 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-100"
                      />
                      <span className="text-[10px] font-mono text-zinc-200 block mt-1">
                        {settings.w[idx].toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emulsion Type & Base Tint */}
              <div className="pt-2 border-t border-zinc-800/80 space-y-2.5">
                <div>
                  <span className="text-xs text-zinc-300 block mb-1">Color Emulsion Mode</span>
                  <select
                    value={settings.gray}
                    onChange={(e) => updateSetting('gray', parseInt(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-xs text-zinc-200 outline-none cursor-pointer focus:border-zinc-600"
                  >
                    <option value={0}>3-Layer RGB Color Coupling (Dye Clouds)</option>
                    <option value={1}>Monochrome Metallic Silver Halide</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={settings.useBase}
                      onCheckedChange={(c) => updateSetting('useBase', c)}
                    />
                    <span className="text-xs text-zinc-300">Film Base Tint (Orange Mask)</span>
                  </div>
                  <input
                    type="color"
                    value={settings.baseCol}
                    onChange={(e) => updateSetting('baseCol', e.target.value)}
                    className="w-6 h-5 bg-transparent border border-zinc-800 rounded cursor-pointer p-0"
                  />
                </div>

                {settings.useBase && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-zinc-400">Base Tint Intensity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.baseBlend}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={settings.baseBlend}
                      onChange={(e) => updateSetting('baseBlend', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                )}
              </div>
            </div>
          </CollapsibleSection>

          {/* Section 4: Photochemical Glow (Halation & Bloom Combined) */}
          <CollapsibleSection
            id="photochemical"
            title="Photochemical Glow"
            badge="Halation + Bloom"
            icon={<Flame className="w-3.5 h-3.5" />}
            defaultOpen={false}
            infoTitle="Optical Highlight Dispersion"
            infoDescription="Simulates highlight reflection off the film base (red-orange halation) and atmospheric lens flare (optical bloom)."
          >
            {/* Halation Controls */}
            <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Switch
                    checked={settings.halationEnable}
                    onCheckedChange={(c) => updateSetting('halationEnable', c)}
                  />
                  <span className="text-xs font-medium text-zinc-200">Anti-Halation Layer Glow</span>
                  <InfoTooltip
                    title="Film Base Halation Physics"
                    description="When intense highlight rays penetrate the emulsion, they reflect internally off the polyester base and re-expose the red layer from behind."
                  />
                </div>
                <input
                  type="color"
                  value={settings.halationColor}
                  onChange={(e) => updateSetting('halationColor', e.target.value)}
                  className="w-5 h-4 bg-transparent border border-zinc-800 rounded cursor-pointer p-0"
                />
              </div>

              {settings.halationEnable && (
                <div className="space-y-2 pt-1 border-t border-zinc-800/60">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Exposure Threshold</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.halationThresh.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="0.95"
                      step="0.05"
                      value={settings.halationThresh}
                      onChange={(e) => updateSetting('halationThresh', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Halation Spread / Radius</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.halationRad.toFixed(1)}px</span>
                    </div>
                    <input
                      type="range"
                      min="2.0"
                      max="45.0"
                      step="1.0"
                      value={settings.halationRad}
                      onChange={(e) => updateSetting('halationRad', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Halation Intensity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.halationIntensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="5"
                      value={settings.halationIntensity}
                      onChange={(e) => updateSetting('halationIntensity', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bloom Controls */}
            <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Switch
                    checked={settings.bloomEnable}
                    onCheckedChange={(c) => updateSetting('bloomEnable', c)}
                  />
                  <span className="text-xs font-medium text-zinc-200">Atmospheric Lens Bloom</span>
                  <InfoTooltip
                    title="Optical Lens Bloom"
                    description="Diffuses intense light across all color channels, softening highlight clipping and creating a gentle cinematic lens flare."
                  />
                </div>
                <input
                  type="color"
                  value={settings.bloomColor}
                  onChange={(e) => updateSetting('bloomColor', e.target.value)}
                  className="w-5 h-4 bg-transparent border border-zinc-800 rounded cursor-pointer p-0"
                />
              </div>

              {settings.bloomEnable && (
                <div className="space-y-2 pt-1 border-t border-zinc-800/60">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Highlight Threshold</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.bloomThresh.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="0.95"
                      step="0.05"
                      value={settings.bloomThresh}
                      onChange={(e) => updateSetting('bloomThresh', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Bloom Radius</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.bloomRad.toFixed(1)}px</span>
                    </div>
                    <input
                      type="range"
                      min="4.0"
                      max="60.0"
                      step="2.0"
                      value={settings.bloomRad}
                      onChange={(e) => updateSetting('bloomRad', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Bloom Intensity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.bloomIntensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      step="5"
                      value={settings.bloomIntensity}
                      onChange={(e) => updateSetting('bloomIntensity', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                </div>
              )}
            </div>
          </CollapsibleSection>

          {/* Section 5: Physical Film Defects (Dust, Scratches & Hairs Combined) */}
          <CollapsibleSection
            id="defects"
            title="Film Wear & Defects"
            badge="Dust · Lines · Hairs"
            icon={<Zap className="w-3.5 h-3.5" />}
            defaultOpen={false}
            infoTitle="Organic Gate Artifacts"
            infoDescription="Procedural physical imperfections including dark soot particles, multi-directional emulsion scratches, and curved gate hairs."
          >
            {/* Dust Section */}
            <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Switch
                    checked={settings.dustEnable}
                    onCheckedChange={(c) => updateSetting('dustEnable', c)}
                  />
                  <span className="text-xs font-medium text-zinc-200">Dirt & Soot Particles</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateSetting('dustSeed', Math.floor(Math.random() * 100000))}
                  className="h-5 px-1.5 text-[10px] text-zinc-400 hover:text-zinc-100"
                >
                  🎲 Seed
                </Button>
              </div>

              {settings.dustEnable && (
                <div className="space-y-2 pt-1 border-t border-zinc-800/60">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Min / Max Particle Size</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.dustMin.toFixed(1)}px – {settings.dustMax.toFixed(1)}px</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="range"
                        min="0.2"
                        max="3.0"
                        step="0.1"
                        value={settings.dustMin}
                        onChange={(e) => updateSetting('dustMin', parseFloat(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-100"
                      />
                      <input
                        type="range"
                        min="1.0"
                        max="8.0"
                        step="0.2"
                        value={settings.dustMax}
                        onChange={(e) => updateSetting('dustMax', parseFloat(e.target.value))}
                        className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-zinc-100"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Particle Tone / Brightness</span>
                      <span className="text-xs font-mono text-zinc-200">
                        {settings.dustBright < 0
                          ? `${Math.round(settings.dustBright * 100)}% (Dark Soot)`
                          : `${Math.round(settings.dustBright * 100)}% (Bright Lint)`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="-1.0"
                      max="1.0"
                      step="0.05"
                      value={settings.dustBright}
                      onChange={(e) => updateSetting('dustBright', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Dust Opacity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.dustAmount}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={settings.dustAmount}
                      onChange={(e) => updateSetting('dustAmount', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Scratches Section */}
            <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Switch
                    checked={settings.scratchEnable}
                    onCheckedChange={(c) => updateSetting('scratchEnable', c)}
                  />
                  <span className="text-xs font-medium text-zinc-200">Film Scratches & Lines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={settings.scratchColor}
                    onChange={(e) => updateSetting('scratchColor', e.target.value)}
                    className="w-5 h-4 bg-transparent border border-zinc-800 rounded cursor-pointer p-0"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => updateSetting('scratchSeed', Math.floor(Math.random() * 100000))}
                    className="h-5 px-1.5 text-[10px] text-zinc-400 hover:text-zinc-100"
                  >
                    🎲 Seed
                  </Button>
                </div>
              </div>

              {settings.scratchEnable && (
                <div className="space-y-2 pt-1 border-t border-zinc-800/60">
                  <div>
                    <span className="text-[11px] text-zinc-400 block mb-1">Orientation Mode</span>
                    <select
                      value={settings.scratchMode}
                      onChange={(e) => updateSetting('scratchMode', parseInt(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-1 text-xs text-zinc-200 outline-none cursor-pointer"
                    >
                      <option value={0}>Vertical Transport Lines</option>
                      <option value={1}>Angled & Diagonal Scratches</option>
                      <option value={2}>Random Multi-Angle Abrasions</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Angle & Jitter</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.scratchAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min="-60"
                      max="60"
                      step="1"
                      value={settings.scratchAngle}
                      onChange={(e) => updateSetting('scratchAngle', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Thickness</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.scratchThick.toFixed(1)}px</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="4.0"
                      step="0.1"
                      value={settings.scratchThick}
                      onChange={(e) => updateSetting('scratchThick', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Intensity / Opacity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.scratchIntensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={settings.scratchIntensity}
                      onChange={(e) => updateSetting('scratchIntensity', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Hairs Section */}
            <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Switch
                    checked={settings.hairEnable}
                    onCheckedChange={(c) => updateSetting('hairEnable', c)}
                  />
                  <span className="text-xs font-medium text-zinc-200">Gate Hairs & Fibers</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateSetting('hairSeed', Math.floor(Math.random() * 100000))}
                  className="h-5 px-1.5 text-[10px] text-zinc-400 hover:text-zinc-100"
                >
                  🎲 Seed
                </Button>
              </div>

              {settings.hairEnable && (
                <div className="space-y-2 pt-1 border-t border-zinc-800/60">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Hair Count</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.hairCount}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={settings.hairCount}
                      onChange={(e) => updateSetting('hairCount', parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Length & Curliness</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.hairLen}px · curl {settings.hairCurl.toFixed(1)}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="range"
                        min="20"
                        max="140"
                        step="5"
                        value={settings.hairLen}
                        onChange={(e) => updateSetting('hairLen', parseFloat(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-100"
                      />
                      <input
                        type="range"
                        min="0.0"
                        max="2.5"
                        step="0.1"
                        value={settings.hairCurl}
                        onChange={(e) => updateSetting('hairCurl', parseFloat(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded appearance-none cursor-pointer accent-zinc-100"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-zinc-400">Opacity</span>
                      <span className="text-xs font-mono text-zinc-200">{settings.hairOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={settings.hairOpacity}
                      onChange={(e) => updateSetting('hairOpacity', parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                    />
                  </div>
                </div>
              )}
            </div>
          </CollapsibleSection>

          {/* Section 6: Transfer Curves & Gammas */}
          <CollapsibleSection
            id="gammas"
            title="Transfer Curves"
            icon={<Sun className="w-3.5 h-3.5" />}
            defaultOpen={false}
            infoTitle="Gamma Transfer Curves"
            infoDescription="Input and output gamma contrast response curves for mapping linear photon density to sRGB displays."
          >
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-zinc-300">Input Image Gamma</span>
                  <span className="text-xs font-mono text-zinc-200">{settings.gammaIn.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="3.0"
                  step="0.05"
                  value={settings.gammaIn}
                  onChange={(e) => updateSetting('gammaIn', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-zinc-300">Noise Gamma</span>
                  <span className="text-xs font-mono text-zinc-200">{settings.gammaNoise.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="3.0"
                  step="0.05"
                  value={settings.gammaNoise}
                  onChange={(e) => updateSetting('gammaNoise', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-zinc-300">Output Display Gamma</span>
                  <span className="text-xs font-mono text-zinc-200">{settings.gammaOut.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.05"
                  value={settings.gammaOut}
                  onChange={(e) => updateSetting('gammaOut', parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-100"
                />
              </div>
            </div>
          </CollapsibleSection>
        </aside>

        {/* Viewport Canvas + Filmstrip Carousel Column */}
        <div className="flex-1 flex flex-col bg-zinc-950 relative overflow-hidden">
          {/* Upper Viewport Canvas */}
          <main
            className="flex-1 relative flex items-center justify-center overflow-hidden bg-black p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files?.length) {
                const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/'));
                files.forEach((file) => {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => addImageToLibrary(img, file.name);
                    img.src = event.target?.result as string;
                  };
                  reader.readAsDataURL(file);
                });
              }
            }}
          >
            {/* Canvas Container */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <canvas
                ref={canvasRef}
                onMouseMove={handleCanvasMouseMove}
                onMouseDown={handleSplitMouseDown}
                onMouseLeave={() => {
                  if (loupeContainerRef.current) loupeContainerRef.current.style.display = 'none';
                }}
                className="max-h-[calc(100vh-210px)] max-w-full object-contain border border-zinc-800/80 cursor-crosshair shadow-2xl"
              />

              {/* Split Screen Divider Handle */}
              {viewMode === 'split' && (
                <div
                  className="absolute top-0 bottom-0 w-px bg-white pointer-events-none z-10"
                  style={{ left: `${splitRatio * 100}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white text-black font-bold text-[10px] flex items-center justify-center shadow-lg">
                    ↔
                  </div>
                </div>
              )}
            </div>

            {/* Floating Loupe Inspector */}
            <div
              ref={loupeContainerRef}
              className="fixed w-36 h-36 rounded-full border border-zinc-100 bg-black pointer-events-none overflow-hidden z-50 shadow-2xl hidden"
            >
              <canvas ref={loupeCanvasRef} width={144} height={144} className="w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4 h-px bg-white/70 absolute" />
                <div className="h-4 w-px bg-white/70 absolute" />
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-black/80 px-1.5 py-0.5 rounded border border-zinc-700 text-white">
                {loupeZoom}x Zoom
              </div>
            </div>
          </main>

          {/* Filmstrip Carousel Dock */}
          <section className="h-30 bg-zinc-900 border-t border-zinc-800 flex flex-col flex-shrink-0 z-20">
            {/* Filmstrip Toolbar */}
            <div className="h-7.5 px-3 flex items-center justify-between border-b border-zinc-800 text-[11px]">
              <div className="flex items-center gap-2.5 font-mono text-zinc-400">
                <span className="text-zinc-200 font-semibold flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> Filmstrip Reel
                </span>
                <span>{images.length} photo{images.length !== 1 ? 's' : ''}</span>
                <span className="text-zinc-700">|</span>
                <button
                  onClick={() => setImages((prev) => prev.map((img) => ({ ...img, selected: true })))}
                  className="hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  Select All
                </button>
                <button
                  onClick={() => setImages((prev) => prev.map((img) => ({ ...img, selected: false })))}
                  className="hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  Deselect All
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copySettingsToSelected}
                  className="h-5.5 px-2 text-[11px] border-zinc-800 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 gap-1"
                >
                  <Copy className="w-3 h-3" /> Copy Settings to Selected
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setImages((prev) => {
                      const filtered = prev.filter((img) => !img.selected);
                      if (!filtered.length) loadSampleImage();
                      else {
                        setActiveImageIndex(0);
                        uploadImageTexture(filtered[0].img);
                      }
                      return filtered;
                    });
                  }}
                  className="h-5.5 px-2 text-[11px] border-zinc-800 bg-zinc-950 hover:bg-red-950/40 text-red-400 hover:text-red-300 gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Remove Selected
                </Button>

                <Button
                  size="sm"
                  onClick={exportBatch}
                  className="h-5.5 px-2 text-[11px] bg-zinc-100 hover:bg-white text-zinc-950 font-semibold gap-1"
                >
                  <FileArchive className="w-3 h-3" /> Export Selected ({selectedCount})
                </Button>
              </div>
            </div>

            {/* Filmstrip Reel Track */}
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-zinc-800">
              {images.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 h-17 bg-black border rounded cursor-pointer flex-shrink-0 overflow-hidden transition-all group ${
                    idx === activeImageIndex
                      ? 'border-white ring-1 ring-white'
                      : 'border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={(e) => {
                      e.stopPropagation();
                      setImages((prev) => {
                        const next = [...prev];
                        next[idx].selected = !next[idx].selected;
                        return next;
                      });
                    }}
                    className="absolute top-1 left-1 z-10 accent-white cursor-pointer"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImages((prev) => {
                        const next = prev.filter((_, i) => i !== idx);
                        if (!next.length) loadSampleImage();
                        else {
                          const newIdx = Math.min(activeImageIndex, next.length - 1);
                          setActiveImageIndex(newIdx);
                          uploadImageTexture(next[newIdx].img);
                        }
                        return next;
                      });
                    }}
                    className="absolute top-1 right-1 w-4 h-4 bg-black/80 text-zinc-400 hover:text-white rounded text-[10px] hidden group-hover:flex items-center justify-center z-10"
                  >
                    ✕
                  </button>

                  <img
                    src={item.thumbUrl}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-opacity ${
                      idx === activeImageIndex ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                    }`}
                  />

                  <span className="absolute bottom-1 left-1 text-[8px] font-mono bg-black/80 px-1 rounded text-zinc-300">
                    {idx + 1}
                  </span>
                </div>
              ))}

              {/* Add Frame Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-16 h-17 bg-zinc-950 border border-dashed border-zinc-800 hover:border-zinc-600 rounded flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-200 transition-colors flex-shrink-0 cursor-pointer text-xs"
              >
                <span className="text-sm font-semibold">+</span>
                <span className="text-[10px]">Add</span>
              </button>
            </div>
          </section>

          {/* Status Bar */}
          <footer className="h-6 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between px-3 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-4">
              <span>Active: <span className="text-zinc-300">{activeItem?.name || 'None'}</span></span>
              <span>Stock: <span className="text-zinc-300">
                {settings.spectralProfile === 0 ? 'Kodak Gold 200' :
                 settings.spectralProfile === 1 ? 'Kodak UltraMax 400' :
                 settings.spectralProfile === 2 ? 'Kodak Ektar 100' :
                 settings.spectralProfile === 3 ? 'Kodak Ektachrome E100' :
                 settings.spectralProfile === 4 ? 'Kodak Portra 400' :
                 settings.spectralProfile === 5 ? 'Kodak Tri-X 400' :
                 settings.spectralProfile === 6 ? 'CineStill 800T' :
                 settings.spectralProfile === 7 ? 'Vision3 500T' :
                 settings.spectralProfile === 8 ? 'Ilford HP5 Plus' : 'Linear Neutral'}
              </span></span>
              <span>Resolution: <span className="text-zinc-300">{activeItem ? `${activeItem.img.width} × ${activeItem.img.height}` : '—'}</span></span>
              <span>Sub-samples: <span className="text-zinc-300">{totalSamples} / frame</span></span>
            </div>
            <div className="flex items-center gap-4">
              <span>GPU Engine: <span className="text-zinc-300">Spectral WebGL 2.0</span></span>
              <span>Render: <span className="text-zinc-300">{renderTime}</span></span>
            </div>
          </footer>
        </div>
      </div>

      {/* Save Preset Dialog */}
      <SavePresetDialog
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveCustomPreset}
        currentSettings={settings}
      />

      {/* Batch Processing Overlay */}
      {batchProgress.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in-0">
          <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-center shadow-2xl">
            <FileArchive className="w-8 h-8 text-zinc-100 mx-auto mb-2 animate-pulse" />
            <h3 className="text-sm font-semibold text-zinc-100 mb-1">Batch Processing Reel...</h3>
            <p className="text-xs text-zinc-400">Rendering photo {batchProgress.current} of {batchProgress.total}</p>

            <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 rounded-full my-4 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-150"
                style={{ width: `${batchProgress.percent}%` }}
              />
            </div>

            <p className="text-[11px] font-mono text-zinc-500 truncate">{batchProgress.filename}</p>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-36 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-2 rounded-md text-xs font-mono shadow-2xl z-50 animate-in fade-in-0 slide-in-from-bottom-2">
          {toastMsg}
        </div>
      )}
    </div>
  );
};

export default FilmGrainLab;
