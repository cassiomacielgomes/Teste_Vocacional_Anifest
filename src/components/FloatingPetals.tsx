export function FloatingPetals() {
  const petals = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {petals.map((_, i) => {
        const left = (i * 53) % 100;
        const delay = (i * 0.7) % 8;
        const duration = 8 + (i % 5) * 2;
        const size = 8 + (i % 4) * 4;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-sakura/70 blur-[1px]"
            style={{
              left: `${left}%`,
              top: `-5%`,
              width: size,
              height: size,
              animation: `float ${duration}s ease-in-out ${delay}s infinite, sparkle 3s ease-in-out ${delay}s infinite`,
              transform: `translateY(${(i * 47) % 110}vh)`,
            }}
          />
        );
      })}
    </div>
  );
}
