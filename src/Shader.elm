module Shader exposing (Vertex, fragmentShader, vertexShader)

import Math.Vector2 as Vector2 exposing (vec2)
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import WebGL exposing (Mesh, Shader)


type alias Vertex =
    { position : Vec3
    }


type alias Uniforms =
    { time : Float
    , speed : Float
    , distance : Float
    , resolution : Vector2.Vec2
    , xPos : Float
    , targetXPos : Float
    }


vertexShader : WebGL.Shader Vertex Uniforms { vFragCoord : Vector2.Vec2 }
vertexShader =
    [glsl|
        precision mediump float;
        attribute vec3 position;
        varying vec2 vFragCoord;
        void main () {
            gl_Position = vec4(position, 1.0);
            vFragCoord = position.xy;
        }
    |]


fragmentShader : WebGL.Shader {} Uniforms { vFragCoord : Vector2.Vec2 }
fragmentShader =
    [glsl|
        precision mediump float;
        const float PI = 3.14159265;
        const float PHI = (sqrt(5.)*0.5 + 0.5);
        const float PRECISION = 1000.;
        const int MAX_ITERATIONS = 120;
        const float MAX_DIST = 10.;
        const float EPSILON = (1. / PRECISION + 0.0008);
        varying vec2 vFragCoord;
        uniform float time;
        uniform float speed;
        uniform float distance;
        uniform float xPos;
        uniform float targetXPos;
        uniform vec2 resolution;
        const vec3 purple = normalize(vec3(0.298, 0.176, 0.459));
        const vec3 pink = normalize(vec3(250.0, 112.0, 154.0));

        // Maximum/minumum elements of a vector
        float vmax(vec2 v) {
            return max(v.x, v.y);
        }

        float vmax(vec3 v) {
            return max(max(v.x, v.y), v.z);
        }

        float vmax(vec4 v) {
            return max(max(v.x, v.y), max(v.z, v.w));
        }

        float fSphere(vec3 p, float r) {
            return length(p) - r;
        }

        float fOpUnionRound(float a, float b, float r) {
            vec2 u = max(vec2(r - a,r - b), vec2(0));
            return max(r, min (a, b)) - length(u);
        }



        void pR(inout vec2 p, float a) {
            p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
        }

        float fBox2Cheap(vec2 p, vec2 b) {
            return vmax(abs(p)-b);
        }

        float fGDF(vec3 p, float r, int begin, int end) {
            vec3 GDFVectors[19];
            GDFVectors[0] = vec3(1., 0., 0.);

            GDFVectors[1] = vec3(0., 1., 0.);
            GDFVectors[2] = vec3(0., 0., 1.);

            GDFVectors[3] = normalize(vec3(1., 1., 1. ));
            GDFVectors[4] = normalize(vec3(-1., 1., 1.));
            GDFVectors[5] = normalize(vec3(1., -1., 1.));
            GDFVectors[6] = normalize(vec3(1., 1., -1.));

            GDFVectors[7] = normalize(vec3(0., 1., PHI+1.));
            GDFVectors[8] = normalize(vec3(0., -1., PHI+1.));
            GDFVectors[9] = normalize(vec3(PHI+1., 0., 1.));
            GDFVectors[10] = normalize(vec3(-PHI-1., 0., 1.));
            GDFVectors[11] = normalize(vec3(1., PHI+1., 0.));
            GDFVectors[12] = normalize(vec3(-1., PHI+1., 0.));

            GDFVectors[13] = normalize(vec3(0., PHI, 1.));
            GDFVectors[14] = normalize(vec3(0., -PHI, 1.));
            GDFVectors[15] = normalize(vec3(1., 0., PHI));

            float d = 0.;

            for (int i = 0; i <= 15; ++i) {
                if (i >= begin && i < end) {
                    d = max(d, abs(dot(p, GDFVectors[i])));
                }
            }

            return d - r;
        }

        float fTriPrism(vec3 p, vec2 h)
        {
            const float k = sqrt(3.0);
            h.x *= 0.5*k;
            p.xy /= h.x;
            p.x = abs(p.x) - 1.0;
            p.y = p.y + 1.0/k;
            if( p.x+k*p.y>0.0 ) p.xy=vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
            p.x -= clamp( p.x, -2.0, 0.0 );
            float d1 = length(p.xy)*sign(-p.y)*h.x;
            float d2 = abs(p.z)-h.y;
            return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);
        }

        float rand (in vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
            vec2 u = smoothstep(0.,1.,f);
            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void pp(inout vec3 c, vec2 uv)
        {
            c = clamp(c, 0.02, 1.);
            c -= 0.02;
            c *= 1.1;
            c = sqrt(c);
            c = c*c*(2.5-1.45*c*c); // contrast
            c = pow(c, vec3(1.0,0.96,1.0)); // soft green
            c *= vec3(1.08,0.99,0.99); // tint red
            c.b = (c.b+0.05)/1.05; // bias blue
            c = 0.06 + (c * 0.9);
            //c -= smoothstep(0.55, 1.5, abs(uv.x)) * 0.1; // vignette x
            //c -= smoothstep(0.17, 0.7, abs(uv.y)) * 0.1; // vignette y
            //c -= step(0.35, abs(uv.y)); // letterbox y
            c += rand(uv.xy + time) * 0.02; // noise

            c /= 1. + 1. / time;
        }

        float glass(float x, float sharpness) {
            return (1. / max(0., x)) / (sharpness * 100.);
        }

        float lightness(float df, float density, float sharpness)
        {
            return min(1., glass(df, sharpness)) * density * (1. + sharpness / 10.) * (1. + (PRECISION / 500.)) * 0.3;
        }

        void add(inout float d, inout vec3 c, float d2, vec3 color, float density, float sharpness)
        {
            d = min(d, d2);
            c += lightness(d2, density, sharpness) * color;
        }

        float shell(float d)
        {
            return max(-d, d);
        }

        float fCylinder(vec3 p, float r, float height) {
            float d = length(p.xz) - r;
            d = max(d, abs(p.y) - height);
            return d;
        }

        vec2 pMod2(inout vec2 p, vec2 size) {
            vec2 c = floor((p + size*0.5)/size);
            p = mod(p + size*0.5,size) - size*0.5;
            return c;
        }

        // Repeat the domain only in positive direction. Everything in the negative half-space is unchanged.
        float pModSingle1(inout float p, float size) {
            float halfsize = size*0.5;
            float c = floor((p + halfsize)/size);
            if (p >= 0.)
                p = mod(p + halfsize, size) - halfsize;
            return c;
        }

        float pMod1(inout float p, float size) {
            float halfsize = size*0.5;
            float c = floor((p + halfsize)/size);
            p = mod(p + halfsize, size) - halfsize;
            return c;
        }

        // Repeat around the origin by a fixed angle.
        // For easier use, num of repetitions is use to specify the angle.
        float pModPolar(inout vec2 p, float repetitions) {
            float angle = 2.*PI/repetitions;
            float a = atan(p.y, p.x) + angle/2.;
            float r = length(p);
            float c = floor(a/angle);
            a = mod(a,angle) - angle/2.;
            p = vec2(cos(a), sin(a))*r;
            // For an odd number of repetitions, fix cell index of the cell in -x direction
            // (cell index would be e.g. -5 and 5 in the two halves of the cell):
            if (abs(c) >= (repetitions/2.)) c = abs(c);
            return c;
        }

        void addScenery1(vec3 p, float n, inout vec3 c, inout float d)
        {
            //p.z -= 110.;

            p.x += 2.0;
            //p.z += distance;
            p.x += sin(p.z * 0.1) * 0.5;

            pMod2(p.xz, vec2(10.0));
            p.x = -p.x;
            //pModSingle1(p.x, 2.0);

            float shapeA = fCylinder(p, 0.1, 100.0);
            add(d, c, shapeA, pink, 1., 0.1);
        }

        void addScenery2(vec3 p, float n, inout vec3 c, inout float d)
        {
            //p.z -= 195.;

            p.x -= 2.0;
            //p.z += distance;
            p.x += sin(p.z * 0.1) * 0.5;

            pModSingle1(p.z, 10.0);
            //pModSingle1(p.x, 2.0);

            float shapeA = fCylinder(p, 0.1, 100.0);
            add(d, c, shapeA, purple.grr, 1., 0.1);
        }

        void addScenery3(vec3 p, float n, inout vec3 c, inout float d, float cell, vec3 color)
        {
            p.x += p.y * 1.2;

            //pR(p.xy, 1.57);
            pR(p.yz, 1.57);

            //float cell = pMod1(p.x, 2.0);

            //p.z += distance;
            //p.x += sin(p.z * 1.0 + n) * 0.5;
            //p.y += tan(p.z * 0.004 + n);
            p.x += sin(p.z * 1.0 + n + cell * 1.) * 0.4;
            //p.y += cos(p.z * 1.0 + n + cell * 0.8) * 0.15;
            //p.y += sin(p.z);

            float shapeA = fCylinder(p.xzy, 0.01, 100.0);

            //shapeA *= step(abs(cell), 2.);

            add(d, c, shapeA, color, 35., 0.5);
        }

        void scene3(vec3 p, float n, inout vec3 c, inout float d)
        {
            //addScenery1(p, n, c, d);
            //addScenery2(p, n, c, d);
            addScenery3(p, n, c, d, 0., pink);
            addScenery3(p, n, c, d, 2., pink.grr);
            //addScenery3(p, n, c, d, 1., pink.rgg);
        }

        // Cheap Box: distance to corners is overestimated
        float fBoxCheap(vec3 p, vec3 b) { //cheap box
            return vmax(abs(p) - b);
        }

        float fBox2(vec2 p, vec2 b) {
            vec2 d = abs(p) - b;
            return length(max(d, vec2(0.))) + vmax(min(d, vec2(0.)));
        }

        float s4exp(float off, float n)
        {
            return smoothstep(off, 0., n) / n * 0.1 + 
                smoothstep(off, 0., mod(n, 6.)) * smoothstep(0., 6., mod(n, 6.)) * 0.1 + 
                0.2 / (10. + mod(n, 1.) * 40.);
        }

        // Box: correct distance to corners
        float fBox(vec3 p, vec3 b) {
            vec3 d = abs(p) - b;
            return length(max(d, vec3(0.))) + vmax(min(d, vec3(0.)));
        }

        float fDodecahedron(vec3 p, float r) {
            return fGDF(p, r, 13, 18);
        }

        void scene7(vec3 p, float n, inout vec3 c, inout float d) {
            p.z -= sin(n * 0.3) * 0.5 + 0.2;

            vec3 p1 = p;
            pR(p1.xy, n * 0.1);
            add(d, c, fBox2(p1.xy + vec2(-0.0001, -0.001), vec2(0., 0.)), purple.grb, 10., 10.);
            // add(d, c, fBox2Cheap(p.xy + vec2(0., -0.25), vec2(0.25, 0.)), purple.grb, 2., 10.);


            // pR(p.yz, n);
            // add(d, c, fCircle(p, 0.3) - 0.01, purple, 2., 10.);

            pR(p.xy, n * 0.2 + sin(n) * 0.1);
            float c1 = pModPolar(p.xy, 6.);

            p.x -= 0.3 + sin(c1) * 0.1;
            p.z += tan(n + c1) * 0.2;
            pR(p.zy, PI / 2.);
            pR(p.xz, n * 0.6 + sin(n + c1) * 0.1 + c1);
            // add(d, c, shell(fSphere(p, 0.08)), purple, 1., 2.);
            // pR(p.yz, sin(n * 0.5));
            // pR(p.yz, -0.5);
            pModPolar(p.xz, 3.);
            pR(p.xy, tan(n + c1 + 0.3));
            add(d, c, shell(fTriPrism(p, vec2(0.06, 0.007))), purple, 8., 5.);
        }

        float point(vec3 p, float r, float s) {
            return min(1., (1. / length(p)) * r) * s;
        }

        vec4 scene(vec3 p)
        {
            float n = time * 0.5;
            vec3 c = vec3(0.);
            float d = 1. / 0.;

            scene3(p, n, c, d);
            
            return vec4(c, d);
        }

        vec3 origin()
        {
            return vec3(0., 0., 5.);
        }

        vec3 target()
        {
            return vec3(0., 0., 0.);
        }

        vec3 normalAt(in vec3 p)
        {
            float c = scene(p).w;
            vec2 nOfs = vec2(0.001, 0.0);
            return normalize(vec3(scene(p + nOfs.xyy).w, scene(p + nOfs.yxy).w, scene(p + nOfs.yyx).w) - c);
        }

        vec3 march(vec3 pos, vec3 rayDir)
        {
            vec3 c = vec3(0.);
            int reflections = 0;
            
            for(int i = 0; i < MAX_ITERATIONS; i++)
            {
                vec4 s = scene(pos);
                float d = max(s.w, (1. + (0.1 * pos.z)) / PRECISION);
                
                pos += rayDir * d;
                c += s.rgb / (20. + PRECISION);
                
                if(d < EPSILON && reflections < 1 )
                {
                    reflections++;

                    vec3 normal = normalAt(pos - rayDir * EPSILON * 2.);
                    vec3 rayDir = reflect(rayDir, normal);
                    vec3 pos = pos;

                    for(int i = 0; i < MAX_ITERATIONS; i++)
                    {
                        vec4 s = scene(pos);
                        float d = max(s.w, (1. + (0.1 * pos.z)) / PRECISION);
                        
                        pos += rayDir * d;
                        c += (s.rgb / PRECISION) * 0.3;

                        if(d > MAX_DIST)
                            break;
                    }
                }
                else if(d > MAX_DIST)
                    break;
            }

            return c;
        }

        void main()
        {
            vec2 uv = vFragCoord;
            uv.x *= resolution.x / resolution.y;
            uv /= 2.;

            vec3 origin = origin();
            vec3 upDirection = vec3(0., 1.0, 0.);
            vec3 cameraDir = normalize(target() - origin);
            vec3 cameraRight = normalize(cross(upDirection, origin));
            vec3 cameraUp = cross(cameraDir, cameraRight);
            vec3 rayDir = normalize(cameraRight * uv.x + cameraUp * uv.y + cameraDir);

            vec3 c = march(origin, rayDir);
            pp(c, uv);

            float a = (c.r + c.g + c.b) / 2.;
            //vec3 c = vec3(0.0, 0.0, 0.0);
        
            gl_FragColor = vec4(c, a);
        }
    |]
