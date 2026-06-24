"use client";

/**
 * SpoonPOC — Proof of Concept
 *
 * Single birchwood spoon rendered behind the Products hero section.
 * Uses THREE.LatheGeometry (revolution solid) — suitable because a spoon
 * is approximately rotationally symmetric. Bowl is perfectly round, which
 * is imperceptible at background opacity and slow rotation.
 *
 * UPGRADE PATH (Phase 2):
 *   Replace <SpoonGeometry> with:
 *   <useGLTF> loading a real .glb model from /public/models/spoon.glb
 *   Material, lighting, camera, and animation stay identical.
 */

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// ── Procedural birchwood canvas texture ───────────────────────────────────────
// Generates a convincing FSC birchwood grain without any external texture files.
// Replace with useTexture("/textures/birchwood-albedo.jpg") in Phase 2.
function useBirchwoodTexture(size = 512): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas  = document.createElement("canvas");
    canvas.width  = size;
    canvas.height = size;
    const ctx     = canvas.getContext("2d")!;

    // Base birchwood tone — warm light birch
    const baseGrad = ctx.createLinearGradient(0, 0, size, 0);
    baseGrad.addColorStop(0.0,  "#D9A87A");
    baseGrad.addColorStop(0.3,  "#C8946A");
    baseGrad.addColorStop(0.6,  "#D4A07C");
    baseGrad.addColorStop(1.0,  "#C09068");
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, size, size);

    // Primary grain lines — running along the wood length
    for (let i = 0; i < 60; i++) {
      const x         = (i / 60) * size;
      const amplitude = 4 + Math.random() * 8;
      const freq      = 0.005 + Math.random() * 0.008;
      const darkness  = 0.08 + Math.random() * 0.18;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(90, 50, 20, ${darkness})`;
      ctx.lineWidth   = 0.5 + Math.random() * 1.5;
      ctx.moveTo(x, 0);

      for (let y = 0; y <= size; y += 4) {
        const xOffset = Math.sin(y * freq + i * 0.3) * amplitude;
        ctx.lineTo(x + xOffset, y);
      }
      ctx.stroke();
    }

    // Secondary fine grain — adds depth
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * size;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(160, 100, 50, ${0.04 + Math.random() * 0.08})`;
      ctx.lineWidth   = 0.3;
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (Math.random() - 0.5) * 30, size);
      ctx.stroke();
    }

    // Knot hints — subtle dark oval marks
    for (let i = 0; i < 2; i++) {
      const kx = 80 + Math.random() * (size - 160);
      const ky = 80 + Math.random() * (size - 160);
      const grd = ctx.createRadialGradient(kx, ky, 2, kx, ky, 40);
      grd.addColorStop(0,   "rgba(60, 30, 10, 0.35)");
      grd.addColorStop(0.5, "rgba(80, 45, 15, 0.12)");
      grd.addColorStop(1,   "rgba(80, 45, 15, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(kx - 40, ky - 40, 80, 80);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 6); // Tile along length for grain continuity
    return tex;
  }, [size]);
}

// ── Spoon geometry via LatheGeometry ─────────────────────────────────────────
// Profile points define the silhouette of the spoon (right half, rotated around Y).
// X = radius from center axis, Y = position along length.
// Scale: total length ≈ 4.8 units before mesh-level scaling.
//
// PHASE 2 REPLACEMENT: remove this component, use:
//   const { scene } = useGLTF("/models/spoon.glb");
//   return <primitive object={scene} />;
function SpoonGeometry({ material }: { material: THREE.Material }) {
  const geometry = useMemo(() => {
    const profile: THREE.Vector2[] = [
      // Handle tip — thin
      new THREE.Vector2(0.038, 0.00),
      new THREE.Vector2(0.042, 0.30),
      new THREE.Vector2(0.048, 0.80),
      new THREE.Vector2(0.052, 1.30),
      new THREE.Vector2(0.055, 1.80),
      // Handle body — very slight taper
      new THREE.Vector2(0.058, 2.10),
      new THREE.Vector2(0.062, 2.30),
      // Shoulder — handle meets bowl neck
      new THREE.Vector2(0.075, 2.52),
      new THREE.Vector2(0.115, 2.70),
      // Bowl — expands outward
      new THREE.Vector2(0.230, 2.92),
      new THREE.Vector2(0.330, 3.22),
      new THREE.Vector2(0.385, 3.55),
      new THREE.Vector2(0.400, 3.88),
      // Bowl maximum diameter
      new THREE.Vector2(0.395, 4.18),
      // Bowl taper toward tip
      new THREE.Vector2(0.355, 4.42),
      new THREE.Vector2(0.240, 4.62),
      new THREE.Vector2(0.090, 4.75),
      // Bowl tip — close to axis
      new THREE.Vector2(0.000, 4.80),
    ];

    const geo = new THREE.LatheGeometry(profile, 48); // 48 segments = smooth circle
    geo.computeVertexNormals();
    return geo;
  }, []);

  return <mesh geometry={geometry} material={material} />;
}

// ── Birchwood PBR material ─────────────────────────────────────────────────
function useBirchwoodMaterial(opacity: number) {
  const texture = useBirchwoodTexture(512);

  return useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      map:             texture,
      roughness:       0.78,
      metalness:       0.0,
      reflectivity:    0.12,
      clearcoat:       0.08,          // Slight finish on polished wood
      clearcoatRoughness: 0.6,
      transparent:     true,
      opacity,
      side:            THREE.DoubleSide, // Visible from all angles during rotation
    });
  }, [texture, opacity]);
}

// ── Floating animated spoon scene ────────────────────────────────────────────
function FloatingSpoon({ opacity }: { opacity: number }) {
  const spinRef = useRef<THREE.Group>(null);
  const material = useBirchwoodMaterial(opacity);
  const { viewport } = useThree();

  const scale = (viewport.width * 0.62) / 4.8;

  // Rotate around the spoon's OWN long axis (Y in model space) — slow baton spin
  useFrame((_, delta) => {
    if (!spinRef.current) return;
    spinRef.current.rotation.y += delta * 0.05;
  });

  return (
    <Float
      speed={0.6}
      rotationIntensity={0.06}
      floatIntensity={0.3}
    >
      {/* Outer group: orientation only — tilts spoon horizontal, never animated */}
      <group
        rotation={[Math.PI * 0.1, 0, Math.PI / 2]}
        scale={scale}
        position={[0.4, 0.1, 0]}
      >
        {/* Inner group: spins around spoon's local Y (long axis) */}
        <group ref={spinRef}>
          <SpoonGeometry material={material} />
        </group>
      </group>
    </Float>
  );
}

// ── Studio lighting setup ─────────────────────────────────────────────────
// Mimics a product photography light tent:
// - Key light: warm, slightly above and to the left
// - Fill light: cool, opposite side, lower intensity
// - Rim light: behind, highlights the form
function StudioLights() {
  return (
    <>
      {/* Ambient — base illumination, very low */}
      <ambientLight intensity={0.3} color="#FFF8F0" />

      {/* Key light — warm, main source, upper left */}
      <directionalLight
        position={[-3, 4, 3]}
        intensity={2.5}
        color="#FFE8C8"
        castShadow={false}
      />

      {/* Fill light — cooler, right side, low intensity */}
      <directionalLight
        position={[4, 1, 2]}
        intensity={0.7}
        color="#D0E8FF"
      />

      {/* Rim/back light — separates spoon from background */}
      <directionalLight
        position={[0, -2, -4]}
        intensity={0.9}
        color="#FFF4E0"
      />

      {/* Ground bounce — subtle warm fill from below */}
      <pointLight
        position={[0, -3, 2]}
        intensity={0.4}
        color="#D4A870"
      />
    </>
  );
}

// ── Post-processing ────────────────────────────────────────────────────────
function PostFX() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.4}         // Subtle warm glow
        luminanceThreshold={0.7}
        luminanceSmoothing={0.9}
        radius={0.8}
      />
    </EffectComposer>
  );
}

// ── Canvas Scene ──────────────────────────────────────────────────────────
function SpoonScene({ opacity }: { opacity: number }) {
  return (
    <>
      <StudioLights />

      {/* Drei Environment — adds realistic reflections from HDRI */}
      <Environment preset="studio" />

      <Suspense fallback={null}>
        <FloatingSpoon opacity={opacity} />
      </Suspense>

      <PostFX />
    </>
  );
}

// ── Public component ──────────────────────────────────────────────────────
// Props: opacity — 0.0 (invisible) to 1.0 (fully opaque)
//        Evaluation range: 0.3–0.6. Production target: 0.08–0.15
export default function SpoonPOC({ opacity = 0.45 }: { opacity?: number }) {
  // Mobile: disable for performance — show nothing (content renders normally)
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    // Absolutely positioned behind the hero content
    // Parent must be position: relative (set in ProductsClient.tsx wrapper)
    <div
      aria-hidden
      style={{
        position:       "absolute",
        inset:          0,
        zIndex:         0,
        pointerEvents:  "none",
        userSelect:     "none",
      }}
    >
      <Canvas
        camera={{
          fov:      50,
          position: [0, 0, 5],
          near:     0.1,
          far:      100,
        }}
        gl={{
          alpha:            true,   // Transparent canvas bg — page bg shows through
          antialias:        true,
          powerPreference:  "high-performance",
          preserveDrawingBuffer: false,
        }}
        dpr={[1, 1.5]}             // Cap DPR for performance
        frameloop="always"
        style={{ background: "transparent" }}
      >
        <SpoonScene opacity={opacity} />
      </Canvas>
    </div>
  );
}
