"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props: any) {
  const { scene } = useGLTF("/car_engine.glb");
  return <primitive object={scene} {...props} />;
}

function Model2(props: any) {
  const { scene } = useGLTF("/electric_motor.glb");
  return <primitive object={scene} {...props} />;
}

function modelPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-2 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-full mb-4 h-[500px] relative">
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ fov: 60, near: 0.6, far: 1000 }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <color attach="background" args={["#101010"]} />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.6}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage environment={"warehouse"}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">
                Internal Combustion Engine
              </h2>
              <p className="text-gray-400">
                Modelled here is a 3D visualization of a car engine. This model
                (while missing some parts) provides an idea of how complicated
                and how many moving part there are in an engine. They are very
                complicated and require extensive knowhow and skills to maintain
                and repair.
              </p>
              <p className="text-gray-500">Model Credit: https://sketchfab.com/3d-models/car-engine-d440e8b6ec914b17b144a241ddbfa136</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-full mb-4 h-[500px] relative">
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ fov: 60 }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <color attach="background" args={["#101010"]} />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.4}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage environment={"warehouse"}>
                    <Model2 scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">Electric motor</h2>
              <p className="text-gray-400">
                In comparison, the electric motor is very simple to maintain as
                it only has one moving part. While in theory this makes them
                easier to work on, many manufacturers are using the safety
                aspect and risk of electrocution to make them unservicable
                unless you specifically go to the dealer who made your car. This
                is a separate issue that could be discussed at length (right to
                repair) but in theory they are much easier to work on.
              </p>
              <p className="text-gray-500">Model Credit: https://sketchfab.com/3d-models/electric-motor-19d028eb4e504314bf909a381b6796eb</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">Electric Motor</h2>
              <div
                className="text-gray-400 text-left mx-auto"
                style={{ maxWidth: "600px" }}
              >
                Key features and advantages of electric motors include:
                <ul className="list-disc pl-6 space-y-2">
                  <li>High efficiency and reliability</li>
                  <li>Lower operating costs due to fewer moving parts</li>
                  <li>Environmentally friendly with zero emissions</li>
                  <li>Quiet operation compared to combustion engines</li>
                  <li>Instant torque and smooth acceleration</li>
                  <li>Reduced maintenance needs</li>
                  <li>
                    Versatility in various applications, from vehicles to
                    industrial machinery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">Electric Motor</h2>
              <div
                className="text-gray-400 text-left mx-auto"
                style={{ maxWidth: "600px" }}
              >
                Key features and advantages of electric motors include:
                <ul className="list-disc pl-6 space-y-2">
                  <li>High efficiency and reliability</li>
                  <li>Lower operating costs due to fewer moving parts</li>
                  <li>Environmentally friendly with zero emissions</li>
                  <li>Quiet operation compared to combustion engines</li>
                  <li>Instant torque and smooth acceleration</li>
                  <li>Reduced maintenance needs</li>
                  <li>
                    Versatility in various applications, from vehicles to
                    industrial machinery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default modelPage;
