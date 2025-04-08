import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import useParticleConfig from "./useParticleConfig";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { options: particleConfig } = useParticleConfig();
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    return Promise.resolve();
  };

  const options = useMemo(() => {
    return particleConfig;
  }, [particleConfig]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className=" absolute left-0 top-0 z-[-1]"
      />
    );
  }

  return null;
}
