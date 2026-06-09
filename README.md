# VR-Spiel 🎮

An immersive VR game developed with **Three.js** for the **Oculus VR headset**, created as a university project in the field of Human-Computer Interaction (HCI).

## 📋 Project Overview

**VR-Spiel** is an innovative Virtual Reality game where the player must shoot down dynamic mines approaching them using a laser pointer. The project demonstrates the practical application of VR input methods and immersive environments in interactive gaming.

The game was designed to maximize the potential of VR inputs and immersive environments while creating an exciting gaming experience.

## 🎮 Game Mechanics

- **VR Immersion**: Fully immersive experience with Oculus VR headset
- **Laser Pointer Control**: Aim with your controller and shoot down mines
- **Dynamic Enemies**: Mines (spheres with rotating warheads) fly towards the player
- **Raycasting**: Precise collision detection using 3D raycasting
- **Win/Loss Conditions**: Win by destroying all mines, lose if they hit you
- **Atmospheric Graphics**: Color-coded feedback (Blue = Normal, Green = Won, Red = Lost)

## 🛠️ Technology

- **Language**: JavaScript
- **3D Engine**: Three.js Module (r128 or later)
- **VR Standard**: WebXR API
- **Platform**: Web-based, optimized for Oculus VR devices
- **Graphics**: WebGL with Shadow Mapping
- **Input Method**: VR Controller (Trigger for shooting/grabbing)

## 📱 Requirements

- **VR Hardware**: Oculus-compatible VR headset (Oculus Quest, Rift, etc.)
- **Browser**: WebXR-capable browser (Chrome, Edge, Firefox Reality)
- **WebXR Support**: Browser with `navigator.xr` API
- **WebGL 2.0**: Modern graphics support

## 🚀 Getting Started

1. Clone the project:
```bash
git clone https://github.com/Nikolai8/VR-Spiel.git
cd VR-Spiel
```

2. Run a local server (required for WebXR):
```bash
# Example with Python 3
python -m http.server 8000

# Or with Node.js http-server
npx http-server
```

3. Open in browser: `http://localhost:8000`

4. Press the "ENTER VR" button and put on your VR headset

5. Use the controller trigger to shoot down the mines and win!

## 🎯 Game Elements

### Mines
- **Appearance**: Spheres with rotating warheads (cone structures)
- **Behavior**: Randomly positioned, flying towards the player
- **Destruction**: Via laser pointer when trigger is pressed

### Laser Pointer
- **Origin**: Position and orientation of the VR controller
- **Representation**: Yellow line from controller to target position
- **Range**: 5 units or until reaching the nearest mine

### Game Progress
- **Victory**: All mines destroyed (array)
- **Defeat**: A mine hits the player
- **Status**: Color-coded screen backgrounds indicate game status

## 📂 Project Structure

```
VR-Spiel/
├── index.html          # HTML entry point
├── app.js              # Main application, Three.js import and setup
├── vr.js               # WebXR renderer and VR session management
├── ray_demo.js         # Game logic, raycast and mine spawning
├── basics.js           # Scene and camera setup
├── geo.js              # Mesh creation (geometries)
├── style.css           # Styling
├── three.module.js     # Three.js library (v128+)
├── LICENSE             # MIT License with Educational Use Only
└── README.md           # This file
```

## 🎓 Context

This project was developed as part of a university project in the field of **Human-Computer Interaction (HCI)** with a focus on:

- **3D Graphics Programming** with Three.js
- **VR Development** with WebXR API
- **Interactive Game Mechanics** in virtual environments
- **Raycasting and Collision Detection** in 3D
- **User Experience** for VR interfaces
- **Immersive Gaming Experience** design

## 🔧 Technical Details

### WebXR Integration
- Uses `navigator.xr.requestSession('immersive-vr')` for VR session
- Supports optional features: 'local-floor', 'bounded-floor'
- Gamepad input for controller buttons and trigger

### 3D Rendering
- WebGL renderer with anti-aliasing and shadow mapping
- PCF shadows for realistic lighting
- Sky-blue background (#73C2FB) with dynamic color changes

### Raycast System
- Precise raycasting from controller for target detection
- Dynamic beam length calculation
- Intersection testing with mines array

### Game Logic
- Automatic mine approach with target tracking
- Trigger-based grabbing and shooting
- Matrix transformation for VR positioning

## 🎯 Project Goals

The project served the practical exploration and implementation of:
- Effective 3D rendering techniques with Three.js
- WebXR standard for immersive web experiences
- VR gameplay mechanics and interaction design
- Real-time raycast-based target acquisition
- Immersive user experience design for VR devices

## 📝 License

This project is licensed under the **MIT License with Educational Use Only Clause**.

**Important**: 
- ✅ Use, modification, and learning for **educational purposes allowed**
- ❌ **Commercial use prohibited** (without explicit permission)
- ❌ **Copy-paste as your own project/homework prohibited**
- ✅ **Attribution required** when using

See [LICENSE](LICENSE) for full details.

## 🤝 Contributing

Questions or suggestions for improvements? Feel free to create issues or start discussions.

---

## ⚠️ WebVR Deprecation Notice

**WebVR is Deprecated!**

WebVR has been replaced by the **WebXR Device API**, which has wider support, more features, better performance, and supports both VR and AR. This project uses the **WebXR API** (not the deprecated WebVR).

> This page is preserved as a historical reference, but WebVR is no longer relevant. For modern VR web development, visit [immersiveweb.dev](https://immersiveweb.dev) instead!

**What is WebXR?**

WebXR is the modern open specification that enables VR and AR experiences in the browser. It offers better performance, more features, and broader support than the deprecated WebVR standard.

---

**Have fun playing in VR! 🥽🎮**

*Developed as an HCI university project*
