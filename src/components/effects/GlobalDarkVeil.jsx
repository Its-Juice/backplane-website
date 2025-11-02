import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';
import './GlobalDarkVeil.css';

const vertex = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragment = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;

float random(vec2 st){return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);}
float noise(vec2 st){vec2 i=floor(st);vec2 f=fract(st);float a=random(i);float b=random(i+vec2(1.,0.));float c=random(i+vec2(0.,1.));float d=random(i+vec2(1.,1.));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}

void main(){
  vec2 st=gl_FragCoord.xy/uResolution.xy;
  float t=uTime*0.1;
  float n=noise(st*10.0+t);
  float s=sin(st.y*100.0+t*10.0)*0.03;
  vec3 color=vec3(0.05,0.1,0.15)+vec3(n*0.15+s*0.1);
  gl_FragColor=vec4(color,1.0);
}
`;

export default function GlobalDarkVeil() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas
    });
    const gl = renderer.gl;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      program.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);
    resize();
    const start = performance.now();
    let frame;
    const loop = () => {
      program.uniforms.uTime.value = (performance.now() - start) / 1000;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={ref} className="global-darkveil" />;
}
